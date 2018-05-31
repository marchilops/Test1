var ball;
ball = create();



//color(ball, 255,0,0);
move(ball,50,50);
colorRandom(ball);




var counter = 0;
while (counter <100){
  create();
   counter++;
  } 



  var list = [];
  list.push(create());
  list.push(create());
  list.push(create());
  list.push(create());
  var i=0;
  var length = list.length;
  while (i < length) {
    var ball = list[i];
    colorRandom(ball);
    i++;
  } 
  
