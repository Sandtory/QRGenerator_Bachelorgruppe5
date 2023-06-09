import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private inputStrings: { utstyrId: string; utstyrName: string }[] = [];

  SetUtstyrInfo(input1: string, input2: string) {
    this.inputStrings.push({ utstyrId: input1, utstyrName: input2 });
  }

  GetId(): string[] {
    return this.inputStrings.map((entry) => entry.utstyrId);
  }

  GetName(input1: string): string {
    const entry = this.inputStrings.find((item) => item.utstyrId === input1);
    return entry ? entry.utstyrName : 'noId';
  }
}