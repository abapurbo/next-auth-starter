'use server';

import { dbConnect } from "@/lib/DBConnect";
import bcrypt from 'bcryptjs';
export const postUser = async (payload) => {
    const isExist = await dbConnect('users').findOne({ email: payload.email });
    if (isExist) {
        return {
            success: false,
            message: "User already exists"
        }
    }

    const hashPassword = await bcrypt.hash(payload.password, 10);
    console.log(hashPassword);
    // create a new user
    const newUser = {
        ...payload,
        createdAt: new Date().toISOString(),
        role: "user",
        password: hashPassword
    }
    console.log(newUser);
}