import React, { useEffect, useState } from 'react'
import AppDataGrid from '../../utils/AppDataGrid'
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';

function DiplomaCourses() {
    const columns = [
        {
          field: "name",
          headerName: "Name",
          width: 120,
        },
        { field: "fullName", headerName: "Full Name", width:120 },
        { field: "specialition", headerName: "Specialition", width: 120 },
        {
          field: "duration",
          headerName: "Duration",
          width: 120,

        },
        {
          field: "fees",
          headerName: "Fees",
          width: 120,

        },
        {
          field: "type",
          headerName: "Types",
          renderCell: (params) => {
            console.log();
            return (
              <Button color="primary">
                Diploma
              </Button>
            );
          },
        },

      ];
    const [studentDAta, setStudentData] = useState([]);
    useEffect(()=>{
        fetchCoursedata()
    },[])

    const fetchCoursedata = async () => {
        axios
          .get(`${process.env.REACT_APP_API_URL_DEV}/getByCategoryCourse?type=Diploma`)
          .then((res) => {
            setStudentData(res.data.data);
          });
      };
  return (
    <div>
    <Box>
      <Typography
        variant="h2"
        color={"#141414"}
        fontWeight="bold"
        textAlign={'center'} 
        sx={{ m: "0 0 5px 0" }}
      >
       Diploma
      </Typography>
      <Typography variant="h5" textAlign={'center'} color={"blue"}>
       Course
      </Typography>
    </Box>
<AppDataGrid studentDAta={studentDAta} columns={columns}/>
    </div>
  )
}

export default DiplomaCourses