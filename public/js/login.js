var getUpdate = function(){
	$.get('update',function(data){
		console.log(data)
		if(data.status  == "start"){
			window.location.href = './chat.html';
		}
		if(data.status == 'waiting'){
			$('h3').html('waiting for other person')
		}
	})
}

var reqForJoin = function(){
	var name = $('#Name').val();
	$.post('join',{name : name},function(data){
		$('#Name').val('');
		if(data.alreadyConnected){
			$('h3').html('u r already connected!!!!!');
			return;
		}
		if(data.status = true){
			$('h3').html('connected')
		}
	})
}


var onReady = function(){
	$('button').click(reqForJoin);
	var interval = setInterval(getUpdate,1000);
}

$(document).ready(onReady);
