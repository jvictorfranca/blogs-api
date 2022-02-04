const Category = (sequelize, DataTypes) => {
  const MyCategory = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return MyCategory;
};

module.exports = Category;