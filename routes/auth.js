import express from 'express';
import { register } from '../controller/auth.js';

const router = express.Router();

router.post('/register', register);
// router.post("/", insertUser);
// router.get("/:id", getUserById);
// router.delete("/:id", deleteUser);
// router.patch("/:id", updateUser);

export default router;
