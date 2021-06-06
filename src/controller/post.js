const db = require('../../models');
const Post =db.Post;
const User=db.User

async function postAdd(req, res) {
  const { name, title, content, user_id } = req.body;
  const p = await Post.create({
    name,
    title,
    content,
    user_id,
  });
  return res.send(p);
}

async function getPost(req, res) {
  const pos = await Post.findAll({
      include:[
          {
              model:User,
              as:'userDetail'
          }
      ]
  });
  return res.send(pos);
}

module.exports = {
  postadd: postAdd,
  getpost: getPost,
};
