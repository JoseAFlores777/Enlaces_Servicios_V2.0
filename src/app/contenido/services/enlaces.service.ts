import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enlaces } from '../interfaces/enlaces.interface';

@Injectable({
  providedIn: 'root'
})
export class EnlacesService {


      // id de la hoja de calculo
  private idSheets: string = '1EX5gZVdPyvSiV5ZGnJ0RGfxRDveRZntLYjc8ek6CuBU';
      //// nuestra      APIKey
  private apiKey: string = 'AIzaSyB9eDHJPyAsnDsP84sxORtj8dPHDsWEcCg';
      // rango de la hoja de calculo que queremos leer
  private values: string = 'A2:AZ100';
  //url de la Hoja de Google
  private HojaUrl: string = 'https://content-sheets.googleapis.com/v4/spreadsheets/';

    
  private servicios = [{ nombre: "Servicio de Oración", hora: "6:00 PM" },
  { nombre: "Conexión Juvenil", hora: "5:00 PM" },
  { nombre: "Servicio Dominical", hora: "9:00 AM" },
  { nombre: "Escuela Dominical", hora: "11:00 AM" },
  { nombre: "Servicio Evangelístico", hora: "5:00 PM" },
  { nombre: "Club Bíblico", hora: "0:00 PM" }
];
  
  
  
  private _resultados: Enlaces = {
    codServicio : '',
    url_img_servicio : '',
    url_img_Espera : '',
    url_peticiones : '',
    url_f_iglesia : '',
    url_f_Youtube : '',
    url_f_conexion : '',
    url_f_Zoom : '',
    url_f_Encuesta1 : '',
    url_f_Encuesta2 : '',
    url_f_Encuesta3: '',
    Hora:'',
    NombreServicio:'',

  };
  
  
  
  get resultados():Enlaces {
    return this._resultados;
  }

  constructor(private http: HttpClient) {    
    this.buscarEnlaces()
   
  }

  buscarEnlaces() {
    this.http.get(`${this.HojaUrl}${this.idSheets}/values/${this.values}?access_token=${this.apiKey}&key=${this.apiKey}`)
    .subscribe((valores:any) => {

      this._resultados.codServicio =this.getServicio(valores.values[0][0], this.servicios);
      this._resultados.Hora = this.servicios[parseInt(this._resultados.codServicio)].hora;
      this._resultados.NombreServicio = this.servicios[parseInt(this._resultados.codServicio)].nombre;
      this._resultados.url_f_iglesia = `${valores.values[0][1]}`;
      this._resultados.url_f_Youtube = `${valores.values[0][2]}`;
      this._resultados.url_f_conexion = `${valores.values[0][3]}`;
      this._resultados.url_f_Zoom = `${valores.values[0][4]}`;
      this._resultados.url_img_servicio = `https://drive.google.com/uc?id=${this.ExtraerID(valores.values[0][5])}&export=download`;
      this._resultados.url_img_Espera = `https://drive.google.com/uc?id=${this.ExtraerID(valores.values[0][7])}&export=download`;
      this._resultados.url_peticiones = `${valores.values[0][6]}`;
      this._resultados.url_f_Encuesta1 = `${valores.values[0][8]}`;
      this._resultados.url_f_Encuesta2 = `${valores.values[0][9]}`;
      this._resultados.url_f_Encuesta3 = `${valores.values[0][10]}`;
      

    });
    
  }

  


  

   getServicio(Nombre_Servicio:string, servicios:any):any {
    for (let index = 0; index < servicios.length; index++) {
      if (Nombre_Servicio == servicios[index]['nombre']) {
        
        return index;
      }
    }
  }




   ExtraerID(Link:string) {
    var ID = Link.split("/");
    return ID[5];
}


}
