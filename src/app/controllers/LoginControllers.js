const Accounts = require("../models/Accounts");
const Session = require("express-session");

class LoginControllers{
    index(req, res){
        res.render('login', {layout: false});
    }

    setSession(req, res, next){
        Accounts.findOne({
            user_name: req.body.username,
            password: req.body.password,
        })
            .then(account => {
                if(account.full_name){
                    res.Session.User = {
                        username: account.user_name,
                        fullname: account.full_name
                    }
                    res.render("home");
                }else next();
            })
            .catch(next => {
                res.redirect('login');
            });
    }
}

module.exports = new LoginControllers();