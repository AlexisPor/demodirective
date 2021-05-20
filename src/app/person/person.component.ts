import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons=[{'id':11,'name':'Alexis','sexe':'homme','age':23},
            {'id':12,'name':'lina','sexe':'femme','age':28},
            {'id':13,'name':'yan','sexe':'homme','age':33},
            {'id':14,'name':'richard','sexe':'homme','age':15}];
  constructor() { }

  ngOnInit(): void {
  }

}
