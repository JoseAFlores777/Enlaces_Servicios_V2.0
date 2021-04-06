import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  

  public enlaces: string[] = []
  
    public url_f_iglesia:string ='';
    public codServicio:string ='';
    public url_f_Youtube:string ='';
    public url_f_conexion:string ='';
    public url_f_Zoom:string ='';
    public url_img_servicio:string ='';
    public url_img_Espera:string ='';
    public url_peticiones:string ='';
    public url_f_Encuesta1:string ='';
    public url_f_Encuesta2:string ='';
  public url_f_Encuesta3: string = '';
  
    public resultados: string[] = [];

  constructor(private http: HttpClient) {    
    this.buscarEnlaces()
  }

  buscarEnlaces() {
    this.http.get(`${this.HojaUrl}${this.idSheets}/values/${this.values}?access_token=${this.apiKey}&key=${this.apiKey}`)
    .subscribe((valores:any) => {
      
      this.enlaces= valores.values;
      // console.table(this.enlaces);
      this.codServicio = this.getServicio(this.enlaces[0][0], this.servicios);
      this.url_f_iglesia = `${this.enlaces[0][1]}`;
      this.url_f_Youtube = `${this.enlaces[0][2]}`;
      this.url_f_conexion = `${this.enlaces[0][3]}`;
      this.url_f_Zoom = `${this.enlaces[0][4]}`;
      this.url_img_servicio = `https://drive.google.com/uc?id=${this.ExtraerID(this.enlaces[0][5])}&export=download`;
      this.url_img_Espera = `https://drive.google.com/uc?id=${this.ExtraerID(this.enlaces[0][7])}&export=download`;
      this.url_peticiones = `${this.enlaces[0][6]}`;
      this.url_f_Encuesta1 = `${this.enlaces[0][8]}`;
      this.url_f_Encuesta2 = `${this.enlaces[0][9]}`;
      this.url_f_Encuesta3 = `${this.enlaces[0][10]}`;
      this.resultados.push(this.codServicio)
      this.resultados.push(this.url_f_iglesia)
      this.resultados.push(this.url_f_Youtube)
      this.resultados.push(this.url_f_conexion)
      this.resultados.push(this.url_f_Zoom)
      this.resultados.push(this.url_img_servicio)
      this.resultados.push(this.url_img_Espera)
      this.resultados.push(this.url_peticiones)
      this.resultados.push(this.url_f_Encuesta1)
      this.resultados.push(this.url_f_Encuesta2)
      this.resultados.push(this.url_f_Encuesta3)
    });
    
  }

  

  get url_f_Encuesta11() {
    return this.url_f_Encuesta1
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
