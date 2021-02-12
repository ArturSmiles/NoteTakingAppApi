const router = require("express").Router()
const User = require("./schema")


router.get("/",async(req,res)=>{
    try {
        const Users =  await  User.find();
        res.send(Users);
    } catch (error) {
        res.status(500).send(e.message)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const User =  await  User.findById(req.params.id);
        res.send(User);
    } catch (error) {
        res.status(500).send(e.message)
    }

})

router.post("/",async(req,res)=>{
    try {
        const User =  await new User(req.body).save()
        res.status(201).send(User);
    } catch (error) {
        res.status(500).send(e.message)
    }
})



router.put("/:id",async(req,res)=>{
    try {
        const User =  await  User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(User);
    } catch (error) {
        res.status(500).send(e.message)
    }

})


router.delete("/:id",async(req,res)=>{
    try {
        const User =  await  User.findByIdAndDelete(req.params.id);
        res.send("User Deleted");
    } catch (error) {
        res.status(500).send(e.message)
    }

})



module.exports = router;