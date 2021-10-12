import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/togglenavbar.component";
import UsersList from "./components/user-list.component";
import UserEdit from "./components/user-edit.component";
import UserCreate from "./components/user-create.component";
import UserDelete from "./components/user-delete.component";

    // create route for each react component
function routes() {
    return(
        <Router>
            <Navbar />
            <br/>
            <Route path="/user" exact component={UsersList} />
            <Route path="/user/edit/:id" exact component={UserEdit} />
            <Route path="/user/create" exact component={UserCreate} />
            <Route path="/user/delete" exacte component={UserDelete} />
        </Router>
    )
}

export default routes;