//= require jquery
//= require bootstrap
//= require_tree .

var classes = ['iphone', 'mini', 'ipad', 'macbook', 'imac'];
var current = 0;

function setClass() {
  current++;
  
  if (current >= classes.length) {
    current = 0;
  }
  
  var device = document.getElementsByClassName('device')[0];
  device.setAttribute('class', ['device', classes[current]].join(' '));
  
  setTimeout(setClass, 2000);
};

setTimeout(setClass, 2000);