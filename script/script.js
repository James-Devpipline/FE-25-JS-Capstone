/* 
DUE: With the other projects, Wednesday
HTML / SCSS / JS Capstone
style >
 - main.scss
 - main.css
 - main.css.map
 - sidebar-container >
   - page-container.scss
   - page-container.css
   - page-container.map.css
Build My Random Student Generator
HTML Interface
API URL: https://devpipeline-mock-api.onrender.com

 - Layout: Sidebar with users that are fetched from the given api.
   - users, (formatted first and abbreviated last initial, weight Defaulted to 1, plus and minus weight buttons, which should labeled appropriately)
 - larger middle section that has:
   - label (initial message, intermediate(while selecting) message, selected user)
   - button to initiate selection process
 - loading animation (ex: spinner, shuffle the names, etc)
   - css animation
 - hover effects
 - disabled button while selecting a user

JS
 - fetch users from given api
 - creating dom elements and appending them to the dom
 - each user should be weighted, meaning that they would be more or less likely to be randomly selected
 - users should only be selected 1 time (unless weighted) per round (getting through entire list)
 - once everyone has been selected, the list should start over
 - after starting another round(meaning everyone has been selected), the first person selected cannot be the last person that was selected (no back to back selections unless weighted)

Use VS Code
Push to github
Clean projects
Clean Code
Try your best to incorporate a large majority of what you've learned


Endpoint: /api/auth/login
Request Payload: { email, password } as a stringifie JSON object
Response body: {
message: "Logged In",
user: {_id: "", first_name: "", last_name: "", cohort.......},
users: [{}, {}, {}]
}

Be on the lookout for further instructions regarding fetching your cohort peers
-- HAVE FUN --
*/

let studentObj = {};
let studentWeight = [];

async function fetchData(location) {
  await fetch(location)
    .then((results) => results.json())
    .then((data) => sortData(data))
    .catch((err) => console.error(err));
}

function sortData(dataParameter) {
  dataParameter.forEach((i) => {
    let studentName = `${i.first_name} ${i.last_name[0].toUpperCase()}.`;

    studentObj[`${studentName}`] = 1;

    studentWeight.push(`${studentName}`);
  });

  function appendStudentData() {
    Object.keys(studentObj).forEach((user) => {
      const studentColoumnQuerySelect =
        document.querySelector(".student-column");
      const studentInfo = document.createTextNode(
        `${[user]} : ${studentObj[user]}`
      );
      const studentFirstDiv = document.createElement("div");
      const studentNameDiv = document.createElement("div");
      const studentParagraph = document.createElement("p");
      studentFirstDiv.setAttribute("id", `${[user]}`);
      studentNameDiv.setAttribute("class", "student_name");

      studentFirstDiv.appendChild(studentNameDiv);
      studentNameDiv.appendChild(studentParagraph);
      studentParagraph.appendChild(studentInfo);

      const weightButtonDiv = document.createElement("div");
      weightButtonDiv.setAttribute("class", "weight_buttons");
      const addWeightButton = document.createElement("button");
      const removeWeightButton = document.createElement("button");
      addWeightButton.innerText = "+";
      removeWeightButton.innerText = "-";
      weightButtonDiv.appendChild(addWeightButton);
      weightButtonDiv.appendChild(removeWeightButton);

      studentColoumnQuerySelect.appendChild(studentFirstDiv);
      studentColoumnQuerySelect.appendChild(weightButtonDiv);
    });
  }

  appendStudentData();

  // return studentObj;
}

fetchData("MOCK_DATA.json");

function changeWeight(addWeight, student) {
  if (addWeight === true) {
    studentWeight.push(`${student}`);
    studentObj[student]++;
  } else {
    if (studentObj[student] !== 0) {
      studentObj[student]--;
      studentWeight.splice(studentWeight.indexOf(student), 1);
    }
  }
}

console.log(studentWeight);
console.log(studentObj);

setTimeout(() => {
  changeWeight(true, "Rosemaria C.");
  console.log(studentWeight);
  console.log(studentObj);
}, 2000);

setTimeout(() => {
  changeWeight(false, "Rosemaria C.");
  console.log(studentWeight);
  console.log(studentObj);
}, 3000);

setTimeout(() => {
  changeWeight(false, "Rosemaria C.");
  console.log(studentWeight);
  console.log(studentObj);
}, 4000);

setTimeout(() => {
  changeWeight(false, "Rosemaria C.");
  console.log(studentWeight);
  console.log(studentObj);
}, 5000);

// console.log(`Here ${Object.keys(studentObj)}`);

// can have weight decided by an array with names of the people, each number for each person represents how many times that person is in that array
