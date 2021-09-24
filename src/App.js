import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NiceFlagProvider } from './store/NiceFlagProvider';
import Index from './pages/Index';

const App = () => {
  return (
    <NiceFlagProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </Router>
    </NiceFlagProvider>
  );
};

export default App;
