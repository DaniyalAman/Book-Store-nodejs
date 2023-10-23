var express = require('express');
var router = express.Router();
const book=[]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.post('/register', function(req, res, next) {
 book.push(req.body);
 res.redirect("/show");
});
router.get('/show', function(req, res, next) {
 res.render("show",{book:book});
});
router.get('/Detail/:index', function(req, res, next) {
  const index=req.params.index;
  const Book = book[index];
  res.render('Detail',{book : Book, index: req.params.index});
 });
 router.get('/delete/:index', function(req, res, next) {
  book.splice(req.params.index,1);
  res.redirect('/show');
 });
 router.get('/update/:index', function(req, res, next) {
  const index=req.params.index;
  const Book = book[index];
  res.render('update',{book : Book, index: req.params.index});
 });
 router.post('/update/:index', function(req, res, next) {
  book[req.params.index]=req.body;
  res.redirect("/Detail/:index");
 });
 
module.exports = router;
