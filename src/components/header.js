  // TASK 1\
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //



const Header = (title, date, temp) => {
  
  const headerH = document.createElement('div');
  const spandateH = document.createElement('span');
  const h1H = document.createElement('h1');
  const spantempH = document.createElement('span');

  headerH.classList.add('header')
  spandateH.classList.add('date')
  spantempH.classList.add('temp')


  spandateH.textContent = date
  h1H.textContent = title
  spantempH.textContent = temp

  headerH.appendChild(spandateH)
  headerH.appendChild(h1H)
  headerH.appendChild(spantempH)

  return headerH

}

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, 
// passing arguments of your choosing.
// It should append the header to the element in the 
// DOM that matches the given selector.
//

const headerAppender = (selector) => {

  const newHeader = Header("This is my sprint challenge", 'July 18th 2021', "Early morning");
  const entrypoint = document.querySelector(selector);
  entrypoint.appendChild(newHeader)

}

export { Header, headerAppender }
