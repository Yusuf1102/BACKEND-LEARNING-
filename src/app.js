const express = require("express")

const app = express();
//middleware is used to data readable for express
app.use(express.json())

//array of objects to store multiple note
const notes = [] 
// title , description 

//Post Api 
app.post('/notes',(req,res) => {
    //save data into notes array
        notes.push(req.body);

        // send response 
        res.status(201).json({ 
            message: "note created successfuly"})
        
})


// Get /notes
app.get('/notes', (req,res) =>{
        res.status(200).json({
            message : "notes fetch successfully",
            notes : notes
        })
})

// Delete notes/:index
app.delete('/notes/:index', (req,res)=>{
   const index = req.params.index
//    console.log(index);
delete notes [index]

res.status(200).json({
    message : "deleted node successfully"
})
   
})
//Patch notes/:index
app.patch('/notes/:index', (req,res)=>{
    const index = req.params.index
    const description = req.body.description
    

    notes [ index ].description = description

    res.status(200).json({
        message:"note updated succesfully"
    })
})

module.exports = app