//Javascript code from https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var asn = 'AS400191';
var speed = 500;
function logoLoadingAnimation() {
  if (i < asn.length) {
    document.getElementById("logo").innerHTML += asn.charAt(i);
    i++;
    setTimeout(logoLoadingAnimation, speed);
  }
}