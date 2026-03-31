export class ItemModel {
  name: string;
  type: string;
  description: string;
  src: string = 'https://via.placeholder.com/150';

  constructor();
  constructor(name: string, type: string, description: string, src: string);

  constructor(name?: string, type?: string, description?: string, src?: string) {
    this.name = name || '';
    this.type = type || '';
    this.description = description || '';
    this.src = src || this.src;
  }
}
