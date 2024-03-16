import { ChartWrapper } from './components/Chart_Wrapper';
import { Table } from './components/Table';

function App() {
  return (
    <div>
      {/* <Table /> */}
      {/* <ChartWrapper chart_type='bar' /> */}
      <ChartWrapper chart_type='split-bar' />
    </div>
  );
}

export default App;
