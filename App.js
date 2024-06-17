import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/Users/routes.js";
import Hello from './hello.js';
import Lab5 from './Lab5/index.js';
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
import cors from "cors";
import session from "express-session";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING) .then(() => {
  console.log('Connected to MongoDB');
  // Implement further debug messages for queries or operations
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});;
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000", 
}));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(
    session(sessionOptions)
  );
  
app.use(express.json());
UserRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000)
