'use strict';

//  ==================================================
//  Component: Loading
//
//  Props: theme: string, transparent: boolen
//
//  Include: LoadingItem
//
//  Theme: Circle(&, &-Fadeout, &-Zoomfade) Ball(&-Steam, &-Bounce) Rect(&, &-Series, &-Stream)
//
//  Description: Jsx for Loading
//
//  TODO:
//  ==================================================

var LoadingItem = {};

/* LoadingItem.Circle */
LoadingItem.Circle = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="spinner circle"></div>
    );
  }
};

/* LoadingItem.CircleFadeout */
LoadingItem.CircleFadeout = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="spinner circle-fadeout"></div>
    );
  }
};

/* LoadingItem.CircleZoomfade */
LoadingItem.CircleZoomfade = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="spinner circle-zoomfade">
        <span className="item-0"></span>
        <span className="item-1"></span>
      </div>
    );
  }
};

/* LoadingItem.Ballstream */
LoadingItem.Ballstream = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="spinner ball-stream">
        <span className="item-0"></span>
        <span className="item-1"></span>
        <span className="item-2"></span>
      </div>
    );
  }
};

/* LoadingItem.BallBounce */
LoadingItem.BallBounce = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="spinner ball-bounce">
        <span className="item-0"></span>
        <span className="item-1"></span>
        <span className="item-2"></span>
        <span className="item-3"></span>
      </div>
    );
  }
};

/* LoadingItem.Rect */
LoadingItem.Rect = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="spinner rect"></div>
    );
  }
};

/* LoadingItem.RectSeries */
LoadingItem.RectSeries = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="spinner rect-series">
        <span className="item-0"></span>
        <span className="item-1"></span>
        <span className="item-2"></span>
        <span className="item-3"></span>
        <span className="item-4"></span>
      </div>
    );
  }
};

/* LoadingItem.RectSeries */
LoadingItem.Rectstream = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="spinner rect-stream">
        <span className="item-0"></span>
        <span className="item-1"></span>
        <span className="item-2"></span>
      </div>
    );
  }
};

/* LoadingItem.Square */
LoadingItem.Square = class ItemClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="square">
        <div>square</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
};

/* Loading */
class Loading extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    var loadingItem;
    var theme = this.props.theme;
    var loadingClass = this.props.transparent || this.props.transparent === undefined ? "loading trans" : "loading";

    switch (theme) {
      case 'circle':
        loadingItem = <LoadingItem.Circle />;
        break;
      case 'circle-fadeout':
        loadingItem = <LoadingItem.CircleFadeout />;
        break;
      case 'circle-zoomfade':
        loadingItem = <LoadingItem.CircleZoomfade />;
        break;
      case 'ball-stream':
        loadingItem = <LoadingItem.Ballstream />;
        break;
      case 'ball-bounce':
        loadingItem = <LoadingItem.BallBounce />;
        break;
      case 'rect':
        loadingItem = <LoadingItem.Rect />;
        break;
      case 'rect-series':
        loadingItem = <LoadingItem.RectSeries />;
        break;
      case 'rect-stream':
        loadingItem = <LoadingItem.Rectstream />;
        break;
      default:
        loadingItem = <LoadingItem.Circle />;
    }

    return (
      <div className={loadingClass}>
        {loadingItem}
      </div>
    );
  }
}
