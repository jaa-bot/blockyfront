export class Log {
    id!: number;
    userId: any;
    accion: string;

    constructor(userId: any, accion: string){
        this.userId = userId;
        this.accion = accion;
    }

}