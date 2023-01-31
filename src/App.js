import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts.js';
import StudentTable from './components/StudentTable.js';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">
          <Button variant="contained">Table</Button>
        </Link>
        <Link to="/charts">
          <Button variant="contained">Charts</Button>
        </Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <StudentTable />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
