import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location:{
    lat:number;
    lng: number;
  }
  constructor(){
    this.companyName=faker.company.name();
    this.catchPhrase=faker.company.catchPhrase();
    this.location={
      lat:faker.location.latitude(),
      lng:faker.location.longitude(),
    }
  }
  markerContent():string{
    return `
    <div>
    <h2>User Name:${this.companyName}</h2>
    <h3>CatchPhrase:${this.catchPhrase}</h3>
    </div>
    `;
  }
}