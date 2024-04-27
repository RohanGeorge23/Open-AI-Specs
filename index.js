"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @ts-ignore
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const openaispec_1 = require("./openaispec");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
let users = [
    { id: 1, name: 'Rohan' },
    { id: 2, name: 'George' }
];
app.get('/users', (req, res) => {
    const { name } = req.query;
    if (name) {
        // @ts-ignore
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    }
    else {
        res.json(users);
    }
});
app.use('/documentaions', swagger_ui_express_1.default.setup(openaispec_1.docs));
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
