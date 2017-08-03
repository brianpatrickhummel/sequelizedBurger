module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validation: {
        lens: [1, 55]
      },
      set(val) {
      this.setDataValue('burger_name', val.toUpperCase());
    }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });
  Burgers.associate = function (db) {
    db.Burgers.belongsTo(db.Customers, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return Burgers;
};

