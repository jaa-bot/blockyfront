export class notas{
    id!: number;
    id_user: number;
    titulo: string;
    texto: string;

    constructor(id_user: number, titulo: string, texto: string) {
        this.id_user = id_user;
        this.titulo = titulo;
        this.texto = texto;
    }
}