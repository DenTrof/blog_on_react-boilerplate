import React from 'react';

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        isOpen: false 
    } 
 
    render() {
        return <OriginalComponent {...this.props} 
        isOpen = {this.state.isOpen} 
        toggleOpen = {this.toggleOpen} ref = {this.getRef}
        />
    }

    toggleOpen = (ev) => {
         ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getRef = (ref) => {
        //console.log('---', ref);
    }
}
