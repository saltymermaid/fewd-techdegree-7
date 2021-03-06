let alert = document.querySelector('#alert');
let banner = document.createElement('div');
let navBar = document.querySelector('.main-nav');

function makeAlert() {
  banner.setAttribute('class', 'alert-banner');
  let alertText = document.createElement('p');
  alertText.innerHTML = '<strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete';
  let bannerClose = document.createElement('p');
  bannerClose.innerHTML = 'x';
  bannerClose.setAttribute('class', 'alert-banner-close');
  banner.appendChild(alertText);
  banner.appendChild(bannerClose);
  alert.appendChild(banner);
}

makeAlert();
alert.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
  alert.style.display = "none"
  }
});

function createAndAddToElement(elem, attrib, details, adult) {
  let element = document.createElement(elem);
  element.setAttribute(attrib, details);
  adult.appendChild(element);
  return element;
}

function createWithTextAndAddToElement(elem, content, classy, adult) {
  let element = document.createElement(elem);
  element.textContent = content;
  element.setAttribute("class", classy);
  adult.appendChild(element);
  return element;
}

function makeNewMembers() {
  let newMembers = document.querySelector('#members');
  fakeUsers.forEach(user => {
    let memberDiv = createAndAddToElement('div', 'class', 'member-info', newMembers);
    createAndAddToElement('img', 'src', user.profile, memberDiv);
    createWithTextAndAddToElement('p', user.name, 'name', memberDiv)
    let emailAddy = createWithTextAndAddToElement('a', user.email, 'email', memberDiv)
    emailAddy.setAttribute("href", `mailto:${user.email}`)
    let joinDate = new Date().toLocaleDateString("en-US")
    createWithTextAndAddToElement('span', joinDate, 'join-date', memberDiv)
  })
}

function makeRecentActivity() {
  let recentActivity = document.querySelector('#activities');
  fakeUsers.forEach(user => {
    let activityDiv = createAndAddToElement('div', 'class', 'activity-info', recentActivity);
    createAndAddToElement('img', 'src', user.profile, activityDiv);
    let activity = `${user.name} ${user.recentActivity.action} ${user.recentActivity.item}`
    createWithTextAndAddToElement('p', activity, 'act', activityDiv)
    createWithTextAndAddToElement('p', user.recentActivity.time, 'time', activityDiv)
    createWithTextAndAddToElement('span', '>', 'arrow', activityDiv)
  })
}

makeNewMembers();
makeRecentActivity();

// let search = document.querySelector('#search').value;
// function handleSearch() {
//   search = search.toLowerCase();
//   const allUsers = fakeUsers.map(user => user.name)

//   allUsers.forEach(user => {
//     if (user.toLowerCase().includes(search)) { 
//       createWithTextAndAddToElement('li', user, 'found', 'search'); 
//     } 
//   })
// }

// search.addEventListener('keyup', handleSearch);

const user = document.querySelector('#user-search');
const message = document.querySelector('#message');
const send = document.querySelector('#send-button');
send.addEventListener('click', () => {
  if (user.value === '' && message.value === '') {
  window.alert('Oooops! You need to fill out both the user and message fields before sending');
  } else if (user.value === '' ) {
  window.alert('Uh oh! Who should the message go to?');
  } else if (message.value === '' ) {
  window.alert('Please fill out message field before sending');
  } else {
  window.alert(`Message successfully sent to: ${user.value}`);
  }
});