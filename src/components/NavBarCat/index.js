import React from 'react';
import { withRouter,Link } from 'react-router-dom';


class NavBarCat extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {id , name} = this.props.cat;

         return (
            <div className="mx-2">
                <Link className="nav-link text-black" to={'/categories/'+id+'/name/'+name}> {name} </Link>
            </div>
         )
    }

}

export default withRouter(NavBarCat);