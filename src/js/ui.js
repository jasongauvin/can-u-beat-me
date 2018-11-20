const updatePgBar = (exBools, difficulty, localString, pgBar, DOMpgBar, DOMspan, DOMexs) => {
	// set the progress bar with localStorage width
	DOMpgBar.style.width = `${pgBar}%`;
	// set the span % with localStorage width
	DOMspan.innerHTML = `${difficulty}: ${pgBar}%`;
	// for all the verification button of the page
	for (let i = 0; i < DOMexs.length; i++) {
		// when I click on any verification button
		DOMexs[i].addEventListener('click', () => {
			// for every key of the object
			for (const key in exBools) {
				if (exBools.hasOwnProperty(key)) {
					// if the current is true
					if (exBools[key]) {
						// update the progress bar percent
						const newPgBar = parseInt(pgBar) + 33;
						// update the progress bar with new progress bar %
						DOMpgBar.style.width = `${newPgBar}%`;
						// set the span % with new progress bar %
						DOMspan.innerHTML = `${difficulty}: ${newPgBar}%`;
						// update the localStorage % with new progress bar %
						localStorage[localString] = newPgBar;
						// update the localStorage bool at true
						localStorage['ex1dot1'] = true;
					}
					
				}
			}
			const newPgBar = parseInt(pgBar) + 33;
			DOMpgBar.style.width = `${newPgBar}%`;
			DOMspan.innerHTML = `${difficulty}: ${newPgBar}%`;
			localStorage[localString] = newPgBar;
			return pgBar = newPgBar;
		});
	}
};

if (typeof (Storage) !== 'undefined') {
	if (
		!localStorage.pgBarEasy &&
		!localStorage.pgBarMedium &&
		!localStorage.pgBarHard &&
		!localStorage.ex1dot1 &&
		!localStorage.ex1dot2 &&
		!localStorage.ex1dot3 &&
		!localStorage.ex2dot1 &&
		!localStorage.ex2dot2 &&
		!localStorage.ex2dot3 &&
		!localStorage.ex3dot1 &&
		!localStorage.ex3dot2 &&
		!localStorage.ex3dot3
	) {
		localStorage.pgBarEasy = 1;
		localStorage.pgBarMedium = 1;
		localStorage.pgBarHard = 1;
		localStorage.ex1dot1 = false;
		localStorage.ex1dot2 = false;
		localStorage.ex1dot3 = false;
		localStorage.ex2dot1 = false;
		localStorage.ex2dot2 = false;
		localStorage.ex2dot3 = false;
		localStorage.ex3dot1 = false;
		localStorage.ex3dot2 = false;
		localStorage.ex3dot3 = false;
	}

	const Easy = {
		'name': 'Easy',
		'localString': 'pgBarEasy',
		'pgPercent': localStorage.pgBarEasy,
		'DOMpgBar': document.querySelector('#easyPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#easyPgBar span'),
		'DOMexs': document.querySelectorAll('#Easy .verification__button'),
	};
	const Medium = {
		'name': 'Medium',
		'localString': 'pgBarMedium',
		'pgPercent': localStorage.pgBarMedium,
		'DOMpgBar': document.querySelector('#mediumPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#mediumPgBar span'),
		'DOMexs': document.querySelectorAll('#Medium .verification__button'),
	};
	const Hard = {
		'name': 'Hard',
		'localString': 'pgBarHard',
		'pgPercent': localStorage.pgBarHard,
		'DOMpgBar': document.querySelector('#hardPgBar .progressBars__progressBarBox__parent__child'),
		'DOMspan': document.querySelector('#hardPgBar span'),
		'DOMexs': document.querySelectorAll('#Hard .verification__button'),
	};
	let exBools = {
		'ex1': {
			'dot1': false,
			'dot2': false,
			'dot3': false,
		},
		'ex2': {
			'dot1': false,
			'dot2': false,
			'dot3': false,
		},
		'ex3': {
			'dot1': false,
			'dot2': false,
			'dot3': false,
		},
	};

	updatePgBar(...Object.values(Easy));
	updatePgBar(...Object.values(Medium));
	updatePgBar(...Object.values(Hard));
}
else {
	console.warn('Sorry! No Web Storage support..');
}