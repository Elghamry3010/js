/*
document.body.classList.add(localStorage.getItem("pagecolor") || 'red');

var el = document.querySelectorAll(".container .color-switcher li");
var classlist = [];

for (var i = 0; i < el.length; i++) {
  classlist.push(el[i].getAttribute("data-color"));

  el[i].addEventListener(
    "click",
    function () {
      document.body.classList.remove(...classlist);
      document.body.classList.add(this.getAttribute("data-color"));
      localStorage.setItem("pagecolor", this.getAttribute("data-color"));
    },
    false
  );
}

console.log(localStorage.getItem("pagecolor"));






function capitalizeLeetrs(string) {

  var oldArray = string.spilt(' ')
      newArray =[];

      for (var i = 0; < oldArray.length i++) {
        newArray.push(oldArray[i].charAt(0).toUppercase() + oldArray[i].slice(1));
      }

      return newArray.goin(' ');
}

console.log(capitalizeLeetrs('elzero wep school'))





var mytext = 'Hellow from Elzero Wep School This Is Type Writer Effects on text',

i = 0,

mybutton = document.getElementById('button');

mybutton.onclick = function () {
  'use strict';

  var typeWriter = setInterval(function () {

    document.getElementById('type').textContent += mytext[i];
    i = i + 1;

    if (i > mytext.length - 1) {
      clearInterval(typeWriter);
    }  
  }, 100);
};


var myButton = document.getElementById('my-button'),
  myInput = document.getElementById("my-input");

myButton.onclick = function () {
  'use strict';

  if (this.textContent === 'Show Password') {
    myInput.setAttribute('type', 'text');
    this.textContent = 'Hide Password';
  } else {
    myInput.setAttribute('type', 'password');
    this.textContent = 'Show Password';
  }
};




var classList = ["class-one", "class-two", "class-three", "class-four"],
randomkey = Math.floor(Math.random() * classList.length);
document.body.setAttribute('class', classList[randomkey]);




document.getElementById('title').onkeyup = function () {
document.getElementById('title-live').textContent = this.value;
};

document.getElementById('content').onkeyup = function () {
  document.getElementById('content-live').textContent = this.value;
  };
  




  document.addEventListener('contextmenu', function (e) {
    'use strict';
    e.preventDefault();
    console.log('You clicked Right click on mouse')
  });
  




  function showTime () {
    'use strict';

    var now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + secons;
    }
    document.getElementById('clock').textContent = hours + ':'+ minutes + ':' + seconds;
  }
  window.onload = function (){
    'use strict';
    setInterval(showTime, 500);
  };
  



  var myTextarea = document.getElementById('my-text'),
  myspan = document.getElementById('span-text');
  myTextarea.onkeyup = function () {
    'use strict';
    myspan.textContent = 50 - this.value.length;
    if(myspan.textContent < 0) {
      myspan.style.color = '#F00';
    } else {
      myspan.style.color = '#000';
    }
  };



*/

var myElement = document.getElementById("myImg"),
  myImg = ["img/download (1).jpg", "img/download.jpg", "img/images.jpg"];

function changeImge(myElement, myImg) {
  "use strict";
  setInterval(function () {
    var myRandomNum = Math.floor(Math.random() * myImg.length);
    console.log(myRandomNum);
    myElement.src = myImg[myRandomNum];
  }, 1000);
}
changeImge(myElement, myImg);

/*


if (window.location.hash) {
  var hash = window.location.hash.substring(1);

  if (hash === 'mohamed') {

    console.log('Good Mohamed Hach Is Found');
  } else {
    console.log('Bad Theres No Hach In Link');
  }
}





function redirectMe(url) {
  'use strict';
  if (url !== '') {
    window.location = url;
  }
}
*/
