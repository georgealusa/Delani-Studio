$(document).ready(function () {
    $("#DESIGN-img").click(function () {
        $("#DESIGN-img").fadeOut("slow").hide('1000')
        $("#DESIGNS").fadeIn("slow")
    });
    $("#DESIGNS").click(function () {
        $("#DESIGNS").toggle("slow").hide('1000')
        $("#DESIGN-img").fadeIn("slow")
    });
});
$(document).ready(function () {
    $("#dev-img").click(function () {
        $("#dev-img").fadeOut("slow").hide('1000')
        $("#dev").fadeIn("slow")
    });
    $("#dev").click(function () {
        $("#dev").toggle("slow").hide('1000')
        $("#dev-img").fadeIn("slow")
    });
});
$(document).ready(function () {
    $("#product-img").click(function () {
        $("#product-img").fadeOut("slow").hide('1000')
        $("#product").fadeIn("slow")
    });
    $("#product").click(function () {
        $("#product").toggle("slow").hide('1000')
        $("#product-img").fadeIn("slow")
    });
});
