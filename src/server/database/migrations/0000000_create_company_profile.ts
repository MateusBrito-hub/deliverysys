import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.companyProfile, table => {
			table.bigIncrements('id').primary().index();
			table.string('nome').notNullable().index();
			table.string('localizacao').notNullable().index();
			table.integer('prazoEntrega').notNullable();
			table.integer('prazoRetirada').notNullable();
			table.integer('horarioAbertura').notNullable();
			table.integer('horarioFechamento').notNullable();
			table.string('categoria').notNullable()
			table.string('informacoes').notNullable();
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de company');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.companyProfile);
}
