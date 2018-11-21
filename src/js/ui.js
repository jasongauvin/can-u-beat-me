let theProgressBars = [1, 1, 1];
let theExBools = [
	[true, true, false],
	[false, true, true],
	[true, true, true],
];
let theAlreadyChecked = [
	[false, false, false],
	[false, false, false],
	[false, false, false],
];
const setLocalStorage = () => {
	localStorage.notEmpty = true;
	localStorage.progressBars = JSON.stringify(theProgressBars);
	localStorage.exBoolsEasy = JSON.stringify(theExBools[0]);
	localStorage.exBoolsMedium = JSON.stringify(theExBools[1]);
	localStorage.exBoolsHard = JSON.stringify(theExBools[2]);
	localStorage.alreadyCheckedEasy = JSON.stringify(theAlreadyChecked[0]);
	localStorage.alreadyCheckedMedium = JSON.stringify(theAlreadyChecked[1]);
	localStorage.alreadyCheckedHard = JSON.stringify(theAlreadyChecked[2]);
	return console.log('📤 | localStorage set !');
};
const getProgressBars = () => {
	theProgressBars = JSON.parse(localStorage.progressBars);
	console.log(theExBools);
	return console.log('📥 | progressBars get !');
};
const getAlreadyChecked = () => {
	theAlreadyChecked[0] = JSON.parse(localStorage.alreadyCheckedEasy);
	theAlreadyChecked[1] = JSON.parse(localStorage.alreadyCheckedMedium);
	theAlreadyChecked[2] = JSON.parse(localStorage.alreadyCheckedHard);
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

const updateVerificationSuccess = (i, DOMverifMessage, DOMverifButton) => {
	DOMverifMessage[i].innerHTML = 'Congrats ! You finished this exercice !';
	DOMverifMessage[i].style.color = 'green';
	DOMverifButton[i].innerHTML = 'SUCCESS !';
	DOMverifButton[i].style.background = 'green';
	DOMverifButton[i].style.opacity = '0.2';
	DOMverifButton[i].style.cursor = 'not-allowed';
	DOMverifButton[i].style.pointerEvents = 'none';
};
const updateVerificationFail = (i, DOMverifMessage, DOMverifButton) => {
	DOMverifMessage[i].innerHTML = 'Hmm hm ! Something happened wrong...';
	DOMverifMessage[i].style.color = 'red';
	DOMverifButton[i].style.background = 'red';
	DOMverifButton[i].innerHTML = 'FAILED !';
};
const updateVerification = (index, DOMverifMessage, DOMverifButton) => {
	getAlreadyChecked();
	for (let i = 0; i < 3; i++) {
		if (theAlreadyChecked[index][i]) {
			console.log(theAlreadyChecked[index][i]);
			if (theExBools[index][i]) {
				console.log(theExBools[index][i]);
				updateVerificationSuccess(i, DOMverifMessage, DOMverifButton);
			}
			else {
				updateVerificationFail(i, DOMverifMessage, DOMverifButton);
			}
		}
	}
};
const updatePgBar = (name, index, DOMprogressBar, DOMspan, DOMverifButton, DOMverifMessage) => {
	// II - loop all the buttons of a difficulty

	// for all the bool button of the ex
	for (let i = 0; i < 3; i++) {
		// for every verification button I click
		DOMverifButton[i].addEventListener('click', () => {
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

				updateVerificationSuccess(i, DOMverifMessage, DOMverifButton);

				// III - update the current changes
				// in local first
				theProgressBars[index] = newProgressBar;
				theExBools[index][i] = true;
				theAlreadyChecked[index][i] = true;
				// in the localStorage second
				setLocalStorage();
			}
			else {
				console.log('❌ | False !');

				updateVerificationFail(i, DOMverifMessage, DOMverifButton);

				theExBools[index][i] = false;
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
		'DOMverifButton': document.querySelectorAll('#Easy .verification__button'),
		'DOMverifMessage': document.querySelectorAll('#Easy .verification__checking'),
	};
	const Medium = {
		'name': 'medium',
		'index': 1,
		'DOMprogressBar': document.querySelector('#mediumPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#mediumPgBar span'),
		'DOMverifButton': document.querySelectorAll('#Medium .verification__button'),
		'DOMverifMessage': document.querySelectorAll('#Medium .verification__checking'),
	};
	const Hard = {
		'name': 'hard',
		'index': 2,
		'DOMprogressBar': document.querySelector('#hardPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#hardPgBar span'),
		'DOMverifButton': document.querySelectorAll('#Hard .verification__button'),
		'DOMverifMessage': document.querySelectorAll('#Hard .verification__checking'),
	};
	updateProgressBars();
	if (document.querySelector('#Easy')) {
		updateVerification(0, Easy.DOMverifMessage, Easy.DOMverifButton);
		updatePgBar(...Object.values(Easy));
	}
	if (document.querySelector('#Medium')) {
		updateVerification(1, Medium.DOMverifMessage, Medium.DOMverifButton);
		updatePgBar(...Object.values(Medium));
	}
	if (document.querySelector('#Hard')) {
		updateVerification(2, Hard.DOMverifMessage, Hard.DOMverifButton);
		updatePgBar(...Object.values(Hard));
	}
}
else {
	console.warn('⚠️ | Sorry! No Web Storage support..');
}