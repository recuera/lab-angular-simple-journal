import { Component, OnInit } from '@angular/core';
import { JournalService } from 'services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entryList:Object;
  constructor(public journalService: JournalService ) { 
    this.journalService.getList().subscribe(list => this.entryList = list)
  }

  ngOnInit() {
  }

}
