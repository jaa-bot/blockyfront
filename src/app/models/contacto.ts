export class Contacto {

    id!: number;
    titulo: string;
    descripcion: string;
    remitente: number;
    destinatario: number;

    constructor(titulo: string, descripcion: string, remitente: number, destinatario: number){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.remitente = remitente;
        this.destinatario = destinatario;
    }

}
