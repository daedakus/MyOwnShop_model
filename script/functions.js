

 
           		

 function clear_content(current_page)
 {
 	console.log(current_page);
 		if (current_page > 0) {
 	for (var nomer = current_page*15-1;nomer >= current_page*15-15;nomer--)
 	{

 		
 		var id = "wrapper_block_item" + nomer;
 		var item = document.getElementById(id);
 		console.log("Nomer: " + nomer + " item: " + item);
 		if (item) goods_view.removeChild(item);


 	}
 }

  if (current_page == 0)
  {
  	for (var nomer = 14;nomer >= 0;nomer--)
 	{
 		
 		var id = "wrapper_block_item" + nomer;
 		var item = document.getElementById(id);
 		console.log("Nomer: " + nomer + " item: " + item);
 		if (item) goods_view.removeChild(item);


 	}
  }
    var blockType1 = document.getElementById("blockType1");
    if (blockType1) removeBlock_AddNewItem();
    
 }     


 function fill_content(current_page)
 {

 	for (var nomer = current_page*15;nomer <= current_page*15+14;nomer++)
 	{
 		if (typeof(items[nomer]) != "undefined") block_newItem(items[nomer],nomer);
 	}

 	createBlock_AddNewItem();
 }    	

 function createBlock_AddNewItem()
 {
 	
	  var countElements = goods_view.children.length;
     
    if (countElements < 15)
    {
      var div_blockType1 = document.createElement("div");
      	div_blockType1.id = "blockType1";
      	div_blockType1.className = "bt1";

      var object_blockType1 = document.createElement("img");
      	object_blockType1.src = "./materials/svg/addItem.svg";
      	object_blockType1.id = "plus_blockType1";

      var span_blockType1 = document.createElement("span");
      	span_blockType1.className = "text_blockType1";

      var text = document.createTextNode("Add new item");

      span_blockType1.appendChild(text);
      div_blockType1.appendChild(object_blockType1);
      div_blockType1.appendChild(span_blockType1);

      style = div_blockType1.style;
        var rowForNewElement = startRow;
        var colForNewElement = startCol;
        
       
      	if (Math.trunc(countElements/5) > 0) 
      		{
      			rowForNewElement = Math.trunc((countElements/5))*heightAndGap;
      		}
     	if (countElements%5 > 0)
     	{

     			colForNewElement = (countElements%5)*widthAndGap;
     	}
     	      
      var endRow = rowForNewElement+heightAndGap;
      var endCol = colForNewElement+widthAndGap;

      
      style.gridRow = rowForNewElement+2 + "/" +  endRow;
      style.gridColumn = colForNewElement+2 + "/" +  endCol;

      goods_view.appendChild(div_blockType1);

     

	           	 
     applyEventToblockType1();
     }
 }

 function applyEventToblockType1()
 {
 	var plus_blockType1 = document.getElementById("plus_blockType1");

 	plus_blockType1.addEventListener("click",function() {
                openAddingWindow();
              },true);

 	var blockType1 = document.getElementById("blockType1");
 	
 	blockType1.addEventListener("click",function() {
	            	 openAddingWindow();
	            },true);
	            cross_addingWindow.addEventListener("click",function() {
	            
	            	closeAddingWindow();
	            },true);

 }

 function removeBlock_AddNewItem()
 {
 	var div_blockType1 = document.getElementById("blockType1");
 	goods_view.removeChild(div_blockType1);
 }

 function openAddingWindow()
{
	var curtainBlock = document.createElement("div");
	curtainBlock.id = "curtain";
    var addingWindow = document.getElementById("addingWindow");
    

	curtainBlock.setAttribute("style","display:block;position:fixed;zIndex:3;width:100%;height:100%;background-color:rgba(0,0,0,.5);top:0;left:0;");
	curtainBlock.addEventListener("click",function()
	{
		closeAddingWindow();
	},true);
	
	addingWindow.style.display = "flex";
	addingWindow.style.zIndex = "4";
	document.body.appendChild(curtainBlock);
}




function closeAddingWindow()
{
	var curtainBlock = document.getElementById("curtain");
    var addingWindow = document.getElementById("addingWindow");
    addingWindow.style.display = "none";
    document.body.removeChild(curtainBlock);
}




