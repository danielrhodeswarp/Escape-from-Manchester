/**
 * @package    Escape from Manchester (https://github.com/danielrhodeswarp/Escape-from-Manchester)
 * @copyright  Copyright (c) 2009 - 2011 Warp Asylum Ltd (UK).
 * @license    see LICENCE file in source code root folder     New BSD License
 */

window.onload = startEverything;

var globalCurrentScreen;
var globalScreens = [];
var globalItems = [];

function startEverything()
{
	globalItems[1] = new Item('plastic_fence', 275, 225, 'A blue plastic fence');
	//Remove back view of this fence too
	globalItems[1].postPickupTrigger = function(){globalScreens[5].removeHotspot('hotspot_plasticfencings');};
	
	globalItems[2] = new Item('fence_back', 672, 226, 'Should not be in inventory');
	
	globalItems[3] = new Item('box', 148, 182, 'A large box');
	//Remove far view of this fence too
	globalItems[3].postPickupTrigger = function(){globalScreens[5].removeHotspot('hotspot_boxfar');};
	
	globalItems[4] = new Item('parcel_ribbon', 259, 251, 'Some of that seemingly indestructable plastic ribbon for wrapping parcels');

	globalItems[5] = new Item('box_far', 131, 141, 'Should not be in inventory');

	globalScreens[1] = new Screen('img/screen/1.jpg');
	globalScreens[2] = new Screen('img/screen/2.jpg');
	globalScreens[3] = new Screen('img/screen/3.jpg');
	globalScreens[4] = new Screen('img/screen/4.jpg');
	globalScreens[5] = new Screen('img/screen/5_base.jpg');
	globalScreens[6] = new Screen('img/screen/6.jpg');
	globalScreens[7] = new Screen('img/screen/7_base.jpg');
	globalScreens[8] = new Screen('img/screen/8.jpg');
	globalScreens[9] = new Screen('img/screen/9_base.jpg');
	globalScreens[10] = new Screen('img/screen/10.jpg');
	globalScreens[11] = new Screen('img/screen/11.jpg');
	globalScreens[12] = new Screen('img/screen/12.jpg');
	globalScreens[13] = new Screen('img/screen/13.jpg');
	globalScreens[14] = new Screen('img/screen/14.jpg');
	
	globalScreens[1].addSouthScreen(2);
	
	globalScreens[2].addNorthScreen(5);
	globalScreens[2].addSouthScreen(1);
		
	globalScreens[3].addNorthScreen(1);
	globalScreens[3].addEastScreen(4);
	globalScreens[3].addSouthScreen(5);
	globalScreens[3].addWestScreen(6);
	
	globalScreens[4].addEastScreen(5);
	globalScreens[4].addSouthScreen(6);
	globalScreens[4].addWestScreen(3);
	
	globalScreens[5].addNorthScreen(9);	//?
	globalScreens[5].addEastScreen(6);
	globalScreens[5].addSouthScreen(3);
	globalScreens[5].addWestScreen(4);
	
		var fencey = new Hotspot('plasticfencings', 304, 230, 104, 70, 'Plastic fencing covering a hole in the pavement.', true);
		fencey.setGivenItem(globalItems[2]);
		globalScreens[5].addHotspot(fencey);
		
		var boxey = new Hotspot('boxfar', 131, 141, 6, 16, 'A large box.', true);
		boxey.setGivenItem(globalItems[5]);
		globalScreens[5].addHotspot(boxey);
		
	globalScreens[6].addEastScreen(3);
	globalScreens[6].addSouthScreen(4);
	globalScreens[6].addWestScreen(5);
	
	globalScreens[7].addNorthScreen(3);
	globalScreens[7].addEastScreen(8);
	globalScreens[7].addSouthScreen(9);
	globalScreens[7].addWestScreen(10);
		
		globalScreens[7].addHotspot(new Hotspot('anotherwheeliebin', 740, 210, 29, 33, 'Another wheelie bin.'));
		globalScreens[7].addHotspot(new Hotspot('littlehatchback', 425, 167, 35, 28, 'A little hatchback is driving off.'));
		globalScreens[7].addHotspot(new Hotspot('brickwork', 724, 106, 9, 9, 'Some decorative brickwork.'));
		globalScreens[7].addHotspot(new Hotspot('minivan', 584, 151, 25, 9, 'A <em>United Utilities</em> mini-van is driving off. Could explain all the dug up pavements.'));
		globalScreens[7].addHotspot(new Hotspot('wheeliebin', 635, 205, 26, 37, 'A wheelie bin. It looks to be number 3 or 8.'));
		globalScreens[7].addHotspot(new Hotspot('morefencing', 339, 179, 45, 21, 'More plastic fencing.'));
				
		var fence = new Hotspot('plasticfencing', 304, 230, 104, 70, 'Plastic fencing covering a hole in the pavement. Three fences seems a little excessive.');
		fence.setGivenItem(globalItems[1]);
		globalScreens[7].addHotspot(fence);
	
	globalScreens[8].addNorthScreen(11);
	globalScreens[8].addEastScreen(9);
	globalScreens[8].addSouthScreen(10);
	globalScreens[8].addWestScreen(7);
	
	globalScreens[9].addEastScreen(10);
	globalScreens[9].addSouthScreen(7);
	globalScreens[9].addWestScreen(8);
		
		var box = new Hotspot('box', 148, 182, 44, 55, 'A big cardboard box.');
		box.setGivenItem(globalItems[3]);
		globalScreens[9].addHotspot(box);
		
		var ribbon = new Hotspot('ribbon', 259, 251, 57, 21, 'Plastic ribbon tape.');
		ribbon.setGivenItem(globalItems[4]);
		globalScreens[9].addHotspot(ribbon);
	
	globalScreens[10].addNorthScreen(14);
	globalScreens[10].addEastScreen(7);
	globalScreens[10].addSouthScreen(8);
	globalScreens[10].addWestScreen(9);
	
	globalScreens[11].addSouthScreen(12);
	
	globalScreens[12].addNorthScreen(10);
	globalScreens[12].addSouthScreen(11);
	
	globalScreens[13].addNorthScreen(8);
	globalScreens[13].addSouthScreen(14);
	
	globalScreens[14].addSouthScreen(13);
	
	//Start at screen 7
	globalScreens[7].display();
}

//----UTILITY--------

//put in Screen object????
function activateArrow(arrowId, screenId)
{
	var arrow = document.getElementById('arrow_' + arrowId);
	arrow.style.display = 'block';
	arrow.onclick = function(){globalScreens[screenId].display();};
}

function deactivateArrows()
{
	for(var loop = 0; loop < 4; loop++)
	{
		document.getElementById('arrow_' + loop).style.display = 'none';
	}
}

function setCaption(caption)
{
	document.getElementById('caption').innerHTML = caption;
}

function clearCaption()
{
	document.getElementById('caption').innerHTML = '';
}

function removeHotspots()
{
	var allDivs = document.getElementsByTagName('div');
	
	toRemove = [];
	
	//for(var div in allDivs)
	for(var div = 0; div < allDivs.length; div++)
	{
		if(allDivs[div].className == 'hotspot')
		{
			//document.getElementById('canvas').removeChild(allDivs[div]);
			//allDivs[div].remove = true;
			toRemove.push(allDivs[div]);
		}
	}
	
	for(var loop = 0; loop < toRemove.length; loop++)
	{
		if(toRemove[loop].givesItem != null)
		{
			toRemove[loop].givesItem.removeFromScreen();
		}
	
		document.getElementById('canvas').removeChild(toRemove[loop]);
	}
}

function dev(event)
{
	var globalCanvas = document.getElementById('canvas');
	//window.status = event.offsetLeft + ',' + event.offsetTop;
	window.status = (event.pageX - globalCanvas.offsetLeft) + ',' + (event.pageY - globalCanvas.offsetTop);
}