import {  useEffect, useState, ChangeEvent } from 'react';

import {TableRow, TableHead, Table, TableBody, 
  TableContainer, Paper} from '@material-ui/core';
import {Delete, Search} from '@material-ui/icons';
import { AiOutlineReload } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import { useListUsersContext } from '../context/listUsersContext';
import { UsersDataProps } from '../services/types';
import api from '../services/api';
import formatDate from '../services/formattedDate';

import { Container, ButtonContainer,
  InputSection, StyledHeadTableCell,
  StyledBodyTableCell, FilterContainer, 
  ButtonGenderFemale, ButtonGenderMale,
  NationalityContainer} from './styles'


const Dashboard = () => {
  const { getUsersData, usersData } = useListUsersContext();
  
  const [usersList, setUsersList] = useState<UsersDataProps[]>([]);
  const [filteredList, setFilteredList] = useState<UsersDataProps[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const [usersPerPage, setUsersPerPage] = useState(10);

  const indexOfLastUser = usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const paginateUsers = usersList.slice(indexOfFirstUser, indexOfLastUser);

  const nationalities = ["AU", "BR", "CA", "CH", "DE", "DK", "ES",
   "FI", "FR", "GB", "IE", "IR", "NO", "NL", "NZ", "TR", "US"];

  
  async function getData(){
    const {data} = await api.get("",{params:{ results: 50, seed: 'foobar'}});
    setUsersList(data);
    getUsersData(data);
  }
  
  function filterUsersByGender(param: string){
    if (param === gender) { 
      setUsersList(usersData);
      setGender('');
    } else { setGender(param);
      setUsersList(usersData.filter( item => item.gender === param));
    }
  }

  function handleDelete(id: string){
    const newList = usersList.filter(item => item.login.username !== id);
    setUsersList(newList);
  }

  function handleFilteredUsers(event: ChangeEvent<HTMLInputElement>){
    const filter = event.currentTarget.value;
    setInputValue(filter.toLowerCase());
    setFilteredList(usersList.filter( list => list.name.first.toLowerCase().includes(inputValue)));
  }

  function filterByNationality(event: ChangeEvent<HTMLSelectElement>){
    const nationalityFilter = event.currentTarget.value;
    if(!nationalityFilter){
      setUsersList(usersData);
    } else {
      setUsersList(usersData.filter( item => item.nat.toUpperCase() === nationalityFilter));
    }
  }

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Container>
      <Header/>
      <InputSection>
        <input onChange={e => handleFilteredUsers(e)} 
        type="text" placeholder="Search User"/>
        <Search/>
      </InputSection>
      <FilterContainer >
        <ButtonGenderMale gender={gender} 
        onClick={() => filterUsersByGender('male') }>
          Male
        </ButtonGenderMale>
        <ButtonGenderFemale  gender={gender}
        onClick={() => filterUsersByGender('female') }>
          Female
        </ButtonGenderFemale>
        <NationalityContainer>
          <p>Nationality: </p>
          <select onChange={(event) => filterByNationality (event)}>
            <option></option>
            {nationalities.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
        </NationalityContainer>
      </FilterContainer>
     <TableContainer component={Paper} style={{width:'60%', margin: 'auto'}}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeadTableCell >
                <p>Name</p>
              </StyledHeadTableCell>
              <StyledHeadTableCell>
                <p>Gender</p>
                </StyledHeadTableCell>
              <StyledHeadTableCell>
                <p>Birth</p>
              </StyledHeadTableCell>
              <StyledHeadTableCell>
                <p>Actions</p>
              </StyledHeadTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(inputValue.length <  2 ? paginateUsers : filteredList)
            .map((user, index) => (
              <TableRow key={index}>
                <StyledBodyTableCell component="th" scope="row">
                  <p>{`${user.name.first} ${user.name.last}`}</p>
                </StyledBodyTableCell>
                <StyledBodyTableCell>
                  <p>
                  {user.gender === 'male' ? 'Male' : 'Female'}
                  </p>
                  </StyledBodyTableCell>
                <StyledBodyTableCell >
                  <p>{formatDate(user.dob.date)}</p>
                </StyledBodyTableCell>
                <StyledBodyTableCell>
                  <div>
                    <button onClick={() => handleDelete(user.login.username)}>
                      <Delete/>
                    </button>
                    <Link to={`/${user.login.username}`}>
                      <button>
                        <p>Modal</p>
                      </button>
                    </Link>
                  </div>
                </StyledBodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <button onClick={() => setUsersPerPage(prevState => prevState + 10)}>
          <AiOutlineReload size={22}/>
          <span>Loading</span>
        </button>
      </ButtonContainer>
    </Container>
  );
}

export default Dashboard;