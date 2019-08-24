
 module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    product: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.INTEGER
  }, {
    freezeTableName: true
  }
  
  );
  return Product;
};
