import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../services/reddit.service';

@Component({
  selector: 'page-reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
	items: any;
	constructor(public navCtrl: NavController, private redditService:RedditService) {

	}

	ngOnInit() {
		this.getPosts('laravel', 5);
	}

	getPosts(category, limit) {
		this.redditService.getPosts(category, limit).subscribe(response => {
			this.items = response.data.children;
			console.log(this.items);
		});
	}

}
