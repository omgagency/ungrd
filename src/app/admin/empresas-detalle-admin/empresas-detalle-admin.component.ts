import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList} from '@angular/core';

import { Empresa } from 'src/app/core/empresas/empresa';
import { EmpresasService } from 'src/app/core/empresas/empresas.service';


import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-empresas-detalle-admin',
  templateUrl: './empresas-detalle-admin.component.html',
  styleUrls: ['./empresas-detalle-admin.component.sass']
})
export class EmpresasDetalleAdminComponent implements OnInit {

  

  @ViewChild('labelImport') labelImport: ElementRef;

  @ViewChildren('labelUpload') labelUpload: QueryList<ElementRef>;

  @ViewChildren('labelUploadPr') labelUploadPr: QueryList<ElementRef>;

  public empresaForm: FormGroup;

  constructor(public service: EmpresasService, private fb: FormBuilder, private http:HttpClient) {
   
  }


  save(form) {


    if (form.valid == true) {

      console.log(form.value);
      this.http.post("/api/v1",form.value)
      .subscribe(
          (val) => {
              console.log("POST call successful value returned in body", 
                          val);
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log("The POST observable is now completed.");
      });


    } else {
      this.markElements(this.empresaForm.controls);

    }


  }

  markElements(controls) {

    var conta = 0;

    for (const key in controls) {

        conta++;




      if (controls.hasOwnProperty(key)) {


        const element = controls[key];
        if (element.controls) {
          this.markElements(element.controls)
        }
        element.markAsDirty();

        
        
      }
    }
  }

   ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.empresaForm = this.fb.group({

    nombre: [, Validators.required],
    ciudad: [, Validators.required],
    fecha: [, Validators.required],
    producto: [, Validators.required],
    cantidad: [, Validators.required],
    correo: [, Validators.required],
    telefono: [, Validators.required],
    contacto: [, Validators.required],


    });
  
  }

}
