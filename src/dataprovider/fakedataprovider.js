import data_30170 from '../data/30170';
import data_2934 from '../data/2934';
import data_7355 from '../data/7355';
import data_7356 from '../data/7356';
import data_7347 from '../data/7347';
import data_1835 from '../data/1835';
import data_8767 from '../data/8767';

export default function fakedataprovider(id)
{
  switch(id){
    case '30170':
      return data_30170;
    case '1835':
        return data_1835;
    case '2934':
        return data_2934;
    case '7347':
        return data_7347;
    case '7355':
      return data_7355;
    case '7356':
      return data_7356;
    case '87367':
      return data_8767;
    default:
      console.error("Missing data for id: " + id);
      break;
   };
}
