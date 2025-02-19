import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICompanyProfile} from '../../models';

export const getById = async (id: number) : Promise<ICompanyProfile | Error> => {

	try {
		const result = await Knex(ETableNames.companyProfile)
			.select('*')
			.where('id', '=', id)
			.first();
		if (result) return result;
        
		return new Error('Erro ao consultar o registro');
	} catch (error) {
		return new Error('Erro ao consultar o registro');
	}
};