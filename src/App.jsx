import { useState, useEffect } from 'react';
import './App.css';
const url = 'https://randomuser.me/api/?results=20';
// const url = 'https://dummyjson.com/users';
import UserPaginateFetch from './Hooks/UserPaginateFetch';
import User from './Components/User';
import Pagination from './Components/Pagination';
function App() {
  const [data, loading] = UserPaginateFetch(url, 3);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (loading || !data) return; 
    setUsers(data[page - 1] || []);
    console.log(data);
    
  }, [loading, page, data]); 
  return (
    <>
      {loading && (
        <div className="loading"></div>
      )}
      {!loading && (
        <>
        <div className="Users my-auto w-full mx-auto grid grid-cols-3 gap-8">
        {users.length > 0 ? (
            users.map(({id,...user}) => (
          <User key={id} {...user}/>
            ))
       
          ) : (
            <p>No users found.</p> 
          )}
        </div>
        <Pagination Pages={data.length} setPage={setPage} activePage={page} />
        </>
      )}
    </>
  );
}

export default App;
