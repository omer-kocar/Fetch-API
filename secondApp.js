document.getElementById("btn").addEventListener("click", getData());

// ALL DATA VALUES RECİEVED

function getData() {
  fetch("https://randomuser.me/api/?results=100")
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;
      // console.log(author)
      
      let secondAuthor = author.sort(function (a, b) { // Sorting before looping 
          // console.log(a.dob.age - b.dob.age)
          return (a.dob.age - b.dob.age)
      })
      // Get Data Value
      let output="";
      // console.log(output)
      // Get Data Loop
      secondAuthor.forEach((element) => {
       
        output += `
        <div class="container">
          <div class="card mt-4 bg-light">
            <ul class="list-group">
                <li class="list-group-item"> <h2> Name: ${element.name.first} Surname: ${element.name.last} </h2>  </li>
                 <li class="list-group-item"> <img src="${element.picture.large}">   </li>
                 <li class="list-group-item"> Phone Number: ${element.cell} </li>
                 <li class="list-group-item"> DOB: ${element.dob.date} </li>
                 <li class="list-group-item"> Age: ${element.dob.age} </li>
                 <li class="list-group-item"> Email: ${element.email} </li>
                 <li class="list-group-item"> Gender: ${element.gender} </li>
                 <li class="list-group-item"> City: ${element.location.city} </li>
                <li class="list-group-item"> Country: ${element.location.country} </li>
                <li class="list-group-item">  Post Code: ${element.location.postcode} </li>
            </ul>
          </div>
        </div>`;
      });
      document.querySelector("#btn").innerHTML = output;
    });
}
