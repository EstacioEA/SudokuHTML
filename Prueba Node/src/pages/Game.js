import createBoard from '../components/board.js'
import axios from 'axios';

async function getUserDataAxios() {
    const registros = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(registros.data);
    return registros;
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

    // getUserData().then(response => {
    //     console.log('User data fetched:', response.registros)
    //     const footer = document.getElementById('footer')
    //     if(footer){
    //         footer.textContent = `User Data: ${response.registros.length} records found.`
    //     }
    // })

    getUserDataAxios().then(response => {
        const footer = document.getElementById('footer')
        if(footer){
            footer.textContent = `User Data: ${response.data.cries.legacy}.`
        }
    })

    return container
}
