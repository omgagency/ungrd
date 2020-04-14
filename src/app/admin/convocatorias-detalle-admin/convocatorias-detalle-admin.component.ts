import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList} from '@angular/core';
import { Convocatoria } from 'src/app/core/convocatorias/convocatoria';
import { ConvocatoriasService } from 'src/app/core/convocatorias/convocatorias.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-convocatorias-detalle-admin',
  templateUrl: './convocatorias-detalle-admin.component.html',
  styleUrls: ['./convocatorias-detalle-admin.component.sass']
})
export class ConvocatoriasDetalleAdminComponent implements OnInit {



  @ViewChild('labelImport') labelImport: ElementRef;

  @ViewChildren('labelUpload') labelUpload: QueryList<ElementRef>;

  @ViewChildren('labelUploadPr') labelUploadPr: QueryList<ElementRef>;

  public convocatoriaForm: FormGroup;

  constructor(public service: ConvocatoriasService, private fb: FormBuilder, private http:HttpClient) {
    
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
      this.markElements(this.convocatoriaForm.controls);

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
    this.convocatoriaForm = this.fb.group({
      nombre: [, Validators.required],
      producto: [, Validators.required],
      diaFinalizacion: [, Validators.required],
      mesFinalizacion: [, Validators.required],
      anoFinalizacion: [, Validators.required],
      tipoContrato: [, Validators.required],
      formaPago: [, Validators.required],
      diaPlazo: [, Validators.required],
      mesPlazo: [, Validators.required],
      anoPlazo: [, Validators.required],
      periodoEntrega: [, Validators.required],
      terminosFile: [, Validators.required],
      LugarEntrega: [, Validators.required]

    });
  
  }

}
