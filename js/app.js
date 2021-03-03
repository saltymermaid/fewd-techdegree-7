let alert = document.querySelector('#alert');
let banner = document.createElement('div');
let navBar = document.querySelector('.main-nav');
let colors = {
  main: '#CF8DAB',
  mainTrans: 'rgba(207, 141, 171, 0.5)',
  mainDark: '#CA2085',
  mainLight: '#FFE4F8',
  accentOne: '#D29506',
  accentTwo: '#55414A'
}
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

let trafficData = fakeTraffic['weekly'];

Chart.defaults.global.legend.display = false;
let traffic = document.getElementById('traffic').getContext('2d');
let trafficChart = new Chart(traffic, {
  type: 'line',
  data: {
    labels: trafficData.labels,
    datasets: [{
      label: 'Traffic',
      data: trafficData.data,
      backgroundColor: colors.mainTrans,
      lineTension: 0,
    }]
  },
  options: {
    aspectRatio: 4.5,
    animation: {
      duration: 0
    },
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
      backgroundColor: colors.mainDark,
    }]
  },
  options: {
    animation: {
      duration: 0
    },
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
      backgroundColor: [colors.accentOne, colors.accentTwo, colors.mainDark],
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'right',
    },
    animation: {
      duration: 0
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: false,
        ticks: {
          display: false
        }
      }]
    }
  }
});

let trafficButton = document.querySelector('.traffic-nav');
let buttons = trafficButton.querySelectorAll('li');
trafficButton.addEventListener('click', e => {
  buttons.forEach(button => {
    button.setAttribute("class", "traffic-nav-link")
  })
  let pressedKey = (e.target.innerHTML).toLowerCase();
  if (e.target.tagName === 'LI') {
    e.target.classList.add("active");
    trafficChart.config.data.datasets[0].data = fakeTraffic[pressedKey].data;
    trafficChart.config.data.labels = fakeTraffic[pressedKey].labels;
    trafficChart.config.options.scales.yAxes[0].ticks.suggestedMax = fakeTraffic[pressedKey].suggestedMax;
    trafficChart.update();
  }
})