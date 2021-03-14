$(function(){
    $(".coordenadas").mouseenter(function(){
        console.log("O mouse entrou no retângulo");
        $("valores").fadeIn();
    });

    $(".coordenadas").mousemove(function(e){
        console.log(e.clientX, e.clientY);
        var posicoes = $(this).offset();
        var x = e.clientX - posicoes.left;
        var y = e.clientX - posicoes.top;
        $(".valores").show().html(`coordenadas x: ${x} e y: ${y}`);
        //$(this).hide();
    });


    $(".coordenadas").mouseout(function(){
        console.log("O mouse saiu da área do retângulo");
        //
        $(".valores").hide().html(`coordenadas x: ${x} e y: ${y}`);
        $("valores").fadeOut();

        //$(this).hide();
    });



});