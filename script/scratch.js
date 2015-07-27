function cityPm25(city){
	$.ajax({
	    type: 'GET',
	    url: "http://www.pm25.in/api/querys/pm2_5.json?city="+city+"&token=5j1znBVAsnSf5xQyNQyq",
	    dataType:'jsonp',
	    success: function(data){
	    	//return data;
	    	console.log(data);
	    },
	    error: function(){
	    	alert("使用超出API限度呃。。")
	    }
	});
}
function cityPm10(city){
	$.ajax({
	    type: 'GET',
	    url: "http://www.pm25.in/api/querys/pm10.json?city="+city+"&token=5j1znBVAsnSf5xQyNQyq",
	    dataType:'jsonp',
	    success: function(data){
	    	//return data;
	    	console.log(data);
	    },
	    error: function(){
	    	alert("使用超出API限度呃。。")
	    }
	});
}
function cityCo(city){
	$.ajax({
	    type: 'GET',
	    url: "http://www.pm25.in/api/querys/co.json?city="+city+"&token=5j1znBVAsnSf5xQyNQyq",
	    dataType:'jsonp',
	    success: function(data){
	    	//return data;
	    	console.log(data);
	    },
	    error: function(){
	    	alert("使用超出API限度呃。。")
	    }
	});
}
function cityNo2(city){
	$.ajax({
	    type: 'GET',
	    url: "http://www.pm25.in/api/querys/no2.json?city="+city+"&token=5j1znBVAsnSf5xQyNQyq",
	    dataType:'jsonp',
	    success: function(data){
	    	//return data;
	    	console.log(data);
	    },
	    error: function(){
	    	alert("使用超出API限度呃。。")
	    }
	});
}
function citySo2(city){
	$.ajax({
	    type: 'GET',
	    url: "http://www.pm25.in/api/querys/so2.json?city="+city+"&token=5j1znBVAsnSf5xQyNQyq",
	    dataType:'jsonp',
	    success: function(data){
	    	//return data;
	    	console.log(data);
	    },
	    error: function(){
	    	alert("使用超出API限度呃。。")
	    }
	});
}
function cityO3(city){
	$.ajax({
	    type: 'GET',
	    url: "http://www.pm25.in/api/querys/o3.json?city="+city+"&token=5j1znBVAsnSf5xQyNQyq",
	    dataType:'jsonp',
	    success: function(data){
	    	//return data;
	    	console.log(data);
	    },
	    error: function(){
	    	alert("使用超出API限度呃。。")
	    }
	});
}
function cityDetails(city){
	$.ajax({
	    type: 'GET',
	    url: "http://www.pm25.in/api/querys/aqi_details.json?city="+city+"&token=5j1znBVAsnSf5xQyNQyq",
	    dataType:'jsonp',
	    success: function(data){
	    	//return data;
	    	console.log(data);
	    },
	    error: function(){
	    	alert("使用超出API限度呃。。")
	    }
	});
}
function allDetails(){
	$.ajax({
	    type: 'GET',
	    url: "http://www.pm25.in/api/querys/all_cities.json?token=5j1znBVAsnSf5xQyNQyq",
	    dataType:'jsonp',
	    success: function(data){
	    	//return data;
	    	console.log(data);
	    },
	    error: function(){
	    	alert("使用超出API限度呃。。")
	    }
	});
}

