var body= { //body 변수에 객체 담기
    setcolor : function(color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color)
    },
    backgroundsetcolor : function(color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color)
    }
} 

var links = {
  setcolor : function(color) {
    /* 
        var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
    */
    $('a').css('color', color);
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
  if(self.value === 'night'){
    body.backgroundsetcolor('black');
    body.setcolor('white');
    self.value = 'day';

    links.setcolor('yellow');
  } else {
    body.backgroundsetcolor('white');
    body.setcolor('black');
    self.value = 'night';

    links.setcolor('blue');

    }
  }