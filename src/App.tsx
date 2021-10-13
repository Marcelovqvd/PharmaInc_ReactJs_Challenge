import React from 'react';
import Header from './components/Header';
import MainText from './components/MainText';
import BasicTextFields from './components/Input';
import BasicTable from './components/Table';
import UsersList from './components/UsersList';

function App() {
  return (
    <>
      <Header />
      <MainText />
      <BasicTextFields />
      <BasicTable />
      <UsersList />
    </>
  )
}

export default App;
