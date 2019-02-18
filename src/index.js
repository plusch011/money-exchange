module.exports = function makeExchange(curr) {
			if (curr > 10000) 
				return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	    	let obj = {};
	    	while (curr >= 50) {
	    		obj.H ? obj.H++ : obj.H = 1;
	    		curr -= 50;
	    	}
	    	while (curr >= 25) {
	    		obj.Q ? obj.Q++ : obj.Q = 1;
	    		curr -= 25;
	    	}
	    	while (curr >= 10) {
	    		obj.D ? obj.D++ : obj.D = 1;
	    		curr -= 10;
	    	}
	    	while (curr >= 5) {
	    		obj.N ? obj.N++ : obj.N = 1;
	    		curr -= 5;
	    	}
	    	while (curr >= 1) {
	    		obj.P ? obj.P++ : obj.P = 1;
	    		curr -= 1;
	    	}
	    	return obj;
		}
