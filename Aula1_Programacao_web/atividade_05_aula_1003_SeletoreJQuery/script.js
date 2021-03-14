$(function(){
    $("#txt").val("Texto alterado com jquery")
    $(".email").val("Texto alterado com jquery pela classe")

    //$("p:not(.destaque), li").css("opacity", ".75");
    //$("p, li").css("color", "#999");
    //$(".container > ul > li").css("color", "black");
    $(".destaque ~ p").addClass("destaque");
    $("li:first").css("color", "green");
    $("li:first-child").css("color", "green");
    $("li:last-child").css("color", "green");
    $("p:gt(2)").css({
        "color":"orange",
        fontSize: "22px"
    });
    $("a[title]").css("color", "red");
    $("a:not([title])").hide();
    $("li:odd").css("backgroundColor", "#000")
    $("li:even").css("backgroundColor", "red")
    $("p:contains(afo 6)").css("color", "orange");
    $("p:contains(afo 6)").css("color", "red");
    $("p:has(i)").css("color", "blue");
    $("p:empty").text("parágrafo vazio joaozinho");
    $("p:hidden").show();

})