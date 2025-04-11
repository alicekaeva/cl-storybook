import React from "react"
import { Button as AntdButton } from "antd"
import type { ButtonProps } from "antd"

type CustomButtonProps = ButtonProps & {
  customProp?: string
}

export const Button: React.FC<CustomButtonProps> = ({ customProp, ...props }) => {
  return <AntdButton {...props}>{customProp || props.children}</AntdButton>
}
