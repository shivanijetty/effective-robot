console.log("you got this!")

const characterBar = document.getElementById("character-bar")
const charName = document.getElementById("name")
const charImage = document.getElementById("image")
const charVote = document.getElementById("vote-count")
const votesForm = document.getElementById("votes-form")
const votes = document.getElementById("votes")
const voteButton = document.getElementById("vote-button")

const renderCuties = (char) => {
    charName.innerText = char.name
    charImage.src = char.image
    charVote.innerText = char.votes
}


const request = async () => {
    let req = await fetch("http://localhost:3000/characters")
    let res = await req.json()

    renderCuties(res[0])

    res.forEach((char) => {
        let span = document.createElement("span")
        span.innerText = char.name
        characterBar.append(span)

        span.addEventListener("click", () => {
            charName.innerText = char.name
            charImage.src = char.image
            charVote.innerText = char.votes
        })

    })

    votesForm.addEventListener("submit", (e) => {
        e.preventDefault()        
        let voteCount = parseInt(charVote.innerText)
        charVote.innerText = voteCount + parseInt(votesForm.votes.value)
        
    })
}
request()
