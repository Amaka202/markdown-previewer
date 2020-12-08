import React, { Component } from 'react'
import Previewer from './Previewer';
import marked from 'marked';


// let marked = require("marked");

export default class Editor extends Component {
    constructor(props){
        super(props)
        this.state = {
          markdown: "",
        };
      }

      handleUpdate = (e) => {
          this.setState({
              markdown: e.target.value
          })
      }
    render() {
        return (
            <div className="edit">
                <textarea 
                id="editor" 
                value={this.state.markdown}
                onChange={this.handleUpdate}>
                    
                </textarea>
                {console.log(this.state.markdown)}
                <h1 className="check">hey</h1>
                <div id="previewer" dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              >

                </div>
            </div>
        )
    }
}
