import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router:Router) { }

  register(datosUsuario:any): void{
    


  }

  login(email:string, password:string): void{


  
  }

  signIn(): void{

  }

}
