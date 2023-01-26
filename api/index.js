import axios from "axios";
import {AsyncStorage} from 'react-native';

export const getUserDate = async (email) => {
  //AsyncStorage.removeItem('LogedId');
  var info = '';
  var config = {
    method: 'get',
    url: `https://dev100329.service-now.com/api/now/table/x_619543_amblreq_ambluser?sysparm_query=email%3D${email}&sysparm_limit=10`,
    headers: {
      'Authorization': 'Basic YWRtaW46UFVUUy96ITVtanky',
      'Cookie': 'BIGipServerpool_dev100329=2995804170.51776.0000; JSESSIONID=E6DEEA1FFE879B498912B5948BB01FD1; glide_session_store=F2C6BA0547102110995E93BD436D43B0; glide_user_route=glide.14696ff858ca88f5d656917c6ee73476'
    }
  };

    axios(config)
      .then((response) =>  {
        const data = JSON.stringify(response.data);
        
        var count = Object.keys(data).length;
        console.log(count)
        console.log(typeof(count))
        if (count == "13") {
          
          info = "User Not Find";
          AsyncStorage.removeItem('LogedId')
          
        } else {
          
          info = "User Find";
          AsyncStorage.setItem(
            'LogedId', `${email}`,
            
          );
          
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    return info;
  
};
