import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "orange";

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div>
              <h2>Company Name: ${this.name}</h2>
              <h4>Catchphrase: ${this.catchPhrase}</h4>
            </div>`;
  }
}
