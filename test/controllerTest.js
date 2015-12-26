var request = require('supertest');
var sinon = require('sinon');
var controller = require('../lib/controller');

describe('controller',function(){
	describe('/',function(){
		it('should serve the landing page',function(done){
			request(controller)
				.get('/')
				.expect(/let's chat/)	
				.expect(200,done)
		});
	});
	describe('/join',function(){
		it('should add a client ',function(){
				
		});
	});
})