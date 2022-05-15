function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.textDecoration="underline"
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("Cabezera").style.marginLeft = "250px";


}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("Cabezera").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}