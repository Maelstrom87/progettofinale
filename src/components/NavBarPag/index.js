import React from 'react';
import { withRouter,Link } from 'react-router-dom';


class NavBarPag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title,slug} = this.props.pag;
         return (
            <div className="mx-2">
                <Link className="nav-link text-black" to={'/page/'+slug}> {title.rendered} </Link>
            </div>
         )
    };
};

export default withRouter(NavBarPag);