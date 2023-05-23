import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  console.log(id);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/users/${id}`); 
        const data = await response.json();
        setUserData(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>User not found.</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
    
    </div>
  );
};

export default Profile;
