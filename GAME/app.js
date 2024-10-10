let player1 = Math.random() < 0.5;
let player2 = !player1;

let pos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 4, 8], [2, 4, 6], [0, 3, 6], 
    [1, 4, 7], [2, 5, 8]
];

let arr = ['', '', '', '', '', '', '', '', ''];
function changeColor(id) 
{
    if (arr[id] == '') 
    {
        if (player1) 
        {
            document.getElementById(id).innerHTML = "O";
            document.getElementById(id).style.fontSize = "130px";
            document.getElementById(id).style.textAlign = "center";
            player1 = false;
            player2 = true;
            arr[id] = 'O';
        }
        else 
        {
            document.getElementById(id).innerHTML = "X";
            document.getElementById(id).style.fontSize = "130px";
            document.getElementById(id).style.textAlign = "center";
            player1 = true;
            player2 = false;
            arr[id] = 'X';
        }
    }

    for (i = 0; i < pos.length; i++) 
    {
        if(arr[pos[i][0]] == 'X' && arr[pos[i][1]] == 'X' && arr[pos[i][2]] == 'X')
        {
            player1 = 'Winner';
            document.getElementById(id).innerHTML = "X";
            Swal.fire({
                title: "Winner!",
                text: "Player 2(X) is Winner!",
                icon: "success"
              });
              return;            
        }
        else if(arr[pos[i][0]] == 'O' && arr[pos[i][1]] == 'O' && arr[pos[i][2]] == 'O')
        {
            player2 = 'Winner';
            document.getElementById(id).innerHTML = "O";
            Swal.fire({
                title: "Winner!",
                text: "Player 1(O) is Winner!",
                icon: "success"
              });
              return; 
        }
        else if(arr[pos[i][3]] == 'X' && arr[pos[i][4]] == 'X' && arr[pos[i][5]] == 'X')
        {
            player1 = 'Winner';
            Swal.fire({
                title: "Winner!",
                text: "Player 2(X) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][3]] == 'O' && arr[pos[i][4]] == 'O' && arr[pos[i][5]] == 'O')
        {
            player2 = 'Winner';
            document.getElementById(id).innerHTML = "O";
            Swal.fire({
                title: "Winner!",
                text: "Player 1(O) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][6]] == 'X' && arr[pos[i][7]] == 'X' && arr[pos[i][8]] == 'X')
        {
            player1 = 'Winner';
            Swal.fire({
                title: "Winner!",
                text: "Player 2(X) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][6]] == 'O' && arr[pos[i][7]] == 'O' && arr[pos[i][8]] == 'O')
        {
            player2 = 'Winner';
            document.getElementById(id).innerHTML = "O";
            Swal.fire({
                title: "Winner!",
                text: "Player 1(O) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][0]] == 'X' && arr[pos[i][3]] == 'X' && arr[pos[i][6]] == 'X')
        {
            player1 = 'Winner';
            Swal.fire({
                title: "Winner!",
                text: "Player 2(X) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][0]] == 'O' && arr[pos[i][3]] == 'O' && arr[pos[i][6]] == 'O')
        {
            player2 = 'Winner';
            document.getElementById(id).innerHTML = "O";
            Swal.fire({
                title: "Winner!",
                text: "Player 1(O) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][1]] == 'X' && arr[pos[i][4]] == 'X' && arr[pos[i][7]] == 'X')
        {
            player1 = 'Winner';
            Swal.fire({
                title: "Winner!",
                text: "Player 2(X) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][1]] == 'O' && arr[pos[i][4]] == 'O' && arr[pos[i][7]] == 'O')
        {
            player2 = 'Winner';
            document.getElementById(id).innerHTML = "O";
            Swal.fire({
                title: "Winner!",
                text: "Player 1(O) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][2]] == 'X' && arr[pos[i][5]] == 'X' && arr[pos[i][8]] == 'X')
        {
            player1 = 'Winner';
            Swal.fire({
                title: "Winner!",
                text: "Player 2(X) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][2]] == 'O' && arr[pos[i][5]] == 'O' && arr[pos[i][8]] == 'O')
        {
            player2 = 'Winner';
            document.getElementById(id).innerHTML = "O";
            Swal.fire({
                title: "Winner!",
                text: "Player 1(O) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][0]] == 'X' && arr[pos[i][4]] == 'X' && arr[pos[i][8]] == 'X')
        {
            player1 = 'Winner';
            Swal.fire({
                title: "Winner!",
                text: "Player 2(X) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][0]] == 'O' && arr[pos[i][4]] == 'O' && arr[pos[i][8]] == 'O')
        {
            player2 = 'Winner';
            document.getElementById(id).innerHTML = "O";
            Swal.fire({
                title: "Winner!",
                text: "Player 1(O) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][2]] == 'X' && arr[pos[i][4]] == 'X' && arr[pos[i][6]] == 'X')
        {
            player1 = 'Winner';
            Swal.fire({
                title: "Winner!",
                text: "Player 2(X) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(arr[pos[i][2]] == 'O' && arr[pos[i][4]] == 'O' && arr[pos[i][6]] == 'O')
        {
            player2 = 'Winner';
            document.getElementById(id).innerHTML = "O";
            Swal.fire({
                title: "Winner!",
                text: "Player 1(O) is Winner!",
                icon: "success"
              });
              return;
        }
        else if(!arr.includes(''))
        {
            Swal.fire({
                title: "DRAW!",
                text: "It is DRAW!   Click to Restart Game",
                icon: "info"
              });
        }
    }
}

function restartGame() 
{
    window.location.reload();
}

window.onload = function() 
{
    Swal.fire({
        title: "New Game Start!",
        text: player1 ? "Player 1 (O) starts!" : "Player 2 (X) starts!",
        icon: "info"
    });
}