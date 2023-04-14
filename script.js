const buttons = document.querySelector(".buttons")
const btn = document.querySelectorAll('span')
const value = document.getElementById("value")
const toggleBtm = document.querySelector(".toggleBtm")
const body = document.querySelector("body")

for (let i = 0; i < btn.length; i++) {
 btn[i].addEventListener('click', function () {
  if (this.innerHTML == "=") {
   value.innerHTML = eval(value.innerHTML)
  } else {
   if (this.innerHTML == "Clear") {
    value.innerHTML = "";
   } else {
    value.innerHTML += this.innerHTML
   }
  }
 })
}

toggleBtm.onclick = function(){
 body.classList.toggle('dark')
}



//https://youtu.be/t6jxqGQduWk