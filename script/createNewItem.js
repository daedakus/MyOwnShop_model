
function addingItem(form)
{
  closeAddingWindow();
  removeBlock_AddNewItem();
  if (goods_view.children.length < 15)
   { 
  var elems = form.elements;
  var srcIMG = form.srcIMG.value;
  var nameItem = form.nameItem.value;

  var priceItem = parseInt(form.priceItem.value);
  var descriptionItem = form.descriptionItem.value;

  form.reset(); 

  var newItem = new Object();
  newItem.srcIMG = srcIMG;
  newItem.nameItem = nameItem;
  newItem.priceItem = priceItem;
  newItem.descriptionItem = descriptionItem;
  current_element = current_page*15+goods_view.children.length;
  items[current_element] = newItem;
  console.log("items[nomer]:" + items[current_element].nameItem + " and nomer: " + current_element);
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