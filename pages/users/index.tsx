import { useEffect, useState } from 'react';

// You can replace this with a real API call to fetch users data
const fetchUsers = async () => {
  return [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
  ];
};

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={`/users/${user.name}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
