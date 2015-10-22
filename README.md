# fu-loading
Loading component based on React.

# Include
```
fu-loading/
├── README.md
├── dist
├── docs
├── examples
├── gulpfile.js
├── LICENSE
├── package.json
└── src
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
  - &-steam
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
![circle](./docs/img/circle.gif)
![circle-fadeout](./docs/img/circle-fadeout.gif)
![circle-zoomfade](./docs/img/circle-zoomfade.gif)
![ball-steam](./docs/img/ball-steam.gif)
![ball-bounce](./docs/img/ball-bounce.gif)
![rect](./docs/img/rect.gif)
![rect-series](./docs/img/rect-series.gif)
![rect-stream](./docs/img/rect-stream.gif)
