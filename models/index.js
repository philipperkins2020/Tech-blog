const User = require('./User');
const Post = require('./Project');
const Comment = require('./Comment');

Post.belongsTo(User,{
  foreignKey: "userId",
  onDelete: 'CASCADE'
});
User.hasMany(Post, {
  foreignKey:"userId"
})

Comment.belongsTo()


module.exports = { User, Project };
