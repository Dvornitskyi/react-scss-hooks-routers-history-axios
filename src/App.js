import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Articles from "./components/Articles/Articles";
import About from "./About";

const App = () => {
  return ( 
    <div style={{padding: '20px 40px'}}>
     <BrowserRouter>
       <Switch>
         <Route path="/" exact={true}>
           <Articles />
         </Route>
         <Route path="/about">
           <About />
         </Route>
       </Switch>
     </BrowserRouter>
    </div>
  )
}

export default App;
