
// *****************This Wrapp for ArticleList*******************//
// **************** Now it don't works *************************//




import React from 'react';

export default (Component) => class Accordion extends React.Component {
    state = {
        openItemId: null
    }

    render() {
        return <Component {...this.props} 
        toggleOpenItem = {this.toggleOpenItem} 
        openItemId = {this.state.openItemId}
        />
    }

    toggleOpenItem = (openItemId) => () => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }


}




