//declarar variaveis para armazenar a posição do meu botão "no"
let topMod = 0;
let leftMod = 0;

//adicionando um evento ao corpo da página
$("body").on("mousemove", webHandler);

function webHandler(event){
    let button = $('#no').position();
    let buttonCenter = {
        x: button.left + 50,
        y: button.top + 20
    }
    //cal.distancia cursor
    let distance = Mat.sqrt(Math.pov())
}
