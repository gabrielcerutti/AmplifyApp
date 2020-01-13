import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import Layout from '../Layout';
import Trainingcourse from '../Trainingcourse';
import SimpleBreadcrumbs from '../../components/SimpleBreadcrumbs';

import API from '../../dataprovider/coursedetailsprovider';
import fakedataprovider from '../../dataprovider/fakedataprovider';

import getCourse from './actions/coursedetails.actions';

import './Coursedetails.css';

const TRAINING_COURSES_SERVICE_ENDPOINT = "beta3/lukcourses/";
// const TRAINING_COURSES_SERVICE_ENDPOINT = "api/courses/";


// https://www.andreasreiterer.at/rest-api-react-component/
// https://www.andreasreiterer.at/rest-api-react-hooks/


const getCourseDetails = async (id) =>
{

  console.log('getCourseDetails :' + id)
    await API.get(TRAINING_COURSES_SERVICE_ENDPOINT + id, {id})
//    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => 
      {
        console.log("Data from api:" + res.data);
        return res.data;
      }
      )
    .catch(err => {
      console.log(err);
    });
    return null;
}

export default function Coursedetails(props){

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
    API.get(TRAINING_COURSES_SERVICE_ENDPOINT + props.match.params.id )
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

  var details = null;

  /* 
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
    details = data;
    return (
      <React.Fragment>
        <Layout title={details.title}>
          <SimpleBreadcrumbs title={details.title}/>
            <Trainingcourse data={details}/>
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
