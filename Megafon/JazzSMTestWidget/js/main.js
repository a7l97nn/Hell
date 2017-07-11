$(function() {
	var ctx = document.getElementById('AGGPair1Chart').getContext('2d');
	var AGGPair1Chart = new Chart(ctx, {
		type: 'bar',
			options:{
				scales:{
					yAxes:[{
						ticks:{
							beginAtZero:true
						}
					}]
				}
			}
	});

	setInterval(function(){
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
						var keys = [], values = [];
						for (var prop in response) {
							keys.push(prop);
							values.push(response[prop]);
							}
							AGGPair1Chart.data.labels = keys;
							AGGPair1Chart.data.datasets = [{data: values}];
							AGGPair1Chart.data.label = "My first chart";
							AGGPair1Chart.update();
						}
				});
}, 6000);
});