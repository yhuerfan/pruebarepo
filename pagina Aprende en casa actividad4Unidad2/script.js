
$('.parrafo2').css("font-size", "40px")

/* eventos */

$('#Mat').mouseover(function(){
    $(this).css("font-size", "40px")
})
$('#Len').mouseover(function(){
    $(this).css("font-size", "30px")
})
$('#Nat').mouseover(function(){
    $(this).css("font-size", "20px")
})
$('#Soc').mouseover(function(){
    $(this).css("font-size", "10px")
})
$('#Idi').mouseover(function(){
    $(this).css("font-size", "30px")
})
$('#Eduf').mouseover(function(){
    $(this).css("font-size", "20px")
})
$('#Art').mouseover(function(){
    $(this).css("font-size", "10px")
})
$('#Eti').mouseover(function(){
    $(this).css("font-size", "50px")
})
$('#Sis').mouseover(function(){
    $(this).css("font-size", "40px")
})
$('#Rel').mouseover(function(){
    $(this).css("font-size", "30px")
})

$('li').dblclick(function(){
    $(this).css("background", "yellow")
})
/* pasamos el cursor */
$('li').click(function(){
    $(this).css("color", "white")
})
$('#asignaturas').mouseover(function(){
    $(this).css("background", "cyan")
    $(this).css("aling-content", "left")
})

$('#est').mouseover(function(){
    $(this).css("background", "gray")
})
$('#plat').mouseover(function(){
    $(this).css("background", "gray")
})
$('#otras').mouseover(function(){
    $(this).css("background", "white")
})
/* quito el cursor */
$('li').mouseout(function(){
    $(this).css("font-size", "15px")
})
$('div').mouseout(function(){
    $(this).css("background", "cornflowerblue")
})

/* div */

$('#est').css("float", "right")
$('#est').css("font-size", "50px")
$('#plat').css("float", "left")
$('#plat').css("font-size", "50px")
$('#otras').css("float", "center")
$('#otras').css("font-size", "30px")

$('#asignaturas').css("width", "auto")
$('#asignaturas').css("font-size", "20px")
$('#asignaturas').css("float", "center")






