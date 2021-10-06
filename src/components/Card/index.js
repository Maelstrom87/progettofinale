import React from 'react';
import { withRouter,Link } from 'react-router-dom';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { id,title, preview, categoryName} = this.props.article;

         return (
            <div className="post my-2 g-2 container d-flex flex-column align-items-start">
                <div>
                    <div className="p-1"><span className="fs-3 me-4" >{ title }</span> <span className="fs-6"> <strong>category:</strong> { categoryName }</span> </div>
                </div>
                <div dangerouslySetInnerHTML={{__html:preview}}></div>
                
                <div className="btn readmore my-2"><Link className="text-white text-decoration-none" to={'/'+id}>Read more...</Link></div>
            </div>
         )
    }

}

export default withRouter(Card);