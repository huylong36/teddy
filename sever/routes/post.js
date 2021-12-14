const express = require('express')
const router = express.Router(); 
const verifyToken = require('../middleware/auth')
const Post = require('../models/Post');
const { post } = require('./auth');



router.get('/' , verifyToken,async (req,res) =>{
    console.log('req.query.userId' , req.query.userId);
    try {
        const posts = await Post.find({user:req.query.userId}).populate('user' , ['username'])
        res.json({success:true , posts})
    } catch (error) {
        console.log(error);
    }
})



router.post('/' , verifyToken, async (req,res)=>{
    const {title,description,url,status ,user} = req.body

    if(!title){
        return res.status(400).json({success:false ,message : "Tilte is require..."})
    }
    if(!user){
        return res.status(400).json({success:false , message:"user ? "})
    }
    try {
        const newPost = new Post({
            title,
            description,
            url:(url.startsWith('https://')) ? url : `https://${url}`,
            status:status || 'TO LEARN',
            user: req.userId,
        })
        await newPost.save();
        res.json({success:true,message:'Successs....',newPost})
    } catch (error) {
        console.log(error)
    }
})


//UPDATE

router.put('/:id' , verifyToken,async (req,res)=>{
    const {title,description,url,status,userId} = req.body
    if(!title){
        return res.status(400).json({success:false ,message : "Tilte is require..."})
    }
    try {
        let updatePost = ({
            title,
            description:description || '',
            url:(url.startsWith('https://')) ? url : `https://${url}`,
            status:status || 'TO LEARN',
            user: userId,
        })
        const postUpdateCondition = {_id:req.params.id , user:userId}
        console.log('postUpdateCondition' , postUpdateCondition);

        res.json({success:true,message:"Good" , post:updatePost})
        // user not authorize to update post 
        if(!updatePost){
            return res.status(401).json({success:false , message:"Post not found"})
        }
        updatePost =  await  Post.findOneAndUpdate(postUpdateCondition , updatePost,{new:true})
        return res.status(200).json({success:true , message:"ok", updatePost})
    } catch (error) {
        console.log(error)
    }
})


//Delete
router.delete(':/id' , verifyToken, async (req,res)=>{
    const {userId} = req.body
    try {
        const postDeleteCondition  = {_id:req.params.id , userId}
        console.log('postDeleteCondition' , postDeleteCondition);
        const deletedPost = await Post.findOneAndDelete(postDeleteCondition)
        if(!deletedPost){
            return res.status(401).json({success:false , message:"Post not found"})
        }
        return res.status(200).json({success:true , message:"ok", post:deletedPost})

    } catch (error) {
        console.log(error);
    }
})
module.exports = router