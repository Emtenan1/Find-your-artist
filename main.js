$(document).ready(function () {
   $(".H2").hide(),
    $("form").on("submit", ONclick)

    function ONclick() {
        var Name = $("#search").val()
        $("#h1").text(" ")
       
        $.ajax({
            method: "GET",
            url: "https://theaudiodb.com/api/v1/json/195003/search.php?s=" + Name,
            success: function (result) {
                $('.body').empty();
                $(".body").append($("<p/>").text("Name: "+" "+result.artists[0].strArtist));
                $(".body").append($("<p/>").text("Gender: "+result.artists[0].strGender));
                $(".body").append($("<p/>").html("Born Year: "+" "+result.artists[0].intBornYear));
                $(".body").append($("<p/>").html("Formed Year: "+" "+result.artists[0].intFormedYear));
                $(".body").append($("<p/>").text("Style: "+" "+result.artists[0].strStyle));
                $(".body").append($("<p/>").text("Mood: "+" "+result.artists[0].strMood));
                $(".body").append($("<p/>").text("Twitter: "+" "+result.artists[0].strTwitter));
                $(".H2").show()
                console.log(result)
              if(result.artists[0].strGender==="Female"){
                  $("#img").attr("src", "female.png")
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