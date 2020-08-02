// hide and show cases on small screens

var aside=document.getElementById('aside');
var background=document.getElementsByTagName('body');
function show(){
    aside.style.visibility="visible";  //show aside
}





//J-query approach
// $(document).ready(function(){
//     // show hiden sideInfo
//     $("#sideInfoIcon-mb").click(function(){
//         $(this).find("#aside").slideToggle('fast');
//     });  
// });
// $(document).on("click",function(event){
//     var $trigger=$("#sideInfoIcon-mb");
//     if($trigger !== event.target && !$trigger.has(event.target).length){
//         $("#aside").slideUp("fast");
//     }
// });