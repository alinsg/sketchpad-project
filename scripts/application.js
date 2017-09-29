$(function() { //Start of the ready function

//Function that creates the div grid
function createGrid(x) {
	for (let i = 0; i < x; i++) {
		for (let y = 0; y < x; y++) {
			$('.container').append("<div class='unit'></div>");
		}
	}
	$('.unit').width(500/x);
	$('.unit').height(500/x);
};

let defaultSize = 16;

function resetGrid() {
	let gridData = prompt("Please insert a grid size (64+ will increase page load time)");
	$('.container').empty();
	createGrid(gridData);
};

/*function setGrid(){
	createGrid(defaultSize);
};*/

// Button that enables black pen
$('.buttonMenu').on('click', '#blackButton', function() {
	resetGrid();
	//setGrid();
	$('.container').on('mouseenter', '.unit', function() {
		$(this).css({'background-color': 'black'});
	});
});

//Button for random colors
$('.buttonMenu').on('click', '#randomButton', function() {
	resetGrid();
	//setGrid();
	$('.container').on('mouseenter', '.unit', function() {
		let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb("+r+","+g+","+b+")"
    $(this).css("background-color", color);
	});
});

//Eraser button
$('.buttonMenu').on('click', '#eraserButton', function() {
	$('.container').on('click', '.unit', function() {
		$(this).css("background-color", 'white');
	});
});


//Clear drawing button
$('.buttonMenu').on('click', '#clearButton', function() {
	$('.container').empty();
});

}); //End of the .ready function