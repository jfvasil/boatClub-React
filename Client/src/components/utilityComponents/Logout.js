import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Logout = () => {
  const {setAuth, setPersist } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post('/auth/logout', {
            withCredentials: true
        });
        setAuth(null);
        setPersist(false)
  
        navigate('/home');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    logout();
  }, [setAuth, navigate, setPersist]);

  return <div>Logging out...</div>
};

export default Logout;
