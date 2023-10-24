# Hello there!

The goal of this exercise is to create an interface that searches
Flickr for photos matching some search term.
The index.js file already contains an <App/> component with
**a text field and a 'Search' button**. Let's start by adding
a few key features:

1. When text is entered and the 'Search' button is clicked,
   **ask the Flickr API for photos** related to the entered text

2. **Display a grid or list of thumbnails** showing the matching
   photos from Flickr at a small size

3. When clicked, the thumbnails should **link to a new tab/window**
   with the photo's detail page on Flickr

You'll need to use the _flickr.photos.search_ method provided
by the Flickr API. This requires an API key which we've already
generated for you.

**Flickr API key:** 45f3250ea1007f942d0e60c3d600da01

## API References

Information about what's included in the _flickr.photos.search_
API response:
https://www.flickr.com/services/api/flickr.photos.search.html

Information about how to construct URLs to thumbnail images
and photo detail pages:
https://www.flickr.com/services/api/misc.urls.html

## Interactive API explorer

This page can help you generate the right API request:
https://www.flickr.com/services/api/explore/flickr.photos.search

To get an example request/response:

1. Copy-paste the API key (45f3250ea1007f942d0e60c3d600da01)
   into the _api_key_ field
2. Enter some search text into the _text_ field
3. All the way at the bottom, click the _XML (REST)_ dropdown
   and choose _JSON_
4. Select _Do not sign call?_
5. Click _Call method..._

This should generate both an example JSON response
and a URL below. You can use this URL as an example of how
to make a valid API request to Flickr.
