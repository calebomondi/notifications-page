function clearNotification(){
    document.getElementById("unread").innerHTML = 0;
    
    const collection = document.getElementsByClassName("trNotify")
    for(let i = 0; i< collection.length; i++){
        collection[i].style.backgroundColor = "transparent";
    }

    const redDot = document.getElementsByClassName("unreadNotifDot");
    for(let i = 0; redDot.length; i++){
        redDot[i].style.display = "none";
    }

}

document.getElementById("markread").addEventListener("click",clearNotification);