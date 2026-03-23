import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Deu certo ao conecetar ao banco')
    }   catch(error){
        console.log('Nao deu certo ao conectar ao banco', error)
    }
}

connectDb();