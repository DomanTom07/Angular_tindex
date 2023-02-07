/*
* File: tindex.component.ts
* Author: Tamás Domán
* Copyright: 2023, Tamás Domán
* Group: Szoft II N
* Date: 2023-02-07
* Github: https://github.com/DomanTom07/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-tindex',
  templateUrl: './tindex.component.html',
  styleUrls: ['./tindex.component.scss']
})
export class TindexComponent implements OnInit {
  height = new FormControl("");
  weight = new FormControl("");
  index = new FormControl("");

  indexVisible = false;

  constructor() { }

  ngOnInit(): void {}

  onKeyup(event:any) {
    if(event.key == "Enter") this.onEnter();
  }
  onEnter() {
    this.calculations();
  }
  onClickCalcButton() {
    this.calculations();
  }

  calculations() {
    let height = Number(this.height.value);
    let weight = Number(this.weight.value);
    let index = this.calcIndex(height, weight);
    this.index.setValue(String(index));
    this.indexVisible = true;
  }
  calcIndex(height: number, weight: number) {
    let index = weight / Math.pow(height, 2);
    return index;
  }
}
