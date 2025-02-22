import * as  express from "express";
import { AppDataSource } from "./ormconfig";
import userRoutes from "./routers/UserRouter";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("📌 Database connected successfully!");
        app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
    })
    .catch((error) => console.log("❌ Error connecting to database:", error));
