$(function () {
    $(".company").on("click", function () {
        $(".company").removeClass("active");
        $(this).addClass("active");
        var company = $(this).attr("data-company");
        $(".experience-description").hide();
        $("#" + company).show();
    })

    // var r = document.querySelector(':root');
    // r.style.setProperty('--blackish', 'white');
    // r.style.setProperty('--neon', 'orange');
    
});