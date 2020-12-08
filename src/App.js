import React, { Component } from 'react'
import "./App.css"
import marked from 'marked';
import Previewer from './Previewer'
import Editor from './Editor';

export default class App extends Component {
  render() {
    return (
      <div>
        <Editor />
      </div>
    )
  }
}
