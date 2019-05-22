// ------------------------------------------------------

const blog = {
    posts: [
        {
            id: 1,
            img: 'https://avatars1.githubusercontent.com/u/50642363?s=460&v=4',
            title: 'An Introduction',
            snippet: 'To get something out of the way, yes — I am aware that between ChizaBarber.com and ChizaBarber.dev, visitors to my site(s) may be confused...',
            text: `<img src="https://avatars1.githubusercontent.com/u/50642363?s=460&v=4" alt="img" class="test-image">
            <p>
                To get something out of the way, yes — I am aware that between <a href="https://www.chizabarber.com">ChizaBarber.com</a> and <a href="https://www.chizabarber.dev">ChizaBarber.dev</a>, visitors to my site(s) may be confused about what it is that I actually <em>do</em>, and what kind of position I'm trying to get into. 
            </p>
            <blockquote>
                <p><i>&quot;Is she a developer or an administrator or what?&quot;</i></p>
            </blockquote>
            <p>
                Point taken. For the purpose of quick employment, it would probably be in my best interest to buckle down on one or the other. There aren't (m)any developer jobs on the market needing people with admin experience, or vice versa.
            </p>
            <p>
                However, it feels disingenuous to leave out aspects of my skillset simply to send a more targeted message. As my sites evolve, it's my hope that I'll find my target audience in those employers who are not confused by, or dismissive of, my mishmash of skills. Mainly because my mishmash is exactly what they need.
            </p>
            <h5 class="blog-subtitle center-align">
                All The Hats
            </h5>
            <p>
                I've only ever worked for smaller companies. These include family-owned businesses, startups, and even a small game developer. What I liked best about these jobs was that, <em>because</em> the companies were small, I had the opportunity to wear multiple hats and take initiative on projects not specific to my job title.
            </p>
            <p>
                While an employer may be thrilled to have a team member who goes above and beyond their official responsibilities, I'll admit my intentions were not altogether altruistic. See, I only took on side projects that I <em>wanted</em> to, because they were in line with my passion for digital communication.
            </p>
            <h5 class="blog-subtitle center-align">
                The Digital Space
            </h5>
            <p>
                Ever since my love affair with the internet began in the early 90's, I have been collecting skills relevant to the digital space. These include copy writing, graphic design, blogging and webmastering, social media and email marketing / management, and most recently, full-stack web development.
            </p>
            <p>
                I've worked in customer support and office administration roles for more than a decade. The skills I listed above might seem irrelevant to those roles, but they stood me in good stead as my employers moved to more tech-based solutions for their teams and customers, and as I moved into more tech-related industries. Being the quickest team member to learn new tools and systems, I've often been tasked with teaching others and implementing new tools to streamline our processes.
            </p>
            <p>
                Invariably I would run into a problem so specific to my team's needs that no solution for it existed on the market yet — or if it did, it was too expensive or one-size-fits-all to be helpful. This is what inspired me to stop puttering around with free coding courses online and finally enroll in a <a href="https://www.digitalcrafts.com/">coding bootcamp</a>. If I wanted custom solutions, why not make them myself?
            </p>
            <h5 class="blog-subtitle center-align">
                A Custom Solution
            </h5>
            <p>
                In the end, that's what I love to do. I believe that most problems can be solved by imparting clarity to an issue; the challenge is in communicating effectively enough so that clarity actually emerges from the chaos. While nothing can replace personal communication with clients and customers or between team members, there is something equally irreplaceable about communication via the digital medium.
            </p>
            <p>
                Everything from Trello scrum boards, to data-vis dashboards, to LinkedIn infographics, to Facebook ad campaigns are essentially about the same thing. It's a message that <em>stays</em>. It's information that can be acted upon.
            </p>
            <p>
                I realize that most companies employ teams to handle the various aspects of digital communication — both internally and externally. Time is of the essence, after all. But my experience has taught me that every company's needs are different. Your company might be in need of someone to fill a hybrid role. Or maybe you need an admin who can competently speak to teams of disparate disciplines.
            </p>
            <p>
                Take a look at my <a href="https://www.chizabarber.com/chizabarber-resume.pdf">resume</a> and my <a href="https://www.chizabarber.com">homepage</a> to see what I can do. Contact me via <a href="mailto:admin@chizabarber.com">email</a> or <a href="https://www.linkedin.com/in/chiza-barber">LinkedIn</a>, and we'll find out if I could be a custom solution for you.
            </p>`
        },
        {
            id: 2,
            img: 'https://avatars1.githubusercontent.com/u/50642363?s=460&v=4',
            title: 'Pardon My Mess...',
            snippet: '... As I test my blog. This will be the future home of my blog, which is being rendered isometrically on the server and the browser.',
            text: `<img src="https://avatars1.githubusercontent.com/u/50642363?s=460&v=4" alt="img" class="test-image">
            <p>
                This will be the future home of my blog, which is being rendered isometrically on the server and the browser. The content will render whether Javascript is turned on or off, and will remain SEO-accessible.
            </p>
            <p>
                Testing react-markdown <i>now</i>.
            </p>
            <p>
                Need to see if the paragraphs will render as intended.
            </p>
            <p>
                As well as text <b>formatting</b>.
            </p>
            <blockquote>
                <i>Testing out the blockquote</i>
            </blockquote>
            <p>
                And the <a href="https://www.chizabarber.com">links</a> also.
            </p>
            <p>
                The data for this blog is being requested from <b>api-server</b> at <a href="https://www.chizabarber.dev">ChizaBarber.dev</a> as an HTML string. It is then converted to a React component on the <b>ssr-server</b> side using <a href="https://github.com/rexxars/react-markdown">react-markdown</a> by rexxars.
            </p>`
        }
    ]
}

// ------------------------------------------------------
module.exports = blog
// ------------------------------------------------------