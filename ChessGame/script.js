document.addEventListener('DOMContentLoaded',()=>{
    let board = null; // Initialize the chessboard
    const game = new Chess(); // Create new Chess.js game instance
    const moveHistory = document.getElementById('move-history'); // Get move history container
    let moveCount = 1; // Initialize the move count 
    let userColor = 'w'; // Initalize the user's color as white
    
    // Function to make a random move for the computer
    const makeRandomMove = () =>{
        const possibleMoves = game.moves();
        if(game.game_over()){
            alert("Checkout!");
        }else{
            const randomIdx = Math.floor(Math.random() * possibleMoves.length);
            const move = possibleMoves[randomIdx];
            
        }
    }

})