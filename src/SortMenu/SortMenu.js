import './SortMenu.css'


const SortMenu = ({allArticles}) => {
  const filteredSections = allArticles.reduce((arr, article) => {
    if(!arr.includes(article.section)){
      arr.push(article.section)
    }
    return arr
  }, []).map((section) => {
    return (
      <div className="sort-radio" key={Date.now()}>
      <label htmlFor={section}>
      <input type="radio" name="sort-option" value={section}/>{section}
      </label>
      </div>
    )
  })

  return (
    <div>
    {filteredSections}
    </div>
  )

}

export default SortMenu;