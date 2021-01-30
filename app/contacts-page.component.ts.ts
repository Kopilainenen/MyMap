import {Component, PLATFORM_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Title, Meta} from '@angular/platform-browser';
import {getTitle, getDescription} from './lib/helpers';
import {BreadCrumbsService} from './breadcrumbs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contacts-page',
  templateUrl: '../templates/contacts-page.component.html'
})
export class ContactsPageComponent {
  mapLat = 55.76804056897848;
  mapLng = 37.56820999999997;
  mapZoom = 16;
  markerMapLat = 55.76804056897848;
  markerMapLng = 37.56820999999997;
  markerMapImage = '/assets/img/map-marker.png';
  isBrowser = false;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private breadCrumbsService: BreadCrumbsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.titleService.setTitle(getTitle('Контакты'));
    this.meta.updateTag({name: 'description', content: getDescription('Контакты')});
    this.breadCrumbsService.create([{name: 'Контакты'}]);
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
