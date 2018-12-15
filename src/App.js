import React, { Component } from 'react';
import { DatePicker,Layout } from 'antd'
import logo from './logo.svg';
import './App.css';

const {Header, Content, Sider} = Layout;

class App extends Component {

  onChange1 = (date, dateString) => {
    console.log(date, dateString);
  }
  render() {
    return (
      <div className="App">n
        <Layout>
          <Header>header</Header>
          <Layout>
            <Sider>sider</Sider>
            <Content>
              Content
              <p>vikas</p>
              <p>Pramod</p>
              <p>Manya</p>
              <div>
                <DatePicker />
              </div>
            </Content>
          </Layout>
        </Layout>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <DatePicker onChange={this.onChange1}/>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
