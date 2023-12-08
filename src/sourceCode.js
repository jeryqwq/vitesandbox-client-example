const packageJson =  {
  name: 'demo',
  private: true,
  dependencies: {
    react: '17.0.2',
    'react-dom': '17.0.2',
    "dayjs": "^1.11.7",
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
    <script type="module" src="/src/index.ts"></script>
  </body>
</html>`.trim();

const entryCode = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.ts';


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
type Props = {
  a: number,
  b: string
}
function App({a: number, b: string}:Props ) {
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
  '/src/index.ts': entryCode,
  '/src/Comp.js': `
  import React from 'react';
  import ReactDOM from 'react-dom';
  export default function () {
    return <div>Index2</div>
  }
  `,
  '/src/index.module.less': lessCode,
  '/src/App.ts': appCode,
};

export default files;
