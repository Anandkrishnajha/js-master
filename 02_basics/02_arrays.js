const marvel_heros=["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);          //-----[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);    //-----flash//---index inside index

const allHeros=marvel_heros.concat(dc_heros)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeros);          //-----[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const world_heros=[...marvel_heros,...dc_heros]//other way to combine array
// console.log(world_heros);           //-----[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]           //consist of multiple array in one
// console.log(another_array);             //-----[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
const extract_another_array=another_array.flat(Infinity)        //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// // console.log(extract_another_array);            /*----[
//                                                             1, 2, 3, 4, 5,
//                                                             6, 7, 6, 7, 4,
//                                                             5
//                                                         ] */


                                 
console.log(Array.isArray("anand"));            //-----false as it is not an array
console.log(Array.from("anand"));               //-----[ 'a', 'n', 'a', 'n', 'd' ]--Creates an array from an iterable object.
console.log(Array.from({name:"anand"}));        //-----[]--empty array unless key is provided


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));            //-----Returns a new array from a set of elements.



