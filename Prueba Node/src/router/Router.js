export const Router = (paths) => {
    const path = window.location.pathname;

    const render = paths[path] || (() => {
        const element = document.createElement('div');
        element.textContent = "404 - Not Found";
        return element;
    })
    return render();   
}