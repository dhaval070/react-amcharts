import './App.css';
import MyChart from './MyChart';
import data from './rawdata.js';

function App() {
    let map = {};

    for (let row of data) {
        const dt = new Date(row.period);
        console.log(dt);
        const sdate = (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear();

        if (!map[sdate]) map[sdate] = { period: dt };
        map[sdate][row.channel] = row.sales;
    }

    let values = Object.values(map).sort((a, b) => {
        return a.period - b.period;
    });

  return (
    <div className="App">
        <h3>Chart Test Demo (Dhaval Dhanani)</h3> <br />
        <h4>Sales Forecast</h4>
        <MyChart data={values}></MyChart>
    </div>
  );
}

export default App;
