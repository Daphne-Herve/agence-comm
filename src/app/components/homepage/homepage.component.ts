import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public results: any;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.results =  this.dataService.getData();
    console.log(this.results);

  }

}
