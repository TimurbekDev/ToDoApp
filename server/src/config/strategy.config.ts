export const strategyConfig =()=>({
    strategy : {
        clientID : process.env.Client_ID,
        clientSecret : process.env.Client_Secret,
        callbackURL : process.env.Callback_URL,
    }
})