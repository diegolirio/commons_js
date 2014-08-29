// pt - Manipulando window em Javascript
// en - Manipulating window in Javascript


// Exibe uma janela menor (modal/popup)
function showWindowPopup(url) {
	w = window.open(url,'','height=550, width=750, top=150, left=250, scrollbars=no, resizable=no');		
}


/*
 * Utilizado especificamente para uma janela popup.
 * Atraves do status(OK), exibe a mensagem (message) e manipula a janela Pai(Janela principal que chamou a janela menor),
 *  essa manipulacao acontece atraves de um Elemento que contenha o atributo id (quinto parametro) definido, nesse 
 *  elemento é adicionado um outro elemento o Option, e nesse outro elemento é adicionado o atributo value que recebe 
 *  o valor do terceiro parametro (value), e dentro do option adiciona um texto, o quarto parametro da função (dysplay),
 *  e mantem o novo elemento selecionado e por ultimo fecha a janela filha.
 * 
 * Exemplo de Utilizacao.
 *
 * main.html (janela principal)
 * <select id="id_cursos">
 *      <option value="">Selecione</option>
 * </select>
 * 
 * cursos_janela_filha.html
 * <script type="text/javascript">
 *    closeWindowPopupStatusNormal('OK', 'Curso gravado com sucesso', 15, 'Javascript', 'id_cursos');
 * </script>
 *
 */
function closeWindowPopupStatusNormal(status, message, value, dysplay, id) {
    if(status == 'OK') { 
        alert(message);
        var option = window.opener.document.createElement('option');
        var valueAtt = document.createAttribute("value");
        valueAtt.nodeValue = value;
        option.setAttributeNode(valueAtt);
        var dysplay = document.createTextNode(dysplay);
        option.appendChild(dysplay);
        window.opener.document.getElementById(id).appendChild(option);                  
        var index = window.opener.document.getElementById(id).length-1;
        window.opener.document.getElementById(id).selectedIndex = index;
        window.close(); 
    }       
    
	//  if(status == "N") {
	//          alert(message);
	//          $(id, window.opener.document).append('<option value="'+value+'">'+dysplay+'</option>');                 
	//          var index = $(id +' option', window.opener.document).length-1;                  
	//          $(id, window.opener.document).get(0).selectedIndex = index;
	//          window.close();
	//  }               
}
