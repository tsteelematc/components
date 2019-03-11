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
  spellSave: number;
  spellToHit: number;
  level: number;
  modifier: number;
  

  constructor(public spellSvc: SpellBookService) { }

  ngOnInit() {
    this.spellBook = this.spellSvc.loadSpellBook();

  }

  magicDisplay = () => {
      // this.spellSave = (10 + this.level + s.spellLevel);
      this.spellToHit = (this.modifier);
      
  }

}
