import { App } from './app'
import * as dotenv from 'dotenv'
dotenv.config()

new App().server.listen(process.env.PORT || 3000)
