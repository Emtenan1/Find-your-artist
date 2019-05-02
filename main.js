$(document).ready(function () {
   $(".Background").hide(),
   $(".Background1").hide(),
    $("form").on("submit", ONclick)

    function ONclick() {
        var Name = $("#search").val()
        $("#h1").text(" ")
       
        $.ajax({
            method: "GET",
            url: "https://theaudiodb.com/api/v1/json/195003/search.php?s=" + Name,
            success: function (result) {
                $("form").hide(),
                $('.Information').empty();
                $('#header').empty();
                
                $("#header").append($("<h1/>").text(result.artists[0].strArtist));
                $(".Information").append($("<p/>").text("Gender: "+result.artists[0].strGender));
                $(".Information").append($("<p/>").html("Born Year: "+" "+result.artists[0].intBornYear));
                $(".Information").append($("<p/>").html("Formed Year: "+" "+result.artists[0].intFormedYear));
                $(".Information").append($("<p/>").text("Style: "+" "+result.artists[0].strStyle));
                $(".Information").append($("<p/>").text("Mood: "+" "+result.artists[0].strMood));
                $(".Information").append($("<p/>").text("Twitter: "+" "+result.artists[0].strTwitter));
                $(".discription").append($("<p3/>").text(result.artists[0].strBiographyEN));
                $(".Background").show()
                $(".Background1").show()
                console.log(result)

              if(result.artists[0].strGender==="Female"){
                  $("#img").attr("src", "female.png").css({'height':'50px', 'width':'50px'})
              }
               else{
                $("#img").attr("src","male.png")
               }
            },
            error: function (error) {
                console.log("Error");
            }

        })
    }



})