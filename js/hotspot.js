/**
 * @package    Escape from Manchester (https://github.com/danielrhodeswarp/Escape-from-Manchester)
 * @copyright  Copyright (c) 2009 - 2011 Warp Asylum Ltd (UK).
 * @license    see LICENCE file in source code root folder     New BSD License
 */

//put all properites and methods on the div and simply return that?
function Hotspot(hotspotId, x1, y1, width, height, caption, silent)	//Coords & dims are in PHOTO PIXEL space
{
	this.x1 = x1;
	this.y1 = y1;
	this.width = width;
	this.height = height;
	
	this.silent = false;
	if(silent != null && silent == true)
	{
		this.silent = true;
	}
	
	this.id = 'hotspot_' + hotspotId;
	
	this.caption = caption;
	this.givesItem = null;
	
	this.setGivenItem = function(item)
	{
		this.givesItem = item;
	};
	
	this.remove = function()
	{
		if(document.getElementById(this.id))
		{
			var element = document.getElementById(this.id);
			document.getElementById('canvas').removeChild(element);
		}
	};
	
	this.display = function()
	{
		if(this.givesItem != null)
		{
			this.givesItem.displayOnScreen();
		}
		
		var div = document.createElement('div');
		
		div.id = this.id;
		
		div.caption = this.caption;
		div.givesItem = this.givesItem;
		
		div.style.backgroundColor = 'transparent';
		div.style.position = 'absolute';
		
		div.style.top = this.y1 + 'px';
		div.style.left = this.x1 + 'px';
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		//div.style.border = '1px dashed pink';
		
		div.className = 'hotspot';
		
		if(!this.silent)
		{
			div.style.cursor = 'pointer';
			div.onmouseover = function(){setCaption(this.caption);};
			div.onmouseout = clearCaption;
			
			div.onclick = function()
			{
				if(this.givesItem != null)
				{
					this.givesItem.addToInventory();
					this.givesItem = null;
					
					globalCurrentScreen.removeHotspotAndItem(this.id);
					
					clearCaption();
					globalCurrentScreen.display();	//Refresh
				}
			};
		}
		
		document.getElementById('canvas').appendChild(div);
	};
}