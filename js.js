

/* tentativa de fazer hover 
var teste = document.querySelector(".nao")

teste.addEventListener("mouseover", function(){
    teste.style.color = "white"
})
*/

function ativar() {
    const button = document.querySelector(".nao")
    position = []
    for (var i = 0; i < 4; i++) {
        let num1 = Math.floor(Math.random() * 500)
        position.push(num1)
    }

    button.style.top = position[0] + "px"
    button.style.left = position[1] + "px"
    button.style.right = position[2] + "px"
    button.style.bottom = position[3] + "px"
    
}