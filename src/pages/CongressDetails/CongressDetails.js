import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import Layout from '../Layout';

import SimpleBreadcrumbs from '../../components/SimpleBreadcrumbs';
import Dashboard from '../dashboard';

import API from '../../dataprovider/coursedetailsprovider';
import fakedataprovider from '../../dataprovider/fakedataprovider';

import './CongressDetails.css';

// axios.get('https://luktrainingcourses.s3.eu-central-1.amazonaws.com/api/courses/1835'
// axios.get('https://oua6w3ywm8.execute-api.eu-central-1.amazonaws.com/prod/data' 


const TRAINING_COURSES_SERVICE_ENDPOINT = "beta3/lukcourses/";
// const TRAINING_COURSES_SERVICE_ENDPOINT = "api/courses/";

export default function CongressDetails(props){

  console.log(props);
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(TRAINING_COURSES_SERVICE_ENDPOINT + props.match.params.id)
      .then(res => { 
        console.log(res);
        console.info("Use data from API call");        
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
        console.error("Use data from fake DB");        
        setData(fakedataprovider(props.match.params.id));        
      });
    }, []);
  
  if (data !== null )
  {
    console.log("data from API: " + data);
    return (
      <React.Fragment>
        <Layout title={data.title}>
          <SimpleBreadcrumbs title={data.title}/>
            <Dashboard data={data}/>
          </Layout>
      </React.Fragment>
    );
  }

 return (
  <React.Fragment>
    <Layout title="Lernumgebung">
    <Typography variant="h4" component="h4">
          Daten werden geladen...
      </Typography>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </Layout>
  </React.Fragment>
 );

}
