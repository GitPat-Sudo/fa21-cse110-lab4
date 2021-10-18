let d = new Date();
let time = d.toLocaleDateString();
var intervalID = setInterval(myCallback, 1000, time);

function myCallback(a)
{
 console.log(a);
}