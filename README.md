# fu-loading
Loading component based on React.

# Included
```
fu-loading/
├── README.md
├── dist/
├── docs/
├── examples/
├── gulpfile.js
├── LICENSE
├── package.json
└── src/
```

# TODO
Add more themes and LoadingGroup component.

# Theme && Document

### Themes
- circle
  - &
  - &-fadeout
  - &-zoomfade
- ball
  - &-stream
  - &-bounce
- rect
  - &
  - &-series
  - &-stream

### Props
- `transparent`  `boolen`
  - `true`  transparent/white
  - `false`  nontransparent/colored

### Examples

[Examples](./examples/index.html)

```
<!-- container -->
<div id="circle"></div>
<div id="ball-bounce"></div>

// Loading component of circle theme rendered
ReactDOM.render(
  <Loading theme="circle" />,
  document.getElementById('circle')
);

// Loading component of nontransparent ball-bounce theme rendered
ReactDOM.render(
  <Loading theme="ball-bounce" transparent={false}/>,
  document.getElementById('ball-bounce')
);
```

![circle-trans](./docs/img/circle-trans.gif)
![ball-bounce](./docs/img/ball-bounce.gif)

### Demo

##### `circle`
![circle](./docs/img/circle.gif)
![circle-trans](./docs/img/circle-trans.gif)

##### `circle-fadeout`
![circle-fadeout](./docs/img/circle-fadeout.gif)
![circle-fadeout-trans](./docs/img/circle-fadeout-trans.gif)

##### `circle-zoomfade`
![circle-zoomfade](./docs/img/circle-zoomfade.gif)
![circle-zoomfade-trans](./docs/img/circle-zoomfade-trans.gif)

##### `ball-stream`
![ball-stream](./docs/img/ball-stream.gif)
![ball-stream-trans](./docs/img/ball-stream-trans.gif)

##### `ball-bounce`
![ball-bounce](./docs/img/ball-bounce.gif)
![ball-bounce-trans](./docs/img/ball-bounce-trans.gif)

##### `rect`
![rect](./docs/img/rect.gif)
![rect-trans](./docs/img/rect-trans.gif)

##### `rect-series`
![rect-series](./docs/img/rect-series.gif)
![rect-series-trans](./docs/img/rect-series-trans.gif)

##### `rect-stream`
![rect-stream](./docs/img/rect-stream.gif)
![rect-stream-trans](./docs/img/rect-stream-trans.gif)
