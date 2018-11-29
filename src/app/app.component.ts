import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	title = 'RxJs';
	// url = 'https://jsonplaceholder.typicode.com/todos/1';
	url = 'https://yesno.wtf/api';
	// todo: string;
	// todo$: Observable<Todo>;
	todo$: Observable<{ image }>;

	constructor(private http: HttpClient) {
		this.todo$ = this.http.get<{ image }>(this.url);
		// this.todo$ = this.http.get<Todo>(this.url);
		// const stream = this.http.get(this.url);
		// stream.subscribe((resp: Todo) => (this.todo = resp.title));
	}
}
