const generalFunctions = {
	reverseWord: function(req, res) {
		var reverse = (str) => str.split('').reverse().join('');

		var reverseParentheses = (s) => {
			while (s.includes('(')) {
				var l = s.lastIndexOf('(');
				var r = s.indexOf(')', s.lastIndexOf('('));
				s = s.slice(0, l) + reverse(s.slice(l + 1, r)) + (r + 1 === s.length ? s.slice(r, -1) : s.slice(r + 1));
			}
			return s;
		};
		res.send(reverseParentheses(req.body.string));
	},
	groupWord: function(req, res) {
		let wordsArray = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];

		function sortStrChars(str) {
			if (!str) {
				return;
			}
			str = str.split('');
			str = str.sort();
			str = str.join('');
			return str;
		}

		function getGroupedAnagrams(wordsArray) {
			const anagrams = {};
			wordsArray.forEach((word) => {
				const sortedWord = sortStrChars(word);
				if (anagrams[sortedWord]) {
					return anagrams[sortedWord].push(word);
				}
				anagrams[sortedWord] = [word];
			});
			return anagrams;
		}

		const groupedAnagrams = getGroupedAnagrams(wordsArray);
		for (const sortedWord in groupedAnagrams) {
			console.log(groupedAnagrams[sortedWord].toString());
		}
		res.send(groupedAnagrams);
	}
}

module.exports = generalFunctions;