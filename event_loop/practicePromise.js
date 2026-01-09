function fetchData() {
return new Promise((resolve) => {
setTimeout(() => resolve("Data fetched"), 2000);
});
}
async function getData() {
let data = await fetchData();
console.log(data);
}
getData();
console.log("End of script");