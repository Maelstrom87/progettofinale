import React from 'react';
import { withRouter,Link } from 'react-router-dom';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { id,title, preview, categoryName ,image} = this.props.article;
        const style = {backgroundImage: 'url(' + image + ')'};
         return (
            <div className="post  my-2 pe-0 container d-flex flex-raw justify-content-between shadow-white">
                <div className="d-flex flex-column align-items-start ">
                    <div>
                        <div className="p-1"><span className="fs-3 me-4" >{ title }</span> <span className="fs-6"> <strong>category:</strong> { categoryName }</span> </div>
                    </div>
                    <div className="text-start " dangerouslySetInnerHTML={{__html:preview}}></div>
                    
                    <div className="btn readmore ms-auto me-2 my-2"><Link className="text-white text-decoration-none text-end" to={'/'+id}>Read more...</Link></div>
                </div>
                <div id="image"  style={ style }></div>
            </div>
         )
    }

}

export default withRouter(Card);