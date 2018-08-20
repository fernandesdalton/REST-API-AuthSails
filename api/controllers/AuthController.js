/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var passport = require('passport');
module.exports = {
  // Função do Login
    login: function(req, res){
        passport.authenticate('local', function(err, user, info){
            if(err || !user){
                return res.send({message: info.message, 
                    status:"failed"
                });
            }

            req.login(user, function(err){
                if(err) res.send({message:err, status:"failed"});
                sails.log('Usuário '+user.id+' está logado!')
                res.send({message: 'Login efetuado com Sucesso', status: "success"});
            })
        })(req, res);
    },
  // Função do Logout
    logout: function(req, res){
        req.logout();
        res.send({message: "Usuário desconectado", status: "success"});
    },
  //Função do Registro
    register: function(req, res){
        data = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description
        }

        User.create(data).fetch().exec(function(err, user){
            if(err) return res.negotiate(err);

            //TODO: Mandar um email para o usuário apos o login

            req.login(user, function(err){
                if(err) res.send(err);
                sails.log('Usuário '+user.id+' está logado!') 
                res.send({message: 'Registro efetuado com Sucesso', status: "success"});
            })
        })
    }

};

