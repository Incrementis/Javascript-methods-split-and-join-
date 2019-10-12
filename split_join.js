/*
	===============================================================================================
	
	NOTE:
	
	The code below serves only demonstration purposes. It could be improved.
	
	===============================================================================================
*/



"use strict";


// Purpose: Separates all formular elements and shows them in the specific designed area
function showElements(formular)
{
	// Explanations for the formular elements and will be used for split
	var explDistance 	= ["Distance"];
	var explTime		= ["Time"];
	var explSpeed 		= ["Speed"];
	var explAcceleration	= ["Acceleration"];
	
	// Contains all formulars and extracting the string content
	var formulars 		= document.getElementsByClassName('formular');
	var forDistance		= formulars[0].textContent;
	var forSpeed		= formulars[1].textContent;
	var forAcceleration	= formulars[2].textContent;
	
	// Display areas
	var disDistance 	= document.getElementById('distance-elements');
	var disSpeed 		= document.getElementById('speed-elements');
	var disAcceleration 	= document.getElementById('acceleration-elements');
	var list		= 0;
	
	// Will be used to join the end result
	var distance 		= 0;
	var time 		= 0;
	var speed 		= 0;
	var acceleration 	= 0;
	
	
	/*
		ATTENTION:
		split is used here
	*/
	explDistance.push(forDistance.split(" ")[0]);		// Gets "s(t)" from the distance formular 
	explTime.push(forSpeed.split(" ")[4]);			// Gets "t" from the speed formular
	explSpeed.push(forSpeed.split(" ")[0]);			// Gets "v(t)" from the speed fromular
	explAcceleration.push(forAcceleration.split(" ")[0]);	// Gets "a" from the acceleration fromular
	

	/*
		ATTENTION:
		join is used here
	*/
	distance 		= explDistance.join(":");	// "Distance:s(t)"
	time 			= explTime.join(":");		// "Time:t"
	speed 			= explSpeed.join(":");		// "Speed:v(t)"
	acceleration 	= explAcceleration.join(":");		// "Acceleration:a"
	
	
	// Displaying formular elements on web browser in an unordered list 
	if(formular === "distance")
	{
		// Reseting list
		hideElements('distance-elements');
		
		// Appending DISTANCE to the list
		list = document.createElement('LI');
		list.innerHTML = distance;
		disDistance.appendChild(list);
		
		// Appending ACCELERATION to the list
		list = document.createElement('LI');
		list.innerHTML = acceleration;
		disDistance.appendChild(list);
		
		// Appending TIME to the list
		list = document.createElement('LI');
		list.innerHTML = time;
		disDistance.appendChild(list);
		

	}
	else if(formular === "speed")
	{
		// Reseting list
		hideElements('speed-elements');
		
		// Appending SPEED to the list
		list = document.createElement('LI');
		list.innerHTML = speed;
		disSpeed.appendChild(list);
		
		// Appending ACCELERATION to the list
		list = document.createElement('LI');
		list.innerHTML = acceleration;
		disSpeed.appendChild(list);
		
		// Appending TIME to the list
		list = document.createElement('LI');
		list.innerHTML = time;
		disSpeed.appendChild(list);
		
	}
	else if(formular === "acceleration")
	{
		// Reseting list
		hideElements('acceleration-elements');
		
		// Appending ACCELERATION to the list
		list = document.createElement('LI');
		list.innerHTML = acceleration;
		disAcceleration.appendChild(list);
		
	}
	
}


// Purpose: Delets all displaying elements in the specific designed area
function hideElements(formular)
{
	document.getElementById(formular).innerHTML = "";
}
