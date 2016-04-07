/**
 * 路由设置
 */
var user = require('./controllers/user');
var word = require('./controllers/word');
var content = require('./controllers/content');

module.exports = function(app){
  app.get('/', user.welcome);
  app.get('/user/welcome', user.welcome);
  app.get('/word/list', word.list);
  app.get('/content/list', content.list);
  app.post('/content/change-weight', content.changeWeight);
};