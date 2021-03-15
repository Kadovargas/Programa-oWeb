$(function() {
    var jogador = 1;
    var jogadorVencedor = "";
    var nomeJogador;



    function colunasIguais (a,b,c) {
        var colunaA = $("#coluna" + a);
        var colunaB = $("#coluna" + b);
        var colunaC = $("#coluna" + c);

        var backgroundA = $("#coluna" + a).css("background-image");
        var backgroundB = $("#coluna" + b).css("background-image");
        var backgroundC = $("#coluna" + c).css("background-image");

        if ((backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none" && backgroundA != "")) {
            if(backgroundA.indexOf("1.png") >= 0) {
                jogadorVencedor = "Jogador1";
                nomeJogador= $("#Jogador1").val();
            } else {
                jogadorVencedor = "Jogador2";
                nomeJogador= $("#Jogador2").val();
            }
            return true;
        } else {
            return false;
        }
    }



        
        function verificarFimDeJogo() {
            if(colunasIguais(1,2,3) || colunasIguais(4,5,6) || colunasIguais(7,8,9) || 
                colunasIguais(1,4,7) || colunasIguais(2,5,8) || colunasIguais(3,6,9) ||
                colunasIguais(1,5,9) || colunasIguais(3,5,7)

            ){
            $("#resultado").html("<h2>0 Player " + nomeJogador + " ganhou! <\h2>")
            $(".coluna").off("click");
        }
    }

        $(".coluna").click(function() {
          var bg = $(this).css("background-image");  
          if (bg == "none" || bg == "") {
              var fig = "url(" + jogador.toString() + ".png)";
              $(this).css("background", fig);
              jogador = (jogador == 1 ? 2 : 1);
              verificarFimDeJogo();
          }
        
        });
 
    });

    //funcao de clique
    $(function(){  
        $("#botao").click(function(){
            alert("botão foi clicado.")
            //$("ajax").load("LOAD.txt");
        });
    });

    //Funcao de load
    //$(document).ready(function(){
       // $("ajax").load("LOAD");
    //});
    
   
