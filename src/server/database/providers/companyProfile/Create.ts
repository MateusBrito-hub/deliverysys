import { ETableNames } from '../../ETableNames';
import { ICompanyProfile } from '../../models';
import { Knex } from '../../knex';

export const create = async (companyProfile: Omit<ICompanyProfile, 'id'>): Promise<number | Error> => {
	try {
		const [result] = await Knex(ETableNames.companyProfile).insert(companyProfile).returning('id');
		if (typeof result === 'object') {
			return result.id;
		} else if (typeof result === 'number') {
			return result;
		}
		return new Error('Error saving record');
	} catch (err) {
		console.error(err)
		return new Error('Error saving record');
	}
};
