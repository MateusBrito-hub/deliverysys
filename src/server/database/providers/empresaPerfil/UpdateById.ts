import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICompanyProfile } from '../../models';

export const updateById = async (id: number, companyProfile: Omit<ICompanyProfile,'id'>) : Promise<void | Error> => {
	try {
		const result = await Knex(ETableNames.companyProfile)
			.update(companyProfile)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Erro ao atualizar o registro');
	} catch (error) {
		console.log(error);
		return new Error('Erro ao atualizar o registro');
	}
};