

let lang  = document.querySelector(".bobo")
let hid = document.querySelector(".saad")

lang.onclick = function (e) {
   e.preventDefault()
   if (hid.style.display == "none") {
    hid.style.display = "block"
   }else{
    hid.style.display = "none"
   }
}
console.log(hid)
