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

  listaProductos = [
    'Bata manga larga antifluído o laminada',
    'Gorros',
    'Polainas',
    'Gafas',
    'Guantes de Vinilo',
    'Guantes estériles (Guantes de latex estériles)',
    'Guantes no estériles (Guantes de latex no estériles)',
    'Tapabocas (Mascarilla Quirúrgica)',
    'Tapabocas N95'
  ]

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

    get productos(): FormArray { return this.empresaForm.get('productos') as FormArray; }

  addProducto() {
    this.productos.push(this.createProducto());
  }

  createProducto(): FormGroup {
    return this.fb.group({
      producto: [this.listaProductos[0], Validators.required],
      cantidad: [, Validators.required],
      lote: [, Validators.required],
    });
  }

  delete(i) {
    this.productos.removeAt(i);
  }


  initForm() {
    this.empresaForm = this.fb.group({

    nombre: [, Validators.required],
    ciudad: [, Validators.required],
    fecha: [, Validators.required],
    producto: [, Validators.required],
    cantidad: [, Validators.required],
    email: [, Validators.required],
    telefono: [, Validators.required],
    contacto: [, Validators.required],
     mercantilFile: [, Validators.required],
     rupFile: [, Validators.required],
     fotocopiaFile: [, Validators.required],
     nombrecontacto: [, Validators.required], 
     productos: this.fb.array([])


    });


    this.addProducto();
  
  }


    onFileChange(files: FileList, index) {
    this.labelUpload.toArray()[index].nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
  }

  onFileChangePr(files: FileList, index) {
    this.labelUploadPr.toArray()[index].nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
  }



}
