module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    userId: {
       type: DataTypes.INTEGER,
     },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, field: 'published' },
    updatedAt: { type: DataTypes.DATE, field: 'updated' },
  },
  
  { timestamps: true,
    tableName: 'BlogPosts',
    underscored: false });
    BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};