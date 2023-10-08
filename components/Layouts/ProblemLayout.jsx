import React from 'react'
import styled from 'styled-components'
import Editor from '@monaco-editor/react';


const ProblemLayout = ({children}) => {
  return (
    <Layout>
      <div className="content">
        {children}
      </div>
      <div className="code-editor">
      <Editor
         height="calc(100vh - 40px)" 
         name="index.js" 
         theme="vs-dark"
          defaultLanguage="javascript" 
          defaultValue="// Estamos en construcción 🚧" 
          options={{
            scrollBeyondLastLine:false,
            fontSize:"16px"
            }}  
        />
      </div>
    </Layout>
  )

}

const Layout = styled.article`
  display: block;
  margin-top: 40px;

  .code-editor, .content {
    height: calc(100vh - 40px);
  }

  .code-editor {
    background: black;
    padding-top: 10px;
  }

  .content {
    overflow: hidden;
    padding: 1rem;
  }

  code {
    overflow: scroll;
  }

  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
    .content, .code-editor {
      height: calc(100vh - 40px);
      overflow: scroll;
    }

  }
`

export default ProblemLayout