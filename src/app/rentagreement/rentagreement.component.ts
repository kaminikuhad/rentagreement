import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SenddocumentComponent } from '../senddocument/senddocument.component';

@Component({
  selector: 'app-rentagreement',
  templateUrl: './rentagreement.component.html',
  styleUrls: ['./rentagreement.component.css']
})
export class RentagreementComponent implements OnInit {

  constructor(   private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.matDialog.open(SenddocumentComponent, {
      width: "610px",
      height: "90VH",
      panelClass: "success-modal-panel-refund-list",
    });
  }
}
