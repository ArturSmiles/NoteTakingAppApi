const router = require("express").Router()
const notesRouter = require("./notes")
const userRouter = require("./users")


router.use("/notes",notesRouter)
router.use("/users",userRouter)


module.exports = router;