import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'
import { tap } from 'rxjs/operators';
import { GeneralService } from '../services/general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  
    constructor(private auth: AuthService, private router: Router, private gs: GeneralService) { }


  canActivate(): Observable<boolean> | boolean {
    // El metodo pipe() se ejecuta cuando te suscribes al observable
    // en este caso Angula se suscribe automaticamente.
    return this.auth.isAuthenticated.pipe(
      tap((userAuthenticated) => {
        if (!userAuthenticated) {
          this.router.navigate(['login']);
        }

      })
    );
  }

}
