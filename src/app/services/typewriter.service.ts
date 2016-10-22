import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TypeWriterService {
    typeWriterChange: EventEmitter<any> = new EventEmitter();

    constructor() { }

    emitTypeWriterEvent(ev: any) {
        this.typeWriterChange.emit(ev);
    }

    getTypeWriterChangeEmitter(): EventEmitter<any> {
        return this.typeWriterChange;
    }
}