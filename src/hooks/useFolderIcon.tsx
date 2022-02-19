import {
  Folder00,
  Folder01,
  Folder02,
  Folder03,
  Folder04,
  Folder05,
  Folder06,
  Folder07,
  Folder08,
  Folder09,
  Folder10,
  Folder11,
} from '@/assets/icons';

export const useFolderIcon = (folderColor: string | undefined) => {
  switch (folderColor) {
    case 'folder00':
      return <Folder00 />;
    case 'folder01':
      return <Folder01 />;
    case 'folder02':
      return <Folder02 />;
    case 'folder03':
      return <Folder03 />;
    case 'folder04':
      return <Folder04 />;
    case 'folder05':
      return <Folder05 />;
    case 'folder06':
      return <Folder06 />;
    case 'folder07':
      return <Folder07 />;
    case 'folder08':
      return <Folder08 />;
    case 'folder09':
      return <Folder09 />;
    case 'folder10':
      return <Folder10 />;
    case 'folder11':
      return <Folder11 />;
  }
};
