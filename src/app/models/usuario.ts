export class usuario {
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
  
    getNombre(): string {
      return this.nombre;
    }
  
    setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    getNombreUsuario(): string {
      return this.nombreUsuario;
    }
  
    setNombreUsuario(nombreUsuario: string): void {
      this.nombreUsuario = nombreUsuario;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    setEmail(email: string): void {
      this.email = email;
    }
  
    getPassword(): string {
      return this.password;
    }
  
    setPassword(password: string): void {
      this.password = password;
    }
  }
  