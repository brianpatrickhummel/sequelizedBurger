module.exports = function(sequelize, DataTypes){
  var Customers = sequelize.define("Customers", {
    customer_name: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: "an unidentified consumer",
      validation: {
        isAlpha: true, 
        lens: [1,35]
      }
    }
  });
  Customers.associate = function(db) {
    db.Customers.hasMany(db.Burgers, {
      onDelete: "CASCADE"
    })
  }
  return Customers;
};
