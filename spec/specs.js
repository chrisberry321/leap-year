
// first argument 'leapYear' is the function we intend to write
// second argument is the it function. The it function takes a
// string as its first argument, too. The second argument is
// the function which contains the assertion.

describe ('leapYear', function() {
	it("is false for a year that is not divisible by 4, 100, or 400", function() {
		expect(leapYear(1993)).to.equal(false);
	});

	it ("is true for years divisible by 4", function() {
		expect(leapYear(2004)).to.equal(true);
	});

	it ("is false for years divisible by 100", function() {
		expect (leapYear(1900)).to.equal(false);
	});

	it ("is true for years divisible by 400", function() {
		expect (leapYear(2000)).to.equal(true);
	});

	it ("is false for blank input", function() {
		expect (leapYear(NaN)).to.equal(false);
	});

	it ("is false for negavtive integers", function() {
		expect (leapYear(-400)).to.equal(false);
	});
});
