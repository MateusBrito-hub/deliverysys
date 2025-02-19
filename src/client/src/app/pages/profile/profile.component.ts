import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component'

@Component({
  selector: 'app-profile',
  imports: [ProfileCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
