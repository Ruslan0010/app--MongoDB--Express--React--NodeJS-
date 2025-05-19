import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
.connect('mongodb+srv://ruslan0010:Z0PuoQlMDjPSFcRd@cluster0.xhabo44.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('DB ok'))
.catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hello World');
});

app.post('/auth/login', (req, res) =>{
    console.log(req.body);


if (req.body.email == 'test@test.com'){
    const token = jwt.sign(
    {
    email: req.body.email,
    fullName: 'Ruslan Kuchynskyi',
    }, 
    'secret123',
);
}

    res.json({
        success: true,
        token,
    });
});

app.listen(4444, (err) =>{
    if (err){
        return console.log(err);
    }
  
    console.log('Server OK'); 
});