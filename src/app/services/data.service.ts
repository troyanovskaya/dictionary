import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  public loadExcel(): Observable<any[]> {
    const url = 'assets/excel/dictionary.xlsx';
    return this.http.get(url, { responseType: 'arraybuffer' }).pipe(
      map((data: ArrayBuffer) => {
        const binaryStr = this.arrayBufferToBinaryString(data);
        const workbook = this.parseWorkbook(binaryStr);
        const sheetName = this.getSheetName(workbook);
        const sheet = this.getSheet(workbook, sheetName);
        return this.sheetToJson(sheet);
      }),
      catchError(this.handleError)
    );
  }

  private arrayBufferToBinaryString(buffer: ArrayBuffer): string {
    const uint8Array = new Uint8Array(buffer);
    let binaryString = '';
    for (let i = 0; i < uint8Array.length; i++) {
      binaryString += String.fromCharCode(uint8Array[i]);
    }
    return binaryString;
  }

  private parseWorkbook(data: string): XLSX.WorkBook {
    return XLSX.read(data, { type: 'binary' });
  }

  private getSheetName(workbook: XLSX.WorkBook): string {
    return workbook.SheetNames[0];
  }

  private getSheet(workbook: XLSX.WorkBook, sheetName: string): XLSX.WorkSheet {
    return workbook.Sheets[sheetName];
  }

  private sheetToJson(sheet: XLSX.WorkSheet): any[] {
    return XLSX.utils.sheet_to_json(sheet, { header: 1 });
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
