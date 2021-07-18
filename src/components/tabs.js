import axios from 'axios';
  
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

const Tabs = (topics) => {

  const tabstopics = document.createElement('div');

  // topics.forEach(topic => {
  //   console.log(topic)
  //   const tabtopic = document.createElement('div');
  //   tabtopic.classList.add('tab');
  //   tabtopic.textContent = topic;
  //   tabstopics.appendChild(tabtopic)
  // });
  const tab1 = document.createElement('div');
  const tab2 = document.createElement('div');
  const tab3 = document.createElement('div');

  tabstopics.classList.add('topics');
  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');

  tab1.textContent = topics[0];
  tab2.textContent = topics[1];
  tab3.textContent = topics[2];

  tabstopics.appendChild(tab1);
  tabstopics.appendChild(tab2);
  tabstopics.appendChild(tab3);

  return tabstopics
}

// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
// Find the array of topics inside the response, and create the tabs using the Tabs component.
// Append the tabs to the element in the DOM that matches the selector passed to the function.
//

const tabsAppender = (selector) => {

  axios.get(`http://localhost:5000/api/topics`)
  .then( response =>{
    // console.log('responseeee',response.data.topics);
    const newTabs = Tabs(response.data.topics);
    const entrypoint = document.querySelector(selector);
    entrypoint.appendChild(newTabs)

  })
  .catch((err) => {
    console.log('error!', err)
  })



}

export { Tabs, tabsAppender }

