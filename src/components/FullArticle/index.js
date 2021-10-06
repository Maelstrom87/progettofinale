import React from 'react';
import { withRouter } from 'react-router-dom';
import { wpToArticle } from '../../models/Article';
import Card from '../Card';

const URL = 'http://bedrock.test/wp-json/wp/v2/posts';
class FullArticle extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            article: []
        }
    }
    async componentDidMount () {
        const id = this.props.match.params.id;
        await fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(art =>{
                this.setState({ 
                    article : wpToArticle(art)
                })
            })
        
    }
    
    render () {
        const { id,title, body, categoryName} = this.state.article;

        return(
            <div>
                <div>{ title } - {  }</div>
                <div>{body}</div>
                {/* dangerouslySetInnerHTML={{__html: <div> {body} >} */}

            </div>
        )
    }
}

export default withRouter(FullArticle);