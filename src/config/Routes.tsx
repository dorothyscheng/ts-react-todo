import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodosContainer from '../containers/TodosContainer';

const Routes = (): JSX.Element => {
    return (
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/todos' component={ TodosContainer } />
        </Switch>
    )
}

export default Routes;