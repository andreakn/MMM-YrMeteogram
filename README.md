# MagicMirror² Module: YrMeteogram

<img src="/images/screenshot.png" align="right"/>This is an UNofficial Yr module for [MagicMirror²](https://github.com/MichMich/MagicMirror), which displays a meteogram from [Yr](https://www.yr.no/nb/).
To find your locationId and check whether it will work: 
- search for your location, 
- press the "..." button in top right
- and select "forecast as SVG" / "værvarsel som SVG"

if you get a meteogram looking something something like this: ![image](https://www.yr.no/nb/innhold/1-72837/meteogram.svg) then it will work. 

you can extract the id from the url. the url is on the form:

https://www.yr.no/(locale)/('content')/(THE-ID)/meteogram.svg

## How to install

Remote into your Magic Mirror box using a terminal software and go to the modules folder:

    cd ~/MagicMirror/modules

Clone the repository:

	git clone https://github.com/andreakn/MMM-YrMeteogram

Add the module to the modules array in the config/config.js file by adding the following section. You can change this configuration later when you see this works:

	{
		module: 'MMM-YrMeteogram',
		position: 'top_center',
		config: {
			locationId: '1-73738'
		}
	},

## Configuration options

<table style="width:100%">
	<tr>
		<th>Option</th>
		<th>Comment</th>
		<th>Default</th>
	</tr>
	<tr>
		<td>locationId</td>
		<td>The unique Id found in the Url of any location on <a href="https://www.yr.no/nb/liste/dag/1-73738/Norge/Oslo/Oslo/Blindern">Yr</a> I.e. Blindern (Oslo)</td>
		<td>1-73738</td>
	</tr>
	<tr>
		<td>yrMeteogramUrl</td>
		<td>The meteogram-url-format to use. If you want english texts you can replace this with https://www.yr.no/en/content/%s/meteogram.svg</td>
		<td>https://www.yr.no/nb/innhold/%s/meteogram.svg</td>
	</tr>
</table>
