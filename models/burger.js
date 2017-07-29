


module.exports = function(sequelize, DataTypes){
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        lens: [1,100]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });
  return Burgers;
};

