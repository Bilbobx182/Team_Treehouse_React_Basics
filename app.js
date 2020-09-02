const title = React.createElement(
    'h1',
    {id : 'main-title',title : 'This is a title'},
    'Hello World'
);

const desc = React.createElement (
    'p',
    null,
    'This is child p with empty props'
);

const header = React.createElement (
    'header',
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);