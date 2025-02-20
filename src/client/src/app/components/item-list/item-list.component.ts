import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  datas : any[] = [{name:'teste1', category:'teste1', price:117.50, detail: 'item test'},{name:'teste2', category:'teste1', price:117.50, detail: 'item test'}]
  categories : any[] = [{name:'teste1'},{name:'teste2'},{name:'teste3'},{name:'teste4'}]
  itens : any[]  = []
  selectedCategory: string = this.datas[0].name;

  ngOnInit(): void {
    for (let item of this.datas) {
      if (item.category === this.selectedCategory) {
        this.itens.push(item)
      }
    }
  }

  selectItem(category: string) {
    this.selectedCategory = category;
    this.itens = []
    for (let item of this.datas) {
      if (item.category === category) {
        this.itens.push(item)
      }
    }
  }
}
