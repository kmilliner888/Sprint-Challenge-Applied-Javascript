// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardPromise = axios.get("https://lambda-times-backend.herokuapp.com/articles");
console.log(cardPromise);


function Card (object) {
    const card = document.createElement('div');
    console.log(card);
    const cardHeadline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardAuthor = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    authorContainer.classList.add('author');
    imageContainer.classList.add('img-container');

    cardHeadline.textContent = object.headline;
    cardImage.src = object.authorPhoto;
    cardAuthor.textContent = object.authorName;  
    
    card.append(cardHeadline);
    card.append(authorContainer);
    authorContainer.append(imageContainer);
    authorContainer.append(cardAuthor);
    imageContainer.append(cardImage);

    return card;
    
}

const cardParent = document.querySelector('.cards-container');

cardPromise
.then(response => {
    console.log(response);
    response.data.articles.javascript.forEach(article => {
        const jsCard = Card(article)
        cardParent.appendChild(jsCard)
    })
    response.data.articles.bootstrap.forEach(article => {
        const bsCard = Card(article)
        cardParent.appendChild(bsCard)
    })
    response.data.articles.technology.forEach(article => {
        const techCard = Card(article)
        cardParent.appendChild(techCard)
    })
    response.data.articles.jquery.forEach(article => {
        const jqCard = Card(article)
        cardParent.appendChild(jqCard)
    })
    response.data.articles.node.forEach(article => {
        const nodeCard = Card(article)
        cardParent.appendChild(nodeCard)
    })

})
.catch(error => {
    console.log('error!', error);
})
