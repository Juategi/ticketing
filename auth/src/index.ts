import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import mongoose from 'mongoose';

import {currentUserRouter} from './routes/current-user';
import {signupRouter} from './routes/signup';
import {signinRouter} from './routes/signin';
import {signoutRouter} from './routes/signout';
import {errorHandler} from './middlewares/error-handler';
import {NotFoundError} from './errors/not-found-error';

const port = 3000;
const app = express();

app.use(json());
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all('*', () => {
    throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

start();

