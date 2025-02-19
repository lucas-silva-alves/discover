function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  /*
  if(html.classList.contains('light')) {
    html.classList.remove("light")
    } else {
      html.classList.add("light")
  }
  */
 // selecionar a imagem
 const img = document.querySelector("#profile img")
 
 // substituir a imagem
 if(html.classList.contains('light')) {
  // se tiver light mode
  img.setAttribute('src', './assets/avatar-light.png')
} else {
  // se não tiver light mode
  img.setAttribute('src', './assets/avatar.png')
 }
}
