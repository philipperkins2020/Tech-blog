const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User,{
  foreignKey: "userId",
  onDelete: 'CASCADE'
});
User.hasMany(Post, {
  foreignKey:"userId"
})




module.exports = { User, Post, Comment};
