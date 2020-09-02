const title = 'This is '

const desc = 'This is the description'

const header = (
    <header>
    {/* THIS IS A COMMENT*/}

    {/* THIS IS A 
    MULTI LINE COMMENT*/}
<h1> {title} Ciarans REACT site</h1>


<p className="ClassIsaReservedWord"> {desc} </p>
    </header>
)
ReactDOM.render(
    header,
    document.getElementById('root')
);