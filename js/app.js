let traffic = document.getElementById('traffic').getContext('2d');
let trafficChart = new Chart(traffic, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      label: 'Traffic',
      data: [500, 1000, 600, 1250, 1750, 1100, 1500, 1000, 1500, 2000, 1500, 2000],
      // backgroundColor: '#CA2085',
      lineTension: 0,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 6,
          suggestedMax: 2500,
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