

  
window.addEventListener("load", function()
      {

           
            widthAndGap = 20;
            heightAndGap = 30;
            startRow = 0;
            startCol = 0;
            items = new Array;
            itemsToCart = new Array();
            console.log(typeof(items[0]) == "undefined");
            MAXELEMENTS = 15;
            current_page = 0;
         
              
           body = document.getElementsByTagName("body")[0];

           goods_view = document.getElementById("goods_view");
           

           cross_addingWindow = document.getElementById("cross");
           button_AddItem = document.getElementById("button_AddItem");
           form_addingWindow = document.getElementById("form_addingWindow");
           addingWindow = document.getElementById("addingWindow");
            arrowPage_left = document.getElementById("arrowPage_left");
            arrowPage_right = document.getElementById("arrowPage_right");           
           byPrice = document.getElementById("byprice_button");
           byName = document.getElementById("byname_button");
           blockType1 = document.getElementById("blockType1");
           span_pointer_cart = document.getElementById("span_pointer_cart");
           cart = document.getElementById("cart");
           menu_banner = document.getElementById("menu_banner");
           wrapper_menu = document.getElementById("wrapper_menu");

           dec_button = document.getElementById("dec_button");
            dec_button.check = 0;
           inc_button = document.getElementById("inc_button");
            inc_button.check = 0;

          },true);