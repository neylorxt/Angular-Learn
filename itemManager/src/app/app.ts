import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Item } from './components/item/item';
import { ItemModel } from './components/model/item.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Item, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('itemManager');

  items: ItemModel[] = [
    new ItemModel(
      'Coin',
      'Currency',
      'This is a description of a coin item',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Coin_video_game.png/250px-Coin_video_game.png',
    ),
    new ItemModel(
      'Gimp',
      'Tool',
      'This is a description of a gimp item',
      'https://www.wikidebrouillard.org/images/thumb/9/99/Item-The_Gimp_gimp.png/768px-Item-The_Gimp_gimp.png',
    ),
    new ItemModel(
      'Adobe',
      'Software',
      'This is a description of a adobe item',
      'https://static.vecteezy.com/system/resources/previews/060/100/954/non_2x/adobe-logo-free-download-adobe-logo-free-png.png',
    ),
  ];

  researchModel = signal('');

  onSearchInput(value: string) {
    this.researchModel.set(value);
  }

  // Computed property to filter items based on the search input
  filteredItems = computed(() => {
    const search = this.researchModel().toLowerCase();

    return this.items.filter((item) => item.name.toLowerCase().includes(search));
  });
}
