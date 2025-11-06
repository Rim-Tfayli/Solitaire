function getTopPlayers(){
    axios.get('http://localhost/SEFactory/Project1/Backend/get.php')
    .then(res => {
        const players = res.data;
       /* const table = document.getElementById("topPlayers");
        const medal = '<i class="fas fa-medal"></i>';*/
        console.log(players);
        players.forEach( (player,i) => {
                while(i<10){
                   /* const row = document.createElement("tr");
                    if(i<3){
                        row.innerHTML = `
                            <td>${medal} ${i+1}</td>
                            <td>${player.name}</td>
                            <td>${player.score}</td>
                        `;
                    }
                    else{
                        row.innerHTML = `
                            <td>${$i+1}</td>
                            <td>${player.name}</td>
                            <td>${player.score}</td>
                        `;
                    }
                    table.appendChild(row);*/
                    console.log(player.name);
                }              
        });
    })
    .catch(error => {
      console.error("Error while getting data:", error);
    });
}
/*function getAllPlayers(){
    axios.get('http://localhost/SEFactory/Project1/Backend/get.php')
    .then(res => {
        const players = res.data;
        const table = document.getElementById("players");
        const medal = '<i class="fas fa-medal"></i>';
        console.log(players);
        players.forEach( (player,i) => {
                    const row = document.createElement("tr");
                    if(i<3){
                        row.innerHTML = `
                            <td>${medal} ${i+1}</td>
                            <td>${player.name}</td>
                            <td>${player.score}</td>
                        `;
                    }
                    else{
                        row.innerHTML = `
                            <td>${$i+1}</td>
                            <td>${player.name}</td>
                            <td>${player.score}</td>
                        `;
                    }
                    table.appendChild(row);                 
        });
    })
    .catch(error => {
      console.error("Error while getting data:", error);
    });
}
function addNew(){
    const name = document.getElementById("name").value;
    if(name.trim() == ""){
        alert("name is required");
        return;
    }
    axios.post('http://localhost/SEFactory/Project1/Backend/add.php', {
        name:name }
    )
         .then(res=>{
            alert(res.data);
         })
         .catch(error=>{
            alert("Failed to add Player");
         });
}
*/
window.onload = getTopPlayers();/*
let button = document.getElementById("submit");
button.addEventListener("click", addNew);
let all = document.getElementById("scores")
all.addEventListener("click", getAllPlayers);*/
