window.onload = function()
      {

           
            widthAndGap = 20;
            heightAndGap = 30;
            startRow = 0;
            startCol = 0;
            items = new Array;
            console.log(typeof(items[0]) == "undefined");
            MAXELEMENTS = 15;
            current_page = 0;
   		   
   		      	
           body = document.getElementsByTagName("body")[0];

           goods_view = document.getElementById("goods_view");
           plus_blockType1 = document.getElementById("plus_blockType1");
           cross_addingWindow = document.getElementById("cross");
           button_AddItem = document.getElementById("button_AddItem");
           form_addingWindow = document.getElementById("form_addingWindow");
           addingWindow = document.getElementById("addingWindow");

           /*addingWindow.addEventListener("dblclick",function() {
           	addingWindow.addEventListener("mousedown",function() {
           		addingWindow.addEventListener("mousemove",function(event) {
           	var mouseX = event.pageX;
           	var mouseY = event.pageY;

           	var width = body.clientWidth;
           	var height = body.clientHeight;

           	addingWindow.style.left = mouseX*0.5 + "px";
           	addingWindow.style.top = mouseY + "px";
           },true);
           	},true);
           	},true);

           addingWindow.addEventListener("mouseup",function() {

           })*/
           /*<input type="button" value="by price" id="byprice_button" class="filter_button">
               		<input type="button" value="by name" id="byname_button" class="filter_button">
               </div>

               <div id="order_block">
               		<input type="button" value="Dec" id="dec_button" class="filter_button">
               		<input type="button" value="Inc" id="inc_button" class="filter_button">*/
           byPrice = document.getElementById("byprice_button");
           byName = document.getElementById("byname_button");

           dec_button = document.getElementById("dec_button");
           	dec_button.check = 0;
           inc_button = document.getElementById("inc_button");
           	inc_button.check = 0;

           arrowPage_left = document.getElementById("arrowPage_left");
           arrowPage_right = document.getElementById("arrowPage_right");
           arrowPage_right.addEventListener("click",function() {
           			current_page++;
           			clear_content(current_page);
           			fill_content(current_page);
           		},true);
           console.log(arrowPage_right);

            arrowPage_left.addEventListener("click",function() {
           			
            	if (current_page>0)
            	{
					   current_page--;         
           			clear_content(current_page);
           			fill_content(current_page);
           		}
           		},true);


	            createBlock_AddNewItem();

	              	           
	            blockType1 = document.getElementById("blockType1");

	            blockType1 = document.getElementById("blockType1");
                 blockType1.addEventListener("click",function() {
	            	 openAddingWindow();
	            },true);
	            cross_addingWindow.addEventListener("click",function() {
	            
	            	closeAddingWindow();
	            },true);

	            button_AddItem.addEventListener("click",function() {
	            	addingItem(form_addingWindow);
	            },true);

	         dec_button.addEventListener("click",function() {
	         	dec_button.check = 1 - dec_button.check;
	         	inc_button.check = 0;
	         	
	         },true);

	         inc_button.addEventListener("click",function() {
	         	inc_button.check = 1 - inc_button.check;
	         	dec_button.check = 0;
	         },true);



	         byPrice.addEventListener("click",function() {
	         	if (dec_button.check)
 	{
 			items.sort(function(left,right) {
 		   		left = parseInt(left.priceItem);
 		   		right = parseInt(right.priceItem);

 		   		return left-right;
 			});
 	} else 
 	{
 		items.sort(function(left,right) {
 		   		left = parseInt(left.priceItem);
 		   		right = parseInt(right.priceItem);

 		   		return right-left;;
 			});
 	}
 	for (var i = 0;i < items.length;i++)
 	{
 		console.log(items[i].priceItem);
 	}

 	clear_content(current_page);
 	fill_content(current_page);


	         },true);
           	}


 
           		

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

      var object_blockType1 = document.createElement("object");
      	object_blockType1.data = "./materials/svg/addItem.svg";
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

function addingItem(form)
{
  closeAddingWindow();
  removeBlock_AddNewItem();
  if (goods_view.children.length < 15)
   { 
  var elems = form.elements;
  var srcIMG = form.srcIMG.value;
  var nameItem = form.nameItem.value;
  var priceItem = form.priceItem.value;
  var descriptionItem = form.descriptionItem.value;

  form.reset();	

  var newItem = new Object();
  newItem.srcIMG = srcIMG;
  newItem.nameItem = nameItem;
  newItem.priceItem = priceItem;
  newItem.descriptionItem = descriptionItem;
  current_element = current_page*15+goods_view.children.length;
  items[current_element] = newItem;
  console.log("items[nomer]:" + items[current_element] + " and nomer: " + current_element);
  block_newItem(items[current_element],current_element);
  createBlock_AddNewItem();
  }
  
}

function block_newItem(object,nomer)
{

   
  	

    var wrapper = document.createElement("div");
    wrapper.id = "wrapper_block_item" + nomer;
    wrapper.style.display = "grid";
      var block_item = document.createElement("div");
      block_item.className = "block_item";

        var block_IMG = document.createElement("div");
        block_IMG.className = "block_IMG";

          var image_itemCard = document.createElement("img");
            image_itemCard.className = "image_itemCard";

          var zoomer = document.createElement("div");
            zoomer.className = "zoomer animation";
              var object_zoomer = document.createElement("object");
                object_zoomer.className = "object_zoomer";
                object_zoomer.data = "./materials/svg/zoomer.svg";

        var block_description = document.createElement("div");
          block_description.className = "block_description";

            var name_itemCard = document.createElement("div");
              name_itemCard.className = "name_itemCard animation";

            var curtain_itemCard = document.createElement("div");
              curtain_itemCard.className = "curtain_itemCard";

            var content_itemCard = document.createElement("div");
              content_itemCard.className = "content_itemCard";
                var span_content = document.createElement("span");

        var block_actionPanel = document.createElement("div");
          block_actionPanel.className = "block_actionPanel";

            var form_itemCard  = document.createElement("form");
              form_itemCard.className = "form_itemCard";

                var button_delete = document.createElement("input");
                  button_delete.setAttribute("type","button");
                  button_delete.setAttribute("value","Delete");
                  button_delete.setAttribute("class","button_delete buttons_itemCard");
                  	/*var wastebasket = document.createElement("img");
                  		wastebasket.src = "./materials/images/wastebasket.png";
                  		wastebasket.className = "wb";*/

                var price = document.createElement("div");
                  price.className = "price buttons_itemCard";
                    var span_price = document.createElement("span");

                var button_add  = document.createElement("input");
                  button_add.setAttribute("type","button");
                  button_add.setAttribute("value","Cart");
                  button_add.setAttribute("class","button_add buttons_itemCard");


   image_itemCard.src = object.srcIMG;
   var text_name_itemCard = document.createTextNode(object.nameItem);
   var text_content_itemCard = document.createTextNode(object.descriptionItem);
   var text_price = document.createTextNode(object.priceItem);

   name_itemCard.appendChild(text_name_itemCard);
   span_content.appendChild(text_content_itemCard);
   span_price.appendChild(text_price);

 
   
   wrapper.appendChild(block_item);
    block_item.appendChild(block_IMG);
      block_IMG.appendChild(image_itemCard);
      block_IMG.appendChild(zoomer);
        zoomer.appendChild(object_zoomer);
    block_item.appendChild(block_description);
      block_description.appendChild(name_itemCard);
      block_description.appendChild(curtain_itemCard);
      block_description.appendChild(content_itemCard);
        content_itemCard.appendChild(span_content);
    block_item.appendChild(block_actionPanel);
      block_actionPanel.appendChild(form_itemCard);
        form_itemCard.appendChild(button_delete);        	
        form_itemCard.appendChild(price);
          price.appendChild(span_price);
        form_itemCard.appendChild(button_add);

    goods_view.appendChild(wrapper);
    console.log("in block_newItem blok_item" + block_item);
   console.log(wrapper);
   positioning_newItem(nomer);
   
   
   addAllEventsToItem(nomer);
      }


function positioning_newItem(nomer)
{


      var wrapper = document.getElementById("wrapper_block_item" + nomer); 
      var countElements = goods_view.children.length-1;
      	var rowForNewElement  = startRow;
      	var colForNewElement = startCol;

      	if (Math.trunc(countElements/5) > 0)
      	{
      		rowForNewElement = Math.trunc((countElements/5))*heightAndGap;
      	}
      	if (countElements%5 >0)
      	{
      		colForNewElement = (countElements%5)*widthAndGap;
      	}
        
      	var endRow = rowForNewElement+heightAndGap;
      	var endCol = colForNewElement + widthAndGap;
        
      	wrapper.style.gridRow = rowForNewElement+2 + "/" +  endRow;
        wrapper.style.gridColumn = colForNewElement+2 + "/" +  endCol;
}
