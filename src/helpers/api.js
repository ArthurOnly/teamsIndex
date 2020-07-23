const API_ADDRESS = 'http://localhost:8000/'

export async function apiGet(body,path){
    const requestPath = `${API_ADDRESS}${path}`
    const requestOptions = {
        method: 'GET'
    }
    const response = await fetch(requestPath,requestOptions)
    return response.json()
}

export async function apiPost(body,path){
    const requestPath = `${API_ADDRESS}${path}`
    const response = fetch()
    return response
}