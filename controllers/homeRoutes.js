

const router = require('express').Router()




//localhost3001,

router.get ('/', async(req,res) =>{
    console.log(req)
res.render('homepage')
});
//localhost3001 login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/mydash');
      return;
    }
    res.render('login');
});

//localhost3001 sign up
router.get('/newuser', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/mydash');
        return;
    }
    res.render('newuser');
});

router.get('/singlepost', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/mydash');
        return;
    }
    res.render('singlepost');
});
//localhost3001 dashboard

//localhost3001 log out
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

router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('individual-post', { post });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', (req, res) => {
    res.render('singlepost')
    }); 
    
    
    router.get('/create', (req, res) => {
    res.render('newpost')
    }); 
    
    router.get('/edit', (req, res) => {
    res.render('edit-post')
    }); 


module.exports = router