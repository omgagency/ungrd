import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { faSearch, faEye, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/core/sortable.directive';
import { Convocatoria } from 'src/app/core/convocatorias/convocatoria';
import { ConvocatoriasService } from 'src/app/core/convocatorias/convocatorias.service';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.scss']
})
export class ConvocatoriasComponent implements OnInit {

  faSearch = faSearch;
  faEye = faEye;
  faCheck = faCheck;
  faTimes = faTimes;

  convocatorias$: Observable<Convocatoria[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;


  constructor(public service: ConvocatoriasService) {
    this.convocatorias$ = service.convocatorias$;
    service.convocatorias$.subscribe((_res) => {
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
