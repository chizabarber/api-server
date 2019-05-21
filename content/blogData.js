// ------------------------------------------------------

const blog = {
    posts: [
        {
            id: 1,
            img: 'https://avatars1.githubusercontent.com/u/50642363?s=460&v=4',
            title: 'Pardon My Mess...',
            snippet: 'This will be the future home of my blog, which is being rendered isometrically on the server and the browser.',
            text: '_This_ will be the future home of my blog, which is being rendered isometrically on the server and the browser.'
        },
        {
            id: 2,
            img: 'https://avatars1.githubusercontent.com/u/50642363?s=460&v=4',
            title: '... As I Test My Blog',
            snippet: 'The content will render whether Javascript is turned on or off, and will remain SEO-accessible.',
            text: `<img src="https://avatars1.githubusercontent.com/u/50642363?s=460&v=4" alt="img" class="test-image">
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