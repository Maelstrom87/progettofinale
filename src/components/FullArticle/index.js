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
        const { id,title, body, categoryName,image} = this.state.article;

        return(
            <div className="fullArt bg-dark py-1">
                <div className="p-1"><span className="fs-3 me-2  text-white" ><h2 className="pt-3 pb-1">{ title }</h2></span></div>
                <div className="FArt  container pt-4 ">
                    <div className="p-2 my-2"><img className="fImage" src={image} alt="" /></div>
                    <div className=" p-2" dangerouslySetInnerHTML={{__html:body}}></div>
                </div>
            </div>
        )
    }
}

export default withRouter(FullArticle);