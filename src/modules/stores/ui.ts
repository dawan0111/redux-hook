export const OPEN_DIALOG = 'ui/OPEN_DIALOG' as const;
export const CLOSE_DIALOG = 'ui/CLOSE_DIALOG' as const;

type uiState = {
  dialog: {
    [key: string]: boolean;
  }
}

const initDialog = {
  todoAdd: false,
  todoUpdate: false
}

const initState: uiState = {
  dialog: initDialog,
}

export type TdialogId = keyof typeof initDialog;

export const openDialog = (id: TdialogId) => ({
  type: OPEN_DIALOG,
  payload: { id }
})

export const closeDialog = (id: TdialogId) => ({
  type: CLOSE_DIALOG,
  payload: { id }
})

type uiAction = | ReturnType<typeof openDialog> | ReturnType<typeof closeDialog>;

export default function ui(state: uiState = initState, action: uiAction) {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          [action.payload.id]: true
        }
      }
    case CLOSE_DIALOG:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          [action.payload.id]: false
        }
      }
    default:
      return state;
  }
}
