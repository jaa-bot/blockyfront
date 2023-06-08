export class Contacto {

    id!: number;
    titulo: string;
    descripcion: string;
    remitente: any;
    destinatario: any;
    responder: any;

    constructor(titulo: string, descripcion: string, remitente: any, destinatario: any, responder: any){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.remitente = remitente;
        this.destinatario = destinatario;
        this.responder = responder;
    }

}
