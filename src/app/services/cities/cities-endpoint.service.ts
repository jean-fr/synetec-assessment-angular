import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    public GetAll(): Observable<ICity[]> {
        return this._httpClient.get<ICity[]>(`${environment.apiBaseUrl}/api/cities`);
    }
    public Delete(id: number) {
        this._httpClient.delete(`${environment.apiBaseUrl}/api/cities/delete-city/${id}`)
    }
}