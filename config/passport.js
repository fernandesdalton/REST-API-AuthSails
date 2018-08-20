const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt-nodejs');


//Serializar Usuário

passport.serializeUser(function(user, cb){
    cb(null, user.id);
});

//Deserializar Usuário

passport.deserializeUser(function(id, cb){
    User.findOne({id}).exec(function(err, user){
        cb(err, user);
    });
})

//Local

passport.use(new LocalStrategy({
        usernameField: 'username',
        passportField: 'password'
    }, function(username, password, cb){
    User.findOne({username: username}).exec(function(err, user){
        if(err) return cb(err);
        if(!user) return cb(null, false, {message: 'Nome de usuário não encontrado!'});

        bcrypt.compare(password, user.password, function(err, res){
            if(!res) return cb(null, false, {message: 'Senha inválida!'});
            return cb(null, user, {message: 'Login Sucesso!'});
        })
    });
}));

