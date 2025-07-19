import express, { Express } from "express";
import productRoutes from "./routes/product.routes";
import contactRoutes from "./routes/contact.routes";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app: Express = express();

// Middleware
app.use(express.json());

const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};
app.use(cors(corsOptions));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contacts", contactRoutes);

export default app;
