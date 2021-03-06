// @ts-ignore
import * as React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom';
// @ts-ignore
import Hello from './components/hello';
import Button from "./components/button";

import * as serviceWorker from './serviceWorker';

// @ts-ignore
ReactDOM.render(
    <>
        <Hello name="TypeScript" />
        <Button children="小孩子" />
    </>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
