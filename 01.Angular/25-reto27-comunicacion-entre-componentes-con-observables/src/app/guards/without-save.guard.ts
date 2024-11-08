import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export const withoutSaveGuard: CanDeactivateFn<unknown> = (
  component: unknown,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  if (hasUser()) {
    return true;
  }
  return confirm('You have unsaved changes');
};

function hasUser(): boolean {
  return false;
}

//! Esto es con una función de tipo flecha
// const hasUser = (): boolean => {
//   return false;
// };
