import express from 'express';
// @ts-ignore
import swaggerUi from 'swagger-ui-express';
import { docs } from './openaispec';


const app = express();
const port = 3000;

app.use(express.json());


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
    } else {
        res.json(users);
    }
});
app.use('/documentaions', swaggerUi.setup(docs))

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});