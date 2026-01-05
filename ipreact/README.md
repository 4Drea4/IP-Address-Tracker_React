# IP Tracker React Version
## Andrea E. Friday Jan. 2<sup>nd</sup> 2026

- [Link to the LIVE Project ](https://4drea4.github.io/IP-Address-Tracker_React/)
- [Link to FrontEndMentor Project](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)
- [Link to Leaflet](https://leafletjs.com/)
### Project Scope 
The goal of this project is to take the IP Address Tracker project originally done in HTML, CSS and Javascript and repurpose it for Typescript and React given what I now know. 

The IP Address Tracker uses the IP Geolocation API by IPify. Users are able to:
 - See their own IP Address on the map on the initial page load
 - Search for any IP Addresses or domains and see the key information and location
 - View the optimal layout for each page 
 - See hover states for all interactive elements on the page

### Reflection
 #### Development Process / High level overview: Planning
 - I set up the vite project
 - Began Outlining the project requirements 
 - I will build the UI first utilizing what I had in the last project
 - I have been reviewing my code and seeing where I can now implement React for rendering state, having a controlled form, and maybe validation.
 - Turn old logic into a custom hook
 - Deploy a live version 

 #### Challenges Faced
 I have been relying heavily on "What can I make react" as my frame of mind approaching this proejct and that is where I struggled translating functionality from JS into React while still trying to having a really good understanding of what logic should go where and like how and where to manage state and even how I could make form validation work in React. Something Im currently stumped on that I may have found a solution for is hiding my API key. I ran into some issues yesterday with the way my page was re-rendering causing automatic re-renders when trying to retrieve the users IP and then I ran into bugs because my API token expired.
 #### Solutions Implemented
 I have been trying to make it a lot easier on myself by making components centered around interactions done by myself (the user) and rendering when necessary. For form validation I reused a lot of my same logic as my old project.
 #### Potential Improvements
I originally planned to do the UI toward the beginning but I then awitched to do some of the harder tasks first like creating my custom hook, and fetching the data correctly UI. I think if doing this again I would probably add more custom hooks it does seem  redundant just because this current project is so small. Working through this did help me better understand how to better plan for props and components though because recognizing what will be needed and how many times is a plus.


- [Resources for a work around](https://www.youtube.com/watch?v=15CG6e5PLD4)
- [Hiding API Key](https://stackoverflow.com/questions/48699820/how-do-i-hide-an-api-key-in-create-react-app)
- [Set Data](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData)
- [Former Project](https://github.com/4Drea4/IP-Address-Tracker/tree/main?tab=readme-ov-file)