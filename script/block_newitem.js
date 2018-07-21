

function addAllEventsToItem(nomer)
{
   var nomer_currentPage = nomer - current_page*15;
   var button_delete = document.getElementsByClassName("button_delete")[nomer_currentPage];
   var button_add = document.getElementsByClassName("button_add")[nomer_currentPage];


   var id = "wrapper_block_item" + nomer;


   var wrapper = document.getElementById(id);
	var block_item = document.getElementsByClassName("block_item")[nomer_currentPage];
	var block_description = document.getElementsByClassName("block_description")[nomer_currentPage];
	var name_itemCard = document.getElementsByClassName("name_itemCard")[nomer_currentPage];
	var curtain = document.getElementsByClassName("curtain_itemCard")[nomer_currentPage];
	var zoomer = document.getElementsByClassName("zoomer")[nomer_currentPage];
   	var image_itemCard  = document.getElementsByClassName("image_itemCard")[nomer_currentPage];
   	var block_IMG = document.getElementsByClassName("block_IMG")[nomer_currentPage];
   	var object_zoomer = document.getElementsByClassName("object_zoomer")[nomer_currentPage];
   	var body = document.getElementsByTagName("body")[0];
      console.log("nomer_currentPage: "+ nomer_currentPage);
      console.log("blok_item" + block_item);
      console.log("zoomer:" + zoomer);
   	zoomer.setAttribute("style","display:none");
      
   	block_IMG.addEventListener("mouseover",function() {
   		zoomer.setAttribute("style","height:40%");
   		
   	},true);

   block_IMG.addEventListener("mouseout",function() {
   		zoomer.setAttribute("style","height:0");
   	},true);

   
   block_IMG.addEventListener("click",function() {
   	
   	var divIMG = document.createElement("div");
   	var curtainIMG = document.createElement("div");
   	var IMG = document.createElement("img");
   	IMG.className  = "animation";

   		/*divIMG.setAttribute("style","position:absolute;display:inline-block;zIndex:5;top:10%;width:80%;left:10%;right:10%;border-radius:1em;background-color:red");*/
   		IMG.src = image_itemCard.src;
   		body.appendChild(IMG);
   		IMG.setAttribute("style","height:0");


   		IMG.setAttribute("style","position:absolute;display:inline-block;z-index:5;top:10%;width:60%;left:20%;border-radius:1em");
   		curtainIMG.setAttribute("style","position:fixed;z-index:6;width:100%;height:100%;top:0;left:0;background-color:;");

   	
    body.appendChild(curtainIMG);

   	curtainIMG.addEventListener("click",function() {
   		IMG.setAttribute("style","height:0");
         body.removeChild(IMG);
   		body.removeChild(curtainIMG);
   	},true);

   
   },true);

	block_description.addEventListener("mouseover",function() {
		name_itemCard.setAttribute("style","color:rgba(255,255,255,0)");
		
		curtain.setAttribute("style","background-color:rgba(255,255,255,0)");
		
	},true);
	block_description.addEventListener("mouseout",function() {
		name_itemCard.style.color = "white";
		curtain.setAttribute("style","background-color:rgba(0,0,0,0.7)");
		curtain.style.display = "block";
	},true);

   button_delete.addEventListener("click",function() {
       if (itemsToCart.indexOf(items[nomer]) >= 0)
      {
        
         itemsToCart.splice(itemsToCart.indexOf(items[nomer]),1);

         var count = itemsToCart.length;

         var textNode = document.createTextNode(count);
         span_pointer_cart.removeChild(span_pointer_cart.lastChild);
         span_pointer_cart.appendChild(textNode);
      }

      items.splice(nomer,1);
      goods_view.removeChild(wrapper);

      clear_content(current_page);
      fill_content(current_page);
     
      

   },true);

   button_add.addEventListener("click",function() {

      itemsToCart.push(items[nomer]);
      var count = itemsToCart.length;

      var textNode = document.createTextNode(count);
      span_pointer_cart.removeChild(span_pointer_cart.lastChild);
      span_pointer_cart.appendChild(textNode);
   },true);



}

