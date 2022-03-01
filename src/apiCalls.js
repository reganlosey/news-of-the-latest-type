const apiKey = process.env.REACT_APP_API_KEY

const getAllData = async (query) => {
  const resp = await fetch(`https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=${apiKey}`)
  if (resp.ok){
    const respJson = await resp.json()
    return respJson
  } else {
    throw new Error(`Error: ${resp.status}`)
  }
}


export default getAllData;