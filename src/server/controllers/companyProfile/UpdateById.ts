import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { ICompanyProfile } from '../../database/models';
import { EmpresaPerfilProvider } from '../../database/providers/companyProfile';

interface IParamsProps {
    id?: number,
}
interface IBodyProps extends Omit<ICompanyProfile, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
		nome: yup.string().required(),
		localizacao: yup.string().required(),
		prazoEntrega: yup.number().required(),
		prazoRetirada: yup.number().required(),
		horarioAbertura: yup.number().required(),
		horarioFechamento: yup.number().required(),
		informacoes: yup.string().required()
	})),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}));

export const updateById = async (req: Request<IParamsProps,{},IBodyProps>, res: Response): Promise<void> => {
    if(!req.params.id) res.status(StatusCodes.BAD_REQUEST).json({
        errors: {
            default: 'O parâmetro "id" precisa ser informado'
        }
    });

    const result = await EmpresaPerfilProvider.updateById(Number(req.params.id), req.body);
    if (result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        });
		return;
    }

    res.status(StatusCodes.NO_CONTENT).send();
	return;
};