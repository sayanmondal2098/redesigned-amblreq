import axios from "axios";

export const getDriver = async (pinCode) => {
    // https://dev100329.service-now.com/api/x_619543_amblreq/get_driver_details?zipId=700055

    var info = "Validated";
    var config = {
        method: 'get',
        url: `https://dev100329.service-now.com/api/x_619543_amblreq/get_driver_details?zipId=${pinCode}`,
        headers: {
            'Authorization': 'Basic YWRtaW46UFVUUy96ITVtanky',
            'Cookie': 'BIGipServerpool_dev100329=2995804170.51776.0000; JSESSIONID=E6DEEA1FFE879B498912B5948BB01FD1; glide_session_store=F2C6BA0547102110995E93BD436D43B0; glide_user_route=glide.14696ff858ca88f5d656917c6ee73476'
        }
    };


    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            assignedDriverController(response)
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const assignedDriverController = (response) => {
    if (response.status === 200) {
        console.log("Response received from Axios code");
        var obj = response.data
        // get Driver Sys Id
        console.log(obj.result)

    } else {
        console.log("Network Issue")
    }
}