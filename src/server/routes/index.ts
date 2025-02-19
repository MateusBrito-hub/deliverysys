import { Router } from 'express';
import {router as EmpresaRoutes} from './companies';
import {router as EmpresaPerfilRoutes} from './empresasPerfil';

const router = Router();

router.use('/company', EmpresaRoutes);
router.use('/perfil', EmpresaPerfilRoutes)

export {router};