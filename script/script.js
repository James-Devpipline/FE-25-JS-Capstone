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

fetch("MOCK_DATA.json")
  .then((results) => results.json())
  // .then((data) => console.log(data[0].first_name))
  .then((data) => sortData(data))
  .catch((err) => console.error(err));



class studentColumns {
  constructor (studentName, weight = 1) {
    this.studentName = studentName
    this.weight = weight
  }

  addWeight() {
    return this.weight ++
  }

  removeWeight() {
    return this.weight --
  }
}


function sortData(dataParem) {
  dataLength = dataParem.length
  class Student extends studentColumns {
    constructor(studentName = `${dataParem.first_name} ${dataParem.last_name}`)
  }
  dataParem.foreach(() => {
    // const Student.studentName = 
  })
  
}
// const sortData = (array) => {
//   for (student)
// };

// fetch("https://devpipeline-mock-api.onrender.com")
//   .then((results) => results.json())
//   .then((jsonData) => jsonData.result)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
