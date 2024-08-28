const name="Anand "
const highScore=206

// console.log(name+ highScore+" in 2016");//way to continate the value but outdated

// console.log(`Hello My Name is ${name} and my highest score is ${highScore} `);


const gameName=new String('Anand-Kumar-Jha')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf('a','n'));
// console.log(gameName.toLowerCase());

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-12,8)
console.log(anotherString);


const url="http://anand.com/anand%20jha"
console.log(url.replace('%20','-'));
console.log(url.includes('jha'));


console.log(gameName.split('a'));
