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

</script>
