import { Component, OnInit } from '@angular/core';
import { ClarityIcons, checkIcon } from "@cds/core/icon";

ClarityIcons.addIcons(checkIcon)
@Component({
  selector: 'app-tabletruth',
  templateUrl: './tabletruth.component.html',
  styleUrls: ['./tabletruth.component.scss']
})
export class TabletruthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
