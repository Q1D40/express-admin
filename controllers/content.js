/**
 * content控制器
 */
var Word = require('../proxy').Word;
var Content = require('../proxy').Content;
var EventProxy = require('eventproxy');

/**
 * 内容列表
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.list = function (req, res, next){
  var ep = new EventProxy();
  var wd = req.query.wd;
  var ajax = req.query.ajax;
  // 设置摸板
  ep.all('contents', function(contents){
    var data = {
      title: "内容列表",
      menuGroup: "searchWords",
      wd: wd,
      contents: contents
    };
    var tpl = "list";
    if(ajax) tpl = "ajax";
    res.render('content/' + tpl, data);
  });
  // 获取内容列表
  ep.bind('word_id', function(word_id){
    Content.getContents({word_id: word_id}, function(err, contents){
      if(err){
        next(err);
      }else{
        if(contents)
          ep.emit('contents', contents);
        else
          ep.emit('contents', []);
      }
    });
  });
  if(wd){
    // 获取词条id
    Word.getWord({word: wd}, function(err, word){
      if(err){
        next(err);
      }else{
        if(word)
          ep.emit('word_id', word._id);
        else
          ep.emit('contents', []);
      }
    });
  }else{
    ep.emit('contents', []);
  }
};

/**
 * 修改权值
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.changeWeight = function (req, res, next){
  var _id = req.body._id;
  var weight = req.body.weight;
  Content.setWeight(_id, weight, function(err){
    var resJson = {
      "err": err
    };
    res.send(resJson);
  });
};