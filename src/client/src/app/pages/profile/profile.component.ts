import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component'
import { ItemListComponent } from '../../components/item-list/item-list.component'

@Component({
  selector: 'app-profile',
  imports: [ProfileCardComponent, ItemListComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
