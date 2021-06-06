const db = require("../../models");
const User = db.User;
const Post = db.Post;

async function postUsers(req, res) {
  const { name, email, post_id } = req.body;
  u = await User.create({
    name,
    email,
    post_id,
  });
  return res.send(u);
}

async function getUsers(req, res) {
  let us = await User.findAll({
    attributes: ["name", "email"],
    include: [{ model: Post,as:'postDetail' }],
    where: {
      id: 8,
    },
  });
  return res.send(us);
}

module.exports = {
  postusers: postUsers,
  getusers: getUsers,
};
