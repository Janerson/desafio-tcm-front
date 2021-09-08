import { Legislacao } from './../model/legislacao.model';
import { Observable } from 'rxjs';
import { Page } from './../model/page.model';
import { Municipio } from './../model/municipo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MunicipiosService {
  private URL_API = `${environment.url_api}/municipios`;

  constructor(protected http: HttpClient) {}

  listarMunicipios(
    page: number = 0,
    textoPesquisa: string = ''
  ): Observable<Page<Municipio>> {
    return this.http.get<Page<Municipio>>(
      `${this.URL_API}/listar?page=${page}&query=${textoPesquisa || ''}`
    );
  }

  listarLegislacaoes(
    codigoIbgeMunicipio: number,
    page: number = 0,
    textoPesquisa: string = ''
  ): Observable<Page<Legislacao>> {
    return this.http.get<Page<Legislacao>>(
      `${this.URL_API}/${codigoIbgeMunicipio}/legislacoes?page=${page}&query=${textoPesquisa || ''}`
    );
  }
}
