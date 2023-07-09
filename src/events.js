const names = [
  "afterExport",
  "afterPlot",
  "animated",
  "animatingFrame",
  "animationInterrupted",
  "autoSize",
  "beforeExport",
  "buttonClicked",
  "click",
  "clickAnnotation",
  "deselect",
  "doubleClick",
  "framework",
  "hover",
  "legendClick",
  "legendDoubleClick",
  "relayout",
  "restyle",
  "redraw",
  "selected",
  "selecting",
  "sliderChange",
  "sliderEnd",
  "sliderStart",
  "transitioning",
  "transitionInterrupted",
  "unhover"
];

const events = names.map(evt => evt.toLocaleLowerCase())
.map(eventName => ({
  completeName: "plotly_" + eventName,
  handler: (ctx) => (...args) => {
    ctx.$emit.apply(ctx, [eventName, ...args]);
  }
}));

export default events;
