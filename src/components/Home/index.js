import React from 'react';
import { withRouter } from 'react-router-dom';
import { wpToArticle } from '../../models/Article';
import Card from '../Card';

const URL = 'http://bedrock.test/wp-json/wp/v2/posts';

class Home extends React.Component {
    constructor () {
        super ();

        this.state = {
            articles : [],
            choesenCat : ""
        };
    };

    // loadPosts = () => {
        
    // }
    async componentDidMount () {
       const url = this.props.match.params.cat ? URL+'/?categories='+this.props.match.params.cat : URL

            await fetch(url)
                .then(res => res.json())
                .then(arts=> {
                    
                    this.setState({
                        articles : arts.map(article => wpToArticle(article))
                    })
                })
     
     
            let arts = [...this.state.articles];
            let categories = await fetch('http://bedrock.test/wp-json/wp/v2/categories/')
                .then(res => res.json())
            let articles = [];
            arts.forEach(element => {
                categories.forEach(cat => {
                    if (element.category == cat.id) {
                        let catName = {categoryName : cat.name}
                        element = {...element, ...catName}
                        articles.push(element)
                    }
                })
            });
            this.setState({ articles })
    }
    async componentDidUpdate () {
        // console.log(this.state.articles);
        const url = this.props.match.params.cat ? URL+'/?categories='+this.props.match.params.cat : URL
        if(this.props.match.params.cat != this.state.choesenCat){

            
            await fetch(url)
                .then(res => res.json())
                .then(arts=> {
                    
                    this.setState({
                        articles : arts.map(article => wpToArticle(article)),
                        choesenCat : this.props.match.params.cat
                    })
                })
                let arts = [...this.state.articles];
                let categories = await fetch('http://bedrock.test/wp-json/wp/v2/categories/')
                .then(res => res.json())
                let articles = [];
                arts.forEach(element => {
                    categories.forEach(cat => {
                        if (element.category == cat.id) {
                            let catName = {categoryName : cat.name}
                            element = {...element, ...catName}
                            articles.push(element)
                        }
                    })
                });
                this.setState({ articles })
            }

    }        
    // async setCategory (article) {
    //     await fetch('http://bedrock.test/wp-json/wp/v2/categories/')
    //         .then(res => res.json())
    //         .then(res => {
    //                 res.forEach(cat => {
    //                     if(cat.id == article.category) {
    //                         let catName = {categoryName : cat.name}
    //                         return article = {...article , ...catName}
    //                     }
    //             })
    //         })
    // }

    render () {

        console.log(this.state.articles);
        const cards = this.state.articles.map(card => <Card key={card.id} article = { card } />);
        
        return (
            <div>
                { cards }
            </div>
        );
    };
};

export default withRouter(Home);