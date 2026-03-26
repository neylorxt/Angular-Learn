import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [NgOptimizedImage],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {}
