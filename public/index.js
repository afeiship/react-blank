import ReactBlank from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <p>
          少年时，想碰到一个聂小倩，拼了性命爱一场，天亮前带着她的魂魄远走他乡。
        </p>
        <ReactBlank value={100} />
        <p>
          青年时，想碰到一个白素贞，家大业大，要啥有啥，吃完软饭一抹嘴，还有人负责把她关进雷峰塔。
          中年时，想要一个田螺姑娘，温婉可人，红袖添香，半夜写累了，让她变回原形，加干辣椒、花椒、姜、蒜片爆炒，淋入香油，起锅装盘。
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
