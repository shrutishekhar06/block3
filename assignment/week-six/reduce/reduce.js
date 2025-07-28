function processCategories(categories) {

  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});


  const sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])    
    .map(entry => entry[0]);        


  return {
    categoryCount,
    sortedCategories
  };
}


const categories = [
  "electronics", "clothing", "electronics",
  "toys", "clothing", "toys", "toys"
];

const result = processCategories(categories);
console.log("Count:", result.categoryCount);           
console.log("Sorted:", result.sortedCategories);     
