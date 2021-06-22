import './App.css';
import MyChart from './MyChart';
import rawData from './rawdata.js';

function App() {
    let map = {};

    for (let row of rawData) {
        const dt = new Date(row.period);
        const sdate = (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear();

        if (!map[sdate]) map[sdate] = { period: dt };
        map[sdate][row.sales_channel] = row.sales;
    }

    console.log(map);
  return (
    <div className="App">
        <h3>Chart Test Demo (Dhaval Dhanani)</h3> <br />
        <h4>Sales Forecast</h4>
        <MyChart data={Object.values(map)}></MyChart>
    </div>
  );
}

export default App;
