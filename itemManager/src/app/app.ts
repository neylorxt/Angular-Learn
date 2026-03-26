import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './components/item/item';
import { ItemModel } from './components/model/item.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Item],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('itemManager');

  items: ItemModel[] = [
    new ItemModel('Item 1', 'Type A', 'This is a description of Item 1'),
    new ItemModel('Item 2', 'Type B', 'This is a description of Item 2'),
    new ItemModel('Item 3', 'Type C', 'This is a description of Item 3'),
  ];
}
