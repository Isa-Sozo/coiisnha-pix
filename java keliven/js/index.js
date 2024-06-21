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
    let distance = Mat.sqrt(Math.pov(event,pagex - buttonCenter.z, 2))
    if (distance < 80){
        var angle = calculateAngle (event, buttonCenter, distance)
            leftMod += 10 * angle.cos * (event.pagex < buttonCenter.x ? 1 : -1)
            topMod += 10 * angle.sin * (event.pagey < buttonCenter.y ? 1 : -1)
            $('#no').css({top: topMod, left: leftMod, position: 'relative'})
        
    }
}

function calculateAngle(mouse, center, distance){
    let sin = Math.abs(mouse.pagey - center.y)/distance
    let cos = Math.abs(mouse.pagex - center.x)/distance
    return {sin: sin, cos: cos}
}