# JE_Health_Lookup
A Firefox extension to look up the Food Health Rating of restaurants on the Just Eat search page.

This is quick Firefox addon to add the Hygiene ratings to restaurants within the Just Eat searchbar.

I got a bit sick of clicking on restaurants, only to see they had a hygiene rating of 1, so decided to make things a little easier :)

### How it works?

Just a quick JS fetch call to the API at hygieneratingscdn.je-apis.com using Just Eat's restaurant IDs. This returns a JSON object which has the rating image. That image just gets added to the card node.

### Permissions

The Extension requires access to call a WebRequest to the hygieneratings API, so it will need access to perform that