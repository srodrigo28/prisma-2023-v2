import express from 'express'
import { router } from './routes';
import cors from 'cors';

const port = 8080

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
/*** 
 * @ Out cors
app.use((req, res, next) => {
	// Quais são os métodos que a conexão pode realizar na API
    // req.header("Access-Control-Allow-Methods");
    // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    app.use(router)
    next();
});
*/
app.listen(port, () => {
    console.log('Server is running! porta: ' + port)
});