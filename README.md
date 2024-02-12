<h1>IntechJobs</h1>
inTech is a full-stack web application developed as part of a team project using the MERN stack. Our goal was to create a platform where Junior Developers can search and apply for Entry-Level job postings. With a team of three developers, we completed the project within a timeframe of five days. My responsibilties included both the front end and back end.
</br>
<h3>Live Link</h3>
Explore the live version of IntechJobs here.

<h3>Brief Overview</h3>
Objective: Create a full-stack app using the MERN stack.
Team Size: 3 developers.
Timeframe: 5 days.
</br>
<h3>Features</h3>
Job Search: Users can search for technology-related job postings using location and salary filters.
Job Listings: Display of job listings with essential details such as job title, company name, location, and description.
User Authentication: Sign up, login, and be able to track your job application after saving a job to your profile.

<h3>Technologies Used</h3>

Frontend: React.js, HTML, CSS, JavaScript, Bootstrap
Backend: Node.js, Express.js, MongoDB
Authentication: JSON Web Tokens (JWT)
Deployment: Netlify (Frontend/Backend), MongoDB Atlas (Database)

<h1>Day 1</h1>

#### Brainstorming and Conceptualization

During the initial phase of the project, our team engaged in brainstorming sessions to generate ideas and outline the concept of IntechJobs. We utilized Excalidraw, a collaborative whiteboarding tool, to sketch out our ideas visually. This allowed us to visualize the project's structure, features, and user flow.

#### Excalidraw Sketches

I used Excalidraw to create sketches outlining the following aspects of IntechJobs:

- **User Interface Wireframes:** Rough sketches of the UI components, layouts, and navigation flow.
- **Database Schema:** Diagrams representing the structure of our MongoDB database, including collections, documents, and relationships.
</br>
<img width="1032" alt="Screenshot 2024-02-01 at 15 35 43" src="https://github.com/tamistyping/InTechFrontend/assets/114356636/c2c04be4-96aa-443f-bea1-03fc69debeba">
</br>

#### Trello Board Setup

To streamline project management and task tracking, we established a Trello board. Trello provided us with a flexible and intuitive platform to organize our tasks, assign responsibilities, and track progress throughout the development cycle.

##### Trello Board Sections:

1. **To-Do:** This section contained a list of all tasks that needed to be completed.
2. **In Progress:** Tasks that were actively being worked on by team members.
3. **Review:** Completed tasks awaiting review by other team members.
4. **Done:** Tasks that were successfully completed and reviewed.

#### Backend Setup

Whilst teammates worked on creating pages and components in the frontend, I focused on setting up the backend infrastructure. This involved:

- Configuring the server using Node.js and Express.js.
- Implementing RESTful APIs to handle CRUD operations for user authentication.

#### Git Collaboration

In addition to backend setup, I also spent time assisting team members with Git-related tasks such as creating branches, pulling changes, and resolving merge conflicts.

<h1>Day 2</h1>

On the second day of development, we focused on enhancing the security of our application and ensuring the backend functionality was robust. Additionally, we made progress in setting up the frontend environment by installing relevant dependencies.

## Backend Security

To improve the security of our application, I implemented bcrypt for password hashing and JWT (JSON Web Tokens) for user authentication.

## Backend Testing

I tested the backend functionality by using Postman to send requests to the User endpoints. This allowed me to verify that the routes were properly configured and that I didn't mess things up!

## Frontend Dependencies

Once the backend was working, we installed relevant dependencies on the frontend. These dependencies are essential for building the user interface and integrating with the backend API. By installing the necessary frontend libraries and tools, we prepared the frontend environment for further development.

## Next Steps

With backend security measures in place, backend functionality thoroughly tested, and frontend dependencies installed, we were ready to move forward with the implementation of core features and user interfaces.

<h1>Day 3</h1>
Data Fetching and User Authorization
On the third day of our project, our focus shifted towards integrating external data sources and enhancing user authentication functionalities. Here's a breakdown of the key tasks accomplished:

<h4>Adzuna API Integration</h4>

#### Data Retrieval: 
We successfully implemented functionality to fetch job listings from the Adzuna API. This involved sending requests to the API endpoints and processing the returned data to display relevant job opportunities within our platform.
#### User Authorization Enhancement
Authentication: I worked on enhancing the user authorization system, ensuring secure login and registration processes for IntechJobs users. This included implementing encryption methods to protect user credentials and setting up authentication middleware to validate user sessions.
#### Submit Button Functionality
Login Form Enhancement: Collaborating with my teammate who created the login form, I implemented functionality for the submit button. This included validation checks for user input and handling form submission events to authenticate users and grant access to the platform.
Trello Board Update
We maintained our Trello board to track the progress of tasks related to data fetching, user authorization, and form functionality:

Overall, day 3 marked significant progress in enhancing IntechJobs' functionality by integrating external data sources and fortifying user authentication mechanisms.

<h1>Day 4</h1>

## Bug Fixing and Data Refactoring
I started the fourth day addressing a critical bug, refactoring data fetching processes, and implementing additional user interface enhancements.

## Bug Fix: Persistent User Session
Identification: My teammate identified a bug where users were being logged out after refreshing the page. This issue was traced back to the handling of authentication tokens.
Debugging: Utilizing Chrome DevTools, I conducted thorough testing to analyze the behavior of authentication tokens across page refreshes, confirming the root cause of the bug.
Resolution: I implemented a fix to ensure that user sessions remain persistent even after page refreshes, thus enhancing the overall user experience.
## Data Fetching Refactoring
I moved the data fetching from Adzuna logic from the job card component to the job list page, enabling easier data sharing across multiple components.
## Pagination Implementation: 
To improve performance and user experience, I implemented pagination by limiting the number of job cards displayed on the job list page and adding a "Load More" button for users to fetch additional listings as needed.
## User Interface Enhancements
Back to Top Button: I added a convenient "Back to Top" button to facilitate smoother navigation within the application, enhancing user accessibility and convenience (it scrolls smoothly to the top, I found it so satisfying to click).
## Filter Functionality
Location and Salary Filters: I implemented filters based on job location and salary range to allow users to refine their job search results.
Bug Fix: During testing, I encountered a bug where both filters couldn't be applied simultaneously, leading to unexpected behavior. I left it to the next day...

## This is how our page was looking so far.

<img width="980" alt="Screenshot 2024-02-12 at 08 19 52" src="https://github.com/tamistyping/InTechFrontend/assets/114356636/d5044f07-3a47-420c-a4c4-c423ffc38ec5">


<h1>Day 5</h1>

Today was a productive day. I started off by giving our website a facelift, tweaking various CSS and Bootstrap elements to enhance the overall look and feel. After spending some time experimenting with CSS and getting inspiration from online examples, I managed to revamp the job list page to look more polished and professional. You can check out the updated look here 

![Screenshot 2024-02-08 at 14 32 17](https://github.com/tamistyping/InTechFrontend/assets/114356636/1932b396-a10f-4fd3-89ba-e0ae8c544afa)

I also took the opportunity to add some extra pages to the NavBar, expanding the website's functionality, which I planned to work on later in the evening.

The highlight of the day was tackling the filter bug. It turned out to be quite a challenge and ended up taking the majority of my time. I had to completely rewrite both filter functions into a single, cohesive function to address the issue properly. But after some persistence and effort, I managed to iron out the bugs and ensure that the filters were working seamlessly. It was a satisfying end to the day, knowing that I had overcome a significant hurdle in our project development.

I added some extra pages which can be seen in the NavBar which I'd be working on later in the evening.

I spent the rest of the day fixing the filter bug... (it took me a whole day as I had to re-write both filter functions into one function).


<h1>Day 5</h1>
It's the final day, and we're putting the finishing touches on our project to ensure it's polished and ready for presentation!

#### Team Collaboration: 
We divided the tasks among the team members to make the entire website mobile-friendly. It was crucial to ensure that our platform was accessible and usable across different devices.

#### Completion of CV Templates and About Us Page: 
The previous evening, I wrapped up the CV Templates feature and finalized the About Us page. Users can now download their preferred CV template from the CV Templates page, adding more value to our platform.

#### Mobile-Friendly Optimization: 
Once the mobile-friendly adjustments were made, we conducted a thorough review of the entire website. Each part was meticulously tested to ensure smooth functionality and a seamless user experience on all devices. We were delighted with the outcome, seeing our efforts come together seamlessly.

#### Final Tweaks: 
With a few hours left before the presentation, I made some additional tweaks to further enhance the website:

#### Devicon Addition: 
I added a Devicon to the page to add visual appeal and enrich the user interface.
#### Job Title Editing:
To improve readability, I limited the job titles on the job cards to a maximum of three words, addressing lengthy titles that could potentially disrupt the layout.
#### Data Import: 
I fetched and imported the data from the API to the job detail page, ensuring users have access to comprehensive information about each job listing.
#### Profile Section Enhancement: 
In the profile section, where users can save jobs to their profile, I introduced a select option allowing users to categorize saved jobs as 'applied, interviewing, hired.' Each selection changes the background style of the saved job card, enhancing organization and user experience.
With these final tweaks in place, our project was ready for presentation. We felt proud of our accomplishment and confident in the quality of our work.

<img width="740" alt="Screenshot 2024-02-09 at 08 49 08" src="https://github.com/tamistyping/InTechFrontend/assets/114356636/24a22636-17f6-4e9f-9111-52af26cece8c">


<h2>Improvements</h2>

 - Something I really wanted to implement but didn't have time to was a dark mode/light mode option.
 - I would've wanted to add more filters in as a job title filter would've been handy!
 - Adding in a sort function where for example a user could sort jobs from highest paid to lowest paid.
 - Allow users to change their password/username/email

<h2>Wins</h2>
- Developing the frontend with React not only enhanced the user interface but also strengthened my grasp on component-based architecture and state management, thanks to features like hooks and useContext.
- Excellent planning! Before diving into the project, we conducted comprehensive research and analysis to understand its scope, requirements, and potential challenges. This groundwork laid a solid foundation for our planning efforts.


