import { useEffect, useState } from 'react';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
}

// Replace this with a real API call to fetch users data
const fetchUsers = async (): Promise<User[]> => {
  return [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
  ];
};

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

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
            <Link href={`/users/${user.name}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
