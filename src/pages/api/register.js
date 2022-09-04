import { connectDb } from "../../../lib/connectDb";
import { hash } from "bcrypt";

export async function post ({params, request}) {

    if(request.method !== "POST") {
        return res.status(405).send("Method not allowed");
    }
    const { name, email, password } = await request.json()

   if(!name || !email || !password) {
    return new Response(JSON.stringify({ message: "Please add all fields" }))
   }

   if(password.length < 6) {
    return new Response(JSON.stringify({ message: "Password must be at least 6 characters" }))
   }
    const client = await connectDb();
    const db = client.db('astro');
    const usersCollection = db.collection("users");
    const userExists = await usersCollection.findOne({ email: email });
    if(!userExists) {
        const hashedPassword = await hash(password, 12);
        const result = await usersCollection.insertOne({ name, email, password: hashedPassword });
        return new Response(JSON.stringify({
            message: "User created successfully",
        }), { status: 200 });
    }
    else {
        return new Response(JSON.stringify({
            message: "User already exists"
        }), { status: 442  });
    }
}