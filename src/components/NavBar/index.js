import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarCat from '../NavBarCat';
import NavBarPag from '../NavBarPag';
const CATURL = 'http://bedrock.test/wp-json/wp/v2/categories/';
const PAGEURL = 'http://bedrock.test/wp-json/wp/v2/pages';

class NavBar extends React.Component {
    constructor () {
        super();

        this.state = {
            categories : [],
            pages : []
        }
    }

    async componentDidMount () {
        await fetch(CATURL)
            .then(res => res.json())
            .then(cats => {
                let categories = cats.filter(cat => cat.name != 'Uncategorised');
                this.setState({ categories })
        })
        
        await fetch(PAGEURL)
            .then(res => res.json())
            .then(res => {
                let pages = res.filter(pag => pag.slug != 'sample-page');
                this.setState({pages})
            })

    }

    render () {
        let catDisplay = this.state.categories.map(cat => <NavBarCat key={cat.id} cat ={cat}/>);
        let pageDisplay = this.state.pages.map(page=> <NavBarPag key={page.id} pag ={page} />);

        return(
            <nav className="bg-white shadow navbar navbar-light bg-light">
                <div className="container-fluid  d-flex justify-content-start">
                    <div className="mx-2"><Link className="nav-link text-black" to="/">Home </Link></div>
                    {pageDisplay}
                    {catDisplay} 
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);