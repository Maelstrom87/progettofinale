import React from 'react';
import reactDom from 'react-dom';
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
                this.setState ({ page })
            })
    }
    
    componentDidUpdate () {

        console.log(this.state.page);

    }

    render() {
        const { title ,body } = this.state.page;

        return(
            <div>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{__html:body}}></div>
            </div>
        )
    }
}

export default withRouter(DynamicPage);