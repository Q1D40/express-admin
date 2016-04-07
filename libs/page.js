/**
 * 分页
 */

/**
 * 获取分页
 * @param {Number} current
 * @param {Number} total
 */
exports.getPage = function(current, total){
  var page = {
    current: current,
    pre: 0,
    next: 0,
    left: [],
    right: []
  };
  if(current <= 1)
    page.pre = 0;
  else
    page.pre = current - 1;
  if(current >= total)
    page.next = 0;
  else
    page.next = current + 1;
  if(current > 5){
    page.left.push(1);
    page.left.push(2);
    page.left.push('...');
    page.left.push(current - 2);
    page.left.push(current - 1);
  }else{
    for(var i = 1; i < current; i++){
      page.left.push(i);
    }
  }
  if((total - current) > 3){
    if(current > 2){
      page.right.push(current + 1);
      page.right.push(current + 2);
      page.right.push('...');
    }else{
      for(var i = 1; i <= (5 - current); i++){
        page.right.push(current + i);
      }
      page.right.push('...');
    }
  }else{
    for(var i = (current + 1); i <= total; i++){
      page.right.push(i);
    }
  }
  return page;
};