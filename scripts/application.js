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

// Button that creates the grid
$('.buttonMenu').on('click', '#createButton', function() {
	let gridData = prompt("Please insert a grid size (64+ will increase page load time)");
	$('.container').empty();
	createGrid(gridData);
});

// Button that enables black pen
$('.buttonMenu').on('click', '#blackButton', function() {
	$('.container').on('mouseenter mouseleave', '.unit', function() {
		$(this).addClass('blackPen');
		$('.blackPen').hover(
			function() {
			$(this).css({'background-color': 'black'});
		}, function() {
			$(this).css({'background-color': 'black'});
		});
	});
});

// Button that erases the grid cells
$('.buttonMenu').on('click', '#eraserButton', function() {
	$()
});



}); //End of the .ready function