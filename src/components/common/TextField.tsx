import React from 'react';
import styled from 'styled-components';

export interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  multiLine?: boolean;
}


const Field = styled.div`
  margin-bottom: 12px;
  font-size: 0;
`
const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
`
const TextFieldStyle = `
  width: 100%;
  padding: 12px;
  background: #ededed;
  border: none;
  border-radius: 5px;
  font-size: 12px;
`

const Input = styled.input`
  ${TextFieldStyle}
`
const Textarea = styled.textarea`
  ${TextFieldStyle}
  resize: none;
`

export default function TextField(props: ITextFieldProps) {
  const { label, multiLine, ...inputProps } = props;

  return (
    <Field>
      {!!label && <Label htmlFor={inputProps.id}>{label}</Label>}
      { multiLine ? <Textarea {...inputProps}>{inputProps.value}</Textarea> : <Input {...inputProps} />  }
    </Field>
  )
}
