let fakeTraffic = {
  hourly: {
    labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
    suggestedMax: 50
  },
  daily: {
    labels: ['Wed', 'Thurs', 'Fri', 'Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    data: [225, 330, 300, 150, 250, 450, 300, 250, 400, 340, 200],
    suggestedMax: 500
  },
  weekly: {
    labels: ['16-22','23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    data: [500, 1000, 600, 1250, 1750, 1100, 1500, 1000, 1500, 2000, 1500, 2000],
    suggestedMax: 2500
  },
  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [600, 750, 2250, 1700, 2500, 2400, 2550, 1400, 1600, 1725, 2860, 3421],
    suggestedMax: 3500
  }
}
