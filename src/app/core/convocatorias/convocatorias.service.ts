import { Injectable, PipeTransform } from '@angular/core';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { Convocatoria } from './convocatoria';
import { SortColumn, SortDirection } from '../sortable.directive';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { CONVOCATORIAS } from './convocatorias';

interface SearchResult {
  convocatorias: Convocatoria[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(convocatorias: Convocatoria[], column: SortColumn, direction: string): Convocatoria[] {
  if (direction === '' || column === '') {
    return convocatorias;
  } else {
    return [...convocatorias].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(convocatoria: Convocatoria, term: string, pipe: PipeTransform) {
  return convocatoria.producto.toLowerCase().includes(term.toLowerCase())
    || convocatoria.fechaFin.toLowerCase().includes(term.toLowerCase())
    || convocatoria.tipoContrato.toLowerCase().includes(term.toLowerCase())
    || convocatoria.formaPago.toLowerCase().includes(term.toLowerCase())
    || convocatoria.plazo.toLowerCase().includes(term.toLowerCase())
    || convocatoria.periodoEntrega.toLowerCase().includes(term.toLowerCase())
    || convocatoria.riesgos.toLowerCase().includes(term.toLowerCase())
    || convocatoria.lugar.toLowerCase().includes(term.toLowerCase());
}

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _convocatorias$ = new BehaviorSubject<Convocatoria[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._convocatorias$.next(result.convocatorias);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get convocatorias$() { return this._convocatorias$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let convocatorias = sort(CONVOCATORIAS, sortColumn, sortDirection);

    // 2. filter
    convocatorias = convocatorias.filter(convocatoria => matches(convocatoria, searchTerm, this.pipe));
    const total = convocatorias.length;

    // 3. paginate
    convocatorias = convocatorias.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ convocatorias, total });
  }
}
