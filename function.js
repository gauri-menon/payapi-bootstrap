function menuControl() {

    var check=document.getElementsByClassName("navbar-toggler")[0].getAttribute('aria-expanded');
    if(check=='false') {
        document.getElementsByClassName("menu-close")[0].style.display="initial";
        document.getElementsByClassName("menu-open")[0].style.display="none";
    }
    else {
        document.getElementsByClassName("menu-close")[0].style.display="none";
        document.getElementsByClassName("menu-open")[0].style.display="initial";
    }
}

// function closeMenu() {

//     document.getElementsByClassName("navbar")[0].style.display="none";
// }

function validateForm() {
    var input_obj=document.getElementsByClassName("field-input");
    for(var i=0;i<5;i++) {
        if(!input_obj[i].checkValidity()) {
            document.getElementsByClassName("missing-field")[i].innerHTML="This field can't be empty";
            document.getElementsByTagName("label")[i].style.color="#FF0000";
            document.getElementsByClassName("field-input")[i].style.borderBottomColor="#FF0000";
            break;
        }
        else {
            document.getElementsByClassName("missing-field")[i].innerHTML="";
            document.getElementsByTagName("label")[i].style.color="#36536B";
        }
    }
}