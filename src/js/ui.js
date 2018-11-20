let theProgressBars = [34, 100, 67];
let theExBools = [
	[true, true, true],
	[true, true, true],
	[true, true, true],
];
const setLocalStorage = () => {
	localStorage.notEmpty = true;
	localStorage.progressBars = JSON.stringify(theProgressBars);
	localStorage.exBoolsEasy = JSON.stringify(theExBools[0]);
	localStorage.exBoolsMedium = JSON.stringify(theExBools[1]);
	localStorage.exBoolsHard = JSON.stringify(theExBools[2]);
	return console.log('📤 | localStorage set !');
};
const getProgressBars = () => {
	theProgressBars = JSON.parse(localStorage.progressBars);
	console.log(theExBools);
	return console.log('📥 | progressBars get !');
};
const updateProgressBars = () => {
	const strings = ['Easy', 'Medium', 'Hard'];
	getProgressBars();
	for (let i = 0; i < theProgressBars.length; i++) {
		// set the progress bar
		document.querySelectorAll('.progressBars__progressBarBox__parent__child')[i].style.width = `${theProgressBars[i]}%`;
		// set the span %
		document.querySelectorAll('.progressBars__progressBarBox__span')[i].innerHTML = `${strings[i]}: ${theProgressBars[i]}%`;
	}
};
const updatePgBar = (name, index, DOMprogressBar, DOMspan, DOMexs) => {
	// II - loop all the buttons of a difficulty

	// for all the bool button of the ex
	for (let i = 0; i < 3; i++) {
		// for every verification button I click
		DOMexs[i].addEventListener('click', () => {
			// getLocalStorage();
			// if the current bool is true
			console.log('after');
			console.log(theExBools[index]);
			if (theExBools[index][i]) {
				console.log('✅ | True !');
				// update the progress bar percent
				const newProgressBar = theProgressBars[index] + 33;
				// update the progress bar with new progress bar %
				DOMprogressBar.style.width = `${newProgressBar}%`;
				// set the span % with new progress bar %
				DOMspan.innerHTML = `${name}: ${newProgressBar}%`;

				// III - update the current changes

				// in local first
				theProgressBars[index] = newProgressBar;
				theExBools[index][i] = true;
				console.log(theExBools[index][i]);
				// in the localStorage second
				setLocalStorage();
			}
			else {
				console.log('❌ | False !');
				theExBools[index][i] = false;
				console.log(theExBools[index][i]);
				// in the localStorage second
				setLocalStorage();
			}
		});
	}
};
if (typeof (Storage) !== 'undefined') {
	if (!localStorage.notEmpty) {
		console.log('init');
		setLocalStorage();
	}

	const Easy = {
		'name': 'easy',
		'index': 0,
		'DOMprogressBar': document.querySelector('#easyPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#easyPgBar span'),
		'DOMexs': document.querySelectorAll('#Easy .verification__button'),
	};
	const Medium = {
		'name': 'medium',
		'index': 1,
		'DOMprogressBar': document.querySelector('#mediumPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#mediumPgBar span'),
		'DOMexs': document.querySelectorAll('#Medium .verification__button'),
	};
	const Hard = {
		'name': 'hard',
		'index': 2,
		'DOMprogressBar': document.querySelector('#hardPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#hardPgBar span'),
		'DOMexs': document.querySelectorAll('#Hard .verification__button'),
	};
	updateProgressBars();
	if (document.querySelector('#Easy')) {
		updatePgBar(...Object.values(Easy));
	}
	if (document.querySelector('#Medium')) {
		updatePgBar(...Object.values(Medium));
	}
	if (document.querySelector('#Hard')) {
		updatePgBar(...Object.values(Hard));
	}
}
else {
	console.warn('⚠️ | Sorry! No Web Storage support..');
}