export const appConfig = ()=>({
    app : {
        port : Number(process.env.APP_PORT),
        host : process.env.APP_HOST
    }
})