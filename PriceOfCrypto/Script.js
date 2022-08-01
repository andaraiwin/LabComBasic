const inputStartDate = document.getElementById("input-start-date");
const inputEndDate = document.getElementById("input-end-date");
const btnGetPrice = document.getElementById("btn-get-price");
const canvas = document.getElementById("canvas-chart");

const btcChart = new Chart(canvas, {
  type: "line",
  data: {
    datasets: [
      {
        label: "BTC Prices",
        data: [],
        borderColor: "blueviolet",
        tension: 0.2,
      },
    ],
  },
  Options: {
    responsive: false,
  },
});

btnGetPrice.onclick = async () => {
  const startDate = inputStartDate.value;
  const endDate = inputEndDate.value;
  //   Check the output of value in input line
  //   alert(startDate);
  //   alert(endDate);

  const resp = await axios.get(
    `https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${startDate}&end=${endDate}`
  );
  // console.log(resp.data.bpi); show object of price in THB currency

  const dates = [];
  const prices = [];
  for (const key in resp.data.bpi) {
    dates.push(key);
    prices.push(resp.data.bpi[key]);
  }

  btcChart.data.datasets[0].data = prices;
  btcChart.data.labels = dates;
  btcChart.update();
};
