const apiKey = process.env.REACT_APP_API_KEY
const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`

const getAllArticles = async () => {
  const resp = await fetch(url)
  if (resp.ok){
    const allArticles = await resp.json()
    console.log(allArticles)
    return { allArticles }
  } else {
    console.log(resp.status)
  }
}


export default getAllArticles;