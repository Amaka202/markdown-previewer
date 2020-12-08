import React, { Component } from 'react'


export default class Previewer extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.marked }}>

            </div>
        )
    }
}
