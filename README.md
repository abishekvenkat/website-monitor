### Website Monitor

Simple program to check if a specific string is introduced to a webpage. Makes GET requests every x minutes. Helpful for booking tickets. It's better not to set the frequency of the calls to anything less than a few minutes as you could be considered as a threat/DDoS.

There is a dependency for toast notifications -

```
npm install axios node-notifier
```

Make sure to change the websiteURL and the searchString variables

```
const websiteURL = 'https://your-website.com';
const searchString = 'yourSearchString';
```
