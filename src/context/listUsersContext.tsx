import { createContext, useState, useContext } from 'react';

import { ListUsersContextProps, ListUsersProviderProps, UsersDataProps } from '../services/types'

export const ListUsersContext = createContext({} as ListUsersContextProps)

export function ListUsersProvider({children}: ListUsersProviderProps){
  const [usersData, setUsersData] = useState<UsersDataProps[]>([])

  function getUsersData(params: UsersDataProps[] ){
    setUsersData(params)
  }

  return(
    <ListUsersContext.Provider value={{usersData, getUsersData}}>
      {children}
    </ListUsersContext.Provider>
  )

}

export const useListUsersContext = () => {
  return useContext(ListUsersContext)
}