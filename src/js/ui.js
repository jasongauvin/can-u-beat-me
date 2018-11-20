if (typeof (Storage) !== 'undefined') {
	let myProgressBars = [1, 1, 1];
	let myExBoolsEasy = [true, false, true];
	let myExBoolsMedium = [false, false, false];
	let myExBoolsHard = [false, false, false];

	const setLocalStorage = () => {
		localStorage.notEmpty = true;
		localStorage.progressBars = JSON.stringify(myProgressBars);
		localStorage.exBoolsEasy = JSON.stringify(myExBoolsEasy);
		localStorage.exBoolsMedium = JSON.stringify(myExBoolsMedium);
		localStorage.exBoolsHard = JSON.stringify(myExBoolsHard);
		return console.log('📤 | localStorage set !');
	};
	const getLocalStorage = () => {
		myProgressBars = JSON.parse(localStorage.progressBars);
		myExBoolsEasy = JSON.parse(localStorage.exBoolsEasy);
		myExBoolsMedium = JSON.parse(localStorage.exBoolsMedium);
		myExBoolsHard = JSON.parse(localStorage.exBoolsHard);
		return console.log('📥 | localStorage get !');
	};

	const updatePgBar = (name, myExBools, myProgressBar, DOMprogressBar, DOMspan, DOMexs) => {
		// for all the bool button of the ex
		for (let i = 0; i < myExBools.length; i++) {
			// for every verification button I click
			DOMexs[i].addEventListener('click', () => {
				getLocalStorage();
				console.log(localStorage);
				// set the progress bar with localStorage width
				DOMprogressBar.style.width = `${myProgressBar}%`;
				// set the span % with localStorage width
				DOMspan.innerHTML = `${name}: ${myProgressBar}%`;
				// if the current bool is true
				console.log('BEFORE');
				console.log(myExBools[i]);
				console.log(myProgressBar);
				// if the bool is true
				if (myExBools[i]) {
					console.log('Congrats !');
					// update the progress bar percent
					const newProgressBar = parseInt(myProgressBar) + 33;
					// update the progress bar with new progress bar %
					DOMprogressBar.style.width = `${newProgressBar}%`;
					// set the span % with new progress bar %
					DOMspan.innerHTML = `${name}: ${newProgressBar}%`;
					// update the localStorage % with new progress bar %
					myProgressBar = newProgressBar;
					// update the localStorage bool at true
					myExBools[i] = true;
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
		'myExBools': myExBoolsEasy,
		'myProgressBar': myProgressBars[0],
		'DOMprogressBar': document.querySelector('#easyPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#easyPgBar span'),
		'DOMexs': document.querySelectorAll('#Easy .verification__button'),
	};
	updatePgBar(...Object.values(Easy));
}
else {
	console.warn('⚠️ | Sorry! No Web Storage support..');
}