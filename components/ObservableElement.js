const equalDeep = (x, y) => JSON.stringify(x) === JSON.stringify(y)

export default class ObservableElement extends HTMLElement {
  get authors() {
    if (!this.hasAttribute('authors')) return []

    return JSON.parse(this.getAttribute('authors'))
  }

  set authors(value) {
    if (this.constructor.observedAttributes.includes('authors')
      && !equalDeep(this.authors, value)) {
      this.setAttribute('authors', JSON.stringify(value))
    }
  }

  get currentFilter() {
    if (!this.hasAttribute('current-filter')) return 'All'

    return this.getAttribute('current-filter')
  }

  set currentFilter(value) {
    if (this.constructor.observedAttributes.includes('current-filter')
      && this.currentFilter !== value) {
      this.setAttribute('current-filter', value)
    }
  }

  connectAttributes () {
    window
      .applicationContext
      .observableState
      .addChangeListener(state => {
        this.authors = state.authors
        this.currentFilter = state.currentFilter
      })
  }

  attributeChangedCallback () {
    this.updateContent()
  }
}
