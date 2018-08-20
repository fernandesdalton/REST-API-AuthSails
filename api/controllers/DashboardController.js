/**
 * DashboardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    renderindex: function(req, res){
        return res.view('pages/dashboard', {user: req.user});
    }
};

