var assert = require('assert');

var arithmetic = require('../Arithmetic_Function.js');

describe('Valid Operator and valid values',function(){
	it('Addition operation returns 10+10=20', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('+',10, 10), 20);
		done();
	});

	it('Subtraction operation returns 20-10=10', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('-',20, 10), 10);
		done();
		});
		
		it('Multiplication operation returns 5*5=25', function(done) {
			assert.equal(arithmetic.arthimetic_calculations('*',5, 5), 25);
			done();
			});

			it('Division operation returns 10 / 5=2', function(done) {
				assert.equal(arithmetic.arthimetic_calculations('/',10, 5), 2);
				done();
				});
});

describe('Division operation failure case', function(){
	it('returns can not divide by 0', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('/',100, 0), 'Can not divide by 0');
		done();
    });
});


describe('invalid operatiors and valid values', function(){

	it('\'%\' is not accepted by the script', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('%',2, 4), 'Wrong Operation Type');
		done();
		});
		
		it('\'++\' is not accepted by the script', function(done) {
			assert.equal(arithmetic.arthimetic_calculations('--',45, 2), 'Wrong Operation Type');
			done();
			});

		it('\'+-\' is not accepted by the script', function(done) {
				assert.equal(arithmetic.arthimetic_calculations('+-',4, 1), 'Wrong Operation Type');
				done();
				});
			 
			it('\'+*\' is not accepted by the script', function(done) {
					assert.equal(arithmetic.arthimetic_calculations('++*',69, 61), 'Wrong Operation Type');
					done();
					});

					it('\'+/\' is not accepted by the script', function(done) {
						assert.equal(arithmetic.arthimetic_calculations('+/',99, 51), 'Wrong Operation Type');
						done();
						});
});

describe('passing excess or Null arguments but getting proper results', function(){
it('three arguments are passed but code accepting 2 values only', function(done) {
	assert.equal(arithmetic.arthimetic_calculations('/',10, 5, 2), 2);
	done();
	});

	it('returns can not divide by 0', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('/',10, 0,1), 'Can not divide by 0');
		done();
    });
});