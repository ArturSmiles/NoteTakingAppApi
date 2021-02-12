const {Schema,model} = require("mongoose")




const schema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        default:['Uncategorized']
    },

},{timestamps:true})



module.exports = model('Notes',schema)
