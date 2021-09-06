import { Page } from './../../../model/page.model';
import { switchMap } from 'rxjs/operators';
import { debounce } from 'rxjs/operators';
import { LEGISLACOES } from './mock';
import { Legislacao } from './../../../model/legislacao.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MunicipiosService } from 'src/app/services/municipios.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legislacoes',
  templateUrl: './legislacoes.component.html',
  styleUrls: ['./legislacoes.component.scss'],
})
export class LegislacoesComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  public mock: Array<Legislacao> = LEGISLACOES;

  public pageLegislacao: Page<Legislacao>;

  public formulario: FormGroup;
  public codgIbge: number;

  constructor(
    private service: MunicipiosService,
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.activeRoute.paramMap.subscribe((param) => {
        this.codgIbge = parseInt(param.get('codIbge'));
      })
    );
    this.initForm();
    this.onValueChanged();
  }

  initMock(page = 0) {
    let items = this.mockPagination(page);

    this.pageLegislacao = new Page();
    this.pageLegislacao.content = items;
    this.pageLegislacao.size = 5;
    this.pageLegislacao.totalElements = this.mock.length;
  }

  private mockPagination(page = 0) {
    let itemPorPagina = 5;
    let index = itemPorPagina * page;

    if (index > this.mock.length) return [];

    let last =
      index + itemPorPagina > this.mock.length
        ? this.mock.length
        : index + itemPorPagina;

    return this.mock.slice(index, last);
  }

  private initForm() {
    this.formulario = this.fb.group({
      descricao: [null, []],
    });
    this.listarLegislacoes();
  }

  pageChanged(event: any): void {
    this.listarLegislacoes(
      event.page - 1,
      this.formulario.get('descricao').value
    );
  }

  listarLegislacoes(page = 0, textoPesquia?: string) {
    this.subscription = this.service
      .listarLegislacaoes(this.codgIbge, page, textoPesquia)
      .subscribe(
        (res) => (this.pageLegislacao = res),
        (err) => this.initMock(page)
      );
  }

  voltar() {
    this.router.navigate(['municipios']);
  }

  onValueChanged() {
    this.formulario
      .get('descricao')
      .valueChanges.pipe(
        distinctUntilChanged(),
        debounce(() => interval(250)),
        switchMap((value: any) =>
          this.service.listarLegislacaoes(this.codgIbge, 0, value)
        )
      )
      .subscribe(
        (result: any) => {
          this.pageLegislacao = result;
        },
        (error: { message: string }) => console.log(error.message)
      );
  }
}
