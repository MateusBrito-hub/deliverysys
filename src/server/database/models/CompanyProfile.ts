export interface ICompanyProfile{
	id: number,
	nome: string,
	localizacao: string;
	prazoEntrega: number;
	prazoRetirada: number;
	horarioAbertura: number;
	horarioFechamento: number;
	informacoes: string;
}