$(document).ready(function() {
    var API_KEY = "AIzaSyCJRYzVLGW2_Ex3A9r3ZsyUFq0rVNMYL3I"
    $("form").submit(function(event) {
        event.preventDefault()

        var search = $("#search").val()

        videosearch(API_KEY, search, 21)

    })

    function videosearch(key, search, maxResults) {

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data) console.log(data))
    }
})