import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas.interfaces';
@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina={};
  cargada=false;

  constructor( private http: HttpClient) {

    //console.log('servico listo');

    this.http.get('assets/data/data-paginas.json')

       .subscribe((res:InfoPagina)=>{
        this.cargada=true;
        this.info=res;
        console.log(res);
       })
   }
}
