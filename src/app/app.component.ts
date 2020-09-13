import { Component, ElementRef, ViewChild } from '@angular/core';

class Negocio{
  nombre: string;
  ciudad: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'guia-restaurantes';
  restaurantes : Negocio[] =[{nombre : "Soperito", ciudad : "La Victoria"}]
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('ciudad') ciudad: ElementRef;

  agregarRestaurant(nombre:string, ciudad:string){
    if (this.validarRestaurant(nombre,ciudad)){
      let restaurant = this.nuevoRestaurant(nombre,ciudad);
      if (this.validarRestaurantDuplicado(restaurant)){
        this.adicionarRestaurant(restaurant);
      }
      
    }

    
  }


  validarRestaurant(nombre:string, ciudad:string):boolean{
    if (nombre.trim() === '' || ciudad.trim() === ''){
      this.setFocusDatos(nombre, ciudad);
      return false;
    }else{
      return true;
    }
  }

  nuevoRestaurant(nombre:string, ciudad:string):Negocio{
    let restaurant = new Negocio();
    restaurant.nombre = nombre;
    restaurant.ciudad = ciudad;
    return restaurant;
  }

  validarRestaurantDuplicado(restaurant:Negocio):boolean{
    let existe = this.restaurantes.find(x => x.nombre.toUpperCase() == restaurant.nombre.toUpperCase() );
    if (existe) {
      alert('El restaurante ya existe, ingrese un nuevo restaurante');
      this.nombre.nativeElement.focus();
      return false;
    }else{
      return true;
    }

  }

  adicionarRestaurant(restaurant:Negocio){
    this.restaurantes.push(restaurant);
    this.nombre.nativeElement.value = '';
    this.ciudad.nativeElement.value = '';
    this.nombre.nativeElement.focus();
  }

  setFocusDatos(nombre:string, ciudad:string){
    
    if (nombre.trim() === ''){
      alert('Debe ingresar el Nombre del Restaurante');
      this.nombre.nativeElement.focus();
    }else if (ciudad.trim() === ''){
      alert('Debe ingresar la Ciudad');
      this.ciudad.nativeElement.focus();
    }

  }

}
