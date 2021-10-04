import React from 'react';
import Card from '../Card';

class Home extends React.Component {
    constructor () {
        super ();

        this.state = {
            articles = []
        };
    };

    render () {
        const cards = this.state.articles.map(card => <Card key={card.id} article = { article }/>);

        return (
            <div>
                { cards }
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    };
};