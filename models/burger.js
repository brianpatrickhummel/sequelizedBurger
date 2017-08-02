module.exports = function(sequelize, DataTypes){
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validation: {
        lens: [1,55]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });
  Burgers.associate = function(db) {
    db.Burgers.belongsTo(db.Customers, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return Burgers;
};

