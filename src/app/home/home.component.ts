import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = "Mateo Lowenthal";
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Mathematics Cheatsheet', cols: 1, rows: 1, content: "../../assets/Math-cheat.png"},
          { title: 'English Cheatsheet', cols: 1, rows: 1,content: "../../assets/English-cheat.jpeg" },
          { title: 'Spanish Cheatsheet', cols: 1, rows: 1,content: "../../assets/Spanish-cheat.png" }
        ];
      }

      return [
        { title: 'Mathematics Cheatsheet', cols: 1, rows: 1,content: "../../assets/Math-cheat.png" },
        { title: 'English Cheatsheet', cols: 1, rows: 1,content: "../../assets/English-cheat.jpeg" },
        { title: 'Spanish Cheatsheet', cols: 1, rows: 1,content: "../../assets/Spanish-cheat.png" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) 
              
  {}

    
    
}
