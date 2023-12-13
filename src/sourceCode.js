const packageJson =  {
  name: 'demo',
  private: true,
  dependencies: {
    react: '17.0.2',
    'react-dom': '17.0.2',
    "dayjs": "^1.11.7",
    '@pupu/http': '4.7.0',
    '@pupu/brick': '1.30.2'
  },
};

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="data:image/ico;base64,aWNv">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root" />
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>`.trim();

const entryCode = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
`.trim();

const lessCode = `
body {
  background: #eee;
  border: solid 1px black;
}
.test{
  border: solid 2px red;
}
`.trim();

const appCode = `
import React from 'react';
import dayjs from 'dayjs';
import Comp from './Comp';
import styles from './index.module.less';
import test from './test.ts';
import type { ImportMap } from "./typescript-esm-plugin.ts";

 import http2 from '@pupu/http';
 console.log(http2)
function App({a}: ImportMap) {
  return (
    <div className={styles.test}>Hello World, ViteSandbox!
    {dayjs(new Date()).toString()}
    <Comp />
    </div>
  );
}

export default App;
`.trim();

const files = {
  '/package.json': JSON.stringify(packageJson),
  '/index.html': htmlCode,
  '/src/index.tsx': entryCode,
  '/src/Comp.js': `
  import React from 'react';
  import ReactDOM from 'react-dom';
  export default function () {
    return <div>Index2</div>
  }
  `,
  '/src/index.module.less': lessCode,
  '/src/test.ts': `
    export default {a: 1} as any
  `,
  '/src/App.tsx': appCode,
  '/img.ico': `https://platformtest.pupuvip.com/owl-web-test/a15fc55bf6363825a0cd.ico`

};

export default files;
