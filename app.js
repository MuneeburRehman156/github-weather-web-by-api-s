// var getInp=document.getElementById('inp')
// function searchUser(){
//     fetch(`https://api.github.com/users/${getInp.value}`)
// .then(function(data){
//     return data.json()
// })
// .then(function(data){
// getInp.value=''
//     var getDiv = document.getElementById('show')
//     getDiv.innerHTML+=`<div class="card d-flex m-3" style="width: 18rem;">
//     <img src=${data.avatar_url} class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${data.name}</h5>
//       <p class="card-text">${data.bio}? ${data.bio} : bio is not available..</p>
//       <a target="_blank" href=${data.html_url} class="btn btn-primary">Go on Profile</a>
//     </div>
//   </div>`
 
// })
// .catch(function(err){
//     alert(err)
// })
// }


// chatGPt


document.addEventListener('DOMContentLoaded', function() {
    var getInp = document.getElementById('inp');

    function searchUser() {
        fetch(`https://api.github.com/users/${getInp.value}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                getInp.value = ''; // Clear input field after successful search
                var getDiv = document.getElementById('show');
                getDiv.innerHTML += `<div class="card d-flex m-3" style="width: 18rem;">
                    <img src="${data.avatar_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">${data.bio ? data.bio : 'Bio is not available..'}</p>
                        <a target="_blank" href="${data.html_url}" class="btn btn-primary">Go on Profile</a>
                    </div>
                </div>`;
            })
            .catch(function (err) {
                alert(err);
            });
    }

    // Call the searchUser function when the button is clicked
    document.getElementById('searchBtn').addEventListener('click', searchUser);
});



// weather function


function weather() {
    var getinp = document.getElementById('inp');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getinp.value}&units=metric&appid=09d5365f939006743ecff79400b1cf48`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var getdiv = document.getElementById('show-weather');
            getdiv.innerHTML = `<div class="row d-flex justify-content-center py-5">
           <div class="col-md-8 col-lg-6 col-xl-5">
             <div class="card text-body" style=" border-radius: 35px;">
               <div class="card-body p-4">
                 <div class="d-flex">
                   <h6 class="flex-grow-1 name-card">${data.name}</h6>
                   <h6 class="time">${data.timezone}</h6>
                 </div>
                 <div class="d-flex flex-column text-center mt-5 mb-4">
                   <h6 class="display-4 mb-0 font-weight-bold"> ${data.main.temp}°C </h6>
                   <span class="small weather" style="color: #868B94">${data.weather[0].main}</span>
                 </div>
                 <div class="d-flex align-items-center">
                   <div class="flex-grow-1" style="font-size: 1rem;">
                     <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.wind.speed} km/h </span>
                     </div>
                     <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.main.humidity}% </span></div>
                     <div><i class="fas fa-flag fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.sys.country} </span></div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>`;

           
            getinp.value = '';

           
        })
        .catch(function (error) {
          alert(error);
        });
}



