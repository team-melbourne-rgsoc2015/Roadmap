# Roadmap

Roadmap of where we're up to and any changes to it...
This "-" represents the original roadmap.  The # represents changes to it and comments.

- Week 1 - Set up Discourse development environment

      # done, and created a basic discourse plugin.

- Week 2 - Create basic "hello world" Discourse plugin

      # going through an discontructing and existing discourse adsense plugin
      # **todo: creating a very basic DFP plugin with 1 ad block using the dummy code (see below) in the header as a ship item hopefully due by the end of the 3rd week**
      
      ```
      <!-- This is the GPT library that loads from http(s)://www.googletagservices.com/tag/js/gpt.js. -->
  	<script type="text/javascript">
		  var googletag = googletag || {};
		  googletag.cmd = googletag.cmd || [];
		  (function() {
		    var gads = document.createElement("script");
		    gads.async = true;
		    gads.type = "text/javascript";
		    var useSSL = "https:" == document.location.protocol;
		    gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
		    var node =document.getElementsByTagName("script")[0];
		    node.parentNode.insertBefore(gads, node);
		   })();
		</script>
		<!-- The GPT library ends -->
		<!-- Define slot and initiate GPT using enableServices method in the 
		googletag class -->
	  <script type="text/javascript">
	    googletag.cmd.push(function() {
	      var adSlot1 = googletag.defineSlot('/6355419/Travel/Europe/France/Paris',[300, 250], "banner1");
	      adSlot1.addService(googletag.pubads());
	      googletag.enableServices();
	    });
	  </script>
	  <!-- ends of this script -->
      ```
      
- Week 3 - Create Ad plugin: first step, shows boxes where ads should be on Discourse
      # **todo: creating a very basic DFP plugin with 1 ad block using the dummy code in the header as a ship item hopefully due by the end of the 3rd week**
	- Todo: Add plugin deets and template things out?
	- 	Packaging and installation for that 1 ad block
	- 	Testing in a live site? 
	- 	for more info on day-to-day tasks https://trello.com/b/jJRlPOCL/todo

- Package plugin for Distribution
  - Let's get a git repo for the project that doesn't include Discourse as outlined here (https://meta.discourse.org/t/beginners-guide-to-creating-discourse-plugins-part-4-git-setup/31272)
  - It should have a README with installation instructions
  - Don't forget to include yourselves as authors!
  
- Other ad provider: Adsense?
- Other ad provider: Amazon? (https://affiliate-program.amazon.com/)

- Ads every Nth post

- Custom ads:
  - When they don't want to use google.
  - Accept a list of uploaded images and links.
  - Show a random ad from the list
  - Click tracking

- Create acceptance tests for plugin component




