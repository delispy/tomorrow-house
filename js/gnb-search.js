const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearch.querySelector('ol')

const deletAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const deleteButttonList =
  gnbSearchHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  // *console.log('CLOSE!!', e.target)
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function openGnbSearchHistory() {
  // 체크  => gnbSearchHistoryList안에 Li가 몇개가 있는지
  // li가 0개 => 실행 x
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deletAllSearchHistoryItems() {
  // gnbSearchHistoryList 안에 들어있는 모든 li를 삭제해!
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

deletAllButton.addEventListener('click', deletAllSearchHistoryItems)

function deletSearchHistoryItem(e) {
  e.stopPropagation()
  // li 삭제
  // * console.log('DELETE!!')
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

deleteButttonList.forEach((button) => {
  // * console.log(button)
  button.addEventListener('click', deletSearchHistoryItem)
})
