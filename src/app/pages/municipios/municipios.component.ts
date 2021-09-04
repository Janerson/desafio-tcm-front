import { Municipio } from './../../model/municipo.model';
import { Page } from './../../model/page.model';
import { MunicipiosService } from './../../services/municipios.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,interval } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { distinctUntilChanged, debounce, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss'],
})
export class MunicipiosComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public municipios: Page<Municipio>;
  public formulario: FormGroup;

  constructor(
    private service: MunicipiosService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.listarMunicipios();
    this.onValueChanged()
  }

  listarMunicipios(page = 0, textoPesquia?: string) {
    this.subscription = this.service
      .listarMunicipios(page, textoPesquia)
      .subscribe((res) => (this.municipios = res));
  }

  private initForm() {
    this.formulario = this.fb.group({
      descricao: [null, []],
    });
  }

  pageChanged(event: any): void {
    this.listarMunicipios(
      event.page - 1,
      this.formulario.get('descricao').value
    );
  }

  acessar(codigoInge) {
    this.router.navigate(['/legislacao', codigoInge]);
  }

  onValueChanged() {
    this.formulario
      .get('descricao')
      .valueChanges.pipe(
        distinctUntilChanged(),
        debounce(() => interval(250)),
        switchMap((value: any) => this.service.listarMunicipios(0, value))
      )
      .subscribe(
        (result: any) => {
          this.municipios = result;
        },
        (error: { message: string }) => console.log(error.message)
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

