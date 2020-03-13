import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

export const Modal = styled.div<{
  open: boolean;
}>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .5);

  ${props => props.open ? `display:block; ` : `display: none;`}
`
