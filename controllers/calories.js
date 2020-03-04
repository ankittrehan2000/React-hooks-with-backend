//creating the api

const Cals = require('../models/Calories')

//@desc get all transactions
//@route GET /backend/calories
exports.getTransactions = async (req,res,next) => {
    try{
        const calories = await Cals.find();
        return res.status(200).json({
            count: calories.length,
            data: calories
        })
    }catch(err) {return res.status(500)}
}

//@desc get all transactions
//@route Post /backend/calories
exports.addTransaction = async (req,res,next) => {
    try{
        const { text, amount } = req.body; //pulling out the data from the post request
        const calorie = await Cals.create(text,amount);
        return res.status(201).json({
            success: true,
            data: calorie,
    });
    }
    catch(err){
        
    }
}

//@desc get all transactions
//@route GET /backend/calories/:id
exports.deleteTransaction = async (req,res,next) => {
    try{
        const calorie = await Cals.findById(req.params.id);
        if(!calorie){
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            })
        }
        await calorie.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    }
    catch(err){
        return res.status(500);
    }
}