$(function() {
	var ctx = document.getElementById('AGGPair1Chart').getContext('2d');
// 	var AGGPair1Chart = new Chart(ctx, {
// 		type: 'line',
// 			options:{
// 				scales:{
// 					yAxes:[{
// 						ticks:{
// 							beginAtZero:true
// 						}
// 					}]
// 				}
// 			}
// 	});
	var AGGPair1Chart = new Chart(ctx, {
	    type: 'line',
	    data:{ 
	    	datasets:[{
	    		label: "AGGPair1 data chart"
	    	}]
	    },
	    options:{
	    	scales:{
	    		yAxes:[{
	    			ticks:{
	    				beginAtZero: true
	    			}
	    		}],
	    		xAxes:[{
	    			ticks:{
	    				beginAtZero: true
	    			}
	    		}]
	    	}
	    }
	});
	// AGGPair1Chart.data.datasets.label = 'AGGPair1 Chart';

	// setInterval(function(){	//функция для автообновления графика
		// var response = {"data1": 7, "data2": 34, "data3": 234};
		// 	var keys = [], values = [];
		// 	for (var prop in response) {
		// 		keys.push(prop);
		// 		values.push(response[prop]);
		// 	}
		// 	AGGPair1Chart.data.labels = keys;
		// 	AGGPair1Chart.data.datasets = [{data: values}];
		// 	AGGPair1Chart.data.label = "My first chart";
		// 	AGGPair1Chart.update();
			
		$.ajax({url:"http://localhost/JSON.json",
				type:"POST",
				dataType: "json",
				success:
					function(response) {

						var xaxys = [], yaxys = [], i=0, red=100, green=50, blue=20, a=0.2;
						for (var prop in response) {
							for(var propprop in prop){
								for(var proppropprop in propprop){
							console.log(prop + " " + propprop + " " + proppropprop);
							xaxys.push(response[prop]);
							yaxys.push(response[prop]);
							AGGPair1Chart.data.datasets = [{
								// yAxisID: 1,
								data: response[prop],//[23,32,34,22,12,32,12,43],
								backgroundColor: ['rgba(' + red +',' + green + ',' + blue + ',' + a +')'],
								label: prop
								}];
							red=red+10;
							green=green+10;	
							blue=blue+10;
							AGGPair1Chart.data.labels = [1,2,3,4,5];
							}}}
							// AGGPair1Chart.data.labels = xaxys;
							// AGGPair1Chart.data.datasets[0] = [{
							// 	// yAxisID: 1,
							// 	data: yaxys,//[23,32,34,22,12,32,12,43],
							// 	backgroundColor: ['rgba(20, 203, 207, 0.2)'],
							// 	label: xaxys[0]
							// 	}];
							// AGGPair1Chart.data.datasets[1] =[{
							// 	data: yaxys,//[23,32,34,22,12,32,12,43],
							// 	backgroundColor: ['rgba(250, 23, 207, 0.2)'],
							// 	label: xaxys[1]
							// }];
							// AGGPair1Chart.data.datasets[2] =[{
							// 	data: yaxys,//[23,32,34,22,12,32,12,43],
							// 	backgroundColor: ['rgba(150, 30, 27, 0.2)'],
							// 	label: xaxys[2]
							// }];
							AGGPair1Chart.update();
						}
				});
}, 5000);
// });


// var AGGPair1Chart = new Chart(ctx, {
// 	// document.getElementById('AGGPair1Chart'),{
// 	type:'line',
// 	data:[{
// 		labels:["January","February","March","April","May","June","July"],
// 		datasets:[{
// 			label:"My First Dataset",
// 			data:[65,59,80,81,56,55,40],
// 			fill:false,
// 			borderColor:'rgb(75, 192, 192)',
// 			lineTension:0.1,
// 			showLine: true
// 		}]
// 	}]
	// options:{
	// 	scales:{
	// 		yAxes:[{
	// 			ticks:{
	// 				beginAtZero:true
	// 			}
	// 		}]
	// 	}
	// }
// })