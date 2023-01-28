import 'dotenv/config'
export const config = {
    port : process.env.SERVER_PORT,

    jwt: {
        secret : 'secret'
    }
}