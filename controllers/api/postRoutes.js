const router = require('express').Router();
const { Post } = require('../../models');




router.get('/', async (req, res) => {
  try {
  const postData = await Post.findAll({});
  console.log(postData);
  res.status(200).json(postData);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
      userId: req.session.user_id
    }
    const postData = await Post.create(newPost);
     
      res.status(200).json(postData);
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
      userId: req.session.user_id
    }
    const postData = await Post.update(newPost, {
      where: {
        id:req.params.id
      }
    });
     
      res.status(200).json(postData);
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
