const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const session = require('express-session');
const User = require('../models/User');
const crypto = require('crypto');
const Product = require("../models/Product");

class SitesController{
    // [GET] /register
    viewRegistration(req,res,next){
        res.render('registration');
    }
    // [POST] /register
    async register(req, res,next){
        const { username, email, password } = req.body;
        try {
            // Check if the username already exists
            const existingUser = await User.findOne({ username: username });
            if (existingUser) {
                return res.status(400).json({ message: 'Username already exists' });
            }
            // Check if the email already exists
            const existingEmail = await User.findOne({ email: email });
            if (existingEmail) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const user = new User({ username, password, email});
            await user.save();
            req.session.userId = user._id;
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }

    // [GET] /

    async home(req, res, next) {
        try {
            const products = await Product.find();
            res.render('home', {
                products: mutipleMongooseToObject(products)
            });
            //console.log(products);
        } catch (error) {
            next(error);
        }
    }
    // [GET] /login
    login(req, res, next) {
        res.render('login');
    }
}

module.exports = new SitesController();