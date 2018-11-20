if (typeof (Storage) !== 'undefined') {
	let theProgressBars = [0, 100, 67];
	let theExBools = [
		[true, true, true],
		[false, true, false],
		[true, false, false],
	];
	const setLocalStorage = () => {
		localStorage.notEmpty = true;
		localStorage.progressBars = JSON.stringify(theProgressBars);
		localStorage.exBoolsEasy = JSON.stringify(theExBools[0]);
		localStorage.exBoolsMedium = JSON.stringify(theExBools[1]);
		localStorage.exBoolsHard = JSON.stringify(theExBools[2]);
		return console.log('📤 | localStorage set !');
	};
	const getLocalStorage = () => {
		theProgressBars = JSON.parse(localStorage.progressBars);
		theExBools[0] = JSON.parse(localStorage.exBoolsEasy);
		theExBools[1] = JSON.parse(localStorage.exBoolsMedium);
		theExBools[2] = JSON.parse(localStorage.exBoolsHard);
		return console.log('📥 | localStorage get !');
	};

	const updatePgBar = (name, index, DOMprogressBar, DOMspan, DOMexs) => {
		// I - get localStorage and set all settings

		// get localStorage
		getLocalStorage();
		// set the progress bar
		DOMprogressBar.style.width = `${theProgressBars[index]}%`;
		// set the span %
		DOMspan.innerHTML = `${name}: ${theProgressBars[index]}%`;

		// II - loop all the buttons of a difficulty

		// for all the bool button of the ex
		for (let i = 0; i < 3; i++) {
			// for every verification button I click
			DOMexs[i].addEventListener('click', () => {
				// if the current bool is true
				console.log(theExBools[index][i]);
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
					// in the localStorage second
					setLocalStorage();
				}
				else {
					console.log('❌ | False !');
					theExBools[index][isFinite] = false;
					// in the localStorage second
					setLocalStorage();
				}
			});
		}
	};

	if (!localStorage.notEmpty) {
		setLocalStorage();
	}

	const Easy = {
		'name': 'easy',
		'index': 0,
		'DOMprogressBar': document.querySelector('#easyPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#easyPgBar span'),
		'DOMexs': document.querySelectorAll('#Easy .verification__button'),
	};
	updatePgBar(...Object.values(Easy));
}
else {
	console.warn('⚠️ | Sorry! No Web Storage support..');
}