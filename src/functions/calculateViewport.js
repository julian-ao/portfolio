// Given an <svg> element, returns an object with the visible bounds
// expressed in local viewBox units, e.g.
// { x:-50, y:-50, width:100, height:100 }
// http://phrogz.net/JS/_ReuseLicense.txt

export const calculateViewport = (svg) => {
  var style    = getComputedStyle(svg),
      owidth   = parseInt(style.width,10),
      oheight  = parseInt(style.height,10),
      aspect   = svg.preserveAspectRatio.baseVal,
      viewBox  = svg.viewBox.baseVal,
      width    = viewBox && viewBox.width  || owidth,
      height   = viewBox && viewBox.height || oheight,
      x        = viewBox ? viewBox.x : 0,
      y        = viewBox ? viewBox.y : 0;
  if (!width || !height || !owidth || !oheight) return;
  if (aspect.align==aspect.SVG_PRESERVEASPECTRATIO_NONE || !viewBox || !viewBox.height){
    return {x:x,y:y,width:width,height:height};
  }else{
    var inRatio  = viewBox.width / viewBox.height,
        outRatio = owidth / oheight;
    var meetFlag = aspect.meetOrSlice != aspect.SVG_MEETORSLICE_SLICE;
    var fillAxis = outRatio>inRatio ? (meetFlag?'y':'x') : (meetFlag?'x':'y');
    if (fillAxis=='x'){
      height = width/outRatio;
      var diff = viewBox.height - height;
      switch (aspect.align){
        case aspect.SVG_PRESERVEASPECTRATIO_UNKNOWN:
        case aspect.SVG_PRESERVEASPECTRATIO_XMINYMID:
        case aspect.SVG_PRESERVEASPECTRATIO_XMIDYMID:
        case aspect.SVG_PRESERVEASPECTRATIO_XMAXYMID:
          y += diff/2;
        break;
        case aspect.SVG_PRESERVEASPECTRATIO_XMINYMAX:
        case aspect.SVG_PRESERVEASPECTRATIO_XMIDYMAX:
        case aspect.SVG_PRESERVEASPECTRATIO_XMAXYMAX:
          y += diff;
        break;
      }
    }
    else{
      width = height*outRatio;
      var diff = viewBox.width - width;
      switch (aspect.align){
        case aspect.SVG_PRESERVEASPECTRATIO_UNKNOWN:
        case aspect.SVG_PRESERVEASPECTRATIO_XMIDYMIN:
        case aspect.SVG_PRESERVEASPECTRATIO_XMIDYMID:
        case aspect.SVG_PRESERVEASPECTRATIO_XMIDYMAX:
          x += diff/2;
        break;
        case aspect.SVG_PRESERVEASPECTRATIO_XMAXYMID:
        case aspect.SVG_PRESERVEASPECTRATIO_XMAXYMIN:
        case aspect.SVG_PRESERVEASPECTRATIO_XMAXYMAX:
          x += diff;
        break;
      }
    }
    return {x:x,y:y,width:width,height:height};
  }
}