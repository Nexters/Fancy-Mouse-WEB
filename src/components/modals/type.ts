export const MODAL_TYPE = Object.freeze({
  WORD: 'Word',
  FOLDER: 'Folder',
  DELETE: 'Delete',
} as const);

export type ModalType = typeof MODAL_TYPE[keyof typeof MODAL_TYPE];
