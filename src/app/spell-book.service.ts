import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellBookService {

  constructor() { }

  public loadSpellBook() {
    const spellBookFromWeb = [
      { name: 'Create Pit', spellLevel: 2 }
      , { name: 'Color Spray', spellLevel: 1 }
      , { name: 'Presdidigitation', spellLevel: 0 }
    ];

    return spellBookFromWeb;
  }

}
