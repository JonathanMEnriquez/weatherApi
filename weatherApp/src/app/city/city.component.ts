import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _weatherService: WeatherService ) { }

  imgUrl:String = ""
  imgDict = {
    sanJose: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
    chicago: "https://images.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
    burbank: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.welikela.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fburbank-ikea.jpg&f=1",
    washington: "https://static.pexels.com/photos/208702/pexels-photo-208702.jpeg",
    dallas: "https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
    seattle: "https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
  }
  currCity:any = ""

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log('hello')
      console.log(params.get('city'));
      this.imgUrl = this.imgDict[params.get('city')];
      let observable = this._weatherService.getCityInfo(params.get('city'));
      observable.subscribe((data: any)=> {
        console.log('got info!');
        console.log(data);
        this.currCity = data;
      })
    })
  }

}
