	var date = new Date();
	var curr_hours = date.getHours();
	var curr_minutes = date.getMinutes();
	
	function get_time()
	{	
		if (curr_minutes < 10)
		{
		document.getElementById('output').innerHTML = "Arrival Time: " + curr_hours + ":" + "0" + curr_minutes;
		} else {
		document.getElementById('output').innerHTML = "Arrival Time: " + curr_hours + ":" + curr_minutes;
		}
	}
	
	function finish_time()
	{
		var input = document.getElementById('input_hour');
		if (input && input.value)
		{
			calc_finish_time();
		} else {
			calc_finish_time_arrival();
		}	
	}
	
	function calc_finish_time()
	{
		var arrival_hour = document.getElementById('input_hour').value;
		var arrival_minute = document.getElementById('input_minutes').value;
		var break_length = document.getElementById('input_break').value;
		var finish_hour = parseInt(arrival_hour) + (7+(Math.floor(break_length/60)));
		var finish_minutes = parseInt(arrival_minute) + 30 + parseInt(break_length % 60);
		
		if (finish_minutes >= 60)
		{	
			finish_hour = Math.floor(finish_minutes/60);
            finish_minutes = finish_minutes % 60;
		}
		if (finish_minutes < 10)
		{
		document.getElementById('finish time').innerHTML = "Finish time: " + finish_hour + ":" + "0" + finish_minutes;
		} else {
		document.getElementById('finish time').innerHTML = "Finish time: " + finish_hour + ":" + finish_minutes;
		}
	}
	
	function calc_finish_time_arrival()
	{
		var break_length = document.getElementById('input_break').value;
		var finish_hour = curr_hours + 7;
		var finish_minutes = curr_minutes + 30 + parseInt(break_length);
		if (finish_minutes >= 60)
		{	
            finish_hour = Math.floor(finish_minutes/60);
            finish_minutes = finish_minutes % 60;
			
		}
		if (finish_minutes < 10)
		{
		document.getElementById('finish time').innerHTML = "Finish time: " + finish_hour + ":" + "0" + finish_minutes;
		} else {
		document.getElementById('finish time').innerHTML = "Finish time: " + finish_hour + ":" + finish_minutes;
		}
	}
	
	
	
	
	