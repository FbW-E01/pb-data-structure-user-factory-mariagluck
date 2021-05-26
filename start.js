// # User Factory!

// Look inside start.js - you will find a large array of data. This data describes users. Your job, should you choose to accept it, is to create a function (or functions) that covert this kind of data to user objects!

// Each user should contain the following properties; `id`, `fullName`, `initials`, `birthYear` and `departments`. The `deparments` property should contain an array of strings. If some of the information is not available, its corresponding property should have the value "Unknown".

// We need each user object to be stored in an array of users objects. Once you have ran your function (or functions), log the resulting array into your workstation terminal where a highly trained monkey will examine it for further processing. Perhaps even the very same monkey writing out these instructions.


const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];


const factoryUser = string => {
  const userData = string.split(',');
  let initialsResult = userData[1].match(/\b(\w)/g).join('.');
  for (let i = 0; i < userData.length; i++) {
        if (!userData[i]) {
          userData[i] = "unknown";
        } 
        if (i === userData.length -1) {
          const departments = userData[userData.length - 1].split('|');
          userData[userData.length - 1] = departments;
      } 
      
     }
     return {
       id: userData[0],
       fullname: userData[1],
       initials: initialsResult,
       birthYear: userData[2],
       departments: userData[3],
   };
  
  };
  const usersFactory = array => {
      const users = [];
      for (let i = 0; i < array.length; i++) {
          users.push(factoryUser(array[i]));
      }
      return users;
  };
  console.log(usersFactory(userDataDump));
  

  
  // *bonus* We also need another, more different, function that gives us a list of all the departments found in the data dump, in alphabetical order.

//this one way:
const newDataDump = usersFactory(userDataDump); //helper

//list of departments
let listDep = newDataDump.map(value => value.departments);

//first merge all departments into 1 array
let fullList = listDep.reduce(function (a, b) { return a.concat(b); });

//second delete duplicates in the array
const shortList = fullList.filter((item, index) => fullList.indexOf(item) === index);

//finally sort them alphabetically
const departmentsSorted = shortList.sort();
console.log(departmentsSorted);
//prints : [ 'Admin', 'Sudo', 'System', 'Users' ]



//this is another way  
 const listDepartments = (input) => {
     let userDataArray = [];
     const allDepartments = [];
     for (let i = 0; i < input.length; i++) {
       userDataArray[i] = input[i].split(',');
       allDepartments.push(userDataArray[i][3].split('|'));
     }
     
     const departments = [];
     for (let i = 0; i < allDepartments.length; i++) {
       for (let j = 0; j < allDepartments[i].length; j++) {
         if (!departments.includes(allDepartments[i][j])) {
           departments.push(allDepartments[i][j]);
         }
       }  
     }
   
     return departments.sort();
 };
    
        
console.log(listDepartments(userDataDump));
//prints: [ 'Admin', 'Sudo', 'System', 'Users' ]


