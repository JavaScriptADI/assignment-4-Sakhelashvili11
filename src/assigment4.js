//1.  .push()
//2.  .shift()
//3.  .splice removes or adds from original array
//.   .slice  doesnot change original array but copy the original one
//4.  consol.log(nums.length)
//5.  console.log(nums.include())
//6.   .sort(2, 30, 50, 7) will give use the numbers based on their first number from low to high order        
  //7. let num = [1,2,3,4];
   //let copy = num.slice(); 
 
   //8.let arr = [1, 2, 3];
   //arr.reverse(); 
   //console.log(arr);   

//9.let comb1 = [3,4];
//let comb2 = [7,7];
//let combination = comb1.concat(comb2);
//console.log(combination);

//10.array[rowIndex][columnIndex];


//1.
const nums =[1,2,3,4,5,6,7,8,9,10];
console.log(nums);

let thirdElement = nums[2];
console.log(thirdElement);

nums[4] = 15;
console.log(nums);

nums.push(5);
console.log(nums);

nums.shift(0)
console.log(nums);


//2

let fruits =["kiwi","apple","banana"];
console.log(fruits);

fruits.push = ("orange");
 console.log(fruits);
 
 let lastNum =  fruits.pop();
 console.log(fruits);
 console.log(lastNum);

 fruits.unshift("strawberry");
 console.log(fruits);

 let firstItem =  fruits.shift(0);
 console.log(fruits);

 //3.
 let coLors = ["black","white","red","blue","pink"];
for (let i = 0; i< coLors.length; i++){
  console.log(coLors[i]);
}

//4.
let numbers = [5,6,3,8,9,1];


numbers.splice(1,2);
numbers.splice(1,0,4,7)
console.log(numbers);

let number = [1, 2, 3, 4, 5, 6];
let lastThree = number.slice(-3); 
console.log(lastThree); 

//5.
let names = ["sopho","saba","ana","mari","nika"];
console.log(names);

names.sort();
console.log(names);

names.sort().reverse();
console.log(names);

//6.

let count = [5,6,2,4,8,9,];
console.log(count);

let position = count.indexOf(4);
console.log(position);

let check = count.includes(10);
console.log(check);

let findIndex = number.findIndex(count => count > 10);
console.log(findIndex);

let loop = -1;
for(let i =0;i <count.length;i++){
  if(number[i]>3){
    loop=i;
    break;
  }
}
console.log(loop);
  
//7.
let grid = [ 
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let element = grid[1][2]; 
console.log(" Element:", element); 

grid[2][0] = 76;
console.log();
console.log(grid); 

//8.
let eleMents = ["apple", "orange", "banana", "peach"];
let[fruit1,fruit2] = eleMents;
console.log(fruit1);
console.log(fruit2);

[eleMents[0],eleMents[3]]=[eleMents[3],eleMents[0]];
console.log(eleMents);

//9. 
 let combine1 = [1,2,3,4];
 let combine2 = [5,6,7,8];
 console.log(combine1.concat(combine2));
 console.log([...combine1,...combine2]);

 //10.
   let one = [1,2,3,9,4,5];
   console.log(one);

   let reverse1 = [...one].reverse();
   console.log(reverse1);
   let sort1 = [...one].sort((a,b)=>b-a);
   console.log(sort1);
   