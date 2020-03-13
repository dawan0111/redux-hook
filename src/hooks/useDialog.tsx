import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TdialogId, openDialog, closeDialog } from '../modules/stores/ui';
import { RootState } from '../modules';

export default function useDialog(id: TdialogId) {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.ui.dialog[id])

  const onOpen = React.useCallback(() => {
    dispatch(openDialog(id));
  }, [dispatch, id]);

  const onClose = React.useCallback(() => {
    dispatch(closeDialog(id));
  }, [dispatch, id])

  return {
    open,
    onOpen,
    onClose
  }
}
