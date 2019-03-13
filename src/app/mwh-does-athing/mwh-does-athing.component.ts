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
  spellCasted: String;
  spellSave: number;
  spellToHit: number;
  spellLevel: number;
  casterLevel: number;
  modifier: number;
  

  constructor(public spellSvc: SpellBookService) { }

  ngOnInit() {
    this.spellBook = this.spellSvc.loadSpellBook();

  }

  magicDisplay = () => {
      // this.spellSave = (10 + this.level + s.spellLevel);
      
      console.log(this.spellCasted);
      // this.spellLevel = this.spellCasted.spellLevel;
    
      this.spellLevel = this.spellBook
        .filter(x => x.name == this.spellCasted)    
        .reduce(
          (acc, x) => acc + x.spellLevel
          , 0
        );

        console.log(this.spellLevel);
      
      this.spellToHit = (this.modifier);
      this.spellSave = (10 + (this.casterLevel / 2) + this.spellLevel); 
      
  }

}
