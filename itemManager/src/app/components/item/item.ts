import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItemModel } from '../model/item.model';

@Component({
  selector: 'app-item',
  imports: [NgOptimizedImage],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() itemData: ItemModel = new ItemModel();
}
