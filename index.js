import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auths.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'

const app = express();

app.use(express.json());

app.use(cors());


app.use(cookieParser());
app.use('/api/auths', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)



app.listen(8800, () => {
	console.log('Connected to Backend');
});
