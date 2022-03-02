import './SortMenu.css'


const SortMenu = ({ allArticles, sortArticles }) => {
  const filteredSections = allArticles.reduce((arr, article) => {
    if (!arr.includes(article.section)) {
      arr.push(article.section)
    }
    return arr
  }, []).map((section) => {
    return (
      <div className="sort-radio" key={section}>
        <label htmlFor={section}>
          <input type="radio" name="sort-option" value={section} onChange={(e) => sortArticles(e.target.value)} />{section}
        </label>
      </div>
    )
  })

  return (
    <div className="sort-menu">
      {filteredSections}
    </div>
  )

}

export default SortMenu;