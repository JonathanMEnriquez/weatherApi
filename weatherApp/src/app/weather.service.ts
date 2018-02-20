import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  cityId = {
    burbank: 4885983,
    seattle: 5809844,
    sanJose: 5397765,
    chicago: 4887398,
    dallas: 4190598,
    washington: 4138106
  }

  getCityInfo(city) {
    // Contact weather api
    let id = this.cityId[city];
    console.log(id);
    let url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=df9363d8d8210ed0d2c99b48a7c1c769`
    return this._http.get(url);
  }
}
