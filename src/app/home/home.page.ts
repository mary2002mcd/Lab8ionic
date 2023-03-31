import { Component } from '@angular/core';
import { MovieService } from '../Services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myMovies:any[]=[];
  constructor(private service:MovieService) {
    
  }
  
  ionViewWillEnter(){
    this.service.GetMovieData().subscribe(
      (data)=>{
        this.myMovies = data.Search;
        console.log(this.myMovies);
      }
    );
  }
}
