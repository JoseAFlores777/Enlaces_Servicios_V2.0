import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Enlaces, Datos } from '../interfaces/enlaces.interface';

  

@Injectable({
  providedIn: 'root'
})
export class EnlacesService {

  Datos: Datos;
  
  private Bandera: boolean=false;

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

    


    this.buscarEnlaces();
    setInterval(() => {
      this.buscarEnlaces(); 
      }, 15000);

    if (!localStorage.getItem('Datos')) {
      this.Datos = { Nombres: "", Apellidos: "", Cel: "", Ruta: "", Transporte: "",EncuestaVacia:"",AvisoUpdate:"" };
    } else {
      
      this.Datos = JSON.parse(localStorage.getItem('Datos')!);
     
        this.Datos.Nombres = this.capitalize(this.Datos.Nombres.trim())
        this.Datos.Apellidos = this.capitalize(this.Datos.Apellidos.trim())
        this.Datos.Ruta = this.capitalize(this.Datos.Ruta.trim())
        localStorage.setItem('Datos',JSON.stringify(this.Datos))
        console.log('Se actualizo');
      
      //this.resultados.url_f_Encuesta1 = `${arreglo[0][8]}&entry.${IdEntryNombre}=${Datos.Nombres.capitalize().replace(/ /g, "+")}+${Datos.Apellidos.trim().capitalize().replace(/ /g, "+")}&entry.${IdEntryCelular}=${Datos.Cel.trim()}&entry.${IdEntryRuta}=${Datos.Ruta.trim().capitalize().replace(/ /g, "+")}&entry.${IdEntryTransporte}=${Datos.Transporte.trim().replace(/ /g, "+")}`;
  }
  this.MostrarModalInfo()
  }

  MostrarModalInfo() {
    var Hoy = new Date();
    var fecha = new Date(Hoy.getFullYear(), 4, 18);
    if (Hoy.getDate() === fecha.getDate()) {
      Swal.fire({
        html:
          '<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_ensr67y7.json"  background="transparent"  speed="1"  style="position:absolute; width: 80%; "  loop  autoplay></lottie-player>' +
          `<h3>${this.Datos.Nombres}, celebra con nosotros el <strong>51 Aniversario</strong> de nuestra amada Iglesia</h3><br>` +
          '<strong>DIOS</strong> HA SIDO FIEL',
        text: 'Modal with a custom image.',
        imageUrl: 'assets/anirsary.gif',
        imageWidth: 600,
        confirmButtonText:'¡Amén! &#128591',
        imageAlt: 'Custom image',
      })
    }


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
      this._resultados.url_img_servicio = `https://drive.google.com/uc?id=${this.ExtraerID_Img(valores.values[0][5])}&export=download`;
      this._resultados.url_img_Espera = `https://drive.google.com/uc?id=${this.ExtraerID_Img(valores.values[0][7])}&export=download`;
      this._resultados.url_peticiones = `${valores.values[0][6]}`;
      this._resultados.url_f_Encuesta1 = this.FillForm(valores.values[0][8]);
      // this._resultados.url_f_Encuesta1 = valores.values[0][13];
      // console.log(this._resultados.url_f_Encuesta1)
      // console.log( valores.values[0][13])
      this._resultados.url_f_Encuesta2 = `${valores.values[0][9]}`;
      this._resultados.url_f_Encuesta3 = `${valores.values[0][10]}`;
      

    });
    
  }

  FillForm(url_f_Encuesta1: any) {
    if (url_f_Encuesta1 != undefined) {
      if (url_f_Encuesta1.replace(/ /g, "").length >0) {
 
        var urlCortado = url_f_Encuesta1.split("&entry.")[0];
        if (localStorage.getItem('Datos')) {
          
          let ids: string[] = this.ExtraerIDs(url_f_Encuesta1);
    
          url_f_Encuesta1 = `${urlCortado}&entry.${ids[0]}=${this.capitalize(this.Datos.Nombres.trim()).replace(/ /g, "+")}+${this.capitalize(this.Datos.Apellidos.trim()).replace(/ /g, "+")}&entry.${ids[1]}=${this.Datos.Cel.trim()}&entry.${ids[2]}=${this.capitalize(this.Datos.Ruta.trim()).replace(/ /g, "+")}&entry.${ids[3]}=${this.Datos.Transporte.trim().replace(/ /g, "+")}`;
        } 
      } else {
        url_f_Encuesta1 = null;
      }

     
    }
    
      return url_f_Encuesta1;
    
  }

 capitalize (srt:string) {
    return srt.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
};



   getServicio(Nombre_Servicio:string, servicios:any):any {
    for (let index = 0; index < servicios.length; index++) {
      if (Nombre_Servicio == servicios[index]['nombre']) {
        
        return index;
      }
    }
  }




  ExtraerIDs (str:string) {
    var ids=[]
    
  var res = str.split("&entry.");
  console.log(str)
  
  for (var i=1;i<res.length;i++) { 
    ids.push(this.CortarURL(res[i]))
  
  }
    
    return ids;

  };




CortarURL(arg0: string) {
    let array= arg0.split("=");
    return array[0];
  };
  
   ExtraerID_Img(Link:string) {
    var ID = Link.split("/");
    return ID[5];
   }
  
  
  confirmUpdate() {
    Swal.fire({
      title: '¿Quieres Modificar Tus Datos?',
      html:'<p style="font-family:arial,helvetica,sans-serif;"><strong>¡Recuerda!</strong>, los datos almacenados aquí aparecerán en los futuros formularios de la iglesia</p>',
      
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: `Ok`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ModificarDatos()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
    
  }

  confirmFillForm() {
    if (localStorage.getItem('Datos')) {
      Swal.fire({
        title: `${this.Datos.Nombres}, ¿Quieres Rellenar El Formulario con tus Datos?`,
        
        showCloseButton: true,
        showDenyButton: true,
        confirmButtonText: `Si`,
        denyButtonText: `No`,
        
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.PedirDatos();
        } else if (result.isDenied) {
          var urlCortado =this.resultados.url_f_Encuesta1.split("&entry.")[0];
          console.log(this.resultados.url_f_Encuesta1)
          location.href = urlCortado;
        }
      })
      
    } else {
      this.PedirDatos();
    }
    
    
  }
  
  


  
  
ModificarDatos() {
  (async () => {
    
    
      const { value: formValues } = await Swal.fire({
        title: 'Editar Datos Generales',
        html:
          'Agrega tus datos para optimizar el llenado de los formularios' +
          `<input value="${this.Datos.Nombres}" type="text" id="swal-input1" placeholder="Escribe tu nombre" class="swal2-input">` +
          `<input value="${this.Datos.Apellidos}" type="text" id="swal-input2" placeholder="Escribe tu apellido" class="swal2-input">` +
          `<input value="${this.Datos.Cel}" type="text" id="swal-input3" placeholder="Celular" class="swal2-input">` +
          `<input value="${this.Datos.Ruta}" type="text" id="swal-input4" placeholder="Escribe la ruta o colonia donde vive" class="swal2-input form-control" list="datalistOptions">` +
          '<datalist id="datalistOptions">'+
          '<option value="Alrededor de la Iglesia">'+
          '<option value="San Miguel Abajo">'+
          '<option value="El reparto">'+
          '<option value="La Esperanza">'+
          '<option value="La 28 de Marzo">'+
          '<option value="Los Girasoles">'+
          '<option value="La Canaán">'+
          '<option value="Parcaltagua">'+
          '<option value="La Fraternidad">'+
          '<option value="Las Brisas">'+
          '<option value="La Ley">'+
          '<option value="El Jazmín">'+
          '<option value="La 13 de Julio">'+
          '<option value="La Era">'+
          '<option value="La Travesía">'+
          '<option value="La Lomita 1">'+
          '<option value="La Lomita 2">'+
          '<option value="La San Francisco ">'+
          '<option value="El Picachito">'+
          '<option value="La Izaguirre  ">'+
          '</datalist>'+
          `<select #swal-input5 type="text" id="swal-input5" class="form-select" aria-label="Default select example"><option value="${this.Datos.Transporte}" selected>${this.Datos.Transporte}</option><option value="Bus de la Iglesia">Bus de la Iglesia</option><option value="A Pie">A Pie</option><option value="Vehículo Personal">Vehículo Personal</option></select>`,
        focusConfirm: false,
        showCancelButton: true,
        showCloseButton: true,
        preConfirm: () => {

          console.log((document.getElementById('swal-input1')as HTMLInputElement).value)
          if (((document.getElementById('swal-input1')as HTMLInputElement).value === "") ||
            ((document.getElementById('swal-input2')as HTMLInputElement).value === "") ||
            ((document.getElementById('swal-input3')as HTMLInputElement).value === "") ||
            ((document.getElementById('swal-input4')as HTMLInputElement).value === "") ||
            ((document.getElementById('swal-input5')as HTMLInputElement).value === "")) {
            Swal.showValidationMessage(
              'Completa todos los campos'
            )
          }
          return [
            (document.getElementById('swal-input1')as HTMLInputElement).value,
            (document.getElementById('swal-input2')as HTMLInputElement).value,
            (document.getElementById('swal-input3')as HTMLInputElement).value,
            (document.getElementById('swal-input4')as HTMLInputElement).value,
            (document.getElementById('swal-input5')as HTMLInputElement).value,
          ]
        }
      })
    
      if (formValues) {
        this.Datos.Nombres = this.capitalize(((document.getElementById('swal-input1')as HTMLInputElement).value).trim());
        this.Datos.Apellidos = this.capitalize(((document.getElementById('swal-input2')as HTMLInputElement).value).trim());
        this.Datos.Cel = (document.getElementById('swal-input3')as HTMLInputElement).value;
        this.Datos.Ruta = this.capitalize(((document.getElementById('swal-input4')as HTMLInputElement).value).trim());
        this.Datos.Transporte = (document.getElementById('swal-input5')as HTMLInputElement).value;
        localStorage.setItem('Datos', JSON.stringify(this.Datos));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: this.Datos.Nombres + ', Se han Guardado sus Datos',
          showConfirmButton: false,
          timer: 3000
        })


        console.log(this.resultados.url_f_Encuesta1 = this.FillForm(this.resultados.url_f_Encuesta1))
      
        //this.sleep(2000).then(() => { window.location.href = this.resultados.url_f_Encuesta1; });
      }
  
    
    })()
}
  
  
PedirDatos() {
    
  (async () => {
    if (!localStorage.getItem("Datos")) {
      const { value: formValues } = await Swal.fire({
        title: 'Datos Generales',
        html:
          'Agrega tus datos para optimizar el llenado de los formularios' +
          '<input type="text" id="swal-input1" placeholder="Escribe tu nombre" class="swal2-input">' +
          '<input type="text" id="swal-input2" placeholder="Escribe tu apellido" class="swal2-input">' +
          '<input type="text" id="swal-input3" placeholder="Celular" class="swal2-input">' +
          '<input type="text" id="swal-input4" placeholder="Escribe la ruta o colonia donde vive" class="swal2-input form-control" list="datalistOptions">' +
          '<datalist id="datalistOptions">'+
          '<option value="Alrededor de la Iglesia">'+
          '<option value="San Miguel Abajo">'+
          '<option value="El reparto">'+
          '<option value="La Esperanza">'+
          '<option value="La 28 de Marzo">'+
          '<option value="Los Girasoles">'+
          '<option value="La Canaán">'+
          '<option value="Parcaltagua">'+
          '<option value="La Fraternidad">'+
          '<option value="Las Brisas">'+
          '<option value="La Ley">'+
          '<option value="El Jazmín">'+
          '<option value="La 13 de Julio">'+
          '<option value="La Era">'+
          '<option value="La Travesía">'+
          '<option value="La Lomita 1">'+
          '<option value="La Lomita 2">'+
          '<option value="La San Francisco ">'+
          '<option value="El Picachito">'+
          '<option value="La Izaguirre  ">'+
          '</datalist>'+
          '<select #swal-input5 type="text" id="swal-input5" class="form-select" aria-label="Default select example"><option value="" selected>Seleccione el Transporte</option><option value="Bus de la Iglesia">Bus de la Iglesia</option><option value="A Pie">A Pie</option><option value="Vehículo Personal">Vehículo Personal</option></select>',
        focusConfirm: false,
        showCancelButton: true,
        showCloseButton: true,
        preConfirm: () => {

          console.log((document.getElementById('swal-input1')as HTMLInputElement).value)
          if (((document.getElementById('swal-input1')as HTMLInputElement).value === "") ||
            ((document.getElementById('swal-input2')as HTMLInputElement).value === "") ||
            ((document.getElementById('swal-input3')as HTMLInputElement).value === "") ||
            ((document.getElementById('swal-input4')as HTMLInputElement).value === "") ||
            ((document.getElementById('swal-input5')as HTMLInputElement).value === "")) {
            Swal.showValidationMessage(
              'Completa todos los campos'
            )
          }
          return [
            (document.getElementById('swal-input1')as HTMLInputElement).value,
            (document.getElementById('swal-input2')as HTMLInputElement).value,
            (document.getElementById('swal-input3')as HTMLInputElement).value,
            (document.getElementById('swal-input4')as HTMLInputElement).value,
            (document.getElementById('swal-input5')as HTMLInputElement).value,
          ]
        }
      })
    
      if (formValues) {
        this.Datos.Nombres = (document.getElementById('swal-input1')as HTMLInputElement).value;
        this.Datos.Apellidos = (document.getElementById('swal-input2')as HTMLInputElement).value;
        this.Datos.Cel = (document.getElementById('swal-input3')as HTMLInputElement).value;
        this.Datos.Ruta = (document.getElementById('swal-input4')as HTMLInputElement).value;
        this.Datos.Transporte = (document.getElementById('swal-input5')as HTMLInputElement).value;
        localStorage.setItem('Datos', JSON.stringify(this.Datos));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: this.Datos.Nombres + ', Se han Guardado sus Datos',
          showConfirmButton: false,
          timer: 3000
        })


        this.resultados.url_f_Encuesta1 = this.FillForm(this.resultados.url_f_Encuesta1)
      
        this.sleep(2000).then(() => { window.location.href = this.resultados.url_f_Encuesta1; });
      }
    }else {
      console.log(this.resultados.url_f_Encuesta1)
      location.href = this.resultados.url_f_Encuesta1;
    }
    
    })()
}




sleep (ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
 }
  
}






















