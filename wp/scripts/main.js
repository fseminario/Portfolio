/* jshint devel:true */
console.log('\'Allo \'Allo!');
	
jQuery(document).ready(function($) {
    // Inside of this function, $() will work as an alias for jQuery()
    // and other libraries also using $ will not be accessible under this shortcut

    $(function() {
      // console.log("ready!");

      $('').each(function(e) {

        var closestSection = $(this).closest('section');

        var sectionOriginalImg = closestSection.css('background-image');

        var currentSectionBgName = closestSection.css('background-image').split('/').pop().slice(0, -5);

        var currentSectionBgExt = closestSection.css('background-image').split('.').pop().slice(0, -1);

        var currentSectionBgAlt = "/images/" + currentSectionBgName + "-alt." + currentSectionBgExt;

        console.log(currentSectionBgName + "\n" +  currentSectionBgExt + "\n" + currentSectionBgAlt);

        $(this).on("mouseenter", function (e) {

          console.log("test" + currentSectionBgAlt);
          // do something…
          closestSection.fadeTo().css('background-image', 'url(' + currentSectionBgAlt + ')');

        });

        $(this).on("mouseleave", function(e) {

          console.log("test" + sectionOriginalImg);
          // do something…
          closestSection.css('background-image', sectionOriginalImg);

        });

      });

    });

});
