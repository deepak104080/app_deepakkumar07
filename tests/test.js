const request = require('supertest');
const express = require('express');
const app = express();
module.exports = app;
const router = express.Router();

// const restaurantRoute = require('../router/restaurants');
// const menuRoute = require('../router/menu');


// app.use('/menu', menuRoute);
// app.use('/restaurants', restaurantRoute);

// const rest = [
//     {
//         "_id": "62c70bff47a2fceb704e3bc7",
//         "rest_id": "id092",
//         "rest_name": "Master of Momos",
//         "location": "pune",
//         "category": "chicken momos",
//         "image": "https://www.recipehub.in/wp-content/uploads/2020/06/chickenmomos2website-1024x769.jpg",
//         "status": 1,
//         "__v": 0
//     }
// ]

// const menu = [
//     {
//         "_id": "62c5cafbb88eacdc2866546a",
//         "rest_id": "id001",
//         "food_id": "001",
//         "food_name": "Dosa",
//         "food_type": "veg",
//         "food_category": "South Indian",
//         "price": 50,
//         "description": "",
//         "__v": 0
//     },
//     {
//         "_id": "62c5cb53b88eacdc28665478",
//         "rest_id": "id001",
//         "food_id": "033",
//         "food_name": "cheese pizza",
//         "food_type": "veg",
//         "food_category": "snacks",
//         "price": 250,
//         "description": "abc",
//         "__v": 0
//     }
// ]



describe('Foodie App Test', function () {

    it('Testing to see if Jest works', () => {
        expect(1).toBe(1)
      })

    // test('responds to /restaurants/pune', async () => {
    //   const res = await request(app).get('/restaurants/pune');
    //   expect(res.statusCode).toBe(200);
    //   expect(res.json).toEqual(rest);
    // });
    
    // test('responds to /menu/id001', async () => {
    //   const res = await request(app).get('/menu/id001');
    //   expect(res.statusCode).toBe(200);
    //   expect(res.josn).toEqual(menu);
    // });
  
  
  });