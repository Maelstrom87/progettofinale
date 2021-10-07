import React from 'react';
import { withRouter } from 'react-router-dom';
import { wpToPage } from '../../models/Page';

class DynamicPage extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            page: []
        }
    }

    async componentDidMount () {
        const slug = this.props.match.params.slug;

        await fetch('http://bedrock.test/wp-json/wp/v2/pages/?slug='+slug)
            .then(res => res.json())
            .then(pages => {
                let page = wpToPage(pages[0])
                this.setState ({page})
            });
    };

    render() {
        const {title ,body} = this.state.page;

        return(
            <div className="fullArt bg-dark py-1">
                <div className="p-1"><span className="fs-3 me-2  text-white" ><h2 className="pt-3 pb-1">{ title }</h2></span></div>
                <div className="FArt  container pt-4 ">
                    <div className=" p-2" dangerouslySetInnerHTML={{__html:body}}></div>
                </div>
            </div>
        )
    }
}

export default withRouter(DynamicPage);