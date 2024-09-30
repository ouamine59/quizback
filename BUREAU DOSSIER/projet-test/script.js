function menuburger(){
    const  menuburger = document.getElementById('menuBurger');
    menuburger.addEventListener('click',()=>{
        const link = document.getElementById('containerLinkMobile')
        if(link.style.display=='block'){
            link.style.display = 'none'
        }else{
            link.style.display = 'block'
            link.style.position= 'absolute';
            link.style.flexDirection= 'column';
            link.style.alignItems= 'center';
            link.style.right='0px';
            link.style.top='65px';
            link.style.backgroundColor= 'black';
            link.style.padding = '25px';
        }
    })
}
function showmenu(i){
    const menu = document.getElementById('menu')
    const link = document.getElementById('linkMenu')
    const display = document.getElementById('displayTitle')  
    menu.style.right = i+'%';   
}

let i = -90
while(i<=0){
    setInterval(showmenu(i),20000)
    i++;
}
menuburger()