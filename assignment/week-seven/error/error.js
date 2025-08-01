
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; 
      if (isSuccess) {
        resolve("Fetched data successfully!");
      } else {
        reject("Network error or data not found.");
      }
    }, 1000);
  });
}


async function fetchDataHandler() {
  try {
    const result = await fetchData(); 
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}


fetchDataHandler();
