import React from 'react';
import styled from 'styled-components';
import Dialog, { IDialogProps } from '../common/Dialog';
import { Wrapper } from '../../style';

const Container = styled(Wrapper)`
  padding: 16px;
`
const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`
const Content = styled.div`
`

export default function TodoDialog(props: IDialogProps<{
  title: string;
}>) {
  const { position, open, onClose, title, children } = props;

  return (
    <Dialog
      position={position}
      open={open}
      onClose={onClose}
    >
      <Container>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Container>
    </Dialog>
  )
}
