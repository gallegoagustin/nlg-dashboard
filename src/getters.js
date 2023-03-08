import { fakeData } from "./utils";
import { sortByDate, sortByPk } from "./utils";

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

export const getJobsFilteredByPartner = (arr, filter) => {
    const filteredArray = arr.filter(item => item.selected_partner == filter);
    const sortedArray = sortByPk(filteredArray)
    return sortedArray.slice(0, 5);
}

export const getJobsSortedByViewDate = (arr) => {
    const sortedArray = sortByDate(arr, 'last_viewed_date');
    const filteredArray = sortedArray.slice(0, 5);
    return filteredArray;
}