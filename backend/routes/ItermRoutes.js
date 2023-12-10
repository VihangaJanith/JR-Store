const express = require('express');
const router = express.Router();
const Items = require('../Models/ItemsModel')


router.post("/add-item", async(req, res) => {
    try{

        const Item = {
            name : req.body.name,
            batch : req.body.batch,
            quantity : req.body.quantity,
            addedUser : req.body.addedUser,
            lastUpdated : req.body.lastUpdated,
            status : req.body.status,
            other : req.body.other,
        }
        const newItem = new Items(Item);
        await newItem.save()
        res.send({newItem,success:true});
    }catch(err){
        res.send(err)
    }
})

router.get("/all-items", async (req, res) => {
    try {
        const items = await Items.find().exec();
        return res.status(200).json({
            success: true,
            items
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const item = await Items.findById(req.params.id).exec();
        return res.status(200).json({
            success: true,
            item
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }

});


router.delete('/delete/:id', async (req, res) => {
    try {
        const item = await Items.findByIdAndDelete(({ _id: req.params.id }));

        if (!item) {
            return res.status(404).json({
                message: "Item not found",
            });
        }

        return res.json({
            message: "Delete successful",
            item
        });
    } catch (err) {
        return res.status(400).json({
            message: "Delete unsuccessful",
            error: err.message
        });
    }
});


router.put("/update", async(req, res) =>{
    try{
        const id = req.body._id


        const updateItem = {
            name : req.body.name,
            batch : req.body.batch,
            quantity : req.body.quantity,
            addedUser : req.body.addedUser,
            lastUpdated : req.body.lastUpdated,
            status : req.body.status,
            other : req.body.other,

        }

        const updated = await Items.findByIdAndUpdate(id, updateItem)
        res.send(updated)

    }catch(err){
        res.send(err)
    }
})
module.exports = router;