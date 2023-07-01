"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express');
const express_1 = __importDefault(require("express"));
//const dotenv = require('dotenv');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Esto ha sido todo por hoy');
});
app.listen(port, () => {
    console.log(`[server]: Hola desde http://localhost:${port}`);
});
