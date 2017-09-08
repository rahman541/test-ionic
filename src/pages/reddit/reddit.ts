import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../services/reddit.service';

import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
	items: any;
	category: any;
	limit: any;
	constructor(public navCtrl: NavController, private redditService:RedditService) {
		this.getDefault();
	}

	getDefault() {
		this.category = 'food';
		this.limit = 10;
	}

	ngOnInit() {
		this.getPosts(this.category, this.limit);
	}

	getPosts(category, limit) {
		this.redditService.getPosts(category, limit).subscribe(response => {
			this.items = response.data.children;
		});
	}

	viewItem(item) {
		this.navCtrl.push(DetailsPage, {
			item:item
		});
	}

	changeCategory() {
		this.getPosts(this.category, this.limit);
	}

}
