const router = require("express").Router()
const Note = require("./schema")
const q2m = require('query-to-mongo')
// all notes


router.get("/",async(req,res)=>{
    try {
        const query = q2m(req.query)
        const filteredNotes = await Note.find(query.criteria, query.options)
        res.send(filteredNotes)
    } catch (error) {
        res.status(500).send(e.message)
    }
})


router.get("/tags",async(req,res)=>{
    try {
        const notes =  await  Note.find({},{tags:1}).distinct("tags");
        res.send(notes);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// get single note
router.get("/:id",async(req,res)=>{
    try {
        const note =  await  Note.findById(req.params.id);
        res.send(note);
    } catch (error) {
        res.status(500).send(e.message)
    }

})
// create one
router.post("/",async(req,res)=>{
    try {
        const note =  await new Note(req.body).save()
        res.status(201).send(note);
    } catch (error) {
        res.status(500).send(e.message)
    }
})



router.put("/:id",async(req,res)=>{
    try {
        const note =  await  Note.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(note);
    } catch (error) {
        res.status(500).send(e.message)
    }

})


router.post("/:id/tag",async(req,res)=>{
    try {
        const note =  await  Note.findByIdAndUpdate(req.params.id,{$push:{tags:req.body.tag}},{new:true});
        res.send(note);
    } catch (error) {
        res.status(500).send(e.message)
    }

})

router.delete("/:id/tag",async(req,res)=>{
    try {
        const note =  await  Note.findByIdAndUpdate(req.params.id,{$pull:{tags:req.body.tag}},{new:true});
        res.send(note);
    } catch (error) {
        res.status(500).send(e.message)
    }

})


router.delete("/:id",async(req,res)=>{
    try {
        const note =  await  Note.findByIdAndDelete(req.params.id);
        res.send("DELETED");
    } catch (error) {
        res.status(500).send(e.message)
    }

})






module.exports = router;