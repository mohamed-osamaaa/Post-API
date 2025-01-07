import { Request, Response, Router } from "express";

import CreatePostDTO from "../dtos/create-post.dto";
import Post from "../models/Post";

const router = Router();
const posts: Post[] = [
    { id: 1, title: "post 1", body: "about post 1" },
    { id: 2, title: "post 2", body: "about post 2" },
];
router.get("/", (req: Request, res: Response) => {
    res.status(200).json(posts);
});
router.post("/", (req: Request, res: Response) => {
    const { title, body } = req.body as CreatePostDTO;
    const newPost = new Post(title, body);
    posts.push(newPost);
    res.status(201).json(newPost);
});
export default router;
