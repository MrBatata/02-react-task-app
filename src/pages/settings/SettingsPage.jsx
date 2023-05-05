import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NotificationManager from '../../components/pure/forms/NotificationManager.jsx';


const ProfilePage = ({ user }) => {

  const location = useLocation();
  console.log(`We are in Route ${location.pathname}`);

  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  }

  const goBack = () => {
    history.goBack();
  }

  return (
    <div>
      <h1>Tu Perfil</h1>
      <NotificationManager></NotificationManager>
      <div>
        <button onClick={() => { navigateTo('/dashboard') }}>Volver a DashBoard</button>
      </div>
    </div>
  );
}

export default ProfilePage;