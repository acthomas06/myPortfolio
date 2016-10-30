import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
    selectedPortfolioItem: string = 'projects';
    selectedPortfolioItemPages: number;
    technologyImages:Array<Object> = [
        {
            "page_one": [
                {name: "angular_shield", height: 100, width: 100},
                {name: "react_logo", height: 100, width: 100}, 
                {name: "es6_logo", height: 100, width: 100},
                {name: "typescript_logo", height: 100, width: 100},
                {name: "webpack_logo", height: 100, width: 100},
                {name: "nodejs_logo", height: 100, width: 170}
            ]
        }
    ];

    projectsImages:Array<Object> = [
        {
            "page_one": [
                {url: "persogenics_dashboard", name: "persogenics_logo"},
                {url: "persogenics_employee_list", name: "persogenics_logo"},
                {url: "persogenics_account_profile", name: "persogenics_logo"},
                {url: "navigation_hamburger_expanded", name: "workfront_logo"},
            ]
        },
        {
            "page_two": [
                {url: "navigation_meganav_closed", name: "workfront_logo"},
                {url: "navigation_meganav_expanded", name: "workfront_logo"},
                {url: "navigation_megatilenav_closed", name: "workfront_logo"},
                {url: "navigation_megatilenav_expanded", name: "workfront_logo"},
            ]
        },
        {
            "page_three": [
                {url: "tutapp_hero", name: "tutapp_logo"},
                {url: "tutapp_left_iphone", name: "tutapp_logo"},
                {url: "tutapp_right_iphone", name: "tutapp_logo"},
                {url: "tutapp_footer", name: "tutapp_logo"}
            ]
        }              
    ];

    experienceImages:Array<Object> = [
        {
            "page_one": [
                {name: "tutapp_logo", height: 35, url: "http://www.tutoring-app.com"},
                {name: "workfront_logo", height: 45, url: "https://www.workfront.com"},
                {name: "insidesales_logo", height: 65, url: "https://www.insidesales.com"},
                {name: "persogenics_logo", height: 35, url: "http://www.persogenics.com"},
            ]
        },
        {
            "page_two": [
                {name: "devmountain_logo", height: 50, url: "https://www.devmountain.com"}
            ]
        }
    ];

    constructor() {
        this.selectedPortfolioItemPages = this.projectsImages.length;
     }

    setPortfolioItem(item: string) {
        this.selectedPortfolioItem = item;
        this.setPortfolioItemPages(item);
    }

    setPortfolioItemPages(item: string) {
        if (item == 'projects') {
            this.selectedPortfolioItemPages = this.projectsImages.length;
        } else if (item == 'experience') {
            this.selectedPortfolioItemPages = this.experienceImages.length;
        } else {
            this.selectedPortfolioItemPages = this.technologyImages.length;
        }
    }

    getSelectedPortfolioItem() {
        return this.selectedPortfolioItem;
    }

    getSelectedPortfolioItemPageCount() {
        return this.selectedPortfolioItemPages;
    }

    getTechnologyImages() {
        return this.technologyImages;
    }

    getExperienceImages() {
        return this.experienceImages;
    }

    getProjectsImages() {
        return this.projectsImages;
    }
}