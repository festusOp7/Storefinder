import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost, getPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id',getPost)
router.patch('/:id', updatePost);
router.patch('/:id', deletePost);
router.patch('/:id/likePost', likePost);


export default router;
