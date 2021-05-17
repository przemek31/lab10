import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basem',
  templateUrl: './basen.component.html',
  styleUrls: ['./basen.component.css']
})
export class BasenComponent implements OnInit {
  basenName: string;
  bilet: Bilet;
  address: Address;
  attractions: string[];
  editMode = false;

  constructor() { }

  ngOnInit(): void {
    this.basenName = 'Aqua Zamosc';

    this.bilet={
      seniora: 23,
      normalny: 30,
    }
    this.address={
      city:'Zamosc',
      street:'ul.Nowa',
      number:4,
    }

    this.attractions= ['Basen: Spa']
  }
  changeEditMode(): void{
    this.editMode = !this.editMode;
  }
  addActtraction(attraction): void{
    this.attractions.push(attraction);
  }
  deleteActtraction(acttraction): void {
    for(let i=0; i<this.attractions.length; i++){
      if(this.attractions[i] === acttraction){
        this.attractions.splice(i, 1);
      }
    }
  }

}
interface Bilet{
  seniora:number;
  normalny:number;
}
interface Address{
  city:string;
  number:number;
  street:string;
}


