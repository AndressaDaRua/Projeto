function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  // podemos por somente o toggle que realiza todo esse teste boleano//
}
