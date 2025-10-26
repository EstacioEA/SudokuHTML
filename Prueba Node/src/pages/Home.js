export function Home(){
    const container = document.createElement('div')
    const title = document.createElement('h1')
    title.textContent = "Hola bienvenido"

    container.appendChild(title)

    return container
}