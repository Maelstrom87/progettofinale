import React from 'react';
import { withRouter } from 'react-router-dom';
import { wpToArticle } from '../../models/Article';
import Card from '../Card';

class Home extends React.Component {
    constructor () {
        super ();

        this.state = {
            articles : []
        };
    };

    async componentDidMount () {
        let arts = await fetch('http://bedrock.test/wp-json/wp/v2/posts')
            .then(res => res.json())
            .then(arts=> {
                
                this.setState({
                    articles : arts.map(article => wpToArticle(article))
                })
            })
            // let articles = 
            // console.log(articles)
            // await fetch('http://bedrock.test/wp-json/wp/v2/categories/')
            // .then(res => res.json())
            // .then(res => {
            //     articles.forEach(element => {
            //         res.forEach(cat => {
            //             if(cat.id == element.category) {
            //                 let catName = {categoryName : cat.name}
            //                 element = {...element , ...catName};
            //             }
            //         });
            //         console.log(element);
            //     });
            // });
    }
    // componentDidUpdate () {
    //     console.log(this.state.articles);
    // }        
    async setCategory (article) {
        await fetch('http://bedrock.test/wp-json/wp/v2/categories/')
            .then(res => res.json())
            .then(res => {
                    res.forEach(cat => {
                        if(cat.id == article.category) {
                            let catName = {categoryName : cat.name}
                            return article = {...article , ...catName}
                        }
                })
            })
    }

    render () {

        
        const cards = this.state.articles.map(card => <Card key={card.id} article = { card } />);
        
        return (
            <div>
                { cards }
            </div>
        );
    };
};

export default withRouter(Home);