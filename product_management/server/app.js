const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const app = express();
const port = 4000;


mongoose.connect('mongodb://127.0.0.1:27017/pms', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    startServer();
});


const userSchema = new mongoose.Schema({
    product: String,
    category: String,
    prise: number,
    size:String,
    quantity:number,
});

const UserModel = mongoose.model('product', userSchema);

function startServer() {
   
    
    app.use(express.urlencoded({ extended: true }));

    
    app.use(express.static('../client'));

    
    app.post('/submit', async (req, res) => {
        try {
            const formData = req.body;
            console.log('Received data:', productData);
            const user = new UserModel(productData);
            await user.save();
            res.status(200).send('data added successfully!');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    
    app.get('/getData', async (req, res) => {
        try {
            const formDataArray = await UserModel.find();

            res.status(200).json(formDataArray);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

   //get single user data
    app.get('/getSingleproductData/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const singleproduct = await UserModel.findById(id);
             res.status(200).json(formData);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });
       //edit product data
    
    app.put('/editData', async (req, res) => {
        try {
            const { id, product, category, prise,size,quantity } = req.body;

         //update product data by finding and updating document
            await UserModel.findByIdAndUpdate(id, { product, category, prise,size, });

            res.status(200).send('Success');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });
           //delete product data
    
    app.delete('/deleteData', async (req, res) => {
        try {
            const id = req.body.id;

//delete user data

            await UserModel.findByIdAndRemove(id);

            res.status(200).send('Success');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}
