
var gal = {
init : function() {
if (!document.getElementById || !document.createElement || !document.appendChild) return false;
if (document.getElementById('image-gallery')) document.getElementById('image-gallery').id = 'jquery-gallery';
var li = document.getElementById('jquery-gallery').getElementsByTagName('li');
li[0].className = 'active';
for (i=0; i<li.length; i++) {
li[i].style.backgroundImage = 'url(' + li[i].getElementsByTagName('img')[0].src + ')';
li[i].title = li[i].getElementsByTagName('img')[0].alt;
gal.addEvent(li[i],'click',function() {
var im = document.getElementById('jquery-gallery').getElementsByTagName('li');
for (j=0; j<im.length; j++) {
im[j].className = '';
}
this.className = 'active';
document.getElementById('gallery-caption').innerHTML = this.title;
});
}
},
addEvent : function(obj, type, fn) {
if (obj.addEventListener) {
obj.addEventListener(type, fn, false);
}
else if (obj.attachEvent) {
obj["e"+type+fn] = fn;
obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
obj.attachEvent("on"+type, obj[type+fn]);
}
}
}
gal.addEvent(window,'load', function() {
gal.init();
});
