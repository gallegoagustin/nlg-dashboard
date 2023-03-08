import { fakeData } from "./utils";

// export const getAsyncJobs = async () => {
//     const response = await fetch('https://dev.app.kaptursoftware.co.uk/v1/jobs/job-dashboard/', { method: 'GET', headers: {'Access-Control-Allow-Origin': 'no-cors'} })
//     console.log('aca', response.json())
// }

export async function getAsyncJobs() {
    // let headers = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Origin','http://localhost:8080');

    // fetch('https://dev.app.kaptursoftware.co.uk/v1/jobs/job-dashboard/', {
    //     mode: 'cors',
    //     credentials: 'include',
    //     method: 'GET',
    //     headers: headers
    // })
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(error => console.log('Authorization failed: ' + error.message));
    return [...fakeData];
}