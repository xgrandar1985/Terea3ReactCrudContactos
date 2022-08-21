export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    disponibilidad = false;

    constructor(nombre, apellido, email, disponibilidad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.disponibilidad = disponibilidad
    }

}