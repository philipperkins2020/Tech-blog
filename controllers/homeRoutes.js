

const router = require('express').Router()
const {Post} = require('../models')



//localhost3001,

router.get('/', async (req, res) => {
    console.log(req)
    res.render('homepage')
});
//localhost3001 login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

//localhost3001 sign up
router.get('/newuser', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('newuser');
});

router.get('/singlepost', (req, res) => {
    if (req.session.logged_in) {
        res.render('singlepost', {
            layout: 'dashboard'
        })
        return;
    }
    res.redirect('/login');
});
//localhost3001 dashboard

//localhost3001 log out

router.get('/dashboard', async (req, res) => {
    //get the posts
    try { 
        console.log(req.session)
      const postData = await Post.findAll({
        where: {
            userId: req.session.user_id
          }
      });
      console.log(postData);
      if (postData) {
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
    //render the posts
  });

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).redirect('/');
        });
    }
    else {
        res.status(204).redirect('/');
    }
});

//localhost 3001 blog post/id
router.get("/edit/:id",  async (req, res) => {
    try {
        const persData = await Post.findByPk(req.params.id, {
        
        });

        const post = persData.get({ plain: true });

        res.render("edit-post", { post});
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
          
        });

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('singlepost', { post });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/newpost",(req, res) => {
    res.render("newpost")
})



module.exports = router