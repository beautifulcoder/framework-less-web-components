import AuthorForm from './components/AuthorForm.js'
import AuthorGrid from './components/AuthorGrid.js'
import App from './components/App.js'

import observableFactory from './model/observable.js'
import actionsFactory from './model/actions.js'

const INITIAL_STATE = {
  authors: [],
  currentFilter: 'All'
}

const observableState = observableFactory(INITIAL_STATE)
const actions = actionsFactory(observableState)

window.applicationContext = Object.freeze({
  observableState,
  actions
})

window.customElements.define('author-form', AuthorForm)
window.customElements.define('author-grid', AuthorGrid)
window.customElements.define('html-app', App)
