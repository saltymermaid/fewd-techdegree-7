let colors = {
  main: '#CF8DAB',
  mainTrans: 'rgba(207, 141, 171, 0.5)',
  mainDark: '#CA2085',
  mainLight: '#FFE4F8',
  accentOne: '#D29506',
  accentTwo: '#55414A'
}

let trafficData = fakeTraffic['weekly'];

Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontFamily = 'Lato';

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
      borderColor: colors.main,
      borderWidth: 1,
      pointBorderColor: colors.mainDark,
      pointBackgroundColor: colors.mainLight,
      pointRadius: 5,
      pointBorderWidth: 2,
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
      barPercentage: 0.5,
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
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
      label: 'Mobile Users',
      data: [15, 15, 70],
      backgroundColor: [colors.accentOne, colors.accentTwo, colors.mainDark],
      borderWidth: 0,
    }]
  },
  options: {
    rotation: 4.4,
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 15,
      }
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
