import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nome: {
        type: String, // 'String' should be capitalized, as it refers to a data type
        required: true //se non messo esplicitamente sarebbe a false
    },
    cognome: {
        type: String,
        required: true
    },
    email: {
        type: String,   //si potrebbe controllare regex per la mail
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'] // Added regex validation for email
    }
}, { timestamps: true }) //se non messo esplicitamente sarebbe a false//crea e gestisce i campi createdAt e updatedAt
                        //che indica quando come data e sempo il campo è stato creato e l'ultima modifica effettuata

export const User = mongoose.model('User', userSchema);