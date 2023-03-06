const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  // 사이드바, 오버레이가 보이게
  // .is-active
  // classlist
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  // .is-active 제거
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)
