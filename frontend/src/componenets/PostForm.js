import { useState,  } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../constante';
const url =`${API_URL}/todos/`;


const PostRequest = () => {

    const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

        const resp = await axios.post(url,{name:name,description:description,state:state});
        if(resp?.status === 201 ) {
            navigate('/')
        }
        console.log(resp);
    }catch(error){  
        console.log(error.response);
    }
  };

  return (
    <section>
      <h2>post request</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>
            name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>
            description
          </label>
          <input
            type='text'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='state'>
            state
          </label>
          <input
            type='text'
            id='state'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        
        <button type='submit'>
         Send
        </button>
      </form>
    </section>
  );
};
export default PostRequest;