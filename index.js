function increment ()
{
     var number = number(document.getElementById('number').innerHTML)
     
     document.getElementById('number').innerHTML = number+1
}
function decrement ()
{
     var number = number(document.getElementById('number').innerHTML)
     
     document.getElementById('number').innerHTML = number-1
}
function nuetral()
{
     
     document.getElementById('number').innerHTML = 0
}