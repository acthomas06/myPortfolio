import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'loader',
    template: require('./loading.template.html')
})
export class LoadingComponent implements OnInit, OnDestroy {
    private isLoading: boolean = false;
    private subscription: any;
    private loadingService: LoadingService;

    constructor(loadingService: LoadingService) {
        this.loadingService = loadingService;
     }

    ngOnInit() {
        this.subscription = this.loadingService.loading
                                .subscribe(loading => {
                                    this.showOrHideLoadingIndicator(loading);
                                });
     }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showOrHideLoadingIndicator(loading) {
        this.isLoading = loading;
    }
}