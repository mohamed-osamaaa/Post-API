import express from "express";

import PostRoute from "./routes/PostRoute";

const app = express();
app.use(express.json());
app.use("/api/posts", PostRoute);
const port: number = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
