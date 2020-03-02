$(function(){

	function addJob(jobName, jobComment) {	

		$('.list').append(`<div class="job">
							<div class="job-header">
								<div class="job-name">${jobName}</div>
									<button class="clear-button"></button>
									<button class="arrow-button"></button>
									</div>
								<div class="job-comment">${jobComment}</div>
						</div>`);

		$('.empty-list').css('display', 'none');
	}

	$('body').on('click', '.clear-button', function() {				

		$(this).parents(".job").remove();

		if ($('.job').length == 0)  {
			$('.empty-list').css('display', 'block');		
		}
	});

	$('body').on('click', '.arrow-button', function() {				
		var myParrent      = $(this).parents(".job");
		var jobComment     = myParrent.children(".job-comment");				
		var currentHeigth  = jobComment.outerHeight(); 

		if (currentHeigth >= 85) {
			jobComment.css('opacity', 0);   
			jobComment.animate({
					"min-height": 0,
					"padding-top": 0,
					"padding-bottom": 0,
					"font-size" : 0					
			}, 200);

			$(this).css('transform', 'rotate(90deg)'); 
		} else {
			jobComment.animate({
				"min-height": 85,
				"padding-top": 10,
				"padding-bottom": 10,
				"font-size": 14
			}, 200, function() {
				jobComment.css('opacity', 1); 						
			});

			$(this).css('transform', 'rotate(0)'); 
		}
	});

	$('.add-button').on('click', function() {
		
		var jobName 	= $('input');
	    var jobComment  = $('textarea');

		if (jobName.val().length == 0) {
			alert("Не заполнено обязательное поле \"Название\"!");
			return false;
		}

		if (jobComment.val().length == 0) {
			alert("Не заполнено обязательное поле \"Описание\"!");
			return false;
		}

		addJob(jobName.val(), jobComment.val());

		
		jobName.val('');
		jobComment.val('');

		return false;
	});
});