import User from "@/models/users";
import { connectToDB } from "@/utils/database";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt"

export const handler = NextAuth({
      session: {
        strategy: "jwt"
      },
        secret: process.env.NEXT_AUTH_SECRET,
        // configure one or more authentication providers
    providers: [
       GoogleProvider({
     clientId: process.env.GOOGLE_CLIENT_ID,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     authorization: {
      params: {
        scope: "openid email profile"
      }
     },

     profile(profile) {
      // this controls what gets passed to `user` in  signIn() and session()
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile,picture,
      // add anything else you want
      email_verified: profile.email_verified,
      firstname: profile.given_name,
      lastname: profile.family_name,
    }
     }
  }),


  // ... add more providers here
  CredentialsProvider({
    name: 'Credentials',
    Credentials: {},
    async authorize(credentials, req) {
      try {
        await connectToDB()

        const {email, password} = credentials;

        const user = await User.findOne({email: email});

        if(user) {
          const passwordMatch = await bcrypt.compare(
            password,
            user.hashed_password
          );
          if (passwordMatch) {
            console.log("password Match");
            return user;
          } else {
            console.log("password Match");
            return null;
          }
          
        } else{
          console.log('user does not exist');
          console.log(email);
          return null;
        }
      } catch (error) {
        console.log("Auth error", error);
      }
    },
  })
    //  ... add more providers here
],
callbacks: {
    async signIn({ account, profile }) {
      console.log('this is account', account)
      console.log('this is profile', profile)
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith(".com")
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    jwt: async ({token, user, account, profile}) => {
      if (user) {
        token.id = user.id || profile?.sub
        token.name = user.name || profile?.name
        token.email = user.email || profile?.email
        token.picture = user.image || profile?.picture
      }
      return token
    },
    session: async ({session, token}) => {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
        }
      }
      return session
    },
  },
});

export { handler as GET, handler as POST}