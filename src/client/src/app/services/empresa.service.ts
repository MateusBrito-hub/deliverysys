import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {
  private apiUrl = `${environment.API_URI}/company`

  constructor() { }

  async createEmpresa(company: {
    nome: string;
    CGC: number;
    email: string;
    contato: number;
    endereco: string;
    endereco_num: number;
    bairro: string;
    cidade: string;
    UF: string;
    CEP: number;}): Promise<any> {
    return axios.post(this.apiUrl, company ).then(res => res.data);
  }

  async getAllEmpresas(): Promise<any[]> {
    return axios.get(this.apiUrl).then(res => res.data);
  }

  async getEmpresaById(id: number): Promise<any> {
    return axios.get(`${this.apiUrl}/${id}`).then(res => res.data);
  }

  async updateEmpresa(id: number, company: {
    nome: string;
    CGC: number;
    email: string;
    contato: number;
    endereco: string;
    endereco_num: number;
    bairro: string;
    cidade: string;
    UF: string;
    CEP: number;}): Promise<any> {
    return axios.put(`${this.apiUrl}/${id}`, company ).then(res => res.data);
  }

  async deleteEmpresa(id: number): Promise<any> {
    return axios.delete(`${this.apiUrl}/${id}`).then(res => res.data);
  }
}
