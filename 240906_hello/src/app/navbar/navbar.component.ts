import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuPontok=[
    {link:"home",name:"kezdolap"},
    {link:"data",name:"adatok"},
    {link:"help",name:"sugo"}
  ]

}
