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
      const studentInfo = document.createTextNode(`${[user]} : `);
      const stuWeight = document.createTextNode(`${studentObj[user]}`);
      const studentFirstDiv = document.createElement("div");
      const studentNameDiv = document.createElement("div");
      const weightSpan = document.createElement("span");
      const studentParagraph = document.createElement("p");
      weightSpan.setAttribute("id", `${[user]}Weight`);
      studentFirstDiv.setAttribute("id", `${[user]}`);
      studentNameDiv.setAttribute("class", "student_name");

      studentFirstDiv.appendChild(studentNameDiv);
      studentNameDiv.appendChild(studentParagraph);
      studentParagraph.appendChild(studentInfo);
      weightSpan.appendChild(stuWeight);
      studentParagraph.appendChild(weightSpan);

      const weightButtonDiv = document.createElement("div");
      weightButtonDiv.setAttribute("class", "weight_buttons");
      const addWeightButton = document.createElement("button");
      const removeWeightButton = document.createElement("button");
      addWeightButton.innerText = "+";
      removeWeightButton.innerText = "-";

      addWeightButton.addEventListener("click", () => {
        changeWeight(true, [user]);
      });
      removeWeightButton.addEventListener("click", () => {
        changeWeight(false, [user]);
      });

      weightButtonDiv.appendChild(addWeightButton);
      weightButtonDiv.appendChild(removeWeightButton);
      studentFirstDiv.appendChild(weightButtonDiv);

      studentColoumnQuerySelect.appendChild(studentFirstDiv);
    });
  }

  appendStudentData();
}

fetchData("MOCK_DATA.json");

function changeWeight(addWeight, student) {
  if (addWeight === true) {
    studentWeight.push(`${student}`);
    studentObj[student]++;
    changeWeightUserFeedback(student);
  } else {
    if (studentObj[student] !== 0) {
      studentObj[student]--;
      studentWeight.splice(studentWeight.indexOf(student), 1);
      changeWeightUserFeedback(student);
    }
  }

  function changeWeightUserFeedback(studentsName) {
    const weightGrab = document.getElementById(`${student}Weight`);

    const newChild = document.createTextNode(`${studentObj[studentsName]}`);

    weightGrab.removeChild(weightGrab.firstChild);

    weightGrab.appendChild(newChild);
  }
}

function generateStudentButtonClicked() {
  const headerText = document.getElementById("selected_student");
  let workingArr = [...studentWeight];
  let lastStudent = "";
  let selectedStudent = "";

  function flipThroughNames() {
    let randomIndexElement = "";
    headerText.removeChild(headerText.firstChild);

    randomIndexElement += [Math.floor(Math.random() * studentWeight.length)];

    selectedStudent = workingArr[randomIndexElement];

    headerText.appendChild(document.createTextNode(selectedStudent));
  }

  let randomNameFlip = setInterval(() => {
    flipThroughNames();
  }, 100);

  setTimeout(() => {
    clearInterval(randomNameFlip);
  }, 1000);
}

console.log(studentWeight);
console.log(studentObj);
