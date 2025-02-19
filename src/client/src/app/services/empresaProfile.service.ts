import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class EmpresaProfileService {
  private apiUrl = `${environment.API_URI}/perfil`

  constructor() { }

  async createEmpresaProfile(empresaProfile: {
    nome: string;
		localizacao: string;
		prazoEntrega: number;
		prazoRetirada: number;
		horarioAbertura: number;
		horarioFechamento: number;
		informacoes: string;}): Promise<any> {
    return axios.post(this.apiUrl, empresaProfile ).then(res => res.data);
  }

  async getAllEmpresaProfiles(): Promise<any[]> {
    return axios.get(this.apiUrl).then(res => res.data);
  }

  async getEmpresaProfileById(id: number): Promise<any> {
    return axios.get(`${this.apiUrl}/${id}`).then(res => res.data);
  }

  async updateEmpresaProfile(id: number, empresaProfile: {
    nome: string;
		localizacao: string;
		prazoEntrega: number;
		prazoRetirada: number;
		horarioAbertura: number;
		horarioFechamento: number;
		informacoes: string;}): Promise<any> {
    return axios.put(`${this.apiUrl}/${id}`, empresaProfile ).then(res => res.data);
  }

  async deleteEmpresa(id: number): Promise<any> {
    return axios.delete(`${this.apiUrl}/${id}`).then(res => res.data);
  }
}
