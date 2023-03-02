const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar .drawer-menu-button'
)
console.log(drawerMenuButtonList)

function toggleDrawerMenu() {
  // drawerMenuButton을 감싸고 있는 drawer-menu한테 is-open 토글
  const drawerMenu = this.parentNode //this의 부모요소
  drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach(function (item) {
  //   console.log(item.textContent)
  item.addEventListener('click', toggleDrawerMenu)
})
