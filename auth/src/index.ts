import express from 'express';
import {json} from 'body-parser';
import {currentUserRouter} from './routes/current-user';
import {signupRouter} from './routes/signup';
import {signinRouter} from './routes/signin';
import {signoutRouter} from './routes/signout';
import {errorHandler} from './middlewares/error-handler';

const port = 3000;
const app = express();

app.use(json());
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
