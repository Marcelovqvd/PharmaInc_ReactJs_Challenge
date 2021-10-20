import { useEffect } from 'react';
import { useListUsersContext } from '../../context/listUsersContext'
import { useParams } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import { AiOutlineLink } from 'react-icons/ai'

import { Container } from './styles';
import formattedDate from '../../services/formattedDate';


interface UseParamsProps {
  id: string;
}

const UserModal = () => {

  const{ openModal, handleModal, usersData } = useListUsersContext()
  let params = useParams<UseParamsProps>()

  const user = usersData.filter( item => item.login.username === params.id)

  function getLink(link: string) {
    navigator.clipboard.writeText(`http://localhost:3000/${link}`)
    alert('Success!')
  }

  useEffect(() =>{
    params.id && handleModal(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <Modal open={openModal} onClose={() => handleModal(false)}>
      <Container>        
        {user.map( (item, index) => 
        <div key={index}>
          <img src={item.picture.large} alt="img" />
          <div>
            <h2>{`${item.name.first} ${item.name.last}`}</h2>
            <p>Age: {item.dob.age}</p>
            <p>Date of birth: {formattedDate(item.dob.date)}</p>
            <p>Gender: {item.gender === 'male' ? 'Male' : 'Female'}</p>
            <p>Nationality: {item.nat}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Locale: {`${item.location.city}, ${item.location.country}.`}</p>
            <button 
            onClick={() => getLink(item.login.username)}>
              <AiOutlineLink size={18}/> 
              Share
            </button>
          </div>
        </div>
        )}
      </Container>
    </Modal>
   
  );
}

export default UserModal;