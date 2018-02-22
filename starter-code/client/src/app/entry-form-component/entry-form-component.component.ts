import { Component, OnInit } from '@angular/core';
import { JournalService } from 'services/journal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {

  status:boolean = false;

  constructor(
    public journalService:JournalService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  showForm(){
    this.status = !this.status;
  }
  submitForm(myForm){
    console.log(myForm.value)
    this.journalService.create(myForm.value).subscribe(obj => {
     
    })
  }
}
