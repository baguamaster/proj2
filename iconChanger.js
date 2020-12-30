function IconChanger() {

    //first search icon to be displayed.
    let icon = document.getElementById("icons");
    icon.innerHTML = "search";


    //time out limit - how long its takes before switching to another icon
    setTimeout(function() {
        icon.innerHTML = "public";
    }, 1000);


    setTimeout(function() {
        icon.innerHTML = "person_pin";
    }, 1000);

}



//running the function itself
IconChanger();



//loop throughout Timeout functions every 6s
setInterval(IconChanger, 2000);