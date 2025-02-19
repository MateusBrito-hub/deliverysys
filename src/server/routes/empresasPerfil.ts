import { Router } from 'express';
import { EmpresaPerfilController } from '../controllers';

const router = Router();

router.get('/', 
	EmpresaPerfilController.getAll);
	EmpresaPerfilController.getAllValidation,
router.post('/', 
	EmpresaPerfilController.createValidation,
	EmpresaPerfilController.create);
router.get('/:id', 
	EmpresaPerfilController.getByIdValidation,
	EmpresaPerfilController.getById);
router.delete('/:id', 
	EmpresaPerfilController.deleteByIdValidation,
	EmpresaPerfilController.deteleById);
router.put('/:id', 
	EmpresaPerfilController.updateByIdValidation,
	EmpresaPerfilController.updateById);

export {router};