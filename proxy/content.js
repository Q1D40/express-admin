var models = require('../models');
var Content = models.Content;

/**
 * 获取搜索内容
 * @param {Json} condition
 * @param {Function} callback
 */
exports.getContents = function(condition, callback){
  Content.find(condition).sort({weight: -1}).exec(callback);
};

/**
 * 设置权值
 * @param {ObjectId} _id
 * @param {Number} weight
 * @param {Function} callback
 */
exports.setWeight = function(_id, weight, callback){
  Content.update({_id: _id}, {$set:{weight: weight}}, function(err){
    callback(err);
  });
};