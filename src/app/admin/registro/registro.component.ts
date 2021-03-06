import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { faEnvelope, faEye, faCheck, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Empresa } from 'src/app/core/empresas/empresa';
import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/core/sortable.directive';
import { EmpresasService } from 'src/app/core/empresas/empresas.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  faEnvelope = faEnvelope;
  faEye = faEye;
  faCheck = faCheck;
  faTimes = faTimes;
  faSearch = faSearch;

  empresas$: Observable<Empresa[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;


  constructor(public service: EmpresasService) {
    this.empresas$ = service.empresas$;
    service.empresas$.subscribe((_res) => {
      console.log(_res);
    });
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  ngOnInit(): void {
  }

}
