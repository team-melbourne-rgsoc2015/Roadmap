### Documentation for Ad Plugin.

This documentation accompanies our wireframe and video.
It shows what we think users could do and the data needed.  We've only looked at adsense for now as a base.  
It also has questions we have on it - we'd love to chat about these question on Tuesday (your Monday night) Robin! :-)


#### Ad Plugin Interface Wireframe and Explanation Video

Here's how we think the interface could work:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=Ifjfpdk3i_U
" target="_blank"><img src="http://img.youtube.com/vi/Ifjfpdk3i_U/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

You can also download the wireframe at this link (Balsamiq): https://drive.google.com/open?id=0BzxRUlDjwAFeMW9VeTlsWVJNR0E


#### What Users Can Do

Users can:

* Select an ad platform
* Input their publisher ID for their ad platform
* See a list of available locations that the ad can show in a preview
* Select a location to place their ad
* Place their ad in the selected location by:<br />
	↳ selecting a permitted size<br />
	↳ inputting their ad code
* See their ad in the location in the preview when it has been created.
* Disable or re-enable the running of their ad
* Destroy their ad and the location will become available again.


#### Data

Ad plugin<br />
  ↳ has many: Ad platforms<br />
  	&nbsp;&nbsp;input properties: publisher ID<br />
		&nbsp;&nbsp;↳ has many: Locations<br />
			&nbsp;&nbsp;&nbsp;↳ has one: Ad units (show, destroy, pause and enable)<br />
				&nbsp;&nbsp;&nbsp;input properties: ad code<br />
				&nbsp;&nbsp;&nbsp;&nbsp;↳ has size (height x width)<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ is restricted by location.<br />


#### Questions

1. What are your thoughts on this wireframe?
2. What's the easiest way to create these associations in a plugin?
3. How could size and location data be stored (see data) if the plugin comes with various preset sizes?


#### Proposed Next Steps

Here's how we think the next steps would be:

- Make adsense plugin work with components and not initializers.
- Refactor the adsense plugin into a structure that enables the wireframe.
- Create a location preview.
- Create a drop down for sizes.
- Make it visually appealing.
