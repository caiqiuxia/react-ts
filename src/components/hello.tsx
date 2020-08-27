// @ts-ignore
import React from 'react';

import { Button } from "antd";

// ts对象类型-接口
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

// @ts-ignore
export default Hello
