/**
 * word控制器
 */
var Word = require('../proxy').Word;
var page = require('../libs/page');
var EventProxy = require('eventproxy');

/**
 * 词条列表
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.list = function (req, res, next){
  var ep = new EventProxy();
  var wd = req.query.wd;
  var p = req.query.p;
  p = Number(p);
  if(isNaN(p) || p <= 0) p = 1;
  var perPage = 100;
  // 设置摸板
  ep.all('count', 'allPage', 'words', function(count, allPage, words){
    var pagination = page.getPage(p, allPage);
    var data = {
      title: "词条列表",
      menuGroup: "searchWords",
      wd: wd,
      words: words,
      pagination: pagination,
      count: count,
      allPage: allPage
    };
    res.render('word/list', data);
  });
  var condition = {};
  if(wd)
    condition = {word: new RegExp(wd,'i')};
  // 获取词条列表
  ep.bind('count', function(count){
    var allPage = Math.ceil(count / perPage);
    if(allPage < 1) allPage = 1;
    ep.emit('allPage', allPage);
    if(p > allPage) p = allPage;
    var start = perPage * (p - 1);
    if(count > 0) {
      Word.getWords(condition, perPage, start, function (err, words) {
        if (err)
          next(err);
        else
          ep.emit('words', words);
      });
    }else{
      ep.emit('words', []);
    }
  });
  // 获取词条总数
  Word.getWordsCount(condition,function(err, count){
    if(err)
      next(err);
    else
      ep.emit('count', count);
  });
};