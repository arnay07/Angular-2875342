import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService {
  constructor(private http: HttpClient) {}

  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  getRemote(): Observable<string> {
    return this.http.get<string>('/api/storage');
  }
}
