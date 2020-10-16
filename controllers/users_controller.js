module.exports.chooseBetweenSignIn = function(req,res){
    return res.render('sign_in_category',{
        title: "SignIn Category"
    });
}

module.exports.chooseBetweenSignUp = function(req,res){
    return res.render('sign_up_category',{
        title: "SignUp Category"
    });
}

module.exports.categorySignIn = function(req,res){
    if(req.body.employee){
        return res.render('employee/user_sign_in',{
            title: "Job Seeker | SignIn"
        })
    }else{
        return res.render('employer/user_sign_in',{
            title: "Employer | SignIn"
        })
    }
}

module.exports.categorySignUp = function(req,res){
    if(req.body.employee){
        return res.render('employee/user_sign_up',{
            title: "Job Seeker | SignUp"
        })
    }else{
        return res.render('employer/user_sign_up',{
            title: "Employer | SignUp"
        })
    }
}


module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err,user){
        if(err){req.flash('error', err); return}
        
        if(!user){
            User.create(req.body, function(err, user){
                if(err){req.flash('error', err); return}

                return res.redirect('sign-in');
            })
        }else{
            req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back');
        }

    });
}

module.exports.createSession = function(req,res){
    return res.redirect('/');
}