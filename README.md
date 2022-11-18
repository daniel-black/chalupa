This is attempt number three because I first have to get going and then I can get good

### Plan of attack:
pages:

---

## /
Landing page. Links to search and other pages.

---

I already changed my mind. Might just go with /jobs/{jobId}

## /search 

Search page. Searching for results brings you to `/search/jobs?{querystring}` where the query string is the params from search like location and job title.

---

## /search/jobs

All the job listings for a particular search will live here. This route should have query params. Each job listing will have a link to that job's page. 
 
---

## /search/jobs/{jobId}
 
This will be the page for an individual job. From this page, users should be able to navigate back to the original search results