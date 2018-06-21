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
	}
}

module.exports = generalFunctions;