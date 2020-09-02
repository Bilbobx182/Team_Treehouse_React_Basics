const title = <h1>This is my title !</h1>

const desc = <p>This is the description</p>

const header = React.createElement (
    'header',
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);