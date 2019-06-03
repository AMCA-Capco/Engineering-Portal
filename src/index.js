import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Card from './components/Card';
import NavBar from './components/NavBar';
import mainLogo from'./images/logo.png';
var data = require('./MockData.json');

const App = () => {
    return (
    <div>
        <NavBar image={mainLogo}/>

        <div className="card-container">
            <Card title={data[0].title} image={faker.image.business()} description={data[0].description} version={data[0].version} owner={data[0].owner} link={data[0].link}/>
            <Card title={data[1].title} image={faker.image.business()} description={data[1].description} version={data[1].version} owner={data[1].owner} link={data[1].link}/>
            <Card title={data[2].title} image={faker.image.business()} description={data[2].description} version={data[2].version} owner={data[2].owner} link={data[3].link}/>
            <Card title={data[3].title} image={faker.image.business()} description={data[3].description} version={data[3].version} owner={data[3].owner} link={data[3].link}/>

        </div>
    </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));