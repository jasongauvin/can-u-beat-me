const updatePgBar = (difficulty, localString, pgBar, DOMpgBar, DOMspan, DOMexs) => {
	DOMpgBar.style.width = `${pgBar}%`;
	for (let i = 0; i < DOMexs.length; i++) {
		DOMexs[i].addEventListener('click', () => {
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
		!localStorage.pgBarHard
	) {
		localStorage.pgBarEasy = 1;
		localStorage.pgBarMedium = 1;
		localStorage.pgBarHard = 1;
	}

	const Easy = {
		'name': 'Easy',
		'localString': 'pgBarEasy',
		'pgPercent': localStorage.pgBarEasy,
		'DOMpgBar': document.querySelector('#easy div div'),
		'DOMspan': document.querySelector('#easy span'),
		'DOMexs': document.querySelectorAll('#easyExs section'),
	};
	const Medium = {
		'name': 'Medium',
		'localString': 'pgBarMedium',
		'pgPercent': localStorage.pgBarMedium,
		'DOMpgBar': document.querySelector('#medium div div'),
		'DOMspan': document.querySelector('#medium span'),
		'DOMexs': document.querySelectorAll('#mediumExs section'),
	};
	const Hard = {
		'name': 'Hard',
		'localString': 'pgBarHard',
		'pgPercent': localStorage.pgBarHard,
		'DOMpgBar': document.querySelector('#hard div div'),
		'DOMspan': document.querySelector('#hard span'),
		'DOMexs': document.querySelectorAll('#hardExs section'),
	};

	updatePgBar(...Object.values(Easy));
	updatePgBar(...Object.values(Medium));
	updatePgBar(...Object.values(Hard));
}
else {
	console.warn('Sorry! No Web Storage support..');
}