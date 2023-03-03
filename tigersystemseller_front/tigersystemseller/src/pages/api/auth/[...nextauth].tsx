import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  //Provedor de Login Credentials, form com senha
  providers: [
    Providers.GitHub({
      clientId: "Iv1.8b9973742e8b9059",
      clientSecret: "2e64a7cb53d29d78d20b3cdad881012fa1b9dfe1",
    }),
  ],
});
