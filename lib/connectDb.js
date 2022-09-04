import { MongoClient } from "mongodb";

export const connectDb = async () => {
    const client = await MongoClient.connect(import.meta.env.MONGODB_URI);
    return client
}