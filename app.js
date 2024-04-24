const axios = require('axios');
const notifier = require('node-notifier');

const websiteURL = 'https://shop.royalchallengers.com/ticket'; // Replace with the URL you want to monitor
const searchString = 'Chennai Super'; // Replace with the string you want to check for

// Function to fetch website content
async function fetchWebsiteContent(url) {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error('Failed to fetch website content. Status code:', response.status);
            return null;
        }
    } catch (error) {
        console.error('An error occurred while fetching website content:', error.message);
        return null;
    }
}

// Function to check if a specific string is present
async function checkForStringPresence(url, searchString) {
    const content = await fetchWebsiteContent(url);
    if (content !== null && content.includes(searchString)) {
        console.log('The specific string is present on the webpage!');
        notifier.notify({
            title: 'Website Monitor',
            message: `The specific string "${searchString}" is present on the webpage.`
        });
    } else {
        console.log('The specific string is not present on the webpage.');
    }
}

// Main function
async function main() {
    while (true) {
        const timestamp = new Date().toLocaleString();
        console.log(`${timestamp}: Checking website...`);
        await checkForStringPresence(websiteURL, searchString);
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 1 minute (60000 milliseconds)
    }
}

main().catch(error => console.error('An error occurred:', error));
