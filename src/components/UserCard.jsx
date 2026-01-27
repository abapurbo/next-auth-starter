'use client'
import { useSession } from "next-auth/react";
import React from "react";

export default function UserCard() {
    const sessions = useSession();
    return <div className="flex flex-col justify-center items-center p-10 border rounded-xl">
        <h1>User-client</h1>
        <div>{JSON.stringify(sessions)}</div>
    </div>;
}
