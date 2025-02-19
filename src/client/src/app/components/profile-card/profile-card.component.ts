import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { EmpresaProfileService } from '../../services/empresaProfile.service'

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  empresaId: string | null = ''
  name: string = ''
  delivery: number = 0
  withdrawal: number = 0
  address: string = ''

  constructor(private empresaProfileService: EmpresaProfileService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.empresaId = this.route.snapshot.paramMap.get('id')
    if (this.empresaId) {
      this.empresaProfileService.getEmpresaProfileById(Number(this.empresaId)).then((company) => {
        this.name = company.nome
        this.delivery = company.prazoEntrega
        this.withdrawal= company.prazoRetirada
        this.address= company.localizacao
      })

    }
  }

}
