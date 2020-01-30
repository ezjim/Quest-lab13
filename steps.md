Start with user log in page
Need name form  data needs to be stores via Localstorage
rules 

//////////map page //////////
image as background
locations (quest) with linking to new page via
User Info
Change page via window.location
Search Params
Hashmaps and "Dynamic" Object Properties
User Info
Treat user data like any other piece of data
Store game/quest/info on user object
Search Params

Communicate choices between pages with search params (aka query string):
const searchParams = new URLSearchParams(window.location.search);

Change Page
Use JavaScript to change the page:
window.location = `page/?id=${someId}`

////////////////////////////////QUEST  /////////////////////////////////////
                     /        IMAGE         /
                      /                    / 
                      discussion

                      choice 1
                      2
                      3
                      button            <<<<replace choice screen with result>>>>
are you losing or gaining hp? gold?
image after loss? or win?