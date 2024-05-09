import NextAuth from "next-auth/next";


 const authOptions = {
    providers: [
    {
        id: "descope",
        name: "Descope",
        type: "oauth",
        wellKnown: `https://api.descope.com/P2dwkyWomBkHvDnfNz7te0NftYFU/.well-known/openid-configuration`,
        authorization: { params: { scope: "openid email profile" } },
        idToken: true,
        clientId: "P2dwkyWomBkHvDnfNz7te0NftYFU",
        clientSecret: "<Descope Access Key>",
        checks: ["pkce", "state"],
        profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            }
        },
    }],
    callbacks: {
        secret: process.env.NEXTAUTH_SECRET,
        signIn: process.env.NEXTAUTH_URL,
        signOut:  process.env.NEXTAUTH_URL,
        async jwt({token, account, profile}) {
            if (account) {
                return {
                    ...token,
                    access_token: account.access_token,
                    expires_at: Math.floor(Date.now() / 1000 + account.expires_in),
                    refresh_token: account.refresh_token,
                    profile: {
                      name: profile?.name,
                      email: profile?.email,
                      image: profile?.picture,
                  },
                }
            } else if (Date.now() < token.expires_at * 1000) {
                return token
            } else {
                try {
                    const response = await fetch("https://api.descope.com/oauth2/v1/token", {
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: new URLSearchParams({
                            client_id: "P2dwkyWomBkHvDnfNz7te0NftYFU",
                            client_secret: "<Descope Access Key>",
                            grant_type: "refresh_token",
                            refresh_token: token.refresh_token,
                        }),
                        method: "POST",
                    })
    
                    const tokens = await response.json()
    
                    if (!response.ok) throw tokens
    
                    return {
                        ...token,
                        access_token: tokens.access_token,
                        expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
                        refresh_token: tokens.refresh_token ?? token.refresh_token,
                    }
                } catch (error) {
                    return {...token, error: "RefreshAccessTokenError"}
                }
            }
        },
    
        async session({session, token}) {
            if (token.profile) {
              session.user = token.profile;
            }
    
            session.error = token.error
            session.accessToken = token.access_token
            return session
        },
    }
}  


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
