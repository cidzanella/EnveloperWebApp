import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import UsersList from "./components/user-list.component";
import UserEdit from "./components/user-edit.component";
import UserCreate from "./components/user-create.component";
import UserDelete from "./components/user-delete.component";

function App() {
  return (
    // create route for each react component
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/user/" exact component={UsersList} />
        <Route path="/user/edit/:id" exact component={UserEdit} />
        <Route path="/user/create" exact component={UserCreate} />
        <Route path="/user/delete" exacte component={UserDelete} />
      </div>
    </Router>
  );
}

export default App;
