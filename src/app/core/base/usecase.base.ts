import { Observable } from "rxjs";

export interface UseCase<T> {
    execute(...args: unknown[]): Observable<T>;
}