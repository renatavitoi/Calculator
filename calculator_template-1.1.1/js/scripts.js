let del = function(){
  let num = getElementById("screen").value
  document.getElementById("screen").value = num.substring(0, num.length-1)
}