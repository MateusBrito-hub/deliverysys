import { Router } from 'express';
import { EmpresaController} from '../controllers';

const router = Router();

router.get('/', 
	EmpresaController.getAll);
	EmpresaController.getAllValidation,
router.post('/', 
	EmpresaController.createValidation,
	EmpresaController.create);
router.get('/:id', 
	EmpresaController.getByIdValidation,
	EmpresaController.getById);
router.delete('/:id', 
	EmpresaController.deleteByIdValidation,
	EmpresaController.deteleById);
router.put('/:id', 
	EmpresaController.updateByIdValidation,
	EmpresaController.updateById);

export {router};