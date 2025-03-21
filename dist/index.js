function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function noop(returnVal) {
  return function () {
    return returnVal;
  };
}

var Cell = function Cell(_ref) {
  var _ref$render = _ref.render,
      render = _ref$render === void 0 ? noop(null) : _ref$render,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? noop({}) : _ref$style,
      ratio = _ref.ratio,
      posX = _ref.posX,
      posY = _ref.posY,
      _ref$square = _ref.square,
      square = _ref$square === void 0 ? false : _ref$square,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '2rem' : _ref$height,
      value = _ref.value,
      _onClick = _ref.onClick,
      _ref$extraProps = _ref.extraProps,
      extraProps = _ref$extraProps === void 0 ? noop({}) : _ref$extraProps;
  return /*#__PURE__*/React__default.createElement("div", _extends({
    onClick: function onClick() {
      return (_onClick || noop({}))(posX, posY);
    },
    style: _extends({
      borderStyle: 'solid',
      borderColor: '#fff',
      borderWidth: '1px 1px 0 0',
      textAlign: 'center',
      color: "rgb(0, 0, 0, " + (ratio / 2 + 0.4) + ")",
      overflow: 'hidden',
      boxSizing: 'border-box',
      flexGrow: square ? 0 : 1,
      flexBasis: square ? height : 0,
      flexShrink: 0,
      height: height,
      lineHeight: height,
      borderRadius: '4px',
      fontSize: '.8rem',
      cursor: _onClick ? 'pointer' : 'initial',
      backgroundColor: "rgb(12, 160, 44, " + (ratio + 0.05) + ")"
    }, style(posX, posY, ratio))
  }, extraProps(posX, posY, value)), render(posX, posY, value));
};

var Cell$1 = React__default.memo(Cell);

function Row(_ref) {
  var children = _ref.children,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse;
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      justifyContent: reverse ? 'flex-end' : 'initial'
    }
  }, children);
}

function XLabels(_ref) {
  var labels = _ref.labels,
      _ref$xLabelsStyle = _ref.xLabelsStyle,
      xLabelsStyle = _ref$xLabelsStyle === void 0 ? function () {
    return {};
  } : _ref$xLabelsStyle,
      height = _ref.height,
      _ref$square = _ref.square,
      square = _ref$square === void 0 ? false : _ref$square;
  var widthPercent = 100 / labels.length + "%";
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: 'flex',
      textAlign: 'center'
    }
  }, labels.map(function (label, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: label + "-" + index,
      style: _extends({
        padding: '0.2rem 0',
        boxSizing: 'border-box',
        flexGrow: square ? 'initial' : 1,
        overflow: 'hidden',
        flexShrink: 1,
        flexBasis: square ? height : widthPercent,
        width: square ? height : widthPercent
      }, xLabelsStyle(index))
    }, label);
  }));
}

function Column(_ref) {
  var children = _ref.children,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? false : _ref$grow,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse;
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: reverse ? 'column-reverse' : 'column',
      flexGrow: grow ? 1 : 0
    }
  }, children);
}

function YLabels(_ref) {
  var labels = _ref.labels,
      height = _ref.height,
      _ref$yLabelsStyle = _ref.yLabelsStyle,
      yLabelsStyle = _ref$yLabelsStyle === void 0 ? function () {
    return {};
  } : _ref$yLabelsStyle,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse;
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: reverse ? 'left' : 'right'
    }
  }, labels.map(function (label, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: label,
      style: _extends({
        boxSizing: 'border-box',
        padding: '0 0.2rem',
        lineHeight: height
      }, yLabelsStyle(index))
    }, label);
  }));
}

function YLabelAligner(_ref) {
  var _style;

  var xLabelHeight = _ref.xLabelHeight,
      isXLabelReverse = _ref.isXLabelReverse,
      children = _ref.children;
  var style = (_style = {}, _style[isXLabelReverse ? 'marginBottom' : 'marginTop'] = xLabelHeight + "px", _style);
  return /*#__PURE__*/React__default.createElement("div", {
    style: style
  }, children);
}

function useElementHeight(initHeight) {
  var eleRef = React__default.useRef(null);

  var _React$useState = React__default.useState(initHeight),
      eleHeight = _React$useState[0],
      setEleHeight = _React$useState[1];

  React__default.useEffect(function () {
    if (eleRef.current) {
      var height = (eleRef.current || {}).clientHeight;
      setEleHeight(height);
    }
  }, []);
  return [eleHeight, eleRef];
}

function getMinMax(data) {
  var flatArray = data.reduce(function (i, o) {
    return [].concat(o, i);
  }, []);
  var max = Math.max.apply(Math, flatArray);
  var min = Math.min.apply(Math, flatArray);
  return [min, max];
}

var HeatMapGrid = function HeatMapGrid(_ref) {
  var data = _ref.data,
      xLabels = _ref.xLabels,
      yLabels = _ref.yLabels,
      _ref$xLabelsPos = _ref.xLabelsPos,
      xLabelsPos = _ref$xLabelsPos === void 0 ? 'top' : _ref$xLabelsPos,
      _ref$yLabelsPos = _ref.yLabelsPos,
      yLabelsPos = _ref$yLabelsPos === void 0 ? 'left' : _ref$yLabelsPos,
      _ref$square = _ref.square,
      square = _ref$square === void 0 ? false : _ref$square,
      _ref$cellHeight = _ref.cellHeight,
      cellHeight = _ref$cellHeight === void 0 ? '2px' : _ref$cellHeight,
      xLabelsStyle = _ref.xLabelsStyle,
      yLabelsStyle = _ref.yLabelsStyle,
      cellStyle = _ref.cellStyle,
      cellRender = _ref.cellRender,
      cellExtraProps = _ref.cellExtraProps,
      onClick = _ref.onClick;

  var _useElementHeight = useElementHeight(22),
      xLabelHeight = _useElementHeight[0],
      xLabelRef = _useElementHeight[1];

  var _getMinMax = getMinMax(data),
      min = _getMinMax[0],
      max = _getMinMax[1];

  var minMaxDiff = max - min;
  var isXLabelReverse = xLabelsPos === 'bottom';
  var isYLabelReverse = yLabelsPos === 'right';
  return /*#__PURE__*/React.createElement(Row, {
    reverse: isYLabelReverse
  }, yLabels && /*#__PURE__*/React.createElement(YLabelAligner, {
    xLabelHeight: xLabelHeight,
    isXLabelReverse: isXLabelReverse
  }, /*#__PURE__*/React.createElement(YLabels, {
    reverse: isYLabelReverse,
    labels: yLabels,
    height: cellHeight,
    yLabelsStyle: yLabelsStyle
  })), /*#__PURE__*/React.createElement(Column, {
    reverse: isXLabelReverse,
    grow: !square
  }, /*#__PURE__*/React.createElement("div", {
    ref: xLabelRef
  }, xLabels && /*#__PURE__*/React.createElement(XLabels, {
    labels: xLabels,
    xLabelsStyle: xLabelsStyle,
    height: cellHeight,
    square: square
  })), /*#__PURE__*/React.createElement(Column, null, data.map(function (rowItems, xi) {
    return /*#__PURE__*/React.createElement(Row, {
      key: xi
    }, rowItems.map(function (value, yi) {
      return /*#__PURE__*/React.createElement(Cell$1, {
        extraProps: cellExtraProps,
        key: xi + "-" + yi,
        posX: xi,
        posY: yi,
        onClick: onClick,
        value: value,
        height: cellHeight,
        square: square,
        render: cellRender,
        style: cellStyle,
        ratio: (value - min) / minMaxDiff
      });
    }));
  }))));
};

exports.HeatMapGrid = HeatMapGrid;
//# sourceMappingURL=index.js.map
