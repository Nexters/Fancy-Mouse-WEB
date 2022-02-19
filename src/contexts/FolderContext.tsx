import React, { createContext, ReactNode, useContext } from 'react';
import { FolderModel } from '@/components/folders/type';

interface FolderContextState {
  selectedFolder: FolderModel;
  selectFolder: (folder: FolderModel) => void;
  setFolderName: (folderName: string) => void;
  setFolderColor: (folderColor: string) => void;
  saveFolderList: (newList: FolderModel[]) => void;
  folderList: FolderModel[];
}

export const FolderContext = createContext<FolderContextState>({} as FolderContextState);

export const FolderProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFolder, setSelectedFolder] = React.useState<FolderModel>({} as FolderModel);
  const [folderList, setFolderList] = React.useState<FolderModel[]>([] as FolderModel[]);
  const selectFolder = (folder: FolderModel) => {
    setSelectedFolder(folder);
  };

  const setFolderName = (folderName: string) => {
    setSelectedFolder({ ...selectedFolder, folderName: folderName });
  };

  const setFolderColor = (folderColor: string) => {
    setSelectedFolder({ ...selectedFolder, color: folderColor });
  };

  const saveFolderList = (newList: FolderModel[]) => {
    setFolderList([...newList]);
  };

  return (
    <FolderContext.Provider
      value={{ selectedFolder, selectFolder, setFolderName, setFolderColor, saveFolderList, folderList }}
    >
      {children}
    </FolderContext.Provider>
  );
};

export const useFolderContext = () => {
  const context = useContext(FolderContext);
  if (!context || context === ({} as FolderContextState)) {
    throw new Error('You need to wrap FolderProvider');
  }
  return context;
};
