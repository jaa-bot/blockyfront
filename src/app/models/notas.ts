import { usuario } from "./usuario";

export class notas{
    id!: number;
    userId: number;
    titulo: string;
    texto: string;

    constructor(userId: number, titulo: string, texto: string) {
        this.userId = userId;
        this.titulo = titulo;
        this.texto = texto;
    }
}