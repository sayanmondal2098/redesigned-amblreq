import axios from "axios";
import { AsyncStorage } from 'react-native';


export const ValidateUser = async (email) => {
    //AsyncStorage.removeItem('LogedId');
    var info = "Validated";
    var config = {
        method: 'get',
        url: `https://dev100329.service-now.com/api/now/table/x_619543_amblreq_ambluser?sysparm_query=email%3D${email}&sysparm_limit=10`,
        headers: {
            'Authorization': 'Basic YWRtaW46UFVUUy96ITVtanky',
            'Cookie': 'BIGipServerpool_dev100329=2995804170.51776.0000; JSESSIONID=E6DEEA1FFE879B498912B5948BB01FD1; glide_session_store=F2C6BA0547102110995E93BD436D43B0; glide_user_route=glide.14696ff858ca88f5d656917c6ee73476'
        }
    };


    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            loginResponseController(response)
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const loginResponseController = (response) => {
    if (response.status === 200) {
        console.log("Response received from Axios code");
        var obj = response.data
        console.log(obj.result)
        if (obj.result[0] == null) {
            console.log("No User Found")
        } else {
            var count = Object.keys(obj.result[0]).length;
            console.log("size of array is " + count);
            var name = obj.result[0].name;
            var email = obj.result[0].email;
            var sysId = obj.result[0].sys_id;

            console.log("name = " + name)
            console.log("email = " + email)
            console.log("sysId = " + sysId)
        }

    } else {
        console.log("Network Issue")
    }
}