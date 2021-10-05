import React from 'react';

class UsersListRow extends React.Component {
     constructor(props) {
         super(props);
     }
 
     render() {
        // const to = `/users/${this.props.user.id}/todos`;
        const { id,title, body, category} = this.props.article;
        const selectedCat = category == 2 ? 'React' : 'Wordpress' ;
         return (
            <div>
                <div>{ title} { selectedCat }</div>
                <div>{ body }</div>
                {/* <div><Link to={}></Link></div> */}
            </div>
         )
     }

}

export default UsersListRow;