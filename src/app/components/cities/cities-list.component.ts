import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit {

    cities: ICity[];
    constructor(private _cityService: CitiesService) { }

    ngOnInit(): void {
        this.FetchCities();
    }

    public DeleteCity(id: number) {
        this._cityService.Delete(id);
        this.FetchCities();
    }

    private FetchCities() {
        this.cities = this._cityService.GetAll();
    }
}