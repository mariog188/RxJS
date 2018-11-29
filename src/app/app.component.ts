import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	title = 'RxJs';
	url = 'https://jsonplaceholder.typicode.com/users';

	constructor(private http: HttpClient) {
		const stream = this.http.get(this.url);
		console.log(stream);
	}
}
