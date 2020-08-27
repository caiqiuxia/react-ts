/**
 * SFC 无状态组件开发
 */

// @ts-ignore
import { SFC } from 'react'
// @ts-ignore
import { MouseEvent } from 'react'
// @ts-ignore
import * as React from 'react'

interface IProps {
    onClick (event: MouseEvent<HTMLDivElement>): void,
}

// @ts-ignore
const Button: SFC<IProps> = ({onClick, children}) => {
    return (
        <div onClick={onClick}>
            { children }
        </div>
    )
}
export default Button
