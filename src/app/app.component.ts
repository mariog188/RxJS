import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	title = 'RxJs';
	url = 'https://jsonplaceholder.typicode.com/todos/1';
	todo: string;

	constructor(private http: HttpClient) {
		const stream = this.http.get(this.url);
		stream.subscribe((resp: Todo) => (this.todo = resp.title));
	}
}
