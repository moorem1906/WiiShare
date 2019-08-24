 module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {
    freezeTableName: true
  }
  
  );
  return Users;
};
