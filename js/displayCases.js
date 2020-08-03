// hide and show cases on small screens

var aside=document.getElementById('aside');
var headerBg=document.getElementById('header');
var sectionBg=document.getElementById('section');

function toggle(){
    aside.style.visibility="visible"; //show aside
    headerBg.style.opacity="0.7";  //fade header
    sectionBg.style.opacity="0.7";  //fade section

    //hide on outside click
    window.addEventListener('mouseup',function(event){
        if(event.target != aside && event.target.parentNode != aside){
            aside.style.visibility="hidden";
            headerBg.style.opacity="1";    sectionBg.style.opacity="1";
        }
    });  
}





