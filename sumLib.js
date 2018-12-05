function sum(x,y){
  return x+y;
}

function sub(x, y){
  if(x>y){
    return x-y
  }
  return y-x
}

module.exports = {sum, sub}
