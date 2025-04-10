const endpoint = 'https://api.chucknorris.io/jokes/random'

const fetchJoke = async () => {
    const response = await fetch(endpoint)
    const data = await response.json()

    document.getElementById('joke').textContent = data.value

    console.log(data.value)

}

const Chuck = () => {
    return(
        <div>
            <button onClick={fetchJoke}>click</button>
            <h2 id="joke"></h2>
        </div>
    )
}



export default Chuck