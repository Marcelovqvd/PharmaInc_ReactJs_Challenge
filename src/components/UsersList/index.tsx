import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const showUser = () => {
    console.log(users)
  }

  
  useEffect(() => {
    api.get('/?results=2')
    .then(response => response.data)
    .then(showUser)
  }, [users]);

  return (
    <ul>
      <li>Users</li>
    </ul>
  )
}
