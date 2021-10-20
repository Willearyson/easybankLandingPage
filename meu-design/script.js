const openMenu = document.querySelector('.mobile-btn-area');

openMenu.addEventListener('click',()=>{
    const menuArea = document.querySelector('.mobile-menu-general');
    const btnHanburger = document.querySelector('.open-img')
    const btnClose = document.querySelector('.close-img')
    if(menuArea.style.display =="flex" && btnHanburger.style.display=="none"){
        menuArea.style.display = 'none'
        btnHanburger.style.display='flex'
        btnClose.style.display='none'
    }else{
        menuArea.style.display = 'flex'
        btnHanburger.style.display = 'none'
        btnClose.style.display = 'flex'
    }
})