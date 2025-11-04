function getTopPlayers(){
    axios.get('http://localhost/SEFactory/Project1/Backend/get.php')
    .then(res => {
        const players = res.data;
        const table = document.getElementById("topPlayers");
        const medal = '<i class="fas fa-medal"></i>';
        players.forEach( (player,i) => {
                while(i<10){
                    const row = document.createElement("tr");
                    if(i<3){
                        row.innerHTML = `
                            <td>${medal} ${i+1}</td>
                            <td>${player.Name}</td>
                            <td>${player.score}</td>
                        `;
                    }
                    else{
                        row.innerHTML = `
                            <td>${$i+1}</td>
                            <td>${player.Name}</td>
                            <td>${player.score}</td>
                        `;
                    }
                    table.appendChild(row);
                }              
        });
    })
    .catch(error => {
      console.error("Error while getting data:", error);
    });
}

//window.onload = getTopPlayers;
