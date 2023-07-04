function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  // }

  html.classList.toggle("light")
  // a função toggle faz a verificação da coisa que esta dentro do parenteses, se tiver ele tira, se não tiver ele adiciona.
  // pegar a tag img
  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  // se tiver dark mode, adicionar a imagem dark
  const img = document.querySelector("#profile img")
  //peguei a imagem com o seleto
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
