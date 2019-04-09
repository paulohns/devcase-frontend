import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  public API = '//localhost:8080';
  public VENDA_LIST_API = this.API + '/api/vendas';
  public CLIENTE_LIST_API = this.API + '/api/clientes';
  public LIST_FILTRO_SEXO_API = this.API + '/api/vendas/filtrosexo';
  public LIST_FILTRO_DATA_API = this.API + '/api/vendas/filtrodata';
  public SAVE_API = this.API + '/api/vendas/registrarVenda';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.VENDA_LIST_API);
  }

  getAllClientes(): Observable<any> {
    return this.http.get(this.CLIENTE_LIST_API);
  }

  get(id: string) {
    return this.http.get(this.VENDA_LIST_API + '/' + id);
  }

  getFiltroSexo(sexo: string) {
    return this.http.get(this.LIST_FILTRO_SEXO_API + '/' + sexo);
  }

  getFiltroData(sexo: string) {
    return this.http.get(this.LIST_FILTRO_SEXO_API + '/' + sexo);
  }

  save(venda: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.SAVE_API, venda);
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
