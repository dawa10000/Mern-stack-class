// async function getData() {
//     // simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// // settle means resolve or reject
// // resolve means promise has settled successfully
// // reject means promise has not settled successfully

// async function getData() {
//     // simulate getting data from a server
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: "foo",
//             body: 'bar',
//             userID: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
//     let data = await x.json()
//     return data

// }

// async function main() {

//     console.log("Loading modules")

//     console.log("Do Something else")

//     console.log("Load Data")

//     let data = await getData()
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")

// }

// main()

// data.then((v) => {
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
// })


// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type" : "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     return response.json();
// }

// postData("https://example.com/answer", {answer: 42}).then((data) => {
//     console.log(data);
// });


// const fetchData=()=>{
//     const promise1 = new Promise((res)=>{
//         setTimeout(() => {
//             res("your data is fetched sucessfully");
//         }, 2000);
//     })
//     return promise1;
// }

// const getData = async()=>{
//     console.log("fetching data...");
//     const response = await fetchData();
//     console.log("Fetch data response", response);
//     console.log("last step");
// }

// getData();
const fetchData=()=>{
    const promise1 = new Promise((res,rej)=>{
        setTimeout(() => {
            res("your data is fetched sucessfully");
        }, 2000);
    })
    return promise1;
}


const fetchNewData = async()=>{
    try{
        console.log("Loading...");
        const response = await fetchData();
        console.log(response);
        console.log("Done!");
    }catch(error){
        console.log(error)
    }
}

