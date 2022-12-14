const express = require('express');
const app = express();
const cors = require('cors');
// const restaurantRoute = require('./router/restaurants');
// const menuRoute = require('./router/menu');
// const userRoute = require('./router/user');
// const ordersRoute = require('./router/orders');
// const { default: mongoose } = require('mongoose');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    try{
        console.log('server started...');
        res.send('<h2>Express API running.</h2>')
    }
    catch{
    }
})

app.get('/test1', (req, res) => {
    try{
        console.log('server started on test 1...');
        res.send('<h2>Express API running on test page 1.</h2>')
    }
    catch{
    }
})

app.get('/test2', (req, res) => {
    try{
        console.log('server started on test 2...');
        res.send('<h2>Express API running on test page 2.</h2>')
    }
    catch{
    }
})

// app.use('/restaurants', restaurantRoute);
// app.use('/menu', menuRoute);
// app.use('/user', userRoute);
// app.use('/orders', ordersRoute);

// mongoose.connect('mongodb+srv://testuser001:z9xsFuktzYAs4fMk@cluster0.2eq41.mongodb.net/foodie?retryWrites=true&w=majority')


app.listen(process.env.PORT || 4000);