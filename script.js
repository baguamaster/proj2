$(document).ready(function() {
            var API_KEY = "AIzaSyCJRYzVLGW2_Ex3A9r3ZsyUFq0rVNMYL3I"

            var video = ''

            var videos = $("#videos")


            $("#form").submit(function(event) {
                event.preventDefault()
                alert("form submitted")

                var search = $("#search").val()

                videosearch(API_KEY, search, 21)

            })

            function videosearch(key, search, maxResults) {

                $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data) {
                        console.log(data)

                        data.items.forEach(item => {
                            video = ` <iframe width="420" height="345" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                            </iframe>
                            `
                        })
                    }
                })