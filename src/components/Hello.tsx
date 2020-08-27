// @ts-ignore
import React from 'react';

import { Button } from "antd";

interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

// @ts-ignore
const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>

Hello.defaultProps = {
    firstName: '',
    lastName: ''
}

export default Hello
