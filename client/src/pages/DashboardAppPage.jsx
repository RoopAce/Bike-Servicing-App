
import React, { useState, useEffect } from 'react';
// import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Grid, Container } from '@mui/material';

import { Box, Card, CardContent } from "@mui/material";

// import PieChart from '../pages/PieChart'
import { FaUser, FaList, FaTwitter, FaShare } from "react-icons/fa";

import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { useLocation } from 'react-router-dom';

const data = [
  { name: 'Group A', value: 134 },
  { name: 'Group B', value: 87 },
  { name: 'Group C', value: 125 },
  { name: 'Group D', value: 36 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// components
// import Iconify from '../components/iconify';
// sections

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const location = useLocation();
  console.log("/Hello", location);
  const record = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      username: 'Bret',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      username: 'Antonette',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      username: 'Samantha',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      username: 'Karianne',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      username: 'Kamren',
      website: 'demarco.info',
    },
  ];

  // const[record,setRecord] = useState([])

  // const getData = () =>
  // {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(res=>setRecord(res))
  // }

  // useEffect(() => {
  //    getData();
  // },) 
  return (
    <>
      {
        location?.state?.userType === "Admin" ?
          <>hello</>
          :
          <Container maxWidth="xl">

            <Box className="col main pt-5 mt-3">
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xl={3} sm={6}>
                  <Card sx={{ height: "88%", bgcolor: "success.main", color: "white" }}>
                    <CardContent sx={{ bgcolor: "#57b960" }}>
                      <div className="rotate">
                        <FaUser size={35} />
                      </div>
                      <Typography variant="h4 " sx={{ textTransform: "uppercase" }}>
                        Users
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
                        134
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xl={3} sm={6}>
                  <Card sx={{ height: "88%", bgcolor: "error.main", color: "white" }}>
                    <CardContent sx={{ bgcolor: "error.dark" }}>
                      <div className="rotate">
                        <FaList size={35} />
                      </div>
                      <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                        Posts
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
                        87
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xl={3} sm={6}>
                  <Card sx={{ height: "88%", bgcolor: "info.main", color: "white" }}>
                    <CardContent sx={{ bgcolor: "info.dark" }}>
                      <div className="rotate">
                        <FaTwitter size={35} />
                      </div>
                      <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                        Tweets
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
                        125
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xl={3} sm={6}>
                  <Card sx={{ height: "88%", bgcolor: "warning.main", color: "white" }}>
                    <CardContent>
                      <div className="rotate">
                        <FaShare size={35} />
                      </div>
                      <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                        Shares
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
                        36
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

            </Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" component="h5" gutterBottom>
                  Data in Chart
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={6} lg={4}>
                <div style={{ height: 300 }}>
                  <PieChart width={400} height={300}>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data}
                      cx={200}
                      cy={150}
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {data.map((entry, index) => (
                        <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
              </Grid>
            </Grid>


          </Container>
      }

    </>
  );
}
