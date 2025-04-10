import { User } from "../models/user.js";
import mongoose, { deleteModel } from "mongoose";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "id non conforme con mongo" });

  try {
    const user = await User.findById(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const insertUser = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);

  try {
    await newUser.save(); //save è un metodo del model che identifica il nome User che è export dentro model>user.js
    //Quindi lo mette al plurale e lo mette nella collecion
    res.status(201).json(newUser);
    //i codici sono visibili in https://httpstatuses.io/201
    //rimando il dato indietro es per visualizzare i dati modificati li rimando dopo averli creati
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id: _id } = req.params; //trucco di nomenclatura per avere lo stesso nome presente su mongo cioè _id

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "id non conforme con mongo" });

  try {
    const user = await User.findByIdAndDelete(_id);
    res.status(200).json({ message: "utente eliminato con successo" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "id non conforme con mongo" });

  try {
    const user = await User.findByIdAndUpdate(id, data, { new: true });
    //se avessi scritto const user = await User.findByIdAndUpdate(id, data) manda indietro l'oggetto user PRE-Modifica

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
