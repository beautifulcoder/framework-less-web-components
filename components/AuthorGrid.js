import ObservableElement from './ObservableElement.js'

export default class AuthorGrid extends ObservableElement {
  static get observedAttributes() {
    return [
      'authors',
      'current-filter'
    ]
  }

  connectedCallback() {
    this.template = document
      .getElementById('author-grid')
    this.rowTemplate = document
      .getElementById('author-row')
    const content = this.template
      .content
      .firstElementChild
      .cloneNode(true)
    this.appendChild(content)

    this.table = this.querySelector('table')
    this.updateContent()

    super.connectAttributes()
  }

  getAuthorRow(author) {
    const {
      name,
      email,
      topic
    } = author

    const element = this.rowTemplate
      .content
      .firstElementChild
      .cloneNode(true)
    const columns = element.querySelectorAll('td')

    columns[0].textContent = name
    columns[1].textContent = email
    columns[2].textContent = topic

    if (this.currentFilter !== 'All'
      && topic !== this.currentFilter) {
      element.style.display = 'none'
    }

    return element
  }

  updateContent() {
    this.table.style.display =
      (this.authors?.length ?? 0) === 0
        ? 'none'
        : ''

    this.table
      .querySelectorAll('tbody tr')
      .forEach(r => r.remove())

    this.authors
      .map(a => this.getAuthorRow(a))
      .forEach(e => this.table
        .querySelector('tbody')
        .appendChild(e))
  }
}
