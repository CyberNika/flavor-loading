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
![circle](./docs/img/circle.gif)

##### `circle-fadeout`
![circle-fadeout](./docs/img/circle-fadeout.gif)

##### `circle-zoomfade`
![circle-zoomfade](./docs/img/circle-zoomfade.gif)

##### `ball-stream`
![ball-stream](./docs/img/ball-stream.gif)

##### `ball-bounce`
![ball-bounce](./docs/img/ball-bounce.gif)

##### `rect`
![rect](./docs/img/rect.gif)

##### `rect-series`
![rect-series](./docs/img/rect-series.gif)

##### `rect-stream`
![rect-stream](./docs/img/rect-stream.gif)
