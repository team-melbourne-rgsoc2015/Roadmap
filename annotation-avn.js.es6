A notated file of the initializer file: https://github.com/team-melbourne-rgsoc2015/discourse-adsense/blob/master/assets/javascripts/initializers/adsense.js.es6
Just so that I'm understanding the overall purpose of this file...

// Checks if it is a current user, yes?, then, if you're a current user with trust level lower than x, then got to block 2 so 
// we can display ads to you.  If you're not then, we'll return a blank.
// The initializer is called "apply-adense" - just a name.
// Then there is a handlebars helper which looks for an adsenseBlock with a width, height and a slot id.
// The adsense blocks have been defined in assets/javascripts/discourse/templates/connectors/<generallocation>/adsense.hbs
// they are also defined with a mobile view and without mobile view b/c sizes are smaller for mobile view.

export default {
  name: "apply-adsense",
  initialize: function(container) {
  Em.Handlebars.helper('adsenseBlock', function(width, height, slotid) {
    var currentUser = Discourse.User.current();
    if ((currentUser) && ( currentUser.get('trust_level') > Discourse.SiteSettings.adsense_through_trust_level )) {
        return "";
    }
    
---

// This removes the '_mobile' part in slot id to run the if statement below... Creates a variable for the purpose of the

    var position = slotid.replace('_mobile', '');


---

// OVERALL: If In Discourse, an adsense position is tick boxed (in the client side in setting) we're going to return a string with the Javascript Asynchronous ad code so that it can run.
// The script part is the asynchronous code and that's provided from Google - https://support.google.com/adsense/answer/3221666?hl=en
// Discourse.SiteSettings.adsense_publisher_code.trim() is the actual adsense code that one takes when you create an 
// adsense code from your login.
// Discourse.SiteSettings['adsense_ad_slot_' + slotid.trim()] is some form of slot id number.
// The ins is a google adwords thinggo in javascript.
// Otherwise, if non of the positions are ticked, then it will return an empty string.



    if (Discourse.SiteSettings['adsense_show_' + position]) {

      return new Handlebars.SafeString('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
        '<div class="adsense adsense_' + slotid.trim() + '">' +
        '<ins class="adsbygoogle" style="display:inline-block;width:' + 
        width + 'px;height:'+ height + 'px" data-ad-client="' + Discourse.SiteSettings.adsense_publisher_code.trim() + 
        '" data-ad-slot="' + Discourse.SiteSettings['adsense_ad_slot_' + slotid.trim()] + '"></ins>' +
        '</div>' + 
        '<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
      );
    } 

    return "";
  });

---

// A function __push.
// the dollar sign function $() in jQuery is a library function that is frequently used
// This compares one size to another...  Asked the Jo Cranford the question.


  function __push() {
    var i = $('.adsense').size();
    var j = $('.adsense .adsbygoogle ins ins').size();
 
    $('ins.adsbygoogle').each(function(){
      if ($(this).html() == '') {
        adsbygoogle.push({});
      }
    });
    if(i>j) { 
      window.setTimeout(__push, 300);
    }
  }

---

// A function that deals with the reloading issue that is common in Ember.
// Function that reloads google ads because of the page reload issue.
// variable "ads" is an ad obtained by its ID.  This ad is removed and if it's -1 then it's undefined.
// then if adsbygoogle is EMPTY, ga is declared with creates a javascript asynchronous thinggo that will load
// the ad.  and load this before "s"?
// and then the __push function comes - what ever that is... to be explained by Jo.


  function __reload_gads () {
    var ads = document.getElementById("adsense_loader");
    if (ads) {
      // clear the old element and its state
      //ads.remove();
      ads.parentNode.removeChild(ads);
      for (var key in window) {
        if (key.indexOf("google") !== -1){
          window[key] = undefined;
        }
      }
    }
    window.adsbygoogle = [];
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.id="adsense_loader";
    ga.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    window.setTimeout(__push, 200);
  }

---

// Still part of the reloads google ads, this is saying, on the current page url, if there is 
// no adsense publisher code then reload the google ad so that it is there.


  Discourse.PageTracker.current().on('change', function(url) {
    if('' != Discourse.SiteSettings.adsense_publisher_code) {
      __reload_gads();
    }
  });
}};

---
