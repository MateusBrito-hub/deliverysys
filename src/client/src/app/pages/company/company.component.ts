import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { EmpresaProfileService } from '../../services/empresaProfile.service'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-company',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class EmpresaComponent {
  companies: any[] = []
  selectedEmpresa: any = {};
  status: string = ''

  constructor(private empresaProfileService: EmpresaProfileService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.companies = await this.empresaProfileService.getAllEmpresaProfiles();
  }

  async redirectRouter(empresaId: number) {
    this.router.navigate(['/company', empresaId])
  }

}
