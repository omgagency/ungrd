import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('labelImport') labelImport: ElementRef;

  @ViewChildren('labelUpload') labelUpload: QueryList<ElementRef>;

  @ViewChildren('labelUploadPr') labelUploadPr: QueryList<ElementRef>;

  registerForm: FormGroup;





  proveedores = [
    'Proveedor Nacional',
    'Proveedor Internacional',
  ];

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

  ciudades = [
    'Medellín',
    'Cali',
    'Bogotá',
    'Barranquilla',
    'Bucaramanga'
  ]

  constructor(private fb: FormBuilder, private http:HttpClient) { }



  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      tipoProveedor: [this.proveedores[0], Validators.required],
      nombre: [, Validators.required],
      mercantilFile: [, Validators.required],
      nombrecontacto: [, Validators.required],
      telefono: [, Validators.required],
      email: [, Validators.required],
      fotocopiaFile: [, Validators.required],
      ciudadEntrega: [, Validators.required],
      paisOrigen: [, Validators.required],
      rutFile: [, Validators.required],
      parafiscalFile: [, Validators.required],
      rupFile: [, Validators.required],
      productos: this.fb.array([]),
    });
    this.onChange(null);
    this.addProducto();

     this.disabled(['paisOrigen']);
  }

  get productos(): FormArray { return this.registerForm.get('productos') as FormArray; }


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

  save(form) {

    if (form.valid) {
      console.log(form.value);






    } else {
      this.markElements(this.registerForm.controls);

    }

    this.http.post("/api/v1",form.valid)
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


  }

  markElements(controls) {
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const element = controls[key];
        if (element.controls) {
          this.markElements(element.controls)
        }
        element.markAsDirty();
        
      }
    }
  }

  enabled(controles: Array<string>) {
    controles.forEach(control => {
      this.registerForm.get(control).enable();
      this.registerForm.get(control).setValidators(Validators.required);
    });
  }

  disabled(controles: Array<string>) {
    controles.forEach(control => {
      this.registerForm.get(control).disable();
      this.registerForm.get(control).setValidators(Validators.nullValidator);
    });
  }

  onChange(event) {
    switch (event) {
      case this.proveedores[0]:

        this.enabled(['ciudadEntrega','rutFile','parafiscalFile']);
        this.disabled(['paisOrigen']);


        document.getElementById('info1').style.display='block';
        document.getElementById('info2').style.display='none';

        break;
      case this.proveedores[1]:

        this.disabled(['ciudadEntrega','rutFile','parafiscalFile']);
        this.enabled(['paisOrigen']);

        document.getElementById('info1').style.display='none';
        document.getElementById('info2').style.display='block';

        

        break;
    }
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
