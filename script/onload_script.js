/*///////////////////////////////////////////////////////////*/

          window.addEventListener("load", function()
      {
           arrowPage_right.addEventListener("click",function() {
           			current_page++;
           			clear_content(current_page);
           			fill_content(current_page);
           		},true);
           console.log(arrowPage_right);
/*///////////////////////////////////////////////////////////*/
            arrowPage_left.addEventListener("click",function() {
           			
            	if (current_page>0)
            	{
					   current_page--;         
           			clear_content(current_page);
           			fill_content(current_page);
           		}
           		},true);


	            createBlock_AddNewItem();

	              	           
	            
/*///////////////////////////////////////////////////////////*/
	            blockType1 = document.getElementById("blockType1");
              
                 blockType1.addEventListener("click",function() {
	            	 openAddingWindow();
	            },true);
	            cross_addingWindow.addEventListener("click",function() {
	            
	            	closeAddingWindow();
	            },true);
/*///////////////////////////////////////////////////////////*/
	            button_AddItem.addEventListener("click",function() {
	            	addingItem(form_addingWindow);
	            },true);
/*///////////////////////////////////////////////////////////*/
	         dec_button.addEventListener("click",function() {

	         	dec_button.check = 1 - dec_button.check;
	         	inc_button.check = 0;

            if (dec_button.check == 1)
            {
              var deffontSize  = dec_button.style.fontSize;
              var defColor = dec_button.style.color;

              dec_button.setAttribute("style","font-size:200%;color:orange");
              inc_button.setAttribute("style","font-size:170%;color:rgba(80,80,80)");
             /* var default = dec_button.className;
              dec_button.className = dec_bu.className + " activated";*/
            }
	         	
	         },true);
/*///////////////////////////////////////////////////////////*/
	         inc_button.addEventListener("click",function() {
	         	inc_button.check = 1 - inc_button.check;
	         	dec_button.check = 0;

            if (inc_button.check == 1)
            {
              inc_button.setAttribute("style","font-size:200%;color:orange");
              dec_button.setAttribute("style","font-size:170%;color:rgba(80,80,80)");
            }
	         },true);


/*///////////////////////////////////////////////////////////*/
            byName.addEventListener("mousedown",function()
            {
              byName.style.color = "tomato";
            },true);
            byName.addEventListener("mouseup",function()
            {
              byName.style.color = "rgba(80,80,80)";
            },true);

            byPrice.addEventListener("mousedown",function()
            {
              byPrice.style.color = "tomato";
            },true);
            byPrice.addEventListener("mouseup",function()
            {
              byPrice.style.color = "rgba(80,80,80)";
            },true);
            
	         byName.addEventListener("click",function() {
	         	if (!dec_button.check)
 	{

 			items.sort(function(left,right) {
 		   		left = (left.nameItem.toLowerCase());
 		   		right = (right.nameItem.toLowerCase());
          console.log("NAME: " + left.nameItem);
          console.log("dec: " + left);
 		   		return left.localeCompare(right);
 			});
 	} else 
 	{
    if (!inc_button.check)
    {
 		items.sort(function(left,right) {
 		   		left = (left.nameItem.toLowerCase());
 		   		right =(right.nameItem.toLowerCase());

 		   		return right.localeCompare(left);
 			});
 	}
 }
 	for (var i = 0;i < items.length;i++)
 	{
 		console.log(items[i].nameItem.toLowerCase());
 	}

 	clear_content(current_page);
 	fill_content(current_page);


	         },true);

  /*///////////////////////////////////////////////////////////*/


  byPrice.addEventListener("click",function() {
            if (!dec_button.check)
  {
      items.sort(function(left,right) {
        console.log("PRICE: " + left.priceItem);
          left = parseInt(left.priceItem);
          right = parseInt(right.priceItem);
          console.log(left-right);
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

  menu_banner.addEventListener("click",function(event) {
    
    wrapper_menu.style.zIndex = "2";
    wrapper_menu.style.display = "grid";
    wrapper_menu.style.top = event.pageY + "px";
    wrapper_menu.style.left = event.pageX + "px";
      
    },true);

    body.addEventListener("click",function() {
       wrapper_menu.style.display = "none";
    },true);

    
  




           	
},true);