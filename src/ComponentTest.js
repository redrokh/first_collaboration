//import ReactDOM from 'react-dom';

function ComponentTest(props) {
    return (
        <div>
            <h1>Je suis un composant test.</h1>
            <p>Valeur du props test : {props.test}</p>
        </div>
    );
}

/* const element = <ComponentTest test="ça marche" />
ReactDOM.render(
    element,
    document.getElementById('root')
); */
export default ComponentTest;