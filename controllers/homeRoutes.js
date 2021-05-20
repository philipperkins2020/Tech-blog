

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
        res.redirect('/mySafe');
        return;
    }
    res.render('newuser');
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






module.exports = router