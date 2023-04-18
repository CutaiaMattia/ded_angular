import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ded_angular';
  constructor(private data: DataService) {}

  ngOnInit(): void {
    if (localStorage.getItem('pg')) {
      const pg = JSON.parse(localStorage.getItem('pg')!);
      this.data.createPg(
        pg.nomePG,
        pg.cognomePG,
        pg.razza,
        pg.classe,
        pg.livello,
        pg.forza,
        pg.destrezza,
        pg.costituzione,
        pg.intelligenza,
        pg.sagezza,
        pg.carisma
      );
    }
    
  }
}
