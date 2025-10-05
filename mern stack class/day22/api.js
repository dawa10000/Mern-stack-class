// const fetchUser=async()=>{
//     try{
//        return fetch('https://jsonplaceholder.typicode.com/users');

//     } catch (error){
//         console.log(error);
//     }
// }

// fetchUser()
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })


const p1 = new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 2000));

async function runTasks() {
    const results = await Promise.all([p1,p2]);
    console.log(results);
    
}

runTasks();
