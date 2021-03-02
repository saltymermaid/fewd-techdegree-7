let alert = document.querySelector('#alert');
let banner = document.createElement('div');
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

let monthlyTraffic = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  data: [600, 750, 2250, 1700, 2500, 2400, 2550, 1400, 1600, 1725, 2860, 3421],
  suggestedMax: 3500
}

let weeklyTraffic = {
  labels: ['16-22','23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
  data: [500, 1000, 600, 1250, 1750, 1100, 1500, 1000, 1500, 2000, 1500, 2000],
  suggestedMax: 2500
}

let dayToDayTraffic = {
  labels: ['Wed', 'Thurs', 'Fri', 'Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
  data: [225, 330, 300, 150, 250, 450, 300, 250, 400, 340, 200],
  suggestedMax: 500
}

let hourlyTraffic = {
  labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
  suggestedMax: 50
}

let trafficData = monthlyTraffic;

Chart.defaults.global.legend.display = false;
let traffic = document.getElementById('traffic').getContext('2d');
let trafficChart = new Chart(traffic, {
  type: 'line',
  data: {
    labels: trafficData.labels,
    datasets: [{
      label: 'Traffic',
      data: trafficData.data,
      // backgroundColor: '#CA2085',
      lineTension: 0,
    }]
  },
  options: {
    aspectRatio: 4.5,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 6,
          suggestedMax: trafficData.suggestedMax,
        }
      }]
    }
  }
});

let dailyTraffic = document.getElementById('daily-traffic').getContext('2d');
let dailyTrafficChart = new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: 'Daily Traffic',
      data: [50, 75, 150, 100, 200, 175, 75],
      // backgroundColor: '#CA2085',
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 7,
          suggestedMax: 250,
        }
      }]
    }
  }
});

let mobileUsers = document.getElementById('mobile-users').getContext('2d');
let mobileUsersChart = new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
    labels: ['Tablets', 'Phones', 'Desktop'],
    datasets: [{
      label: 'Mobile Users',
      data: [15, 15, 70],
      // backgroundColor: ['#CA2085', '#D29506', '#55414A'],
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});