//log an average rating for each movie title

let movieRatings = [
    { title: "movie A", ratings: [4, 5, 3] },
    { title: "movie B", ratings: [5, 5, 4] },
    { title: "movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movieinfo) => {
    let total = movieinfo.ratings.reduce((acc, curr) => acc + curr)
    let average = total / (movieinfo.ratings.length)
    // movieinfo.ratings = average
    // return movieinfo
    return { title: movieinfo.title, ratings: average.toFixed(2) }
});

console.log(movieRatings); //original array
console.log(averageRatings); //modified mapped array