function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute(
      "src",
      "./assets/avatar-light.png",
      //alt text descritive for accessibility
      (alt = "Foto de perfil do Jefferson, com blusa clara de anime")
    )
    //se nao tiver light mode, manter a imagem normal
  } else {
    //remover a imagem light
    img.setAttribute(
      "src",
      "./assets/avatar.png",
      //alt text descritive for accessibility
      (alt = "Foto de perfil do Jefferson, com blusa escura de anime")
    )
    //se nao tiver light mode, manter a imagem normal
  }
}
