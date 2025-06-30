import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// GET all posts
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find({});
        // Fix: Check array length, not truthiness
        if(posts.length === 0) {
            return res.status(200).json({
                success: true, 
                message: "No posts found", 
                data: []
            });
        }
        res.status(200).json({success: true, data: posts});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// POST new post
router.post('/', async(req, res) => {
    const {title, content} = req.body;
    
    // Fix: Add return statement
    if(!title || !content){
        return res.status(400).json({message:'Please fill all fields'});
    }
    
    const post = new Post({
        title, 
        content
    });
    
    try {
        // Fix: Use lowercase 'post' instead of 'Post'
        const createdPost = await post.save();
        res.status(201).json({
            message:'Post Created', 
            success: true,
            data: createdPost
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;