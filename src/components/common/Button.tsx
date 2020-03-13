import React from 'react';
import styled from 'styled-components';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const ButtonStyle = styled.button<{
  fullWidth?: boolean;
  color?: string;
}>`
  ${props => props.fullWidth && `
    width: 100%;
  `}

  padding: .8em 1em;
  border: none;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ededed;

  ${props => props.color === 'primary' && `
    background: #e91e63;
    color: #fff;
  `}
`

export default React.memo(function Button(props: IButtonProps) {
  const { children, ...ButtonProps } = props;
  return (
    <ButtonStyle {...ButtonProps}>{children}</ButtonStyle>
  )
})