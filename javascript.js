function ToggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profyle > img")

   if(html.classList.contains("light")) {
    img.setAttribute("src", "./imagens/nhacare-ligth.jpg")
   } else {
    img.setAttribute("src", "./imagens/nhacare.jpg")
   }

   if(html.classList.contains("light")) {
    img.setAttribute("alt", "nhacare branco")
   } else {
    img.setAttribute("alt", "nhacare")
   }

}