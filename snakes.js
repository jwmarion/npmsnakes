

function makeSnake(size, type, callback){
  var arr = [];
  var s = '';
  var e = '';

  if(type=='snake'){
    s = '««';
    e = "ºº>";
    b = '««';
  }

  if (type == 'star'){
    s= '.¤~';
    b = '*';
    e = '~¤.';
  }

  if (type == 'tTubes'){
    s = '╔';
    b='═';
    e='╗';
  }
  if (type == 'bTubes'){
    s='╚';
    b='═';
    e='╝';
  }
  if (type == 'joker'){
    s="¿?";
    b="¿?";
    e='';
  }

  arr.push(s);
  for (var i = 0; i < size; i++){
    arr.push(b);
  }
  arr.push(e);
  var a =arr.reduce(function(a,b){
    return(a+b);
  });
  return a;
}

module.exports = makeSnake;
