
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
const userList = [
    { name: 'apurbo', password: '1234' },
    { name: 'beauty', password: '5678' }
]
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Email & password',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                sercetCode: { label: "Secret Code", type: "text", placeholder: "secretCode" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials
                const user = userList.find((u) => u.name == username)
                if (!user) {
                    return null;
                }
                const isPasswordOk = user.password == password
                if (isPasswordOk) {
                    return user;
                }
                // my own login logic
                return null
            }
        })
    ]
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };

