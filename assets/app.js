// The TL.Timeline constructor takes at least two arguments:
// the id of the Timeline container (no '#'), and
// the URL to your JSON data file or Google spreadsheet.
// the id must refer to an element "above" this code,
// and the element must have CSS styling to give it width and height
// optionally, a third argument with configuration options can be passed.
// See below for more about options.
var additionalOptions = {
  start_at_end: true,
  default_bg_color: {r:0, g:0, b:0},
  timenav_height: 250
}

timeline = new TL.Timeline('timeline-embed', 'timeline_json' , additionalOptions);