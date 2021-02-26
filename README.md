# react-blank
> Blank for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-blank
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | number | false    | -       | The blank height.                     |
| unit      | string | false    | 'px'    | The height style unit.                |


## usage
1. import css
  ```scss
  @import "~@jswork/react-blank/dist/style.css";

  // or use sass
  @import "~@jswork/react-blank/dist/style.scss";

  // customize your styles:
  $react-blank-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactBlank from '@jswork/react-blank';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-blank">
          <article className="message is-info">
            <div className="message-header">Article</div>
            <div className="message-body">
              <p>
                少年时，想碰到一个聂小倩，拼了性命爱一场，天亮前带着她的魂魄远走他乡。
              </p>
              <ReactBlank value={100} className="my-3 has-background-white"/>
              <p>
                青年时，想碰到一个白素贞，家大业大，要啥有啥，吃完软饭一抹嘴，还有人负责把她关进雷峰塔。
                中年时，想要一个田螺姑娘，温婉可人，红袖添香，半夜写累了，让她变回原形，加干辣椒、花椒、姜、蒜片爆炒，淋入香油，起锅装盘。
              </p>
            </div>
          </article>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-blank/


## license
Code released under [the MIT license](https://github.com/afeiship/react-blank/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-blank
[version-url]: https://npmjs.org/package/@jswork/react-blank

[license-image]: https://img.shields.io/npm/l/@jswork/react-blank
[license-url]: https://github.com/afeiship/react-blank/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-blank
[size-url]: https://github.com/afeiship/react-blank/blob/master/dist/react-blank.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-blank
[download-url]: https://www.npmjs.com/package/@jswork/react-blank
