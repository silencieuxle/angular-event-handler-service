# Angular Event Handler Service (Pub, Sub)
A simple event handler service (pub, sub) made with Angular (6, 7).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and deployment purposes.
Please note that this is not a module. The repository itself is a source code.

### Prerequisites
- This component depends on @angular/core and rxjs.

```
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
```

### Installing

* Simply download and copy the component to your Angular project.

## Usage
### Import the component

- Import to the app.module

```
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [EventHandlerService],
  bootstrap: [AppComponent]
})
```
### Use the slider in another component
- Inject the service to the component you want to use.

```
constructor(private eventHandlerService: EventHandlerService) {}
```

- Subscribe an event.

```
this.eventHandlerService.$subscribe('SHOW_LOADING').subscribe(result => {
  setTimeout(() => {
    this.loading = result;
  });
});
```

- Publish an event.

```
this.eventHandlerService.publish('SHOW_LOADING', false);
```

## Built With

* [Angular](https://angular.io/) - The Angular framework used

## Contributing

* **Galvin Nguyen** - *Initial work* - [silencieuxle](https://github.com/silencieuxle)

## Authors

* **Galvin Nguyen** - *Initial work* - [silencieuxle](https://github.com/silencieuxle)

## License

This project is licensed under the GNU General Public License.
