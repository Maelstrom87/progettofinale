import React from 'react';
import { withRouter } from 'react-router';

class Card extends React.Component {
    // in futuro implementare evento on-click oltre al link
    render () {
        const {title,resume,image} = this.props.card;

        return (
            <div>
                <div className="upper">
                    <div className="title">{ title }</div>
                    <div className="img"> <img src={ image } alt="" /></div>
                </div>
                <div className="resume">{ resume }</div>
                <div className="readAll"><Link>leggi tutto</Link></div>
            </div>
        );
    };
};

export default Card;