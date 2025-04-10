import express from 'express'
import { insertUser, getAllUsers, getUserById, deleteUser, updateUser } from '../controller/users.js';

const router = express.Router(); 


router.get('/', getAllUsers)
router.post('/', insertUser)
router.get('/:id', getUserById)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router;