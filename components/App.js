export default class App extends HTMLElement {
  connectedCallback() {
    this.template = document
      .getElementById('html-app')

    window.requestAnimationFrame(() => {
      const content = this.template
        .content
        .firstElementChild
        .cloneNode(true)

      this.appendChild(content)
    })
  }
}
