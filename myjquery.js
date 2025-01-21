$(document).ready(function () {

    $("#p1").text("jquery is so damn easy");
    // $("p").toggle(3000);
    // $("p").hide(10000);

    $("#p1").click(function () {
        $("#p1").hide();
    });
    $(".p2").click(function () {
        $(".p2").hide(1000);
        $(".p2").show(2000);
    });

    // $(".p2").fadeOut(2000);



    $("#but").click(function () {

        $("#system").hide(1000);
        $("#system").show(2000);
        // $("#system").toggle(5000);
        $("#system").fadeOut(3000);
        $("#system").fadeIn(4000);



    });


    $("#ba1").click(function () {
        $("#ab1").animate({ left: "500px" }, 1000); // Adds animation over 1 second
    });





    $("p").hover(function () {
        console.log("hover is on now");
    });



    $("#formbutton").click(function () {
        $("#formid").toggle();
        $("#form1").toggle();
        // alert("enter your email & password");
    });
    

    $("#submit").click(function () {
    if($("#staticEmail").val().trim() === ""){
        $("#abc").text("First name is required.");

    }

       
    });

    if ($("#staticEmail").val().trim() === "") {
        $("#abc").text("First name is required.");
       

        if ($("#inputPassword").val().trim() === "") {
            $("#xzy").text("Password is required.");
            
        };
    };
    
    
   $("#mydiv").datepicker();
   
    });







