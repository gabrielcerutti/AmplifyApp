import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import Layout from '../Layout';
import Trainingcourse from '../Trainingcourse';
import SimpleBreadcrumbs from '../../components/SimpleBreadcrumbs';

import './TrainingCourseDetails.css';

import API from '../../dataprovider/coursedetailsprovider';
import fakedataprovider from '../../dataprovider/fakedataprovider';

import data_30170 from '../../data/30170';
import data_7355 from '../../data/7355';
import data_7356 from '../../data/7356';
import data_7347 from '../../data/7347';
import data_1835 from '../../data/1835';

function fallbackSolution(id)
{
  switch(id){
    case '30170':
      return data_30170;
    case '1835':
        return data_1835;
    case '7347':
        return data_7347;
    case '7355':
      return data_7355;
    case '7356':
      return data_7356;
    default:
      console.error("Missing data for id: " + id);
      break;
   };
}

// https://xoou39cqs0.execute-api.eu-central-1.amazonaws.com/beta/lukcourses/1835

const TRAINING_COURSES_SERVICE_ENDPOINT = "beta3/lukcourses/";
// const TRAINING_COURSES_SERVICE_ENDPOINT = "api/courses/";

const config = {
  headers: {
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*'
//    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
//    , 'Content-Type': 'application/json'
  }
};



// https://www.andreasreiterer.at/rest-api-react-component/
// https://www.andreasreiterer.at/rest-api-react-hooks/

export default function TrainingCourseDetails(props){

  console.log(props);

  /*
  var d = '../../data/' + props.match.params.id;
  console.log(d);
  const OtherComponent = (() => import(d));
  console.log(OtherComponent);
*/
  const data_id = props.match.params.id;
   
//   const {data, error, isLoading} = { [], false, false }; // getCourseDetails(props.match.params.id);
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(TRAINING_COURSES_SERVICE_ENDPOINT + props.match.params.id, config)
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

  const error = false;
  const isLoading = false;

  
  /* 
  var details = null;

  if( details === null )
   {
    switch(data_id){
      case 'data_7355':
      case '7355':
        details = data_7355;
        break;
      case 'data_7356':
      case '7356':
          details = data_7356;
        break;
      default:
        break;
     };

     console.log("details loaded from file: " + details);

   }

   if( details === null )
   {
    return (
      <React.Fragment>
        <Layout>
        </Layout>
      </React.Fragment>
    );
   }
*/

  if (isLoading) 
  {
    return "Loading...";
  }
  if (error) 
  {
    return `Something went wrong: ${error.message}`;
  }
  if (data !== null )
  {
    console.log("data from API: " + data);
    return (
      <React.Fragment>
        <Layout title={data.title}>
          <SimpleBreadcrumbs title={data.title}/>
            <Trainingcourse data={data}/>
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
