import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorMetadataService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    let date = new Date();
    console.error({
      message: error.message,
      zone: error.zone,
      timestamp: date.toISOString(),
    });
  }
}
