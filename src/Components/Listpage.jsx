import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DepartmentList from './DepartmentList';
const Listpage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setRows(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100, },
    { field: 'title', headerName: 'Title', width:200},
    { field: 'body', headerName: 'Body', width: 400 },
    { field: 'userId', headerName: 'User ID', width:100},
  ];

  return (
      <div>
    <div style={{ height:650, width:'55%',margin:'15px auto'}}>
      <DataGrid rows={rows} columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
     pageSizeOptions={[10]}
      />
    </div>
    <div style={{marginBottom:'15px',width:'55%'}}>
    <DepartmentList/>
    </div>
    </div> 
  );
};

export default Listpage;
