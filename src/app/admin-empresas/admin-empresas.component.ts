import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-empresas',
  templateUrl: './admin-empresas.component.html',
  styleUrls: ['./admin-empresas.component.scss']
})
export class AdminEmpresasComponent implements OnInit {

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
