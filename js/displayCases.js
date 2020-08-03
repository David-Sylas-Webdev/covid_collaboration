// hide and show cases on small screens

var aside=document.getElementById('aside');

function toggle(){
    aside.style.visibility="visible";  //show

    //hide on outside click
    window.addEventListener('mouseup',function(event){
        if(event.target != aside && event.target.parentNode != aside){
            aside.style.visibility="hidden";
        }
    });  
}





