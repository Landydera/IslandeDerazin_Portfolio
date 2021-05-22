const years = Object.keys(sampleData); // getting years as keys of sampleData
const data = Object.values(sampleData); // data as values of sampleData
const horozontalChartDetails = {
	type: 'horizontalBar', // type defines which chart need to draw
	data: {
  	labels: years,
  	datasets: [
      	{
        	label: "Employment Data",
        	data: data,
        	backgroundColor: ["#52FF33", "#900C3F","#FF33B2", "#F6FF33","#8D33FF", "#FFC300", "#3346FF","#E59866","#196F3D ","#ff1f1f"], // adding random colors
        	borderWidth: 2
      	},  
    	]
	},
	options: {
    	title: {
        	display: true,
        	text: 'Horizontal Bar'
    	},
    	legend: { // if true will display legends
        	display: false
    	},
    	tooltips: { // if true will display tooltips
        	enabled: false
    	},
    	scales: {
        	yAxes: [{
        	ticks: {
            	reverse: false // to reverse order of y axis ticks
        	}
        	}],
    	}
	}
}
const doughnutChartDetails = {
	type: 'doughnut',
	data: {
  	labels: years,
  	datasets: [
      	{
        	label: "Employment Data",
        	data: data,
        	backgroundColor: ["#52FF33", "#900C3F","#FF33B2", "#F6FF33","#8D33FF", "#FFC300", "#3346FF","#E59866","#196F3D ","#ff1f1f"], // adding random colors
        	borderWidth: 2
      	},  
        
      	]
	},
	options: {
    	title: {
        	display: true,
        	text: 'Doughnut Chart'
    	},
    	legend: { // if true will display legends
        	display: false
    	},
    	tooltips: { // if true will display tooltips
        	enabled: false
    	},
	}
}
const barChart = document.getElementById('chartJSContainer').getContext('2d');
const doughnut = document.getElementById('doughnutChartContainer').getContext('2d');
const myHorizontalChart = new Chart(barChart, horozontalChartDetails);
const myDoughnutChart = new Chart(doughnut, doughnutChartDetails)
