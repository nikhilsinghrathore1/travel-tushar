var express = require('express');
var router = express.Router();
const userModel = require("./users")
const upload = require("./multer");
const profilemodel = require("./profile")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const post = await userModel.find();
  const pro = await profilemodel.find();
  console.log(pro);
  res.render('index', {post,pro});
});

router.post("/uploadNewPost",upload.single("new-post"),async(req,res)=>{
  
  const pModel = await userModel.create({
    image:req.file.filename,
    imageText:req.body.discription,
  })

  // user.posts.push(postData._id)
  // user.save()r
  res.redirect("/")
})
router.post("/profileupload",upload.single("profileImg"),async(req,res)=>{
  
  const Model = await profilemodel.create({
    profileimage:req.file.filename,
    
  })
  res.redirect("/")
})
module.exports = router;
