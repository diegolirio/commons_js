<script type="text/javascript">

  function test_commons_string() {
      alert('test_commons_string');
  }

	//examples
	//console.log(padLeft(23,5));       //=> '00023'
	//console.log((23).padLeft(5));     //=> '00023'
	//console.log((23).padLeft(5,' ')); //=> '   23'
	//console.log(padLeft(23,5,'$'));  //=> '$$$$$$23'	 
	function padLeft(value, length, valueAdd) {
		return Array(length-String(value).length+1).join(valueAdd||'0')+value;
	}	


	// left padding s with c to a total of n chars
	//padding_left('abcd', '0', 8);                        // 0000abcd
	function padding_left(s, c, n) {
	    if (! s || ! c || s.length >= n) {
	        return s;
	    }
	
	    var max = (n - s.length)/c.length;
	    for (var i = 0; i < max; i++) {
	        s = c + s;
	    }
	
	    return s;
	}
	
	// right padding s with c to a total of n chars
	//padding_right('1234', '0', 9);                       // 123400000	
	function padding_right(s, c, n) {
	    if (! s || ! c || s.length >= n) {
	        return s;
	    }
	
	    var max = (n - s.length)/c.length;
	    for (var i = 0; i < max; i++) {
	        s += c;
	    }
	
	    return s;
	}


</script>
