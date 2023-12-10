import express from 'express';
import {json} from 'body-parser';

const app = express();
app.use(json());
const port = 3000;

app.get('/api/users/currentuser', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
