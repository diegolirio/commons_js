<script type="text/javascript">
		
		// Bloqueia no input qualquer caracter que nao seje numerico
		// Ex: <input type="number" onkeypress="return SomenteNumero(event);">
		function SomenteNumero(e) {
			  var tecla=(window.event)?event.keyCode:e.which;   
			  if(tecla > 47 && tecla < 58)
				  return true;
			  else {
			    if (tecla == 8 || tecla == 0) 
			    	return true;
				  else  
					  return false;
		    }
		}
		
</script>
