var models = require('../models');
var Word = models.Word;

/**
 * 获取搜索词
 * @param {Json} condition
 * @param {Number} limit
 * @param {Number} skip
 * @param {Function} callback
 */
exports.getWords = function(condition, limit, skip, callback){
  Word.find(condition, 'word timeStamp').limit(limit).skip(skip).sort({_id: 1}).exec(callback);
};

/**
 * 获取搜索词个数
 * @param {Json} condition
 * @param callback
 */
exports.getWordsCount = function(condition, callback){
  Word.find(condition).count().exec(callback);
};

/**
 * 获取一个单词
 * @param {Json} condition
 * @param {Function} callback
 */
exports.getWord = function(condition, callback){
  Word.findOne(condition, 'word timeStamp').sort({_id: 1}).exec(callback);
};