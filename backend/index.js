import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './utils/db.js';
import userRoute from './route/user.route.js';
import companyRoute from './route/company.route.js';
import jobRoute from "./route/job.route.js";
import applicationRoute from './route/application.route.js'

dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
    origin: "https://harsika-job-search.vercel.app/",
    credentials: true,
}
app.use(cors(corsOption));

app.use('/api/v1/user', userRoute)
app.use('/api/v1/company', companyRoute);
app.use('/api/v1', jobRoute);
app.use('/api/v1/application', applicationRoute);

const PORT = 3000 || process.env.PORT;

// Health check endpoint
app.get('/', (req, res) => {
    console.info('Health check endpoint accessed');
    res.status(200).json({ message: 'Welcome to job search API!' });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})
