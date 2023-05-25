export class Usuario {
    id!: number;
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;
  
    constructor(nombre: string, nombreUsuario: string, email: string, password: string) {
      this.nombre = nombre;
      this.nombreUsuario = nombreUsuario;
      this.email = email;
      this.password = password;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    public getNombreUsuario(): string {
      return this.nombreUsuario;
    }
  
    public setNombreUsuario(nombreUsuario: string): void {
      this.nombreUsuario = nombreUsuario;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public setEmail(email: string): void {
      this.email = email;
    }
  
    public getPassword(): string {
      return this.password;
    }
  
    public setPassword(password: string): void {
      this.password = password;
    }
  }
  