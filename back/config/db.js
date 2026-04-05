import "dotenv/config";
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

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