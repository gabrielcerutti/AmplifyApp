import API from '../../../dataprovider/coursedetailsprovider';

// not really implemented as an action 

export function getCourse(path, params)
{
    console.log('getCourse :' + {path});

    API.get({path}, {params})
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
