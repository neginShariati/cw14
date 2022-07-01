// const API_URL = 'https://reqres.in/api/users?page=1';
// const API_URL2 = 'https://reqres.in/api/users?page=2';

// $(document).ready(function () {
//     const cards = $('#cards');
//     $.ajax({
//         url: 'https://reqres.in/api/users?page=1'
//     }).done(
//         function (users) {
//             $.each(users, function (index, user) {
//                 cards.append(`        
//                     <div class="card ">
//                     <div class="card-body">
//                         <h5 class="card-title">${user.first_name}</h5>
//                         <p class="card-text">${user.last_name}</p>
//                         <img class="card-img-top" src="${user.avatar}" alt="Card image cap">
//                     </div>
//                 </div>`)
//             })
//         }
//     )
// })

$(document).ready(function(){
    const cards = $('#cards');
    function getData(){
        $.ajax({
            method: "GET",
            url: "https://reqres.in/api/users?page=1 ",
            success: function (response) {
                
                response.data.forEach(element => {
                    cards.append(
                        `<div class = "card m-3 p-2 col-3" id="card" >
                        <div class= "row d-flex" >
                        <div class= "col-4 d-flex align-items-center">
                        <img class = "card-img col-4 rounded" src= "${element.avatar}" alt= "User">
                        </div>
                        <div class = "card-body col-6">
                        <h5 class= "card-title text-primary">${element.first_name}</h5>
                        <p class = "card-text text-light">${element.last_name}</p>
                        <a  class = text-muted>${element.email}</a>
                        </div>
                        </div>
                        </div>`
                    )
                });
            }
        });
        $.ajax({
            method: "GET",
            url: "https://reqres.in/api/users?page=2 ",
            success: function (response) {
                
                response.data.forEach(element => {
                    cards.append(
                        `<div class = "card m-3 p-2 col-3" id="card" >
                        <div class= "row d-flex" >
                        <div class= "col-4 d-flex align-items-center">
                        <img class = "card-img col-4 rounded" src= "${element.avatar}" alt= "User">
                        </div>
                        <div class = "card-body col-6">
                        <h5 class= "card-title text-primary">${element.first_name}</h5>
                        <p class = "card-text text-light">${element.last_name}</p>
                        <a  class = text-muted>${element.email}</a>
                        </div>
                        </div>
                        </div>`
                    )
                });
            }
        });
    }
    getData();
})