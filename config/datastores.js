module.exports.datastores = {
  default: {
    /***************************************************************************
    *                                                                          *
                      * CONEXÃO COM O BANCO DE DADOS MYSQL *
    *                                                                          *
    ***************************************************************************/
    adapter: require('sails-mysql'),
    url: 'mysql://root:@localhost:3306/sails',
  }
};
