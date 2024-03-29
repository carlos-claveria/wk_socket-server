"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var router_1 = __importDefault(require("./routes/router"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var server = new server_1.default();
// ----------------------------------------------------- BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
// Para que bodyparser devuelva la información en un JSON
server.app.use(body_parser_1.default.json());
// ------------------------------------------------------ CORS
// Permito que culquier persona acceda a los servicios
server.app.use(cors_1.default({ origin: true, credentials: true }));
// Instancia de express Router creada en routes/router.ts
server.app.use('/', router_1.default);
server.start(function () { console.log("Servidor en puerto " + server.port); });
