/**
 * user控制器
 */

/**
 * 用户欢迎页
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.welcome = function (req, res, next){
  var date = new Date();
  var hour = date.getHours();
  var hello = "";
  if(hour < 6)       hello = "夜猫子，该睡觉了!!!";
  else if(hour < 8)  hello = "新的一天开始了哦!";
  else if(hour < 9)  hello = "早餐吃了吗?";
  else if(hour < 10) hello = "好心情 好运气!";
  else if(hour < 11) hello = "欢迎来到地球~";
  else if(hour < 12) hello = "工作辛苦了!";
  else if(hour < 13) hello = "别忘了吃午饭哦!";
  else if(hour < 14) hello = "没有午休的习惯啊?";
  else if(hour < 15) hello = "保持积极的心态!!";
  else if(hour < 16) hello = "相逢的人会再相逢!";
  else if(hour < 18) hello = "今天工作还顺利吧?!";
  else if(hour < 20) hello = "终于等到你了 ^_^";
  else if(hour < 22) hello = "晚上别玩得太晚了哦!";
  else if(hour < 24) hello = "夜深了!记得早点休息呀!";
  var data = {
    title: "welcome",
    hello: hello,
    menuGroup: ""
  };
  res.render('user/welcome', data);
};