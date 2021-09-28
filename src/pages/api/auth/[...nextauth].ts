import NextAuth from "next-auth"
import { session } from "next-auth/client"
import Providers from "next-auth/providers"

export default NextAuth({
  
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read_user',
    }),

    
  ],

  callbacks: {
    async session(session, profile){
      try{
        return{
          ...session,
          id: profile.sub

        }
      } catch{
        return{
          ...session,
          id: null
        }
      }
    },
    async signIn(user, occount, profile){
      const { email } = user;
      try{
        return true;
      } catch(err){
        console.log('DEU ERRO:', err);
        return false;

      }
    }
  }
})