module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        foreignKey: true,
        type: DataTypes.INTEGER
      },
      published: DataTypes.DATE,
      updated: DataTypes.DATE
    },
    { timestamps: false },
    );
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
    };
  
    return BlogPost;
  };