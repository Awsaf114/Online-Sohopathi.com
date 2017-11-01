//open/close lateral navigation
    $('.cd-nav-trigger').on('click', function(event){
        event.preventDefault();
        //stop if nav animation is running 
        if( true) {
            if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
            
            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                //animation is over
                isLateralNavAnimating = false;
            });
        }
    });

    function makeExpandingArea(container) {
 var area = container.querySelector('textarea');
 var span = container.querySelector('span');
 if (area.addEventListener) {
   area.addEventListener('input', function() {
     span.textContent = area.value;
   }, false);
   span.textContent = area.value;
 } else if (area.attachEvent) {
   // IE8 compatibility
   area.attachEvent('onpropertychange', function() {
     span.innerText = area.value;
   });
   span.innerText = area.value;
 }
// Enable extra CSS
container.className += "active";
}var areas = document.querySelectorAll('.expandingArea');
var l = areas.length;while (l--) {
 makeExpandingArea(areas[l]);
}



// image Picker
    var preview = document.querySelector(".preview");

$("#image-picker").change(function (event) {
    console.log("Clicked");
    readURL(this);
});

function readURL(input) {

    var curFiles = input.files;
  
    console.log(curFiles);
    if (curFiles!= 0) {
        var list = document.createElement("ul");
        preview.appendChild(list);
        for (var i = 0; i < curFiles.length; i++) {
          var listItem = document.createElement("li");
          var para = document.createElement("p");
              para.textContent = "File name " + curFiles[i].name + ".";
        var image = document.createElement("img");
        
        image.src = window.URL.createObjectURL(curFiles[i]);
        
        image.style.cssText = 'height:90px; width:90px';

        listItem.appendChild(image);
        listItem.appendChild(para);
        list.appendChild(listItem);

        }

    }

    // if (input.files && input.files[0]) {
    //     var reader = new FileReader();

    //     reader.onload = function (e) {
    //         $('#image-preview').attr('src', e.target.result);
    //     }

    //     reader.readAsDataURL(input.files[0]);
    // }
}




    $( "textarea.Ask" ).focusin(function() {
        // $(this).parent('div').parent('div').css('background','white');
        
        // $(this).parent('div').addClass('focused');

        console.log("Ask selected");
    }).focusout(function(){

        // $(this).parent('div').removeClass('focused');
        // $(this).parent('div').css('background','transparent');
    });


    // $('textarea').focus(
    // function(){
    //     $(this).parent('div').css('background','white');
    // });



// jQuery(document).ready(function($){
// 	var isLateralNavAnimating = false;
	
// 	//open/close lateral navigation
// 	$('.cd-nav-trigger').on('click', function(event){
// 		event.preventDefault();
// 		//stop if nav animation is running 
// 		if( !isLateralNavAnimating ) {
// 			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
// 			$('body').toggleClass('navigation-is-open');
// 			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
// 				//animation is over
// 				isLateralNavAnimating = false;
// 			});
// 		}
// 	});

// });


//  function(a) {
//     "use strict";
//     a(document).ready(function() {
//         function b() {
//             window.location = i
//         }
//         var e = a(".site-title"),
//             f = a("body");
//         setTimeout(function() {
//             f.addClass("loaded")
//         }, 150);
//         var g = a(".project-assets").children("div");
//         a.each(g, function(b, c) {
//             var d = a(this);
//             d.imagesLoaded(function() {
//                 setTimeout(function() {
//                     d.addClass("loaded")
//                 }, 50 + 150 * b)
//             })
//         });
//         var h = a(".projects-feed .project");
//         a.each(h, function(b, c) {
//             var d = a(this);
//             d.imagesLoaded(function() {
//                 setTimeout(function() {
//                     d.addClass("loaded")
//                 }, 50 + 50 * b)
//             })
//         });
//         var i;
//         a("a").on("click", function(a) {
//             return "" == this.href || null == this.href ? void a.preventDefault() : void(-1 == this.href.indexOf("#") && -1 == this.href.indexOf("mailto:") && -1 == this.href.indexOf("javascript:") && "_blank" != this.target && (a.preventDefault(), i = this.href, f.removeClass("loaded"), setTimeout(b, 250)))
//         })
//     })
// }(window.jQuery);

 