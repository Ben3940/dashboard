import { ChartWrapper } from './components/Chart_Wrapper';
import { Profit_Overview } from './components/Profit_Overview';
import { Table } from './components/Table';

function App() {
  return (
    <div>
      {/* <Table /> */}
      {/* <ChartWrapper chart_type='bar' /> */}
      {/* <ChartWrapper chart_type='split-bar' /> */}
      <Profit_Overview />
    </div>
  );
}

export default App;
