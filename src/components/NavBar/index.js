import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarCat from '../NavBarCat';
const CATURL = 'http://bedrock.test/wp-json/wp/v2/categories/';

class NavBar extends React.Component {
    constructor () {
        super();

        this.state = {
            categories : []
        }
    }

    async componentDidMount () {
        await fetch(CATURL)
            .then(res => res.json())
            .then(categories => {
                this.setState({ categories })
            })
    }

    render () {
  
        let catDisplay = this.state.categories.map(cat => <NavBarCat key={cat.id} cat ={ cat }/>)
        return(
            <div>{catDisplay}</div>
        )
    }
}

export default withRouter(NavBar);