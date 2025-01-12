import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './utils/db.js';
import userRoute from './route/user.route.js';
import companyRoute from './route/company.route.js';
//import jobRoute from "./route/job.route.js";

dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
    origin: "http//localhost:5173",
    credentials: true,
}
app.use(cors(corsOption));

app.use('/api/v1/user', userRoute)
app.use('/api/v1/company', companyRoute);
//app.use('/api/v1', jobRoute);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})