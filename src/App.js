import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           <Route exact path='/'>
              <Products></Products>
           </Route>
           <Route exact path='/cart'>
              <Cart></Cart>
           </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
