import { User } from '../models/user.js';
import mongoose, { deleteModel } from 'mongoose';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || typeof username != 'string') {
    return res.status(406).json({ status: 'error', message: 'username non valido' });
  }

  if (!password || typeof password != 'string') {
    return res.status(406).json({ status: 'error', message: 'password non valido' });
  }

  if (password.length < 5) {
    return res.status(406).json({ status: 'error', message: 'password troppo corta' });
  }

  const passwordHashed = await bcrypt.hash(password, 10);
  //posso usare un numero tra 1 e 15 (# iterazioni criptaggio) oppure 'parola o codice segreto'
  //possibile decriptabola ma latamente improbabile: come mangiare una brioches e mangiando capire quanti grammi di proteine contiene

  const user = new User({ username: username, password: passwordHashed });

  try {
    await user.save();
    res.status(201).json({ status: 'Registrzione effettuata con successo' });
  } catch (error) {
    res.status(409).json({ status: 'error', message: error.message });
  }
};
