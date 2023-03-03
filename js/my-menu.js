const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function closeMyMenuOnClickingOutside(e) {
  // console.log('WINDOW!')
  // console.log(e.target) 이벤트객체target사용
  // console.log(myMenu.contains(e.target))
  // 1. 내가 클릭한 요소가 무엇인지? => e.target
  // 2. myMenu가 요소를 포함하고 있는지를 알 수 있는 방법 =>contains!
  // => myMenu가 e.tartget을 포함하고 있지 않은 경우 -> myMenu에 is-active 제거
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

function toggleMyMenu() {
  //console.log(myMenu.classList.contains('is-active'))
  //처음클릭시 컨테인스false -> is-active는 원래없었고 후에 토글로 추가됨
  if (!myMenu.classList.contains('is-active')) {
    // 앞으로 내가 활성화 시키겠다!
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)
