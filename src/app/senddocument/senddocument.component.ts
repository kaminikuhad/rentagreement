import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-senddocument',
  templateUrl: './senddocument.component.html',
  styleUrls: ['./senddocument.component.css']
})
export class SenddocumentComponent implements OnInit {

 
  panelOpenState = true;

  constructor( public dialogRef: MatDialogRef<SenddocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router:Router,
    ) { }

  ngOnInit(): void {

  }
  cancel(){
    this.dialogRef.close();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}

