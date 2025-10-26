import createBoard from '../components/board.js'

async function getUserData() {
    const response = await fetch('http://localhost:3000/user')
    console.log(response.data)
    return response;
}

export function Game() {
    const container = document.createElement('div')

    const title = document.createElement('h1')
    title.textContent = "Sudoku Game"

    const footer = document.createElement('footer')
    footer.id = "footer"
    

    const board = createBoard()

    container.appendChild(title)
    container.appendChild(board)
    container.appendChild(footer)

    getUserData().then(data => {
        document.getElementById('footer').textContent = `User data fetched: ${data.statusText}`
    })

    return container
}
