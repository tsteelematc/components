import { Component, OnInit } from '@angular/core';
import { SpellBookService } from '../spell-book.service';

interface SpellBookDisplay {
  name: string;
  spellLevel: number;
}

@Component({
  selector: 'mwh-does-athing',
  templateUrl: './mwh-does-athing.component.html',
  styleUrls: ['./mwh-does-athing.component.css']
})
export class MwhDoesAThingComponent implements OnInit {

  spellBook: SpellBookDisplay[];
  spellSave: 0;
  spellToHit: 0;

  constructor(public spellSvc: SpellBookService) { }

  ngOnInit() {
    this.spellBook = this.spellSvc.loadSpellBook();

  }

  magicDisplay = () => {
      //this.spellSave = 10 + this.spellBook.something i guess?
  }

}
