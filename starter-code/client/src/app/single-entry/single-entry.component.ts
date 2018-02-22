import { Component, OnInit } from '@angular/core';
import { JournalService } from 'services/journal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  myEntry
  constructor(
    public journalService: JournalService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe( params => this.getEntry(params["id"]))
  }

  getEntry(id){
    this.journalService.get(id).subscribe( entry => {
      this.myEntry = entry;
    })
  }
  
}
