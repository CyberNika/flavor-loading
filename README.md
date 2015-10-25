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
```
<!-- container -->
<div id="circle"></div>

// Loading component of circle theme rendered
ReactDOM.render(
  <Loading theme="circle" />,
  document.getElementById('circle')
);

```

### Demo

##### `circle`
![circle-trans](./docs/img/circle-trans.gif)
![circle](./docs/img/circle.gif)

##### `circle-fadeout`
![circle-fadeout-trans](./docs/img/circle-fadeout-trans.gif)
![circle-fadeout](./docs/img/circle-fadeout.gif)

##### `circle-zoomfade`
![circle-zoomfade-trans](./docs/img/circle-zoomfade-trans.gif)
![circle-zoomfade](./docs/img/circle-zoomfade.gif)

##### `ball-stream`
![ball-stream-trans](./docs/img/ball-stream-trans.gif)
![ball-stream](./docs/img/ball-stream.gif)

##### `ball-bounce`
![ball-bounce-trans](./docs/img/ball-bounce-trans.gif)
![ball-bounce](./docs/img/ball-bounce.gif)

##### `rect`
![rect-trans](./docs/img/rect-trans.gif)
![rect](./docs/img/rect.gif)

##### `rect-series`
![rect-series-trans](./docs/img/rect-series-trans.gif)
![rect-series](./docs/img/rect-series.gif)

##### `rect-stream`
![rect-stream-trans](./docs/img/rect-stream-trans.gif)
![rect-stream](./docs/img/rect-stream.gif)
