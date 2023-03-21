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

const mockData = [
  {
    Cohort: 4,
    email: "dstanway0@sciencedirect.com",
    first_name: "Dahlia",
    last_name: "Stanway",
    role: "standard",
    gender: "Female",
    _v: 1,
    _id: "2668tyHG5RuDIAyf4f6dd1AP",
  },
  {
    Cohort: 4,
    email: "jperkis1@biblegateway.com",
    first_name: "Jeffie",
    last_name: "Perkis",
    role: "standard",
    gender: "Agender",
    _v: 1,
    _id: "8652NqGLerujlWPf4f6ddzCH",
  },
  {
    Cohort: 4,
    email: "yculligan2@tripod.com",
    first_name: "Yoshiko",
    last_name: "Culligan",
    role: "standard",
    gender: "Polygender",
    _v: 0,
    _id: "33745GLVlAmD8THf4f6ddvJy",
  },
  {
    Cohort: 4,
    email: "ldeftie3@engadget.com",
    first_name: "Luz",
    last_name: "Deftie",
    role: "standard",
    gender: "Genderfluid",
    _v: 0,
    _id: "6214We0ptY0KDUmf4f6ddPLs",
  },
  {
    Cohort: 4,
    email: "cmacrinn4@1und1.de",
    first_name: "Celie",
    last_name: "MacRinn",
    role: "standard",
    gender: "Female",
    _v: 0,
    _id: "83627ruFxwU5jFzf4f6ddmYT",
  },
  {
    Cohort: 4,
    email: "sapps5@accuweather.com",
    first_name: "Sammy",
    last_name: "Apps",
    role: "standard",
    gender: "Male",
    _v: 0,
    _id: "4708eV2Jx4fMYfXf4f6ddGj8",
  },
  {
    Cohort: 4,
    email: "rkerbler6@hp.com",
    first_name: "Roana",
    last_name: "Kerbler",
    role: "standard",
    gender: "Female",
    _v: 0,
    _id: "6032nefMAHqjEgCf4f6ddzoQ",
  },
  {
    Cohort: 4,
    email: "vgriffoen7@cafepress.com",
    first_name: "Vivienne",
    last_name: "Griffoen",
    role: "standard",
    gender: "Female",
    _v: 1,
    _id: "63332sA6jessyMVf4f6dd0Xq",
  },
  {
    Cohort: 4,
    email: "gbruckent8@spotify.com",
    first_name: "Garwood",
    last_name: "Bruckent",
    role: "standard",
    gender: "Male",
    _v: 1,
    _id: "8360V2IwvdNvGYNf4f6ddQQg",
  },
  {
    Cohort: 4,
    email: "msiviour9@diigo.com",
    first_name: "Mikol",
    last_name: "Siviour",
    role: "standard",
    gender: "Male",
    _v: 0,
    _id: "83750OCmKU4MknCf4f6ddgvL",
  },
  {
    Cohort: 4,
    email: "efolkera@eventbrite.com",
    first_name: "Ed",
    last_name: "Folker",
    role: "standard",
    gender: "Polygender",
    _v: 0,
    _id: "0238y6Kox1qhOpsf4f6ddGFH",
  },
];

const sortData = (array) => {};

// fetch("https://devpipeline-mock-api.onrender.com")
//   .then((results) => results.json())
//   .then((jsonData) => jsonData.result)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
