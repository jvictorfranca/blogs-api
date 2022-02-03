const User = (sequelize, DataTypes) => {
  const MyUser = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return MyUser;
};

module.exports = User;