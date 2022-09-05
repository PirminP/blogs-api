module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
    },
    { timestamps: false },
    );
  
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogpost',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId'
      });

      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'
        });
    };
  
    return PostCategory;
  };