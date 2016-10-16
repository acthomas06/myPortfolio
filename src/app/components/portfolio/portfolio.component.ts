import { Component, 
         OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'portfolio',
    template: require('./portfolio.template.html'),
    styles: [require('./portfolio.css'), require('../content.css')]
})

export class PortfolioComponent implements OnInit {
    portfolio:Array<string> = ["projects", "experience", "technologies"];
    selectedCategory:string;
    router: Router;
    route: ActivatedRoute;
    constructor(router: Router, route: ActivatedRoute) {
        this.router = router;
        this.route = route;
     }

    ngOnInit() {
        this.route.params.subscribe((param) => console.log(param));
        // console.log(this.route.params);
      }

    selectCategory(item: string) {
        this.selectedCategory = item;
        
        this.router.navigate(['/home/'+ item]);
    }

    ngOnDestroy() {
        
    }
}