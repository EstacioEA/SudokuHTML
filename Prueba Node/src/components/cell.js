const createCellContent = (cellContent) => {
    const {value, onClickCell,...rest} = cellContent;

    const element = document.createElement('div');
    element.classList.add('cell-content');
    element.textContent = value;

    element.onclick = (event) => {
        onClickCell(event);
    }

    return element
}

export default createCellContent;