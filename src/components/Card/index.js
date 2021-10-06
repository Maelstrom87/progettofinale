import React from 'react';
import { withRouter,Link } from 'react-router-dom';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    // async componentDidMount () {
    //     let article = this.props.article;
    //     await fetch('http://bedrock.test/wp-json/wp/v2/categories/')
    //     .then(res => res.json())
    //     .then(res => {
    //             res.forEach(cat => {
    //                 if(cat.id == article.category) {
    //                     let catName = {categoryName : cat.name}
    //                     console.log(catName);
    //                     article = {...article , ...catName}
    //                 }
    //         })
    //     })
    // }
    
    render() {
        const { id,title, body, categoryName} = this.props.article;
        // console.log(this.props.article);
         return (
            <div>
                <div>{ title } - { categoryName }</div>
                <div dangerouslySetInnerHTML={{__html:body}}></div>
                
                <div><Link to={'/'+id}>Read more</Link></div>
            </div>
         )
    }

}

export default withRouter(Card);