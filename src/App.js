import React, { useState } from 'react';
import { Editor } from 'codice';
import { highlight } from 'sugar-high';
import Sandbox from './sandbox';
import sourceFiles from './sourceCode';

function App() {
  const [activeFile, setActiveFile] = useState('/src/App.tsx');
  const [files, setFiles] = useState(sourceFiles);

  return (
    <>
    <div className="app">
      <div>
        <div className='filetree'>
          {
            Object.keys(files).map((filename) => (
              <div
                role='button'
                key={filename}
                disabled={filename === activeFile}
                className={'filetab filetab--' + (filename === activeFile ? 'active' : '')}
                onClick={() => setActiveFile(filename)}
              >
                {filename}
              </div>
            ))
          }
        </div>
        <Editor
          highlight={highlight}
          className='editor'
          value={files[activeFile]}
          onChange={(code) => {
            setFiles({
              ...files,
              [activeFile]: code,
            })
          }}
        />
      </div>
     
    </div>
    <div className='preview'>
        <Sandbox
          // bundlerURL="http://localhost:8888/vite.html"
          bundlerURL="http://localhost:3006/vite.html"
          files={files} />
      </div>
    </>
  );
}

export default App;
