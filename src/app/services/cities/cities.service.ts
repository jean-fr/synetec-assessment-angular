import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesService {
    constructor(private _citiesEndpoint: CitiesEndpoint) { }

    public GetAll(): ICity[] {
        var cities: ICity[] = [];
        this._citiesEndpoint.GetAll().subscribe(data => {
            for (let c of data) {
                cities.push({
                    id: c.id,
                    name: c.name,
                    description: c.description
                });
            }
        })
        return cities;
    }
    public Delete(id: number) {
        this._citiesEndpoint.Delete(id);
    }
}
