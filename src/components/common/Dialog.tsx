import React from 'react';
import styled from 'styled-components';
import { DialogPosition } from '../../types';
import { Modal } from '../../style';

export type IDialogProps<P> = P & React.PropsWithChildren<{
  position: DialogPosition
  open: boolean;
  onClose: () => void;
}>

const UnderContainer = styled.div<{
  open: boolean;
}>`
  position: fixed;
  z-index: 1001;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  ${props => props.open ? `
    opacity: 1;
    transform: translateY(0);
  ` : `
    opacity: 0;
    transform: translateY(100%);
  `}
  transition: 300ms ease;
`

export default function Dialog(props: IDialogProps<{}>) {
  const { position, open, onClose, children } = props;

  return (
    <>
      <Modal open={open} onClick={onClose}/>
      {position === 'under' && (
        <UnderContainer open={open} >{open && children}</UnderContainer>
      )}
    </>
  )
}
