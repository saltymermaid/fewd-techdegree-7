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

function makeRecentActivity() {
  let recentActivity = document.querySelector('#activities');
  fakeUsers.forEach(user => {
    let activityDiv = createAndAddToElement('div', 'class', 'activity-info', recentActivity);
    createAndAddToElement('img', 'src', user.profile, activityDiv);
    let activity = `${user.name} ${user.recentActivity.action} ${user.recentActivity.item}`
    createWithTextAndAddToElement('p', activity, 'act', activityDiv)
    createWithTextAndAddToElement('p', user.recentActivity.time, 'time', activityDiv)
  })
}
makeRecentActivity();