import React, { Component } from 'react'
import marked from 'marked';


// let marked = require("marked");

export default class Editor extends Component {
    constructor(props){
        super(props)
        this.state = {
          markdown: "## A header"
        };
      }

      handleUpdate = (e) => {
          this.setState({
              markdown: e.target.value
          })
      }
    render() {
        return (
            <div className="big-container">
                <div id="container">
                    <p className="subheading">Editor</p>
                    <textarea 
                    id="editor" 
                    value={this.state.markdown}
                    onChange={this.handleUpdate}>
                    
                    </textarea>
                </div>
                <div id="">
                    <p className="subheading">
                        Previewer</p>
                    <div  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                    }} id="preview">
                </div>
                </div>
            </div>
        )
    }
}
