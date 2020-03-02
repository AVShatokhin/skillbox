$(function(){
	$.get('http://data.fixer.io/api/latest', {'access_key' : '4fb76c0c472228157252ca9087cdadd3'}, function(resp) {	
		$('.curs-value').text(Math.round(resp.rates.RUB / resp.rates.USD * 100)/100);
	});
});