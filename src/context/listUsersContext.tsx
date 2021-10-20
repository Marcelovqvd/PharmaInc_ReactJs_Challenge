import { createContext, useState, useContext } from 'react';

import { ListUsersContextProps, ListUsersProviderProps, UsersDataProps } from '../services/types';

export const ListUsersContext = createContext({} as ListUsersContextProps);

export function ListUsersProvider({children}: ListUsersProviderProps){
  const [usersData, setUsersData] = useState<UsersDataProps[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)

  function getUsersData(params: UsersDataProps[]){
    setUsersData(params);
  };

  
  function handleModal(param: boolean){
    setOpenModal(param);
  };

  return(
    <ListUsersContext.Provider value={{usersData, getUsersData, openModal, handleModal}}>
      {children}
    </ListUsersContext.Provider>
  )

};

export const useListUsersContext = () => {
  return useContext(ListUsersContext);
}