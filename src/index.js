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
            <Card title={data[0].title} image={data[0].imageUrl} description={data[0].description} version={data[0].version} owner={data[0].owner} ownerImage={data[0].ownerImageUrl} link={data[0].link}/>
            <Card title={data[1].title} image={data[1].imageUrl} description={data[1].description} version={data[1].version} owner={data[1].owner} ownerImage={data[1].ownerImageUrl} link={data[1].link}/>
            <Card title={data[2].title} image={data[2].imageUrl} description={data[2].description} version={data[2].version} owner={data[2].owner} ownerImage={data[2].ownerImageUrl} link={data[3].link}/>
            <Card title={data[3].title} image={data[3].imageUrl} description={data[3].description} version={data[3].version} owner={data[3].owner} ownerImage={data[3].ownerImageUrl} link={data[3].link}/>

        </div>
    </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));