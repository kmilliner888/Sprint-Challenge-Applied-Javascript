// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabPromise = axios.get("https://lambda-times-backend.herokuapp.com/topics");
// console.log(tabPromise);



const topicTab = (tab1) => {
    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.textContent =  tab1;

    return tab;
}

const tabParent = document.querySelector('.topics');


tabPromise
.then(response => {
    // console.log(response)
    response.data.topics.forEach(topic => {
        const newTab = topicTab(topic)
        // console.log(newTab)
        tabParent.append(newTab)
    })
})

.catch(error => {
    console.log('error!', error)
})



