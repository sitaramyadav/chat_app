var myMessege = function(messege){
	return '<br><tr class="my"><td>myChat</td></tr>'.replace('myChat',messege);
}

var showMessege = function(data){
	$('.container').append(myMessege(data.messege));
}

var sendMessege = function(){
	var messege = $('input').val();
	$.post('send',{messege : messege} ,function(data){
		// console.log(data,"dataaaa")
		// showMessege(data)
	});
}
var update = function(){
	$.get('update',function(data){
		
	})
}

var onReady = function(){
	$('button').click(sendMessege);
	setInterval(update,500)
}

$(document).ready(onReady);