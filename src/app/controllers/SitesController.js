const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const session = require('express-session');
const User = require('../models/User');
const crypto = require('crypto');


class SitesController{
    viewRegistration(req,res,next){
        res.render('registration');
    }
    async register(req, res,next){
        const { username, email, password } = req.body;
        try {
            const user = new User({ username, password, email});
            await user.save();
            req.session.userId = user._id;
            //res.redirect('/set-authentication');
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }
    
    async login(req, res, next) {
    try {
        const { username, password } = req.body;
        console.log('Received login:', { username, password });

        const user = await User.findOne({ username });
        if (user) {
            const isPasswordValid = await user.comparePassword(password);
            if (isPasswordValid) {
                req.session.userId = user._id;
                console.log('User authenticated, session userId set:', req.session.userId);
                res.json({ success: true });
                return;
            } else {
                console.log('Invalid password');
                res.json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu sai' });
                return;
            }
        } else {
            console.log('User not found');
            res.json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu sai' });
            return;
            }
        } catch (error) {
            console.error('Error during login:', error);
            next(error);
        }
    }

    // [GET] /
    async index(req, res, next) {
        try {         
           res.render('home');
        } catch (error) {
            next(error);
        }
    }
}
   

module.exports = new SitesController();