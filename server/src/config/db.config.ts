export const dbConfig = ()=>({
    db : {
        port : process.env.DB_PORT,
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        pass : process.env.DB_PASS,
        name : process.env.DB_NAME
    }
})