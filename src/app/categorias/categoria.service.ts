import { environment } from './../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl = environment.apiUrl + '/categorias';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {
    return firstValueFrom(this.http.get(this.categoriasUrl));
  }

}
