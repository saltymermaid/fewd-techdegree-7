let alert = document.querySelector('#alert');
let navBar = document.querySelector('.main-nav');

function makeAlert(alertMessage) {
  let banner = document.createElement('div');
  banner.setAttribute('class', 'alert-banner');
  let alertText = document.createElement('p');
  alertText.innerHTML = alertMessage;
  let bannerClose = document.createElement('p');
  bannerClose.innerHTML = 'x';
  bannerClose.setAttribute('class', 'alert-banner-close');
  banner.appendChild(alertText);
  banner.appendChild(bannerClose);
  alert.appendChild(banner);
}

makeAlert('<strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete');
alert.addEventListener('click', e => {
  const element = e.target;
  const selectedAlert = element.closest('.alert-banner');
  if (element.classList.contains("alert-banner-close")) {
  selectedAlert.style.display = "none";
  }
});

const notification = document.querySelector('#notification');
notification.addEventListener('click', () => {
  const bell = notification.querySelector('.badge');
  if (bell.classList.contains('active')) {
    makeAlert('You have a connection request!');
    makeAlert('Someone liked your article!');
    bell.classList.remove('active');
  }
})

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

const searchWrapper = document.querySelector('.search-input');
const inputBox = searchWrapper.querySelector('input');
const suggestionBox = searchWrapper.querySelector('.auto-com-box');
const usersToSearch = additionalUsersForSearch;
fakeUsers.forEach(user => {
  usersToSearch.push(user.name);
})
inputBox.onkeyup = (e) => {
  let userSearch = e.target.value;
  let potentials = [];
  if (userSearch) {
    potentials = usersToSearch.filter((data) => {
      return data.toLocaleLowerCase().includes(userSearch.toLocaleLowerCase());
    });
    searchWrapper.classList.add('active');
  } else {
    searchWrapper.classList.remove('active');
  }
  makeSuggestionList(potentials);
}

function makeSuggestionList(listOfUsers) {
  while (suggestionBox.lastChild) {
    suggestionBox.removeChild(suggestionBox.lastChild);
  }
  if (listOfUsers.length === 0) {
    listOfUsers.push(inputBox.value)
  }
  listOfUsers.forEach(name => {
    let userLi = createWithTextAndAddToElement('li', name, 'user', suggestionBox)
    userLi.setAttribute('onclick', 'select(this)')
  })
}

function select(element) {
  inputBox.value = element.textContent;
  searchWrapper.classList.remove('active');
}

const user = document.querySelector('#user-search');
const message = document.querySelector('#message');
const send = document.querySelector('#send-button');
send.addEventListener('click', () => {
  if (user.value === '' && message.value === '') {
  window.alert('Oooops! You need to fill out both the user and message fields before sending.');
  } else if (user.value === '' ) {
  window.alert('Uh oh! Who should the message go to?');
  } else if (message.value === '' ) {
  window.alert('Please fill out message field before sending.');
  } else {
  window.alert(`Message successfully sent to: ${user.value}.`);
  }
  user.value = '';
  message.value = '';
});

function createToggles(tog) {
  if (tog.classList.contains('active')) {
    createWithTextAndAddToElement('div', 'ON', 'toggle-status', tog);
    createAndAddToElement('div', 'class', 'round-center', tog);
  } else {
    createAndAddToElement('div', 'class', 'round-center', tog);
    createWithTextAndAddToElement('div', 'OFF', 'toggle-status', tog);
  }
}

function updateToggle(toggie) {
  while (toggie.lastChild) {
    toggie.removeChild(toggie.lastChild);
  }
  createToggles(toggie);
}

const settings = document.querySelector('#settings');

settings.addEventListener('click', (e) => {
  let selectedDiv = e.target.closest('.setting');
  if (selectedDiv.classList.contains('toggle-setting')) {
    let selectedToggle = selectedDiv.querySelector('.toggle-switch .toggle-button');
    selectedToggle.classList.toggle('active');
    updateToggle(selectedToggle);
    if(selectedToggle.classList.contains('active')) {
      localStorage.setItem(selectedToggle.id.toString(), '1');
    } else {
      localStorage.setItem(selectedToggle.id.toString(), '0');
    }
  }
})

settings.addEventListener('change', (e) => {
  let selectedDiv = e.target.closest('.setting');
  if (selectedDiv.classList.contains('timezone-setting')) {
    let tzSelect = selectedDiv.querySelector('#timezone');
    localStorage.setItem('timezone', tzSelect.value);
  }
})

function setTimeZone() {
  let tzSelect = document.querySelectorAll('#timezone > option');
  let savedTz = localStorage.getItem('timezone') || '';
  tzSelect.forEach(tz => {
    tz.removeAttribute('selected');
    if (tz.value === savedTz) {
      tz.setAttribute('selected', 'selected')
    }
  })
}

const toggles = document.querySelectorAll('.toggle-button')
function setToggleValues() {
  toggles.forEach(tog => {
    if(localStorage.getItem(tog.id) === '1') {
      tog.classList = ("toggle-button active")
    } else {
      tog.classList = ("toggle-button")
    }
    createToggles(tog);
  })
}

setToggleValues();
setTimeZone();

