import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
    selectedPortfolioItem: string = 'projects';
    constructor() { }

    setPortfolioItem(item: string) {
        this.selectedPortfolioItem = item;
    }

    getSelectedPortfolioItem() {
        return this.selectedPortfolioItem;
    }
}