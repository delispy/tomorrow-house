const sectionHeaderIconButton = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
)

function showFullSection() {
  // product-shipment + is-open
  const section = this.parentNode.parentNode
  section.classList.add('is-open')
}

sectionHeaderIconButton.addEventListener('click', showFullSection)
