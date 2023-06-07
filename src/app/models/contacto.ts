export class Contacto {

    id!: number;
    titulo: string;
    descripcion: string;
    remitente: any;
    destinatario: any;

    constructor(titulo: string, descripcion: string, remitente: any, destinatario: any){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.remitente = remitente;
        this.destinatario = destinatario;
    }

}
