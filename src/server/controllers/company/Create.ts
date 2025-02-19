import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICompany } from '../../database/models';
import { EmpresaProvider } from '../../database/providers/company';

interface IBodyProps extends Omit<ICompany, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		nome: yup.string().required(),
		CGC: yup.number().required(),
		email: yup.string().required(),
		contato: yup.number().required(),
		endereco: yup.string().required(),
		endereco_num: yup.number().required(),
		bairro: yup.string().required(),
		cidade: yup.string().required(),
		UF: yup.string().required(),
		CEP: yup.number().required()
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response): Promise<void> => {

	try {
		const result = await EmpresaProvider.create(req.body);

		if (result instanceof Error) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				errors: { default: result.message }
			});
			return;
		}

		res.status(StatusCodes.CREATED).json({ id: result })
		return;
	} catch (error) {

		res.setHeader("Access-Control-Allow-Origin", "*")
		res.setHeader('access-control-expose-headers', 'x-total-count');
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
		return;
	}
};