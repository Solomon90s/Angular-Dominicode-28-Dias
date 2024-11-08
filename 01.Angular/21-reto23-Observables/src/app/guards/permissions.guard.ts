import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export const permissionsGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  if (hasUser()) {
    return true;
  }
  // Redirigir a Home
  alert('No tienes permisos');
  return false;
};

function hasUser(): boolean {
  return false;
}

//! Esto es con una función de tipo flecha
// const hasUser = (): boolean => {
//   return false;
// };
