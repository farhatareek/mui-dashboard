import NextAuth from 'next-auth';
import  CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './authconfig';
import { connectToDB } from './lib/utils';
import { User } from './lib/models';


const login = async (credentials)=>{
try {
  connectToDB()
  const user = User.findOne({username:credentials.username})
  if(!user) throw new Error(" wrong user")
  return user
} catch (error) {
  console.log(error);
  throw new Error("faild to login ")
}
}

export const { signIn, signOut, auth } = NextAuth({

  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.username = user.username;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user.username = token.username;
        }
        return session;
      },
    },
  });

