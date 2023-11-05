"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const port = 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cors())
// app.use(router)
/***
 * @ Out cors */
app.use((req, res, next) => {
    // Quais são os métodos que a conexão pode realizar na API
    // req.header("Access-Control-Allow-Methods");
    // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    // Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    app.use((0, cors_1.default)());
    app.use(routes_1.router);
    next();
});
app.listen(port, () => {
    console.log('Server is running! porta: ' + port);
});
//# sourceMappingURL=server.js.map