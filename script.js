
document.addEventListener('DOMContentLoaded', () => {
    let images = ['Doberman', 'GreatDane', 'Husky', 'Labrador', 'PitBull', 'Rottweiler', 'Doberman', 'GreatDane', 'Husky', 'Labrador', 'PitBull', 'Rottweiler']

    const shuffleArray = (arr) => {
        arr.sort(() => Math.random() - 0.5)
    }

    shuffleArray(images)

    const cards = document.querySelector('.cards')
    const score = document.querySelector('.points')
    let pickedCards = []
    let pickedCardsId = []
    let matchedCards = []
    let clicked = false

    const createCards = () => {
        for(let i = 0; i < images.length; i++) {
            // if(clicked) continue
            // clicked = true
            let card = document.createElement('img')
            card.setAttribute('src', './assets/red.png')
            card.setAttribute('data-index', i)
            card.setAttribute('height', '160px')
            card.setAttribute('width', '220px')
            card.setAttribute('border', '1px solid #fff')
            // card.setAttribute('margin', '5px')
            card.addEventListener('click', flipTheCard)
            cards.appendChild(card)
            // clicked = false
        }
    }

    const isMatching = () => {
        const img = document.querySelectorAll('img')
        const id1 = pickedCardsId[0], id2 = pickedCardsId[1]
        if(pickedCards[0] == pickedCards[1]) {
            // there is a match
            img[id1].setAttribute('src', './assets/white.png')
            img[id2].setAttribute('src', './assets/white.png')
            matchedCards.push(pickedCards)
        }
        else {
            img[id1].setAttribute('src', './assets/red.png')
            img[id1].classList.toggle('flip1')
            img[id2].setAttribute('src', './assets/red.png')
            img[id2].classList.toggle('flip1')
        }

        pickedCards = []
        pickedCardsId = []
        score.textContent = matchedCards.length
        if(matchedCards.length * 2 === images.length) {
            score.textContent = 'Level Completed!'
            window.location.reload()
        }
    }


    function flipTheCard() {
        const cardId = this.getAttribute('data-index')
        pickedCards.push(images[cardId])
        pickedCardsId.push(cardId)
        this.classList.toggle('flip1')
        this.setAttribute('src', `./assets/${images[cardId]}.jpg`)
        if(pickedCards.length === 2) {
            setTimeout(isMatching, 1500)
        }
    }

    createCards()
})