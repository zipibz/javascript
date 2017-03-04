// var dataset = [5,10,15,20,25];

// d3.select('body').selectAll('div')
//   .data(dataset)
//   .enter()
//   .append('div')
//   .attr('class', 'bar')
//   .style('height', function(d){
//   	return d * 5 + 'px'
//   })

 var dataset = [
 	{ name: "Mima", score: 93 },
 	{ name: "Grant", score: 88 },
 	{ name: "Eli", score: 91 },
 	{ name: "Dani", score: 82 },
 	{ name: "Chris", score: 63 }
 ];

d3.select('.chart')

  .append('svg')
  	.attr('width', 225)
  	.attr('height', 300)

  .selectAll('rect')
  .data(dataset)
  .enter()
  	.append('rect')
  	.attr('y', (d,i) => i * 33)
  	.style('width', d => d.score)
  	.text(function(d){
  		return d.name;
  	})
  	.attr('class','bar');