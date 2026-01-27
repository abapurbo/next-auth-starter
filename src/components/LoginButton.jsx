"use client"
import React from "react";
import { signIn} from "next-auth/react"
export default function LoginButton() {
    const handleLogin = () => {
        signIn();
    }
    return <div>
        <button onClick={handleLogin} className="btn">Login</button>
    </div>;
}
