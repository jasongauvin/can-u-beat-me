if (typeof (Storage) !== 'undefined') {
	let theProgressBars = [34, 100, 67];
	let theExBoolsEasy = [true, false, true];
	let theExBoolsMedium = [false, true, false];
	let theExBoolsHard = [true, false, false];

	const setLocalStorage = () => {
		localStorage.notEmpty = true;
		localStorage.progressBars = JSON.stringify(theProgressBars);
		localStorage.exBoolsEasy = JSON.stringify(theExBoolsEasy);
		localStorage.exBoolsMedium = JSON.stringify(theExBoolsMedium);
		localStorage.exBoolsHard = JSON.stringify(theExBoolsHard);
		return console.log('📤 | localStorage set !');
	};
	const getLocalStorage = () => {
		theProgressBars = JSON.parse(localStorage.progressBars);
		theExBoolsEasy = JSON.parse(localStorage.exBoolsEasy);
		theExBoolsMedium = JSON.parse(localStorage.exBoolsMedium);
		theExBoolsHard = JSON.parse(localStorage.exBoolsHard);
		return console.log('📥 | localStorage get !');
	};

	const updatePgBar = (name, myExBools, myProgressBar, DOMprogressBar, DOMspan, DOMexs) => {
		// I - get localStorage and set all settings

		getLocalStorage();
		console.log(localStorage);
		console.log(theProgressBars);
		console.log(theExBoolsEasy);
		console.log(theExBoolsMedium);
		console.log(theExBoolsHard);
		// set the progress bar
		console.log(myProgressBar);
		DOMprogressBar.style.width = `${theProgressBars[0]}%`;
		// set the span %
		DOMspan.innerHTML = `${name}: ${theProgressBars[0]}%`;

		// II - loop all the buttons of a difficulty

		// for all the bool button of the ex
		for (let i = 0; i < myExBools.length; i++) {
			// for every verification button I click
			DOMexs[i].addEventListener('click', () => {
				// if the current bool is true
				if (myExBools[i]) {
					console.log('Congrats !');
					console.log(theProgressBars[0]);
					// update the progress bar percent
					const newProgressBar = theProgressBars[0] + 33;
					// update the progress bar with new progress bar %
					DOMprogressBar.style.width = `${newProgressBar}%`;
					// set the span % with new progress bar %
					DOMspan.innerHTML = `${name}: ${newProgressBar}%`;

					theProgressBars[0] = newProgressBar;
					console.log(theProgressBars);
					setLocalStorage();
					console.log(localStorage);
				}
			});
		}
	};

	if (!localStorage.notEmpty) {
		setLocalStorage();
	}

	const Easy = {
		'name': 'easy',
		'myExBools': theExBoolsEasy,
		'myProgressBar': theProgressBars[0],
		'DOMprogressBar': document.querySelector('#easyPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#easyPgBar span'),
		'DOMexs': document.querySelectorAll('#Easy .verification__button'),
	};
	updatePgBar(...Object.values(Easy));
}
else {
	console.warn('Sorry! No Web Storage support..');
}