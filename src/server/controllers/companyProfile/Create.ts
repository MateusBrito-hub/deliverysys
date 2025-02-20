import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICompanyProfile } from '../../database/models';
import { EmpresaPerfilProvider } from '../../database/providers/companyProfile';

interface IBodyProps extends Omit<ICompanyProfile, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		nome: yup.string().required(),
		localizacao: yup.string().required(),
		prazoEntrega: yup.number().required(),
		prazoRetirada: yup.number().required(),
		horarioAbertura: yup.number().required(),
		horarioFechamento: yup.number().required(),
		informacoes: yup.string().required(),
		categoria: yup.string().required()
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response): Promise<void> => {

	try {
        const result = await EmpresaPerfilProvider.create(req.body);

        if (result instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors: { default: result.message }
            });
			return;
        }

        res.status(StatusCodes.CREATED).json({ id: result })
		return;
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
		return;
    }
};