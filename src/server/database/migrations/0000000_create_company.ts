import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex){
	return knex
		.schema
		.createTable(ETableNames.company, table => {
			table.bigIncrements('id').primary().index();
			table.string('nome').notNullable().index();
			table.integer('CGC').notNullable().index().unique();
			table.string('email', 100);
			table.integer('contato').notNullable();
			table.string('endereco').notNullable();
			table.string('endereco_num').notNullable();
			table.string('bairro').notNullable();
			table.string('cidade').notNullable();
			table.string('UF').notNullable();
			table.integer('CEP').notNullable();
			table.timestamps(true,true);

			table.comment('Tabela usada para armazenar informação de company');
		});
}


export async function down(knex: Knex){
	return knex.schema.dropTable(ETableNames.company);
}
