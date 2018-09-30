const {Router} = require("express");
const router = Router();
const articleModel = require('../database/model/article.js')
const categoryModel = require("../database/model/categories")
router.post('/article', (req, res) => {
    if (req.session.user) {
        let { title,content,contentText,category} = req.body
        let author = req.session.user.username
        articleModel.create({title,content,contentText,category,author:req.session.user._id})
        .then(data=>{
                        res.json({
                            code:200,
                            msg:"发布成功"
                            })
                        })  
    }else{
        res.json({
            code:403,
            msg:"登录后才能发布笔记"
        })
    }
})

router.get("/article",(req,res)=>{
    let {pn=1,size=5} = req.query
    pn = parseInt(pn)
    size = parseInt(size)
    articleModel.find().skip((pn-1)*size).limit(size).sort({_id:-1}).populate({
        path: "author",
        select: "-password -email"
    })
    .populate({
        path:"category"
    })
    .then(data=>{
        res.json({
            code:200,
            data
        })
    })
})

router.get("/article/:id",(req, res)=>{
    const {id} = req.params
    articleModel.findById(id).populate({
            path: "author",
            select: "-password -email"
        })
        .populate({
            path: "category"
        })
        .then(data => {
            res.json({
                code: 200,
                data
            })
        })
})
module.exports = router;