const { log } = require('console');
const fs =require('fs')

// callback -----> to avoid callback hell
// fs.readFile('input1.txt',{encoding:'Utf-8'},(error,data)=>{
//     if(error){
//         console.log("Its shows error");
//     }else{
//         console.log(data);
//     }
// })

//--------------------------------------------------------------------
// fs.promises.readFile('input1.txt',{encoding:'utf-8'}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error",err);
// })
//..................................................................................

// async/await



const fetch = require('node-fetch');

// Function to fetch data from an API asynchronously using async/await
async function fetchData() {
    try {
        // Fetch data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Check if the response is successful (status code 200)
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON response
        const data = await response.json();

        return data; // Return the fetched data
    } catch (err) {
        throw err; // Throw any errors
    }
}

// Example usage: Fetch data from an API and log it
async function main() {
    try {
        const data = await fetchData(); // Wait for the promise to resolve
        console.log('Fetched data:', data);
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

main(); // Call the main function

