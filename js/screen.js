/**
 * @package    Escape from Manchester (https://github.com/danielrhodeswarp/Escape-from-Manchester)
 * @copyright  Copyright (c) 2009 - 2011 Warp Asylum Ltd (UK).
 * @license    see LICENCE file in source code root folder     New BSD License
 */

//
function Screen(imgSrc)
{
	this.screenLinks = [];	//0=north, 1=east, 2=south, 3=west
	this.hotspots = {};
	
	this.imgSrc = imgSrc;
	
	this.removeHotspotAndItem = function(hotspotId)
	{
		this.removeItem(this.hotspots[hotspotId].givesItem);
		this.removeHotspot(hotspotId);
	};
	
	this.removeItem = function(item)
	{
		item.removeFromScreen();
	};
	
	this.removeHotspot = function(hotspotId)
	{
		this.hotspots[hotspotId].remove();	//Take off the DOM
		//this.hotspots.splice(hotspotIndex, 1);
		delete this.hotspots[hotspotId];
	};
	
	this.addHotspot = function(hotspot)
	{
		this.hotspots[hotspot.id] = hotspot;
	};
	
	this.debugHotspots = function()
	{
		var msg = '';
		
		for(var fart in this.hotspots)
		{
			msg += 'this.hotspots[' + fart + ']=' + this.hotspots[fart] + '\n';
		}
		
		alert(msg);
	};
	
	this.display = function()
	{
		globalCurrentScreen = this;

		//crap Fudge to stop hotspots flashing and giving themselves away		
		document.getElementById('screen_img').src = '/img/escapefrommanchester/screen/blank.jpg';
		
		document.getElementById('screen_img').src = this.imgSrc;
		
		deactivateArrows();
		for(var loop = 0; loop < 4; loop++)
		{
			if(this.screenLinks[loop] != null)
			{
				activateArrow(loop, this.screenLinks[loop]);
			}
		}
		
		removeHotspots();
		for(var hotspot in this.hotspots)
		//for(var hotspot = 0; hotspot < this.hotspots.length; hotspot++)
		{
			this.hotspots[hotspot].display();
		}
	};
	
	this.addNorthScreen = function(screenId)
	{
		this.screenLinks[0] = screenId;
	};
	
	this.addEastScreen = function(screenId)
	{
		this.screenLinks[1] = screenId;
	};
	
	this.addSouthScreen = function(screenId)
	{
		this.screenLinks[2] = screenId;
	};
	
	this.addWestScreen = function(screenId)
	{
		this.screenLinks[3] = screenId;
	};
}