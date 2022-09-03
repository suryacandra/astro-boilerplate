import AstroAuth from "@astro-auth/core";
import { GoogleProvider, CredentialProvider } from "@astro-auth/providers";

export const all = AstroAuth({
  authProviders: [
    GoogleProvider({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      // Here, we are simply checking if the email matches and allow the user to login
      authorize: async (properties) => {
        if (properties.username === "asu" && properties.password === "asu") {
          return properties;
        }

        return null;
      },
    }),
  ],
});
