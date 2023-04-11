const apiKey = process.env.REACT_APP_API_KEY

export async function fetchArticles() {
    let res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
    let data = await res.json()
    return data
}