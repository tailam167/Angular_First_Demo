// Import part
import { Component } from "@angular/core";

// MetaData & Template
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Class
export class AppComponent{
  pageTitle: string = 'Tai Lam\'s Store';
  imageUrl: string = './assets/images/tailam_logo.png';
}
