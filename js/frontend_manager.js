var menu_element=document.getElementsByClassName("menu_element");
var content= document.getElementsByClassName("content");
var sub_menu= document.getElementById("sub_menu");
var hidden = true;
for ( let j=0; j<menu_element.length;j++) {
    menu_element[j].onclick = function () {
        if (j==1){
            if (hidden===true){
                hidden=false;
                sub_menu.style.display="block";
                document.getElementById("show_works").setAttribute('style','transform:rotate(90deg)');
            }
            else {
                hidden=true;
                sub_menu.style.display="none";
                document.getElementById("show_works").setAttribute('style','transform:rotate(0deg)');
            }
        }
        else {
           // if(hidden===true){
                for (let i = 0; i < content.length; i++){
                    content[i].style.display = "none";
                    menu_element[i].style.background= "transparent";
                }
                menu_element[j].style.background= "rgba(240,240,240,.2)";
                content[j].style.display = "block";
           // }
        }
    };
};

