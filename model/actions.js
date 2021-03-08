export default state => {
  const addAuthor = author => {
    if (!author) return

    state.authors = [...state.authors, {
      ...author
    }]
  }

  const changeFilter = currentFilter => {
    state.currentFilter = currentFilter
  }

  return {
    addAuthor,
    changeFilter
  }
}
