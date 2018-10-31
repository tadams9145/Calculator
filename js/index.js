var buttons = document.querySelector('.buttons')
var screen = document.querySelector('#screen')

buttons.addEventListener("click" , function(event){
  if (screen.innerHTML === "Error"){
    screen.innerText = ""
  } else {
    screen.innerHTML += event.target.innerHTML
    if(event.target.innerHTML === 'C'){
      screen.innerHTML = '';
    } else if (event.target.innerHTML === '='){
      var str = screen.innerHTML;
      str = str.substring(0, str.length -1)
      var answer = eval(str);
      if (answer === Infinity) {
        screen.innerHTML = "Error"
      } else {
        screen.innerHTML = answer
    }

    }
  }
})
