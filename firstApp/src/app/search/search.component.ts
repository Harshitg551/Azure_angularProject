import { Component, OnInit } from '@angular/core';
import { MsServiceService } from '../ms-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  suggestions = null;

  constructor(private msService: MsServiceService) { }

  ngOnInit(): void {
  }

  getBingSuggestion(searchTerm:any){
    this.msService.getBingSearchSuggestion(searchTerm).subscribe(
      (resp: any) => {
        console.log(resp);
        this.suggestions = resp;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
