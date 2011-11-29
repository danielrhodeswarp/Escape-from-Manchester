/**
 * @package    Escape from Manchester (https://github.com/danielrhodeswarp/Escape-from-Manchester)
 * @copyright  Copyright (c) 2009 - 2011 Warp Asylum Ltd (UK).
 * @license    see LICENCE file in source code root folder     New BSD License
 */

//Screen image is superimposed over basic screen (that has this item) graphic
//and then removed when item is taken.
//WHen item is taken, the inventory image is used to display the item
//in the inventory
function Item(imgSrc, screenImgLeft, screenImgTop, inventoryCaption)
{
	this.inventoryImgSrc = 'img/item/' + imgSrc + '.inventory.gif';
	this.screenImgSrc = 'img/item/' + imgSrc + '.screen.jpg';
	this.screenImgTop = screenImgTop;
	this.screenImgLeft = screenImgLeft;
	this.inventoryCaption = inventoryCaption;
	
	this.combinesWith = null;
	//this.hasDetailWindow = 
	
	this.postPickupTrigger = function(){};
		
	//this.setPostPickupTrigger = 
	
	this.id = 'item_' + new Date().getTime();
	
	//--------
	this.removeFromScreen = function()
	{
		document.getElementById('canvas').removeChild(document.getElementById(this.id));
	};
	
	this.displayOnScreen = function()
	{
		var img = document.createElement('img');
		
		img.src = this.screenImgSrc;
		img.id = this.id;
		
		img.style.position = 'absolute';
		img.style.top = this.screenImgTop + 'px';
		img.style.left = this.screenImgLeft + 'px';
		
		document.getElementById('canvas').appendChild(img);
	};
	//--------
	
	//--------
	this.addToInventory = function()
	{
		var img = document.createElement('img');
		
		img.id = this.id;
		
		img.src = this.inventoryImgSrc;
		img.caption = this.inventoryCaption;
		
		img.style.cursor = 'pointer';
		img.onmouseover = function(){setCaption(this.caption)};
		img.onmouseout = clearCaption;
		
		img.style.display = 'block';
		img.style.margin = '10px auto 10px auto';
		//img.style.
		
		document.getElementById('inventory').appendChild(img);
		
		//Do postpickup trigger if we have one
		this.postPickupTrigger();
	};
	
	this.removeFromInventory = function()
	{
		var img = document.getElementById(this.id);
		document.getElementById('inventory').removeChild(img);
	};
	//--------
}