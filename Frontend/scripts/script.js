const BASE_URL = "http://localhost/SEFactory/Project1/Backend/";
const medal = '<i class="fas fa-medal"></i>';

getPlayers();

async function getPlayers() {
    const url = BASE_URL + "get.php";
    try {
        const res = await axios.get(url);
        const players =res.data
        console.log(players);
        return players; 
    } 
    catch{
        console.error("Error while getting data:");
    }
}


async function getTopPlayers(){   
    const players = await getPlayers(); 
    const table = document.getElementById("topPlayers"); 
    players.forEach( (player,i) => {
            if(i<10){
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
                        <td>${i+1}</td>
                        <td>${player.name}</td>
                        <td>${player.score}</td>
                    `;
                }
                table.appendChild(row);
            }              
    });
} 
 
async function getAllPlayers(){
    const players = await getPlayers(); 
    const table = document.getElementById("allPlayers"); 
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
                            <td>${i+1}</td>
                            <td>${player.name}</td>
                            <td>${player.score}</td>
                        `;
                    }
                    table.appendChild(row);                 
        });
}

function addNew(){
    const url = BASE_URL + "add.php";
    const name = document.getElementById("name").value;
    if(name.trim() == ""){
        alert("name is required");
        return;
    }
    axios.post(url, {
        name:name }
    )
         .then(res=>{
            alert(res.data);
         })
         .catch(error=>{
            alert("Failed to add Player");
         });
}
const button = document.getElementById("submit");
button.addEventListener("click", addNew);
