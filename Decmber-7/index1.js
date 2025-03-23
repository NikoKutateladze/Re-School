function handleButtonClick() {
    console.log('User Clicked on The Button');
    var p = document.getElementById("paragraph");
    var pClassList = p.classList;

    if(pClassList.contains("highlight")){
        pClassList.remove("highlight");
    } else {
        pClassList.add("highlight")
    }
}

