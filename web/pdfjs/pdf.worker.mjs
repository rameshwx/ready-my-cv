/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/**
 * pdfjsVersion = 5.4.149
 * pdfjsBuild = 9e2e9e209
 */
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// ./src/shared/util.js
const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
const LINE_FACTOR = 1.35;
const LINE_DESCENT_FACTOR = 0.35;
const BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
const RenderingIntentFlag = {
  ANY: 0x01,
  DISPLAY: 0x02,
  PRINT: 0x04,
  SAVE: 0x08,
  ANNOTATIONS_FORMS: 0x10,
  ANNOTATIONS_STORAGE: 0x20,
  ANNOTATIONS_DISABLE: 0x40,
  IS_EDITING: 0x80,
  OPLIST: 0x100
};
const AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
const AnnotationEditorPrefix = "pdfjs_internal_editor_";
const AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
};
const AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
};
const PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
const TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
const ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
const AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
const AnnotationReplyType = {
  GROUP: "Group",
  REPLY: "R"
};
const AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
const AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
const AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
const AnnotationActionEventType = {
  E: "Mouse Enter",
  X: "Mouse Exit",
  D: "Mouse Down",
  U: "Mouse Up",
  Fo: "Focus",
  Bl: "Blur",
  PO: "PageOpen",
  PC: "PageClose",
  PV: "PageVisible",
  PI: "PageInvisible",
  K: "Keystroke",
  F: "Format",
  V: "Validate",
  C: "Calculate"
};
const DocumentActionEventType = {
  WC: "WillClose",
  WS: "WillSave",
  DS: "DidSave",
  WP: "WillPrint",
  DP: "DidPrint"
};
const PageActionEventType = {
  O: "PageOpen",
  C: "PageClose"
};
const VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
const OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
};
const DrawOPS = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
};
const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log(`Info: ${msg}`);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log(`Warning: ${msg}`);
  }
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function _isValidProtocol(url) {
  switch (url?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
  if (!url) {
    return null;
  }
  if (options && typeof url === "string") {
    if (options.addDefaultProtocol && url.startsWith("www.")) {
      const dots = url.match(/\./g);
      if (dots?.length >= 2) {
        url = `http://${url}`;
      }
    }
    if (options.tryConvertEncoding) {
      try {
        url = stringToUTF8String(url);
      } catch {}
    }
  }
  const absoluteUrl = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
  return _isValidProtocol(absoluteUrl) ? absoluteUrl : null;
}
function updateUrlHash(url, hash, allowRel = false) {
  const res = URL.parse(url);
  if (res) {
    res.hash = hash;
    return res.href;
  }
  if (allowRel && createValidAbsoluteUrl(url, "http://example.com")) {
    return url.split("#", 1)[0] + `${hash ? `#${hash}` : ""}`;
  }
  return "";
}
function shadow(obj, prop, value, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    value,
    enumerable: !nonSerializable,
    configurable: true,
    writable: false
  });
  return value;
}
const BaseException = function BaseExceptionClosure() {
  function BaseException(message, name) {
    this.message = message;
    this.name = name;
  }
  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
}();
class PasswordException extends BaseException {
  constructor(msg, code) {
    super(msg, "PasswordException");
    this.code = code;
  }
}
class UnknownErrorException extends BaseException {
  constructor(msg, details) {
    super(msg, "UnknownErrorException");
    this.details = details;
  }
}
class InvalidPDFException extends BaseException {
  constructor(msg) {
    super(msg, "InvalidPDFException");
  }
}
class ResponseException extends BaseException {
  constructor(msg, status, missing) {
    super(msg, "ResponseException");
    this.status = status;
    this.missing = missing;
  }
}
class FormatError extends BaseException {
  constructor(msg) {
    super(msg, "FormatError");
  }
}
class AbortException extends BaseException {
  constructor(msg) {
    super(msg, "AbortException");
  }
}
function bytesToString(bytes) {
  if (typeof bytes !== "object" || bytes?.length === undefined) {
    unreachable("Invalid argument for bytesToString");
  }
  const length = bytes.length;
  const MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  const strBuf = [];
  for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  if (typeof str !== "string") {
    unreachable("Invalid argument for stringToBytes");
  }
  const length = str.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xff;
  }
  return bytes;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function objectSize(obj) {
  return Object.keys(obj).length;
}
function isLittleEndian() {
  const buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  const view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch {
    return false;
  }
}
class FeatureTest {
  static get isLittleEndian() {
    return shadow(this, "isLittleEndian", isLittleEndian());
  }
  static get isEvalSupported() {
    return shadow(this, "isEvalSupported", isEvalSupported());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get isImageDecoderSupported() {
    return shadow(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
  }
  static get platform() {
    const {
      platform,
      userAgent
    } = navigator;
    return shadow(this, "platform", {
      isAndroid: userAgent.includes("Android"),
      isLinux: platform.includes("Linux"),
      isMac: platform.includes("Mac"),
      isWindows: platform.includes("Win"),
      isFirefox: userAgent.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
const hexNumbers = Array.from(Array(256).keys(), n => n.toString(16).padStart(2, "0"));
class Util {
  static makeHexColor(r, g, b) {
    return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
  }
  static domMatrixToTransform(dm) {
    return [dm.a, dm.b, dm.c, dm.d, dm.e, dm.f];
  }
  static scaleMinMax(transform, minMax) {
    let temp;
    if (transform[0]) {
      if (transform[0] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[0];
      minMax[2] *= transform[0];
      if (transform[3] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[3];
      minMax[3] *= transform[3];
    } else {
      temp = minMax[0];
      minMax[0] = minMax[1];
      minMax[1] = temp;
      temp = minMax[2];
      minMax[2] = minMax[3];
      minMax[3] = temp;
      if (transform[1] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[1];
      minMax[3] *= transform[1];
      if (transform[2] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[2];
      minMax[2] *= transform[2];
    }
    minMax[0] += transform[4];
    minMax[1] += transform[5];
    minMax[2] += transform[4];
    minMax[3] += transform[5];
  }
  static transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  static multiplyByDOMMatrix(m, md) {
    return [m[0] * md.a + m[2] * md.b, m[1] * md.a + m[3] * md.b, m[0] * md.c + m[2] * md.d, m[1] * md.c + m[3] * md.d, m[0] * md.e + m[2] * md.f + m[4], m[1] * md.e + m[3] * md.f + m[5]];
  }
  static applyTransform(p, m, pos = 0) {
    const p0 = p[pos];
    const p1 = p[pos + 1];
    p[pos] = p0 * m[0] + p1 * m[2] + m[4];
    p[pos + 1] = p0 * m[1] + p1 * m[3] + m[5];
  }
  static applyTransformToBezier(p, transform, pos = 0) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    for (let i = 0; i < 6; i += 2) {
      const pI = p[pos + i];
      const pI1 = p[pos + i + 1];
      p[pos + i] = pI * m0 + pI1 * m2 + m4;
      p[pos + i + 1] = pI * m1 + pI1 * m3 + m5;
    }
  }
  static applyInverseTransform(p, m) {
    const p0 = p[0];
    const p1 = p[1];
    const d = m[0] * m[3] - m[1] * m[2];
    p[0] = (p0 * m[3] - p1 * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    p[1] = (-p0 * m[1] + p1 * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
  }
  static axialAlignedBoundingBox(rect, transform, output) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    const r0 = rect[0];
    const r1 = rect[1];
    const r2 = rect[2];
    const r3 = rect[3];
    let a0 = m0 * r0 + m4;
    let a2 = a0;
    let a1 = m0 * r2 + m4;
    let a3 = a1;
    let b0 = m3 * r1 + m5;
    let b2 = b0;
    let b1 = m3 * r3 + m5;
    let b3 = b1;
    if (m1 !== 0 || m2 !== 0) {
      const m1r0 = m1 * r0;
      const m1r2 = m1 * r2;
      const m2r1 = m2 * r1;
      const m2r3 = m2 * r3;
      a0 += m2r1;
      a3 += m2r1;
      a1 += m2r3;
      a2 += m2r3;
      b0 += m1r0;
      b3 += m1r0;
      b1 += m1r2;
      b2 += m1r2;
    }
    output[0] = Math.min(output[0], a0, a1, a2, a3);
    output[1] = Math.min(output[1], b0, b1, b2, b3);
    output[2] = Math.max(output[2], a0, a1, a2, a3);
    output[3] = Math.max(output[3], b0, b1, b2, b3);
  }
  static inverseTransform(m) {
    const d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(matrix, output) {
    const m0 = matrix[0];
    const m1 = matrix[1];
    const m2 = matrix[2];
    const m3 = matrix[3];
    const a = m0 ** 2 + m1 ** 2;
    const b = m0 * m2 + m1 * m3;
    const c = m2 ** 2 + m3 ** 2;
    const first = (a + c) / 2;
    const second = Math.sqrt(first ** 2 - (a * c - b ** 2));
    output[0] = Math.sqrt(first + second || 1);
    output[1] = Math.sqrt(first - second || 1);
  }
  static normalizeRect(rect) {
    const r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  }
  static intersect(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    if (xLow > xHigh) {
      return null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    if (yLow > yHigh) {
      return null;
    }
    return [xLow, yLow, xHigh, yHigh];
  }
  static pointBoundingBox(x, y, minMax) {
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static rectBoundingBox(x0, y0, x1, y1, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x1);
    minMax[1] = Math.min(minMax[1], y0, y1);
    minMax[2] = Math.max(minMax[2], x0, x1);
    minMax[3] = Math.max(minMax[3], y0, y1);
  }
  static #getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
    if (t <= 0 || t >= 1) {
      return;
    }
    const mt = 1 - t;
    const tt = t * t;
    const ttt = tt * t;
    const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
    const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static #getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) >= 1e-12) {
        this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
      }
      return;
    }
    const delta = b ** 2 - 4 * c * a;
    if (delta < 0) {
      return;
    }
    const sqrtDelta = Math.sqrt(delta);
    const a2 = 2 * a;
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x3);
    minMax[1] = Math.min(minMax[1], y0, y3);
    minMax[2] = Math.max(minMax[2], x0, x3);
    minMax[3] = Math.max(minMax[3], y0, y3);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
  }
}
const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2d8, 0x2c7, 0x2c6, 0x2d9, 0x2dd, 0x2db, 0x2da, 0x2dc, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203a, 0x2212, 0x2030, 0x201e, 0x201c, 0x201d, 0x2018, 0x2019, 0x201a, 0x2122, 0xfb01, 0xfb02, 0x141, 0x152, 0x160, 0x178, 0x17d, 0x131, 0x142, 0x153, 0x161, 0x17e, 0, 0x20ac];
function stringToPDFString(str, keepEscapeSequence = false) {
  if (str[0] >= "\xEF") {
    let encoding;
    if (str[0] === "\xFE" && str[1] === "\xFF") {
      encoding = "utf-16be";
      if (str.length % 2 === 1) {
        str = str.slice(0, -1);
      }
    } else if (str[0] === "\xFF" && str[1] === "\xFE") {
      encoding = "utf-16le";
      if (str.length % 2 === 1) {
        str = str.slice(0, -1);
      }
    } else if (str[0] === "\xEF" && str[1] === "\xBB" && str[2] === "\xBF") {
      encoding = "utf-8";
    }
    if (encoding) {
      try {
        const decoder = new TextDecoder(encoding, {
          fatal: true
        });
        const buffer = stringToBytes(str);
        const decoded = decoder.decode(buffer);
        if (keepEscapeSequence || !decoded.includes("\x1b")) {
          return decoded;
        }
        return decoded.replaceAll(/\x1b[^\x1b]*(?:\x1b|$)/g, "");
      } catch (ex) {
        warn(`stringToPDFString: "${ex}".`);
      }
    }
  }
  const strBuf = [];
  for (let i = 0, ii = str.length; i < ii; i++) {
    const charCode = str.charCodeAt(i);
    if (!keepEscapeSequence && charCode === 0x1b) {
      while (++i < ii && str.charCodeAt(i) !== 0x1b) {}
      continue;
    }
    const code = PDFStringTranslateTable[charCode];
    strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
  }
  return strBuf.join("");
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, ii = arr1.length; i < ii; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
function getModificationDate(date = new Date()) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
  return buffer.join("");
}
let NormalizeRegex = null;
let NormalizationMap = null;
function normalizeUnicode(str) {
  if (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = new Map([["ï¬…", "Å¿t"]]);
  }
  return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
}
function getUuid() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  crypto.getRandomValues(buf);
  return bytesToString(buf);
}
const AnnotationPrefix = "pdfjs_internal_id_";
function _isValidExplicitDest(validRef, validName, dest) {
  if (!Array.isArray(dest) || dest.length < 2) {
    return false;
  }
  const [page, zoom, ...args] = dest;
  if (!validRef(page) && !Number.isInteger(page)) {
    return false;
  }
  if (!validName(zoom)) {
    return false;
  }
  const argsLen = args.length;
  let allowNull = true;
  switch (zoom.name) {
    case "XYZ":
      if (argsLen < 2 || argsLen > 3) {
        return false;
      }
      break;
    case "Fit":
    case "FitB":
      return argsLen === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (argsLen > 1) {
        return false;
      }
      break;
    case "FitR":
      if (argsLen !== 4) {
        return false;
      }
      allowNull = false;
      break;
    default:
      return false;
  }
  for (const arg of args) {
    if (typeof arg === "number" || allowNull && arg === null) {
      continue;
    }
    return false;
  }
  return true;
}
function MathClamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}
function toHexUtil(arr) {
  if (Uint8Array.prototype.toHex) {
    return arr.toHex();
  }
  return Array.from(arr, num => hexNumbers[num]).join("");
}
function toBase64Util(arr) {
  if (Uint8Array.prototype.toBase64) {
    return arr.toBase64();
  }
  return btoa(bytesToString(arr));
}
function fromBase64Util(str) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(str);
  }
  return stringToBytes(atob(str));
}
if (typeof Promise.try !== "function") {
  Promise.try = function (fn, ...args) {
    return new Promise(resolve => {
      resolve(fn(...args));
    });
  };
}
if (typeof Math.sumPrecise !== "function") {
  Math.sumPrecise = function (numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  };
}

;// ./src/core/primitives.js

const CIRCULAR_REF = Symbol("CIRCULAR_REF");
const EOF = Symbol("EOF");
let CmdCache = Object.create(null);
let NameCache = Object.create(null);
let RefCache = Object.create(null);
function clearPrimitiveCaches() {
  CmdCache = Object.create(null);
  NameCache = Object.create(null);
  RefCache = Object.create(null);
}
class Name {
  constructor(name) {
    this.name = name;
  }
  static get(name) {
    return NameCache[name] ||= new Name(name);
  }
}
class Cmd {
  constructor(cmd) {
    this.cmd = cmd;
  }
  static get(cmd) {
    return CmdCache[cmd] ||= new Cmd(cmd);
  }
}
const nonSerializable = function nonSerializableClosure() {
  return nonSerializable;
};
class Dict {
  constructor(xref = null) {
    this._map = new Map();
    this.xref = xref;
    this.objId = null;
    this.suppressEncryption = false;
    this.__nonSerializable__ = nonSerializable;
  }
  assignXref(newXref) {
    this.xref = newXref;
  }
  get size() {
    return this._map.size;
  }
  get(key1, key2, key3) {
    let value = this._map.get(key1);
    if (value === undefined && key2 !== undefined) {
      value = this._map.get(key2);
      if (value === undefined && key3 !== undefined) {
        value = this._map.get(key3);
      }
    }
    if (value instanceof Ref && this.xref) {
      return this.xref.fetch(value, this.suppressEncryption);
    }
    return value;
  }
  async getAsync(key1, key2, key3) {
    let value = this._map.get(key1);
    if (value === undefined && key2 !== undefined) {
      value = this._map.get(key2);
      if (value === undefined && key3 !== undefined) {
        value = this._map.get(key3);
      }
    }
    if (value instanceof Ref && this.xref) {
      return this.xref.fetchAsync(value, this.suppressEncryption);
    }
    return value;
  }
  getArray(key1, key2, key3) {
    let value = this._map.get(key1);
    if (value === undefined && key2 !== undefined) {
      value = this._map.get(key2);
      if (value === undefined && key3 !== undefined) {
        value = this._map.get(key3);
      }
    }
    if (value instanceof Ref && this.xref) {
      value = this.xref.fetch(value, this.suppressEncryption);
    }
    if (Array.isArray(value)) {
      value = value.slice();
      for (let i = 0, ii = value.length; i < ii; i++) {
        if (value[i] instanceof Ref && this.xref) {
          value[i] = this.xref.fetch(value[i], this.suppressEncryption);
        }
      }
    }
    return value;
  }
  getRaw(key) {
    return this._map.get(key);
  }
  getKeys() {
    return [...this._map.keys()];
  }
  getRawValues() {
    return [...this._map.values()];
  }
  set(key, value) {
    this._map.set(key, value);
  }
  setIfNotExists(key, value) {
    if (!this.has(key)) {
      this.set(key, value);
    }
  }
  setIfNumber(key, value) {
    if (typeof value === "number") {
      this.set(key, value);
    }
  }
  setIfArray(key, value) {
    if (Array.isArray(value) || ArrayBuffer.isView(value)) {
      this.set(key, value);
    }
  }
  setIfDefined(key, value) {
    if (value !== undefined && value !== null) {
      this.set(key, value);
    }
  }
  setIfName(key, value) {
    if (typeof value === "string") {
      this.set(key, Name.get(value));
    } else if (value instanceof Name) {
      this.set(key, value);
    }
  }
  has(key) {
    return this._map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this._map) {
      yield [key, value instanceof Ref && this.xref ? this.xref.fetch(value, this.suppressEncryption) : value];
    }
  }
  static get empty() {
    const emptyDict = new Dict(null);
    emptyDict.set = (key, value) => {
      unreachable("Should not call `set` on the empty dictionary.");
    };
    return shadow(this, "empty", emptyDict);
  }
  static merge({
    xref,
    dictArray,
    mergeSubDicts = false
  }) {
    const mergedDict = new Dict(xref),
      properties = new Map();
    for (const dict of dictArray) {
      if (!(dict instanceof Dict)) {
        continue;
      }
      for (const [key, value] of dict._map) {
        let property = properties.get(key);
        if (property === undefined) {
          property = [];
          properties.set(key, property);
        } else if (!mergeSubDicts || !(value instanceof Dict)) {
          continue;
        }
        property.push(value);
      }
    }
    for (const [name, values] of properties) {
      if (values.length === 1 || !(values[0] instanceof Dict)) {
        mergedDict._map.set(name, values[0]);
        continue;
      }
      const subDict = new Dict(xref);
      for (const dict of values) {
        for (const [key, value] of dict._map) {
          if (!subDict._map.has(key)) {
            subDict._map.set(key, value);
          }
        }
      }
      if (subDict.size > 0) {
        mergedDict._map.set(name, subDict);
      }
    }
    properties.clear();
    return mergedDict.size > 0 ? mergedDict : Dict.empty;
  }
  clone() {
    const dict = new Dict(this.xref);
    for (const key of this.getKeys()) {
      dict.set(key, this.getRaw(key));
    }
    return dict;
  }
  delete(key) {
    delete this._map[key];
  }
}
class Ref {
  constructor(num, gen) {
    this.num = num;
    this.gen = gen;
  }
  toString() {
    if (this.gen === 0) {
      return `${this.num}R`;
    }
    return `${this.num}R${this.gen}`;
  }
  static fromString(str) {
    const ref = RefCache[str];
    if (ref) {
      return ref;
    }
    const m = /^(\d+)R(\d*)$/.exec(str);
    if (!m || m[1] === "0") {
      return null;
    }
    return RefCache[str] = new Ref(parseInt(m[1]), !m[2] ? 0 : parseInt(m[2]));
  }
  static get(num, gen) {
    const key = gen === 0 ? `${num}R` : `${num}R${gen}`;
    return RefCache[key] ||= new Ref(num, gen);
  }
}
class RefSet {
  constructor(parent = null) {
    this._set = new Set(parent?._set);
  }
  has(ref) {
    return this._set.has(ref.toString());
  }
  put(ref) {
    this._set.add(ref.toString());
  }
  remove(ref) {
    this._set.delete(ref.toString());
  }
  [Symbol.iterator]() {
    return this._set.values();
  }
  clear() {
    this._set.clear();
  }
}
class RefSetCache {
  constructor() {
    this._map = new Map();
  }
  get size() {
    return this._map.size;
  }
  get(ref) {
    return this._map.get(ref.toString());
  }
  has(ref) {
    return this._map.has(ref.toString());
  }
  put(ref, obj) {
    this._map.set(ref.toString(), obj);
  }
  putAlias(ref, aliasRef) {
    this._map.set(ref.toString(), this.get(aliasRef));
  }
  [Symbol.iterator]() {
    return this._map.values();
  }
  clear() {
    this._map.clear();
  }
  *values() {
    yield* this._map.values();
  }
  *items() {
    for (const [ref, value] of this._map) {
      yield [Ref.fromString(ref), value];
    }
  }
}
function isName(v, name) {
  return v instanceof Name && (name === undefined || v.name === name);
}
function isCmd(v, cmd) {
  return v instanceof Cmd && (cmd === undefined || v.cmd === cmd);
}
function isDict(v, type) {
  return v instanceof Dict && (type === undefined || isName(v.get("Type"), type));
}
function isRefsEqual(v1, v2) {
  return v1.num === v2.num && v1.gen === v2.gen;
}

;// ./src/core/base_stream.js

class BaseStream {
  get length() {
    unreachable("Abstract getter `length` accessed");
  }
  get isEmpty() {
    unreachable("Abstract getter `isEmpty` accessed");
  }
  get isDataLoaded() {
    return shadow(this, "isDataLoaded", true);
  }
  getByte() {
    unreachable("Abstract method `getByte` called");
  }
  getBytes(length) {
    unreachable("Abstract method `getBytes` called");
  }
  async getImageData(length, decoderOptions) {
    return this.getBytes(length, decoderOptions);
  }
  async asyncGetBytes() {
    unreachable("Abstract method `asyncGetBytes` called");
  }
  get isAsync() {
    return false;
  }
  get isAsyncDecoder() {
    return false;
  }
  get canAsyncDecodeImageFromBuffer() {
    return false;
  }
  async getTransferableImage() {
    return null;
  }
  peekByte() {
    const peekedByte = this.getByte();
    if (peekedByte !== -1) {
      this.pos--;
    }
    return peekedByte;
  }
  peekBytes(length) {
    const bytes = this.getBytes(length);
    this.pos -= bytes.length;
    return bytes;
  }
  getUint16() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    if (b0 === -1 || b1 === -1) {
      return -1;
    }
    return (b0 << 8) + b1;
  }
  getInt32() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    const b2 = this.getByte();
    const b3 = this.getByte();
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  }
  getByteRange(begin, end) {
    unreachable("Abstract method `getByteRange` called");
  }
  getString(length) {
    return bytesToString(this.getBytes(length));
  }
  skip(n) {
    this.pos += n || 1;
  }
  reset() {
    unreachable("Abstract method `reset` called");
  }
  moveStart() {
    unreachable("Abstract method `moveStart` called");
  }
  makeSubStream(start, length, dict = null) {
    unreachable("Abstract method `makeSubStream` called");
  }
  getBaseStreams() {
    return null;
  }
}

;// ./src/core/core_utils.js



const PDF_VERSION_REGEXP = /^[1-9]\.\d$/;
const MAX_INT_32 = 2 ** 31 - 1;
const MIN_INT_32 = -(2 ** 31);
const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
const RESOURCES_KEYS_OPERATOR_LIST = ["ColorSpace", "ExtGState", "Font", "Pattern", "Properties", "Shading", "XObject"];
const RESOURCES_KEYS_TEXT_CONTENT = ["ExtGState", "Font", "Properties", "XObject"];
function getLookupTableFactory(initializer) {
  let lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}
class MissingDataException extends BaseException {
  constructor(begin, end) {
    super(`Missing data [${begin}, ${end})`, "MissingDataException");
    this.begin = begin;
    this.end = end;
  }
}
class ParserEOFException extends BaseException {
  constructor(msg) {
    super(msg, "ParserEOFException");
  }
}
class XRefEntryException extends BaseException {
  constructor(msg) {
    super(msg, "XRefEntryException");
  }
}
class XRefParseException extends BaseException {
  constructor(msg) {
    super(msg, "XRefParseException");
  }
}
function arrayBuffersToBytes(arr) {
  const length = arr.length;
  if (length === 0) {
    return new Uint8Array(0);
  }
  if (length === 1) {
    return new Uint8Array(arr[0]);
  }
  let dataLength = 0;
  for (let i = 0; i < length; i++) {
    dataLength += arr[i].byteLength;
  }
  const data = new Uint8Array(dataLength);
  let pos = 0;
  for (let i = 0; i < length; i++) {
    const item = new Uint8Array(arr[i]);
    data.set(item, pos);
    pos += item.byteLength;
  }
  return data;
}
async function fetchBinaryData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch file "${url}" with "${response.statusText}".`);
  }
  return new Uint8Array(await response.arrayBuffer());
}
function getInheritableProperty({
  dict,
  key,
  getArray = false,
  stopWhenFound = true
}) {
  let values;
  const visited = new RefSet();
  while (dict instanceof Dict && !(dict.objId && visited.has(dict.objId))) {
    if (dict.objId) {
      visited.put(dict.objId);
    }
    const value = getArray ? dict.getArray(key) : dict.get(key);
    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }
      (values ||= []).push(value);
    }
    dict = dict.get("Parent");
  }
  return values;
}
function getParentToUpdate(dict, ref, xref) {
  const visited = new RefSet();
  const firstDict = dict;
  const result = {
    dict: null,
    ref: null
  };
  while (dict instanceof Dict && !visited.has(ref)) {
    visited.put(ref);
    if (dict.has("T")) {
      break;
    }
    ref = dict.getRaw("Parent");
    if (!(ref instanceof Ref)) {
      return result;
    }
    dict = xref.fetch(ref);
  }
  if (dict instanceof Dict && dict !== firstDict) {
    result.dict = dict;
    result.ref = ref;
  }
  return result;
}
const ROMAN_NUMBER_MAP = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
function toRomanNumerals(number, lowerCase = false) {
  assert(Number.isInteger(number) && number > 0, "The number should be a positive integer.");
  const roman = "M".repeat(number / 1000 | 0) + ROMAN_NUMBER_MAP[number % 1000 / 100 | 0] + ROMAN_NUMBER_MAP[10 + (number % 100 / 10 | 0)] + ROMAN_NUMBER_MAP[20 + number % 10];
  return lowerCase ? roman.toLowerCase() : roman;
}
function log2(x) {
  return x > 0 ? Math.ceil(Math.log2(x)) : 0;
}
function readInt8(data, offset) {
  return data[offset] << 24 >> 24;
}
function readInt16(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16) >> 16;
}
function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}
function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
function isWhiteSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0d || ch === 0x0a;
}
function isBooleanArray(arr, len) {
  return Array.isArray(arr) && (len === null || arr.length === len) && arr.every(x => typeof x === "boolean");
}
function isNumberArray(arr, len) {
  if (Array.isArray(arr)) {
    return (len === null || arr.length === len) && arr.every(x => typeof x === "number");
  }
  return ArrayBuffer.isView(arr) && !(arr instanceof BigInt64Array || arr instanceof BigUint64Array) && (len === null || arr.length === len);
}
function lookupMatrix(arr, fallback) {
  return isNumberArray(arr, 6) ? arr : fallback;
}
function lookupRect(arr, fallback) {
  return isNumberArray(arr, 4) ? arr : fallback;
}
function lookupNormalRect(arr, fallback) {
  return isNumberArray(arr, 4) ? Util.normalizeRect(arr) : fallback;
}
function parseXFAPath(path) {
  const positionPattern = /(.+)\[(\d+)\]$/;
  return path.split(".").map(component => {
    const m = component.match(positionPattern);
    if (m) {
      return {
        name: m[1],
        pos: parseInt(m[2], 10)
      };
    }
    return {
      name: component,
      pos: 0
    };
  });
}
function escapePDFName(str) {
  const buffer = [];
  let start = 0;
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    if (char < 0x21 || char > 0x7e || char === 0x23 || char === 0x28 || char === 0x29 || char === 0x3c || char === 0x3e || char === 0x5b || char === 0x5d || char === 0x7b || char === 0x7d || char === 0x2f || char === 0x25) {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }
      buffer.push(`#${char.toString(16)}`);
      start = i + 1;
    }
  }
  if (buffer.length === 0) {
    return str;
  }
  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }
  return buffer.join("");
}
function escapeString(str) {
  return str.replaceAll(/([()\\\n\r])/g, match => {
    if (match === "\n") {
      return "\\n";
    } else if (match === "\r") {
      return "\\r";
    }
    return `\\${match}`;
  });
}
function _collectJS(entry, xref, list, parents) {
  if (!entry) {
    return;
  }
  let parent = null;
  if (entry instanceof Ref) {
    if (parents.has(entry)) {
      return;
    }
    parent = entry;
    parents.put(parent);
    entry = xref.fetch(entry);
  }
  if (Array.isArray(entry)) {
    for (const element of entry) {
      _collectJS(element, xref, list, parents);
    }
  } else if (entry instanceof Dict) {
    if (isName(entry.get("S"), "JavaScript")) {
      const js = entry.get("JS");
      let code;
      if (js instanceof BaseStream) {
        code = js.getString();
      } else if (typeof js === "string") {
        code = js;
      }
      code &&= stringToPDFString(code, true).replaceAll("\x00", "");
      if (code) {
        list.push(code.trim());
      }
    }
    _collectJS(entry.getRaw("Next"), xref, list, parents);
  }
  if (parent) {
    parents.remove(parent);
  }
}
function collectActions(xref, dict, eventType) {
  const actions = Object.create(null);
  const additionalActionsDicts = getInheritableProperty({
    dict,
    key: "AA",
    stopWhenFound: false
  });
  if (additionalActionsDicts) {
    for (let i = additionalActionsDicts.length - 1; i >= 0; i--) {
      const additionalActions = additionalActionsDicts[i];
      if (!(additionalActions instanceof Dict)) {
        continue;
      }
      for (const key of additionalActions.getKeys()) {
        const action = eventType[key];
        if (!action) {
          continue;
        }
        const actionDict = additionalActions.getRaw(key);
        const parents = new RefSet();
        const list = [];
        _collectJS(actionDict, xref, list, parents);
        if (list.length > 0) {
          actions[action] = list;
        }
      }
    }
  }
  if (dict.has("A")) {
    const actionDict = dict.get("A");
    const parents = new RefSet();
    const list = [];
    _collectJS(actionDict, xref, list, parents);
    if (list.length > 0) {
      actions.Action = list;
    }
  }
  return objectSize(actions) > 0 ? actions : null;
}
const XMLEntities = {
  0x3c: "&lt;",
  0x3e: "&gt;",
  0x26: "&amp;",
  0x22: "&quot;",
  0x27: "&apos;"
};
function* codePointIter(str) {
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.codePointAt(i);
    if (char > 0xd7ff && (char < 0xe000 || char > 0xfffd)) {
      i++;
    }
    yield char;
  }
}
function encodeToXmlString(str) {
  const buffer = [];
  let start = 0;
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.codePointAt(i);
    if (0x20 <= char && char <= 0x7e) {
      const entity = XMLEntities[char];
      if (entity) {
        if (start < i) {
          buffer.push(str.substring(start, i));
        }
        buffer.push(entity);
        start = i + 1;
      }
    } else {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }
      buffer.push(`&#x${char.toString(16).toUpperCase()};`);
      if (char > 0xd7ff && (char < 0xe000 || char > 0xfffd)) {
        i++;
      }
      start = i + 1;
    }
  }
  if (buffer.length === 0) {
    return str;
  }
  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }
  return buffer.join("");
}
function validateFontName(fontFamily, mustWarn = false) {
  const m = /^("|').*("|')$/.exec(fontFamily);
  if (m && m[1] === m[2]) {
    const re = new RegExp(`[^\\\\]${m[1]}`);
    if (re.test(fontFamily.slice(1, -1))) {
      if (mustWarn) {
        warn(`FontFamily contains unescaped ${m[1]}: ${fontFamily}.`);
      }
      return false;
    }
  } else {
    for (const ident of fontFamily.split(/[ \t]+/)) {
      if (/^(\d|(-(\d|-)))/.test(ident) || !/^[\w-\\]+$/.test(ident)) {
        if (mustWarn) {
          warn(`FontFamily contains invalid <custom-ident>: ${fontFamily}.`);
        }
        return false;
      }
    }
  }
  return true;
}
function validateCSSFont(cssFontInfo) {
  const DEFAULT_CSS_FONT_OBLIQUE = "14";
  const DEFAULT_CSS_FONT_WEIGHT = "400";
  const CSS_FONT_WEIGHT_VALUES = new Set(["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "normal", "bold", "bolder", "lighter"]);
  const {
    fontFamily,
    fontWeight,
    italicAngle
  } = cssFontInfo;
  if (!validateFontName(fontFamily, true)) {
    return false;
  }
  const weight = fontWeight ? fontWeight.toString() : "";
  cssFontInfo.fontWeight = CSS_FONT_WEIGHT_VALUES.has(weight) ? weight : DEFAULT_CSS_FONT_WEIGHT;
  const angle = parseFloat(italicAngle);
  cssFontInfo.italicAngle = isNaN(angle) || angle < -90 || angle > 90 ? DEFAULT_CSS_FONT_OBLIQUE : italicAngle.toString();
  return true;
}
function recoverJsURL(str) {
  const URL_OPEN_METHODS = ["app.launchURL", "window.open", "xfa.host.gotoURL"];
  const regex = new RegExp("^\\s*(" + URL_OPEN_METHODS.join("|").replaceAll(".", "\\.") + ")\\((?:'|\")([^'\"]*)(?:'|\")(?:,\\s*(\\w+)\\)|\\))", "i");
  const jsUrl = regex.exec(str);
  if (jsUrl?.[2]) {
    return {
      url: jsUrl[2],
      newWindow: jsUrl[1] === "app.launchURL" && jsUrl[3] === "true"
    };
  }
  return null;
}
function numberToString(value) {
  if (Number.isInteger(value)) {
    return value.toString();
  }
  const roundedValue = Math.round(value * 100);
  if (roundedValue % 100 === 0) {
    return (roundedValue / 100).toString();
  }
  if (roundedValue % 10 === 0) {
    return value.toFixed(1);
  }
  return value.toFixed(2);
}
function getNewAnnotationsMap(annotationStorage) {
  if (!annotationStorage) {
    return null;
  }
  const newAnnotationsByPage = new Map();
  for (const [key, value] of annotationStorage) {
    if (!key.startsWith(AnnotationEditorPrefix)) {
      continue;
    }
    let annotations = newAnnotationsByPage.get(value.pageIndex);
    if (!annotations) {
      annotations = [];
      newAnnotationsByPage.set(value.pageIndex, annotations);
    }
    annotations.push(value);
  }
  return newAnnotationsByPage.size > 0 ? newAnnotationsByPage : null;
}
function stringToAsciiOrUTF16BE(str) {
  if (str === null || str === undefined) {
    return str;
  }
  return isAscii(str) ? str : stringToUTF16String(str, true);
}
function isAscii(str) {
  if (typeof str !== "string") {
    return false;
  }
  return !str || /^[\x00-\x7F]*$/.test(str);
}
function stringToUTF16HexString(str) {
  const buf = [];
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    buf.push(hexNumbers[char >> 8 & 0xff], hexNumbers[char & 0xff]);
  }
  return buf.join("");
}
function stringToUTF16String(str, bigEndian = false) {
  const buf = [];
  if (bigEndian) {
    buf.push("\xFE\xFF");
  }
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    buf.push(String.fromCharCode(char >> 8 & 0xff), String.fromCharCode(char & 0xff));
  }
  return buf.join("");
}
function getRotationMatrix(rotation, width, height) {
  switch (rotation) {
    case 90:
      return [0, 1, -1, 0, width, 0];
    case 180:
      return [-1, 0, 0, -1, width, height];
    case 270:
      return [0, -1, 1, 0, 0, height];
    default:
      throw new Error("Invalid rotation");
  }
}
function getSizeInBytes(x) {
  return Math.ceil(Math.ceil(Math.log2(1 + x)) / 8);
}

;// ./external/qcms/qcms_utils.js
class QCMS {
  static #memoryArray = null;
  static _memory = null;
  static _mustAddAlpha = false;
  static _destBuffer = null;
  static _destOffset = 0;
  static _destLength = 0;
  static _cssColor = "";
  static _makeHexColor = null;
  static get _memoryArray() {
    const array = this.#memoryArray;
    if (array?.byteLength) {
      return array;
    }
    return this.#memoryArray = new Uint8Array(this._memory.buffer);
  }
}
function copy_result(ptr, len) {
  const {
    _mustAddAlpha,
    _destBuffer,
    _destOffset,
    _destLength,
    _memoryArray
  } = QCMS;
  if (len === _destLength) {
    _destBuffer.set(_memoryArray.subarray(ptr, ptr + len), _destOffset);
    return;
  }
  if (_mustAddAlpha) {
    for (let i = ptr, ii = ptr + len, j = _destOffset; i < ii; i += 3, j += 4) {
      _destBuffer[j] = _memoryArray[i];
      _destBuffer[j + 1] = _memoryArray[i + 1];
      _destBuffer[j + 2] = _memoryArray[i + 2];
      _destBuffer[j + 3] = 255;
    }
  } else {
    for (let i = ptr, ii = ptr + len, j = _destOffset; i < ii; i += 3, j += 4) {
      _destBuffer[j] = _memoryArray[i];
      _destBuffer[j + 1] = _memoryArray[i + 1];
      _destBuffer[j + 2] = _memoryArray[i + 2];
    }
  }
}
function copy_rgb(ptr) {
  const {
    _destBuffer,
    _destOffset,
    _memoryArray
  } = QCMS;
  _destBuffer[_destOffset] = _memoryArray[ptr];
  _destBuffer[_destOffset + 1] = _memoryArray[ptr + 1];
  _destBuffer[_destOffset + 2] = _memoryArray[ptr + 2];
}
function make_cssRGB(ptr) {
  const {
    _memoryArray
  } = QCMS;
  QCMS._cssColor = QCMS._makeHexColor(_memoryArray[ptr], _memoryArray[ptr + 1], _memoryArray[ptr + 2]);
}

;// ./external/qcms/qcms.js

let wasm;
const cachedTextDecoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
}) : {
  decode: () => {
    throw Error('TextDecoder not available');
  }
};
if (typeof TextDecoder !== 'undefined') {
  cachedTextDecoder.decode();
}
;
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
let WASM_VECTOR_LEN = 0;
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function qcms_convert_array(transformer, src) {
  const ptr0 = passArray8ToWasm0(src, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  wasm.qcms_convert_array(transformer, ptr0, len0);
}
function qcms_convert_one(transformer, src, css) {
  wasm.qcms_convert_one(transformer, src, css);
}
function qcms_convert_three(transformer, src1, src2, src3, css) {
  wasm.qcms_convert_three(transformer, src1, src2, src3, css);
}
function qcms_convert_four(transformer, src1, src2, src3, src4, css) {
  wasm.qcms_convert_four(transformer, src1, src2, src3, src4, css);
}
function qcms_transformer_from_memory(mem, in_type, intent) {
  const ptr0 = passArray8ToWasm0(mem, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.qcms_transformer_from_memory(ptr0, len0, in_type, intent);
  return ret >>> 0;
}
function qcms_drop_transformer(transformer) {
  wasm.qcms_drop_transformer(transformer);
}
const DataType = Object.freeze({
  RGB8: 0,
  "0": "RGB8",
  RGBA8: 1,
  "1": "RGBA8",
  BGRA8: 2,
  "2": "BGRA8",
  Gray8: 3,
  "3": "Gray8",
  GrayA8: 4,
  "4": "GrayA8",
  CMYK: 5,
  "5": "CMYK"
});
const Intent = Object.freeze({
  Perceptual: 0,
  "0": "Perceptual",
  RelativeColorimetric: 1,
  "1": "RelativeColorimetric",
  Saturation: 2,
  "2": "Saturation",
  AbsoluteColorimetric: 3,
  "3": "AbsoluteColorimetric"
});
async function __wbg_load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get('Content-Type') != 'application/wasm') {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return {
        instance,
        module
      };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_copyresult_b08ee7d273f295dd = function (arg0, arg1) {
    copy_result(arg0 >>> 0, arg1 >>> 0);
  };
  imports.wbg.__wbg_copyrgb_d60ce17bb05d9b67 = function (arg0) {
    copy_rgb(arg0 >>> 0);
  };
  imports.wbg.__wbg_makecssRGB_893bf0cd9fdb302d = function (arg0) {
    make_cssRGB(arg0 >>> 0);
  };
  imports.wbg.__wbindgen_init_externref_table = function () {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
  };
  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  return imports;
}
function __wbg_init_memory(imports, memory) {}
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
function initSync(module) {
  if (wasm !== undefined) return wasm;
  if (typeof module !== 'undefined') {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({
        module
      } = module);
    } else {
      console.warn('using deprecated parameters for `initSync()`; pass a single object instead');
    }
  }
  const imports = __wbg_get_imports();
  __wbg_init_memory(imports);
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance, module);
}
async function __wbg_init(module_or_path) {
  if (wasm !== undefined) return wasm;
  if (typeof module_or_path !== 'undefined') {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({
        module_or_path
      } = module_or_path);
    } else {
      console.warn('using deprecated parameters for the initialization function; pass a single object instead');
    }
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === 'string' || typeof Request === 'function' && module_or_path instanceof Request || typeof URL === 'function' && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  __wbg_init_memory(imports);
  const {
    instance,
    module
  } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance, module);
}

/* harmony default export */ const qcms = ((/* unused pure expression or super */ null && (__wbg_init)));
;// ./src/core/colorspace.js


function resizeRgbImage(src, dest, w1, h1, w2, h2, alpha01) {
  const COMPONENTS = 3;
  alpha01 = alpha01 !== 1 ? 0 : alpha01;
  const xRatio = w1 / w2;
  const yRatio = h1 / h2;
  let newIndex = 0,
    oldIndex;
  const xScaled = new Uint16Array(w2);
  const w1Scanline = w1 * COMPONENTS;
  for (let i = 0; i < w2; i++) {
    xScaled[i] = Math.floor(i * xRatio) * COMPONENTS;
  }
  for (let i = 0; i < h2; i++) {
    const py = Math.floor(i * yRatio) * w1Scanline;
    for (let j = 0; j < w2; j++) {
      oldIndex = py + xScaled[j];
      dest[newIndex++] = src[oldIndex++];
      dest[newIndex++] = src[oldIndex++];
      dest[newIndex++] = src[oldIndex++];
      newIndex += alpha01;
    }
  }
}
function resizeRgbaImage(src, dest, w1, h1, w2, h2, alpha01) {
  const xRatio = w1 / w2;
  const yRatio = h1 / h2;
  let newIndex = 0;
  const xScaled = new Uint16Array(w2);
  if (alpha01 === 1) {
    for (let i = 0; i < w2; i++) {
      xScaled[i] = Math.floor(i * xRatio);
    }
    const src32 = new Uint32Array(src.buffer);
    const dest32 = new Uint32Array(dest.buffer);
    const rgbMask = FeatureTest.isLittleEndian ? 0x00ffffff : 0xffffff00;
    for (let i = 0; i < h2; i++) {
      const buf = src32.subarray(Math.floor(i * yRatio) * w1);
      for (let j = 0; j < w2; j++) {
        dest32[newIndex++] |= buf[xScaled[j]] & rgbMask;
      }
    }
  } else {
    const COMPONENTS = 4;
    const w1Scanline = w1 * COMPONENTS;
    for (let i = 0; i < w2; i++) {
      xScaled[i] = Math.floor(i * xRatio) * COMPONENTS;
    }
    for (let i = 0; i < h2; i++) {
      const buf = src.subarray(Math.floor(i * yRatio) * w1Scanline);
      for (let j = 0; j < w2; j++) {
        const oldIndex = xScaled[j];
        dest[newIndex++] = buf[oldIndex];
        dest[newIndex++] = buf[oldIndex + 1];
        dest[newIndex++] = buf[oldIndex + 2];
      }
    }
  }
}
function copyRgbaImage(src, dest, alpha01) {
  if (alpha01 === 1) {
    const src32 = new Uint32Array(src.buffer);
    const dest32 = new Uint32Array(dest.buffer);
    const rgbMask = FeatureTest.isLittleEndian ? 0x00ffffff : 0xffffff00;
    for (let i = 0, ii = src32.length; i < ii; i++) {
      dest32[i] |= src32[i] & rgbMask;
    }
  } else {
    let j = 0;
    for (let i = 0, ii = src.length; i < ii; i += 4) {
      dest[j++] = src[i];
      dest[j++] = src[i + 1];
      dest[j++] = src[i + 2];
    }
  }
}
class ColorSpace {
  static #rgbBuf = new Uint8ClampedArray(3);
  constructor(name, numComps) {
    this.name = name;
    this.numComps = numComps;
  }
  getRgb(src, srcOffset, output = new Uint8ClampedArray(3)) {
    this.getRgbItem(src, srcOffset, output, 0);
    return output;
  }
  getRgbHex(src, srcOffset) {
    const buffer = this.getRgb(src, srcOffset, ColorSpace.#rgbBuf);
    return Util.makeHexColor(buffer[0], buffer[1], buffer[2]);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    unreachable("Should not call ColorSpace.getRgbItem");
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    unreachable("Should not call ColorSpace.getRgbBuffer");
  }
  getOutputLength(inputLength, alpha01) {
    unreachable("Should not call ColorSpace.getOutputLength");
  }
  isPassthrough(bits) {
    return false;
  }
  isDefaultDecode(decodeMap, bpc) {
    return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
  }
  fillRgb(dest, originalWidth, originalHeight, width, height, actualHeight, bpc, comps, alpha01) {
    const count = originalWidth * originalHeight;
    let rgbBuf = null;
    const numComponentColors = 1 << bpc;
    const needsResizing = originalHeight !== height || originalWidth !== width;
    if (this.isPassthrough(bpc)) {
      rgbBuf = comps;
    } else if (this.numComps === 1 && count > numComponentColors && this.name !== "DeviceGray" && this.name !== "DeviceRGB") {
      const allColors = bpc <= 8 ? new Uint8Array(numComponentColors) : new Uint16Array(numComponentColors);
      for (let i = 0; i < numComponentColors; i++) {
        allColors[i] = i;
      }
      const colorMap = new Uint8ClampedArray(numComponentColors * 3);
      this.getRgbBuffer(allColors, 0, numComponentColors, colorMap, 0, bpc, 0);
      if (!needsResizing) {
        let destPos = 0;
        for (let i = 0; i < count; ++i) {
          const key = comps[i] * 3;
          dest[destPos++] = colorMap[key];
          dest[destPos++] = colorMap[key + 1];
          dest[destPos++] = colorMap[key + 2];
          destPos += alpha01;
        }
      } else {
        rgbBuf = new Uint8Array(count * 3);
        let rgbPos = 0;
        for (let i = 0; i < count; ++i) {
          const key = comps[i] * 3;
          rgbBuf[rgbPos++] = colorMap[key];
          rgbBuf[rgbPos++] = colorMap[key + 1];
          rgbBuf[rgbPos++] = colorMap[key + 2];
        }
      }
    } else if (!needsResizing) {
      this.getRgbBuffer(comps, 0, width * actualHeight, dest, 0, bpc, alpha01);
    } else {
      rgbBuf = new Uint8ClampedArray(count * 3);
      this.getRgbBuffer(comps, 0, count, rgbBuf, 0, bpc, 0);
    }
    if (rgbBuf) {
      if (needsResizing) {
        resizeRgbImage(rgbBuf, dest, originalWidth, originalHeight, width, height, alpha01);
      } else {
        let destPos = 0,
          rgbPos = 0;
        for (let i = 0, ii = width * actualHeight; i < ii; i++) {
          dest[destPos++] = rgbBuf[rgbPos++];
          dest[destPos++] = rgbBuf[rgbPos++];
          dest[destPos++] = rgbBuf[rgbPos++];
          destPos += alpha01;
        }
      }
    }
  }
  get usesZeroToOneRange() {
    return shadow(this, "usesZeroToOneRange", true);
  }
  static isDefaultDecode(decode, numComps) {
    if (!Array.isArray(decode)) {
      return true;
    }
    if (numComps * 2 !== decode.length) {
      warn("The decode map is not the correct length");
      return true;
    }
    for (let i = 0, ii = decode.length; i < ii; i += 2) {
      if (decode[i] !== 0 || decode[i + 1] !== 1) {
        return false;
      }
    }
    return true;
  }
}
class AlternateCS extends ColorSpace {
  constructor(numComps, base, tintFn) {
    super("Alternate", numComps);
    this.base = base;
    this.tintFn = tintFn;
    this.tmpBuf = new Float32Array(base.numComps);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    const tmpBuf = this.tmpBuf;
    this.tintFn(src, srcOffset, tmpBuf, 0);
    this.base.getRgbItem(tmpBuf, 0, dest, destOffset);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const tintFn = this.tintFn;
    const base = this.base;
    const scale = 1 / ((1 << bits) - 1);
    const baseNumComps = base.numComps;
    const usesZeroToOneRange = base.usesZeroToOneRange;
    const isPassthrough = (base.isPassthrough(8) || !usesZeroToOneRange) && alpha01 === 0;
    let pos = isPassthrough ? destOffset : 0;
    const baseBuf = isPassthrough ? dest : new Uint8ClampedArray(baseNumComps * count);
    const numComps = this.numComps;
    const scaled = new Float32Array(numComps);
    const tinted = new Float32Array(baseNumComps);
    let i, j;
    for (i = 0; i < count; i++) {
      for (j = 0; j < numComps; j++) {
        scaled[j] = src[srcOffset++] * scale;
      }
      tintFn(scaled, 0, tinted, 0);
      if (usesZeroToOneRange) {
        for (j = 0; j < baseNumComps; j++) {
          baseBuf[pos++] = tinted[j] * 255;
        }
      } else {
        base.getRgbItem(tinted, 0, baseBuf, pos);
        pos += baseNumComps;
      }
    }
    if (!isPassthrough) {
      base.getRgbBuffer(baseBuf, 0, count, dest, destOffset, 8, alpha01);
    }
  }
  getOutputLength(inputLength, alpha01) {
    return this.base.getOutputLength(inputLength * this.base.numComps / this.numComps, alpha01);
  }
}
class PatternCS extends ColorSpace {
  constructor(baseCS) {
    super("Pattern", null);
    this.base = baseCS;
  }
  isDefaultDecode(decodeMap, bpc) {
    unreachable("Should not call PatternCS.isDefaultDecode");
  }
}
class IndexedCS extends ColorSpace {
  constructor(base, highVal, lookup) {
    super("Indexed", 1);
    this.base = base;
    this.highVal = highVal;
    const length = base.numComps * (highVal + 1);
    this.lookup = new Uint8Array(length);
    if (lookup instanceof BaseStream) {
      const bytes = lookup.getBytes(length);
      this.lookup.set(bytes);
    } else if (typeof lookup === "string") {
      for (let i = 0; i < length; ++i) {
        this.lookup[i] = lookup.charCodeAt(i) & 0xff;
      }
    } else {
      throw new FormatError(`IndexedCS - unrecognized lookup table: ${lookup}`);
    }
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    const {
      base,
      highVal,
      lookup
    } = this;
    const start = MathClamp(Math.round(src[srcOffset]), 0, highVal) * base.numComps;
    base.getRgbBuffer(lookup, start, 1, dest, destOffset, 8, 0);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const {
      base,
      highVal,
      lookup
    } = this;
    const {
      numComps
    } = base;
    const outputDelta = base.getOutputLength(numComps, alpha01);
    for (let i = 0; i < count; ++i) {
      const lookupPos = MathClamp(Math.round(src[srcOffset++]), 0, highVal) * numComps;
      base.getRgbBuffer(lookup, lookupPos, 1, dest, destOffset, 8, alpha01);
      destOffset += outputDelta;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return this.base.getOutputLength(inputLength * this.base.numComps, alpha01);
  }
  isDefaultDecode(decodeMap, bpc) {
    if (!Array.isArray(decodeMap)) {
      return true;
    }
    if (decodeMap.length !== 2) {
      warn("Decode map length is not correct");
      return true;
    }
    if (!Number.isInteger(bpc) || bpc < 1) {
      warn("Bits per component is not correct");
      return true;
    }
    return decodeMap[0] === 0 && decodeMap[1] === (1 << bpc) - 1;
  }
}
class DeviceGrayCS extends ColorSpace {
  constructor() {
    super("DeviceGray", 1);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    const c = src[srcOffset] * 255;
    dest[destOffset] = dest[destOffset + 1] = dest[destOffset + 2] = c;
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const scale = 255 / ((1 << bits) - 1);
    let j = srcOffset,
      q = destOffset;
    for (let i = 0; i < count; ++i) {
      const c = scale * src[j++];
      dest[q++] = c;
      dest[q++] = c;
      dest[q++] = c;
      q += alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01);
  }
}
class DeviceRgbCS extends ColorSpace {
  constructor() {
    super("DeviceRGB", 3);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    dest[destOffset] = src[srcOffset] * 255;
    dest[destOffset + 1] = src[srcOffset + 1] * 255;
    dest[destOffset + 2] = src[srcOffset + 2] * 255;
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    if (bits === 8 && alpha01 === 0) {
      dest.set(src.subarray(srcOffset, srcOffset + count * 3), destOffset);
      return;
    }
    const scale = 255 / ((1 << bits) - 1);
    let j = srcOffset,
      q = destOffset;
    for (let i = 0; i < count; ++i) {
      dest[q++] = scale * src[j++];
      dest[q++] = scale * src[j++];
      dest[q++] = scale * src[j++];
      q += alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01) / 3 | 0;
  }
  isPassthrough(bits) {
    return bits === 8;
  }
}
class DeviceRgbaCS extends ColorSpace {
  constructor() {
    super("DeviceRGBA", 4);
  }
  getOutputLength(inputLength, _alpha01) {
    return inputLength * 4;
  }
  isPassthrough(bits) {
    return bits === 8;
  }
  fillRgb(dest, originalWidth, originalHeight, width, height, actualHeight, bpc, comps, alpha01) {
    if (originalHeight !== height || originalWidth !== width) {
      resizeRgbaImage(comps, dest, originalWidth, originalHeight, width, height, alpha01);
    } else {
      copyRgbaImage(comps, dest, alpha01);
    }
  }
}
class DeviceCmykCS extends ColorSpace {
  constructor() {
    super("DeviceCMYK", 4);
  }
  #toRgb(src, srcOffset, srcScale, dest, destOffset) {
    const c = src[srcOffset] * srcScale;
    const m = src[srcOffset + 1] * srcScale;
    const y = src[srcOffset + 2] * srcScale;
    const k = src[srcOffset + 3] * srcScale;
    dest[destOffset] = 255 + c * (-4.387332384609988 * c + 54.48615194189176 * m + 18.82290502165302 * y + 212.25662451639585 * k + -285.2331026137004) + m * (1.7149763477362134 * m - 5.6096736904047315 * y + -17.873870861415444 * k - 5.497006427196366) + y * (-2.5217340131683033 * y - 21.248923337353073 * k + 17.5119270841813) + k * (-21.86122147463605 * k - 189.48180835922747);
    dest[destOffset + 1] = 255 + c * (8.841041422036149 * c + 60.118027045597366 * m + 6.871425592049007 * y + 31.159100130055922 * k + -79.2970844816548) + m * (-15.310361306967817 * m + 17.575251261109482 * y + 131.35250912493976 * k - 190.9453302588951) + y * (4.444339102852739 * y + 9.8632861493405 * k - 24.86741582555878) + k * (-20.737325471181034 * k - 187.80453709719578);
    dest[destOffset + 2] = 255 + c * (0.8842522430003296 * c + 8.078677503112928 * m + 30.89978309703729 * y - 0.23883238689178934 * k + -14.183576799673286) + m * (10.49593273432072 * m + 63.02378494754052 * y + 50.606957656360734 * k - 112.23884253719248) + y * (0.03296041114873217 * y + 115.60384449646641 * k + -193.58209356861505) + k * (-22.33816807309886 * k - 180.12613974708367);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    this.#toRgb(src, srcOffset, 1, dest, destOffset);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const scale = 1 / ((1 << bits) - 1);
    for (let i = 0; i < count; i++) {
      this.#toRgb(src, srcOffset, scale, dest, destOffset);
      srcOffset += 4;
      destOffset += 3 + alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength / 4 * (3 + alpha01) | 0;
  }
}
class CalGrayCS extends ColorSpace {
  constructor(whitePoint, blackPoint, gamma) {
    super("CalGray", 1);
    if (!whitePoint) {
      throw new FormatError("WhitePoint missing - required for color space CalGray");
    }
    [this.XW, this.YW, this.ZW] = whitePoint;
    [this.XB, this.YB, this.ZB] = blackPoint || [0, 0, 0];
    this.G = gamma || 1;
    if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
      throw new FormatError(`Invalid WhitePoint components for ${this.name}, no fallback available`);
    }
    if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
      info(`Invalid BlackPoint for ${this.name}, falling back to default.`);
      this.XB = this.YB = this.ZB = 0;
    }
    if (this.XB !== 0 || this.YB !== 0 || this.ZB !== 0) {
      warn(`${this.name}, BlackPoint: XB: ${this.XB}, YB: ${this.YB}, ` + `ZB: ${this.ZB}, only default values are supported.`);
    }
    if (this.G < 1) {
      info(`Invalid Gamma: ${this.G} for ${this.name}, falling back to default.`);
      this.G = 1;
    }
  }
  #toRgb(src, srcOffset, dest, destOffset, scale) {
    const A = src[srcOffset] * scale;
    const AG = A ** this.G;
    const L = this.YW * AG;
    const val = Math.max(295.8 * L ** 0.3333333333333333 - 40.8, 0);
    dest[destOffset] = val;
    dest[destOffset + 1] = val;
    dest[destOffset + 2] = val;
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    this.#toRgb(src, srcOffset, dest, destOffset, 1);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const scale = 1 / ((1 << bits) - 1);
    for (let i = 0; i < count; ++i) {
      this.#toRgb(src, srcOffset, dest, destOffset, scale);
      srcOffset += 1;
      destOffset += 3 + alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01);
  }
}
class CalRGBCS extends ColorSpace {
  static #BRADFORD_SCALE_MATRIX = new Float32Array([0.8951, 0.2664, -0.1614, -0.7502, 1.7135, 0.0367, 0.0389, -0.0685, 1.0296]);
  static #BRADFORD_SCALE_INVERSE_MATRIX = new Float32Array([0.9869929, -0.1470543, 0.1599627, 0.4323053, 0.5183603, 0.0492912, -0.0085287, 0.0400428, 0.9684867]);
  static #SRGB_D65_XYZ_TO_RGB_MATRIX = new Float32Array([3.2404542, -1.5371385, -0.4985314, -0.9692660, 1.8760108, 0.0415560, 0.0556434, -0.2040259, 1.0572252]);
  static #FLAT_WHITEPOINT_MATRIX = new Float32Array([1, 1, 1]);
  static #tempNormalizeMatrix = new Float32Array(3);
  static #tempConvertMatrix1 = new Float32Array(3);
  static #tempConvertMatrix2 = new Float32Array(3);
  static #DECODE_L_CONSTANT = ((8 + 16) / 116) ** 3 / 8.0;
  constructor(whitePoint, blackPoint, gamma, matrix) {
    super("CalRGB", 3);
    if (!whitePoint) {
      throw new FormatError("WhitePoint missing - required for color space CalRGB");
    }
    const [XW, YW, ZW] = this.whitePoint = whitePoint;
    const [XB, YB, ZB] = this.blackPoint = blackPoint || new Float32Array(3);
    [this.GR, this.GG, this.GB] = gamma || new Float32Array([1, 1, 1]);
    [this.MXA, this.MYA, this.MZA, this.MXB, this.MYB, this.MZB, this.MXC, this.MYC, this.MZC] = matrix || new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    if (XW < 0 || ZW < 0 || YW !== 1) {
      throw new FormatError(`Invalid WhitePoint components for ${this.name}, no fallback available`);
    }
    if (XB < 0 || YB < 0 || ZB < 0) {
      info(`Invalid BlackPoint for ${this.name} [${XB}, ${YB}, ${ZB}], ` + "falling back to default.");
      this.blackPoint = new Float32Array(3);
    }
    if (this.GR < 0 || this.GG < 0 || this.GB < 0) {
      info(`Invalid Gamma [${this.GR}, ${this.GG}, ${this.GB}] for ` + `${this.name}, falling back to default.`);
      this.GR = this.GG = this.GB = 1;
    }
  }
  #matrixProduct(a, b, result) {
    result[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    result[1] = a[3] * b[0] + a[4] * b[1] + a[5] * b[2];
    result[2] = a[6] * b[0] + a[7] * b[1] + a[8] * b[2];
  }
  #toFlat(sourceWhitePoint, LMS, result) {
    result[0] = LMS[0] * 1 / sourceWhitePoint[0];
    result[1] = LMS[1] * 1 / sourceWhitePoint[1];
    result[2] = LMS[2] * 1 / sourceWhitePoint[2];
  }
  #toD65(sourceWhitePoint, LMS, result) {
    const D65X = 0.95047;
    const D65Y = 1;
    const D65Z = 1.08883;
    result[0] = LMS[0] * D65X / sourceWhitePoint[0];
    result[1] = LMS[1] * D65Y / sourceWhitePoint[1];
    result[2] = LMS[2] * D65Z / sourceWhitePoint[2];
  }
  #sRGBTransferFunction(color) {
    if (color <= 0.0031308) {
      return MathClamp(12.92 * color, 0, 1);
    }
    if (color >= 0.99554525) {
      return 1;
    }
    return MathClamp((1 + 0.055) * color ** (1 / 2.4) - 0.055, 0, 1);
  }
  #decodeL(L) {
    if (L < 0) {
      return -this.#decodeL(-L);
    }
    if (L > 8.0) {
      return ((L + 16) / 116) ** 3;
    }
    return L * CalRGBCS.#DECODE_L_CONSTANT;
  }
  #compensateBlackPoint(sourceBlackPoint, XYZ_Flat, result) {
    if (sourceBlackPoint[0] === 0 && sourceBlackPoint[1] === 0 && sourceBlackPoint[2] === 0) {
      result[0] = XYZ_Flat[0];
      result[1] = XYZ_Flat[1];
      result[2] = XYZ_Flat[2];
      return;
    }
    const zeroDecodeL = this.#decodeL(0);
    const X_DST = zeroDecodeL;
    const X_SRC = this.#decodeL(sourceBlackPoint[0]);
    const Y_DST = zeroDecodeL;
    const Y_SRC = this.#decodeL(sourceBlackPoint[1]);
    const Z_DST = zeroDecodeL;
    const Z_SRC = this.#decodeL(sourceBlackPoint[2]);
    const X_Scale = (1 - X_DST) / (1 - X_SRC);
    const X_Offset = 1 - X_Scale;
    const Y_Scale = (1 - Y_DST) / (1 - Y_SRC);
    const Y_Offset = 1 - Y_Scale;
    const Z_Scale = (1 - Z_DST) / (1 - Z_SRC);
    const Z_Offset = 1 - Z_Scale;
    result[0] = XYZ_Flat[0] * X_Scale + X_Offset;
    result[1] = XYZ_Flat[1] * Y_Scale + Y_Offset;
    result[2] = XYZ_Flat[2] * Z_Scale + Z_Offset;
  }
  #normalizeWhitePointToFlat(sourceWhitePoint, XYZ_In, result) {
    if (sourceWhitePoint[0] === 1 && sourceWhitePoint[2] === 1) {
      result[0] = XYZ_In[0];
      result[1] = XYZ_In[1];
      result[2] = XYZ_In[2];
      return;
    }
    const LMS = result;
    this.#matrixProduct(CalRGBCS.#BRADFORD_SCALE_MATRIX, XYZ_In, LMS);
    const LMS_Flat = CalRGBCS.#tempNormalizeMatrix;
    this.#toFlat(sourceWhitePoint, LMS, LMS_Flat);
    this.#matrixProduct(CalRGBCS.#BRADFORD_SCALE_INVERSE_MATRIX, LMS_Flat, result);
  }
  #normalizeWhitePointToD65(sourceWhitePoint, XYZ_In, result) {
    const LMS = result;
    this.#matrixProduct(CalRGBCS.#BRADFORD_SCALE_MATRIX, XYZ_In, LMS);
    const LMS_D65 = CalRGBCS.#tempNormalizeMatrix;
    this.#toD65(sourceWhitePoint, LMS, LMS_D65);
    this.#matrixProduct(CalRGBCS.#BRADFORD_SCALE_INVERSE_MATRIX, LMS_D65, result);
  }
  #toRgb(src, srcOffset, dest, destOffset, scale) {
    const A = MathClamp(src[srcOffset] * scale, 0, 1);
    const B = MathClamp(src[srcOffset + 1] * scale, 0, 1);
    const C = MathClamp(src[srcOffset + 2] * scale, 0, 1);
    const AGR = A === 1 ? 1 : A ** this.GR;
    const BGG = B === 1 ? 1 : B ** this.GG;
    const CGB = C === 1 ? 1 : C ** this.GB;
    const X = this.MXA * AGR + this.MXB * BGG + this.MXC * CGB;
    const Y = this.MYA * AGR + this.MYB * BGG + this.MYC * CGB;
    const Z = this.MZA * AGR + this.MZB * BGG + this.MZC * CGB;
    const XYZ = CalRGBCS.#tempConvertMatrix1;
    XYZ[0] = X;
    XYZ[1] = Y;
    XYZ[2] = Z;
    const XYZ_Flat = CalRGBCS.#tempConvertMatrix2;
    this.#normalizeWhitePointToFlat(this.whitePoint, XYZ, XYZ_Flat);
    const XYZ_Black = CalRGBCS.#tempConvertMatrix1;
    this.#compensateBlackPoint(this.blackPoint, XYZ_Flat, XYZ_Black);
    const XYZ_D65 = CalRGBCS.#tempConvertMatrix2;
    this.#normalizeWhitePointToD65(CalRGBCS.#FLAT_WHITEPOINT_MATRIX, XYZ_Black, XYZ_D65);
    const SRGB = CalRGBCS.#tempConvertMatrix1;
    this.#matrixProduct(CalRGBCS.#SRGB_D65_XYZ_TO_RGB_MATRIX, XYZ_D65, SRGB);
    dest[destOffset] = this.#sRGBTransferFunction(SRGB[0]) * 255;
    dest[destOffset + 1] = this.#sRGBTransferFunction(SRGB[1]) * 255;
    dest[destOffset + 2] = this.#sRGBTransferFunction(SRGB[2]) * 255;
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    this.#toRgb(src, srcOffset, dest, destOffset, 1);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const scale = 1 / ((1 << bits) - 1);
    for (let i = 0; i < count; ++i) {
      this.#toRgb(src, srcOffset, dest, destOffset, scale);
      srcOffset += 3;
      destOffset += 3 + alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01) / 3 | 0;
  }
}
class LabCS extends ColorSpace {
  constructor(whitePoint, blackPoint, range) {
    super("Lab", 3);
    if (!whitePoint) {
      throw new FormatError("WhitePoint missing - required for color space Lab");
    }
    [this.XW, this.YW, this.ZW] = whitePoint;
    [this.amin, this.amax, this.bmin, this.bmax] = range || [-100, 100, -100, 100];
    [this.XB, this.YB, this.ZB] = blackPoint || [0, 0, 0];
    if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
      throw new FormatError("Invalid WhitePoint components, no fallback available");
    }
    if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
      info("Invalid BlackPoint, falling back to default");
      this.XB = this.YB = this.ZB = 0;
    }
    if (this.amin > this.amax || this.bmin > this.bmax) {
      info("Invalid Range, falling back to defaults");
      this.amin = -100;
      this.amax = 100;
      this.bmin = -100;
      this.bmax = 100;
    }
  }
  #fn_g(x) {
    return x >= 6 / 29 ? x ** 3 : 108 / 841 * (x - 4 / 29);
  }
  #decode(value, high1, low2, high2) {
    return low2 + value * (high2 - low2) / high1;
  }
  #toRgb(src, srcOffset, maxVal, dest, destOffset) {
    let Ls = src[srcOffset];
    let as = src[srcOffset + 1];
    let bs = src[srcOffset + 2];
    if (maxVal !== false) {
      Ls = this.#decode(Ls, maxVal, 0, 100);
      as = this.#decode(as, maxVal, this.amin, this.amax);
      bs = this.#decode(bs, maxVal, this.bmin, this.bmax);
    }
    if (as > this.amax) {
      as = this.amax;
    } else if (as < this.amin) {
      as = this.amin;
    }
    if (bs > this.bmax) {
      bs = this.bmax;
    } else if (bs < this.bmin) {
      bs = this.bmin;
    }
    const M = (Ls + 16) / 116;
    const L = M + as / 500;
    const N = M - bs / 200;
    const X = this.XW * this.#fn_g(L);
    const Y = this.YW * this.#fn_g(M);
    const Z = this.ZW * this.#fn_g(N);
    let r, g, b;
    if (this.ZW < 1) {
      r = X * 3.1339 + Y * -1.617 + Z * -0.4906;
      g = X * -0.9785 + Y * 1.916 + Z * 0.0333;
      b = X * 0.072 + Y * -0.229 + Z * 1.4057;
    } else {
      r = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
      g = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
      b = X * 0.0557 + Y * -0.204 + Z * 1.057;
    }
    dest[destOffset] = Math.sqrt(r) * 255;
    dest[destOffset + 1] = Math.sqrt(g) * 255;
    dest[destOffset + 2] = Math.sqrt(b) * 255;
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    this.#toRgb(src, srcOffset, false, dest, destOffset);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const maxVal = (1 << bits) - 1;
    for (let i = 0; i < count; i++) {
      this.#toRgb(src, srcOffset, maxVal, dest, destOffset);
      srcOffset += 3;
      destOffset += 3 + alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01) / 3 | 0;
  }
  isDefaultDecode(decodeMap, bpc) {
    return true;
  }
  get usesZeroToOneRange() {
    return shadow(this, "usesZeroToOneRange", false);
  }
}

;// ./src/core/icc_colorspace.js




function fetchSync(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.responseType = "arraybuffer";
  xhr.send(null);
  return xhr.response;
}
class IccColorSpace extends ColorSpace {
  #transformer;
  #convertPixel;
  static #useWasm = true;
  static #wasmUrl = null;
  static #finalizer = null;
  constructor(iccProfile, name, numComps) {
    if (!IccColorSpace.isUsable) {
      throw new Error("No ICC color space support");
    }
    super(name, numComps);
    let inType;
    switch (numComps) {
      case 1:
        inType = DataType.Gray8;
        this.#convertPixel = (src, srcOffset, css) => qcms_convert_one(this.#transformer, src[srcOffset] * 255, css);
        break;
      case 3:
        inType = DataType.RGB8;
        this.#convertPixel = (src, srcOffset, css) => qcms_convert_three(this.#transformer, src[srcOffset] * 255, src[srcOffset + 1] * 255, src[srcOffset + 2] * 255, css);
        break;
      case 4:
        inType = DataType.CMYK;
        this.#convertPixel = (src, srcOffset, css) => qcms_convert_four(this.#transformer, src[srcOffset] * 255, src[srcOffset + 1] * 255, src[srcOffset + 2] * 255, src[srcOffset + 3] * 255, css);
        break;
      default:
        throw new Error(`Unsupported number of components: ${numComps}`);
    }
    this.#transformer = qcms_transformer_from_memory(iccProfile, inType, Intent.Perceptual);
    if (!this.#transformer) {
      throw new Error("Failed to create ICC color space");
    }
    IccColorSpace.#finalizer ||= new FinalizationRegistry(transformer => {
      qcms_drop_transformer(transformer);
    });
    IccColorSpace.#finalizer.register(this, this.#transformer);
  }
  getRgbHex(src, srcOffset) {
    this.#convertPixel(src, srcOffset, true);
    return QCMS._cssColor;
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    QCMS._destBuffer = dest;
    QCMS._destOffset = destOffset;
    QCMS._destLength = 3;
    this.#convertPixel(src, srcOffset, false);
    QCMS._destBuffer = null;
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    src = src.subarray(srcOffset, srcOffset + count * this.numComps);
    if (bits !== 8) {
      const scale = 255 / ((1 << bits) - 1);
      for (let i = 0, ii = src.length; i < ii; i++) {
        src[i] *= scale;
      }
    }
    QCMS._mustAddAlpha = alpha01 && dest.buffer === src.buffer;
    QCMS._destBuffer = dest;
    QCMS._destOffset = destOffset;
    QCMS._destLength = count * (3 + alpha01);
    qcms_convert_array(this.#transformer, src);
    QCMS._mustAddAlpha = false;
    QCMS._destBuffer = null;
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength / this.numComps * (3 + alpha01) | 0;
  }
  static setOptions({
    useWasm,
    useWorkerFetch,
    wasmUrl
  }) {
    if (!useWorkerFetch) {
      this.#useWasm = false;
      return;
    }
    this.#useWasm = useWasm;
    this.#wasmUrl = wasmUrl;
  }
  static get isUsable() {
    let isUsable = false;
    if (this.#useWasm) {
      if (this.#wasmUrl) {
        try {
          this._module = initSync({
            module: fetchSync(`${this.#wasmUrl}qcms_bg.wasm`)
          });
          isUsable = !!this._module;
          QCMS._memory = this._module.memory;
          QCMS._makeHexColor = Util.makeHexColor;
        } catch (e) {
          warn(`ICCBased color space: "${e}".`);
        }
      } else {
        warn("No ICC color space support due to missing `wasmUrl` API option");
      }
    }
    return shadow(this, "isUsable", isUsable);
  }
}
class CmykICCBasedCS extends IccColorSpace {
  static #iccUrl;
  constructor() {
    const iccProfile = new Uint8Array(fetchSync(`${CmykICCBasedCS.#iccUrl}CGATS001Compat-v2-micro.icc`));
    super(iccProfile, "DeviceCMYK", 4);
  }
  static setOptions({
    iccUrl
  }) {
    this.#iccUrl = iccUrl;
  }
  static get isUsable() {
    let isUsable = false;
    if (IccColorSpace.isUsable) {
      if (this.#iccUrl) {
        isUsable = true;
      } else {
        warn("No CMYK ICC profile support due to missing `iccUrl` API option");
      }
    }
    return shadow(this, "isUsable", isUsable);
  }
}

;// ./src/core/stream.js


class Stream extends BaseStream {
  constructor(arrayBuffer, start, length, dict) {
    super();
    this.bytes = arrayBuffer instanceof Uint8Array ? arrayBuffer : new Uint8Array(arrayBuffer);
    this.start = start || 0;
    this.pos = this.start;
    this.end = start + length || this.bytes.length;
    this.dict = dict;
  }
  get length() {
    return this.end - this.start;
  }
  get isEmpty() {
    return this.length === 0;
  }
  getByte() {
    if (this.pos >= this.end) {
      return -1;
    }
    return this.bytes[this.pos++];
  }
  getBytes(length) {
    const bytes = this.bytes;
    const pos = this.pos;
    const strEnd = this.end;
    if (!length) {
      return bytes.subarray(pos, strEnd);
    }
    let end = pos + length;
    if (end > strEnd) {
      end = strEnd;
    }
    this.pos = end;
    return bytes.subarray(pos, end);
  }
  getByteRange(begin, end) {
    if (begin < 0) {
      begin = 0;
    }
    if (end > this.end) {
      end = this.end;
    }
    return this.bytes.subarray(begin, end);
  }
  reset() {
    this.pos = this.start;
  }
  moveStart() {
    this.start = this.pos;
  }
  makeSubStream(start, length, dict = null) {
    return new Stream(this.bytes.buffer, start, length, dict);
  }
}
class StringStream extends Stream {
  constructor(str) {
    super(stringToBytes(str));
  }
}
class NullStream extends Stream {
  constructor() {
    super(new Uint8Array(0));
  }
}

;// ./src/core/chunked_stream.js



class ChunkedStream extends Stream {
  constructor(length, chunkSize, manager) {
    super(new Uint8Array(length), 0, length, null);
    this.chunkSize = chunkSize;
    this._loadedChunks = new Set();
    this.numChunks = Math.ceil(length / chunkSize);
    this.manager = manager;
    this.progressiveDataLength = 0;
    this.lastSuccessfulEnsureByteChunk = -1;
  }
  getMissingChunks() {
    const chunks = [];
    for (let chunk = 0, n = this.numChunks; chunk < n; ++chunk) {
      if (!this._loadedChunks.has(chunk)) {
        chunks.push(chunk);
      }
    }
    return chunks;
  }
  get numChunksLoaded() {
    return this._loadedChunks.size;
  }
  get isDataLoaded() {
    return this.numChunksLoaded === this.numChunks;
  }
  onReceiveData(begin, chunk) {
    const chunkSize = this.chunkSize;
    if (begin % chunkSize !== 0) {
      throw new Error(`Bad begin offset: ${begin}`);
    }
    const end = begin + chunk.byteLength;
    if (end % chunkSize !== 0 && end !== this.bytes.length) {
      throw new Error(`Bad end offset: ${end}`);
    }
    this.bytes.set(new Uint8Array(chunk), begin);
    const beginChunk = Math.floor(begin / chunkSize);
    const endChunk = Math.floor((end - 1) / chunkSize) + 1;
    for (let curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
      this._loadedChunks.add(curChunk);
    }
  }
  onReceiveProgressiveData(data) {
    let position = this.progressiveDataLength;
    const beginChunk = Math.floor(position / this.chunkSize);
    this.bytes.set(new Uint8Array(data), position);
    position += data.byteLength;
    this.progressiveDataLength = position;
    const endChunk = position >= this.end ? this.numChunks : Math.floor(position / this.chunkSize);
    for (let curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
      this._loadedChunks.add(curChunk);
    }
  }
  ensureByte(pos) {
    if (pos < this.progressiveDataLength) {
      return;
    }
    const chunk = Math.floor(pos / this.chunkSize);
    if (chunk > this.numChunks) {
      return;
    }
    if (chunk === this.lastSuccessfulEnsureByteChunk) {
      return;
    }
    if (!this._loadedChunks.has(chunk)) {
      throw new MissingDataException(pos, pos + 1);
    }
    this.lastSuccessfulEnsureByteChunk = chunk;
  }
  ensureRange(begin, end) {
    if (begin >= end) {
      return;
    }
    if (end <= this.progressiveDataLength) {
      return;
    }
    const beginChunk = Math.floor(begin / this.chunkSize);
    if (beginChunk > this.numChunks) {
      return;
    }
    const endChunk = Math.min(Math.floor((end - 1) / this.chunkSize) + 1, this.numChunks);
    for (let chunk = beginChunk; chunk < endChunk; ++chunk) {
      if (!this._loadedChunks.has(chunk)) {
        throw new MissingDataException(begin, end);
      }
    }
  }
  nextEmptyChunk(beginChunk) {
    const numChunks = this.numChunks;
    for (let i = 0; i < numChunks; ++i) {
      const chunk = (beginChunk + i) % numChunks;
      if (!this._loadedChunks.has(chunk)) {
        return chunk;
      }
    }
    return null;
  }
  hasChunk(chunk) {
    return this._loadedChunks.has(chunk);
  }
  getByte() {
    const pos = this.pos;
    if (pos >= this.end) {
      return -1;
    }
    if (pos >= this.progressiveDataLength) {
      this.ensureByte(pos);
    }
    return this.bytes[this.pos++];
  }
  getBytes(length) {
    const bytes = this.bytes;
    const pos = this.pos;
    const strEnd = this.end;
    if (!length) {
      if (strEnd > this.progressiveDataLength) {
        this.ensureRange(pos, strEnd);
      }
      return bytes.subarray(pos, strEnd);
    }
    let end = pos + length;
    if (end > strEnd) {
      end = strEnd;
    }
    if (end > this.progressiveDataLength) {
      this.ensureRange(pos, end);
    }
    this.pos = end;
    return bytes.subarray(pos, end);
  }
  getByteRange(begin, end) {
    if (begin < 0) {
      begin = 0;
    }
    if (end > this.end) {
      end = this.end;
    }
    if (end > this.progressiveDataLength) {
      this.ensureRange(begin, end);
    }
    return this.bytes.subarray(begin, end);
  }
  makeSubStream(start, length, dict = null) {
    if (length) {
      if (start + length > this.progressiveDataLength) {
        this.ensureRange(start, start + length);
      }
    } else if (start >= this.progressiveDataLength) {
      this.ensureByte(start);
    }
    function ChunkedStreamSubstream() {}
    ChunkedStreamSubstream.prototype = Object.create(this);
    ChunkedStreamSubstream.prototype.getMissingChunks = function () {
      const chunkSize = this.chunkSize;
      const beginChunk = Math.floor(this.start / chunkSize);
      const endChunk = Math.floor((this.end - 1) / chunkSize) + 1;
      const missingChunks = [];
      for (let chunk = beginChunk; chunk < endChunk; ++chunk) {
        if (!this._loadedChunks.has(chunk)) {
          missingChunks.push(chunk);
        }
      }
      return missingChunks;
    };
    Object.defineProperty(ChunkedStreamSubstream.prototype, "isDataLoaded", {
      get() {
        if (this.numChunksLoaded === this.numChunks) {
          return true;
        }
        return this.getMissingChunks().length === 0;
      },
      configurable: true
    });
    const subStream = new ChunkedStreamSubstream();
    subStream.pos = subStream.start = start;
    subStream.end = start + length || this.end;
    subStream.dict = dict;
    return subStream;
  }
  getBaseStreams() {
    return [this];
  }
}
class ChunkedStreamManager {
  constructor(pdfNetworkStream, args) {
    this.length = args.length;
    this.chunkSize = args.rangeChunkSize;
    this.stream = new ChunkedStream(this.length, this.chunkSize, this);
    this.pdfNetworkStream = pdfNetworkStream;
    this.disableAutoFetch = args.disableAutoFetch;
    this.msgHandler = args.msgHandler;
    this.currRequestId = 0;
    this._chunksNeededByRequest = new Map();
    this._requestsByChunk = new Map();
    this._promisesByRequest = new Map();
    this.progressiveDataLength = 0;
    this.aborted = false;
    this._loadedStreamCapability = Promise.withResolvers();
  }
  sendRequest(begin, end) {
    const rangeReader = this.pdfNetworkStream.getRangeReader(begin, end);
    if (!rangeReader.isStreamingSupported) {
      rangeReader.onProgress = this.onProgress.bind(this);
    }
    let chunks = [],
      loaded = 0;
    return new Promise((resolve, reject) => {
      const readChunk = ({
        value,
        done
      }) => {
        try {
          if (done) {
            const chunkData = arrayBuffersToBytes(chunks);
            chunks = null;
            resolve(chunkData);
            return;
          }
          loaded += value.byteLength;
          if (rangeReader.isStreamingSupported) {
            this.onProgress({
              loaded
            });
          }
          chunks.push(value);
          rangeReader.read().then(readChunk, reject);
        } catch (e) {
          reject(e);
        }
      };
      rangeReader.read().then(readChunk, reject);
    }).then(data => {
      if (this.aborted) {
        return;
      }
      this.onReceiveData({
        chunk: data,
        begin
      });
    });
  }
  requestAllChunks(noFetch = false) {
    if (!noFetch) {
      const missingChunks = this.stream.getMissingChunks();
      this._requestChunks(missingChunks);
    }
    return this._loadedStreamCapability.promise;
  }
  _requestChunks(chunks) {
    const requestId = this.currRequestId++;
    const chunksNeeded = new Set();
    this._chunksNeededByRequest.set(requestId, chunksNeeded);
    for (const chunk of chunks) {
      if (!this.stream.hasChunk(chunk)) {
        chunksNeeded.add(chunk);
      }
    }
    if (chunksNeeded.size === 0) {
      return Promise.resolve();
    }
    const capability = Promise.withResolvers();
    this._promisesByRequest.set(requestId, capability);
    const chunksToRequest = [];
    for (const chunk of chunksNeeded) {
      let requestIds = this._requestsByChunk.get(chunk);
      if (!requestIds) {
        requestIds = [];
        this._requestsByChunk.set(chunk, requestIds);
        chunksToRequest.push(chunk);
      }
      requestIds.push(requestId);
    }
    if (chunksToRequest.length > 0) {
      const groupedChunksToRequest = this.groupChunks(chunksToRequest);
      for (const groupedChunk of groupedChunksToRequest) {
        const begin = groupedChunk.beginChunk * this.chunkSize;
        const end = Math.min(groupedChunk.endChunk * this.chunkSize, this.length);
        this.sendRequest(begin, end).catch(capability.reject);
      }
    }
    return capability.promise.catch(reason => {
      if (this.aborted) {
        return;
      }
      throw reason;
    });
  }
  getStream() {
    return this.stream;
  }
  requestRange(begin, end) {
    end = Math.min(end, this.length);
    const beginChunk = this.getBeginChunk(begin);
    const endChunk = this.getEndChunk(end);
    const chunks = [];
    for (let chunk = beginChunk; chunk < endChunk; ++chunk) {
      chunks.push(chunk);
    }
    return this._requestChunks(chunks);
  }
  requestRanges(ranges = []) {
    const chunksToRequest = [];
    for (const range of ranges) {
      const beginChunk = this.getBeginChunk(range.begin);
      const endChunk = this.getEndChunk(range.end);
      for (let chunk = beginChunk; chunk < endChunk; ++chunk) {
        if (!chunksToRequest.includes(chunk)) {
          chunksToRequest.push(chunk);
        }
      }
    }
    chunksToRequest.sort((a, b) => a - b);
    return this._requestChunks(chunksToRequest);
  }
  groupChunks(chunks) {
    const groupedChunks = [];
    let beginChunk = -1;
    let prevChunk = -1;
    for (let i = 0, ii = chunks.length; i < ii; ++i) {
      const chunk = chunks[i];
      if (beginChunk < 0) {
        beginChunk = chunk;
      }
      if (prevChunk >= 0 && prevChunk + 1 !== chunk) {
        groupedChunks.push({
          beginChunk,
          endChunk: prevChunk + 1
        });
        beginChunk = chunk;
      }
      if (i + 1 === chunks.length) {
        groupedChunks.push({
          beginChunk,
          endChunk: chunk + 1
        });
      }
      prevChunk = chunk;
    }
    return groupedChunks;
  }
  onProgress(args) {
    this.msgHandler.send("DocProgress", {
      loaded: this.stream.numChunksLoaded * this.chunkSize + args.loaded,
      total: this.length
    });
  }
  onReceiveData(args) {
    const chunk = args.chunk;
    const isProgressive = args.begin === undefined;
    const begin = isProgressive ? this.progressiveDataLength : args.begin;
    const end = begin + chunk.byteLength;
    const beginChunk = Math.floor(begin / this.chunkSize);
    const endChunk = end < this.length ? Math.floor(end / this.chunkSize) : Math.ceil(end / this.chunkSize);
    if (isProgressive) {
      this.stream.onReceiveProgressiveData(chunk);
      this.progressiveDataLength = end;
    } else {
      this.stream.onReceiveData(begin, chunk);
    }
    if (this.stream.isDataLoaded) {
      this._loadedStreamCapability.resolve(this.stream);
    }
    const loadedRequests = [];
    for (let curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
      const requestIds = this._requestsByChunk.get(curChunk);
      if (!requestIds) {
        continue;
      }
      this._requestsByChunk.delete(curChunk);
      for (const requestId of requestIds) {
        const chunksNeeded = this._chunksNeededByRequest.get(requestId);
        if (chunksNeeded.has(curChunk)) {
          chunksNeeded.delete(curChunk);
        }
        if (chunksNeeded.size > 0) {
          continue;
        }
        loadedRequests.push(requestId);
      }
    }
    if (!this.disableAutoFetch && this._requestsByChunk.size === 0) {
      let nextEmptyChunk;
      if (this.stream.numChunksLoaded === 1) {
        const lastChunk = this.stream.numChunks - 1;
        if (!this.stream.hasChunk(lastChunk)) {
          nextEmptyChunk = lastChunk;
        }
      } else {
        nextEmptyChunk = this.stream.nextEmptyChunk(endChunk);
      }
      if (Number.isInteger(nextEmptyChunk)) {
        this._requestChunks([nextEmptyChunk]);
      }
    }
    for (const requestId of loadedRequests) {
      const capability = this._promisesByRequest.get(requestId);
      this._promisesByRequest.delete(requestId);
      capability.resolve();
    }
    this.msgHandler.send("DocProgress", {
      loaded: this.stream.numChunksLoaded * this.chunkSize,
      total: this.length
    });
  }
  onError(err) {
    this._loadedStreamCapability.reject(err);
  }
  getBeginChunk(begin) {
    return Math.floor(begin / this.chunkSize);
  }
  getEndChunk(end) {
    return Math.floor((end - 1) / this.chunkSize) + 1;
  }
  abort(reason) {
    this.aborted = true;
    this.pdfNetworkStream?.cancelAllRequests(reason);
    for (const capability of this._promisesByRequest.values()) {
      capability.reject(reason);
    }
  }
}

;// ./src/shared/image_utils.js

function convertToRGBA(params) {
  switch (params.kind) {
    case ImageKind.GRAYSCALE_1BPP:
      return convertBlackAndWhiteToRGBA(params);
    case ImageKind.RGB_24BPP:
      return convertRGBToRGBA(params);
  }
  return null;
}
function convertBlackAndWhiteToRGBA({
  src,
  srcPos = 0,
  dest,
  width,
  height,
  nonBlackColor = 0xffffffff,
  inverseDecode = false
}) {
  const black = FeatureTest.isLittleEndian ? 0xff000000 : 0x000000ff;
  const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
  const widthInSource = width >> 3;
  const widthRemainder = width & 7;
  const srcLength = src.length;
  dest = new Uint32Array(dest.buffer);
  let destPos = 0;
  for (let i = 0; i < height; i++) {
    for (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
      const elem = srcPos < srcLength ? src[srcPos] : 255;
      dest[destPos++] = elem & 0b10000000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1000000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b100000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b10000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b100 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b10 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1 ? oneMapping : zeroMapping;
    }
    if (widthRemainder === 0) {
      continue;
    }
    const elem = srcPos < srcLength ? src[srcPos++] : 255;
    for (let j = 0; j < widthRemainder; j++) {
      dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
    }
  }
  return {
    srcPos,
    destPos
  };
}
function convertRGBToRGBA({
  src,
  srcPos = 0,
  dest,
  destPos = 0,
  width,
  height
}) {
  let i = 0;
  const len = width * height * 3;
  const len32 = len >> 2;
  const src32 = new Uint32Array(src.buffer, srcPos, len32);
  if (FeatureTest.isLittleEndian) {
    for (; i < len32 - 2; i += 3, destPos += 4) {
      const s1 = src32[i];
      const s2 = src32[i + 1];
      const s3 = src32[i + 2];
      dest[destPos] = s1 | 0xff000000;
      dest[destPos + 1] = s1 >>> 24 | s2 << 8 | 0xff000000;
      dest[destPos + 2] = s2 >>> 16 | s3 << 16 | 0xff000000;
      dest[destPos + 3] = s3 >>> 8 | 0xff000000;
    }
    for (let j = i * 4, jj = srcPos + len; j < jj; j += 3) {
      dest[destPos++] = src[j] | src[j + 1] << 8 | src[j + 2] << 16 | 0xff000000;
    }
  } else {
    for (; i < len32 - 2; i += 3, destPos += 4) {
      const s1 = src32[i];
      const s2 = src32[i + 1];
      const s3 = src32[i + 2];
      dest[destPos] = s1 | 0xff;
      dest[destPos + 1] = s1 << 24 | s2 >>> 8 | 0xff;
      dest[destPos + 2] = s2 << 16 | s3 >>> 16 | 0xff;
      dest[destPos + 3] = s3 << 8 | 0xff;
    }
    for (let j = i * 4, jj = srcPos + len; j < jj; j += 3) {
      dest[destPos++] = src[j] << 24 | src[j + 1] << 16 | src[j + 2] << 8 | 0xff;
    }
  }
  return {
    srcPos: srcPos + len,
    destPos
  };
}
function grayToRGBA(src, dest) {
  if (FeatureTest.isLittleEndian) {
    for (let i = 0, ii = src.length; i < ii; i++) {
      dest[i] = src[i] * 0x10101 | 0xff000000;
    }
  } else {
    for (let i = 0, ii = src.length; i < ii; i++) {
      dest[i] = src[i] * 0x1010100 | 0x000000ff;
    }
  }
}

;// ./src/core/image_resizer.js



const MIN_IMAGE_DIM = 2048;
const MAX_IMAGE_DIM = 65537;
const MAX_ERROR = 128;
class ImageResizer {
  static #goodSquareLength = MIN_IMAGE_DIM;
  static #isImageDecoderSupported = FeatureTest.isImageDecoderSupported;
  constructor(imgData, isMask) {
    this._imgData = imgData;
    this._isMask = isMask;
  }
  static get canUseImageDecoder() {
    return shadow(this, "canUseImageDecoder", this.#isImageDecoderSupported ? ImageDecoder.isTypeSupported("image/bmp") : Promise.resolve(false));
  }
  static needsToBeResized(width, height) {
    if (width <= this.#goodSquareLength && height <= this.#goodSquareLength) {
      return false;
    }
    const {
      MAX_DIM
    } = this;
    if (width > MAX_DIM || height > MAX_DIM) {
      return true;
    }
    const area = width * height;
    if (this._hasMaxArea) {
      return area > this.MAX_AREA;
    }
    if (area < this.#goodSquareLength ** 2) {
      return false;
    }
    if (this._areGoodDims(width, height)) {
      this.#goodSquareLength = Math.max(this.#goodSquareLength, Math.floor(Math.sqrt(width * height)));
      return false;
    }
    this.#goodSquareLength = this._guessMax(this.#goodSquareLength, MAX_DIM, MAX_ERROR, 0);
    const maxArea = this.MAX_AREA = this.#goodSquareLength ** 2;
    return area > maxArea;
  }
  static getReducePowerForJPX(width, height, componentsCount) {
    const area = width * height;
    const maxJPXArea = 2 ** 30 / (componentsCount * 4);
    if (!this.needsToBeResized(width, height)) {
      if (area > maxJPXArea) {
        return Math.ceil(Math.log2(area / maxJPXArea));
      }
      return 0;
    }
    const {
      MAX_DIM,
      MAX_AREA
    } = this;
    const minFactor = Math.max(width / MAX_DIM, height / MAX_DIM, Math.sqrt(area / Math.min(maxJPXArea, MAX_AREA)));
    return Math.ceil(Math.log2(minFactor));
  }
  static get MAX_DIM() {
    return shadow(this, "MAX_DIM", this._guessMax(MIN_IMAGE_DIM, MAX_IMAGE_DIM, 0, 1));
  }
  static get MAX_AREA() {
    this._hasMaxArea = true;
    return shadow(this, "MAX_AREA", this._guessMax(this.#goodSquareLength, this.MAX_DIM, MAX_ERROR, 0) ** 2);
  }
  static set MAX_AREA(area) {
    if (area >= 0) {
      this._hasMaxArea = true;
      shadow(this, "MAX_AREA", area);
    }
  }
  static setOptions({
    canvasMaxAreaInBytes = -1,
    isImageDecoderSupported = false
  }) {
    if (!this._hasMaxArea) {
      this.MAX_AREA = canvasMaxAreaInBytes >> 2;
    }
    this.#isImageDecoderSupported = isImageDecoderSupported;
  }
  static _areGoodDims(width, height) {
    try {
      const canvas = new OffscreenCanvas(width, height);
      const ctx = canvas.getContext("2d");
      ctx.fillRect(0, 0, 1, 1);
      const opacity = ctx.getImageData(0, 0, 1, 1).data[3];
      canvas.width = canvas.height = 1;
      return opacity !== 0;
    } catch {
      return false;
    }
  }
  static _guessMax(start, end, tolerance, defaultHeight) {
    while (start + tolerance + 1 < end) {
      const middle = Math.floor((start + end) / 2);
      const height = defaultHeight || middle;
      if (this._areGoodDims(middle, height)) {
        start = middle;
      } else {
        end = middle;
      }
    }
    return start;
  }
  static async createImage(imgData, isMask = false) {
    return new ImageResizer(imgData, isMask)._createImage();
  }
  async _createImage() {
    const {
      _imgData: imgData
    } = this;
    const {
      width,
      height
    } = imgData;
    if (width * height * 4 > MAX_INT_32) {
      const result = this.#rescaleImageData();
      if (result) {
        return result;
      }
    }
    const data = this._encodeBMP();
    let decoder, imagePromise;
    if (await ImageResizer.canUseImageDecoder) {
      decoder = new ImageDecoder({
        data,
        type: "image/bmp",
        preferAnimation: false,
        transfer: [data.buffer]
      });
      imagePromise = decoder.decode().catch(reason => {
        warn(`BMP image decoding failed: ${reason}`);
        return createImageBitmap(new Blob([this._encodeBMP().buffer], {
          type: "image/bmp"
        }));
      }).finally(() => {
        decoder.close();
      });
    } else {
      imagePromise = createImageBitmap(new Blob([data.buffer], {
        type: "image/bmp"
      }));
    }
    const {
      MAX_AREA,
      MAX_DIM
    } = ImageResizer;
    const minFactor = Math.max(width / MAX_DIM, height / MAX_DIM, Math.sqrt(width * height / MAX_AREA));
    const firstFactor = Math.max(minFactor, 2);
    const factor = Math.round(10 * (minFactor + 1.25)) / 10 / firstFactor;
    const N = Math.floor(Math.log2(factor));
    const steps = new Array(N + 2).fill(2);
    steps[0] = firstFactor;
    steps.splice(-1, 1, factor / (1 << N));
    let newWidth = width;
    let newHeight = height;
    const result = await imagePromise;
    let bitmap = result.image || result;
    for (const step of steps) {
      const prevWidth = newWidth;
      const prevHeight = newHeight;
      newWidth = Math.floor(newWidth / step) - 1;
      newHeight = Math.floor(newHeight / step) - 1;
      const canvas = new OffscreenCanvas(newWidth, newHeight);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
      bitmap.close();
      bitmap = canvas.transferToImageBitmap();
    }
    imgData.data = null;
    imgData.bitmap = bitmap;
    imgData.width = newWidth;
    imgData.height = newHeight;
    return imgData;
  }
  #rescaleImageData() {
    const {
      _imgData: imgData
    } = this;
    const {
      data,
      width,
      height,
      kind
    } = imgData;
    const rgbaSize = width * height * 4;
    const K = Math.ceil(Math.log2(rgbaSize / MAX_INT_32));
    const newWidth = width >> K;
    const newHeight = height >> K;
    let rgbaData;
    let maxHeight = height;
    try {
      rgbaData = new Uint8Array(rgbaSize);
    } catch {
      let n = Math.floor(Math.log2(rgbaSize + 1));
      while (true) {
        try {
          rgbaData = new Uint8Array(2 ** n - 1);
          break;
        } catch {
          n -= 1;
        }
      }
      maxHeight = Math.floor((2 ** n - 1) / (width * 4));
      const newSize = width * maxHeight * 4;
      if (newSize < rgbaData.length) {
        rgbaData = new Uint8Array(newSize);
      }
    }
    const src32 = new Uint32Array(rgbaData.buffer);
    const dest32 = new Uint32Array(newWidth * newHeight);
    let srcPos = 0;
    let newIndex = 0;
    const step = Math.ceil(height / maxHeight);
    const remainder = height % maxHeight === 0 ? height : height % maxHeight;
    for (let k = 0; k < step; k++) {
      const h = k < step - 1 ? maxHeight : remainder;
      ({
        srcPos
      } = convertToRGBA({
        kind,
        src: data,
        dest: src32,
        width,
        height: h,
        inverseDecode: this._isMask,
        srcPos
      }));
      for (let i = 0, ii = h >> K; i < ii; i++) {
        const buf = src32.subarray((i << K) * width);
        for (let j = 0; j < newWidth; j++) {
          dest32[newIndex++] = buf[j << K];
        }
      }
    }
    if (ImageResizer.needsToBeResized(newWidth, newHeight)) {
      imgData.data = dest32;
      imgData.width = newWidth;
      imgData.height = newHeight;
      imgData.kind = ImageKind.RGBA_32BPP;
      return null;
    }
    const canvas = new OffscreenCanvas(newWidth, newHeight);
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true
    });
    ctx.putImageData(new ImageData(new Uint8ClampedArray(dest32.buffer), newWidth, newHeight), 0, 0);
    imgData.data = null;
    imgData.bitmap = canvas.transferToImageBitmap();
    imgData.width = newWidth;
    imgData.height = newHeight;
    return imgData;
  }
  _encodeBMP() {
    const {
      width,
      height,
      kind
    } = this._imgData;
    let data = this._imgData.data;
    let bitPerPixel;
    let colorTable = new Uint8Array(0);
    let maskTable = colorTable;
    let compression = 0;
    switch (kind) {
      case ImageKind.GRAYSCALE_1BPP:
        {
          bitPerPixel = 1;
          colorTable = new Uint8Array(this._isMask ? [255, 255, 255, 255, 0, 0, 0, 0] : [0, 0, 0, 0, 255, 255, 255, 255]);
          const rowLen = width + 7 >> 3;
          const rowSize = rowLen + 3 & -4;
          if (rowLen !== rowSize) {
            const newData = new Uint8Array(rowSize * height);
            let k = 0;
            for (let i = 0, ii = height * rowLen; i < ii; i += rowLen, k += rowSize) {
              newData.set(data.subarray(i, i + rowLen), k);
            }
            data = newData;
          }
          break;
        }
      case ImageKind.RGB_24BPP:
        {
          bitPerPixel = 24;
          if (width & 3) {
            const rowLen = 3 * width;
            const rowSize = rowLen + 3 & -4;
            const extraLen = rowSize - rowLen;
            const newData = new Uint8Array(rowSize * height);
            let k = 0;
            for (let i = 0, ii = height * rowLen; i < ii; i += rowLen) {
              const row = data.subarray(i, i + rowLen);
              for (let j = 0; j < rowLen; j += 3) {
                newData[k++] = row[j + 2];
                newData[k++] = row[j + 1];
                newData[k++] = row[j];
              }
              k += extraLen;
            }
            data = newData;
          } else {
            for (let i = 0, ii = data.length; i < ii; i += 3) {
              const tmp = data[i];
              data[i] = data[i + 2];
              data[i + 2] = tmp;
            }
          }
          break;
        }
      case ImageKind.RGBA_32BPP:
        bitPerPixel = 32;
        compression = 3;
        maskTable = new Uint8Array(4 + 4 + 4 + 4 + 52);
        const view = new DataView(maskTable.buffer);
        if (FeatureTest.isLittleEndian) {
          view.setUint32(0, 0x000000ff, true);
          view.setUint32(4, 0x0000ff00, true);
          view.setUint32(8, 0x00ff0000, true);
          view.setUint32(12, 0xff000000, true);
        } else {
          view.setUint32(0, 0xff000000, true);
          view.setUint32(4, 0x00ff0000, true);
          view.setUint32(8, 0x0000ff00, true);
          view.setUint32(12, 0x000000ff, true);
        }
        break;
      default:
        throw new Error("invalid format");
    }
    let i = 0;
    const headerLength = 40 + maskTable.length;
    const fileLength = 14 + headerLength + colorTable.length + data.length;
    const bmpData = new Uint8Array(fileLength);
    const view = new DataView(bmpData.buffer);
    view.setUint16(i, 0x4d42, true);
    i += 2;
    view.setUint32(i, fileLength, true);
    i += 4;
    view.setUint32(i, 0, true);
    i += 4;
    view.setUint32(i, 14 + headerLength + colorTable.length, true);
    i += 4;
    view.setUint32(i, headerLength, true);
    i += 4;
    view.setInt32(i, width, true);
    i += 4;
    view.setInt32(i, -height, true);
    i += 4;
    view.setUint16(i, 1, true);
    i += 2;
    view.setUint16(i, bitPerPixel, true);
    i += 2;
    view.setUint32(i, compression, true);
    i += 4;
    view.setUint32(i, 0, true);
    i += 4;
    view.setInt32(i, 0, true);
    i += 4;
    view.setInt32(i, 0, true);
    i += 4;
    view.setUint32(i, colorTable.length / 4, true);
    i += 4;
    view.setUint32(i, 0, true);
    i += 4;
    bmpData.set(maskTable, i);
    i += maskTable.length;
    bmpData.set(colorTable, i);
    i += colorTable.length;
    bmpData.set(data, i);
    return bmpData;
  }
}

;// ./src/core/decode_stream.js


const emptyBuffer = new Uint8Array(0);
class DecodeStream extends BaseStream {
  constructor(maybeMinBufferLength) {
    super();
    this._rawMinBufferLength = maybeMinBufferLength || 0;
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = emptyBuffer;
    this.minBufferLength = 512;
    if (maybeMinBufferLength) {
      while (this.minBufferLength < maybeMinBufferLength) {
        this.minBufferLength *= 2;
      }
    }
  }
  get isEmpty() {
    while (!this.eof && this.bufferLength === 0) {
      this.readBlock();
    }
    return this.bufferLength === 0;
  }
  ensureBuffer(requested) {
    const buffer = this.buffer;
    if (requested <= buffer.byteLength) {
      return buffer;
    }
    let size = this.minBufferLength;
    while (size < requested) {
      size *= 2;
    }
    const buffer2 = new Uint8Array(size);
    buffer2.set(buffer);
    return this.buffer = buffer2;
  }
  getByte() {
    const pos = this.pos;
    while (this.bufferLength <= pos) {
      if (this.eof) {
        return -1;
      }
      this.readBlock();
    }
    return this.buffer[this.pos++];
  }
  getBytes(length, decoderOptions = null) {
    const pos = this.pos;
    let end;
    if (length) {
      this.ensureBuffer(pos + length);
      end = pos + length;
      while (!this.eof && this.bufferLength < end) {
        this.readBlock(decoderOptions);
      }
      const bufEnd = this.bufferLength;
      if (end > bufEnd) {
        end = bufEnd;
      }
    } else {
      while (!this.eof) {
        this.readBlock(decoderOptions);
      }
      end = this.bufferLength;
    }
    this.pos = end;
    return this.buffer.subarray(pos, end);
  }
  async getImageData(length, decoderOptions) {
    if (!this.canAsyncDecodeImageFromBuffer) {
      if (this.isAsyncDecoder) {
        return this.decodeImage(null, decoderOptions);
      }
      return this.getBytes(length, decoderOptions);
    }
    const data = await this.stream.asyncGetBytes();
    return this.decodeImage(data, decoderOptions);
  }
  reset() {
    this.pos = 0;
  }
  makeSubStream(start, length, dict = null) {
    if (length === undefined) {
      while (!this.eof) {
        this.readBlock();
      }
    } else {
      const end = start + length;
      while (this.bufferLength <= end && !this.eof) {
        this.readBlock();
      }
    }
    return new Stream(this.buffer, start, length, dict);
  }
  getBaseStreams() {
    return this.str ? this.str.getBaseStreams() : null;
  }
}
class StreamsSequenceStream extends DecodeStream {
  constructor(streams, onError = null) {
    streams = streams.filter(s => s instanceof BaseStream);
    let maybeLength = 0;
    for (const stream of streams) {
      maybeLength += stream instanceof DecodeStream ? stream._rawMinBufferLength : stream.length;
    }
    super(maybeLength);
    this.streams = streams;
    this._onError = onError;
  }
  readBlock() {
    const streams = this.streams;
    if (streams.length === 0) {
      this.eof = true;
      return;
    }
    const stream = streams.shift();
    let chunk;
    try {
      chunk = stream.getBytes();
    } catch (reason) {
      if (this._onError) {
        this._onError(reason, stream.dict?.objId);
        return;
      }
      throw reason;
    }
    const bufferLength = this.bufferLength;
    const newLength = bufferLength + chunk.length;
    const buffer = this.ensureBuffer(newLength);
    buffer.set(chunk, bufferLength);
    this.bufferLength = newLength;
  }
  getBaseStreams() {
    const baseStreamsBuf = [];
    for (const stream of this.streams) {
      const baseStreams = stream.getBaseStreams();
      if (baseStreams) {
        baseStreamsBuf.push(...baseStreams);
      }
    }
    return baseStreamsBuf.length > 0 ? baseStreamsBuf : null;
  }
}

;// ./src/core/colorspace_utils.js





class ColorSpaceUtils {
  static parse({
    cs,
    xref,
    resources = null,
    pdfFunctionFactory,
    globalColorSpaceCache,
    localColorSpaceCache,
    asyncIfNotCached = false
  }) {
    const options = {
      xref,
      resources,
      pdfFunctionFactory,
      globalColorSpaceCache,
      localColorSpaceCache
    };
    let csName, csRef, parsedCS;
    if (cs instanceof Ref) {
      csRef = cs;
      const cachedCS = globalColorSpaceCache.getByRef(csRef) || localColorSpaceCache.getByRef(csRef);
      if (cachedCS) {
        return cachedCS;
      }
      cs = xref.fetch(cs);
    }
    if (cs instanceof Name) {
      csName = cs.name;
      const cachedCS = localColorSpaceCache.getByName(csName);
      if (cachedCS) {
        return cachedCS;
      }
    }
    try {
      parsedCS = this.#parse(cs, options);
    } catch (ex) {
      if (asyncIfNotCached && !(ex instanceof MissingDataException)) {
        return Promise.reject(ex);
      }
      throw ex;
    }
    if (csName || csRef) {
      localColorSpaceCache.set(csName, csRef, parsedCS);
      if (csRef) {
        globalColorSpaceCache.set(null, csRef, parsedCS);
      }
    }
    return asyncIfNotCached ? Promise.resolve(parsedCS) : parsedCS;
  }
  static #subParse(cs, options) {
    const {
      globalColorSpaceCache
    } = options;
    let csRef;
    if (cs instanceof Ref) {
      csRef = cs;
      const cachedCS = globalColorSpaceCache.getByRef(csRef);
      if (cachedCS) {
        return cachedCS;
      }
    }
    const parsedCS = this.#parse(cs, options);
    if (csRef) {
      globalColorSpaceCache.set(null, csRef, parsedCS);
    }
    return parsedCS;
  }
  static #parse(cs, options) {
    const {
      xref,
      resources,
      pdfFunctionFactory,
      globalColorSpaceCache
    } = options;
    cs = xref.fetchIfRef(cs);
    if (cs instanceof Name) {
      switch (cs.name) {
        case "G":
        case "DeviceGray":
          return this.gray;
        case "RGB":
        case "DeviceRGB":
          return this.rgb;
        case "DeviceRGBA":
          return this.rgba;
        case "CMYK":
        case "DeviceCMYK":
          return this.cmyk;
        case "Pattern":
          return new PatternCS(null);
        default:
          if (resources instanceof Dict) {
            const colorSpaces = resources.get("ColorSpace");
            if (colorSpaces instanceof Dict) {
              const resourcesCS = colorSpaces.get(cs.name);
              if (resourcesCS) {
                if (resourcesCS instanceof Name) {
                  return this.#parse(resourcesCS, options);
                }
                cs = resourcesCS;
                break;
              }
            }
          }
          warn(`Unrecognized ColorSpace: ${cs.name}`);
          return this.gray;
      }
    }
    if (Array.isArray(cs)) {
      const mode = xref.fetchIfRef(cs[0]).name;
      let params, numComps, baseCS, whitePoint, blackPoint, gamma;
      switch (mode) {
        case "G":
        case "DeviceGray":
          return this.gray;
        case "RGB":
        case "DeviceRGB":
          return this.rgb;
        case "CMYK":
        case "DeviceCMYK":
          return this.cmyk;
        case "CalGray":
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray("WhitePoint");
          blackPoint = params.getArray("BlackPoint");
          gamma = params.get("Gamma");
          return new CalGrayCS(whitePoint, blackPoint, gamma);
        case "CalRGB":
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray("WhitePoint");
          blackPoint = params.getArray("BlackPoint");
          gamma = params.getArray("Gamma");
          const matrix = params.getArray("Matrix");
          return new CalRGBCS(whitePoint, blackPoint, gamma, matrix);
        case "ICCBased":
          const isRef = cs[1] instanceof Ref;
          if (isRef) {
            const cachedCS = globalColorSpaceCache.getByRef(cs[1]);
            if (cachedCS) {
              return cachedCS;
            }
          }
          const stream = xref.fetchIfRef(cs[1]);
          const dict = stream.dict;
          numComps = dict.get("N");
          if (IccColorSpace.isUsable) {
            try {
              const iccCS = new IccColorSpace(stream.getBytes(), "ICCBased", numComps);
              if (isRef) {
                globalColorSpaceCache.set(null, cs[1], iccCS);
              }
              return iccCS;
            } catch (ex) {
              if (ex instanceof MissingDataException) {
                throw ex;
              }
              warn(`ICCBased color space (${cs[1]}): "${ex}".`);
            }
          }
          const altRaw = dict.getRaw("Alternate");
          if (altRaw) {
            const altCS = this.#subParse(altRaw, options);
            if (altCS.numComps === numComps) {
              return altCS;
            }
            warn("ICCBased color space: Ignoring incorrect /Alternate entry.");
          }
          if (numComps === 1) {
            return this.gray;
          } else if (numComps === 3) {
            return this.rgb;
          } else if (numComps === 4) {
            return this.cmyk;
          }
          break;
        case "Pattern":
          baseCS = cs[1] || null;
          if (baseCS) {
            baseCS = this.#subParse(baseCS, options);
          }
          return new PatternCS(baseCS);
        case "I":
        case "Indexed":
          baseCS = this.#subParse(cs[1], options);
          const hiVal = MathClamp(xref.fetchIfRef(cs[2]), 0, 255);
          const lookup = xref.fetchIfRef(cs[3]);
          return new IndexedCS(baseCS, hiVal, lookup);
        case "Separation":
        case "DeviceN":
          const name = xref.fetchIfRef(cs[1]);
          numComps = Array.isArray(name) ? name.length : 1;
          baseCS = this.#subParse(cs[2], options);
          const tintFn = pdfFunctionFactory.create(cs[3]);
          return new AlternateCS(numComps, baseCS, tintFn);
        case "Lab":
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray("WhitePoint");
          blackPoint = params.getArray("BlackPoint");
          const range = params.getArray("Range");
          return new LabCS(whitePoint, blackPoint, range);
        default:
          warn(`Unimplemented ColorSpace object: ${mode}`);
          return this.gray;
      }
    }
    warn(`Unrecognized ColorSpace object: ${cs}`);
    return this.gray;
  }
  static get gray() {
    return shadow(this, "gray", new DeviceGrayCS());
  }
  static get rgb() {
    return shadow(this, "rgb", new DeviceRgbCS());
  }
  static get rgba() {
    return shadow(this, "rgba", new DeviceRgbaCS());
  }
  static get cmyk() {
    if (CmykICCBasedCS.isUsable) {
      try {
        return shadow(this, "cmyk", new CmykICCBasedCS());
      } catch {
        warn("CMYK fallback: DeviceCMYK");
      }
    }
    return shadow(this, "cmyk", new DeviceCmykCS());
  }
}

;// ./src/core/jpg.js





class JpegError extends BaseException {
  constructor(msg) {
    super(msg, "JpegError");
  }
}
class DNLMarkerError extends BaseException {
  constructor(message, scanLines) {
    super(message, "DNLMarkerError");
    this.scanLines = scanLines;
  }
}
class EOIMarkerError extends BaseException {
  constructor(msg) {
    super(msg, "EOIMarkerError");
  }
}
const dctZigZag = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
const dctCos1 = 4017;
const dctSin1 = 799;
const dctCos3 = 3406;
const dctSin3 = 2276;
const dctCos6 = 1567;
const dctSin6 = 3784;
const dctSqrt2 = 5793;
const dctSqrt1d2 = 2896;
function buildHuffmanTable(codeLengths, values) {
  let k = 0,
    i,
    j,
    length = 16;
  while (length > 0 && !codeLengths[length - 1]) {
    length--;
  }
  const code = [{
    children: [],
    index: 0
  }];
  let p = code[0],
    q;
  for (i = 0; i < length; i++) {
    for (j = 0; j < codeLengths[i]; j++) {
      p = code.pop();
      p.children[p.index] = values[k];
      while (p.index > 0) {
        p = code.pop();
      }
      p.index++;
      code.push(p);
      while (code.length <= i) {
        code.push(q = {
          children: [],
          index: 0
        });
        p.children[p.index] = q.children;
        p = q;
      }
      k++;
    }
    if (i + 1 < length) {
      code.push(q = {
        children: [],
        index: 0
      });
      p.children[p.index] = q.children;
      p = q;
    }
  }
  return code[0].children;
}
function getBlockBufferOffset(component, row, col) {
  return 64 * ((component.blocksPerLine + 1) * row + col);
}
function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive, parseDNLMarker = false) {
  const mcusPerLine = frame.mcusPerLine;
  const progressive = frame.progressive;
  const startOffset = offset;
  let bitsData = 0,
    bitsCount = 0;
  function readBit() {
    if (bitsCount > 0) {
      bitsCount--;
      return bitsData >> bitsCount & 1;
    }
    bitsData = data[offset++];
    if (bitsData === 0xff) {
      const nextByte = data[offset++];
      if (nextByte) {
        if (nextByte === 0xdc && parseDNLMarker) {
          offset += 2;
          const scanLines = readUint16(data, offset);
          offset += 2;
          if (scanLines > 0 && scanLines !== frame.scanLines) {
            throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", scanLines);
          }
        } else if (nextByte === 0xd9) {
          if (parseDNLMarker) {
            const maybeScanLines = blockRow * (frame.precision === 8 ? 8 : 0);
            if (maybeScanLines > 0 && Math.round(frame.scanLines / maybeScanLines) >= 5) {
              throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, " + "possibly caused by incorrect `scanLines` parameter", maybeScanLines);
            }
          }
          throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
        }
        throw new JpegError(`unexpected marker ${(bitsData << 8 | nextByte).toString(16)}`);
      }
    }
    bitsCount = 7;
    return bitsData >>> 7;
  }
  function decodeHuffman(tree) {
    let node = tree;
    while (true) {
      node = node[readBit()];
      switch (typeof node) {
        case "number":
          return node;
        case "object":
          continue;
      }
      throw new JpegError("invalid huffman sequence");
    }
  }
  function receive(length) {
    let n = 0;
    while (length > 0) {
      n = n << 1 | readBit();
      length--;
    }
    return n;
  }
  function receiveAndExtend(length) {
    if (length === 1) {
      return readBit() === 1 ? 1 : -1;
    }
    const n = receive(length);
    if (n >= 1 << length - 1) {
      return n;
    }
    return n + (-1 << length) + 1;
  }
  function decodeBaseline(component, blockOffset) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : receiveAndExtend(t);
    component.blockData[blockOffset] = component.pred += diff;
    let k = 1;
    while (k < 64) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15,
        r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          break;
        }
        k += 16;
        continue;
      }
      k += r;
      const z = dctZigZag[k];
      component.blockData[blockOffset + z] = receiveAndExtend(s);
      k++;
    }
  }
  function decodeDCFirst(component, blockOffset) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
    component.blockData[blockOffset] = component.pred += diff;
  }
  function decodeDCSuccessive(component, blockOffset) {
    component.blockData[blockOffset] |= readBit() << successive;
  }
  let eobrun = 0;
  function decodeACFirst(component, blockOffset) {
    if (eobrun > 0) {
      eobrun--;
      return;
    }
    let k = spectralStart;
    const e = spectralEnd;
    while (k <= e) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15,
        r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          eobrun = receive(r) + (1 << r) - 1;
          break;
        }
        k += 16;
        continue;
      }
      k += r;
      const z = dctZigZag[k];
      component.blockData[blockOffset + z] = receiveAndExtend(s) * (1 << successive);
      k++;
    }
  }
  let successiveACState = 0,
    successiveACNextValue;
  function decodeACSuccessive(component, blockOffset) {
    let k = spectralStart;
    const e = spectralEnd;
    let r = 0;
    let s;
    let rs;
    while (k <= e) {
      const offsetZ = blockOffset + dctZigZag[k];
      const sign = component.blockData[offsetZ] < 0 ? -1 : 1;
      switch (successiveACState) {
        case 0:
          rs = decodeHuffman(component.huffmanTableAC);
          s = rs & 15;
          r = rs >> 4;
          if (s === 0) {
            if (r < 15) {
              eobrun = receive(r) + (1 << r);
              successiveACState = 4;
            } else {
              r = 16;
              successiveACState = 1;
            }
          } else {
            if (s !== 1) {
              throw new JpegError("invalid ACn encoding");
            }
            successiveACNextValue = receiveAndExtend(s);
            successiveACState = r ? 2 : 3;
          }
          continue;
        case 1:
        case 2:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          } else {
            r--;
            if (r === 0) {
              successiveACState = successiveACState === 2 ? 3 : 0;
            }
          }
          break;
        case 3:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          } else {
            component.blockData[offsetZ] = successiveACNextValue << successive;
            successiveACState = 0;
          }
          break;
        case 4:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          }
          break;
      }
      k++;
    }
    if (successiveACState === 4) {
      eobrun--;
      if (eobrun === 0) {
        successiveACState = 0;
      }
    }
  }
  let blockRow = 0;
  function decodeMcu(component, decode, mcu, row, col) {
    const mcuRow = mcu / mcusPerLine | 0;
    const mcuCol = mcu % mcusPerLine;
    blockRow = mcuRow * component.v + row;
    const blockCol = mcuCol * component.h + col;
    const blockOffset = getBlockBufferOffset(component, blockRow, blockCol);
    decode(component, blockOffset);
  }
  function decodeBlock(component, decode, mcu) {
    blockRow = mcu / component.blocksPerLine | 0;
    const blockCol = mcu % component.blocksPerLine;
    const blockOffset = getBlockBufferOffset(component, blockRow, blockCol);
    decode(component, blockOffset);
  }
  const componentsLength = components.length;
  let component, i, j, k, n;
  let decodeFn;
  if (progressive) {
    if (spectralStart === 0) {
      decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
    } else {
      decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
    }
  } else {
    decodeFn = decodeBaseline;
  }
  let mcu = 0,
    fileMarker;
  const mcuExpected = componentsLength === 1 ? components[0].blocksPerLine * components[0].blocksPerColumn : mcusPerLine * frame.mcusPerColumn;
  let h, v;
  while (mcu <= mcuExpected) {
    const mcuToRead = resetInterval ? Math.min(mcuExpected - mcu, resetInterval) : mcuExpected;
    if (mcuToRead > 0) {
      for (i = 0; i < componentsLength; i++) {
        components[i].pred = 0;
      }
      eobrun = 0;
      if (componentsLength === 1) {
        component = components[0];
        for (n = 0; n < mcuToRead; n++) {
          decodeBlock(component, decodeFn, mcu);
          mcu++;
        }
      } else {
        for (n = 0; n < mcuToRead; n++) {
          for (i = 0; i < componentsLength; i++) {
            component = components[i];
            h = component.h;
            v = component.v;
            for (j = 0; j < v; j++) {
              for (k = 0; k < h; k++) {
                decodeMcu(component, decodeFn, mcu, j, k);
              }
            }
          }
          mcu++;
        }
      }
    }
    bitsCount = 0;
    fileMarker = findNextFileMarker(data, offset);
    if (!fileMarker) {
      break;
    }
    if (fileMarker.invalid) {
      const partialMsg = mcuToRead > 0 ? "unexpected" : "excessive";
      warn(`decodeScan - ${partialMsg} MCU data, current marker is: ${fileMarker.invalid}`);
      offset = fileMarker.offset;
    }
    if (fileMarker.marker >= 0xffd0 && fileMarker.marker <= 0xffd7) {
      offset += 2;
    } else {
      break;
    }
  }
  return offset - startOffset;
}
function quantizeAndInverse(component, blockBufferOffset, p) {
  const qt = component.quantizationTable,
    blockData = component.blockData;
  let v0, v1, v2, v3, v4, v5, v6, v7;
  let p0, p1, p2, p3, p4, p5, p6, p7;
  let t;
  if (!qt) {
    throw new JpegError("missing required Quantization Table.");
  }
  for (let row = 0; row < 64; row += 8) {
    p0 = blockData[blockBufferOffset + row];
    p1 = blockData[blockBufferOffset + row + 1];
    p2 = blockData[blockBufferOffset + row + 2];
    p3 = blockData[blockBufferOffset + row + 3];
    p4 = blockData[blockBufferOffset + row + 4];
    p5 = blockData[blockBufferOffset + row + 5];
    p6 = blockData[blockBufferOffset + row + 6];
    p7 = blockData[blockBufferOffset + row + 7];
    p0 *= qt[row];
    if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
      t = dctSqrt2 * p0 + 512 >> 10;
      p[row] = t;
      p[row + 1] = t;
      p[row + 2] = t;
      p[row + 3] = t;
      p[row + 4] = t;
      p[row + 5] = t;
      p[row + 6] = t;
      p[row + 7] = t;
      continue;
    }
    p1 *= qt[row + 1];
    p2 *= qt[row + 2];
    p3 *= qt[row + 3];
    p4 *= qt[row + 4];
    p5 *= qt[row + 5];
    p6 *= qt[row + 6];
    p7 *= qt[row + 7];
    v0 = dctSqrt2 * p0 + 128 >> 8;
    v1 = dctSqrt2 * p4 + 128 >> 8;
    v2 = p2;
    v3 = p6;
    v4 = dctSqrt1d2 * (p1 - p7) + 128 >> 8;
    v7 = dctSqrt1d2 * (p1 + p7) + 128 >> 8;
    v5 = p3 << 4;
    v6 = p5 << 4;
    v0 = v0 + v1 + 1 >> 1;
    v1 = v0 - v1;
    t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
    v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
    v3 = t;
    v4 = v4 + v6 + 1 >> 1;
    v6 = v4 - v6;
    v7 = v7 + v5 + 1 >> 1;
    v5 = v7 - v5;
    v0 = v0 + v3 + 1 >> 1;
    v3 = v0 - v3;
    v1 = v1 + v2 + 1 >> 1;
    v2 = v1 - v2;
    t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
    v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
    v7 = t;
    t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
    v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
    v6 = t;
    p[row] = v0 + v7;
    p[row + 7] = v0 - v7;
    p[row + 1] = v1 + v6;
    p[row + 6] = v1 - v6;
    p[row + 2] = v2 + v5;
    p[row + 5] = v2 - v5;
    p[row + 3] = v3 + v4;
    p[row + 4] = v3 - v4;
  }
  for (let col = 0; col < 8; ++col) {
    p0 = p[col];
    p1 = p[col + 8];
    p2 = p[col + 16];
    p3 = p[col + 24];
    p4 = p[col + 32];
    p5 = p[col + 40];
    p6 = p[col + 48];
    p7 = p[col + 56];
    if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
      t = dctSqrt2 * p0 + 8192 >> 14;
      if (t < -2040) {
        t = 0;
      } else if (t >= 2024) {
        t = 255;
      } else {
        t = t + 2056 >> 4;
      }
      blockData[blockBufferOffset + col] = t;
      blockData[blockBufferOffset + col + 8] = t;
      blockData[blockBufferOffset + col + 16] = t;
      blockData[blockBufferOffset + col + 24] = t;
      blockData[blockBufferOffset + col + 32] = t;
      blockData[blockBufferOffset + col + 40] = t;
      blockData[blockBufferOffset + col + 48] = t;
      blockData[blockBufferOffset + col + 56] = t;
      continue;
    }
    v0 = dctSqrt2 * p0 + 2048 >> 12;
    v1 = dctSqrt2 * p4 + 2048 >> 12;
    v2 = p2;
    v3 = p6;
    v4 = dctSqrt1d2 * (p1 - p7) + 2048 >> 12;
    v7 = dctSqrt1d2 * (p1 + p7) + 2048 >> 12;
    v5 = p3;
    v6 = p5;
    v0 = (v0 + v1 + 1 >> 1) + 4112;
    v1 = v0 - v1;
    t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
    v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
    v3 = t;
    v4 = v4 + v6 + 1 >> 1;
    v6 = v4 - v6;
    v7 = v7 + v5 + 1 >> 1;
    v5 = v7 - v5;
    v0 = v0 + v3 + 1 >> 1;
    v3 = v0 - v3;
    v1 = v1 + v2 + 1 >> 1;
    v2 = v1 - v2;
    t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
    v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
    v7 = t;
    t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
    v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
    v6 = t;
    p0 = v0 + v7;
    p7 = v0 - v7;
    p1 = v1 + v6;
    p6 = v1 - v6;
    p2 = v2 + v5;
    p5 = v2 - v5;
    p3 = v3 + v4;
    p4 = v3 - v4;
    if (p0 < 16) {
      p0 = 0;
    } else if (p0 >= 4080) {
      p0 = 255;
    } else {
      p0 >>= 4;
    }
    if (p1 < 16) {
      p1 = 0;
    } else if (p1 >= 4080) {
      p1 = 255;
    } else {
      p1 >>= 4;
    }
    if (p2 < 16) {
      p2 = 0;
    } else if (p2 >= 4080) {
      p2 = 255;
    } else {
      p2 >>= 4;
    }
    if (p3 < 16) {
      p3 = 0;
    } else if (p3 >= 4080) {
      p3 = 255;
    } else {
      p3 >>= 4;
    }
    if (p4 < 16) {
      p4 = 0;
    } else if (p4 >= 4080) {
      p4 = 255;
    } else {
      p4 >>= 4;
    }
    if (p5 < 16) {
      p5 = 0;
    } else if (p5 >= 4080) {
      p5 = 255;
    } else {
      p5 >>= 4;
    }
    if (p6 < 16) {
      p6 = 0;
    } else if (p6 >= 4080) {
      p6 = 255;
    } else {
      p6 >>= 4;
    }
    if (p7 < 16) {
      p7 = 0;
    } else if (p7 >= 4080) {
      p7 = 255;
    } else {
      p7 >>= 4;
    }
    blockData[blockBufferOffset + col] = p0;
    blockData[blockBufferOffset + col + 8] = p1;
    blockData[blockBufferOffset + col + 16] = p2;
    blockData[blockBufferOffset + col + 24] = p3;
    blockData[blockBufferOffset + col + 32] = p4;
    blockData[blockBufferOffset + col + 40] = p5;
    blockData[blockBufferOffset + col + 48] = p6;
    blockData[blockBufferOffset + col + 56] = p7;
  }
}
function buildComponentData(frame, component) {
  const blocksPerLine = component.blocksPerLine;
  const blocksPerColumn = component.blocksPerColumn;
  const computationBuffer = new Int16Array(64);
  for (let blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
    for (let blockCol = 0; blockCol < blocksPerLine; blockCol++) {
      const offset = getBlockBufferOffset(component, blockRow, blockCol);
      quantizeAndInverse(component, offset, computationBuffer);
    }
  }
  return component.blockData;
}
function findNextFileMarker(data, currentPos, startPos = currentPos) {
  const maxPos = data.length - 1;
  let newPos = startPos < currentPos ? startPos : currentPos;
  if (currentPos >= maxPos) {
    return null;
  }
  const currentMarker = readUint16(data, currentPos);
  if (currentMarker >= 0xffc0 && currentMarker <= 0xfffe) {
    return {
      invalid: null,
      marker: currentMarker,
      offset: currentPos
    };
  }
  let newMarker = readUint16(data, newPos);
  while (!(newMarker >= 0xffc0 && newMarker <= 0xfffe)) {
    if (++newPos >= maxPos) {
      return null;
    }
    newMarker = readUint16(data, newPos);
  }
  return {
    invalid: currentMarker.toString(16),
    marker: newMarker,
    offset: newPos
  };
}
function prepareComponents(frame) {
  const mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / frame.maxH);
  const mcusPerColumn = Math.ceil(frame.scanLines / 8 / frame.maxV);
  for (const component of frame.components) {
    const blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / frame.maxH);
    const blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / frame.maxV);
    const blocksPerLineForMcu = mcusPerLine * component.h;
    const blocksPerColumnForMcu = mcusPerColumn * component.v;
    const blocksBufferSize = 64 * blocksPerColumnForMcu * (blocksPerLineForMcu + 1);
    component.blockData = new Int16Array(blocksBufferSize);
    component.blocksPerLine = blocksPerLine;
    component.blocksPerColumn = blocksPerColumn;
  }
  frame.mcusPerLine = mcusPerLine;
  frame.mcusPerColumn = mcusPerColumn;
}
function readDataBlock(data, offset) {
  const length = readUint16(data, offset);
  offset += 2;
  let endOffset = offset + length - 2;
  const fileMarker = findNextFileMarker(data, endOffset, offset);
  if (fileMarker?.invalid) {
    warn("readDataBlock - incorrect length, current marker is: " + fileMarker.invalid);
    endOffset = fileMarker.offset;
  }
  const array = data.subarray(offset, endOffset);
  return {
    appData: array,
    oldOffset: offset,
    newOffset: offset + array.length
  };
}
function skipData(data, offset) {
  const length = readUint16(data, offset);
  offset += 2;
  const endOffset = offset + length - 2;
  const fileMarker = findNextFileMarker(data, endOffset, offset);
  if (fileMarker?.invalid) {
    return fileMarker.offset;
  }
  return endOffset;
}
class JpegImage {
  constructor({
    decodeTransform = null,
    colorTransform = -1
  } = {}) {
    this._decodeTransform = decodeTransform;
    this._colorTransform = colorTransform;
  }
  static canUseImageDecoder(data, colorTransform = -1) {
    let exifOffsets = null;
    let offset = 0;
    let numComponents = null;
    let fileMarker = readUint16(data, offset);
    offset += 2;
    if (fileMarker !== 0xffd8) {
      throw new JpegError("SOI not found");
    }
    fileMarker = readUint16(data, offset);
    offset += 2;
    markerLoop: while (fileMarker !== 0xffd9) {
      switch (fileMarker) {
        case 0xffe1:
          const {
            appData,
            oldOffset,
            newOffset
          } = readDataBlock(data, offset);
          offset = newOffset;
          if (appData[0] === 0x45 && appData[1] === 0x78 && appData[2] === 0x69 && appData[3] === 0x66 && appData[4] === 0 && appData[5] === 0) {
            if (exifOffsets) {
              throw new JpegError("Duplicate EXIF-blocks found.");
            }
            exifOffsets = {
              exifStart: oldOffset + 6,
              exifEnd: newOffset
            };
          }
          fileMarker = readUint16(data, offset);
          offset += 2;
          continue;
        case 0xffc0:
        case 0xffc1:
        case 0xffc2:
          numComponents = data[offset + (2 + 1 + 2 + 2)];
          break markerLoop;
        case 0xffff:
          if (data[offset] !== 0xff) {
            offset--;
          }
          break;
      }
      offset = skipData(data, offset);
      fileMarker = readUint16(data, offset);
      offset += 2;
    }
    if (numComponents === 4) {
      return null;
    }
    if (numComponents === 3 && colorTransform === 0) {
      return null;
    }
    return exifOffsets || {};
  }
  parse(data, {
    dnlScanLines = null
  } = {}) {
    let offset = 0;
    let jfif = null;
    let adobe = null;
    let frame, resetInterval;
    let numSOSMarkers = 0;
    const quantizationTables = [];
    const huffmanTablesAC = [],
      huffmanTablesDC = [];
    let fileMarker = readUint16(data, offset);
    offset += 2;
    if (fileMarker !== 0xffd8) {
      throw new JpegError("SOI not found");
    }
    fileMarker = readUint16(data, offset);
    offset += 2;
    markerLoop: while (fileMarker !== 0xffd9) {
      let i, j, l;
      switch (fileMarker) {
        case 0xffe0:
        case 0xffe1:
        case 0xffe2:
        case 0xffe3:
        case 0xffe4:
        case 0xffe5:
        case 0xffe6:
        case 0xffe7:
        case 0xffe8:
        case 0xffe9:
        case 0xffea:
        case 0xffeb:
        case 0xffec:
        case 0xffed:
        case 0xffee:
        case 0xffef:
        case 0xfffe:
          const {
            appData,
            newOffset
          } = readDataBlock(data, offset);
          offset = newOffset;
          if (fileMarker === 0xffe0) {
            if (appData[0] === 0x4a && appData[1] === 0x46 && appData[2] === 0x49 && appData[3] === 0x46 && appData[4] === 0) {
              jfif = {
                version: {
                  major: appData[5],
                  minor: appData[6]
                },
                densityUnits: appData[7],
                xDensity: appData[8] << 8 | appData[9],
                yDensity: appData[10] << 8 | appData[11],
                thumbWidth: appData[12],
                thumbHeight: appData[13],
                thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
              };
            }
          }
          if (fileMarker === 0xffee) {
            if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6f && appData[3] === 0x62 && appData[4] === 0x65) {
              adobe = {
                version: appData[5] << 8 | appData[6],
                flags0: appData[7] << 8 | appData[8],
                flags1: appData[9] << 8 | appData[10],
                transformCode: appData[11]
              };
            }
          }
          break;
        case 0xffdb:
          const quantizationTablesLength = readUint16(data, offset);
          offset += 2;
          const quantizationTablesEnd = quantizationTablesLength + offset - 2;
          let z;
          while (offset < quantizationTablesEnd) {
            const quantizationTableSpec = data[offset++];
            const tableData = new Uint16Array(64);
            if (quantizationTableSpec >> 4 === 0) {
              for (j = 0; j < 64; j++) {
                z = dctZigZag[j];
                tableData[z] = data[offset++];
              }
            } else if (quantizationTableSpec >> 4 === 1) {
              for (j = 0; j < 64; j++) {
                z = dctZigZag[j];
                tableData[z] = readUint16(data, offset);
                offset += 2;
              }
            } else {
              throw new JpegError("DQT - invalid table spec");
            }
            quantizationTables[quantizationTableSpec & 15] = tableData;
          }
          break;
        case 0xffc0:
        case 0xffc1:
        case 0xffc2:
          if (frame) {
            throw new JpegError("Only single frame JPEGs supported");
          }
          offset += 2;
          frame = {};
          frame.extended = fileMarker === 0xffc1;
          frame.progressive = fileMarker === 0xffc2;
          frame.precision = data[offset++];
          const sofScanLines = readUint16(data, offset);
          offset += 2;
          frame.scanLines = dnlScanLines || sofScanLines;
          frame.samplesPerLine = readUint16(data, offset);
          offset += 2;
          frame.components = [];
          frame.componentIds = {};
          const componentsCount = data[offset++];
          let maxH = 0,
            maxV = 0;
          for (i = 0; i < componentsCount; i++) {
            const componentId = data[offset];
            const h = data[offset + 1] >> 4;
            const v = data[offset + 1] & 15;
            if (maxH < h) {
              maxH = h;
            }
            if (maxV < v) {
              maxV = v;
            }
            const qId = data[offset + 2];
            l = frame.components.push({
              h,
              v,
              quantizationId: qId,
              quantizationTable: null
            });
            frame.componentIds[componentId] = l - 1;
            offset += 3;
          }
          frame.maxH = maxH;
          frame.maxV = maxV;
          prepareComponents(frame);
          break;
        case 0xffc4:
          const huffmanLength = readUint16(data, offset);
          offset += 2;
          for (i = 2; i < huffmanLength;) {
            const huffmanTableSpec = data[offset++];
            const codeLengths = new Uint8Array(16);
            let codeLengthSum = 0;
            for (j = 0; j < 16; j++, offset++) {
              codeLengthSum += codeLengths[j] = data[offset];
            }
            const huffmanValues = new Uint8Array(codeLengthSum);
            for (j = 0; j < codeLengthSum; j++, offset++) {
              huffmanValues[j] = data[offset];
            }
            i += 17 + codeLengthSum;
            (huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
          }
          break;
        case 0xffdd:
          offset += 2;
          resetInterval = readUint16(data, offset);
          offset += 2;
          break;
        case 0xffda:
          const parseDNLMarker = ++numSOSMarkers === 1 && !dnlScanLines;
          offset += 2;
          const selectorsCount = data[offset++],
            components = [];
          for (i = 0; i < selectorsCount; i++) {
            const index = data[offset++];
            const componentIndex = frame.componentIds[index];
            const component = frame.components[componentIndex];
            component.index = index;
            const tableSpec = data[offset++];
            component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
            component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
            components.push(component);
          }
          const spectralStart = data[offset++],
            spectralEnd = data[offset++],
            successiveApproximation = data[offset++];
          try {
            const processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15, parseDNLMarker);
            offset += processed;
          } catch (ex) {
            if (ex instanceof DNLMarkerError) {
              warn(`${ex.message} -- attempting to re-parse the JPEG image.`);
              return this.parse(data, {
                dnlScanLines: ex.scanLines
              });
            } else if (ex instanceof EOIMarkerError) {
              warn(`${ex.message} -- ignoring the rest of the image data.`);
              break markerLoop;
            }
            throw ex;
          }
          break;
        case 0xffdc:
          offset += 4;
          break;
        case 0xffff:
          if (data[offset] !== 0xff) {
            offset--;
          }
          break;
        default:
          const nextFileMarker = findNextFileMarker(data, offset - 2, offset - 3);
          if (nextFileMarker?.invalid) {
            warn("JpegImage.parse - unexpected data, current marker is: " + nextFileMarker.invalid);
            offset = nextFileMarker.offset;
            break;
          }
          if (!nextFileMarker || offset >= data.length - 1) {
            warn("JpegImage.parse - reached the end of the image data " + "without finding an EOI marker (0xFFD9).");
            break markerLoop;
          }
          throw new JpegError("JpegImage.parse - unknown marker: " + fileMarker.toString(16));
      }
      fileMarker = readUint16(data, offset);
      offset += 2;
    }
    if (!frame) {
      throw new JpegError("JpegImage.parse - no frame data found.");
    }
    this.width = frame.samplesPerLine;
    this.height = frame.scanLines;
    this.jfif = jfif;
    this.adobe = adobe;
    this.components = [];
    for (const component of frame.components) {
      const quantizationTable = quantizationTables[component.quantizationId];
      if (quantizationTable) {
        component.quantizationTable = quantizationTable;
      }
      this.components.push({
        index: component.index,
        output: buildComponentData(frame, component),
        scaleX: component.h / frame.maxH,
        scaleY: component.v / frame.maxV,
        blocksPerLine: component.blocksPerLine,
        blocksPerColumn: component.blocksPerColumn
      });
    }
    this.numComponents = this.components.length;
    return undefined;
  }
  _getLinearizedBlockData(width, height, isSourcePDF = false) {
    const scaleX = this.width / width,
      scaleY = this.height / height;
    let component, componentScaleX, componentScaleY, blocksPerScanline;
    let x, y, i, j, k;
    let index;
    let offset = 0;
    let output;
    const numComponents = this.components.length;
    const dataLength = width * height * numComponents;
    const data = new Uint8ClampedArray(dataLength);
    const xScaleBlockOffset = new Uint32Array(width);
    const mask3LSB = 0xfffffff8;
    let lastComponentScaleX;
    for (i = 0; i < numComponents; i++) {
      component = this.components[i];
      componentScaleX = component.scaleX * scaleX;
      componentScaleY = component.scaleY * scaleY;
      offset = i;
      output = component.output;
      blocksPerScanline = component.blocksPerLine + 1 << 3;
      if (componentScaleX !== lastComponentScaleX) {
        for (x = 0; x < width; x++) {
          j = 0 | x * componentScaleX;
          xScaleBlockOffset[x] = (j & mask3LSB) << 3 | j & 7;
        }
        lastComponentScaleX = componentScaleX;
      }
      for (y = 0; y < height; y++) {
        j = 0 | y * componentScaleY;
        index = blocksPerScanline * (j & mask3LSB) | (j & 7) << 3;
        for (x = 0; x < width; x++) {
          data[offset] = output[index + xScaleBlockOffset[x]];
          offset += numComponents;
        }
      }
    }
    let transform = this._decodeTransform;
    if (!isSourcePDF && numComponents === 4 && !transform) {
      transform = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255]);
    }
    if (transform) {
      for (i = 0; i < dataLength;) {
        for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
          data[i] = (data[i] * transform[k] >> 8) + transform[k + 1];
        }
      }
    }
    return data;
  }
  get _isColorConversionNeeded() {
    if (this.adobe) {
      return !!this.adobe.transformCode;
    }
    if (this.numComponents === 3) {
      if (this._colorTransform === 0) {
        return false;
      } else if (this.components[0].index === 0x52 && this.components[1].index === 0x47 && this.components[2].index === 0x42) {
        return false;
      }
      return true;
    }
    if (this._colorTransform === 1) {
      return true;
    }
    return false;
  }
  _convertYccToRgb(data) {
    let Y, Cb, Cr;
    for (let i = 0, length = data.length; i < length; i += 3) {
      Y = data[i];
      Cb = data[i + 1];
      Cr = data[i + 2];
      data[i] = Y - 179.456 + 1.402 * Cr;
      data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
      data[i + 2] = Y - 226.816 + 1.772 * Cb;
    }
    return data;
  }
  _convertYccToRgba(data, out) {
    for (let i = 0, j = 0, length = data.length; i < length; i += 3, j += 4) {
      const Y = data[i];
      const Cb = data[i + 1];
      const Cr = data[i + 2];
      out[j] = Y - 179.456 + 1.402 * Cr;
      out[j + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
      out[j + 2] = Y - 226.816 + 1.772 * Cb;
      out[j + 3] = 255;
    }
    return out;
  }
  _convertYcckToRgb(data) {
    this._convertYcckToCmyk(data);
    return this._convertCmykToRgb(data);
  }
  _convertYcckToRgba(data) {
    this._convertYcckToCmyk(data);
    return this._convertCmykToRgba(data);
  }
  _convertYcckToCmyk(data) {
    let Y, Cb, Cr;
    for (let i = 0, length = data.length; i < length; i += 4) {
      Y = data[i];
      Cb = data[i + 1];
      Cr = data[i + 2];
      data[i] = 434.456 - Y - 1.402 * Cr;
      data[i + 1] = 119.541 - Y + 0.344 * Cb + 0.714 * Cr;
      data[i + 2] = 481.816 - Y - 1.772 * Cb;
    }
    return data;
  }
  _convertCmykToRgb(data) {
    const count = data.length / 4;
    ColorSpaceUtils.cmyk.getRgbBuffer(data, 0, count, data, 0, 8, 0);
    return data.subarray(0, count * 3);
  }
  _convertCmykToRgba(data) {
    ColorSpaceUtils.cmyk.getRgbBuffer(data, 0, data.length / 4, data, 0, 8, 1);
    if (ColorSpaceUtils.cmyk instanceof DeviceCmykCS) {
      for (let i = 3, ii = data.length; i < ii; i += 4) {
        data[i] = 255;
      }
    }
    return data;
  }
  getData({
    width,
    height,
    forceRGBA = false,
    forceRGB = false,
    isSourcePDF = false
  }) {
    if (this.numComponents > 4) {
      throw new JpegError("Unsupported color mode");
    }
    const data = this._getLinearizedBlockData(width, height, isSourcePDF);
    if (this.numComponents === 1 && (forceRGBA || forceRGB)) {
      const len = data.length * (forceRGBA ? 4 : 3);
      const rgbaData = new Uint8ClampedArray(len);
      let offset = 0;
      if (forceRGBA) {
        grayToRGBA(data, new Uint32Array(rgbaData.buffer));
      } else {
        for (const grayColor of data) {
          rgbaData[offset++] = grayColor;
          rgbaData[offset++] = grayColor;
          rgbaData[offset++] = grayColor;
        }
      }
      return rgbaData;
    } else if (this.numComponents === 3 && this._isColorConversionNeeded) {
      if (forceRGBA) {
        const rgbaData = new Uint8ClampedArray(data.length / 3 * 4);
        return this._convertYccToRgba(data, rgbaData);
      }
      return this._convertYccToRgb(data);
    } else if (this.numComponents === 4) {
      if (this._isColorConversionNeeded) {
        if (forceRGBA) {
          return this._convertYcckToRgba(data);
        }
        if (forceRGB) {
          return this._convertYcckToRgb(data);
        }
        return this._convertYcckToCmyk(data);
      } else if (forceRGBA) {
        return this._convertCmykToRgba(data);
      } else if (forceRGB) {
        return this._convertCmykToRgb(data);
      }
    }
    return data;
  }
}

;// ./src/core/jpeg_stream.js




class JpegStream extends DecodeStream {
  static #isImageDecoderSupported = FeatureTest.isImageDecoderSupported;
  constructor(stream, maybeLength, params) {
    super(maybeLength);
    this.stream = stream;
    this.dict = stream.dict;
    this.maybeLength = maybeLength;
    this.params = params;
  }
  static get canUseImageDecoder() {
    return shadow(this, "canUseImageDecoder", this.#isImageDecoderSupported ? ImageDecoder.isTypeSupported("image/jpeg") : Promise.resolve(false));
  }
  static setOptions({
    isImageDecoderSupported = false
  }) {
    this.#isImageDecoderSupported = isImageDecoderSupported;
  }
  get bytes() {
    return shadow(this, "bytes", this.stream.getBytes(this.maybeLength));
  }
  ensureBuffer(requested) {}
  readBlock() {
    this.decodeImage();
  }
  get jpegOptions() {
    const jpegOptions = {
      decodeTransform: undefined,
      colorTransform: undefined
    };
    const decodeArr = this.dict.getArray("D", "Decode");
    if ((this.forceRGBA || this.forceRGB) && Array.isArray(decodeArr)) {
      const bitsPerComponent = this.dict.get("BPC", "BitsPerComponent") || 8;
      const decodeArrLength = decodeArr.length;
      const transform = new Int32Array(decodeArrLength);
      let transformNeeded = false;
      const maxValue = (1 << bitsPerComponent) - 1;
      for (let i = 0; i < decodeArrLength; i += 2) {
        transform[i] = (decodeArr[i + 1] - decodeArr[i]) * 256 | 0;
        transform[i + 1] = decodeArr[i] * maxValue | 0;
        if (transform[i] !== 256 || transform[i + 1] !== 0) {
          transformNeeded = true;
        }
      }
      if (transformNeeded) {
        jpegOptions.decodeTransform = transform;
      }
    }
    if (this.params instanceof Dict) {
      const colorTransform = this.params.get("ColorTransform");
      if (Number.isInteger(colorTransform)) {
        jpegOptions.colorTransform = colorTransform;
      }
    }
    return shadow(this, "jpegOptions", jpegOptions);
  }
  #skipUselessBytes(data) {
    for (let i = 0, ii = data.length - 1; i < ii; i++) {
      if (data[i] === 0xff && data[i + 1] === 0xd8) {
        if (i > 0) {
          data = data.subarray(i);
        }
        break;
      }
    }
    return data;
  }
  decodeImage(bytes) {
    if (this.eof) {
      return this.buffer;
    }
    bytes = this.#skipUselessBytes(bytes || this.bytes);
    const jpegImage = new JpegImage(this.jpegOptions);
    jpegImage.parse(bytes);
    const data = jpegImage.getData({
      width: this.drawWidth,
      height: this.drawHeight,
      forceRGBA: this.forceRGBA,
      forceRGB: this.forceRGB,
      isSourcePDF: true
    });
    this.buffer = data;
    this.bufferLength = data.length;
    this.eof = true;
    return this.buffer;
  }
  get canAsyncDecodeImageFromBuffer() {
    return this.stream.isAsync;
  }
  async getTransferableImage() {
    if (!(await JpegStream.canUseImageDecoder)) {
      return null;
    }
    const jpegOptions = this.jpegOptions;
    if (jpegOptions.decodeTransform) {
      return null;
    }
    let decoder;
    try {
      const bytes = this.canAsyncDecodeImageFromBuffer && (await this.stream.asyncGetBytes()) || this.bytes;
      if (!bytes) {
        return null;
      }
      let data = this.#skipUselessBytes(bytes);
      const useImageDecoder = JpegImage.canUseImageDecoder(data, jpegOptions.colorTransform);
      if (!useImageDecoder) {
        return null;
      }
      if (useImageDecoder.exifStart) {
        data = data.slice();
        data.fill(0x00, useImageDecoder.exifStart, useImageDecoder.exifEnd);
      }
      decoder = new ImageDecoder({
        data,
        type: "image/jpeg",
        preferAnimation: false
      });
      return (await decoder.decode()).image;
    } catch (reason) {
      warn(`getTransferableImage - failed: "${reason}".`);
      return null;
    } finally {
      decoder?.close();
    }
  }
}

;// ./external/openjpeg/openjpeg.js
var OpenJPEG = (() => {
  return async function (moduleArg = {}) {
    var moduleRtn;
    var Module = moduleArg;
    var readyPromiseResolve, readyPromiseReject;
    var readyPromise = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var ENVIRONMENT_IS_WEB = true;
    var ENVIRONMENT_IS_WORKER = false;
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var _scriptName = import.meta.url;
    var scriptDirectory = "";
    var readAsync, readBinary;
    if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      try {
        scriptDirectory = new URL(".", _scriptName).href;
      } catch {}
      readAsync = async url => {
        var response = await fetch(url, {
          credentials: "same-origin"
        });
        if (response.ok) {
          return response.arrayBuffer();
        }
        throw new Error(response.status + " : " + response.url);
      };
    } else {}
    var out = console.log.bind(console);
    var err = console.error.bind(console);
    var wasmBinary;
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAP64, HEAPU64, HEAPF64;
    var runtimeInitialized = false;
    function updateMemoryViews() {
      var b = wasmMemory.buffer;
      HEAP8 = new Int8Array(b);
      HEAP16 = new Int16Array(b);
      HEAPU8 = new Uint8Array(b);
      HEAPU16 = new Uint16Array(b);
      HEAP32 = new Int32Array(b);
      HEAPU32 = new Uint32Array(b);
      HEAPF32 = new Float32Array(b);
      HEAPF64 = new Float64Array(b);
      HEAP64 = new BigInt64Array(b);
      HEAPU64 = new BigUint64Array(b);
    }
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(onPreRuns);
    }
    function initRuntime() {
      runtimeInitialized = true;
      wasmExports["t"]();
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(onPostRuns);
    }
    var runDependencies = 0;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      Module["monitorRunDependencies"]?.(runDependencies);
    }
    function removeRunDependency(id) {
      runDependencies--;
      Module["monitorRunDependencies"]?.(runDependencies);
      if (runDependencies == 0) {
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    function abort(what) {
      Module["onAbort"]?.(what);
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      what += ". Build with -sASSERTIONS for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    var wasmBinaryFile;
    function getWasmImports() {
      return {
        a: wasmImports
      };
    }
    async function createWasm() {
      function receiveInstance(instance, module) {
        wasmExports = instance.exports;
        wasmMemory = wasmExports["s"];
        updateMemoryViews();
        removeRunDependency("wasm-instantiate");
        return wasmExports;
      }
      addRunDependency("wasm-instantiate");
      var info = getWasmImports();
      return new Promise((resolve, reject) => {
        Module["instantiateWasm"](info, (mod, inst) => {
          resolve(receiveInstance(mod, inst));
        });
      });
    }
    class ExitStatus {
      name = "ExitStatus";
      constructor(status) {
        this.message = `Program terminated with exit(${status})`;
        this.status = status;
      }
    }
    var callRuntimeCallbacks = callbacks => {
      while (callbacks.length > 0) {
        callbacks.shift()(Module);
      }
    };
    var onPostRuns = [];
    var addOnPostRun = cb => onPostRuns.push(cb);
    var onPreRuns = [];
    var addOnPreRun = cb => onPreRuns.push(cb);
    var noExitRuntime = true;
    var __abort_js = () => abort("");
    var runtimeKeepaliveCounter = 0;
    var __emscripten_runtime_keepalive_clear = () => {
      noExitRuntime = false;
      runtimeKeepaliveCounter = 0;
    };
    var timers = {};
    var handleException = e => {
      if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS;
      }
      quit_(1, e);
    };
    var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
    var _proc_exit = code => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        Module["onExit"]?.(code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };
    var exitJS = (status, implicit) => {
      EXITSTATUS = status;
      _proc_exit(status);
    };
    var _exit = exitJS;
    var maybeExit = () => {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
      }
    };
    var callUserCallback = func => {
      if (ABORT) {
        return;
      }
      try {
        func();
        maybeExit();
      } catch (e) {
        handleException(e);
      }
    };
    var _emscripten_get_now = () => performance.now();
    var __setitimer_js = (which, timeout_ms) => {
      if (timers[which]) {
        clearTimeout(timers[which].id);
        delete timers[which];
      }
      if (!timeout_ms) return 0;
      var id = setTimeout(() => {
        delete timers[which];
        callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
      }, timeout_ms);
      timers[which] = {
        id,
        timeout_ms
      };
      return 0;
    };
    function _copy_pixels_1(compG_ptr, nb_pixels) {
      compG_ptr >>= 2;
      const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels);
      const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
      imageData.set(compG);
    }
    function _copy_pixels_3(compR_ptr, compG_ptr, compB_ptr, nb_pixels) {
      compR_ptr >>= 2;
      compG_ptr >>= 2;
      compB_ptr >>= 2;
      const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 3);
      const compR = HEAP32.subarray(compR_ptr, compR_ptr + nb_pixels);
      const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
      const compB = HEAP32.subarray(compB_ptr, compB_ptr + nb_pixels);
      for (let i = 0; i < nb_pixels; i++) {
        imageData[3 * i] = compR[i];
        imageData[3 * i + 1] = compG[i];
        imageData[3 * i + 2] = compB[i];
      }
    }
    function _copy_pixels_4(compR_ptr, compG_ptr, compB_ptr, compA_ptr, nb_pixels) {
      compR_ptr >>= 2;
      compG_ptr >>= 2;
      compB_ptr >>= 2;
      compA_ptr >>= 2;
      const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 4);
      const compR = HEAP32.subarray(compR_ptr, compR_ptr + nb_pixels);
      const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
      const compB = HEAP32.subarray(compB_ptr, compB_ptr + nb_pixels);
      const compA = HEAP32.subarray(compA_ptr, compA_ptr + nb_pixels);
      for (let i = 0; i < nb_pixels; i++) {
        imageData[4 * i] = compR[i];
        imageData[4 * i + 1] = compG[i];
        imageData[4 * i + 2] = compB[i];
        imageData[4 * i + 3] = compA[i];
      }
    }
    var getHeapMax = () => 2147483648;
    var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
    var growMemory = size => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536 | 0;
      try {
        wasmMemory.grow(pages);
        updateMemoryViews();
        return 1;
      } catch (e) {}
    };
    var _emscripten_resize_heap = requestedSize => {
      var oldSize = HEAPU8.length;
      requestedSize >>>= 0;
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = growMemory(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    };
    var ENV = {};
    var getExecutableName = () => thisProgram || "./this.program";
    var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: lang,
          _: getExecutableName()
        };
        for (var x in ENV) {
          if (ENV[x] === undefined) delete env[x];else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
    var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 192 | u >> 6;
          heap[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 224 | u >> 12;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap[outIdx++] = 240 | u >> 18;
          heap[outIdx++] = 128 | u >> 12 & 63;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        }
      }
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
    var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      var envp = 0;
      for (var string of getEnvStrings()) {
        var ptr = environ_buf + bufSize;
        HEAPU32[__environ + envp >> 2] = ptr;
        bufSize += stringToUTF8(string, ptr, Infinity) + 1;
        envp += 4;
      }
      return 0;
    };
    var lengthBytesUTF8 = str => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
          len++;
        } else if (c <= 2047) {
          len += 2;
        } else if (c >= 55296 && c <= 57343) {
          len += 4;
          ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
    var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      for (var string of strings) {
        bufSize += lengthBytesUTF8(string) + 1;
      }
      HEAPU32[penviron_buf_size >> 2] = bufSize;
      return 0;
    };
    var _fd_close = fd => 52;
    var INT53_MAX = 9007199254740992;
    var INT53_MIN = -9007199254740992;
    var bigintToI53Checked = num => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
    function _fd_seek(fd, offset, whence, newOffset) {
      offset = bigintToI53Checked(offset);
      return 70;
    }
    var printCharBuffers = [null, [], []];
    var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : undefined;
    var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = "";
      while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
      return str;
    };
    var printChar = (stream, curr) => {
      var buffer = printCharBuffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    };
    var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    var _fd_write = (fd, iov, iovcnt, pnum) => {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }
      HEAPU32[pnum >> 2] = num;
      return 0;
    };
    function _gray_to_rgba(compG_ptr, nb_pixels) {
      compG_ptr >>= 2;
      const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 4);
      const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
      for (let i = 0; i < nb_pixels; i++) {
        imageData[4 * i] = imageData[4 * i + 1] = imageData[4 * i + 2] = compG[i];
        imageData[4 * i + 3] = 255;
      }
    }
    function _graya_to_rgba(compG_ptr, compA_ptr, nb_pixels) {
      compG_ptr >>= 2;
      compA_ptr >>= 2;
      const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 4);
      const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
      const compA = HEAP32.subarray(compA_ptr, compA_ptr + nb_pixels);
      for (let i = 0; i < nb_pixels; i++) {
        imageData[4 * i] = imageData[4 * i + 1] = imageData[4 * i + 2] = compG[i];
        imageData[4 * i + 3] = compA[i];
      }
    }
    function _jsPrintWarning(message_ptr) {
      const message = UTF8ToString(message_ptr);
      (Module.warn || console.warn)(`OpenJPEG: ${message}`);
    }
    function _rgb_to_rgba(compR_ptr, compG_ptr, compB_ptr, nb_pixels) {
      compR_ptr >>= 2;
      compG_ptr >>= 2;
      compB_ptr >>= 2;
      const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 4);
      const compR = HEAP32.subarray(compR_ptr, compR_ptr + nb_pixels);
      const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
      const compB = HEAP32.subarray(compB_ptr, compB_ptr + nb_pixels);
      for (let i = 0; i < nb_pixels; i++) {
        imageData[4 * i] = compR[i];
        imageData[4 * i + 1] = compG[i];
        imageData[4 * i + 2] = compB[i];
        imageData[4 * i + 3] = 255;
      }
    }
    function _storeErrorMessage(message_ptr) {
      const message = UTF8ToString(message_ptr);
      if (!Module.errorMessages) {
        Module.errorMessages = message;
      } else {
        Module.errorMessages += "\n" + message;
      }
    }
    var writeArrayToMemory = (array, buffer) => {
      HEAP8.set(array, buffer);
    };
    if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
    if (Module["print"]) out = Module["print"];
    if (Module["printErr"]) err = Module["printErr"];
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    Module["writeArrayToMemory"] = writeArrayToMemory;
    var wasmImports = {
      l: __abort_js,
      k: __emscripten_runtime_keepalive_clear,
      m: __setitimer_js,
      g: _copy_pixels_1,
      f: _copy_pixels_3,
      e: _copy_pixels_4,
      n: _emscripten_resize_heap,
      p: _environ_get,
      q: _environ_sizes_get,
      b: _fd_close,
      o: _fd_seek,
      c: _fd_write,
      r: _gray_to_rgba,
      i: _graya_to_rgba,
      d: _jsPrintWarning,
      j: _proc_exit,
      h: _rgb_to_rgba,
      a: _storeErrorMessage
    };
    var wasmExports = await createWasm();
    var ___wasm_call_ctors = wasmExports["t"];
    var _malloc = Module["_malloc"] = wasmExports["u"];
    var _free = Module["_free"] = wasmExports["v"];
    var _jp2_decode = Module["_jp2_decode"] = wasmExports["w"];
    var __emscripten_timeout = wasmExports["x"];
    function run() {
      if (runDependencies > 0) {
        dependenciesFulfilled = run;
        return;
      }
      preRun();
      if (runDependencies > 0) {
        dependenciesFulfilled = run;
        return;
      }
      function doRun() {
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        readyPromiseResolve(Module);
        Module["onRuntimeInitialized"]?.();
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(() => {
          setTimeout(() => Module["setStatus"](""), 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    function preInit() {
      if (Module["preInit"]) {
        if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
        while (Module["preInit"].length > 0) {
          Module["preInit"].shift()();
        }
      }
    }
    preInit();
    run();
    moduleRtn = readyPromise;
    return moduleRtn;
  };
})();
/* harmony default export */ const openjpeg = (OpenJPEG);
;// ./src/core/jpx.js




class JpxError extends BaseException {
  constructor(msg) {
    super(msg, "JpxError");
  }
}
class JpxImage {
  static #buffer = null;
  static #handler = null;
  static #modulePromise = null;
  static #useWasm = true;
  static #useWorkerFetch = true;
  static #wasmUrl = null;
  static setOptions({
    handler,
    useWasm,
    useWorkerFetch,
    wasmUrl
  }) {
    this.#useWasm = useWasm;
    this.#useWorkerFetch = useWorkerFetch;
    this.#wasmUrl = wasmUrl;
    if (!useWorkerFetch) {
      this.#handler = handler;
    }
  }
  static async #getJsModule(fallbackCallback) {
    const path = `${this.#wasmUrl}openjpeg_nowasm_fallback.js`;
    let instance = null;
    try {
      const mod = await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      path);
      instance = mod.default();
    } catch (e) {
      warn(`JpxImage#getJsModule: ${e}`);
    }
    fallbackCallback(instance);
  }
  static async #instantiateWasm(fallbackCallback, imports, successCallback) {
    const filename = "openjpeg.wasm";
    try {
      if (!this.#buffer) {
        if (this.#useWorkerFetch) {
          this.#buffer = await fetchBinaryData(`${this.#wasmUrl}${filename}`);
        } else {
          this.#buffer = await this.#handler.sendWithPromise("FetchBinaryData", {
            type: "wasmFactory",
            filename
          });
        }
      }
      const results = await WebAssembly.instantiate(this.#buffer, imports);
      return successCallback(results.instance);
    } catch (reason) {
      warn(`JpxImage#instantiateWasm: ${reason}`);
      this.#getJsModule(fallbackCallback);
      return null;
    } finally {
      this.#handler = null;
    }
  }
  static async decode(bytes, {
    numComponents = 4,
    isIndexedColormap = false,
    smaskInData = false,
    reducePower = 0
  } = {}) {
    if (!this.#modulePromise) {
      const {
        promise,
        resolve
      } = Promise.withResolvers();
      const promises = [promise];
      if (!this.#useWasm) {
        this.#getJsModule(resolve);
      } else {
        promises.push(openjpeg({
          warn: warn,
          instantiateWasm: this.#instantiateWasm.bind(this, resolve)
        }));
      }
      this.#modulePromise = Promise.race(promises);
    }
    const module = await this.#modulePromise;
    if (!module) {
      throw new JpxError("OpenJPEG failed to initialize");
    }
    let ptr;
    try {
      const size = bytes.length;
      ptr = module._malloc(size);
      module.writeArrayToMemory(bytes, ptr);
      const ret = module._jp2_decode(ptr, size, numComponents > 0 ? numComponents : 0, !!isIndexedColormap, !!smaskInData, reducePower);
      if (ret) {
        const {
          errorMessages
        } = module;
        if (errorMessages) {
          delete module.errorMessages;
          throw new JpxError(errorMessages);
        }
        throw new JpxError("Unknown error");
      }
      const {
        imageData
      } = module;
      module.imageData = null;
      return imageData;
    } finally {
      if (ptr) {
        module._free(ptr);
      }
    }
  }
  static cleanup() {
    this.#modulePromise = null;
  }
  static parseImageProperties(stream) {
    let newByte = stream.getByte();
    while (newByte >= 0) {
      const oldByte = newByte;
      newByte = stream.getByte();
      const code = oldByte << 8 | newByte;
      if (code === 0xff51) {
        stream.skip(4);
        const Xsiz = stream.getInt32() >>> 0;
        const Ysiz = stream.getInt32() >>> 0;
        const XOsiz = stream.getInt32() >>> 0;
        const YOsiz = stream.getInt32() >>> 0;
        stream.skip(16);
        const Csiz = stream.getUint16();
        return {
          width: Xsiz - XOsiz,
          height: Ysiz - YOsiz,
          bitsPerComponent: 8,
          componentsCount: Csiz
        };
      }
    }
    throw new JpxError("No size marker found in JPX stream");
  }
}

;// ./src/core/operator_list.js

function addState(parentState, pattern, checkFn, iterateFn, processFn) {
  let state = parentState;
  for (let i = 0, ii = pattern.length - 1; i < ii; i++) {
    const item = pattern[i];
    state = state[item] ||= [];
  }
  state[pattern.at(-1)] = {
    checkFn,
    iterateFn,
    processFn
  };
}
const InitialState = [];
addState(InitialState, [OPS.save, OPS.transform, OPS.paintInlineImageXObject, OPS.restore], null, function iterateInlineImageGroup(context, i) {
  const fnArray = context.fnArray;
  const iFirstSave = context.iCurr - 3;
  const pos = (i - iFirstSave) % 4;
  switch (pos) {
    case 0:
      return fnArray[i] === OPS.save;
    case 1:
      return fnArray[i] === OPS.transform;
    case 2:
      return fnArray[i] === OPS.paintInlineImageXObject;
    case 3:
      return fnArray[i] === OPS.restore;
  }
  throw new Error(`iterateInlineImageGroup - invalid pos: ${pos}`);
}, function foundInlineImageGroup(context, i) {
  const MIN_IMAGES_IN_INLINE_IMAGES_BLOCK = 10;
  const MAX_IMAGES_IN_INLINE_IMAGES_BLOCK = 200;
  const MAX_WIDTH = 1000;
  const IMAGE_PADDING = 1;
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const curr = context.iCurr;
  const iFirstSave = curr - 3;
  const iFirstTransform = curr - 2;
  const iFirstPIIXO = curr - 1;
  const count = Math.min(Math.floor((i - iFirstSave) / 4), MAX_IMAGES_IN_INLINE_IMAGES_BLOCK);
  if (count < MIN_IMAGES_IN_INLINE_IMAGES_BLOCK) {
    return i - (i - iFirstSave) % 4;
  }
  let maxX = 0;
  const map = [];
  let maxLineHeight = 0;
  let currentX = IMAGE_PADDING,
    currentY = IMAGE_PADDING;
  for (let q = 0; q < count; q++) {
    const transform = argsArray[iFirstTransform + (q << 2)];
    const img = argsArray[iFirstPIIXO + (q << 2)][0];
    if (currentX + img.width > MAX_WIDTH) {
      maxX = Math.max(maxX, currentX);
      currentY += maxLineHeight + 2 * IMAGE_PADDING;
      currentX = 0;
      maxLineHeight = 0;
    }
    map.push({
      transform,
      x: currentX,
      y: currentY,
      w: img.width,
      h: img.height
    });
    currentX += img.width + 2 * IMAGE_PADDING;
    maxLineHeight = Math.max(maxLineHeight, img.height);
  }
  const imgWidth = Math.max(maxX, currentX) + IMAGE_PADDING;
  const imgHeight = currentY + maxLineHeight + IMAGE_PADDING;
  const imgData = new Uint8Array(imgWidth * imgHeight * 4);
  const imgRowSize = imgWidth << 2;
  for (let q = 0; q < count; q++) {
    const data = argsArray[iFirstPIIXO + (q << 2)][0].data;
    const rowSize = map[q].w << 2;
    let dataOffset = 0;
    let offset = map[q].x + map[q].y * imgWidth << 2;
    imgData.set(data.subarray(0, rowSize), offset - imgRowSize);
    for (let k = 0, kk = map[q].h; k < kk; k++) {
      imgData.set(data.subarray(dataOffset, dataOffset + rowSize), offset);
      dataOffset += rowSize;
      offset += imgRowSize;
    }
    imgData.set(data.subarray(dataOffset - rowSize, dataOffset), offset);
    while (offset >= 0) {
      data[offset - 4] = data[offset];
      data[offset - 3] = data[offset + 1];
      data[offset - 2] = data[offset + 2];
      data[offset - 1] = data[offset + 3];
      data[offset + rowSize] = data[offset + rowSize - 4];
      data[offset + rowSize + 1] = data[offset + rowSize - 3];
      data[offset + rowSize + 2] = data[offset + rowSize - 2];
      data[offset + rowSize + 3] = data[offset + rowSize - 1];
      offset -= imgRowSize;
    }
  }
  const img = {
    width: imgWidth,
    height: imgHeight
  };
  if (context.isOffscreenCanvasSupported) {
    const canvas = new OffscreenCanvas(imgWidth, imgHeight);
    const ctx = canvas.getContext("2d");
    ctx.putImageData(new ImageData(new Uint8ClampedArray(imgData.buffer), imgWidth, imgHeight), 0, 0);
    img.bitmap = canvas.transferToImageBitmap();
    img.data = null;
  } else {
    img.kind = ImageKind.RGBA_32BPP;
    img.data = imgData;
  }
  fnArray.splice(iFirstSave, count * 4, OPS.paintInlineImageXObjectGroup);
  argsArray.splice(iFirstSave, count * 4, [img, map]);
  return iFirstSave + 1;
});
addState(InitialState, [OPS.save, OPS.transform, OPS.paintImageMaskXObject, OPS.restore], null, function iterateImageMaskGroup(context, i) {
  const fnArray = context.fnArray;
  const iFirstSave = context.iCurr - 3;
  const pos = (i - iFirstSave) % 4;
  switch (pos) {
    case 0:
      return fnArray[i] === OPS.save;
    case 1:
      return fnArray[i] === OPS.transform;
    case 2:
      return fnArray[i] === OPS.paintImageMaskXObject;
    case 3:
      return fnArray[i] === OPS.restore;
  }
  throw new Error(`iterateImageMaskGroup - invalid pos: ${pos}`);
}, function foundImageMaskGroup(context, i) {
  const MIN_IMAGES_IN_MASKS_BLOCK = 10;
  const MAX_IMAGES_IN_MASKS_BLOCK = 100;
  const MAX_SAME_IMAGES_IN_MASKS_BLOCK = 1000;
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const curr = context.iCurr;
  const iFirstSave = curr - 3;
  const iFirstTransform = curr - 2;
  const iFirstPIMXO = curr - 1;
  let count = Math.floor((i - iFirstSave) / 4);
  if (count < MIN_IMAGES_IN_MASKS_BLOCK) {
    return i - (i - iFirstSave) % 4;
  }
  let isSameImage = false;
  let iTransform, transformArgs;
  const firstPIMXOArg0 = argsArray[iFirstPIMXO][0];
  const firstTransformArg0 = argsArray[iFirstTransform][0],
    firstTransformArg1 = argsArray[iFirstTransform][1],
    firstTransformArg2 = argsArray[iFirstTransform][2],
    firstTransformArg3 = argsArray[iFirstTransform][3];
  if (firstTransformArg1 === firstTransformArg2) {
    isSameImage = true;
    iTransform = iFirstTransform + 4;
    let iPIMXO = iFirstPIMXO + 4;
    for (let q = 1; q < count; q++, iTransform += 4, iPIMXO += 4) {
      transformArgs = argsArray[iTransform];
      if (argsArray[iPIMXO][0] !== firstPIMXOArg0 || transformArgs[0] !== firstTransformArg0 || transformArgs[1] !== firstTransformArg1 || transformArgs[2] !== firstTransformArg2 || transformArgs[3] !== firstTransformArg3) {
        if (q < MIN_IMAGES_IN_MASKS_BLOCK) {
          isSameImage = false;
        } else {
          count = q;
        }
        break;
      }
    }
  }
  if (isSameImage) {
    count = Math.min(count, MAX_SAME_IMAGES_IN_MASKS_BLOCK);
    const positions = new Float32Array(count * 2);
    iTransform = iFirstTransform;
    for (let q = 0; q < count; q++, iTransform += 4) {
      transformArgs = argsArray[iTransform];
      positions[q << 1] = transformArgs[4];
      positions[(q << 1) + 1] = transformArgs[5];
    }
    fnArray.splice(iFirstSave, count * 4, OPS.paintImageMaskXObjectRepeat);
    argsArray.splice(iFirstSave, count * 4, [firstPIMXOArg0, firstTransformArg0, firstTransformArg1, firstTransformArg2, firstTransformArg3, positions]);
  } else {
    count = Math.min(count, MAX_IMAGES_IN_MASKS_BLOCK);
    const images = [];
    for (let q = 0; q < count; q++) {
      transformArgs = argsArray[iFirstTransform + (q << 2)];
      const maskParams = argsArray[iFirstPIMXO + (q << 2)][0];
      images.push({
        data: maskParams.data,
        width: maskParams.width,
        height: maskParams.height,
        interpolate: maskParams.interpolate,
        count: maskParams.count,
        transform: transformArgs
      });
    }
    fnArray.splice(iFirstSave, count * 4, OPS.paintImageMaskXObjectGroup);
    argsArray.splice(iFirstSave, count * 4, [images]);
  }
  return iFirstSave + 1;
});
addState(InitialState, [OPS.save, OPS.transform, OPS.paintImageXObject, OPS.restore], function (context) {
  const argsArray = context.argsArray;
  const iFirstTransform = context.iCurr - 2;
  return argsArray[iFirstTransform][1] === 0 && argsArray[iFirstTransform][2] === 0;
}, function iterateImageGroup(context, i) {
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const iFirstSave = context.iCurr - 3;
  const pos = (i - iFirstSave) % 4;
  switch (pos) {
    case 0:
      return fnArray[i] === OPS.save;
    case 1:
      if (fnArray[i] !== OPS.transform) {
        return false;
      }
      const iFirstTransform = context.iCurr - 2;
      const firstTransformArg0 = argsArray[iFirstTransform][0];
      const firstTransformArg3 = argsArray[iFirstTransform][3];
      if (argsArray[i][0] !== firstTransformArg0 || argsArray[i][1] !== 0 || argsArray[i][2] !== 0 || argsArray[i][3] !== firstTransformArg3) {
        return false;
      }
      return true;
    case 2:
      if (fnArray[i] !== OPS.paintImageXObject) {
        return false;
      }
      const iFirstPIXO = context.iCurr - 1;
      const firstPIXOArg0 = argsArray[iFirstPIXO][0];
      if (argsArray[i][0] !== firstPIXOArg0) {
        return false;
      }
      return true;
    case 3:
      return fnArray[i] === OPS.restore;
  }
  throw new Error(`iterateImageGroup - invalid pos: ${pos}`);
}, function (context, i) {
  const MIN_IMAGES_IN_BLOCK = 3;
  const MAX_IMAGES_IN_BLOCK = 1000;
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const curr = context.iCurr;
  const iFirstSave = curr - 3;
  const iFirstTransform = curr - 2;
  const iFirstPIXO = curr - 1;
  const firstPIXOArg0 = argsArray[iFirstPIXO][0];
  const firstTransformArg0 = argsArray[iFirstTransform][0];
  const firstTransformArg3 = argsArray[iFirstTransform][3];
  const count = Math.min(Math.floor((i - iFirstSave) / 4), MAX_IMAGES_IN_BLOCK);
  if (count < MIN_IMAGES_IN_BLOCK) {
    return i - (i - iFirstSave) % 4;
  }
  const positions = new Float32Array(count * 2);
  let iTransform = iFirstTransform;
  for (let q = 0; q < count; q++, iTransform += 4) {
    const transformArgs = argsArray[iTransform];
    positions[q << 1] = transformArgs[4];
    positions[(q << 1) + 1] = transformArgs[5];
  }
  const args = [firstPIXOArg0, firstTransformArg0, firstTransformArg3, positions];
  fnArray.splice(iFirstSave, count * 4, OPS.paintImageXObjectRepeat);
  argsArray.splice(iFirstSave, count * 4, args);
  return iFirstSave + 1;
});
addState(InitialState, [OPS.beginText, OPS.setFont, OPS.setTextMatrix, OPS.showText, OPS.endText], null, function iterateShowTextGroup(context, i) {
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const iFirstSave = context.iCurr - 4;
  const pos = (i - iFirstSave) % 5;
  switch (pos) {
    case 0:
      return fnArray[i] === OPS.beginText;
    case 1:
      return fnArray[i] === OPS.setFont;
    case 2:
      return fnArray[i] === OPS.setTextMatrix;
    case 3:
      if (fnArray[i] !== OPS.showText) {
        return false;
      }
      const iFirstSetFont = context.iCurr - 3;
      const firstSetFontArg0 = argsArray[iFirstSetFont][0];
      const firstSetFontArg1 = argsArray[iFirstSetFont][1];
      if (argsArray[i][0] !== firstSetFontArg0 || argsArray[i][1] !== firstSetFontArg1) {
        return false;
      }
      return true;
    case 4:
      return fnArray[i] === OPS.endText;
  }
  throw new Error(`iterateShowTextGroup - invalid pos: ${pos}`);
}, function (context, i) {
  const MIN_CHARS_IN_BLOCK = 3;
  const MAX_CHARS_IN_BLOCK = 1000;
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const curr = context.iCurr;
  const iFirstBeginText = curr - 4;
  const iFirstSetFont = curr - 3;
  const iFirstSetTextMatrix = curr - 2;
  const iFirstShowText = curr - 1;
  const iFirstEndText = curr;
  const firstSetFontArg0 = argsArray[iFirstSetFont][0];
  const firstSetFontArg1 = argsArray[iFirstSetFont][1];
  let count = Math.min(Math.floor((i - iFirstBeginText) / 5), MAX_CHARS_IN_BLOCK);
  if (count < MIN_CHARS_IN_BLOCK) {
    return i - (i - iFirstBeginText) % 5;
  }
  let iFirst = iFirstBeginText;
  if (iFirstBeginText >= 4 && fnArray[iFirstBeginText - 4] === fnArray[iFirstSetFont] && fnArray[iFirstBeginText - 3] === fnArray[iFirstSetTextMatrix] && fnArray[iFirstBeginText - 2] === fnArray[iFirstShowText] && fnArray[iFirstBeginText - 1] === fnArray[iFirstEndText] && argsArray[iFirstBeginText - 4][0] === firstSetFontArg0 && argsArray[iFirstBeginText - 4][1] === firstSetFontArg1) {
    count++;
    iFirst -= 5;
  }
  let iEndText = iFirst + 4;
  for (let q = 1; q < count; q++) {
    fnArray.splice(iEndText, 3);
    argsArray.splice(iEndText, 3);
    iEndText += 2;
  }
  return iEndText + 1;
});
addState(InitialState, [OPS.save, OPS.transform, OPS.constructPath, OPS.restore], context => {
  const argsArray = context.argsArray;
  const iFirstConstructPath = context.iCurr - 1;
  const op = argsArray[iFirstConstructPath][0];
  if (op !== OPS.stroke && op !== OPS.closeStroke && op !== OPS.fillStroke && op !== OPS.eoFillStroke && op !== OPS.closeFillStroke && op !== OPS.closeEOFillStroke) {
    return true;
  }
  const iFirstTransform = context.iCurr - 2;
  const transform = argsArray[iFirstTransform];
  return transform[0] === 1 && transform[1] === 0 && transform[2] === 0 && transform[3] === 1;
}, () => false, (context, i) => {
  const {
    fnArray,
    argsArray
  } = context;
  const curr = context.iCurr;
  const iFirstSave = curr - 3;
  const iFirstTransform = curr - 2;
  const iFirstConstructPath = curr - 1;
  const args = argsArray[iFirstConstructPath];
  const transform = argsArray[iFirstTransform];
  const [, [buffer], minMax] = args;
  if (minMax) {
    Util.scaleMinMax(transform, minMax);
    for (let k = 0, kk = buffer.length; k < kk;) {
      switch (buffer[k++]) {
        case DrawOPS.moveTo:
        case DrawOPS.lineTo:
          Util.applyTransform(buffer, transform, k);
          k += 2;
          break;
        case DrawOPS.curveTo:
          Util.applyTransformToBezier(buffer, transform, k);
          k += 6;
          break;
      }
    }
  }
  fnArray.splice(iFirstSave, 4, OPS.constructPath);
  argsArray.splice(iFirstSave, 4, args);
  return iFirstSave + 1;
});
class NullOptimizer {
  constructor(queue) {
    this.queue = queue;
  }
  _optimize() {}
  push(fn, args) {
    this.queue.fnArray.push(fn);
    this.queue.argsArray.push(args);
    this._optimize();
  }
  flush() {}
  reset() {}
}
class QueueOptimizer extends NullOptimizer {
  constructor(queue) {
    super(queue);
    this.state = null;
    this.context = {
      iCurr: 0,
      fnArray: queue.fnArray,
      argsArray: queue.argsArray,
      isOffscreenCanvasSupported: OperatorList.isOffscreenCanvasSupported
    };
    this.match = null;
    this.lastProcessed = 0;
  }
  _optimize() {
    const fnArray = this.queue.fnArray;
    let i = this.lastProcessed,
      ii = fnArray.length;
    let state = this.state;
    let match = this.match;
    if (!state && !match && i + 1 === ii && !InitialState[fnArray[i]]) {
      this.lastProcessed = ii;
      return;
    }
    const context = this.context;
    while (i < ii) {
      if (match) {
        const iterate = (0, match.iterateFn)(context, i);
        if (iterate) {
          i++;
          continue;
        }
        i = (0, match.processFn)(context, i + 1);
        ii = fnArray.length;
        match = null;
        state = null;
        if (i >= ii) {
          break;
        }
      }
      state = (state || InitialState)[fnArray[i]];
      if (!state || Array.isArray(state)) {
        i++;
        continue;
      }
      context.iCurr = i;
      i++;
      if (state.checkFn && !(0, state.checkFn)(context)) {
        state = null;
        continue;
      }
      match = state;
      state = null;
    }
    this.state = state;
    this.match = match;
    this.lastProcessed = i;
  }
  flush() {
    while (this.match) {
      const length = this.queue.fnArray.length;
      this.lastProcessed = (0, this.match.processFn)(this.context, length);
      this.match = null;
      this.state = null;
      this._optimize();
    }
  }
  reset() {
    this.state = null;
    this.match = null;
    this.lastProcessed = 0;
  }
}
class OperatorList {
  static CHUNK_SIZE = 1000;
  static CHUNK_SIZE_ABOUT = this.CHUNK_SIZE - 5;
  static isOffscreenCanvasSupported = false;
  constructor(intent = 0, streamSink) {
    this._streamSink = streamSink;
    this.fnArray = [];
    this.argsArray = [];
    this.optimizer = streamSink && !(intent & RenderingIntentFlag.OPLIST) ? new QueueOptimizer(this) : new NullOptimizer(this);
    this.dependencies = new Set();
    this._totalLength = 0;
    this.weight = 0;
    this._resolved = streamSink ? null : Promise.resolve();
  }
  static setOptions({
    isOffscreenCanvasSupported
  }) {
    this.isOffscreenCanvasSupported = isOffscreenCanvasSupported;
  }
  get length() {
    return this.argsArray.length;
  }
  get ready() {
    return this._resolved || this._streamSink.ready;
  }
  get totalLength() {
    return this._totalLength + this.length;
  }
  addOp(fn, args) {
    this.optimizer.push(fn, args);
    this.weight++;
    if (this._streamSink) {
      if (this.weight >= OperatorList.CHUNK_SIZE) {
        this.flush();
      } else if (this.weight >= OperatorList.CHUNK_SIZE_ABOUT && (fn === OPS.restore || fn === OPS.endText)) {
        this.flush();
      }
    }
  }
  addImageOps(fn, args, optionalContent, hasMask = false) {
    if (hasMask) {
      this.addOp(OPS.save);
      this.addOp(OPS.setGState, [[["SMask", false]]]);
    }
    if (optionalContent !== undefined) {
      this.addOp(OPS.beginMarkedContentProps, ["OC", optionalContent]);
    }
    this.addOp(fn, args);
    if (optionalContent !== undefined) {
      this.addOp(OPS.endMarkedContent, []);
    }
    if (hasMask) {
      this.addOp(OPS.restore);
    }
  }
  addDependency(dependency) {
    if (this.dependencies.has(dependency)) {
      return;
    }
    this.dependencies.add(dependency);
    this.addOp(OPS.dependency, [dependency]);
  }
  addDependencies(dependencies) {
    for (const dependency of dependencies) {
      this.addDependency(dependency);
    }
  }
  addOpList(opList) {
    if (!(opList instanceof OperatorList)) {
      warn('addOpList - ignoring invalid "opList" parameter.');
      return;
    }
    for (const dependency of opList.dependencies) {
      this.dependencies.add(dependency);
    }
    for (let i = 0, ii = opList.length; i < ii; i++) {
      this.addOp(opList.fnArray[i], opList.argsArray[i]);
    }
  }
  getIR() {
    return {
      fnArray: this.fnArray,
      argsArray: this.argsArray,
      length: this.length
    };
  }
  get _transfers() {
    const transfers = [];
    const {
      fnArray,
      argsArray,
      length
    } = this;
    for (let i = 0; i < length; i++) {
      switch (fnArray[i]) {
        case OPS.paintInlineImageXObject:
        case OPS.paintInlineImageXObjectGroup:
        case OPS.paintImageMaskXObject:
          {
            const {
              bitmap,
              data
            } = argsArray[i][0];
            if (bitmap || data?.buffer) {
              transfers.push(bitmap || data.buffer);
            }
            break;
          }
        case OPS.constructPath:
          {
            const [, [data], minMax] = argsArray[i];
            if (data) {
              transfers.push(data.buffer, minMax.buffer);
            }
            break;
          }
        case OPS.paintFormXObjectBegin:
          const [matrix, bbox] = argsArray[i];
          if (matrix) {
            transfers.push(matrix.buffer);
          }
          if (bbox) {
            transfers.push(bbox.buffer);
          }
          break;
        case OPS.setTextMatrix:
          transfers.push(argsArray[i][0].buffer);
          break;
      }
    }
    return transfers;
  }
  flush(lastChunk = false, separateAnnots = null) {
    this.optimizer.flush();
    const length = this.length;
    this._totalLength += length;
    this._streamSink.enqueue({
      fnArray: this.fnArray,
      argsArray: this.argsArray,
      lastChunk,
      separateAnnots,
      length
    }, 1, this._transfers);
    this.dependencies.clear();
    this.fnArray.length = 0;
    this.argsArray.length = 0;
    this.weight = 0;
    this.optimizer.reset();
  }
}

;// ./src/core/binary_cmap.js

function hexToInt(a, size) {
  let n = 0;
  for (let i = 0; i <= size; i++) {
    n = n << 8 | a[i];
  }
  return n >>> 0;
}
function hexToStr(a, size) {
  if (size === 1) {
    return String.fromCharCode(a[0], a[1]);
  }
  if (size === 3) {
    return String.fromCharCode(a[0], a[1], a[2], a[3]);
  }
  return String.fromCharCode(...a.subarray(0, size + 1));
}
function addHex(a, b, size) {
  let c = 0;
  for (let i = size; i >= 0; i--) {
    c += a[i] + b[i];
    a[i] = c & 255;
    c >>= 8;
  }
}
function incHex(a, size) {
  let c = 1;
  for (let i = size; i >= 0 && c > 0; i--) {
    c += a[i];
    a[i] = c & 255;
    c >>= 8;
  }
}
const MAX_NUM_SIZE = 16;
const MAX_ENCODED_NUM_SIZE = 19;
class BinaryCMapStream {
  constructor(data) {
    this.buffer = data;
    this.pos = 0;
    this.end = data.length;
    this.tmpBuf = new Uint8Array(MAX_ENCODED_NUM_SIZE);
  }
  readByte() {
    if (this.pos >= this.end) {
      return -1;
    }
    return this.buffer[this.pos++];
  }
  readNumber() {
    let n = 0;
    let last;
    do {
      const b = this.readByte();
      if (b < 0) {
        throw new FormatError("unexpected EOF in bcmap");
      }
      last = !(b & 0x80);
      n = n << 7 | b & 0x7f;
    } while (!last);
    return n;
  }
  readSigned() {
    const n = this.readNumber();
    return n & 1 ? ~(n >>> 1) : n >>> 1;
  }
  readHex(num, size) {
    num.set(this.buffer.subarray(this.pos, this.pos + size + 1));
    this.pos += size + 1;
  }
  readHexNumber(num, size) {
    let last;
    const stack = this.tmpBuf;
    let sp = 0;
    do {
      const b = this.readByte();
      if (b < 0) {
        throw new FormatError("unexpected EOF in bcmap");
      }
      last = !(b & 0x80);
      stack[sp++] = b & 0x7f;
    } while (!last);
    let i = size,
      buffer = 0,
      bufferSize = 0;
    while (i >= 0) {
      while (bufferSize < 8 && stack.length > 0) {
        buffer |= stack[--sp] << bufferSize;
        bufferSize += 7;
      }
      num[i] = buffer & 255;
      i--;
      buffer >>= 8;
      bufferSize -= 8;
    }
  }
  readHexSigned(num, size) {
    this.readHexNumber(num, size);
    const sign = num[size] & 1 ? 255 : 0;
    let c = 0;
    for (let i = 0; i <= size; i++) {
      c = (c & 1) << 8 | num[i];
      num[i] = c >> 1 ^ sign;
    }
  }
  readString() {
    const len = this.readNumber(),
      buf = new Array(len);
    for (let i = 0; i < len; i++) {
      buf[i] = this.readNumber();
    }
    return String.fromCharCode(...buf);
  }
}
class BinaryCMapReader {
  async process(data, cMap, extend) {
    const stream = new BinaryCMapStream(data);
    const header = stream.readByte();
    cMap.vertical = !!(header & 1);
    let useCMap = null;
    const start = new Uint8Array(MAX_NUM_SIZE);
    const end = new Uint8Array(MAX_NUM_SIZE);
    const char = new Uint8Array(MAX_NUM_SIZE);
    const charCode = new Uint8Array(MAX_NUM_SIZE);
    const tmp = new Uint8Array(MAX_NUM_SIZE);
    let code;
    let b;
    while ((b = stream.readByte()) >= 0) {
      const type = b >> 5;
      if (type === 7) {
        switch (b & 0x1f) {
          case 0:
            stream.readString();
            break;
          case 1:
            useCMap = stream.readString();
            break;
        }
        continue;
      }
      const sequence = !!(b & 0x10);
      const dataSize = b & 15;
      if (dataSize + 1 > MAX_NUM_SIZE) {
        throw new Error("BinaryCMapReader.process: Invalid dataSize.");
      }
      const ucs2DataSize = 1;
      const subitemsCount = stream.readNumber();
      switch (type) {
        case 0:
          stream.readHex(start, dataSize);
          stream.readHexNumber(end, dataSize);
          addHex(end, start, dataSize);
          cMap.addCodespaceRange(dataSize + 1, hexToInt(start, dataSize), hexToInt(end, dataSize));
          for (let i = 1; i < subitemsCount; i++) {
            incHex(end, dataSize);
            stream.readHexNumber(start, dataSize);
            addHex(start, end, dataSize);
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            cMap.addCodespaceRange(dataSize + 1, hexToInt(start, dataSize), hexToInt(end, dataSize));
          }
          break;
        case 1:
          stream.readHex(start, dataSize);
          stream.readHexNumber(end, dataSize);
          addHex(end, start, dataSize);
          stream.readNumber();
          for (let i = 1; i < subitemsCount; i++) {
            incHex(end, dataSize);
            stream.readHexNumber(start, dataSize);
            addHex(start, end, dataSize);
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            stream.readNumber();
          }
          break;
        case 2:
          stream.readHex(char, dataSize);
          code = stream.readNumber();
          cMap.mapOne(hexToInt(char, dataSize), code);
          for (let i = 1; i < subitemsCount; i++) {
            incHex(char, dataSize);
            if (!sequence) {
              stream.readHexNumber(tmp, dataSize);
              addHex(char, tmp, dataSize);
            }
            code = stream.readSigned() + (code + 1);
            cMap.mapOne(hexToInt(char, dataSize), code);
          }
          break;
        case 3:
          stream.readHex(start, dataSize);
          stream.readHexNumber(end, dataSize);
          addHex(end, start, dataSize);
          code = stream.readNumber();
          cMap.mapCidRange(hexToInt(start, dataSize), hexToInt(end, dataSize), code);
          for (let i = 1; i < subitemsCount; i++) {
            incHex(end, dataSize);
            if (!sequence) {
              stream.readHexNumber(start, dataSize);
              addHex(start, end, dataSize);
            } else {
              start.set(end);
            }
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            code = stream.readNumber();
            cMap.mapCidRange(hexToInt(start, dataSize), hexToInt(end, dataSize), code);
          }
          break;
        case 4:
          stream.readHex(char, ucs2DataSize);
          stream.readHex(charCode, dataSize);
          cMap.mapOne(hexToInt(char, ucs2DataSize), hexToStr(charCode, dataSize));
          for (let i = 1; i < subitemsCount; i++) {
            incHex(char, ucs2DataSize);
            if (!sequence) {
              stream.readHexNumber(tmp, ucs2DataSize);
              addHex(char, tmp, ucs2DataSize);
            }
            incHex(charCode, dataSize);
            stream.readHexSigned(tmp, dataSize);
            addHex(charCode, tmp, dataSize);
            cMap.mapOne(hexToInt(char, ucs2DataSize), hexToStr(charCode, dataSize));
          }
          break;
        case 5:
          stream.readHex(start, ucs2DataSize);
          stream.readHexNumber(end, ucs2DataSize);
          addHex(end, start, ucs2DataSize);
          stream.readHex(charCode, dataSize);
          cMap.mapBfRange(hexToInt(start, ucs2DataSize), hexToInt(end, ucs2DataSize), hexToStr(charCode, dataSize));
          for (let i = 1; i < subitemsCount; i++) {
            incHex(end, ucs2DataSize);
            if (!sequence) {
              stream.readHexNumber(start, ucs2DataSize);
              addHex(start, end, ucs2DataSize);
            } else {
              start.set(end);
            }
            stream.readHexNumber(end, ucs2DataSize);
            addHex(end, start, ucs2DataSize);
            stream.readHex(charCode, dataSize);
            cMap.mapBfRange(hexToInt(start, ucs2DataSize), hexToInt(end, ucs2DataSize), hexToStr(charCode, dataSize));
          }
          break;
        default:
          throw new Error(`BinaryCMapReader.process - unknown type: ${type}`);
      }
    }
    if (useCMap) {
      return extend(useCMap);
    }
    return cMap;
  }
}

;// ./src/core/ascii_85_stream.js


class Ascii85Stream extends DecodeStream {
  constructor(str, maybeLength) {
    if (maybeLength) {
      maybeLength *= 0.8;
    }
    super(maybeLength);
    this.str = str;
    this.dict = str.dict;
    this.input = new Uint8Array(5);
  }
  readBlock() {
    const TILDA_CHAR = 0x7e;
    const Z_LOWER_CHAR = 0x7a;
    const EOF = -1;
    const str = this.str;
    let c = str.getByte();
    while (isWhiteSpace(c)) {
      c = str.getByte();
    }
    if (c === EOF || c === TILDA_CHAR) {
      this.eof = true;
      return;
    }
    const bufferLength = this.bufferLength;
    let buffer, i;
    if (c === Z_LOWER_CHAR) {
      buffer = this.ensureBuffer(bufferLength + 4);
      for (i = 0; i < 4; ++i) {
        buffer[bufferLength + i] = 0;
      }
      this.bufferLength += 4;
    } else {
      const input = this.input;
      input[0] = c;
      for (i = 1; i < 5; ++i) {
        c = str.getByte();
        while (isWhiteSpace(c)) {
          c = str.getByte();
        }
        input[i] = c;
        if (c === EOF || c === TILDA_CHAR) {
          break;
        }
      }
      buffer = this.ensureBuffer(bufferLength + i - 1);
      this.bufferLength += i - 1;
      if (i < 5) {
        for (; i < 5; ++i) {
          input[i] = 0x21 + 84;
        }
        this.eof = true;
      }
      let t = 0;
      for (i = 0; i < 5; ++i) {
        t = t * 85 + (input[i] - 0x21);
      }
      for (i = 3; i >= 0; --i) {
        buffer[bufferLength + i] = t & 0xff;
        t >>= 8;
      }
    }
  }
}

;// ./src/core/ascii_hex_stream.js

class AsciiHexStream extends DecodeStream {
  constructor(str, maybeLength) {
    if (maybeLength) {
      maybeLength *= 0.5;
    }
    super(maybeLength);
    this.str = str;
    this.dict = str.dict;
    this.firstDigit = -1;
  }
  readBlock() {
    const UPSTREAM_BLOCK_SIZE = 8000;
    const bytes = this.str.getBytes(UPSTREAM_BLOCK_SIZE);
    if (!bytes.length) {
      this.eof = true;
      return;
    }
    const maxDecodeLength = bytes.length + 1 >> 1;
    const buffer = this.ensureBuffer(this.bufferLength + maxDecodeLength);
    let bufferLength = this.bufferLength;
    let firstDigit = this.firstDigit;
    for (const ch of bytes) {
      let digit;
      if (ch >= 0x30 && ch <= 0x39) {
        digit = ch & 0x0f;
      } else if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
        digit = (ch & 0x0f) + 9;
      } else if (ch === 0x3e) {
        this.eof = true;
        break;
      } else {
        continue;
      }
      if (firstDigit < 0) {
        firstDigit = digit;
      } else {
        buffer[bufferLength++] = firstDigit << 4 | digit;
        firstDigit = -1;
      }
    }
    if (firstDigit >= 0 && this.eof) {
      buffer[bufferLength++] = firstDigit << 4;
      firstDigit = -1;
    }
    this.firstDigit = firstDigit;
    this.bufferLength = bufferLength;
  }
}

;// ./src/core/ccitt.js

const ccittEOL = -2;
const ccittEOF = -1;
const twoDimPass = 0;
const twoDimHoriz = 1;
const twoDimVert0 = 2;
const twoDimVertR1 = 3;
const twoDimVertL1 = 4;
const twoDimVertR2 = 5;
const twoDimVertL2 = 6;
const twoDimVertR3 = 7;
const twoDimVertL3 = 8;
const twoDimTable = [[-1, -1], [-1, -1], [7, twoDimVertL3], [7, twoDimVertR3], [6, twoDimVertL2], [6, twoDimVertL2], [6, twoDimVertR2], [6, twoDimVertR2], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0]];
const whiteTable1 = [[-1, -1], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [12, 1984], [12, 2048], [12, 2112], [12, 2176], [12, 2240], [12, 2304], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [12, 2368], [12, 2432], [12, 2496], [12, 2560]];
const whiteTable2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 29], [8, 29], [8, 30], [8, 30], [8, 45], [8, 45], [8, 46], [8, 46], [7, 22], [7, 22], [7, 22], [7, 22], [7, 23], [7, 23], [7, 23], [7, 23], [8, 47], [8, 47], [8, 48], [8, 48], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [7, 20], [7, 20], [7, 20], [7, 20], [8, 33], [8, 33], [8, 34], [8, 34], [8, 35], [8, 35], [8, 36], [8, 36], [8, 37], [8, 37], [8, 38], [8, 38], [7, 19], [7, 19], [7, 19], [7, 19], [8, 31], [8, 31], [8, 32], [8, 32], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [8, 53], [8, 53], [8, 54], [8, 54], [7, 26], [7, 26], [7, 26], [7, 26], [8, 39], [8, 39], [8, 40], [8, 40], [8, 41], [8, 41], [8, 42], [8, 42], [8, 43], [8, 43], [8, 44], [8, 44], [7, 21], [7, 21], [7, 21], [7, 21], [7, 28], [7, 28], [7, 28], [7, 28], [8, 61], [8, 61], [8, 62], [8, 62], [8, 63], [8, 63], [8, 0], [8, 0], [8, 320], [8, 320], [8, 384], [8, 384], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [7, 27], [7, 27], [7, 27], [7, 27], [8, 59], [8, 59], [8, 60], [8, 60], [9, 1472], [9, 1536], [9, 1600], [9, 1728], [7, 18], [7, 18], [7, 18], [7, 18], [7, 24], [7, 24], [7, 24], [7, 24], [8, 49], [8, 49], [8, 50], [8, 50], [8, 51], [8, 51], [8, 52], [8, 52], [7, 25], [7, 25], [7, 25], [7, 25], [8, 55], [8, 55], [8, 56], [8, 56], [8, 57], [8, 57], [8, 58], [8, 58], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [8, 448], [8, 448], [8, 512], [8, 512], [9, 704], [9, 768], [8, 640], [8, 640], [8, 576], [8, 576], [9, 832], [9, 896], [9, 960], [9, 1024], [9, 1088], [9, 1152], [9, 1216], [9, 1280], [9, 1344], [9, 1408], [7, 256], [7, 256], [7, 256], [7, 256], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7]];
const blackTable1 = [[-1, -1], [-1, -1], [12, ccittEOL], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [11, 1792], [11, 1792], [12, 1984], [12, 1984], [12, 2048], [12, 2048], [12, 2112], [12, 2112], [12, 2176], [12, 2176], [12, 2240], [12, 2240], [12, 2304], [12, 2304], [11, 1856], [11, 1856], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [11, 1920], [11, 1920], [12, 2368], [12, 2368], [12, 2432], [12, 2432], [12, 2496], [12, 2496], [12, 2560], [12, 2560], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [12, 52], [12, 52], [13, 640], [13, 704], [13, 768], [13, 832], [12, 55], [12, 55], [12, 56], [12, 56], [13, 1280], [13, 1344], [13, 1408], [13, 1472], [12, 59], [12, 59], [12, 60], [12, 60], [13, 1536], [13, 1600], [11, 24], [11, 24], [11, 24], [11, 24], [11, 25], [11, 25], [11, 25], [11, 25], [13, 1664], [13, 1728], [12, 320], [12, 320], [12, 384], [12, 384], [12, 448], [12, 448], [13, 512], [13, 576], [12, 53], [12, 53], [12, 54], [12, 54], [13, 896], [13, 960], [13, 1024], [13, 1088], [13, 1152], [13, 1216], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64]];
const blackTable2 = [[8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [11, 23], [11, 23], [12, 50], [12, 51], [12, 44], [12, 45], [12, 46], [12, 47], [12, 57], [12, 58], [12, 61], [12, 256], [10, 16], [10, 16], [10, 16], [10, 16], [10, 17], [10, 17], [10, 17], [10, 17], [12, 48], [12, 49], [12, 62], [12, 63], [12, 30], [12, 31], [12, 32], [12, 33], [12, 40], [12, 41], [11, 22], [11, 22], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [12, 128], [12, 192], [12, 26], [12, 27], [12, 28], [12, 29], [11, 19], [11, 19], [11, 20], [11, 20], [12, 34], [12, 35], [12, 36], [12, 37], [12, 38], [12, 39], [11, 21], [11, 21], [12, 42], [12, 43], [10, 0], [10, 0], [10, 0], [10, 0], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12]];
const blackTable3 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [6, 9], [6, 8], [5, 7], [5, 7], [4, 6], [4, 6], [4, 6], [4, 6], [4, 5], [4, 5], [4, 5], [4, 5], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
class CCITTFaxDecoder {
  constructor(source, options = {}) {
    if (typeof source?.next !== "function") {
      throw new Error('CCITTFaxDecoder - invalid "source" parameter.');
    }
    this.source = source;
    this.eof = false;
    this.encoding = options.K || 0;
    this.eoline = options.EndOfLine || false;
    this.byteAlign = options.EncodedByteAlign || false;
    this.columns = options.Columns || 1728;
    this.rows = options.Rows || 0;
    this.eoblock = options.EndOfBlock ?? true;
    this.black = options.BlackIs1 || false;
    this.codingLine = new Uint32Array(this.columns + 1);
    this.refLine = new Uint32Array(this.columns + 2);
    this.codingLine[0] = this.columns;
    this.codingPos = 0;
    this.row = 0;
    this.nextLine2D = this.encoding < 0;
    this.inputBits = 0;
    this.inputBuf = 0;
    this.outputBits = 0;
    this.rowsDone = false;
    let code1;
    while ((code1 = this._lookBits(12)) === 0) {
      this._eatBits(1);
    }
    if (code1 === 1) {
      this._eatBits(12);
    }
    if (this.encoding > 0) {
      this.nextLine2D = !this._lookBits(1);
      this._eatBits(1);
    }
  }
  readNextChar() {
    if (this.eof) {
      return -1;
    }
    const refLine = this.refLine;
    const codingLine = this.codingLine;
    const columns = this.columns;
    let refPos, blackPixels, bits, i;
    if (this.outputBits === 0) {
      if (this.rowsDone) {
        this.eof = true;
      }
      if (this.eof) {
        return -1;
      }
      this.err = false;
      let code1, code2, code3;
      if (this.nextLine2D) {
        for (i = 0; codingLine[i] < columns; ++i) {
          refLine[i] = codingLine[i];
        }
        refLine[i++] = columns;
        refLine[i] = columns;
        codingLine[0] = 0;
        this.codingPos = 0;
        refPos = 0;
        blackPixels = 0;
        while (codingLine[this.codingPos] < columns) {
          code1 = this._getTwoDimCode();
          switch (code1) {
            case twoDimPass:
              this._addPixels(refLine[refPos + 1], blackPixels);
              if (refLine[refPos + 1] < columns) {
                refPos += 2;
              }
              break;
            case twoDimHoriz:
              code1 = code2 = 0;
              if (blackPixels) {
                do {
                  code1 += code3 = this._getBlackCode();
                } while (code3 >= 64);
                do {
                  code2 += code3 = this._getWhiteCode();
                } while (code3 >= 64);
              } else {
                do {
                  code1 += code3 = this._getWhiteCode();
                } while (code3 >= 64);
                do {
                  code2 += code3 = this._getBlackCode();
                } while (code3 >= 64);
              }
              this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
              if (codingLine[this.codingPos] < columns) {
                this._addPixels(codingLine[this.codingPos] + code2, blackPixels ^ 1);
              }
              while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                refPos += 2;
              }
              break;
            case twoDimVertR3:
              this._addPixels(refLine[refPos] + 3, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertR2:
              this._addPixels(refLine[refPos] + 2, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertR1:
              this._addPixels(refLine[refPos] + 1, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVert0:
              this._addPixels(refLine[refPos], blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL3:
              this._addPixelsNeg(refLine[refPos] - 3, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL2:
              this._addPixelsNeg(refLine[refPos] - 2, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL1:
              this._addPixelsNeg(refLine[refPos] - 1, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case ccittEOF:
              this._addPixels(columns, 0);
              this.eof = true;
              break;
            default:
              info("bad 2d code");
              this._addPixels(columns, 0);
              this.err = true;
          }
        }
      } else {
        codingLine[0] = 0;
        this.codingPos = 0;
        blackPixels = 0;
        while (codingLine[this.codingPos] < columns) {
          code1 = 0;
          if (blackPixels) {
            do {
              code1 += code3 = this._getBlackCode();
            } while (code3 >= 64);
          } else {
            do {
              code1 += code3 = this._getWhiteCode();
            } while (code3 >= 64);
          }
          this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
          blackPixels ^= 1;
        }
      }
      let gotEOL = false;
      if (this.byteAlign) {
        this.inputBits &= ~7;
      }
      if (!this.eoblock && this.row === this.rows - 1) {
        this.rowsDone = true;
      } else {
        code1 = this._lookBits(12);
        if (this.eoline) {
          while (code1 !== ccittEOF && code1 !== 1) {
            this._eatBits(1);
            code1 = this._lookBits(12);
          }
        } else {
          while (code1 === 0) {
            this._eatBits(1);
            code1 = this._lookBits(12);
          }
        }
        if (code1 === 1) {
          this._eatBits(12);
          gotEOL = true;
        } else if (code1 === ccittEOF) {
          this.eof = true;
        }
      }
      if (!this.eof && this.encoding > 0 && !this.rowsDone) {
        this.nextLine2D = !this._lookBits(1);
        this._eatBits(1);
      }
      if (this.eoblock && gotEOL && this.byteAlign) {
        code1 = this._lookBits(12);
        if (code1 === 1) {
          this._eatBits(12);
          if (this.encoding > 0) {
            this._lookBits(1);
            this._eatBits(1);
          }
          if (this.encoding >= 0) {
            for (i = 0; i < 4; ++i) {
              code1 = this._lookBits(12);
              if (code1 !== 1) {
                info("bad rtc code: " + code1);
              }
              this._eatBits(12);
              if (this.encoding > 0) {
                this._lookBits(1);
                this._eatBits(1);
              }
            }
          }
          this.eof = true;
        }
      } else if (this.err && this.eoline) {
        while (true) {
          code1 = this._lookBits(13);
          if (code1 === ccittEOF) {
            this.eof = true;
            return -1;
          }
          if (code1 >> 1 === 1) {
            break;
          }
          this._eatBits(1);
        }
        this._eatBits(12);
        if (this.encoding > 0) {
          this._eatBits(1);
          this.nextLine2D = !(code1 & 1);
        }
      }
      this.outputBits = codingLine[0] > 0 ? codingLine[this.codingPos = 0] : codingLine[this.codingPos = 1];
      this.row++;
    }
    let c;
    if (this.outputBits >= 8) {
      c = this.codingPos & 1 ? 0 : 0xff;
      this.outputBits -= 8;
      if (this.outputBits === 0 && codingLine[this.codingPos] < columns) {
        this.codingPos++;
        this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
      }
    } else {
      bits = 8;
      c = 0;
      do {
        if (typeof this.outputBits !== "number") {
          throw new FormatError('Invalid /CCITTFaxDecode data, "outputBits" must be a number.');
        }
        if (this.outputBits > bits) {
          c <<= bits;
          if (!(this.codingPos & 1)) {
            c |= 0xff >> 8 - bits;
          }
          this.outputBits -= bits;
          bits = 0;
        } else {
          c <<= this.outputBits;
          if (!(this.codingPos & 1)) {
            c |= 0xff >> 8 - this.outputBits;
          }
          bits -= this.outputBits;
          this.outputBits = 0;
          if (codingLine[this.codingPos] < columns) {
            this.codingPos++;
            this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
          } else if (bits > 0) {
            c <<= bits;
            bits = 0;
          }
        }
      } while (bits);
    }
    if (this.black) {
      c ^= 0xff;
    }
    return c;
  }
  _addPixels(a1, blackPixels) {
    const codingLine = this.codingLine;
    let codingPos = this.codingPos;
    if (a1 > codingLine[codingPos]) {
      if (a1 > this.columns) {
        info("row is wrong length");
        this.err = true;
        a1 = this.columns;
      }
      if (codingPos & 1 ^ blackPixels) {
        ++codingPos;
      }
      codingLine[codingPos] = a1;
    }
    this.codingPos = codingPos;
  }
  _addPixelsNeg(a1, blackPixels) {
    const codingLine = this.codingLine;
    let codingPos = this.codingPos;
    if (a1 > codingLine[codingPos]) {
      if (a1 > this.columns) {
        info("row is wrong length");
        this.err = true;
        a1 = this.columns;
      }
      if (codingPos & 1 ^ blackPixels) {
        ++codingPos;
      }
      codingLine[codingPos] = a1;
    } else if (a1 < codingLine[codingPos]) {
      if (a1 < 0) {
        info("invalid code");
        this.err = true;
        a1 = 0;
      }
      while (codingPos > 0 && a1 < codingLine[codingPos - 1]) {
        --codingPos;
      }
      codingLine[codingPos] = a1;
    }
    this.codingPos = codingPos;
  }
  _findTableCode(start, end, table, limit) {
    const limitValue = limit || 0;
    for (let i = start; i <= end; ++i) {
      let code = this._lookBits(i);
      if (code === ccittEOF) {
        return [true, 1, false];
      }
      if (i < end) {
        code <<= end - i;
      }
      if (!limitValue || code >= limitValue) {
        const p = table[code - limitValue];
        if (p[0] === i) {
          this._eatBits(i);
          return [true, p[1], true];
        }
      }
    }
    return [false, 0, false];
  }
  _getTwoDimCode() {
    let code = 0;
    let p;
    if (this.eoblock) {
      code = this._lookBits(7);
      p = twoDimTable[code];
      if (p?.[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      const result = this._findTableCode(1, 7, twoDimTable);
      if (result[0] && result[2]) {
        return result[1];
      }
    }
    info("Bad two dim code");
    return ccittEOF;
  }
  _getWhiteCode() {
    let code = 0;
    let p;
    if (this.eoblock) {
      code = this._lookBits(12);
      if (code === ccittEOF) {
        return 1;
      }
      p = code >> 5 === 0 ? whiteTable1[code] : whiteTable2[code >> 3];
      if (p[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      let result = this._findTableCode(1, 9, whiteTable2);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(11, 12, whiteTable1);
      if (result[0]) {
        return result[1];
      }
    }
    info("bad white code");
    this._eatBits(1);
    return 1;
  }
  _getBlackCode() {
    let code, p;
    if (this.eoblock) {
      code = this._lookBits(13);
      if (code === ccittEOF) {
        return 1;
      }
      if (code >> 7 === 0) {
        p = blackTable1[code];
      } else if (code >> 9 === 0 && code >> 7 !== 0) {
        p = blackTable2[(code >> 1) - 64];
      } else {
        p = blackTable3[code >> 7];
      }
      if (p[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      let result = this._findTableCode(2, 6, blackTable3);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(7, 12, blackTable2, 64);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(10, 13, blackTable1);
      if (result[0]) {
        return result[1];
      }
    }
    info("bad black code");
    this._eatBits(1);
    return 1;
  }
  _lookBits(n) {
    let c;
    while (this.inputBits < n) {
      if ((c = this.source.next()) === -1) {
        if (this.inputBits === 0) {
          return ccittEOF;
        }
        return this.inputBuf << n - this.inputBits & 0xffff >> 16 - n;
      }
      this.inputBuf = this.inputBuf << 8 | c;
      this.inputBits += 8;
    }
    return this.inputBuf >> this.inputBits - n & 0xffff >> 16 - n;
  }
  _eatBits(n) {
    if ((this.inputBits -= n) < 0) {
      this.inputBits = 0;
    }
  }
}

;// ./src/core/ccitt_stream.js



class CCITTFaxStream extends DecodeStream {
  constructor(str, maybeLength, params) {
    super(maybeLength);
    this.str = str;
    this.dict = str.dict;
    if (!(params instanceof Dict)) {
      params = Dict.empty;
    }
    const source = {
      next() {
        return str.getByte();
      }
    };
    this.ccittFaxDecoder = new CCITTFaxDecoder(source, {
      K: params.get("K"),
      EndOfLine: params.get("EndOfLine"),
      EncodedByteAlign: params.get("EncodedByteAlign"),
      Columns: params.get("Columns"),
      Rows: params.get("Rows"),
      EndOfBlock: params.get("EndOfBlock"),
      BlackIs1: params.get("BlackIs1")
    });
  }
  readBlock() {
    while (!this.eof) {
      const c = this.ccittFaxDecoder.readNextChar();
      if (c === -1) {
        this.eof = true;
        return;
      }
      this.ensureBuffer(this.bufferLength + 1);
      this.buffer[this.bufferLength++] = c;
    }
  }
}

;// ./src/core/flate_stream.js



const codeLenCodeMap = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const lengthDecode = new Int32Array([0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a, 0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f, 0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073, 0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102]);
const distDecode = new Int32Array([0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d, 0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1, 0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01, 0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001]);
const fixedLitCodeTab = [new Int32Array([0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0, 0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0, 0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0, 0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8, 0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8, 0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8, 0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4, 0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4, 0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4, 0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc, 0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec, 0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc, 0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2, 0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2, 0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2, 0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca, 0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea, 0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da, 0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6, 0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6, 0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6, 0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce, 0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee, 0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de, 0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe, 0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1, 0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1, 0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1, 0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9, 0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9, 0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9, 0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5, 0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5, 0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5, 0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd, 0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed, 0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd, 0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3, 0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3, 0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3, 0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb, 0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb, 0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db, 0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7, 0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7, 0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7, 0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf, 0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef, 0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df, 0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff]), 9];
const fixedDistCodeTab = [new Int32Array([0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c, 0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000, 0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d, 0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000]), 5];
class FlateStream extends DecodeStream {
  constructor(str, maybeLength) {
    super(maybeLength);
    this.str = str;
    this.dict = str.dict;
    const cmf = str.getByte();
    const flg = str.getByte();
    if (cmf === -1 || flg === -1) {
      throw new FormatError(`Invalid header in flate stream: ${cmf}, ${flg}`);
    }
    if ((cmf & 0x0f) !== 0x08) {
      throw new FormatError(`Unknown compression method in flate stream: ${cmf}, ${flg}`);
    }
    if (((cmf << 8) + flg) % 31 !== 0) {
      throw new FormatError(`Bad FCHECK in flate stream: ${cmf}, ${flg}`);
    }
    if (flg & 0x20) {
      throw new FormatError(`FDICT bit set in flate stream: ${cmf}, ${flg}`);
    }
    this.codeSize = 0;
    this.codeBuf = 0;
  }
  async getImageData(length, _decoderOptions) {
    const data = await this.asyncGetBytes();
    if (!data) {
      return this.getBytes(length);
    }
    if (data.length <= length) {
      return data;
    }
    return data.subarray(0, length);
  }
  async asyncGetBytes() {
    this.str.reset();
    const bytes = this.str.getBytes();
    try {
      const {
        readable,
        writable
      } = new DecompressionStream("deflate");
      const writer = writable.getWriter();
      await writer.ready;
      writer.write(bytes).then(async () => {
        await writer.ready;
        await writer.close();
      }).catch(() => {});
      const chunks = [];
      let totalLength = 0;
      for await (const chunk of readable) {
        chunks.push(chunk);
        totalLength += chunk.byteLength;
      }
      const data = new Uint8Array(totalLength);
      let offset = 0;
      for (const chunk of chunks) {
        data.set(chunk, offset);
        offset += chunk.byteLength;
      }
      return data;
    } catch {
      this.str = new Stream(bytes, 2, bytes.length, this.str.dict);
      this.reset();
      return null;
    }
  }
  get isAsync() {
    return true;
  }
  getBits(bits) {
    const str = this.str;
    let codeSize = this.codeSize;
    let codeBuf = this.codeBuf;
    let b;
    while (codeSize < bits) {
      if ((b = str.getByte()) === -1) {
        throw new FormatError("Bad encoding in flate stream");
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & (1 << bits) - 1;
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    return b;
  }
  getCode(table) {
    const str = this.str;
    const codes = table[0];
    const maxLen = table[1];
    let codeSize = this.codeSize;
    let codeBuf = this.codeBuf;
    let b;
    while (codeSize < maxLen) {
      if ((b = str.getByte()) === -1) {
        break;
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    const code = codes[codeBuf & (1 << maxLen) - 1];
    const codeLen = code >> 16;
    const codeVal = code & 0xffff;
    if (codeLen < 1 || codeSize < codeLen) {
      throw new FormatError("Bad encoding in flate stream");
    }
    this.codeBuf = codeBuf >> codeLen;
    this.codeSize = codeSize - codeLen;
    return codeVal;
  }
  generateHuffmanTable(lengths) {
    const n = lengths.length;
    let maxLen = 0;
    let i;
    for (i = 0; i < n; ++i) {
      if (lengths[i] > maxLen) {
        maxLen = lengths[i];
      }
    }
    const size = 1 << maxLen;
    const codes = new Int32Array(size);
    for (let len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1) {
      for (let val = 0; val < n; ++val) {
        if (lengths[val] === len) {
          let code2 = 0;
          let t = code;
          for (i = 0; i < len; ++i) {
            code2 = code2 << 1 | t & 1;
            t >>= 1;
          }
          for (i = code2; i < size; i += skip) {
            codes[i] = len << 16 | val;
          }
          ++code;
        }
      }
    }
    return [codes, maxLen];
  }
  #endsStreamOnError(err) {
    info(err);
    this.eof = true;
  }
  readBlock() {
    let buffer, hdr, len;
    const str = this.str;
    try {
      hdr = this.getBits(3);
    } catch (ex) {
      this.#endsStreamOnError(ex.message);
      return;
    }
    if (hdr & 1) {
      this.eof = true;
    }
    hdr >>= 1;
    if (hdr === 0) {
      let b;
      if ((b = str.getByte()) === -1) {
        this.#endsStreamOnError("Bad block header in flate stream");
        return;
      }
      let blockLen = b;
      if ((b = str.getByte()) === -1) {
        this.#endsStreamOnError("Bad block header in flate stream");
        return;
      }
      blockLen |= b << 8;
      if ((b = str.getByte()) === -1) {
        this.#endsStreamOnError("Bad block header in flate stream");
        return;
      }
      let check = b;
      if ((b = str.getByte()) === -1) {
        this.#endsStreamOnError("Bad block header in flate stream");
        return;
      }
      check |= b << 8;
      if (check !== (~blockLen & 0xffff) && (blockLen !== 0 || check !== 0)) {
        throw new FormatError("Bad uncompressed block length in flate stream");
      }
      this.codeBuf = 0;
      this.codeSize = 0;
      const bufferLength = this.bufferLength,
        end = bufferLength + blockLen;
      buffer = this.ensureBuffer(end);
      this.bufferLength = end;
      if (blockLen === 0) {
        if (str.peekByte() === -1) {
          this.eof = true;
        }
      } else {
        const block = str.getBytes(blockLen);
        buffer.set(block, bufferLength);
        if (block.length < blockLen) {
          this.eof = true;
        }
      }
      return;
    }
    let litCodeTable;
    let distCodeTable;
    if (hdr === 1) {
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr === 2) {
      const numLitCodes = this.getBits(5) + 257;
      const numDistCodes = this.getBits(5) + 1;
      const numCodeLenCodes = this.getBits(4) + 4;
      const codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
      let i;
      for (i = 0; i < numCodeLenCodes; ++i) {
        codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3);
      }
      const codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
      len = 0;
      i = 0;
      const codes = numLitCodes + numDistCodes;
      const codeLengths = new Uint8Array(codes);
      let bitsLength, bitsOffset, what;
      while (i < codes) {
        const code = this.getCode(codeLenCodeTab);
        if (code === 16) {
          bitsLength = 2;
          bitsOffset = 3;
          what = len;
        } else if (code === 17) {
          bitsLength = 3;
          bitsOffset = 3;
          what = len = 0;
        } else if (code === 18) {
          bitsLength = 7;
          bitsOffset = 11;
          what = len = 0;
        } else {
          codeLengths[i++] = len = code;
          continue;
        }
        let repeatLength = this.getBits(bitsLength) + bitsOffset;
        while (repeatLength-- > 0) {
          codeLengths[i++] = what;
        }
      }
      litCodeTable = this.generateHuffmanTable(codeLengths.subarray(0, numLitCodes));
      distCodeTable = this.generateHuffmanTable(codeLengths.subarray(numLitCodes, codes));
    } else {
      throw new FormatError("Unknown block type in flate stream");
    }
    buffer = this.buffer;
    let limit = buffer ? buffer.length : 0;
    let pos = this.bufferLength;
    while (true) {
      let code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 === 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      let code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      const dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (let k = 0; k < len; ++k, ++pos) {
        buffer[pos] = buffer[pos - dist];
      }
    }
  }
}

;// ./src/core/arithmetic_decoder.js
const QeTable = [{
  qe: 0x5601,
  nmps: 1,
  nlps: 1,
  switchFlag: 1
}, {
  qe: 0x3401,
  nmps: 2,
  nlps: 6,
  switchFlag: 0
}, {
  qe: 0x1801,
  nmps: 3,
  nlps: 9,
  switchFlag: 0
}, {
  qe: 0x0ac1,
  nmps: 4,
  nlps: 12,
  switchFlag: 0
}, {
  qe: 0x0521,
  nmps: 5,
  nlps: 29,
  switchFlag: 0
}, {
  qe: 0x0221,
  nmps: 38,
  nlps: 33,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 7,
  nlps: 6,
  switchFlag: 1
}, {
  qe: 0x5401,
  nmps: 8,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x4801,
  nmps: 9,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x3801,
  nmps: 10,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x3001,
  nmps: 11,
  nlps: 17,
  switchFlag: 0
}, {
  qe: 0x2401,
  nmps: 12,
  nlps: 18,
  switchFlag: 0
}, {
  qe: 0x1c01,
  nmps: 13,
  nlps: 20,
  switchFlag: 0
}, {
  qe: 0x1601,
  nmps: 29,
  nlps: 21,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 15,
  nlps: 14,
  switchFlag: 1
}, {
  qe: 0x5401,
  nmps: 16,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x5101,
  nmps: 17,
  nlps: 15,
  switchFlag: 0
}, {
  qe: 0x4801,
  nmps: 18,
  nlps: 16,
  switchFlag: 0
}, {
  qe: 0x3801,
  nmps: 19,
  nlps: 17,
  switchFlag: 0
}, {
  qe: 0x3401,
  nmps: 20,
  nlps: 18,
  switchFlag: 0
}, {
  qe: 0x3001,
  nmps: 21,
  nlps: 19,
  switchFlag: 0
}, {
  qe: 0x2801,
  nmps: 22,
  nlps: 19,
  switchFlag: 0
}, {
  qe: 0x2401,
  nmps: 23,
  nlps: 20,
  switchFlag: 0
}, {
  qe: 0x2201,
  nmps: 24,
  nlps: 21,
  switchFlag: 0
}, {
  qe: 0x1c01,
  nmps: 25,
  nlps: 22,
  switchFlag: 0
}, {
  qe: 0x1801,
  nmps: 26,
  nlps: 23,
  switchFlag: 0
}, {
  qe: 0x1601,
  nmps: 27,
  nlps: 24,
  switchFlag: 0
}, {
  qe: 0x1401,
  nmps: 28,
  nlps: 25,
  switchFlag: 0
}, {
  qe: 0x1201,
  nmps: 29,
  nlps: 26,
  switchFlag: 0
}, {
  qe: 0x1101,
  nmps: 30,
  nlps: 27,
  switchFlag: 0
}, {
  qe: 0x0ac1,
  nmps: 31,
  nlps: 28,
  switchFlag: 0
}, {
  qe: 0x09c1,
  nmps: 32,
  nlps: 29,
  switchFlag: 0
}, {
  qe: 0x08a1,
  nmps: 33,
  nlps: 30,
  switchFlag: 0
}, {
  qe: 0x0521,
  nmps: 34,
  nlps: 31,
  switchFlag: 0
}, {
  qe: 0x0441,
  nmps: 35,
  nlps: 32,
  switchFlag: 0
}, {
  qe: 0x02a1,
  nmps: 36,
  nlps: 33,
  switchFlag: 0
}, {
  qe: 0x0221,
  nmps: 37,
  nlps: 34,
  switchFlag: 0
}, {
  qe: 0x0141,
  nmps: 38,
  nlps: 35,
  switchFlag: 0
}, {
  qe: 0x0111,
  nmps: 39,
  nlps: 36,
  switchFlag: 0
}, {
  qe: 0x0085,
  nmps: 40,
  nlps: 37,
  switchFlag: 0
}, {
  qe: 0x0049,
  nmps: 41,
  nlps: 38,
  switchFlag: 0
}, {
  qe: 0x0025,
  nmps: 42,
  nlps: 39,
  switchFlag: 0
}, {
  qe: 0x0015,
  nmps: 43,
  nlps: 40,
  switchFlag: 0
}, {
  qe: 0x0009,
  nmps: 44,
  nlps: 41,
  switchFlag: 0
}, {
  qe: 0x0005,
  nmps: 45,
  nlps: 42,
  switchFlag: 0
}, {
  qe: 0x0001,
  nmps: 45,
  nlps: 43,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 46,
  nlps: 46,
  switchFlag: 0
}];
class ArithmeticDecoder {
  constructor(data, start, end) {
    this.data = data;
    this.bp = start;
    this.dataEnd = end;
    this.chigh = data[start];
    this.clow = 0;
    this.byteIn();
    this.chigh = this.chigh << 7 & 0xffff | this.clow >> 9 & 0x7f;
    this.clow = this.clow << 7 & 0xffff;
    this.ct -= 7;
    this.a = 0x8000;
  }
  byteIn() {
    const data = this.data;
    let bp = this.bp;
    if (data[bp] === 0xff) {
      if (data[bp + 1] > 0x8f) {
        this.clow += 0xff00;
        this.ct = 8;
      } else {
        bp++;
        this.clow += data[bp] << 9;
        this.ct = 7;
        this.bp = bp;
      }
    } else {
      bp++;
      this.clow += bp < this.dataEnd ? data[bp] << 8 : 0xff00;
      this.ct = 8;
      this.bp = bp;
    }
    if (this.clow > 0xffff) {
      this.chigh += this.clow >> 16;
      this.clow &= 0xffff;
    }
  }
  readBit(contexts, pos) {
    let cx_index = contexts[pos] >> 1,
      cx_mps = contexts[pos] & 1;
    const qeTableIcx = QeTable[cx_index];
    const qeIcx = qeTableIcx.qe;
    let d;
    let a = this.a - qeIcx;
    if (this.chigh < qeIcx) {
      if (a < qeIcx) {
        a = qeIcx;
        d = cx_mps;
        cx_index = qeTableIcx.nmps;
      } else {
        a = qeIcx;
        d = 1 ^ cx_mps;
        if (qeTableIcx.switchFlag === 1) {
          cx_mps = d;
        }
        cx_index = qeTableIcx.nlps;
      }
    } else {
      this.chigh -= qeIcx;
      if ((a & 0x8000) !== 0) {
        this.a = a;
        return cx_mps;
      }
      if (a < qeIcx) {
        d = 1 ^ cx_mps;
        if (qeTableIcx.switchFlag === 1) {
          cx_mps = d;
        }
        cx_index = qeTableIcx.nlps;
      } else {
        d = cx_mps;
        cx_index = qeTableIcx.nmps;
      }
    }
    do {
      if (this.ct === 0) {
        this.byteIn();
      }
      a <<= 1;
      this.chigh = this.chigh << 1 & 0xffff | this.clow >> 15 & 1;
      this.clow = this.clow << 1 & 0xffff;
      this.ct--;
    } while ((a & 0x8000) === 0);
    this.a = a;
    contexts[pos] = cx_index << 1 | cx_mps;
    return d;
  }
}

;// ./src/core/jbig2.js




class Jbig2Error extends BaseException {
  constructor(msg) {
    super(msg, "Jbig2Error");
  }
}
class ContextCache {
  getContexts(id) {
    if (id in this) {
      return this[id];
    }
    return this[id] = new Int8Array(1 << 16);
  }
}
class DecodingContext {
  constructor(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
  }
  get decoder() {
    const decoder = new ArithmeticDecoder(this.data, this.start, this.end);
    return shadow(this, "decoder", decoder);
  }
  get contextCache() {
    const cache = new ContextCache();
    return shadow(this, "contextCache", cache);
  }
}
function decodeInteger(contextCache, procedure, decoder) {
  const contexts = contextCache.getContexts(procedure);
  let prev = 1;
  function readBits(length) {
    let v = 0;
    for (let i = 0; i < length; i++) {
      const bit = decoder.readBit(contexts, prev);
      prev = prev < 256 ? prev << 1 | bit : (prev << 1 | bit) & 511 | 256;
      v = v << 1 | bit;
    }
    return v >>> 0;
  }
  const sign = readBits(1);
  const value = readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(32) + 4436 : readBits(12) + 340 : readBits(8) + 84 : readBits(6) + 20 : readBits(4) + 4 : readBits(2);
  let signedValue;
  if (sign === 0) {
    signedValue = value;
  } else if (value > 0) {
    signedValue = -value;
  }
  if (signedValue >= MIN_INT_32 && signedValue <= MAX_INT_32) {
    return signedValue;
  }
  return null;
}
function decodeIAID(contextCache, decoder, codeLength) {
  const contexts = contextCache.getContexts("IAID");
  let prev = 1;
  for (let i = 0; i < codeLength; i++) {
    const bit = decoder.readBit(contexts, prev);
    prev = prev << 1 | bit;
  }
  if (codeLength < 31) {
    return prev & (1 << codeLength) - 1;
  }
  return prev & 0x7fffffff;
}
const SegmentTypes = ["SymbolDictionary", null, null, null, "IntermediateTextRegion", null, "ImmediateTextRegion", "ImmediateLosslessTextRegion", null, null, null, null, null, null, null, null, "PatternDictionary", null, null, null, "IntermediateHalftoneRegion", null, "ImmediateHalftoneRegion", "ImmediateLosslessHalftoneRegion", null, null, null, null, null, null, null, null, null, null, null, null, "IntermediateGenericRegion", null, "ImmediateGenericRegion", "ImmediateLosslessGenericRegion", "IntermediateGenericRefinementRegion", null, "ImmediateGenericRefinementRegion", "ImmediateLosslessGenericRefinementRegion", null, null, null, null, "PageInformation", "EndOfPage", "EndOfStripe", "EndOfFile", "Profiles", "Tables", null, null, null, null, null, null, null, null, "Extension"];
const CodingTemplates = [[{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: 2,
  y: -1
}, {
  x: -4,
  y: 0
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: 2,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: 2,
  y: -1
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -3,
  y: -1
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: -4,
  y: 0
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}]];
const RefinementTemplates = [{
  coding: [{
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }],
  reference: [{
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 1,
    y: 0
  }, {
    x: -1,
    y: 1
  }, {
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 1
  }]
}, {
  coding: [{
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }],
  reference: [{
    x: 0,
    y: -1
  }, {
    x: -1,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 1,
    y: 0
  }, {
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 1
  }]
}];
const ReusedContexts = [0x9b25, 0x0795, 0x00e5, 0x0195];
const RefinementReusedContexts = [0x0020, 0x0008];
function decodeBitmapTemplate0(width, height, decodingContext) {
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GB");
  const bitmap = [];
  let contextLabel, i, j, pixel, row, row1, row2;
  const OLD_PIXEL_MASK = 0x7bf7;
  for (i = 0; i < height; i++) {
    row = bitmap[i] = new Uint8Array(width);
    row1 = i < 1 ? row : bitmap[i - 1];
    row2 = i < 2 ? row : bitmap[i - 2];
    contextLabel = row2[0] << 13 | row2[1] << 12 | row2[2] << 11 | row1[0] << 7 | row1[1] << 6 | row1[2] << 5 | row1[3] << 4;
    for (j = 0; j < width; j++) {
      row[j] = pixel = decoder.readBit(contexts, contextLabel);
      contextLabel = (contextLabel & OLD_PIXEL_MASK) << 1 | (j + 3 < width ? row2[j + 3] << 11 : 0) | (j + 4 < width ? row1[j + 4] << 4 : 0) | pixel;
    }
  }
  return bitmap;
}
function decodeBitmap(mmr, width, height, templateIndex, prediction, skip, at, decodingContext) {
  if (mmr) {
    const input = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
    return decodeMMRBitmap(input, width, height, false);
  }
  if (templateIndex === 0 && !skip && !prediction && at.length === 4 && at[0].x === 3 && at[0].y === -1 && at[1].x === -3 && at[1].y === -1 && at[2].x === 2 && at[2].y === -2 && at[3].x === -2 && at[3].y === -2) {
    return decodeBitmapTemplate0(width, height, decodingContext);
  }
  const useskip = !!skip;
  const template = CodingTemplates[templateIndex].concat(at);
  template.sort((a, b) => a.y - b.y || a.x - b.x);
  const templateLength = template.length;
  const templateX = new Int8Array(templateLength);
  const templateY = new Int8Array(templateLength);
  const changingTemplateEntries = [];
  let reuseMask = 0,
    minX = 0,
    maxX = 0,
    minY = 0;
  let c, k;
  for (k = 0; k < templateLength; k++) {
    templateX[k] = template[k].x;
    templateY[k] = template[k].y;
    minX = Math.min(minX, template[k].x);
    maxX = Math.max(maxX, template[k].x);
    minY = Math.min(minY, template[k].y);
    if (k < templateLength - 1 && template[k].y === template[k + 1].y && template[k].x === template[k + 1].x - 1) {
      reuseMask |= 1 << templateLength - 1 - k;
    } else {
      changingTemplateEntries.push(k);
    }
  }
  const changingEntriesLength = changingTemplateEntries.length;
  const changingTemplateX = new Int8Array(changingEntriesLength);
  const changingTemplateY = new Int8Array(changingEntriesLength);
  const changingTemplateBit = new Uint16Array(changingEntriesLength);
  for (c = 0; c < changingEntriesLength; c++) {
    k = changingTemplateEntries[c];
    changingTemplateX[c] = template[k].x;
    changingTemplateY[c] = template[k].y;
    changingTemplateBit[c] = 1 << templateLength - 1 - k;
  }
  const sbb_left = -minX;
  const sbb_top = -minY;
  const sbb_right = width - maxX;
  const pseudoPixelContext = ReusedContexts[templateIndex];
  let row = new Uint8Array(width);
  const bitmap = [];
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GB");
  let ltp = 0,
    j,
    i0,
    j0,
    contextLabel = 0,
    bit,
    shift;
  for (let i = 0; i < height; i++) {
    if (prediction) {
      const sltp = decoder.readBit(contexts, pseudoPixelContext);
      ltp ^= sltp;
      if (ltp) {
        bitmap.push(row);
        continue;
      }
    }
    row = new Uint8Array(row);
    bitmap.push(row);
    for (j = 0; j < width; j++) {
      if (useskip && skip[i][j]) {
        row[j] = 0;
        continue;
      }
      if (j >= sbb_left && j < sbb_right && i >= sbb_top) {
        contextLabel = contextLabel << 1 & reuseMask;
        for (k = 0; k < changingEntriesLength; k++) {
          i0 = i + changingTemplateY[k];
          j0 = j + changingTemplateX[k];
          bit = bitmap[i0][j0];
          if (bit) {
            bit = changingTemplateBit[k];
            contextLabel |= bit;
          }
        }
      } else {
        contextLabel = 0;
        shift = templateLength - 1;
        for (k = 0; k < templateLength; k++, shift--) {
          j0 = j + templateX[k];
          if (j0 >= 0 && j0 < width) {
            i0 = i + templateY[k];
            if (i0 >= 0) {
              bit = bitmap[i0][j0];
              if (bit) {
                contextLabel |= bit << shift;
              }
            }
          }
        }
      }
      const pixel = decoder.readBit(contexts, contextLabel);
      row[j] = pixel;
    }
  }
  return bitmap;
}
function decodeRefinement(width, height, templateIndex, referenceBitmap, offsetX, offsetY, prediction, at, decodingContext) {
  let codingTemplate = RefinementTemplates[templateIndex].coding;
  if (templateIndex === 0) {
    codingTemplate = codingTemplate.concat([at[0]]);
  }
  const codingTemplateLength = codingTemplate.length;
  const codingTemplateX = new Int32Array(codingTemplateLength);
  const codingTemplateY = new Int32Array(codingTemplateLength);
  let k;
  for (k = 0; k < codingTemplateLength; k++) {
    codingTemplateX[k] = codingTemplate[k].x;
    codingTemplateY[k] = codingTemplate[k].y;
  }
  let referenceTemplate = RefinementTemplates[templateIndex].reference;
  if (templateIndex === 0) {
    referenceTemplate = referenceTemplate.concat([at[1]]);
  }
  const referenceTemplateLength = referenceTemplate.length;
  const referenceTemplateX = new Int32Array(referenceTemplateLength);
  const referenceTemplateY = new Int32Array(referenceTemplateLength);
  for (k = 0; k < referenceTemplateLength; k++) {
    referenceTemplateX[k] = referenceTemplate[k].x;
    referenceTemplateY[k] = referenceTemplate[k].y;
  }
  const referenceWidth = referenceBitmap[0].length;
  const referenceHeight = referenceBitmap.length;
  const pseudoPixelContext = RefinementReusedContexts[templateIndex];
  const bitmap = [];
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GR");
  let ltp = 0;
  for (let i = 0; i < height; i++) {
    if (prediction) {
      const sltp = decoder.readBit(contexts, pseudoPixelContext);
      ltp ^= sltp;
      if (ltp) {
        throw new Jbig2Error("prediction is not supported");
      }
    }
    const row = new Uint8Array(width);
    bitmap.push(row);
    for (let j = 0; j < width; j++) {
      let i0, j0;
      let contextLabel = 0;
      for (k = 0; k < codingTemplateLength; k++) {
        i0 = i + codingTemplateY[k];
        j0 = j + codingTemplateX[k];
        if (i0 < 0 || j0 < 0 || j0 >= width) {
          contextLabel <<= 1;
        } else {
          contextLabel = contextLabel << 1 | bitmap[i0][j0];
        }
      }
      for (k = 0; k < referenceTemplateLength; k++) {
        i0 = i + referenceTemplateY[k] - offsetY;
        j0 = j + referenceTemplateX[k] - offsetX;
        if (i0 < 0 || i0 >= referenceHeight || j0 < 0 || j0 >= referenceWidth) {
          contextLabel <<= 1;
        } else {
          contextLabel = contextLabel << 1 | referenceBitmap[i0][j0];
        }
      }
      const pixel = decoder.readBit(contexts, contextLabel);
      row[j] = pixel;
    }
  }
  return bitmap;
}
function decodeSymbolDictionary(huffman, refinement, symbols, numberOfNewSymbols, numberOfExportedSymbols, huffmanTables, templateIndex, at, refinementTemplateIndex, refinementAt, decodingContext, huffmanInput) {
  if (huffman && refinement) {
    throw new Jbig2Error("symbol refinement with Huffman is not supported");
  }
  const newSymbols = [];
  let currentHeight = 0;
  let symbolCodeLength = log2(symbols.length + numberOfNewSymbols);
  const decoder = decodingContext.decoder;
  const contextCache = decodingContext.contextCache;
  let tableB1, symbolWidths;
  if (huffman) {
    tableB1 = getStandardTable(1);
    symbolWidths = [];
    symbolCodeLength = Math.max(symbolCodeLength, 1);
  }
  while (newSymbols.length < numberOfNewSymbols) {
    const deltaHeight = huffman ? huffmanTables.tableDeltaHeight.decode(huffmanInput) : decodeInteger(contextCache, "IADH", decoder);
    currentHeight += deltaHeight;
    let currentWidth = 0,
      totalWidth = 0;
    const firstSymbol = huffman ? symbolWidths.length : 0;
    while (true) {
      const deltaWidth = huffman ? huffmanTables.tableDeltaWidth.decode(huffmanInput) : decodeInteger(contextCache, "IADW", decoder);
      if (deltaWidth === null) {
        break;
      }
      currentWidth += deltaWidth;
      totalWidth += currentWidth;
      let bitmap;
      if (refinement) {
        const numberOfInstances = decodeInteger(contextCache, "IAAI", decoder);
        if (numberOfInstances > 1) {
          bitmap = decodeTextRegion(huffman, refinement, currentWidth, currentHeight, 0, numberOfInstances, 1, symbols.concat(newSymbols), symbolCodeLength, 0, 0, 1, 0, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, 0, huffmanInput);
        } else {
          const symbolId = decodeIAID(contextCache, decoder, symbolCodeLength);
          const rdx = decodeInteger(contextCache, "IARDX", decoder);
          const rdy = decodeInteger(contextCache, "IARDY", decoder);
          const symbol = symbolId < symbols.length ? symbols[symbolId] : newSymbols[symbolId - symbols.length];
          bitmap = decodeRefinement(currentWidth, currentHeight, refinementTemplateIndex, symbol, rdx, rdy, false, refinementAt, decodingContext);
        }
        newSymbols.push(bitmap);
      } else if (huffman) {
        symbolWidths.push(currentWidth);
      } else {
        bitmap = decodeBitmap(false, currentWidth, currentHeight, templateIndex, false, null, at, decodingContext);
        newSymbols.push(bitmap);
      }
    }
    if (huffman && !refinement) {
      const bitmapSize = huffmanTables.tableBitmapSize.decode(huffmanInput);
      huffmanInput.byteAlign();
      let collectiveBitmap;
      if (bitmapSize === 0) {
        collectiveBitmap = readUncompressedBitmap(huffmanInput, totalWidth, currentHeight);
      } else {
        const originalEnd = huffmanInput.end;
        const bitmapEnd = huffmanInput.position + bitmapSize;
        huffmanInput.end = bitmapEnd;
        collectiveBitmap = decodeMMRBitmap(huffmanInput, totalWidth, currentHeight, false);
        huffmanInput.end = originalEnd;
        huffmanInput.position = bitmapEnd;
      }
      const numberOfSymbolsDecoded = symbolWidths.length;
      if (firstSymbol === numberOfSymbolsDecoded - 1) {
        newSymbols.push(collectiveBitmap);
      } else {
        let i,
          y,
          xMin = 0,
          xMax,
          bitmapWidth,
          symbolBitmap;
        for (i = firstSymbol; i < numberOfSymbolsDecoded; i++) {
          bitmapWidth = symbolWidths[i];
          xMax = xMin + bitmapWidth;
          symbolBitmap = [];
          for (y = 0; y < currentHeight; y++) {
            symbolBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
          }
          newSymbols.push(symbolBitmap);
          xMin = xMax;
        }
      }
    }
  }
  const exportedSymbols = [],
    flags = [];
  let currentFlag = false,
    i,
    ii;
  const totalSymbolsLength = symbols.length + numberOfNewSymbols;
  while (flags.length < totalSymbolsLength) {
    let runLength = huffman ? tableB1.decode(huffmanInput) : decodeInteger(contextCache, "IAEX", decoder);
    while (runLength--) {
      flags.push(currentFlag);
    }
    currentFlag = !currentFlag;
  }
  for (i = 0, ii = symbols.length; i < ii; i++) {
    if (flags[i]) {
      exportedSymbols.push(symbols[i]);
    }
  }
  for (let j = 0; j < numberOfNewSymbols; i++, j++) {
    if (flags[i]) {
      exportedSymbols.push(newSymbols[j]);
    }
  }
  return exportedSymbols;
}
function decodeTextRegion(huffman, refinement, width, height, defaultPixelValue, numberOfSymbolInstances, stripSize, inputSymbols, symbolCodeLength, transposed, dsOffset, referenceCorner, combinationOperator, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, logStripSize, huffmanInput) {
  if (huffman && refinement) {
    throw new Jbig2Error("refinement with Huffman is not supported");
  }
  const bitmap = [];
  let i, row;
  for (i = 0; i < height; i++) {
    row = new Uint8Array(width);
    if (defaultPixelValue) {
      row.fill(defaultPixelValue);
    }
    bitmap.push(row);
  }
  const decoder = decodingContext.decoder;
  const contextCache = decodingContext.contextCache;
  let stripT = huffman ? -huffmanTables.tableDeltaT.decode(huffmanInput) : -decodeInteger(contextCache, "IADT", decoder);
  let firstS = 0;
  i = 0;
  while (i < numberOfSymbolInstances) {
    const deltaT = huffman ? huffmanTables.tableDeltaT.decode(huffmanInput) : decodeInteger(contextCache, "IADT", decoder);
    stripT += deltaT;
    const deltaFirstS = huffman ? huffmanTables.tableFirstS.decode(huffmanInput) : decodeInteger(contextCache, "IAFS", decoder);
    firstS += deltaFirstS;
    let currentS = firstS;
    do {
      let currentT = 0;
      if (stripSize > 1) {
        currentT = huffman ? huffmanInput.readBits(logStripSize) : decodeInteger(contextCache, "IAIT", decoder);
      }
      const t = stripSize * stripT + currentT;
      const symbolId = huffman ? huffmanTables.symbolIDTable.decode(huffmanInput) : decodeIAID(contextCache, decoder, symbolCodeLength);
      const applyRefinement = refinement && (huffman ? huffmanInput.readBit() : decodeInteger(contextCache, "IARI", decoder));
      let symbolBitmap = inputSymbols[symbolId];
      let symbolWidth = symbolBitmap[0].length;
      let symbolHeight = symbolBitmap.length;
      if (applyRefinement) {
        const rdw = decodeInteger(contextCache, "IARDW", decoder);
        const rdh = decodeInteger(contextCache, "IARDH", decoder);
        const rdx = decodeInteger(contextCache, "IARDX", decoder);
        const rdy = decodeInteger(contextCache, "IARDY", decoder);
        symbolWidth += rdw;
        symbolHeight += rdh;
        symbolBitmap = decodeRefinement(symbolWidth, symbolHeight, refinementTemplateIndex, symbolBitmap, (rdw >> 1) + rdx, (rdh >> 1) + rdy, false, refinementAt, decodingContext);
      }
      let increment = 0;
      if (!transposed) {
        if (referenceCorner > 1) {
          currentS += symbolWidth - 1;
        } else {
          increment = symbolWidth - 1;
        }
      } else if (!(referenceCorner & 1)) {
        currentS += symbolHeight - 1;
      } else {
        increment = symbolHeight - 1;
      }
      const offsetT = t - (referenceCorner & 1 ? 0 : symbolHeight - 1);
      const offsetS = currentS - (referenceCorner & 2 ? symbolWidth - 1 : 0);
      let s2, t2, symbolRow;
      if (transposed) {
        for (s2 = 0; s2 < symbolHeight; s2++) {
          row = bitmap[offsetS + s2];
          if (!row) {
            continue;
          }
          symbolRow = symbolBitmap[s2];
          const maxWidth = Math.min(width - offsetT, symbolWidth);
          switch (combinationOperator) {
            case 0:
              for (t2 = 0; t2 < maxWidth; t2++) {
                row[offsetT + t2] |= symbolRow[t2];
              }
              break;
            case 2:
              for (t2 = 0; t2 < maxWidth; t2++) {
                row[offsetT + t2] ^= symbolRow[t2];
              }
              break;
            default:
              throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
          }
        }
      } else {
        for (t2 = 0; t2 < symbolHeight; t2++) {
          row = bitmap[offsetT + t2];
          if (!row) {
            continue;
          }
          symbolRow = symbolBitmap[t2];
          switch (combinationOperator) {
            case 0:
              for (s2 = 0; s2 < symbolWidth; s2++) {
                row[offsetS + s2] |= symbolRow[s2];
              }
              break;
            case 2:
              for (s2 = 0; s2 < symbolWidth; s2++) {
                row[offsetS + s2] ^= symbolRow[s2];
              }
              break;
            default:
              throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
          }
        }
      }
      i++;
      const deltaS = huffman ? huffmanTables.tableDeltaS.decode(huffmanInput) : decodeInteger(contextCache, "IADS", decoder);
      if (deltaS === null) {
        break;
      }
      currentS += increment + deltaS + dsOffset;
    } while (true);
  }
  return bitmap;
}
function decodePatternDictionary(mmr, patternWidth, patternHeight, maxPatternIndex, template, decodingContext) {
  const at = [];
  if (!mmr) {
    at.push({
      x: -patternWidth,
      y: 0
    });
    if (template === 0) {
      at.push({
        x: -3,
        y: -1
      }, {
        x: 2,
        y: -2
      }, {
        x: -2,
        y: -2
      });
    }
  }
  const collectiveWidth = (maxPatternIndex + 1) * patternWidth;
  const collectiveBitmap = decodeBitmap(mmr, collectiveWidth, patternHeight, template, false, null, at, decodingContext);
  const patterns = [];
  for (let i = 0; i <= maxPatternIndex; i++) {
    const patternBitmap = [];
    const xMin = patternWidth * i;
    const xMax = xMin + patternWidth;
    for (let y = 0; y < patternHeight; y++) {
      patternBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
    }
    patterns.push(patternBitmap);
  }
  return patterns;
}
function decodeHalftoneRegion(mmr, patterns, template, regionWidth, regionHeight, defaultPixelValue, enableSkip, combinationOperator, gridWidth, gridHeight, gridOffsetX, gridOffsetY, gridVectorX, gridVectorY, decodingContext) {
  const skip = null;
  if (enableSkip) {
    throw new Jbig2Error("skip is not supported");
  }
  if (combinationOperator !== 0) {
    throw new Jbig2Error(`operator "${combinationOperator}" is not supported in halftone region`);
  }
  const regionBitmap = [];
  let i, j, row;
  for (i = 0; i < regionHeight; i++) {
    row = new Uint8Array(regionWidth);
    if (defaultPixelValue) {
      row.fill(defaultPixelValue);
    }
    regionBitmap.push(row);
  }
  const numberOfPatterns = patterns.length;
  const pattern0 = patterns[0];
  const patternWidth = pattern0[0].length,
    patternHeight = pattern0.length;
  const bitsPerValue = log2(numberOfPatterns);
  const at = [];
  if (!mmr) {
    at.push({
      x: template <= 1 ? 3 : 2,
      y: -1
    });
    if (template === 0) {
      at.push({
        x: -3,
        y: -1
      }, {
        x: 2,
        y: -2
      }, {
        x: -2,
        y: -2
      });
    }
  }
  const grayScaleBitPlanes = [];
  let mmrInput, bitmap;
  if (mmr) {
    mmrInput = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
  }
  for (i = bitsPerValue - 1; i >= 0; i--) {
    if (mmr) {
      bitmap = decodeMMRBitmap(mmrInput, gridWidth, gridHeight, true);
    } else {
      bitmap = decodeBitmap(false, gridWidth, gridHeight, template, false, skip, at, decodingContext);
    }
    grayScaleBitPlanes[i] = bitmap;
  }
  let mg, ng, bit, patternIndex, patternBitmap, x, y, patternRow, regionRow;
  for (mg = 0; mg < gridHeight; mg++) {
    for (ng = 0; ng < gridWidth; ng++) {
      bit = 0;
      patternIndex = 0;
      for (j = bitsPerValue - 1; j >= 0; j--) {
        bit ^= grayScaleBitPlanes[j][mg][ng];
        patternIndex |= bit << j;
      }
      patternBitmap = patterns[patternIndex];
      x = gridOffsetX + mg * gridVectorY + ng * gridVectorX >> 8;
      y = gridOffsetY + mg * gridVectorX - ng * gridVectorY >> 8;
      if (x >= 0 && x + patternWidth <= regionWidth && y >= 0 && y + patternHeight <= regionHeight) {
        for (i = 0; i < patternHeight; i++) {
          regionRow = regionBitmap[y + i];
          patternRow = patternBitmap[i];
          for (j = 0; j < patternWidth; j++) {
            regionRow[x + j] |= patternRow[j];
          }
        }
      } else {
        let regionX, regionY;
        for (i = 0; i < patternHeight; i++) {
          regionY = y + i;
          if (regionY < 0 || regionY >= regionHeight) {
            continue;
          }
          regionRow = regionBitmap[regionY];
          patternRow = patternBitmap[i];
          for (j = 0; j < patternWidth; j++) {
            regionX = x + j;
            if (regionX >= 0 && regionX < regionWidth) {
              regionRow[regionX] |= patternRow[j];
            }
          }
        }
      }
    }
  }
  return regionBitmap;
}
function readSegmentHeader(data, start) {
  const segmentHeader = {};
  segmentHeader.number = readUint32(data, start);
  const flags = data[start + 4];
  const segmentType = flags & 0x3f;
  if (!SegmentTypes[segmentType]) {
    throw new Jbig2Error("invalid segment type: " + segmentType);
  }
  segmentHeader.type = segmentType;
  segmentHeader.typeName = SegmentTypes[segmentType];
  segmentHeader.deferredNonRetain = !!(flags & 0x80);
  const pageAssociationFieldSize = !!(flags & 0x40);
  const referredFlags = data[start + 5];
  let referredToCount = referredFlags >> 5 & 7;
  const retainBits = [referredFlags & 31];
  let position = start + 6;
  if (referredFlags === 7) {
    referredToCount = readUint32(data, position - 1) & 0x1fffffff;
    position += 3;
    let bytes = referredToCount + 7 >> 3;
    retainBits[0] = data[position++];
    while (--bytes > 0) {
      retainBits.push(data[position++]);
    }
  } else if (referredFlags === 5 || referredFlags === 6) {
    throw new Jbig2Error("invalid referred-to flags");
  }
  segmentHeader.retainBits = retainBits;
  let referredToSegmentNumberSize = 4;
  if (segmentHeader.number <= 256) {
    referredToSegmentNumberSize = 1;
  } else if (segmentHeader.number <= 65536) {
    referredToSegmentNumberSize = 2;
  }
  const referredTo = [];
  let i, ii;
  for (i = 0; i < referredToCount; i++) {
    let number;
    if (referredToSegmentNumberSize === 1) {
      number = data[position];
    } else if (referredToSegmentNumberSize === 2) {
      number = readUint16(data, position);
    } else {
      number = readUint32(data, position);
    }
    referredTo.push(number);
    position += referredToSegmentNumberSize;
  }
  segmentHeader.referredTo = referredTo;
  if (!pageAssociationFieldSize) {
    segmentHeader.pageAssociation = data[position++];
  } else {
    segmentHeader.pageAssociation = readUint32(data, position);
    position += 4;
  }
  segmentHeader.length = readUint32(data, position);
  position += 4;
  if (segmentHeader.length === 0xffffffff) {
    if (segmentType === 38) {
      const genericRegionInfo = readRegionSegmentInformation(data, position);
      const genericRegionSegmentFlags = data[position + RegionSegmentInformationFieldLength];
      const genericRegionMmr = !!(genericRegionSegmentFlags & 1);
      const searchPatternLength = 6;
      const searchPattern = new Uint8Array(searchPatternLength);
      if (!genericRegionMmr) {
        searchPattern[0] = 0xff;
        searchPattern[1] = 0xac;
      }
      searchPattern[2] = genericRegionInfo.height >>> 24 & 0xff;
      searchPattern[3] = genericRegionInfo.height >> 16 & 0xff;
      searchPattern[4] = genericRegionInfo.height >> 8 & 0xff;
      searchPattern[5] = genericRegionInfo.height & 0xff;
      for (i = position, ii = data.length; i < ii; i++) {
        let j = 0;
        while (j < searchPatternLength && searchPattern[j] === data[i + j]) {
          j++;
        }
        if (j === searchPatternLength) {
          segmentHeader.length = i + searchPatternLength;
          break;
        }
      }
      if (segmentHeader.length === 0xffffffff) {
        throw new Jbig2Error("segment end was not found");
      }
    } else {
      throw new Jbig2Error("invalid unknown segment length");
    }
  }
  segmentHeader.headerEnd = position;
  return segmentHeader;
}
function readSegments(header, data, start, end) {
  const segments = [];
  let position = start;
  while (position < end) {
    const segmentHeader = readSegmentHeader(data, position);
    position = segmentHeader.headerEnd;
    const segment = {
      header: segmentHeader,
      data
    };
    if (!header.randomAccess) {
      segment.start = position;
      position += segmentHeader.length;
      segment.end = position;
    }
    segments.push(segment);
    if (segmentHeader.type === 51) {
      break;
    }
  }
  if (header.randomAccess) {
    for (let i = 0, ii = segments.length; i < ii; i++) {
      segments[i].start = position;
      position += segments[i].header.length;
      segments[i].end = position;
    }
  }
  return segments;
}
function readRegionSegmentInformation(data, start) {
  return {
    width: readUint32(data, start),
    height: readUint32(data, start + 4),
    x: readUint32(data, start + 8),
    y: readUint32(data, start + 12),
    combinationOperator: data[start + 16] & 7
  };
}
const RegionSegmentInformationFieldLength = 17;
function processSegment(segment, visitor) {
  const header = segment.header;
  const data = segment.data,
    end = segment.end;
  let position = segment.start;
  let args, at, i, atLength;
  switch (header.type) {
    case 0:
      const dictionary = {};
      const dictionaryFlags = readUint16(data, position);
      dictionary.huffman = !!(dictionaryFlags & 1);
      dictionary.refinement = !!(dictionaryFlags & 2);
      dictionary.huffmanDHSelector = dictionaryFlags >> 2 & 3;
      dictionary.huffmanDWSelector = dictionaryFlags >> 4 & 3;
      dictionary.bitmapSizeSelector = dictionaryFlags >> 6 & 1;
      dictionary.aggregationInstancesSelector = dictionaryFlags >> 7 & 1;
      dictionary.bitmapCodingContextUsed = !!(dictionaryFlags & 256);
      dictionary.bitmapCodingContextRetained = !!(dictionaryFlags & 512);
      dictionary.template = dictionaryFlags >> 10 & 3;
      dictionary.refinementTemplate = dictionaryFlags >> 12 & 1;
      position += 2;
      if (!dictionary.huffman) {
        atLength = dictionary.template === 0 ? 4 : 1;
        at = [];
        for (i = 0; i < atLength; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        dictionary.at = at;
      }
      if (dictionary.refinement && !dictionary.refinementTemplate) {
        at = [];
        for (i = 0; i < 2; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        dictionary.refinementAt = at;
      }
      dictionary.numberOfExportedSymbols = readUint32(data, position);
      position += 4;
      dictionary.numberOfNewSymbols = readUint32(data, position);
      position += 4;
      args = [dictionary, header.number, header.referredTo, data, position, end];
      break;
    case 6:
    case 7:
      const textRegion = {};
      textRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const textRegionSegmentFlags = readUint16(data, position);
      position += 2;
      textRegion.huffman = !!(textRegionSegmentFlags & 1);
      textRegion.refinement = !!(textRegionSegmentFlags & 2);
      textRegion.logStripSize = textRegionSegmentFlags >> 2 & 3;
      textRegion.stripSize = 1 << textRegion.logStripSize;
      textRegion.referenceCorner = textRegionSegmentFlags >> 4 & 3;
      textRegion.transposed = !!(textRegionSegmentFlags & 64);
      textRegion.combinationOperator = textRegionSegmentFlags >> 7 & 3;
      textRegion.defaultPixelValue = textRegionSegmentFlags >> 9 & 1;
      textRegion.dsOffset = textRegionSegmentFlags << 17 >> 27;
      textRegion.refinementTemplate = textRegionSegmentFlags >> 15 & 1;
      if (textRegion.huffman) {
        const textRegionHuffmanFlags = readUint16(data, position);
        position += 2;
        textRegion.huffmanFS = textRegionHuffmanFlags & 3;
        textRegion.huffmanDS = textRegionHuffmanFlags >> 2 & 3;
        textRegion.huffmanDT = textRegionHuffmanFlags >> 4 & 3;
        textRegion.huffmanRefinementDW = textRegionHuffmanFlags >> 6 & 3;
        textRegion.huffmanRefinementDH = textRegionHuffmanFlags >> 8 & 3;
        textRegion.huffmanRefinementDX = textRegionHuffmanFlags >> 10 & 3;
        textRegion.huffmanRefinementDY = textRegionHuffmanFlags >> 12 & 3;
        textRegion.huffmanRefinementSizeSelector = !!(textRegionHuffmanFlags & 0x4000);
      }
      if (textRegion.refinement && !textRegion.refinementTemplate) {
        at = [];
        for (i = 0; i < 2; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        textRegion.refinementAt = at;
      }
      textRegion.numberOfSymbolInstances = readUint32(data, position);
      position += 4;
      args = [textRegion, header.referredTo, data, position, end];
      break;
    case 16:
      const patternDictionary = {};
      const patternDictionaryFlags = data[position++];
      patternDictionary.mmr = !!(patternDictionaryFlags & 1);
      patternDictionary.template = patternDictionaryFlags >> 1 & 3;
      patternDictionary.patternWidth = data[position++];
      patternDictionary.patternHeight = data[position++];
      patternDictionary.maxPatternIndex = readUint32(data, position);
      position += 4;
      args = [patternDictionary, header.number, data, position, end];
      break;
    case 22:
    case 23:
      const halftoneRegion = {};
      halftoneRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const halftoneRegionFlags = data[position++];
      halftoneRegion.mmr = !!(halftoneRegionFlags & 1);
      halftoneRegion.template = halftoneRegionFlags >> 1 & 3;
      halftoneRegion.enableSkip = !!(halftoneRegionFlags & 8);
      halftoneRegion.combinationOperator = halftoneRegionFlags >> 4 & 7;
      halftoneRegion.defaultPixelValue = halftoneRegionFlags >> 7 & 1;
      halftoneRegion.gridWidth = readUint32(data, position);
      position += 4;
      halftoneRegion.gridHeight = readUint32(data, position);
      position += 4;
      halftoneRegion.gridOffsetX = readUint32(data, position) & 0xffffffff;
      position += 4;
      halftoneRegion.gridOffsetY = readUint32(data, position) & 0xffffffff;
      position += 4;
      halftoneRegion.gridVectorX = readUint16(data, position);
      position += 2;
      halftoneRegion.gridVectorY = readUint16(data, position);
      position += 2;
      args = [halftoneRegion, header.referredTo, data, position, end];
      break;
    case 38:
    case 39:
      const genericRegion = {};
      genericRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const genericRegionSegmentFlags = data[position++];
      genericRegion.mmr = !!(genericRegionSegmentFlags & 1);
      genericRegion.template = genericRegionSegmentFlags >> 1 & 3;
      genericRegion.prediction = !!(genericRegionSegmentFlags & 8);
      if (!genericRegion.mmr) {
        atLength = genericRegion.template === 0 ? 4 : 1;
        at = [];
        for (i = 0; i < atLength; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        genericRegion.at = at;
      }
      args = [genericRegion, data, position, end];
      break;
    case 48:
      const pageInfo = {
        width: readUint32(data, position),
        height: readUint32(data, position + 4),
        resolutionX: readUint32(data, position + 8),
        resolutionY: readUint32(data, position + 12)
      };
      if (pageInfo.height === 0xffffffff) {
        delete pageInfo.height;
      }
      const pageSegmentFlags = data[position + 16];
      readUint16(data, position + 17);
      pageInfo.lossless = !!(pageSegmentFlags & 1);
      pageInfo.refinement = !!(pageSegmentFlags & 2);
      pageInfo.defaultPixelValue = pageSegmentFlags >> 2 & 1;
      pageInfo.combinationOperator = pageSegmentFlags >> 3 & 3;
      pageInfo.requiresBuffer = !!(pageSegmentFlags & 32);
      pageInfo.combinationOperatorOverride = !!(pageSegmentFlags & 64);
      args = [pageInfo];
      break;
    case 49:
      break;
    case 50:
      break;
    case 51:
      break;
    case 53:
      args = [header.number, data, position, end];
      break;
    case 62:
      break;
    default:
      throw new Jbig2Error(`segment type ${header.typeName}(${header.type}) is not implemented`);
  }
  const callbackName = "on" + header.typeName;
  if (callbackName in visitor) {
    visitor[callbackName].apply(visitor, args);
  }
}
function processSegments(segments, visitor) {
  for (let i = 0, ii = segments.length; i < ii; i++) {
    processSegment(segments[i], visitor);
  }
}
function parseJbig2Chunks(chunks) {
  const visitor = new SimpleSegmentVisitor();
  for (let i = 0, ii = chunks.length; i < ii; i++) {
    const chunk = chunks[i];
    const segments = readSegments({}, chunk.data, chunk.start, chunk.end);
    processSegments(segments, visitor);
  }
  return visitor.buffer;
}
class SimpleSegmentVisitor {
  onPageInformation(info) {
    this.currentPageInfo = info;
    const rowSize = info.width + 7 >> 3;
    const buffer = new Uint8ClampedArray(rowSize * info.height);
    if (info.defaultPixelValue) {
      buffer.fill(0xff);
    }
    this.buffer = buffer;
  }
  drawBitmap(regionInfo, bitmap) {
    const pageInfo = this.currentPageInfo;
    const width = regionInfo.width,
      height = regionInfo.height;
    const rowSize = pageInfo.width + 7 >> 3;
    const combinationOperator = pageInfo.combinationOperatorOverride ? regionInfo.combinationOperator : pageInfo.combinationOperator;
    const buffer = this.buffer;
    const mask0 = 128 >> (regionInfo.x & 7);
    let offset0 = regionInfo.y * rowSize + (regionInfo.x >> 3);
    let i, j, mask, offset;
    switch (combinationOperator) {
      case 0:
        for (i = 0; i < height; i++) {
          mask = mask0;
          offset = offset0;
          for (j = 0; j < width; j++) {
            if (bitmap[i][j]) {
              buffer[offset] |= mask;
            }
            mask >>= 1;
            if (!mask) {
              mask = 128;
              offset++;
            }
          }
          offset0 += rowSize;
        }
        break;
      case 2:
        for (i = 0; i < height; i++) {
          mask = mask0;
          offset = offset0;
          for (j = 0; j < width; j++) {
            if (bitmap[i][j]) {
              buffer[offset] ^= mask;
            }
            mask >>= 1;
            if (!mask) {
              mask = 128;
              offset++;
            }
          }
          offset0 += rowSize;
        }
        break;
      default:
        throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
    }
  }
  onImmediateGenericRegion(region, data, start, end) {
    const regionInfo = region.info;
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeBitmap(region.mmr, regionInfo.width, regionInfo.height, region.template, region.prediction, null, region.at, decodingContext);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessGenericRegion() {
    this.onImmediateGenericRegion(...arguments);
  }
  onSymbolDictionary(dictionary, currentSegment, referredSegments, data, start, end) {
    let huffmanTables, huffmanInput;
    if (dictionary.huffman) {
      huffmanTables = getSymbolDictionaryHuffmanTables(dictionary, referredSegments, this.customTables);
      huffmanInput = new Reader(data, start, end);
    }
    let symbols = this.symbols;
    if (!symbols) {
      this.symbols = symbols = {};
    }
    const inputSymbols = [];
    for (const referredSegment of referredSegments) {
      const referredSymbols = symbols[referredSegment];
      if (referredSymbols) {
        inputSymbols.push(...referredSymbols);
      }
    }
    const decodingContext = new DecodingContext(data, start, end);
    symbols[currentSegment] = decodeSymbolDictionary(dictionary.huffman, dictionary.refinement, inputSymbols, dictionary.numberOfNewSymbols, dictionary.numberOfExportedSymbols, huffmanTables, dictionary.template, dictionary.at, dictionary.refinementTemplate, dictionary.refinementAt, decodingContext, huffmanInput);
  }
  onImmediateTextRegion(region, referredSegments, data, start, end) {
    const regionInfo = region.info;
    let huffmanTables, huffmanInput;
    const symbols = this.symbols;
    const inputSymbols = [];
    for (const referredSegment of referredSegments) {
      const referredSymbols = symbols[referredSegment];
      if (referredSymbols) {
        inputSymbols.push(...referredSymbols);
      }
    }
    const symbolCodeLength = log2(inputSymbols.length);
    if (region.huffman) {
      huffmanInput = new Reader(data, start, end);
      huffmanTables = getTextRegionHuffmanTables(region, referredSegments, this.customTables, inputSymbols.length, huffmanInput);
    }
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeTextRegion(region.huffman, region.refinement, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.numberOfSymbolInstances, region.stripSize, inputSymbols, symbolCodeLength, region.transposed, region.dsOffset, region.referenceCorner, region.combinationOperator, huffmanTables, region.refinementTemplate, region.refinementAt, decodingContext, region.logStripSize, huffmanInput);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessTextRegion() {
    this.onImmediateTextRegion(...arguments);
  }
  onPatternDictionary(dictionary, currentSegment, data, start, end) {
    let patterns = this.patterns;
    if (!patterns) {
      this.patterns = patterns = {};
    }
    const decodingContext = new DecodingContext(data, start, end);
    patterns[currentSegment] = decodePatternDictionary(dictionary.mmr, dictionary.patternWidth, dictionary.patternHeight, dictionary.maxPatternIndex, dictionary.template, decodingContext);
  }
  onImmediateHalftoneRegion(region, referredSegments, data, start, end) {
    const patterns = this.patterns[referredSegments[0]];
    const regionInfo = region.info;
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeHalftoneRegion(region.mmr, patterns, region.template, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.enableSkip, region.combinationOperator, region.gridWidth, region.gridHeight, region.gridOffsetX, region.gridOffsetY, region.gridVectorX, region.gridVectorY, decodingContext);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessHalftoneRegion() {
    this.onImmediateHalftoneRegion(...arguments);
  }
  onTables(currentSegment, data, start, end) {
    let customTables = this.customTables;
    if (!customTables) {
      this.customTables = customTables = {};
    }
    customTables[currentSegment] = decodeTablesSegment(data, start, end);
  }
}
class HuffmanLine {
  constructor(lineData) {
    if (lineData.length === 2) {
      this.isOOB = true;
      this.rangeLow = 0;
      this.prefixLength = lineData[0];
      this.rangeLength = 0;
      this.prefixCode = lineData[1];
      this.isLowerRange = false;
    } else {
      this.isOOB = false;
      this.rangeLow = lineData[0];
      this.prefixLength = lineData[1];
      this.rangeLength = lineData[2];
      this.prefixCode = lineData[3];
      this.isLowerRange = lineData[4] === "lower";
    }
  }
}
class HuffmanTreeNode {
  constructor(line) {
    this.children = [];
    if (line) {
      this.isLeaf = true;
      this.rangeLength = line.rangeLength;
      this.rangeLow = line.rangeLow;
      this.isLowerRange = line.isLowerRange;
      this.isOOB = line.isOOB;
    } else {
      this.isLeaf = false;
    }
  }
  buildTree(line, shift) {
    const bit = line.prefixCode >> shift & 1;
    if (shift <= 0) {
      this.children[bit] = new HuffmanTreeNode(line);
    } else {
      let node = this.children[bit];
      if (!node) {
        this.children[bit] = node = new HuffmanTreeNode(null);
      }
      node.buildTree(line, shift - 1);
    }
  }
  decodeNode(reader) {
    if (this.isLeaf) {
      if (this.isOOB) {
        return null;
      }
      const htOffset = reader.readBits(this.rangeLength);
      return this.rangeLow + (this.isLowerRange ? -htOffset : htOffset);
    }
    const node = this.children[reader.readBit()];
    if (!node) {
      throw new Jbig2Error("invalid Huffman data");
    }
    return node.decodeNode(reader);
  }
}
class HuffmanTable {
  constructor(lines, prefixCodesDone) {
    if (!prefixCodesDone) {
      this.assignPrefixCodes(lines);
    }
    this.rootNode = new HuffmanTreeNode(null);
    for (let i = 0, ii = lines.length; i < ii; i++) {
      const line = lines[i];
      if (line.prefixLength > 0) {
        this.rootNode.buildTree(line, line.prefixLength - 1);
      }
    }
  }
  decode(reader) {
    return this.rootNode.decodeNode(reader);
  }
  assignPrefixCodes(lines) {
    const linesLength = lines.length;
    let prefixLengthMax = 0;
    for (let i = 0; i < linesLength; i++) {
      prefixLengthMax = Math.max(prefixLengthMax, lines[i].prefixLength);
    }
    const histogram = new Uint32Array(prefixLengthMax + 1);
    for (let i = 0; i < linesLength; i++) {
      histogram[lines[i].prefixLength]++;
    }
    let currentLength = 1,
      firstCode = 0,
      currentCode,
      currentTemp,
      line;
    histogram[0] = 0;
    while (currentLength <= prefixLengthMax) {
      firstCode = firstCode + histogram[currentLength - 1] << 1;
      currentCode = firstCode;
      currentTemp = 0;
      while (currentTemp < linesLength) {
        line = lines[currentTemp];
        if (line.prefixLength === currentLength) {
          line.prefixCode = currentCode;
          currentCode++;
        }
        currentTemp++;
      }
      currentLength++;
    }
  }
}
function decodeTablesSegment(data, start, end) {
  const flags = data[start];
  const lowestValue = readUint32(data, start + 1) & 0xffffffff;
  const highestValue = readUint32(data, start + 5) & 0xffffffff;
  const reader = new Reader(data, start + 9, end);
  const prefixSizeBits = (flags >> 1 & 7) + 1;
  const rangeSizeBits = (flags >> 4 & 7) + 1;
  const lines = [];
  let prefixLength,
    rangeLength,
    currentRangeLow = lowestValue;
  do {
    prefixLength = reader.readBits(prefixSizeBits);
    rangeLength = reader.readBits(rangeSizeBits);
    lines.push(new HuffmanLine([currentRangeLow, prefixLength, rangeLength, 0]));
    currentRangeLow += 1 << rangeLength;
  } while (currentRangeLow < highestValue);
  prefixLength = reader.readBits(prefixSizeBits);
  lines.push(new HuffmanLine([lowestValue - 1, prefixLength, 32, 0, "lower"]));
  prefixLength = reader.readBits(prefixSizeBits);
  lines.push(new HuffmanLine([highestValue, prefixLength, 32, 0]));
  if (flags & 1) {
    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([prefixLength, 0]));
  }
  return new HuffmanTable(lines, false);
}
const standardTablesCache = {};
function getStandardTable(number) {
  let table = standardTablesCache[number];
  if (table) {
    return table;
  }
  let lines;
  switch (number) {
    case 1:
      lines = [[0, 1, 4, 0x0], [16, 2, 8, 0x2], [272, 3, 16, 0x6], [65808, 3, 32, 0x7]];
      break;
    case 2:
      lines = [[0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xe], [11, 5, 6, 0x1e], [75, 6, 32, 0x3e], [6, 0x3f]];
      break;
    case 3:
      lines = [[-256, 8, 8, 0xfe], [0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xe], [11, 5, 6, 0x1e], [-257, 8, 32, 0xff, "lower"], [75, 7, 32, 0x7e], [6, 0x3e]];
      break;
    case 4:
      lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xe], [12, 5, 6, 0x1e], [76, 5, 32, 0x1f]];
      break;
    case 5:
      lines = [[-255, 7, 8, 0x7e], [1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xe], [12, 5, 6, 0x1e], [-256, 7, 32, 0x7f, "lower"], [76, 6, 32, 0x3e]];
      break;
    case 6:
      lines = [[-2048, 5, 10, 0x1c], [-1024, 4, 9, 0x8], [-512, 4, 8, 0x9], [-256, 4, 7, 0xa], [-128, 5, 6, 0x1d], [-64, 5, 5, 0x1e], [-32, 4, 5, 0xb], [0, 2, 7, 0x0], [128, 3, 7, 0x2], [256, 3, 8, 0x3], [512, 4, 9, 0xc], [1024, 4, 10, 0xd], [-2049, 6, 32, 0x3e, "lower"], [2048, 6, 32, 0x3f]];
      break;
    case 7:
      lines = [[-1024, 4, 9, 0x8], [-512, 3, 8, 0x0], [-256, 4, 7, 0x9], [-128, 5, 6, 0x1a], [-64, 5, 5, 0x1b], [-32, 4, 5, 0xa], [0, 4, 5, 0xb], [32, 5, 5, 0x1c], [64, 5, 6, 0x1d], [128, 4, 7, 0xc], [256, 3, 8, 0x1], [512, 3, 9, 0x2], [1024, 3, 10, 0x3], [-1025, 5, 32, 0x1e, "lower"], [2048, 5, 32, 0x1f]];
      break;
    case 8:
      lines = [[-15, 8, 3, 0xfc], [-7, 9, 1, 0x1fc], [-5, 8, 1, 0xfd], [-3, 9, 0, 0x1fd], [-2, 7, 0, 0x7c], [-1, 4, 0, 0xa], [0, 2, 1, 0x0], [2, 5, 0, 0x1a], [3, 6, 0, 0x3a], [4, 3, 4, 0x4], [20, 6, 1, 0x3b], [22, 4, 4, 0xb], [38, 4, 5, 0xc], [70, 5, 6, 0x1b], [134, 5, 7, 0x1c], [262, 6, 7, 0x3c], [390, 7, 8, 0x7d], [646, 6, 10, 0x3d], [-16, 9, 32, 0x1fe, "lower"], [1670, 9, 32, 0x1ff], [2, 0x1]];
      break;
    case 9:
      lines = [[-31, 8, 4, 0xfc], [-15, 9, 2, 0x1fc], [-11, 8, 2, 0xfd], [-7, 9, 1, 0x1fd], [-5, 7, 1, 0x7c], [-3, 4, 1, 0xa], [-1, 3, 1, 0x2], [1, 3, 1, 0x3], [3, 5, 1, 0x1a], [5, 6, 1, 0x3a], [7, 3, 5, 0x4], [39, 6, 2, 0x3b], [43, 4, 5, 0xb], [75, 4, 6, 0xc], [139, 5, 7, 0x1b], [267, 5, 8, 0x1c], [523, 6, 8, 0x3c], [779, 7, 9, 0x7d], [1291, 6, 11, 0x3d], [-32, 9, 32, 0x1fe, "lower"], [3339, 9, 32, 0x1ff], [2, 0x0]];
      break;
    case 10:
      lines = [[-21, 7, 4, 0x7a], [-5, 8, 0, 0xfc], [-4, 7, 0, 0x7b], [-3, 5, 0, 0x18], [-2, 2, 2, 0x0], [2, 5, 0, 0x19], [3, 6, 0, 0x36], [4, 7, 0, 0x7c], [5, 8, 0, 0xfd], [6, 2, 6, 0x1], [70, 5, 5, 0x1a], [102, 6, 5, 0x37], [134, 6, 6, 0x38], [198, 6, 7, 0x39], [326, 6, 8, 0x3a], [582, 6, 9, 0x3b], [1094, 6, 10, 0x3c], [2118, 7, 11, 0x7d], [-22, 8, 32, 0xfe, "lower"], [4166, 8, 32, 0xff], [2, 0x2]];
      break;
    case 11:
      lines = [[1, 1, 0, 0x0], [2, 2, 1, 0x2], [4, 4, 0, 0xc], [5, 4, 1, 0xd], [7, 5, 1, 0x1c], [9, 5, 2, 0x1d], [13, 6, 2, 0x3c], [17, 7, 2, 0x7a], [21, 7, 3, 0x7b], [29, 7, 4, 0x7c], [45, 7, 5, 0x7d], [77, 7, 6, 0x7e], [141, 7, 32, 0x7f]];
      break;
    case 12:
      lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 1, 0x6], [5, 5, 0, 0x1c], [6, 5, 1, 0x1d], [8, 6, 1, 0x3c], [10, 7, 0, 0x7a], [11, 7, 1, 0x7b], [13, 7, 2, 0x7c], [17, 7, 3, 0x7d], [25, 7, 4, 0x7e], [41, 8, 5, 0xfe], [73, 8, 32, 0xff]];
      break;
    case 13:
      lines = [[1, 1, 0, 0x0], [2, 3, 0, 0x4], [3, 4, 0, 0xc], [4, 5, 0, 0x1c], [5, 4, 1, 0xd], [7, 3, 3, 0x5], [15, 6, 1, 0x3a], [17, 6, 2, 0x3b], [21, 6, 3, 0x3c], [29, 6, 4, 0x3d], [45, 6, 5, 0x3e], [77, 7, 6, 0x7e], [141, 7, 32, 0x7f]];
      break;
    case 14:
      lines = [[-2, 3, 0, 0x4], [-1, 3, 0, 0x5], [0, 1, 0, 0x0], [1, 3, 0, 0x6], [2, 3, 0, 0x7]];
      break;
    case 15:
      lines = [[-24, 7, 4, 0x7c], [-8, 6, 2, 0x3c], [-4, 5, 1, 0x1c], [-2, 4, 0, 0xc], [-1, 3, 0, 0x4], [0, 1, 0, 0x0], [1, 3, 0, 0x5], [2, 4, 0, 0xd], [3, 5, 1, 0x1d], [5, 6, 2, 0x3d], [9, 7, 4, 0x7d], [-25, 7, 32, 0x7e, "lower"], [25, 7, 32, 0x7f]];
      break;
    default:
      throw new Jbig2Error(`standard table B.${number} does not exist`);
  }
  for (let i = 0, ii = lines.length; i < ii; i++) {
    lines[i] = new HuffmanLine(lines[i]);
  }
  table = new HuffmanTable(lines, true);
  standardTablesCache[number] = table;
  return table;
}
class Reader {
  constructor(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
    this.position = start;
    this.shift = -1;
    this.currentByte = 0;
  }
  readBit() {
    if (this.shift < 0) {
      if (this.position >= this.end) {
        throw new Jbig2Error("end of data while reading bit");
      }
      this.currentByte = this.data[this.position++];
      this.shift = 7;
    }
    const bit = this.currentByte >> this.shift & 1;
    this.shift--;
    return bit;
  }
  readBits(numBits) {
    let result = 0,
      i;
    for (i = numBits - 1; i >= 0; i--) {
      result |= this.readBit() << i;
    }
    return result;
  }
  byteAlign() {
    this.shift = -1;
  }
  next() {
    if (this.position >= this.end) {
      return -1;
    }
    return this.data[this.position++];
  }
}
function getCustomHuffmanTable(index, referredTo, customTables) {
  let currentIndex = 0;
  for (let i = 0, ii = referredTo.length; i < ii; i++) {
    const table = customTables[referredTo[i]];
    if (table) {
      if (index === currentIndex) {
        return table;
      }
      currentIndex++;
    }
  }
  throw new Jbig2Error("can't find custom Huffman table");
}
function getTextRegionHuffmanTables(textRegion, referredTo, customTables, numberOfSymbols, reader) {
  const codes = [];
  for (let i = 0; i <= 34; i++) {
    const codeLength = reader.readBits(4);
    codes.push(new HuffmanLine([i, codeLength, 0, 0]));
  }
  const runCodesTable = new HuffmanTable(codes, false);
  codes.length = 0;
  for (let i = 0; i < numberOfSymbols;) {
    const codeLength = runCodesTable.decode(reader);
    if (codeLength >= 32) {
      let repeatedLength, numberOfRepeats, j;
      switch (codeLength) {
        case 32:
          if (i === 0) {
            throw new Jbig2Error("no previous value in symbol ID table");
          }
          numberOfRepeats = reader.readBits(2) + 3;
          repeatedLength = codes[i - 1].prefixLength;
          break;
        case 33:
          numberOfRepeats = reader.readBits(3) + 3;
          repeatedLength = 0;
          break;
        case 34:
          numberOfRepeats = reader.readBits(7) + 11;
          repeatedLength = 0;
          break;
        default:
          throw new Jbig2Error("invalid code length in symbol ID table");
      }
      for (j = 0; j < numberOfRepeats; j++) {
        codes.push(new HuffmanLine([i, repeatedLength, 0, 0]));
        i++;
      }
    } else {
      codes.push(new HuffmanLine([i, codeLength, 0, 0]));
      i++;
    }
  }
  reader.byteAlign();
  const symbolIDTable = new HuffmanTable(codes, false);
  let customIndex = 0,
    tableFirstS,
    tableDeltaS,
    tableDeltaT;
  switch (textRegion.huffmanFS) {
    case 0:
    case 1:
      tableFirstS = getStandardTable(textRegion.huffmanFS + 6);
      break;
    case 3:
      tableFirstS = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman FS selector");
  }
  switch (textRegion.huffmanDS) {
    case 0:
    case 1:
    case 2:
      tableDeltaS = getStandardTable(textRegion.huffmanDS + 8);
      break;
    case 3:
      tableDeltaS = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DS selector");
  }
  switch (textRegion.huffmanDT) {
    case 0:
    case 1:
    case 2:
      tableDeltaT = getStandardTable(textRegion.huffmanDT + 11);
      break;
    case 3:
      tableDeltaT = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DT selector");
  }
  if (textRegion.refinement) {
    throw new Jbig2Error("refinement with Huffman is not supported");
  }
  return {
    symbolIDTable,
    tableFirstS,
    tableDeltaS,
    tableDeltaT
  };
}
function getSymbolDictionaryHuffmanTables(dictionary, referredTo, customTables) {
  let customIndex = 0,
    tableDeltaHeight,
    tableDeltaWidth;
  switch (dictionary.huffmanDHSelector) {
    case 0:
    case 1:
      tableDeltaHeight = getStandardTable(dictionary.huffmanDHSelector + 4);
      break;
    case 3:
      tableDeltaHeight = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DH selector");
  }
  switch (dictionary.huffmanDWSelector) {
    case 0:
    case 1:
      tableDeltaWidth = getStandardTable(dictionary.huffmanDWSelector + 2);
      break;
    case 3:
      tableDeltaWidth = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DW selector");
  }
  let tableBitmapSize, tableAggregateInstances;
  if (dictionary.bitmapSizeSelector) {
    tableBitmapSize = getCustomHuffmanTable(customIndex, referredTo, customTables);
    customIndex++;
  } else {
    tableBitmapSize = getStandardTable(1);
  }
  if (dictionary.aggregationInstancesSelector) {
    tableAggregateInstances = getCustomHuffmanTable(customIndex, referredTo, customTables);
  } else {
    tableAggregateInstances = getStandardTable(1);
  }
  return {
    tableDeltaHeight,
    tableDeltaWidth,
    tableBitmapSize,
    tableAggregateInstances
  };
}
function readUncompressedBitmap(reader, width, height) {
  const bitmap = [];
  for (let y = 0; y < height; y++) {
    const row = new Uint8Array(width);
    bitmap.push(row);
    for (let x = 0; x < width; x++) {
      row[x] = reader.readBit();
    }
    reader.byteAlign();
  }
  return bitmap;
}
function decodeMMRBitmap(input, width, height, endOfBlock) {
  const params = {
    K: -1,
    Columns: width,
    Rows: height,
    BlackIs1: true,
    EndOfBlock: endOfBlock
  };
  const decoder = new CCITTFaxDecoder(input, params);
  const bitmap = [];
  let currentByte,
    eof = false;
  for (let y = 0; y < height; y++) {
    const row = new Uint8Array(width);
    bitmap.push(row);
    let shift = -1;
    for (let x = 0; x < width; x++) {
      if (shift < 0) {
        currentByte = decoder.readNextChar();
        if (currentByte === -1) {
          currentByte = 0;
          eof = true;
        }
        shift = 7;
      }
      row[x] = currentByte >> shift & 1;
      shift--;
    }
  }
  if (endOfBlock && !eof) {
    const lookForEOFLimit = 5;
    for (let i = 0; i < lookForEOFLimit; i++) {
      if (decoder.readNextChar() === -1) {
        break;
      }
    }
  }
  return bitmap;
}
class Jbig2Image {
  parseChunks(chunks) {
    return parseJbig2Chunks(chunks);
  }
  parse(data) {
    throw new Error("Not implemented: Jbig2Image.parse");
  }
}

;// ./src/core/jbig2_stream.js





class Jbig2Stream extends DecodeStream {
  constructor(stream, maybeLength, params) {
    super(maybeLength);
    this.stream = stream;
    this.dict = stream.dict;
    this.maybeLength = maybeLength;
    this.params = params;
  }
  get bytes() {
    return shadow(this, "bytes", this.stream.getBytes(this.maybeLength));
  }
  ensureBuffer(requested) {}
  readBlock() {
    this.decodeImage();
  }
  decodeImage(bytes) {
    if (this.eof) {
      return this.buffer;
    }
    bytes ||= this.bytes;
    const jbig2Image = new Jbig2Image();
    const chunks = [];
    if (this.params instanceof Dict) {
      const globalsStream = this.params.get("JBIG2Globals");
      if (globalsStream instanceof BaseStream) {
        const globals = globalsStream.getBytes();
        chunks.push({
          data: globals,
          start: 0,
          end: globals.length
        });
      }
    }
    chunks.push({
      data: bytes,
      start: 0,
      end: bytes.length
    });
    const data = jbig2Image.parseChunks(chunks);
    const dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
      data[i] ^= 0xff;
    }
    this.buffer = data;
    this.bufferLength = dataLength;
    this.eof = true;
    return this.buffer;
  }
  get canAsyncDecodeImageFromBuffer() {
    return this.stream.isAsync;
  }
}

;// ./src/core/jpx_stream.js



class JpxStream extends DecodeStream {
  constructor(stream, maybeLength, params) {
    super(maybeLength);
    this.stream = stream;
    this.dict = stream.dict;
    this.maybeLength = maybeLength;
    this.params = params;
  }
  get bytes() {
    return shadow(this, "bytes", this.stream.getBytes(this.maybeLength));
  }
  ensureBuffer(requested) {}
  readBlock(decoderOptions) {
    unreachable("JpxStream.readBlock");
  }
  get isAsyncDecoder() {
    return true;
  }
  async decodeImage(bytes, decoderOptions) {
    if (this.eof) {
      return this.buffer;
    }
    bytes ||= this.bytes;
    this.buffer = await JpxImage.decode(bytes, decoderOptions);
    this.bufferLength = this.buffer.length;
    this.eof = true;
    return this.buffer;
  }
  get canAsyncDecodeImageFromBuffer() {
    return this.stream.isAsync;
  }
}

;// ./src/core/lzw_stream.js

class LZWStream extends DecodeStream {
  constructor(str, maybeLength, earlyChange) {
    super(maybeLength);
    this.str = str;
    this.dict = str.dict;
    this.cachedData = 0;
    this.bitsCached = 0;
    const maxLzwDictionarySize = 4096;
    const lzwState = {
      earlyChange,
      codeLength: 9,
      nextCode: 258,
      dictionaryValues: new Uint8Array(maxLzwDictionarySize),
      dictionaryLengths: new Uint16Array(maxLzwDictionarySize),
      dictionaryPrevCodes: new Uint16Array(maxLzwDictionarySize),
      currentSequence: new Uint8Array(maxLzwDictionarySize),
      currentSequenceLength: 0
    };
    for (let i = 0; i < 256; ++i) {
      lzwState.dictionaryValues[i] = i;
      lzwState.dictionaryLengths[i] = 1;
    }
    this.lzwState = lzwState;
  }
  readBits(n) {
    let bitsCached = this.bitsCached;
    let cachedData = this.cachedData;
    while (bitsCached < n) {
      const c = this.str.getByte();
      if (c === -1) {
        this.eof = true;
        return null;
      }
      cachedData = cachedData << 8 | c;
      bitsCached += 8;
    }
    this.bitsCached = bitsCached -= n;
    this.cachedData = cachedData;
    this.lastCode = null;
    return cachedData >>> bitsCached & (1 << n) - 1;
  }
  readBlock() {
    const blockSize = 512,
      decodedSizeDelta = blockSize;
    let estimatedDecodedSize = blockSize * 2;
    let i, j, q;
    const lzwState = this.lzwState;
    if (!lzwState) {
      return;
    }
    const earlyChange = lzwState.earlyChange;
    let nextCode = lzwState.nextCode;
    const dictionaryValues = lzwState.dictionaryValues;
    const dictionaryLengths = lzwState.dictionaryLengths;
    const dictionaryPrevCodes = lzwState.dictionaryPrevCodes;
    let codeLength = lzwState.codeLength;
    let prevCode = lzwState.prevCode;
    const currentSequence = lzwState.currentSequence;
    let currentSequenceLength = lzwState.currentSequenceLength;
    let decodedLength = 0;
    let currentBufferLength = this.bufferLength;
    let buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
    for (i = 0; i < blockSize; i++) {
      const code = this.readBits(codeLength);
      const hasPrev = currentSequenceLength > 0;
      if (code < 256) {
        currentSequence[0] = code;
        currentSequenceLength = 1;
      } else if (code >= 258) {
        if (code < nextCode) {
          currentSequenceLength = dictionaryLengths[code];
          for (j = currentSequenceLength - 1, q = code; j >= 0; j--) {
            currentSequence[j] = dictionaryValues[q];
            q = dictionaryPrevCodes[q];
          }
        } else {
          currentSequence[currentSequenceLength++] = currentSequence[0];
        }
      } else if (code === 256) {
        codeLength = 9;
        nextCode = 258;
        currentSequenceLength = 0;
        continue;
      } else {
        this.eof = true;
        delete this.lzwState;
        break;
      }
      if (hasPrev) {
        dictionaryPrevCodes[nextCode] = prevCode;
        dictionaryLengths[nextCode] = dictionaryLengths[prevCode] + 1;
        dictionaryValues[nextCode] = currentSequence[0];
        nextCode++;
        codeLength = nextCode + earlyChange & nextCode + earlyChange - 1 ? codeLength : Math.min(Math.log(nextCode + earlyChange) / 0.6931471805599453 + 1, 12) | 0;
      }
      prevCode = code;
      decodedLength += currentSequenceLength;
      if (estimatedDecodedSize < decodedLength) {
        do {
          estimatedDecodedSize += decodedSizeDelta;
        } while (estimatedDecodedSize < decodedLength);
        buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
      }
      for (j = 0; j < currentSequenceLength; j++) {
        buffer[currentBufferLength++] = currentSequence[j];
      }
    }
    lzwState.nextCode = nextCode;
    lzwState.codeLength = codeLength;
    lzwState.prevCode = prevCode;
    lzwState.currentSequenceLength = currentSequenceLength;
    this.bufferLength = currentBufferLength;
  }
}

;// ./src/core/predictor_stream.js



class PredictorStream extends DecodeStream {
  constructor(str, maybeLength, params) {
    super(maybeLength);
    if (!(params instanceof Dict)) {
      return str;
    }
    const predictor = this.predictor = params.get("Predictor") || 1;
    if (predictor <= 1) {
      return str;
    }
    if (predictor !== 2 && (predictor < 10 || predictor > 15)) {
      throw new FormatError(`Unsupported predictor: ${predictor}`);
    }
    this.readBlock = predictor === 2 ? this.readBlockTiff : this.readBlockPng;
    this.str = str;
    this.dict = str.dict;
    const colors = this.colors = params.get("Colors") || 1;
    const bits = this.bits = params.get("BPC", "BitsPerComponent") || 8;
    const columns = this.columns = params.get("Columns") || 1;
    this.pixBytes = colors * bits + 7 >> 3;
    this.rowBytes = columns * colors * bits + 7 >> 3;
    return this;
  }
  readBlockTiff() {
    const rowBytes = this.rowBytes;
    const bufferLength = this.bufferLength;
    const buffer = this.ensureBuffer(bufferLength + rowBytes);
    const bits = this.bits;
    const colors = this.colors;
    const rawBytes = this.str.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    let inbuf = 0,
      outbuf = 0;
    let inbits = 0,
      outbits = 0;
    let pos = bufferLength;
    let i;
    if (bits === 1 && colors === 1) {
      for (i = 0; i < rowBytes; ++i) {
        let c = rawBytes[i] ^ inbuf;
        c ^= c >> 1;
        c ^= c >> 2;
        c ^= c >> 4;
        inbuf = (c & 1) << 7;
        buffer[pos++] = c;
      }
    } else if (bits === 8) {
      for (i = 0; i < colors; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; ++i) {
        buffer[pos] = buffer[pos - colors] + rawBytes[i];
        pos++;
      }
    } else if (bits === 16) {
      const bytesPerPixel = colors * 2;
      for (i = 0; i < bytesPerPixel; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; i += 2) {
        const sum = ((rawBytes[i] & 0xff) << 8) + (rawBytes[i + 1] & 0xff) + ((buffer[pos - bytesPerPixel] & 0xff) << 8) + (buffer[pos - bytesPerPixel + 1] & 0xff);
        buffer[pos++] = sum >> 8 & 0xff;
        buffer[pos++] = sum & 0xff;
      }
    } else {
      const compArray = new Uint8Array(colors + 1);
      const bitMask = (1 << bits) - 1;
      let j = 0,
        k = bufferLength;
      const columns = this.columns;
      for (i = 0; i < columns; ++i) {
        for (let kk = 0; kk < colors; ++kk) {
          if (inbits < bits) {
            inbuf = inbuf << 8 | rawBytes[j++] & 0xff;
            inbits += 8;
          }
          compArray[kk] = compArray[kk] + (inbuf >> inbits - bits) & bitMask;
          inbits -= bits;
          outbuf = outbuf << bits | compArray[kk];
          outbits += bits;
          if (outbits >= 8) {
            buffer[k++] = outbuf >> outbits - 8 & 0xff;
            outbits -= 8;
          }
        }
      }
      if (outbits > 0) {
        buffer[k++] = (outbuf << 8 - outbits) + (inbuf & (1 << 8 - outbits) - 1);
      }
    }
    this.bufferLength += rowBytes;
  }
  readBlockPng() {
    const rowBytes = this.rowBytes;
    const pixBytes = this.pixBytes;
    const predictor = this.str.getByte();
    const rawBytes = this.str.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    const bufferLength = this.bufferLength;
    const buffer = this.ensureBuffer(bufferLength + rowBytes);
    let prevRow = buffer.subarray(bufferLength - rowBytes, bufferLength);
    if (prevRow.length === 0) {
      prevRow = new Uint8Array(rowBytes);
    }
    let i,
      j = bufferLength,
      up,
      c;
    switch (predictor) {
      case 0:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        break;
      case 1:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = buffer[j - pixBytes] + rawBytes[i] & 0xff;
          j++;
        }
        break;
      case 2:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = prevRow[i] + rawBytes[i] & 0xff;
        }
        break;
      case 3:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = (prevRow[i] >> 1) + rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = (prevRow[i] + buffer[j - pixBytes] >> 1) + rawBytes[i] & 0xff;
          j++;
        }
        break;
      case 4:
        for (i = 0; i < pixBytes; ++i) {
          up = prevRow[i];
          c = rawBytes[i];
          buffer[j++] = up + c;
        }
        for (; i < rowBytes; ++i) {
          up = prevRow[i];
          const upLeft = prevRow[i - pixBytes];
          const left = buffer[j - pixBytes];
          const p = left + up - upLeft;
          let pa = p - left;
          if (pa < 0) {
            pa = -pa;
          }
          let pb = p - up;
          if (pb < 0) {
            pb = -pb;
          }
          let pc = p - upLeft;
          if (pc < 0) {
            pc = -pc;
          }
          c = rawBytes[i];
          if (pa <= pb && pa <= pc) {
            buffer[j++] = left + c;
          } else if (pb <= pc) {
            buffer[j++] = up + c;
          } else {
            buffer[j++] = upLeft + c;
          }
        }
        break;
      default:
        throw new FormatError(`Unsupported predictor: ${predictor}`);
    }
    this.bufferLength += rowBytes;
  }
}

;// ./src/core/run_length_stream.js

class RunLengthStream extends DecodeStream {
  constructor(str, maybeLength) {
    super(maybeLength);
    this.str = str;
    this.dict = str.dict;
  }
  readBlock() {
    const repeatHeader = this.str.getBytes(2);
    if (!repeatHeader || repeatHeader.length < 2 || repeatHeader[0] === 128) {
      this.eof = true;
      return;
    }
    let buffer;
    let bufferLength = this.bufferLength;
    let n = repeatHeader[0];
    if (n < 128) {
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer[bufferLength++] = repeatHeader[1];
      if (n > 0) {
        const source = this.str.getBytes(n);
        buffer.set(source, bufferLength);
        bufferLength += n;
      }
    } else {
      n = 257 - n;
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer.fill(repeatHeader[1], bufferLength, bufferLength + n);
      bufferLength += n;
    }
    this.bufferLength = bufferLength;
  }
}

;// ./src/core/parser.js














const MAX_LENGTH_TO_CACHE = 1000;
function getInlineImageCacheKey(bytes) {
  const strBuf = [],
    ii = bytes.length;
  let i = 0;
  while (i < ii - 1) {
    strBuf.push(bytes[i++] << 8 | bytes[i++]);
  }
  if (i < ii) {
    strBuf.push(bytes[i]);
  }
  return ii + "_" + String.fromCharCode.apply(null, strBuf);
}
class Parser {
  constructor({
    lexer,
    xref,
    allowStreams = false,
    recoveryMode = false
  }) {
    this.lexer = lexer;
    this.xref = xref;
    this.allowStreams = allowStreams;
    this.recoveryMode = recoveryMode;
    this.imageCache = Object.create(null);
    this._imageId = 0;
    this.refill();
  }
  refill() {
    this.buf1 = this.lexer.getObj();
    this.buf2 = this.lexer.getObj();
  }
  shift() {
    if (this.buf2 instanceof Cmd && this.buf2.cmd === "ID") {
      this.buf1 = this.buf2;
      this.buf2 = null;
    } else {
      this.buf1 = this.buf2;
      this.buf2 = this.lexer.getObj();
    }
  }
  tryShift() {
    try {
      this.shift();
      return true;
    } catch (e) {
      if (e instanceof MissingDataException) {
        throw e;
      }
      return false;
    }
  }
  getObj(cipherTransform = null) {
    const buf1 = this.buf1;
    this.shift();
    if (buf1 instanceof Cmd) {
      switch (buf1.cmd) {
        case "BI":
          return this.makeInlineImage(cipherTransform);
        case "[":
          const array = [];
          while (!isCmd(this.buf1, "]") && this.buf1 !== EOF) {
            array.push(this.getObj(cipherTransform));
          }
          if (this.buf1 === EOF) {
            if (this.recoveryMode) {
              return array;
            }
            throw new ParserEOFException("End of file inside array.");
          }
          this.shift();
          return array;
        case "<<":
          const dict = new Dict(this.xref);
          while (!isCmd(this.buf1, ">>") && this.buf1 !== EOF) {
            if (!(this.buf1 instanceof Name)) {
              info("Malformed dictionary: key must be a name object");
              this.shift();
              continue;
            }
            const key = this.buf1.name;
            this.shift();
            if (this.buf1 === EOF) {
              break;
            }
            dict.set(key, this.getObj(cipherTransform));
          }
          if (this.buf1 === EOF) {
            if (this.recoveryMode) {
              return dict;
            }
            throw new ParserEOFException("End of file inside dictionary.");
          }
          if (isCmd(this.buf2, "stream")) {
            return this.allowStreams ? this.makeStream(dict, cipherTransform) : dict;
          }
          this.shift();
          return dict;
        default:
          return buf1;
      }
    }
    if (Number.isInteger(buf1)) {
      if (Number.isInteger(this.buf1) && isCmd(this.buf2, "R")) {
        const ref = Ref.get(buf1, this.buf1);
        this.shift();
        this.shift();
        return ref;
      }
      return buf1;
    }
    if (typeof buf1 === "string") {
      if (cipherTransform) {
        return cipherTransform.decryptString(buf1);
      }
      return buf1;
    }
    return buf1;
  }
  findDefaultInlineStreamEnd(stream) {
    const E = 0x45,
      I = 0x49,
      SPACE = 0x20,
      LF = 0xa,
      CR = 0xd,
      NUL = 0x0;
    const {
        knownCommands
      } = this.lexer,
      startPos = stream.pos,
      n = 15;
    let state = 0,
      ch,
      maybeEIPos;
    while ((ch = stream.getByte()) !== -1) {
      if (state === 0) {
        state = ch === E ? 1 : 0;
      } else if (state === 1) {
        state = ch === I ? 2 : 0;
      } else {
        if (ch === SPACE || ch === LF || ch === CR) {
          maybeEIPos = stream.pos;
          const followingBytes = stream.peekBytes(n);
          const ii = followingBytes.length;
          if (ii === 0) {
            break;
          }
          for (let i = 0; i < ii; i++) {
            ch = followingBytes[i];
            if (ch === NUL && followingBytes[i + 1] !== NUL) {
              continue;
            }
            if (ch !== LF && ch !== CR && (ch < SPACE || ch > 0x7f)) {
              state = 0;
              break;
            }
          }
          if (state !== 2) {
            continue;
          }
          if (!knownCommands) {
            warn("findDefaultInlineStreamEnd - `lexer.knownCommands` is undefined.");
            continue;
          }
          const tmpLexer = new Lexer(new Stream(stream.peekBytes(5 * n)), knownCommands);
          tmpLexer._hexStringWarn = () => {};
          let numArgs = 0;
          while (true) {
            const nextObj = tmpLexer.getObj();
            if (nextObj === EOF) {
              state = 0;
              break;
            }
            if (nextObj instanceof Cmd) {
              const knownCommand = knownCommands[nextObj.cmd];
              if (!knownCommand) {
                state = 0;
                break;
              } else if (knownCommand.variableArgs ? numArgs <= knownCommand.numArgs : numArgs === knownCommand.numArgs) {
                break;
              }
              numArgs = 0;
              continue;
            }
            numArgs++;
          }
          if (state === 2) {
            break;
          }
        } else {
          state = 0;
        }
      }
    }
    if (ch === -1) {
      warn("findDefaultInlineStreamEnd: " + "Reached the end of the stream without finding a valid EI marker");
      if (maybeEIPos) {
        warn('... trying to recover by using the last "EI" occurrence.');
        stream.skip(-(stream.pos - maybeEIPos));
      }
    }
    let endOffset = 4;
    stream.skip(-endOffset);
    ch = stream.peekByte();
    stream.skip(endOffset);
    if (!isWhiteSpace(ch)) {
      endOffset--;
    }
    return stream.pos - endOffset - startPos;
  }
  findDCTDecodeInlineStreamEnd(stream) {
    const startPos = stream.pos;
    let foundEOI = false,
      b,
      markerLength;
    while ((b = stream.getByte()) !== -1) {
      if (b !== 0xff) {
        continue;
      }
      switch (stream.getByte()) {
        case 0x00:
          break;
        case 0xff:
          stream.skip(-1);
          break;
        case 0xd9:
          foundEOI = true;
          break;
        case 0xc0:
        case 0xc1:
        case 0xc2:
        case 0xc3:
        case 0xc5:
        case 0xc6:
        case 0xc7:
        case 0xc9:
        case 0xca:
        case 0xcb:
        case 0xcd:
        case 0xce:
        case 0xcf:
        case 0xc4:
        case 0xcc:
        case 0xda:
        case 0xdb:
        case 0xdc:
        case 0xdd:
        case 0xde:
        case 0xdf:
        case 0xe0:
        case 0xe1:
        case 0xe2:
        case 0xe3:
        case 0xe4:
        case 0xe5:
        case 0xe6:
        case 0xe7:
        case 0xe8:
        case 0xe9:
        case 0xea:
        case 0xeb:
        case 0xec:
        case 0xed:
        case 0xee:
        case 0xef:
        case 0xfe:
          markerLength = stream.getUint16();
          if (markerLength > 2) {
            stream.skip(markerLength - 2);
          } else {
            stream.skip(-2);
          }
          break;
      }
      if (foundEOI) {
        break;
      }
    }
    const length = stream.pos - startPos;
    if (b === -1) {
      warn("Inline DCTDecode image stream: " + "EOI marker not found, searching for /EI/ instead.");
      stream.skip(-length);
      return this.findDefaultInlineStreamEnd(stream);
    }
    this.inlineStreamSkipEI(stream);
    return length;
  }
  findASCII85DecodeInlineStreamEnd(stream) {
    const TILDE = 0x7e,
      GT = 0x3e;
    const startPos = stream.pos;
    let ch;
    while ((ch = stream.getByte()) !== -1) {
      if (ch === TILDE) {
        const tildePos = stream.pos;
        ch = stream.peekByte();
        while (isWhiteSpace(ch)) {
          stream.skip();
          ch = stream.peekByte();
        }
        if (ch === GT) {
          stream.skip();
          break;
        }
        if (stream.pos > tildePos) {
          const maybeEI = stream.peekBytes(2);
          if (maybeEI[0] === 0x45 && maybeEI[1] === 0x49) {
            break;
          }
        }
      }
    }
    const length = stream.pos - startPos;
    if (ch === -1) {
      warn("Inline ASCII85Decode image stream: " + "EOD marker not found, searching for /EI/ instead.");
      stream.skip(-length);
      return this.findDefaultInlineStreamEnd(stream);
    }
    this.inlineStreamSkipEI(stream);
    return length;
  }
  findASCIIHexDecodeInlineStreamEnd(stream) {
    const GT = 0x3e;
    const startPos = stream.pos;
    let ch;
    while ((ch = stream.getByte()) !== -1) {
      if (ch === GT) {
        break;
      }
    }
    const length = stream.pos - startPos;
    if (ch === -1) {
      warn("Inline ASCIIHexDecode image stream: " + "EOD marker not found, searching for /EI/ instead.");
      stream.skip(-length);
      return this.findDefaultInlineStreamEnd(stream);
    }
    this.inlineStreamSkipEI(stream);
    return length;
  }
  inlineStreamSkipEI(stream) {
    const E = 0x45,
      I = 0x49;
    let state = 0,
      ch;
    while ((ch = stream.getByte()) !== -1) {
      if (state === 0) {
        state = ch === E ? 1 : 0;
      } else if (state === 1) {
        state = ch === I ? 2 : 0;
      } else if (state === 2) {
        break;
      }
    }
  }
  makeInlineImage(cipherTransform) {
    const lexer = this.lexer;
    const stream = lexer.stream;
    const dictMap = Object.create(null);
    let dictLength;
    while (!isCmd(this.buf1, "ID") && this.buf1 !== EOF) {
      if (!(this.buf1 instanceof Name)) {
        throw new FormatError("Dictionary key must be a name object");
      }
      const key = this.buf1.name;
      this.shift();
      if (this.buf1 === EOF) {
        break;
      }
      dictMap[key] = this.getObj(cipherTransform);
    }
    if (lexer.beginInlineImagePos !== -1) {
      dictLength = stream.pos - lexer.beginInlineImagePos;
    }
    const filter = this.xref.fetchIfRef(dictMap.F || dictMap.Filter);
    let filterName;
    if (filter instanceof Name) {
      filterName = filter.name;
    } else if (Array.isArray(filter)) {
      const filterZero = this.xref.fetchIfRef(filter[0]);
      if (filterZero instanceof Name) {
        filterName = filterZero.name;
      }
    }
    const startPos = stream.pos;
    let length;
    switch (filterName) {
      case "DCT":
      case "DCTDecode":
        length = this.findDCTDecodeInlineStreamEnd(stream);
        break;
      case "A85":
      case "ASCII85Decode":
        length = this.findASCII85DecodeInlineStreamEnd(stream);
        break;
      case "AHx":
      case "ASCIIHexDecode":
        length = this.findASCIIHexDecodeInlineStreamEnd(stream);
        break;
      default:
        length = this.findDefaultInlineStreamEnd(stream);
    }
    let cacheKey;
    if (length < MAX_LENGTH_TO_CACHE && dictLength > 0) {
      const initialStreamPos = stream.pos;
      stream.pos = lexer.beginInlineImagePos;
      cacheKey = getInlineImageCacheKey(stream.getBytes(dictLength + length));
      stream.pos = initialStreamPos;
      const cacheEntry = this.imageCache[cacheKey];
      if (cacheEntry !== undefined) {
        this.buf2 = Cmd.get("EI");
        this.shift();
        cacheEntry.reset();
        return cacheEntry;
      }
    }
    const dict = new Dict(this.xref);
    for (const key in dictMap) {
      dict.set(key, dictMap[key]);
    }
    let imageStream = stream.makeSubStream(startPos, length, dict);
    if (cipherTransform) {
      imageStream = cipherTransform.createStream(imageStream, length);
    }
    imageStream = this.filter(imageStream, dict, length);
    imageStream.dict = dict;
    if (cacheKey !== undefined) {
      imageStream.cacheKey = `inline_img_${++this._imageId}`;
      this.imageCache[cacheKey] = imageStream;
    }
    this.buf2 = Cmd.get("EI");
    this.shift();
    return imageStream;
  }
  #findStreamLength(startPos) {
    const {
      stream
    } = this.lexer;
    stream.pos = startPos;
    const SCAN_BLOCK_LENGTH = 2048;
    const signatureLength = "endstream".length;
    const END_SIGNATURE = new Uint8Array([0x65, 0x6e, 0x64]);
    const endLength = END_SIGNATURE.length;
    const PARTIAL_SIGNATURE = [new Uint8Array([0x73, 0x74, 0x72, 0x65, 0x61, 0x6d]), new Uint8Array([0x73, 0x74, 0x65, 0x61, 0x6d]), new Uint8Array([0x73, 0x74, 0x72, 0x65, 0x61])];
    const normalLength = signatureLength - endLength;
    while (stream.pos < stream.end) {
      const scanBytes = stream.peekBytes(SCAN_BLOCK_LENGTH);
      const scanLength = scanBytes.length - signatureLength;
      if (scanLength <= 0) {
        break;
      }
      let pos = 0;
      while (pos < scanLength) {
        let j = 0;
        while (j < endLength && scanBytes[pos + j] === END_SIGNATURE[j]) {
          j++;
        }
        if (j >= endLength) {
          let found = false;
          for (const part of PARTIAL_SIGNATURE) {
            const partLen = part.length;
            let k = 0;
            while (k < partLen && scanBytes[pos + j + k] === part[k]) {
              k++;
            }
            if (k >= normalLength) {
              found = true;
              break;
            }
            if (k >= partLen) {
              const lastByte = scanBytes[pos + j + k];
              if (isWhiteSpace(lastByte)) {
                info(`Found "${bytesToString([...END_SIGNATURE, ...part])}" when ` + "searching for endstream command.");
                found = true;
              }
              break;
            }
          }
          if (found) {
            stream.pos += pos;
            return stream.pos - startPos;
          }
        }
        pos++;
      }
      stream.pos += scanLength;
    }
    return -1;
  }
  makeStream(dict, cipherTransform) {
    const lexer = this.lexer;
    let stream = lexer.stream;
    lexer.skipToNextLine();
    const startPos = stream.pos - 1;
    let length = dict.get("Length");
    if (!Number.isInteger(length)) {
      info(`Bad length "${length && length.toString()}" in stream.`);
      length = 0;
    }
    stream.pos = startPos + length;
    lexer.nextChar();
    if (this.tryShift() && isCmd(this.buf2, "endstream")) {
      this.shift();
    } else {
      length = this.#findStreamLength(startPos);
      if (length < 0) {
        throw new FormatError("Missing endstream command.");
      }
      lexer.nextChar();
      this.shift();
      this.shift();
    }
    this.shift();
    stream = stream.makeSubStream(startPos, length, dict);
    if (cipherTransform) {
      stream = cipherTransform.createStream(stream, length);
    }
    stream = this.filter(stream, dict, length);
    stream.dict = dict;
    return stream;
  }
  filter(stream, dict, length) {
    let filter = dict.get("F", "Filter");
    let params = dict.get("DP", "DecodeParms");
    if (filter instanceof Name) {
      if (Array.isArray(params)) {
        warn("/DecodeParms should not be an Array, when /Filter is a Name.");
      }
      return this.makeFilter(stream, filter.name, length, params);
    }
    let maybeLength = length;
    if (Array.isArray(filter)) {
      const filterArray = filter;
      const paramsArray = params;
      for (let i = 0, ii = filterArray.length; i < ii; ++i) {
        filter = this.xref.fetchIfRef(filterArray[i]);
        if (!(filter instanceof Name)) {
          throw new FormatError(`Bad filter name "${filter}"`);
        }
        params = null;
        if (Array.isArray(paramsArray) && i in paramsArray) {
          params = this.xref.fetchIfRef(paramsArray[i]);
        }
        stream = this.makeFilter(stream, filter.name, maybeLength, params);
        maybeLength = null;
      }
    }
    return stream;
  }
  makeFilter(stream, name, maybeLength, params) {
    if (maybeLength === 0) {
      warn(`Empty "${name}" stream.`);
      return new NullStream();
    }
    try {
      switch (name) {
        case "Fl":
        case "FlateDecode":
          if (params) {
            return new PredictorStream(new FlateStream(stream, maybeLength), maybeLength, params);
          }
          return new FlateStream(stream, maybeLength);
        case "LZW":
        case "LZWDecode":
          let earlyChange = 1;
          if (params) {
            if (params.has("EarlyChange")) {
              earlyChange = params.get("EarlyChange");
            }
            return new PredictorStream(new LZWStream(stream, maybeLength, earlyChange), maybeLength, params);
          }
          return new LZWStream(stream, maybeLength, earlyChange);
        case "DCT":
        case "DCTDecode":
          return new JpegStream(stream, maybeLength, params);
        case "JPX":
        case "JPXDecode":
          return new JpxStream(stream, maybeLength, params);
        case "A85":
        case "ASCII85Decode":
          return new Ascii85Stream(stream, maybeLength);
        case "AHx":
        case "ASCIIHexDecode":
          return new AsciiHexStream(stream, maybeLength);
        case "CCF":
        case "CCITTFaxDecode":
          return new CCITTFaxStream(stream, maybeLength, params);
        case "RL":
        case "RunLengthDecode":
          return new RunLengthStream(stream, maybeLength);
        case "JBIG2Decode":
          return new Jbig2Stream(stream, maybeLength, params);
      }
      warn(`Filter "${name}" is not supported.`);
      return stream;
    } catch (ex) {
      if (ex instanceof MissingDataException) {
        throw ex;
      }
      warn(`Invalid stream: "${ex}"`);
      return new NullStream();
    }
  }
}
const specialChars = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function toHexDigit(ch) {
  if (ch >= 0x30 && ch <= 0x39) {
    return ch & 0x0f;
  }
  if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
    return (ch & 0x0f) + 9;
  }
  return -1;
}
class Lexer {
  constructor(stream, knownCommands = null) {
    this.stream = stream;
    this.nextChar();
    this.strBuf = [];
    this.knownCommands = knownCommands;
    this._hexStringNumWarn = 0;
    this.beginInlineImagePos = -1;
  }
  nextChar() {
    return this.currentChar = this.stream.getByte();
  }
  peekChar() {
    return this.stream.peekByte();
  }
  getNumber() {
    let ch = this.currentChar;
    let eNotation = false;
    let divideBy = 0;
    let sign = 1;
    if (ch === 0x2d) {
      sign = -1;
      ch = this.nextChar();
      if (ch === 0x2d) {
        ch = this.nextChar();
      }
    } else if (ch === 0x2b) {
      ch = this.nextChar();
    }
    if (ch === 0x0a || ch === 0x0d) {
      do {
        ch = this.nextChar();
      } while (ch === 0x0a || ch === 0x0d);
    }
    if (ch === 0x2e) {
      divideBy = 10;
      ch = this.nextChar();
    }
    if (ch < 0x30 || ch > 0x39) {
      const msg = `Invalid number: ${String.fromCharCode(ch)} (charCode ${ch})`;
      if (isWhiteSpace(ch) || ch === 0x28 || ch === 0x3c || ch === -1) {
        info(`Lexer.getNumber - "${msg}".`);
        return 0;
      }
      throw new FormatError(msg);
    }
    let baseValue = ch - 0x30;
    let powerValue = 0;
    let powerValueSign = 1;
    while ((ch = this.nextChar()) >= 0) {
      if (ch >= 0x30 && ch <= 0x39) {
        const currentDigit = ch - 0x30;
        if (eNotation) {
          powerValue = powerValue * 10 + currentDigit;
        } else {
          if (divideBy !== 0) {
            divideBy *= 10;
          }
          baseValue = baseValue * 10 + currentDigit;
        }
      } else if (ch === 0x2e) {
        if (divideBy === 0) {
          divideBy = 1;
        } else {
          break;
        }
      } else if (ch === 0x2d) {
        warn("Badly formatted number: minus sign in the middle");
      } else if (ch === 0x45 || ch === 0x65) {
        ch = this.peekChar();
        if (ch === 0x2b || ch === 0x2d) {
          powerValueSign = ch === 0x2d ? -1 : 1;
          this.nextChar();
        } else if (ch < 0x30 || ch > 0x39) {
          break;
        }
        eNotation = true;
      } else {
        break;
      }
    }
    if (divideBy !== 0) {
      baseValue /= divideBy;
    }
    if (eNotation) {
      baseValue *= 10 ** (powerValueSign * powerValue);
    }
    return sign * baseValue;
  }
  getString() {
    let numParen = 1;
    let done = false;
    const strBuf = this.strBuf;
    strBuf.length = 0;
    let ch = this.nextChar();
    while (true) {
      let charBuffered = false;
      switch (ch | 0) {
        case -1:
          warn("Unterminated string");
          done = true;
          break;
        case 0x28:
          ++numParen;
          strBuf.push("(");
          break;
        case 0x29:
          if (--numParen === 0) {
            this.nextChar();
            done = true;
          } else {
            strBuf.push(")");
          }
          break;
        case 0x5c:
          ch = this.nextChar();
          switch (ch) {
            case -1:
              warn("Unterminated string");
              done = true;
              break;
            case 0x6e:
              strBuf.push("\n");
              break;
            case 0x72:
              strBuf.push("\r");
              break;
            case 0x74:
              strBuf.push("\t");
              break;
            case 0x62:
              strBuf.push("\b");
              break;
            case 0x66:
              strBuf.push("\f");
              break;
            case 0x5c:
            case 0x28:
            case 0x29:
              strBuf.push(String.fromCharCode(ch));
              break;
            case 0x30:
            case 0x31:
            case 0x32:
            case 0x33:
            case 0x34:
            case 0x35:
            case 0x36:
            case 0x37:
              let x = ch & 0x0f;
              ch = this.nextChar();
              charBuffered = true;
              if (ch >= 0x30 && ch <= 0x37) {
                x = (x << 3) + (ch & 0x0f);
                ch = this.nextChar();
                if (ch >= 0x30 && ch <= 0x37) {
                  charBuffered = false;
                  x = (x << 3) + (ch & 0x0f);
                }
              }
              strBuf.push(String.fromCharCode(x));
              break;
            case 0x0d:
              if (this.peekChar() === 0x0a) {
                this.nextChar();
              }
              break;
            case 0x0a:
              break;
            default:
              strBuf.push(String.fromCharCode(ch));
              break;
          }
          break;
        default:
          strBuf.push(String.fromCharCode(ch));
          break;
      }
      if (done) {
        break;
      }
      if (!charBuffered) {
        ch = this.nextChar();
      }
    }
    return strBuf.join("");
  }
  getName() {
    let ch, previousCh;
    const strBuf = this.strBuf;
    strBuf.length = 0;
    while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
      if (ch === 0x23) {
        ch = this.nextChar();
        if (specialChars[ch]) {
          warn("Lexer_getName: " + "NUMBER SIGN (#) should be followed by a hexadecimal number.");
          strBuf.push("#");
          break;
        }
        const x = toHexDigit(ch);
        if (x !== -1) {
          previousCh = ch;
          ch = this.nextChar();
          const x2 = toHexDigit(ch);
          if (x2 === -1) {
            warn(`Lexer_getName: Illegal digit (${String.fromCharCode(ch)}) ` + "in hexadecimal number.");
            strBuf.push("#", String.fromCharCode(previousCh));
            if (specialChars[ch]) {
              break;
            }
            strBuf.push(String.fromCharCode(ch));
            continue;
          }
          strBuf.push(String.fromCharCode(x << 4 | x2));
        } else {
          strBuf.push("#", String.fromCharCode(ch));
        }
      } else {
        strBuf.push(String.fromCharCode(ch));
      }
    }
    if (strBuf.length > 127) {
      warn(`Name token is longer than allowed by the spec: ${strBuf.length}`);
    }
    return Name.get(strBuf.join(""));
  }
  _hexStringWarn(ch) {
    const MAX_HEX_STRING_NUM_WARN = 5;
    if (this._hexStringNumWarn++ === MAX_HEX_STRING_NUM_WARN) {
      warn("getHexString - ignoring additional invalid characters.");
      return;
    }
    if (this._hexStringNumWarn > MAX_HEX_STRING_NUM_WARN) {
      return;
    }
    warn(`getHexString - ignoring invalid character: ${ch}`);
  }
  getHexString() {
    const strBuf = this.strBuf;
    strBuf.length = 0;
    let ch = this.currentChar;
    let firstDigit = -1,
      digit = -1;
    this._hexStringNumWarn = 0;
    while (true) {
      if (ch < 0) {
        warn("Unterminated hex string");
        break;
      } else if (ch === 0x3e) {
        this.nextChar();
        break;
      } else if (specialChars[ch] === 1) {
        ch = this.nextChar();
        continue;
      } else {
        digit = toHexDigit(ch);
        if (digit === -1) {
          this._hexStringWarn(ch);
        } else if (firstDigit === -1) {
          firstDigit = digit;
        } else {
          strBuf.push(String.fromCharCode(firstDigit << 4 | digit));
          firstDigit = -1;
        }
        ch = this.nextChar();
      }
    }
    if (firstDigit !== -1) {
      strBuf.push(String.fromCharCode(firstDigit << 4));
    }
    return strBuf.join("");
  }
  getObj() {
    let comment = false;
    let ch = this.currentChar;
    while (true) {
      if (ch < 0) {
        return EOF;
      }
      if (comment) {
        if (ch === 0x0a || ch === 0x0d) {
          comment = false;
        }
      } else if (ch === 0x25) {
        comment = true;
      } else if (specialChars[ch] !== 1) {
        break;
      }
      ch = this.nextChar();
    }
    switch (ch | 0) {
      case 0x30:
      case 0x31:
      case 0x32:
      case 0x33:
      case 0x34:
      case 0x35:
      case 0x36:
      case 0x37:
      case 0x38:
      case 0x39:
      case 0x2b:
      case 0x2d:
      case 0x2e:
        return this.getNumber();
      case 0x28:
        return this.getString();
      case 0x2f:
        return this.getName();
      case 0x5b:
        this.nextChar();
        return Cmd.get("[");
      case 0x5d:
        this.nextChar();
        return Cmd.get("]");
      case 0x3c:
        ch = this.nextChar();
        if (ch === 0x3c) {
          this.nextChar();
          return Cmd.get("<<");
        }
        return this.getHexString();
      case 0x3e:
        ch = this.nextChar();
        if (ch === 0x3e) {
          this.nextChar();
          return Cmd.get(">>");
        }
        return Cmd.get(">");
      case 0x7b:
        this.nextChar();
        return Cmd.get("{");
      case 0x7d:
        this.nextChar();
        return Cmd.get("}");
      case 0x29:
        this.nextChar();
        throw new FormatError(`Illegal character: ${ch}`);
    }
    let str = String.fromCharCode(ch);
    if (ch < 0x20 || ch > 0x7f) {
      const nextCh = this.peekChar();
      if (nextCh >= 0x20 && nextCh <= 0x7f) {
        this.nextChar();
        return Cmd.get(str);
      }
    }
    const knownCommands = this.knownCommands;
    let knownCommandFound = knownCommands?.[str] !== undefined;
    while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
      const possibleCommand = str + String.fromCharCode(ch);
      if (knownCommandFound && knownCommands[possibleCommand] === undefined) {
        break;
      }
      if (str.length === 128) {
        throw new FormatError(`Command token too long: ${str.length}`);
      }
      str = possibleCommand;
      knownCommandFound = knownCommands?.[str] !== undefined;
    }
    if (str === "true") {
      return true;
    }
    if (str === "false") {
      return false;
    }
    if (str === "null") {
      return null;
    }
    if (str === "BI") {
      this.beginInlineImagePos = this.stream.pos;
    }
    return Cmd.get(str);
  }
  skipToNextLine() {
    let ch = this.currentChar;
    while (ch >= 0) {
      if (ch === 0x0d) {
        ch = this.nextChar();
        if (ch === 0x0a) {
          this.nextChar();
        }
        break;
      } else if (ch === 0x0a) {
        this.nextChar();
        break;
      }
      ch = this.nextChar();
    }
  }
}
class Linearization {
  static create(stream) {
    function getInt(linDict, name, allowZeroValue = false) {
      const obj = linDict.get(name);
      if (Number.isInteger(obj) && (allowZeroValue ? obj >= 0 : obj > 0)) {
        return obj;
      }
      throw new Error(`The "${name}" parameter in the linearization ` + "dictionary is invalid.");
    }
    function getHints(linDict) {
      const hints = linDict.get("H");
      let hintsLength;
      if (Array.isArray(hints) && ((hintsLength = hints.length) === 2 || hintsLength === 4)) {
        for (let index = 0; index < hintsLength; index++) {
          const hint = hints[index];
          if (!(Number.isInteger(hint) && hint > 0)) {
            throw new Error(`Hint (${index}) in the linearization dictionary is invalid.`);
          }
        }
        return hints;
      }
      throw new Error("Hint array in the linearization dictionary is invalid.");
    }
    const parser = new Parser({
      lexer: new Lexer(stream),
      xref: null
    });
    const obj1 = parser.getObj();
    const obj2 = parser.getObj();
    const obj3 = parser.getObj();
    const linDict = parser.getObj();
    let obj, length;
    if (!(Number.isInteger(obj1) && Number.isInteger(obj2) && isCmd(obj3, "obj") && linDict instanceof Dict && typeof (obj = linDict.get("Linearized")) === "number" && obj > 0)) {
      return null;
    } else if ((length = getInt(linDict, "L")) !== stream.length) {
      throw new Error('The "L" parameter in the linearization dictionary ' + "does not equal the stream length.");
    }
    return {
      length,
      hints: getHints(linDict),
      objectNumberFirst: getInt(linDict, "O"),
      endFirst: getInt(linDict, "E"),
      numPages: getInt(linDict, "N"),
      mainXRefEntriesOffset: getInt(linDict, "T"),
      pageFirst: linDict.has("P") ? getInt(linDict, "P", true) : 0
    };
  }
}

;// ./src/core/cmap.js







const BUILT_IN_CMAPS = ["Adobe-GB1-UCS2", "Adobe-CNS1-UCS2", "Adobe-Japan1-UCS2", "Adobe-Korea1-UCS2", "78-EUC-H", "78-EUC-V", "78-H", "78-RKSJ-H", "78-RKSJ-V", "78-V", "78ms-RKSJ-H", "78ms-RKSJ-V", "83pv-RKSJ-H", "90ms-RKSJ-H", "90ms-RKSJ-V", "90msp-RKSJ-H", "90msp-RKSJ-V", "90pv-RKSJ-H", "90pv-RKSJ-V", "Add-H", "Add-RKSJ-H", "Add-RKSJ-V", "Add-V", "Adobe-CNS1-0", "Adobe-CNS1-1", "Adobe-CNS1-2", "Adobe-CNS1-3", "Adobe-CNS1-4", "Adobe-CNS1-5", "Adobe-CNS1-6", "Adobe-GB1-0", "Adobe-GB1-1", "Adobe-GB1-2", "Adobe-GB1-3", "Adobe-GB1-4", "Adobe-GB1-5", "Adobe-Japan1-0", "Adobe-Japan1-1", "Adobe-Japan1-2", "Adobe-Japan1-3", "Adobe-Japan1-4", "Adobe-Japan1-5", "Adobe-Japan1-6", "Adobe-Korea1-0", "Adobe-Korea1-1", "Adobe-Korea1-2", "B5-H", "B5-V", "B5pc-H", "B5pc-V", "CNS-EUC-H", "CNS-EUC-V", "CNS1-H", "CNS1-V", "CNS2-H", "CNS2-V", "ETHK-B5-H", "ETHK-B5-V", "ETen-B5-H", "ETen-B5-V", "ETenms-B5-H", "ETenms-B5-V", "EUC-H", "EUC-V", "Ext-H", "Ext-RKSJ-H", "Ext-RKSJ-V", "Ext-V", "GB-EUC-H", "GB-EUC-V", "GB-H", "GB-V", "GBK-EUC-H", "GBK-EUC-V", "GBK2K-H", "GBK2K-V", "GBKp-EUC-H", "GBKp-EUC-V", "GBT-EUC-H", "GBT-EUC-V", "GBT-H", "GBT-V", "GBTpc-EUC-H", "GBTpc-EUC-V", "GBpc-EUC-H", "GBpc-EUC-V", "H", "HKdla-B5-H", "HKdla-B5-V", "HKdlb-B5-H", "HKdlb-B5-V", "HKgccs-B5-H", "HKgccs-B5-V", "HKm314-B5-H", "HKm314-B5-V", "HKm471-B5-H", "HKm471-B5-V", "HKscs-B5-H", "HKscs-B5-V", "Hankaku", "Hiragana", "KSC-EUC-H", "KSC-EUC-V", "KSC-H", "KSC-Johab-H", "KSC-Johab-V", "KSC-V", "KSCms-UHC-H", "KSCms-UHC-HW-H", "KSCms-UHC-HW-V", "KSCms-UHC-V", "KSCpc-EUC-H", "KSCpc-EUC-V", "Katakana", "NWP-H", "NWP-V", "RKSJ-H", "RKSJ-V", "Roman", "UniCNS-UCS2-H", "UniCNS-UCS2-V", "UniCNS-UTF16-H", "UniCNS-UTF16-V", "UniCNS-UTF32-H", "UniCNS-UTF32-V", "UniCNS-UTF8-H", "UniCNS-UTF8-V", "UniGB-UCS2-H", "UniGB-UCS2-V", "UniGB-UTF16-H", "UniGB-UTF16-V", "UniGB-UTF32-H", "UniGB-UTF32-V", "UniGB-UTF8-H", "UniGB-UTF8-V", "UniJIS-UCS2-H", "UniJIS-UCS2-HW-H", "UniJIS-UCS2-HW-V", "UniJIS-UCS2-V", "UniJIS-UTF16-H", "UniJIS-UTF16-V", "UniJIS-UTF32-H", "UniJIS-UTF32-V", "UniJIS-UTF8-H", "UniJIS-UTF8-V", "UniJIS2004-UTF16-H", "UniJIS2004-UTF16-V", "UniJIS2004-UTF32-H", "UniJIS2004-UTF32-V", "UniJIS2004-UTF8-H", "UniJIS2004-UTF8-V", "UniJISPro-UCS2-HW-V", "UniJISPro-UCS2-V", "UniJISPro-UTF8-V", "UniJISX0213-UTF32-H", "UniJISX0213-UTF32-V", "UniJISX02132004-UTF32-H", "UniJISX02132004-UTF32-V", "UniKS-UCS2-H", "UniKS-UCS2-V", "UniKS-UTF16-H", "UniKS-UTF16-V", "UniKS-UTF32-H", "UniKS-UTF32-V", "UniKS-UTF8-H", "UniKS-UTF8-V", "V", "WP-Symbol"];
const MAX_MAP_RANGE = 2 ** 24 - 1;
class CMap {
  constructor(builtInCMap = false) {
    this.codespaceRanges = [[], [], [], []];
    this.numCodespaceRanges = 0;
    this._map = [];
    this.name = "";
    this.vertical = false;
    this.useCMap = null;
    this.builtInCMap = builtInCMap;
  }
  addCodespaceRange(n, low, high) {
    this.codespaceRanges[n - 1].push(low, high);
    this.numCodespaceRanges++;
  }
  mapCidRange(low, high, dstLow) {
    if (high - low > MAX_MAP_RANGE) {
      throw new Error("mapCidRange - ignoring data above MAX_MAP_RANGE.");
    }
    while (low <= high) {
      this._map[low++] = dstLow++;
    }
  }
  mapBfRange(low, high, dstLow) {
    if (high - low > MAX_MAP_RANGE) {
      throw new Error("mapBfRange - ignoring data above MAX_MAP_RANGE.");
    }
    const lastByte = dstLow.length - 1;
    while (low <= high) {
      this._map[low++] = dstLow;
      const nextCharCode = dstLow.charCodeAt(lastByte) + 1;
      if (nextCharCode > 0xff) {
        dstLow = dstLow.substring(0, lastByte - 1) + String.fromCharCode(dstLow.charCodeAt(lastByte - 1) + 1) + "\x00";
        continue;
      }
      dstLow = dstLow.substring(0, lastByte) + String.fromCharCode(nextCharCode);
    }
  }
  mapBfRangeToArray(low, high, array) {
    if (high - low > MAX_MAP_RANGE) {
      throw new Error("mapBfRangeToArray - ignoring data above MAX_MAP_RANGE.");
    }
    const ii = array.length;
    let i = 0;
    while (low <= high && i < ii) {
      this._map[low] = array[i++];
      ++low;
    }
  }
  mapOne(src, dst) {
    this._map[src] = dst;
  }
  lookup(code) {
    return this._map[code];
  }
  contains(code) {
    return this._map[code] !== undefined;
  }
  forEach(callback) {
    const map = this._map;
    const length = map.length;
    if (length <= 0x10000) {
      for (let i = 0; i < length; i++) {
        if (map[i] !== undefined) {
          callback(i, map[i]);
        }
      }
    } else {
      for (const i in map) {
        callback(i, map[i]);
      }
    }
  }
  charCodeOf(value) {
    const map = this._map;
    if (map.length <= 0x10000) {
      return map.indexOf(value);
    }
    for (const charCode in map) {
      if (map[charCode] === value) {
        return charCode | 0;
      }
    }
    return -1;
  }
  getMap() {
    return this._map;
  }
  readCharCode(str, offset, out) {
    let c = 0;
    const codespaceRanges = this.codespaceRanges;
    for (let n = 0, nn = codespaceRanges.length; n < nn; n++) {
      c = (c << 8 | str.charCodeAt(offset + n)) >>> 0;
      const codespaceRange = codespaceRanges[n];
      for (let k = 0, kk = codespaceRange.length; k < kk;) {
        const low = codespaceRange[k++];
        const high = codespaceRange[k++];
        if (c >= low && c <= high) {
          out.charcode = c;
          out.length = n + 1;
          return;
        }
      }
    }
    out.charcode = 0;
    out.length = 1;
  }
  getCharCodeLength(charCode) {
    const codespaceRanges = this.codespaceRanges;
    for (let n = 0, nn = codespaceRanges.length; n < nn; n++) {
      const codespaceRange = codespaceRanges[n];
      for (let k = 0, kk = codespaceRange.length; k < kk;) {
        const low = codespaceRange[k++];
        const high = codespaceRange[k++];
        if (charCode >= low && charCode <= high) {
          return n + 1;
        }
      }
    }
    return 1;
  }
  get length() {
    return this._map.length;
  }
  get isIdentityCMap() {
    if (!(this.name === "Identity-H" || this.name === "Identity-V")) {
      return false;
    }
    if (this._map.length !== 0x10000) {
      return false;
    }
    for (let i = 0; i < 0x10000; i++) {
      if (this._map[i] !== i) {
        return false;
      }
    }
    return true;
  }
}
class IdentityCMap extends CMap {
  constructor(vertical, n) {
    super();
    this.vertical = vertical;
    this.addCodespaceRange(n, 0, 0xffff);
  }
  mapCidRange(low, high, dstLow) {
    unreachable("should not call mapCidRange");
  }
  mapBfRange(low, high, dstLow) {
    unreachable("should not call mapBfRange");
  }
  mapBfRangeToArray(low, high, array) {
    unreachable("should not call mapBfRangeToArray");
  }
  mapOne(src, dst) {
    unreachable("should not call mapCidOne");
  }
  lookup(code) {
    return Number.isInteger(code) && code <= 0xffff ? code : undefined;
  }
  contains(code) {
    return Number.isInteger(code) && code <= 0xffff;
  }
  forEach(callback) {
    for (let i = 0; i <= 0xffff; i++) {
      callback(i, i);
    }
  }
  charCodeOf(value) {
    return Number.isInteger(value) && value <= 0xffff ? value : -1;
  }
  getMap() {
    const map = new Array(0x10000);
    for (let i = 0; i <= 0xffff; i++) {
      map[i] = i;
    }
    return map;
  }
  get length() {
    return 0x10000;
  }
  get isIdentityCMap() {
    unreachable("should not access .isIdentityCMap");
  }
}
function strToInt(str) {
  let a = 0;
  for (let i = 0; i < str.length; i++) {
    a = a << 8 | str.charCodeAt(i);
  }
  return a >>> 0;
}
function expectString(obj) {
  if (typeof obj !== "string") {
    throw new FormatError("Malformed CMap: expected string.");
  }
}
function expectInt(obj) {
  if (!Number.isInteger(obj)) {
    throw new FormatError("Malformed CMap: expected int.");
  }
}
function parseBfChar(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endbfchar")) {
      return;
    }
    expectString(obj);
    const src = strToInt(obj);
    obj = lexer.getObj();
    expectString(obj);
    const dst = obj;
    cMap.mapOne(src, dst);
  }
}
function parseBfRange(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endbfrange")) {
      return;
    }
    expectString(obj);
    const low = strToInt(obj);
    obj = lexer.getObj();
    expectString(obj);
    const high = strToInt(obj);
    obj = lexer.getObj();
    if (Number.isInteger(obj) || typeof obj === "string") {
      const dstLow = Number.isInteger(obj) ? String.fromCharCode(obj) : obj;
      cMap.mapBfRange(low, high, dstLow);
    } else if (isCmd(obj, "[")) {
      obj = lexer.getObj();
      const array = [];
      while (!isCmd(obj, "]") && obj !== EOF) {
        array.push(obj);
        obj = lexer.getObj();
      }
      cMap.mapBfRangeToArray(low, high, array);
    } else {
      break;
    }
  }
  throw new FormatError("Invalid bf range.");
}
function parseCidChar(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endcidchar")) {
      return;
    }
    expectString(obj);
    const src = strToInt(obj);
    obj = lexer.getObj();
    expectInt(obj);
    const dst = obj;
    cMap.mapOne(src, dst);
  }
}
function parseCidRange(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endcidrange")) {
      return;
    }
    expectString(obj);
    const low = strToInt(obj);
    obj = lexer.getObj();
    expectString(obj);
    const high = strToInt(obj);
    obj = lexer.getObj();
    expectInt(obj);
    const dstLow = obj;
    cMap.mapCidRange(low, high, dstLow);
  }
}
function parseCodespaceRange(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endcodespacerange")) {
      return;
    }
    if (typeof obj !== "string") {
      break;
    }
    const low = strToInt(obj);
    obj = lexer.getObj();
    if (typeof obj !== "string") {
      break;
    }
    const high = strToInt(obj);
    cMap.addCodespaceRange(obj.length, low, high);
  }
  throw new FormatError("Invalid codespace range.");
}
function parseWMode(cMap, lexer) {
  const obj = lexer.getObj();
  if (Number.isInteger(obj)) {
    cMap.vertical = !!obj;
  }
}
function parseCMapName(cMap, lexer) {
  const obj = lexer.getObj();
  if (obj instanceof Name) {
    cMap.name = obj.name;
  }
}
async function parseCMap(cMap, lexer, fetchBuiltInCMap, useCMap) {
  let previous, embeddedUseCMap;
  objLoop: while (true) {
    try {
      const obj = lexer.getObj();
      if (obj === EOF) {
        break;
      } else if (obj instanceof Name) {
        if (obj.name === "WMode") {
          parseWMode(cMap, lexer);
        } else if (obj.name === "CMapName") {
          parseCMapName(cMap, lexer);
        }
        previous = obj;
      } else if (obj instanceof Cmd) {
        switch (obj.cmd) {
          case "endcmap":
            break objLoop;
          case "usecmap":
            if (previous instanceof Name) {
              embeddedUseCMap = previous.name;
            }
            break;
          case "begincodespacerange":
            parseCodespaceRange(cMap, lexer);
            break;
          case "beginbfchar":
            parseBfChar(cMap, lexer);
            break;
          case "begincidchar":
            parseCidChar(cMap, lexer);
            break;
          case "beginbfrange":
            parseBfRange(cMap, lexer);
            break;
          case "begincidrange":
            parseCidRange(cMap, lexer);
            break;
        }
      }
    } catch (ex) {
      if (ex instanceof MissingDataException) {
        throw ex;
      }
      warn("Invalid cMap data: " + ex);
      continue;
    }
  }
  if (!useCMap && embeddedUseCMap) {
    useCMap = embeddedUseCMap;
  }
  if (useCMap) {
    return extendCMap(cMap, fetchBuiltInCMap, useCMap);
  }
  return cMap;
}
async function extendCMap(cMap, fetchBuiltInCMap, useCMap) {
  cMap.useCMap = await createBuiltInCMap(useCMap, fetchBuiltInCMap);
  if (cMap.numCodespaceRanges === 0) {
    const useCodespaceRanges = cMap.useCMap.codespaceRanges;
    for (let i = 0; i < useCodespaceRanges.length; i++) {
      cMap.codespaceRanges[i] = useCodespaceRanges[i].slice();
    }
    cMap.numCodespaceRanges = cMap.useCMap.numCodespaceRanges;
  }
  cMap.useCMap.forEach(function (key, value) {
    if (!cMap.contains(key)) {
      cMap.mapOne(key, value);
    }
  });
  return cMap;
}
async function createBuiltInCMap(name, fetchBuiltInCMap) {
  if (name === "Identity-H") {
    return new IdentityCMap(false, 2);
  } else if (name === "Identity-V") {
    return new IdentityCMap(true, 2);
  }
  if (!BUILT_IN_CMAPS.includes(name)) {
    throw new Error("Unknown CMap name: " + name);
  }
  if (!fetchBuiltInCMap) {
    throw new Error("Built-in CMap parameters are not provided.");
  }
  const {
    cMapData,
    isCompressed
  } = await fetchBuiltInCMap(name);
  const cMap = new CMap(true);
  if (isCompressed) {
    return new BinaryCMapReader().process(cMapData, cMap, useCMap => extendCMap(cMap, fetchBuiltInCMap, useCMap));
  }
  const lexer = new Lexer(new Stream(cMapData));
  return parseCMap(cMap, lexer, fetchBuiltInCMap, null);
}
class CMapFactory {
  static async create({
    encoding,
    fetchBuiltInCMap,
    useCMap
  }) {
    if (encoding instanceof Name) {
      return createBuiltInCMap(encoding.name, fetchBuiltInCMap);
    } else if (encoding instanceof BaseStream) {
      const parsedCMap = await parseCMap(new CMap(), new Lexer(encoding), fetchBuiltInCMap, useCMap);
      if (parsedCMap.isIdentityCMap) {
        return createBuiltInCMap(parsedCMap.name, fetchBuiltInCMap);
      }
      return parsedCMap;
    }
    throw new Error("Encoding required.");
  }
}

;// ./src/core/encodings.js
const ExpertEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"];
const MacExpertEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "centoldstyle", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "", "threequartersemdash", "", "questionsmall", "", "", "", "", "Ethsmall", "", "", "onequarter", "onehalf", "threequarters", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "", "", "", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hypheninferior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "asuperior", "centsuperior", "", "", "", "", "Aacutesmall", "Agravesmall", "Acircumflexsmall", "Adieresissmall", "Atildesmall", "Aringsmall", "Ccedillasmall", "Eacutesmall", "Egravesmall", "Ecircumflexsmall", "Edieresissmall", "Iacutesmall", "Igravesmall", "Icircumflexsmall", "Idieresissmall", "Ntildesmall", "Oacutesmall", "Ogravesmall", "Ocircumflexsmall", "Odieresissmall", "Otildesmall", "Uacutesmall", "Ugravesmall", "Ucircumflexsmall", "Udieresissmall", "", "eightsuperior", "fourinferior", "threeinferior", "sixinferior", "eightinferior", "seveninferior", "Scaronsmall", "", "centinferior", "twoinferior", "", "Dieresissmall", "", "Caronsmall", "osuperior", "fiveinferior", "", "commainferior", "periodinferior", "Yacutesmall", "", "dollarinferior", "", "", "Thornsmall", "", "nineinferior", "zeroinferior", "Zcaronsmall", "AEsmall", "Oslashsmall", "questiondownsmall", "oneinferior", "Lslashsmall", "", "", "", "", "", "", "Cedillasmall", "", "", "", "", "", "OEsmall", "figuredash", "hyphensuperior", "", "", "", "", "exclamdownsmall", "", "Ydieresissmall", "", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "ninesuperior", "zerosuperior", "", "esuperior", "rsuperior", "tsuperior", "", "", "isuperior", "ssuperior", "dsuperior", "", "", "", "", "", "lsuperior", "Ogoneksmall", "Brevesmall", "Macronsmall", "bsuperior", "nsuperior", "msuperior", "commasuperior", "periodsuperior", "Dotaccentsmall", "Ringsmall", "", "", "", ""];
const MacRomanEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "space", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron"];
const StandardEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls", "", "", "", ""];
const WinAnsiEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "bullet", "Euro", "bullet", "quotesinglbase", "florin", "quotedblbase", "ellipsis", "dagger", "daggerdbl", "circumflex", "perthousand", "Scaron", "guilsinglleft", "OE", "bullet", "Zcaron", "bullet", "bullet", "quoteleft", "quoteright", "quotedblleft", "quotedblright", "bullet", "endash", "emdash", "tilde", "trademark", "scaron", "guilsinglright", "oe", "bullet", "zcaron", "Ydieresis", "space", "exclamdown", "cent", "sterling", "currency", "yen", "brokenbar", "section", "dieresis", "copyright", "ordfeminine", "guillemotleft", "logicalnot", "hyphen", "registered", "macron", "degree", "plusminus", "twosuperior", "threesuperior", "acute", "mu", "paragraph", "periodcentered", "cedilla", "onesuperior", "ordmasculine", "guillemotright", "onequarter", "onehalf", "threequarters", "questiondown", "Agrave", "Aacute", "Acircumflex", "Atilde", "Adieresis", "Aring", "AE", "Ccedilla", "Egrave", "Eacute", "Ecircumflex", "Edieresis", "Igrave", "Iacute", "Icircumflex", "Idieresis", "Eth", "Ntilde", "Ograve", "Oacute", "Ocircumflex", "Otilde", "Odieresis", "multiply", "Oslash", "Ugrave", "Uacute", "Ucircumflex", "Udieresis", "Yacute", "Thorn", "germandbls", "agrave", "aacute", "acircumflex", "atilde", "adieresis", "aring", "ae", "ccedilla", "egrave", "eacute", "ecircumflex", "edieresis", "igrave", "iacute", "icircumflex", "idieresis", "eth", "ntilde", "ograve", "oacute", "ocircumflex", "otilde", "odieresis", "divide", "oslash", "ugrave", "uacute", "ucircumflex", "udieresis", "yacute", "thorn", "ydieresis"];
const SymbolSetEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "universal", "numbersign", "existential", "percent", "ampersand", "suchthat", "parenleft", "parenright", "asteriskmath", "plus", "comma", "minus", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "congruent", "Alpha", "Beta", "Chi", "Delta", "Epsilon", "Phi", "Gamma", "Eta", "Iota", "theta1", "Kappa", "Lambda", "Mu", "Nu", "Omicron", "Pi", "Theta", "Rho", "Sigma", "Tau", "Upsilon", "sigma1", "Omega", "Xi", "Psi", "Zeta", "bracketleft", "therefore", "bracketright", "perpendicular", "underscore", "radicalex", "alpha", "beta", "chi", "delta", "epsilon", "phi", "gamma", "eta", "iota", "phi1", "kappa", "lambda", "mu", "nu", "omicron", "pi", "theta", "rho", "sigma", "tau", "upsilon", "omega1", "omega", "xi", "psi", "zeta", "braceleft", "bar", "braceright", "similar", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Euro", "Upsilon1", "minute", "lessequal", "fraction", "infinity", "florin", "club", "diamond", "heart", "spade", "arrowboth", "arrowleft", "arrowup", "arrowright", "arrowdown", "degree", "plusminus", "second", "greaterequal", "multiply", "proportional", "partialdiff", "bullet", "divide", "notequal", "equivalence", "approxequal", "ellipsis", "arrowvertex", "arrowhorizex", "carriagereturn", "aleph", "Ifraktur", "Rfraktur", "weierstrass", "circlemultiply", "circleplus", "emptyset", "intersection", "union", "propersuperset", "reflexsuperset", "notsubset", "propersubset", "reflexsubset", "element", "notelement", "angle", "gradient", "registerserif", "copyrightserif", "trademarkserif", "product", "radical", "dotmath", "logicalnot", "logicaland", "logicalor", "arrowdblboth", "arrowdblleft", "arrowdblup", "arrowdblright", "arrowdbldown", "lozenge", "angleleft", "registersans", "copyrightsans", "trademarksans", "summation", "parenlefttp", "parenleftex", "parenleftbt", "bracketlefttp", "bracketleftex", "bracketleftbt", "bracelefttp", "braceleftmid", "braceleftbt", "braceex", "", "angleright", "integral", "integraltp", "integralex", "integralbt", "parenrighttp", "parenrightex", "parenrightbt", "bracketrighttp", "bracketrightex", "bracketrightbt", "bracerighttp", "bracerightmid", "bracerightbt", ""];
const ZapfDingbatsEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "a1", "a2", "a202", "a3", "a4", "a5", "a119", "a118", "a117", "a11", "a12", "a13", "a14", "a15", "a16", "a105", "a17", "a18", "a19", "a20", "a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a6", "a7", "a8", "a9", "a10", "a29", "a30", "a31", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39", "a40", "a41", "a42", "a43", "a44", "a45", "a46", "a47", "a48", "a49", "a50", "a51", "a52", "a53", "a54", "a55", "a56", "a57", "a58", "a59", "a60", "a61", "a62", "a63", "a64", "a65", "a66", "a67", "a6×Žøë½›Ê×¬¢h­µç\Ý]XÈYÙ\ÝY]ÙÊ]œÊHÂˆ™]\›ˆ™]ÈYÙ\ÝY]ÙÊ]œÊNÂˆBˆÝ]XÈ˜]Ê]œÊHÂˆ™]\›ˆ™]È˜]Ê]œÊNÂˆBˆÝ]XÈYÙJ]œÊHÂˆ™]\›ˆ™]ÈYÙJ]œÊNÂˆBˆÝ]XÈ[˜ÛÙ[™Ê]œÊHÂˆ™]\›ˆ™]È[˜ÛÙ[™Ê]œÊNÂˆBˆÝ]XÈ[˜ÛÙ[™ÜÊ]œÊHÂˆ™]\›ˆ™]È[˜ÛÙ[™ÜÊ]œÊNÂˆBˆÝ]XÈ[˜Üž\
]œÊHÂˆ™]\›ˆ™]È[˜Üž\
]œÊNÂˆBˆÝ]XÈ[˜Üž\]J]œÊHÂˆ™]\›ˆ™]È[˜Üž\]J]œÊNÂˆBˆÝ]XÈ[˜Üž\[ÛŠ]œÊHÂˆ™]\›ˆ™]È[˜Üž\[ÛŠ]œÊNÂˆBˆÝ]XÈ[˜Üž\[Û“Y]Ù
]œÊHÂˆ™]\›ˆ™]È[˜Üž\[Û“Y]Ù
]œÊNÂˆBˆÝ]XÈ[˜Üž\[Û“Y]ÙÊ]œÊHÂˆ™]\›ˆ™]È[˜Üž\[Û“Y]ÙÊ]œÊNÂˆBˆÝ]XÈ]™[
]œÊHÂˆ™]\›ˆ™]È]™[
]œÊNÂˆBˆÝ]XÈ^]J]œÊHÂˆ™]\›ˆ™]È^]J]œÊNÂˆBˆÝ]XÈ^Øš™XÝ
]œÊHÂˆ™]\›ˆ™]È^Øš™XÝ
]œÊNÂˆBˆÝ]XÈ^ÛÜ›Ý\
]œÊHÂˆ™]\›ˆ™]È^ÛÜ›Ý\
]œÊNÂˆBˆÝ]XÈ^XÝ]J]œÊHÂˆ™]\›ˆ™]È^XÝ]J]œÊNÂˆBˆÝ]XÈ^˜\Ê]œÊHÂˆ™]\›ˆ™]È^˜\Ê]œÊNÂˆBˆÝ]XÈšY[
]œÊHÂˆ™]\›ˆ™]ÈšY[
]œÊNÂˆBˆÝ]XÈš[
]œÊHÂˆ™]\›ˆ™]Èš[
]œÊNÂˆBˆÝ]XÈš[\Š]œÊHÂˆ™]\›ˆ™]Èš[\Š]œÊNÂˆBˆÝ]XÈ›Ø]
]œÊHÂˆ™]\›ˆ™]È›Ø]
]œÊNÂˆBˆÝ]XÈ›Û
]œÊHÂˆ™]\›ˆ™]È[\]WÑ›Û
]œÊNÂˆBˆÝ]XÈ›Ü›X]
]œÊHÂˆ™]\›ˆ™]È›Ü›X]
]œÊNÂˆBˆÝ]XÈ[™\Š]œÊHÂˆ™]\›ˆ™]È[™\Š]œÊNÂˆBˆÝ]XÈ\[˜][ÛŠ]œÊHÂˆ™]\›ˆ™]È\[˜][ÛŠ]œÊNÂˆBˆÝ]XÈ[XYÙJ]œÊHÂˆ™]\›ˆ™]È[XYÙJ]œÊNÂˆBˆÝ]XÈ[XYÙQY]
]œÊHÂˆ™]\›ˆ™]È[XYÙQY]
]œÊNÂˆBˆÝ]XÈ[YÙ\Š]œÊHÂˆ™]\›ˆ™]È[YÙ\Š]œÊNÂˆBˆÝ]XÈ\ÜÝY\œÊ]œÊHÂˆ™]\›ˆ™]È\ÜÝY\œÊ]œÊNÂˆBˆÝ]XÈ][\Ê]œÊHÂˆ™]\›ˆ™]È][\Ê]œÊNÂˆBˆÝ]XÈÙY\
]œÊHÂˆ™]\›ˆ™]ÈÙY\
]œÊNÂˆBˆÝ]XÈÙ^U\ØYÙJ]œÊHÂˆ™]\›ˆ™]ÈÙ^U\ØYÙJ]œÊNÂˆBˆÝ]XÈ[™J]œÊHÂˆ™]\›ˆ™]È[™J]œÊNÂˆBˆÝ]XÈ[™X\Š]œÊHÂˆ™]\›ˆ™]È[™X\Š]œÊNÂˆBˆÝ]XÈØÚÑØÝ[Y[
]œÊHÂˆ™]\›ˆ™]ÈØÚÑØÝ[Y[
]œÊNÂˆBˆÝ]XÈX[šY™\Ý
]œÊHÂˆ™]\›ˆ™]ÈX[šY™\Ý
]œÊNÂˆBˆÝ]XÈX\™Ú[Š]œÊHÂˆ™]\›ˆ™]ÈX\™Ú[Š]œÊNÂˆBˆÝ]XÈY
]œÊHÂˆ™]\›ˆ™]ÈY
]œÊNÂˆBˆÝ]XÈYY][J]œÊHÂˆ™]\›ˆ™]ÈYY][J]œÊNÂˆBˆÝ]XÈY\ÜØYÙJ]œÊHÂˆ™]\›ˆ™]ÈY\ÜØYÙJ]œÊNÂˆBˆÝ]XÈ[Y\šXÑY]
]œÊHÂˆ™]\›ˆ™]È[Y\šXÑY]
]œÊNÂˆBˆÝ]XÈØØÝ\Š]œÊHÂˆ™]\›ˆ™]ÈØØÝ\Š]œÊNÂˆBˆÝ]XÈÚY
]œÊHÂˆ™]\›ˆ™]ÈÚY
]œÊNÂˆBˆÝ]XÈÚYÊ]œÊHÂˆ™]\›ˆ™]ÈÚYÊ]œÊNÂˆBˆÝ]XÈÝ™\™›ÝÊ]œÊHÂˆ™]\›ˆ™]ÈÝ™\™›ÝÊ]œÊNÂˆBˆÝ]XÈYÙP\™XJ]œÊHÂˆ™]\›ˆ™]ÈYÙP\™XJ]œÊNÂˆBˆÝ]XÈYÙTÙ]
]œÊHÂˆ™]\›ˆ™]ÈYÙTÙ]
]œÊNÂˆBˆÝ]XÈ\˜J]œÊHÂˆ™]\›ˆ™]È\˜J]œÊNÂˆBˆÝ]XÈ\ÜÝÛÜ™Y]
]œÊHÂˆ™]\›ˆ™]È\ÜÝÛÜ™Y]
]œÊNÂˆBˆÝ]XÈ]\›Š]œÊHÂˆ™]\›ˆ™]È[\]WÔ]\›Š]œÊNÂˆBˆÝ]XÈXÝ\™J]œÊHÂˆ™]\›ˆ™]ÈXÝ\™J]œÊNÂˆBˆÝ]XÈ›ÝÊ]œÊHÂˆ™]\›ˆ™]È›ÝÊ]œÊNÂˆBˆÝ]XÈ˜YX[
]œÊHÂˆ™]\›ˆ™]È˜YX[
]œÊNÂˆBˆÝ]XÈ™X\ÛÛŠ]œÊHÂˆ™]\›ˆ™]È™X\ÛÛŠ]œÊNÂˆBˆÝ]XÈ™X\ÛÛœÊ]œÊHÂˆ™]\›ˆ™]È™X\ÛÛœÊ]œÊNÂˆBˆÝ]XÈ™XÝ[™ÛJ]œÊHÂˆ™]\›ˆ™]È™XÝ[™ÛJ]œÊNÂˆBˆÝ]XÈ™YŠ]œÊHÂˆ™]\›ˆ™]È™Y‘[[Y[
]œÊNÂˆBˆÝ]XÈØÜš\
]œÊHÂˆ™]\›ˆ™]ÈØÜš\
]œÊNÂˆBˆÝ]XÈÙ]›Ü\J]œÊHÂˆ™]\›ˆ™]ÈÙ]›Ü\J]œÊNÂˆBˆÝ]XÈÚYÛ‘]J]œÊHÂˆ™]\›ˆ™]ÈÚYÛ‘]J]œÊNÂˆBˆÝ]XÈÚYÛ˜]\™J]œÊHÂˆ™]\›ˆ™]ÈÚYÛ˜]\™J]œÊNÂˆBˆÝ]XÈÚYÛš[™Ê]œÊHÂˆ™]\›ˆ™]ÈÚYÛš[™Ê]œÊNÂˆBˆÝ]XÈÛÛY
]œÊHÂˆ™]\›ˆ™]ÈÛÛY
]œÊNÂˆBˆÝ]XÈÜXZÊ]œÊHÂˆ™]\›ˆ™]ÈÜXZÊ]œÊNÂˆBˆÝ]XÈÝ\J]œÊHÂˆ™]\›ˆ™]ÈÝ\J]œÊNÂˆBˆÝ]XÈÝX™›Ü›J]œÊHÂˆ™]\›ˆ™]ÈÝX™›Ü›J]œÊNÂˆBˆÝ]XÈÝX™›Ü›TÙ]
]œÊHÂˆ™]\›ˆ™]ÈÝX™›Ü›TÙ]
]œÊNÂˆBˆÝ]XÈÝXš™XÝŠ]œÊHÂˆ™]\›ˆ™]ÈÝXš™XÝŠ]œÊNÂˆBˆÝ]XÈÝXš™XÝœÊ]œÊHÂˆ™]\›ˆ™]ÈÝXš™XÝœÊ]œÊNÂˆBˆÝ]XÈÝX›Z]
]œÊHÂˆ™]\›ˆ™]ÈÝX›Z]
]œÊNÂˆBˆÝ]XÈ[\]J]œÊHÂˆ™]\›ˆ™]È[\]J]œÊNÂˆBˆÝ]XÈ^
]œÊHÂˆ™]\›ˆ™]È^
]œÊNÂˆBˆÝ]XÈ^Y]
]œÊHÂˆ™]\›ˆ™]È^Y]
]œÊNÂˆBˆÝ]XÈ[YJ]œÊHÂˆ™]\›ˆ™]È[YJ]œÊNÂˆBˆÝ]XÈ[YTÝ[\
]œÊHÂˆ™]\›ˆ™]È[YTÝ[\
]œÊNÂˆBˆÝ]XÈÛÛ\
]œÊHÂˆ™]\›ˆ™]ÈÛÛ\
]œÊNÂˆBˆÝ]XÈ˜]™\œØ[
]œÊHÂˆ™]\›ˆ™]È˜]™\œØ[
]œÊNÂˆBˆÝ]XÈ˜]™\œÙJ]œÊHÂˆ™]\›ˆ™]È˜]™\œÙJ]œÊNÂˆBˆÝ]XÈZJ]œÊHÂˆ™]\›ˆ™]ÈZJ]œÊNÂˆBˆÝ]XÈ˜[Y]J]œÊHÂˆ™]\›ˆ™]È˜[Y]J]œÊNÂˆBˆÝ]XÈ˜[YJ]œÊHÂˆ™]\›ˆ™]È˜[YJ]œÊNÂˆBˆÝ]XÈ˜\šXX›\Ê]œÊHÂˆ™]\›ˆ™]È˜\šXX›\Ê]œÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KØš[™šœÂ‚‚‚‚‚‚˜ÛÛœÝš[™Ó”×ÑUTÑUÈH˜[Y\ÜXÙRYË™]\Ù]ËšYÂ™[˜Ý[ÛˆÜ™X]U^
ÛÛ[
HÂˆÛÛœÝ›ÙHH™]È^
ßJNÂˆ›ÙVÉÛÛ[HHÛÛ[Âˆ™]\›ˆ›ÙNÂŸB˜Û\ÜÈš[™\ˆÂˆÛÛœÝXÝÜŠ›ÛÝ
HÂˆ\Ëœ›ÛÝH›ÛÝÂˆ\Ë™]\Ù]ÈH›ÛÝ™]\Ù]ÎÂˆ\Ë™]HH›ÛÝ™]\Ù]ÏË™]H™]È[Øš™XÝ
˜[Y\ÜXÙRYË™]\Ù]ËšY™]HŠNÂˆ\Ë™[\SY\™ÙHH\Ë™]VÉÙ]Ú[™[—J
K›[™ÝOOHÂˆ\Ëœ›ÛÝ™›Ü›HH\Ë™›Ü›HH›ÛÝ[\]VÉÛÛ™WJ
NÂˆBˆÚ\ÐÛÛœÝ[YQ]J
HÂˆ™]\›ˆ]\Ë™[\SY\™ÙH	‰ˆ\Ë—ÛY\™ÙS[ÙNÂˆBˆÚ\ÓX]Ú[\]J
HÂˆ™]\›ˆ]\Ë—Ú\ÐÛÛœÝ[YQ]J
NÂˆBˆš[™

HÂˆ\Ë—Øš[™[[Y[
\Ë™›Ü›K\Ë™]JNÂˆ™]\›ˆ\Ë™›Ü›NÂˆBˆÙ]]J
HÂˆ™]\›ˆ\Ë™]NÂˆBˆØš[™˜[YJ›Ü›S›ÙK]KXÝ\™JHÂˆ›Ü›S›ÙVÉ]WHH]NÂˆYˆ
›Ü›S›ÙVÉ\ÔÙ]X›U˜[YWJ
JHÂˆYˆ
]VÉ\Ñ]U˜[YWJ
JHÂˆÛÛœÝ˜[YHH]VÉÙ]]U˜[YWJ
NÂˆ›Ü›S›ÙVÉÙ]˜[YWJÜ™X]U^
˜[YJJNÂˆH[ÙHYˆ
›Ü›S›ÙH[œÝ[˜Ù[ÙˆšY[	‰ˆ›Ü›S›ÙKZOË˜ÚÚXÙS\ÝË›Ü[ˆOOH›][TÙ[XÝŠHÂˆÛÛœÝ˜[YHH]VÉÙ]Ú[™[—J
K›X\
Ú[OˆÚ[ÉÛÛ[Kš[J
JKš›Ú[Š—ˆŠNÂˆ›Ü›S›ÙVÉÙ]˜[YWJÜ™X]U^
˜[YJJNÂˆH[ÙHYˆ
\Ë—Ú\ÐÛÛœÝ[YQ]J
JHÂˆØ\›ŠHH›Ù\È]™[‰ÝHØ[YH\K˜
NÂˆBˆH[ÙHYˆ
Y]VÉ\Ñ]U˜[YWJ
H\Ë—Ú\ÓX]Ú[\]J
JHÂˆ\Ë—Øš[™[[Y[
›Ü›S›ÙK]JNÂˆH[ÙHÂˆØ\›ŠHH›Ù\È]™[‰ÝHØ[YH\K˜
NÂˆBˆBˆÙš[™]PžS˜[YUÐÛÛœÝ[YJ˜[YK\Õ˜[YK]S›ÙKÛØ˜[
HÂˆYˆ
[˜[YJHÂˆ™]\›ˆ[ÂˆBˆ]Ù[™\˜]Ü‹X]ÚÂˆ›Üˆ
]HHÈHÎÈJÊÊHÂˆÙ[™\˜]ÜˆH]S›ÙVÉÙ]™X[Ú[™[žS˜[YR]J˜[YK˜[ÙKYJNÂˆÚ[H
YJHÂˆX]ÚHÙ[™\˜]Ü‹›™^

K˜[YNÂˆYˆ
[X]Ú
HÂˆœ™XZÎÂˆBˆYˆ
\Õ˜[YHOOHX]ÚÉ\Ñ]U˜[YWJ
JHÂˆ™]\›ˆX]ÚÂˆBˆBˆYˆ
]S›ÙVÉ˜[Y\ÜXÙRYHOOH˜[Y\ÜXÙRYË™]\Ù]ËšY	‰ˆ]S›ÙVÉ›ÙS˜[YWHOOH™]HŠHÂˆœ™XZÎÂˆBˆ]S›ÙHH]S›ÙVÉÙ]\™[J
NÂˆBˆYˆ
YÛØ˜[
HÂˆ™]\›ˆ[ÂˆBˆÙ[™\˜]ÜˆH\Ë™]VÉÙ]™X[Ú[™[žS˜[YR]J˜[YKYK˜[ÙJNÂˆX]ÚHÙ[™\˜]Ü‹›™^

K˜[YNÂˆYˆ
X]Ú
HÂˆ™]\›ˆX]ÚÂˆBˆÙ[™\˜]ÜˆH\Ë™]VÉÙ]]šX]R]J˜[YKYJNÂˆX]ÚHÙ[™\˜]Ü‹›™^

K˜[YNÂˆYˆ
X]ÚË–É\Ñ]U˜[YWJ
JHÂˆ™]\›ˆX]ÚÂˆBˆ™]\›ˆ[ÂˆBˆÜÙ]›Ü\Y\Ê›Ü›S›ÙK]S›ÙJHÂˆYˆ
Y›Ü›S›ÙKš\ÓÝÛ”›Ü\JœÙ]›Ü\HŠJHÂˆ™]\›ŽÂˆBˆ›Üˆ
ÛÛœÝÂˆ™Y‹ˆ\™Ù]ˆÛÛ›™XÝ[Û‚ˆHÙˆ›Ü›S›ÙKœÙ]›Ü\K˜Ú[™[ŠHÂˆYˆ
ÛÛ›™XÝ[ÛŠHÂˆÛÛ[YNÂˆBˆYˆ
\™YŠHÂˆÛÛ[YNÂˆBˆÛÛœÝ›Ù\ÈHÙX\˜Ú›ÙJ\Ëœ›ÛÝ]S›ÙK™Y‹˜[ÙK˜[ÙJNÂˆYˆ
[›Ù\ÊHÂˆØ\›ŠHH[˜[Y™Y™\™[˜ÙNˆ	Ü™YŸK˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝÛ›ÙWHH›Ù\ÎÂˆYˆ
[›ÙVÉ\Ñ\ØÙ[™[J\Ë™]JJHÂˆØ\›ŠHH[˜[Y›ÙNˆ]\Ý™HH]H›ÙK˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝ\™Ù]›Ù\ÈHÙX\˜Ú›ÙJ\Ëœ›ÛÝ›Ü›S›ÙK\™Ù]˜[ÙK˜[ÙJNÂˆYˆ
]\™Ù]›Ù\ÊHÂˆØ\›ŠHH[˜[Y\™Ù]ˆ	Ý\™Ù]K˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝÝ\™Ù]›ÙWHH\™Ù]›Ù\ÎÂˆYˆ
]\™Ù]›ÙVÉ\Ñ\ØÙ[™[J›Ü›S›ÙJJHÂˆØ\›ŠHH[˜[Y\™Ù]ˆ]\Ý™HH›Ü\HÜˆÝXœ›Ü\K˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝ\™Ù]\™[H\™Ù]›ÙVÉÙ]\™[J
NÂˆYˆ
\™Ù]›ÙH[œÝ[˜Ù[ÙˆÙ]›Ü\H\™Ù]\™[[œÝ[˜Ù[ÙˆÙ]›Ü\JHÂˆØ\›ŠHH[˜[Y\™Ù]ˆØ[››Ý™HHÙ]›Ü\HÜˆÛ™HÙˆ]È›Ü\Y\Ë˜
NÂˆÛÛ[YNÂˆBˆYˆ
\™Ù]›ÙH[œÝ[˜Ù[Ùˆš[™][\È\™Ù]\™[[œÝ[˜Ù[Ùˆš[™][\ÊHÂˆØ\›ŠHH[˜[Y\™Ù]ˆØ[››Ý™HHš[™][\ÈÜˆÛ™HÙˆ]È›Ü\Y\Ë˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝÛÛ[H›ÙVÉ^J
NÂˆÛÛœÝ˜[YHH\™Ù]›ÙVÉ›ÙS˜[YWNÂˆYˆ
\™Ù]›ÙH[œÝ[˜Ù[ÙˆP]šX]JHÂˆÛÛœÝ]œÈHØš™XÝ˜Ü™X]J[
NÂˆ]œÖÛ˜[YWHHÛÛ[ÂˆÛÛœÝØšˆH™Y›XÝ˜ÛÛœÝXÝ
Øš™XÝ™Ù]›ÝÝ\SÙŠ\™Ù]\™[
K˜ÛÛœÝXÝÜ‹Ø]œ×JNÂˆ\™Ù]\™[Û˜[YWHHØš–Û˜[YWNÂˆÛÛ[YNÂˆBˆYˆ
]\™Ù]›ÙKš\ÓÝÛ”›Ü\J	ÛÛ[
JHÂˆØ\›ŠHH[˜[Y›ÙHÈ\ÙH[ˆÙ]›Ü\X
NÂˆÛÛ[YNÂˆBˆ\™Ù]›ÙVÉ]WHH›ÙNÂˆ\™Ù]›ÙVÉÛÛ[HHÛÛ[Âˆ\™Ù]›ÙVÉš[˜[^™WJ
NÂˆBˆBˆØš[™][\Ê›Ü›S›ÙK]S›ÙJHÂˆYˆ
Y›Ü›S›ÙKš\ÓÝÛ”›Ü\Jš][\ÈŠHY›Ü›S›ÙKš\ÓÝÛ”›Ü\J˜š[™][\ÈŠH›Ü›S›ÙK˜š[™][\Ëš\Ñ[\J
JHÂˆ™]\›ŽÂˆBˆ›Üˆ
ÛÛœÝ][HÙˆ›Ü›S›ÙKš][\Ë˜Ú[™[ŠHÂˆ›Ü›S›ÙVÉ™[[Ý™PÚ[J][JNÂˆBˆ›Ü›S›ÙKš][\Ë˜ÛX\Š
NÂˆÛÛœÝX™[ÈH™]È][\ÊßJNÂˆÛÛœÝ˜[Y\ÈH™]È][\ÊßJNÂˆ›Ü›S›ÙVÉ\[™Ú[JX™[ÊNÂˆ›Ü›S›ÙKš][\Ëœ\Ú
X™[ÊNÂˆ›Ü›S›ÙVÉ\[™Ú[J˜[Y\ÊNÂˆ›Ü›S›ÙKš][\Ëœ\Ú
˜[Y\ÊNÂˆ›Üˆ
ÛÛœÝÂˆ™Y‹ˆX™[™Y‹ˆ˜[YT™Y‹ˆÛÛ›™XÝ[Û‚ˆHÙˆ›Ü›S›ÙK˜š[™][\Ë˜Ú[™[ŠHÂˆYˆ
ÛÛ›™XÝ[ÛŠHÂˆÛÛ[YNÂˆBˆYˆ
\™YŠHÂˆÛÛ[YNÂˆBˆÛÛœÝ›Ù\ÈHÙX\˜Ú›ÙJ\Ëœ›ÛÝ]S›ÙK™Y‹˜[ÙK˜[ÙJNÂˆYˆ
[›Ù\ÊHÂˆØ\›ŠHH[˜[Y™Y™\™[˜ÙNˆ	Ü™YŸK˜
NÂˆÛÛ[YNÂˆBˆ›Üˆ
ÛÛœÝ›ÙHÙˆ›Ù\ÊHÂˆYˆ
[›ÙVÉ\Ñ\ØÙ[™[J\Ë™]\Ù]ÊJHÂˆØ\›ŠHH[˜[Y™Yˆ
	Ü™YŸJNˆ]\Ý™HH]\Ù]ÈÚ[˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝX™[›Ù\ÈHÙX\˜Ú›ÙJ\Ëœ›ÛÝ›ÙKX™[™Y‹YK˜[ÙJNÂˆYˆ
[X™[›Ù\ÊHÂˆØ\›ŠHH[˜[YX™[ˆ	ÛX™[™YŸK˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝÛX™[›ÙWHHX™[›Ù\ÎÂˆYˆ
[X™[›ÙVÉ\Ñ\ØÙ[™[J\Ë™]\Ù]ÊJHÂˆØ\›ŠHH[˜[YX™[ˆ]\Ý™HH]\Ù]ÈÚ[˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝ˜[YS›Ù\ÈHÙX\˜Ú›ÙJ\Ëœ›ÛÝ›ÙK˜[YT™Y‹YK˜[ÙJNÂˆYˆ
]˜[YS›Ù\ÊHÂˆØ\›ŠHH[˜[Y˜[YNˆ	Ý˜[YT™YŸK˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝÝ˜[YS›ÙWHH˜[YS›Ù\ÎÂˆYˆ
]˜[YS›ÙVÉ\Ñ\ØÙ[™[J\Ë™]\Ù]ÊJHÂˆØ\›ŠHH[˜[Y˜[YNˆ]\Ý™HH]\Ù]ÈÚ[˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝX™[HÜ™X]U^
X™[›ÙVÉ^J
JNÂˆÛÛœÝ˜[YHHÜ™X]U^
˜[YS›ÙVÉ^J
JNÂˆX™[ÖÉ\[™Ú[JX™[
NÂˆX™[Ë^œ\Ú
X™[
NÂˆ˜[Y\ÖÉ\[™Ú[J˜[YJNÂˆ˜[Y\Ë^œ\Ú
˜[YJNÂˆBˆBˆBˆØš[™ØØÝ\œ™[˜Ù\Ê›Ü›S›ÙKX]Ú\ËXÝ\™JHÂˆ]˜\ÙPÛÛ™NÂˆYˆ
X]Ú\Ë›[™ÝˆJHÂˆ˜\ÙPÛÛ™HH›Ü›S›ÙVÉÛÛ™WJ
NÂˆ˜\ÙPÛÛ™VÉ™[[Ý™PÚ[J˜\ÙPÛÛ™K›ØØÝ\ŠNÂˆ˜\ÙPÛÛ™K›ØØÝ\ˆH[ÂˆBˆ\Ë—Øš[™˜[YJ›Ü›S›ÙKX]Ú\ÖÌKXÝ\™JNÂˆ\Ë—ÜÙ]›Ü\Y\Ê›Ü›S›ÙKX]Ú\ÖÌJNÂˆ\Ë—Øš[™][\Ê›Ü›S›ÙKX]Ú\ÖÌJNÂˆYˆ
X]Ú\Ë›[™ÝOOHJHÂˆ™]\›ŽÂˆBˆÛÛœÝ\™[H›Ü›S›ÙVÉÙ]\™[J
NÂˆÛÛœÝ˜[YHH›Ü›S›ÙVÉ›ÙS˜[YWNÂˆÛÛœÝÜÈH\™[É[™^Ù—J›Ü›S›ÙJNÂˆ›Üˆ
]HHKZHHX]Ú\Ë›[™ÝÈHZNÈJÊÊHÂˆÛÛœÝX]ÚHX]Ú\ÖÚWNÂˆÛÛœÝÛÛ™HH˜\ÙPÛÛ™VÉÛÛ™WJ
NÂˆ\™[Û˜[YWKœ\Ú
ÛÛ™JNÂˆ\™[É[œÙ\]JÜÈ
ÈKÛÛ™JNÂˆ\Ë—Øš[™˜[YJÛÛ™KX]ÚXÝ\™JNÂˆ\Ë—ÜÙ]›Ü\Y\ÊÛÛ™KX]Ú
NÂˆ\Ë—Øš[™][\ÊÛÛ™KX]Ú
NÂˆBˆBˆØÜ™X]SØØÝ\œ™[˜Ù\Ê›Ü›S›ÙJHÂˆYˆ
]\Ë™[\SY\™ÙJHÂˆ™]\›ŽÂˆBˆÛÛœÝÂˆØØÝ\‚ˆHH›Ü›S›ÙNÂˆYˆ
[ØØÝ\ˆØØÝ\‹š[š]X[HJHÂˆ™]\›ŽÂˆBˆÛÛœÝ\™[H›Ü›S›ÙVÉÙ]\™[J
NÂˆÛÛœÝ˜[YHH›Ü›S›ÙVÉ›ÙS˜[YWNÂˆYˆ
J\™[Û˜[YWH[œÝ[˜Ù[ÙˆSØš™XÝ\œ˜^JJHÂˆ™]\›ŽÂˆBˆ]Ý\œ™[[X™\ŽÂˆYˆ
›Ü›S›ÙK›˜[YJHÂˆÝ\œ™[[X™\ˆH\™[Û˜[YWK˜Ú[™[‹™š[\ŠHOˆK›˜[YHOOH›Ü›S›ÙK›˜[YJK›[™ÝÂˆH[ÙHÂˆÝ\œ™[[X™\ˆH\™[Û˜[YWK˜Ú[™[‹›[™ÝÂˆBˆÛÛœÝÜÈH\™[É[™^Ù—J›Ü›S›ÙJH
ÈNÂˆÛÛœÝZHHØØÝ\‹š[š]X[HÝ\œ™[[X™\ŽÂˆYˆ
ZJHÂˆÛÛœÝ›ÙPÛÛ™HH›Ü›S›ÙVÉÛÛ™WJ
NÂˆ›ÙPÛÛ™VÉ™[[Ý™PÚ[J›ÙPÛÛ™K›ØØÝ\ŠNÂˆ›ÙPÛÛ™K›ØØÝ\ˆH[Âˆ\™[Û˜[YWKœ\Ú
›ÙPÛÛ™JNÂˆ\™[É[œÙ\]JÜË›ÙPÛÛ™JNÂˆ›Üˆ
]HHNÈHZNÈJÊÊHÂˆÛÛœÝÛÛ™HH›ÙPÛÛ™VÉÛÛ™WJ
NÂˆ\™[Û˜[YWKœ\Ú
ÛÛ™JNÂˆ\™[É[œÙ\]JÜÈ
ÈKÛÛ™JNÂˆBˆBˆBˆÙÙ]ØØÝ\’[™›Ê›Ü›S›ÙJHÂˆÛÛœÝÂˆ˜[YKˆØØÝ\‚ˆHH›Ü›S›ÙNÂˆYˆ
[ØØÝ\ˆ[˜[YJHÂˆ™]\›ˆÌKWNÂˆBˆÛÛœÝX^HØØÝ\‹›X^OOHLHÈ[™š[š]HˆØØÝ\‹›X^Âˆ™]\›ˆÛØØÝ\‹›Z[‹X^NÂˆBˆÜÙ][™š[™
›Ü›S›ÙK]S›ÙJHÂˆ\Ë—ÜÙ]›Ü\Y\Ê›Ü›S›ÙK]S›ÙJNÂˆ\Ë—Øš[™][\Ê›Ü›S›ÙK]S›ÙJNÂˆ\Ë—Øš[™[[Y[
›Ü›S›ÙK]S›ÙJNÂˆBˆØš[™[[Y[
›Ü›S›ÙK]S›ÙJHÂˆÛÛœÝ\Ù[\ÜÓ›Ù\ÈH×NÂˆ\Ë—ØÜ™X]SØØÝ\œ™[˜Ù\Ê›Ü›S›ÙJNÂˆ›Üˆ
ÛÛœÝÚ[Ùˆ›Ü›S›ÙVÉÙ]Ú[™[—J
JHÂˆYˆ
Ú[É]WJHÂˆÛÛ[YNÂˆBˆYˆ
\Ë—ÛY\™ÙS[ÙHOOH[™Yš[™Y	‰ˆÚ[É›ÙS˜[YWHOOHœÝX™›Ü›HŠHÂˆ\Ë—ÛY\™ÙS[ÙHHÚ[›Y\™ÙS[ÙHOOH˜ÛÛœÝ[YQ]HŽÂˆÛÛœÝ]PÚ[™[ˆH]S›ÙVÉÙ]Ú[™[—J
NÂˆYˆ
]PÚ[™[‹›[™Ýˆ
HÂˆ\Ë—Øš[™ØØÝ\œ™[˜Ù\ÊÚ[Ù]PÚ[™[–ÌWK[
NÂˆH[ÙHYˆ
\Ë™[\SY\™ÙJHÂˆÛÛœÝœÒYH]S›ÙVÉ˜[Y\ÜXÙRYHOOHš[™Ó”×ÑUTÑUÈÈLHˆ]S›ÙVÉ˜[Y\ÜXÙRYNÂˆÛÛœÝ]PÚ[HÚ[É]WHH™]È[Øš™XÝ
œÒYÚ[›˜[YHœ›ÛÝŠNÂˆ]S›ÙVÉ\[™Ú[J]PÚ[
NÂˆ\Ë—Øš[™[[Y[
Ú[]PÚ[
NÂˆBˆÛÛ[YNÂˆBˆYˆ
XÚ[É\Ðš[™X›WJ
JHÂˆÛÛ[YNÂˆBˆ]ÛØ˜[H˜[ÙNÂˆ]XÝ\™HH[Âˆ]™YˆH[Âˆ]X]ÚH[ÂˆYˆ
Ú[˜š[™
HÂˆÝÚ]Ú
Ú[˜š[™›X]Ú
HÂˆØ\ÙH››Û™HŽ‚ˆ\Ë—ÜÙ][™š[™
Ú[]S›ÙJNÂˆÛÛ[YNÂˆØ\ÙH™ÛØ˜[Ž‚ˆÛØ˜[HYNÂˆœ™XZÎÂˆØ\ÙH™]T™YˆŽ‚ˆYˆ
XÚ[˜š[™œ™YŠHÂˆØ\›ŠHH™Yˆ\È[\H[ˆ›ÙH	ØÚ[É›ÙS˜[YW_K˜
NÂˆ\Ë—ÜÙ][™š[™
Ú[]S›ÙJNÂˆÛÛ[YNÂˆBˆ™YˆHÚ[˜š[™œ™YŽÂˆœ™XZÎÂˆY˜][‚ˆœ™XZÎÂˆBˆYˆ
Ú[˜š[™œXÝ\™JHÂˆXÝ\™HHÚ[˜š[™œXÝ\™VÉÛÛ[NÂˆBˆBˆÛÛœÝÛZ[‹X^HH\Ë—ÙÙ]ØØÝ\’[™›ÊÚ[
NÂˆYˆ
™YŠHÂˆX]ÚHÙX\˜Ú›ÙJ\Ëœ›ÛÝ]S›ÙK™Y‹YK˜[ÙJNÂˆYˆ
X]ÚOOH[
HÂˆX]ÚHÜ™X]Q]S›ÙJ\Ë™]K]S›ÙK™YŠNÂˆYˆ
[X]Ú
HÂˆÛÛ[YNÂˆBˆYˆ
\Ë—Ú\ÐÛÛœÝ[YQ]J
JHÂˆX]ÚÉÛÛœÝ[YYHHYNÂˆBˆ\Ë—ÜÙ][™š[™
Ú[X]Ú
NÂˆÛÛ[YNÂˆH[ÙHÂˆYˆ
\Ë—Ú\ÐÛÛœÝ[YQ]J
JHÂˆX]ÚHX]Ú™š[\Š›ÙHOˆ[›ÙVÉÛÛœÝ[YYJNÂˆBˆYˆ
X]Ú›[™ÝˆX^
HÂˆX]ÚHX]ÚœÛXÙJX^
NÂˆH[ÙHYˆ
X]Ú›[™ÝOOH
HÂˆX]ÚH[ÂˆBˆYˆ
X]Ú	‰ˆ\Ë—Ú\ÐÛÛœÝ[YQ]J
JHÂˆX]Ú™›Ü‘XXÚ
›ÙHOˆÂˆ›ÙVÉÛÛœÝ[YYHHYNÂˆJNÂˆBˆBˆH[ÙHÂˆYˆ
XÚ[›˜[YJHÂˆ\Ë—ÜÙ][™š[™
Ú[]S›ÙJNÂˆÛÛ[YNÂˆBˆYˆ
\Ë—Ú\ÐÛÛœÝ[YQ]J
JHÂˆÛÛœÝX]Ú\ÈH×NÂˆÚ[H
X]Ú\Ë›[™ÝX^
HÂˆÛÛœÝ›Ý[™H\Ë—Ùš[™]PžS˜[YUÐÛÛœÝ[YJÚ[›˜[YKÚ[É\ÔÙ]X›U˜[YWJ
K]S›ÙKÛØ˜[
NÂˆYˆ
Y›Ý[™
HÂˆœ™XZÎÂˆBˆ›Ý[™ÉÛÛœÝ[YYHHYNÂˆX]Ú\Ëœ\Ú
›Ý[™
NÂˆBˆX]ÚHX]Ú\Ë›[™ÝˆÈX]Ú\Èˆ[ÂˆH[ÙHÂˆX]ÚH]S›ÙVÉÙ]™X[Ú[™[žS˜[YR]JÚ[›˜[YK˜[ÙK\Ë™[\SY\™ÙJK›™^

K˜[YNÂˆYˆ
[X]Ú
HÂˆYˆ
Z[ˆOOH
HÂˆ\Ù[\ÜÓ›Ù\Ëœ\Ú
Ú[
NÂˆÛÛ[YNÂˆBˆÛÛœÝœÒYH]S›ÙVÉ˜[Y\ÜXÙRYHOOHš[™Ó”×ÑUTÑUÈÈLHˆ]S›ÙVÉ˜[Y\ÜXÙRYNÂˆX]ÚHÚ[É]WHH™]È[Øš™XÝ
œÒYÚ[›˜[YJNÂˆYˆ
\Ë™[\SY\™ÙJHÂˆX]ÚÉÛÛœÝ[YYHHYNÂˆBˆ]S›ÙVÉ\[™Ú[JX]Ú
NÂˆ\Ë—ÜÙ][™š[™
Ú[X]Ú
NÂˆÛÛ[YNÂˆBˆYˆ
\Ë™[\SY\™ÙJHÂˆX]ÚÉÛÛœÝ[YYHHYNÂˆBˆX]ÚHÛX]ÚNÂˆBˆBˆYˆ
X]Ú
HÂˆ\Ë—Øš[™ØØÝ\œ™[˜Ù\ÊÚ[X]ÚXÝ\™JNÂˆH[ÙHYˆ
Z[ˆˆ
HÂˆ\Ë—ÜÙ][™š[™
Ú[]S›ÙJNÂˆH[ÙHÂˆ\Ù[\ÜÓ›Ù\Ëœ\Ú
Ú[
NÂˆBˆBˆ\Ù[\ÜÓ›Ù\Ë™›Ü‘XXÚ
›ÙHOˆ›ÙVÉÙ]\™[J
VÉ™[[Ý™PÚ[J›ÙJJNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÙ]KšœÂ‚˜Û\ÜÈ]R[™\ˆÂˆÛÛœÝXÝÜŠ›ÛÝ]JHÂˆ\Ë™]HH]NÂˆ\Ë™]\Ù]H›ÛÝ™]\Ù]È[ÂˆBˆÙ\šX[^™JÝÜ˜YÙJHÂˆÛÛœÝÝXÚÈHÖËLK\Ë™]VÉÙ]Ú[™[—J
WWNÂˆÚ[H
ÝXÚË›[™Ýˆ
HÂˆÛÛœÝ\ÝHÝXÚË˜]
LJNÂˆÛÛœÝÚKÚ[™[—HH\ÝÂˆYˆ
H
ÈHOOHÚ[™[‹›[™Ý
HÂˆÝXÚËœÜ

NÂˆÛÛ[YNÂˆBˆÛÛœÝÚ[HÚ[™[–ÊÊÛ\ÝÌWNÂˆÛÛœÝÝÜ˜YÙQ[žHHÝÜ˜YÙK™Ù]
Ú[ÉZYJNÂˆYˆ
ÝÜ˜YÙQ[žJHÂˆÚ[ÉÙ]˜[YWJÝÜ˜YÙQ[žJNÂˆH[ÙHÂˆÛÛœÝ]šX]\ÈHÚ[ÉÙ]]šX]\×J
NÂˆ›Üˆ
ÛÛœÝ˜[YHÙˆ]šX]\Ë˜[Y\Ê
JHÂˆÛÛœÝ[žHHÝÜ˜YÙK™Ù]
˜[YVÉZYJNÂˆYˆ
[žJHÂˆ˜[YVÉÙ]˜[YWJ[žJNÂˆœ™XZÎÂˆBˆBˆBˆÛÛœÝ›Ù\ÈHÚ[ÉÙ]Ú[™[—J
NÂˆYˆ
›Ù\Ë›[™Ýˆ
HÂˆÝXÚËœ\Ú
ËLK›Ù\×JNÂˆBˆBˆÛÛœÝYˆHØ˜N™]\Ù]È[œÎž˜OHš‹ËÝÝÝËž˜K›Ü™ËÜØÚ[XKÞ˜KY]KÌKŒÈ˜NÂˆYˆ
\Ë™]\Ù]
HÂˆ›Üˆ
ÛÛœÝÚ[Ùˆ\Ë™]\Ù]ÉÙ]Ú[™[—J
JHÂˆYˆ
Ú[É›ÙS˜[YWHOOH™]HŠHÂˆÚ[ÉÔÝš[™×JYŠNÂˆBˆBˆBˆ\Ë™]VÉÔÝš[™×JYŠNÂˆY‹œ\Ú
Þ˜N™]\Ù]ÏˆŠNÂˆ™]\›ˆY‹š›Ú[ŠˆŠNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KØÛÛ™šYËšœÂ‚‚‚‚‚˜ÛÛœÝÓÓ‘’Q×Ó”×ÒQH˜[Y\ÜXÙRYË˜ÛÛ™šYËšYÂ˜Û\ÜÈXÜ›Ø˜]^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜XÜ›Ø˜]‹YJNÂˆ\Ë˜XÜ›Ø˜]ÈH[Âˆ\Ë˜]]ÔØ]™HH[Âˆ\Ë˜ÛÛ[[ÛˆH[Âˆ\Ë˜[Y]HH[Âˆ\Ë˜[Y]P\›Ý˜[ÚYÛ˜]\™\ÈH[Âˆ\ËœÝX›Z]\›H™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈXÜ›Ø˜]È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜XÜ›Ø˜]È‹YJNÂˆ\Ë™[˜[ZXÔ™[™\ˆH[ÂˆBŸB˜Û\ÜÈQ‘WÒ”ÐÛÛœÛÛH^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQQ‘WÒ”ÐÛÛœÛÛH‹È™[YØ]H‹‘[˜X›H‹‘\ØX›H—JNÂˆBŸB˜Û\ÜÈQ‘WÒ”ÑXYÙÙ\ˆ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQQ‘WÒ”ÑXYÙÙ\ˆ‹È™[YØ]H‹‘[˜X›H‹‘\ØX›H—JNÂˆBŸB˜Û\ÜÈYÚ[[š[^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜YÚ[[š[ŠNÂˆBŸB˜Û\ÜÈYšY]Ù\”™Y™\™[˜Ù\È^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜YšY]Ù\”™Y™\™[˜Ù\ÈŠNÂˆBŸB˜Û\ÜÈY\Ý]H^[™ÈÜ[ÛŒLÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜Y\Ý]HŠNÂˆBŸB˜Û\ÜÈYØ™Q^[œÚ[Û“]™[^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜YØ™Q^[œÚ[Û“]™[‹ˆOˆˆHH	‰ˆˆH
NÂˆBŸB˜Û\ÜÈYÙ[^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜YÙ[‹YJNÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHÈ]šX]\Ë›˜[YKš[J
HˆˆŽÂˆ\Ë˜ÛÛ[[ÛˆH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈ[Ø^\Ñ[X™Y^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜[Ø^\Ñ[X™YŠNÂˆBŸB˜Û\ÜÈ[Y^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜[YŠNÂˆBŸB˜Û\ÜÈÛÛ™šY×Ð\™XH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜\™XHŠNÂˆ\Ë›]™[HÙ][YÙ\ŠÂˆ]Nˆ]šX]\Ë›]™[ˆY˜][˜[YNˆˆ˜[Y]NˆˆOˆˆHH	‰ˆˆHÂˆJNÂˆ\Ë›˜[YHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›˜[YKÈˆ‹˜˜\˜ÛÙH‹˜ÛÜ™Z[š]‹™]šXÙQš]™\ˆ‹™›Û‹™Ù[™\˜[‹›^[Ý]‹›Y\™ÙH‹œØÜš\‹œÚYÛ˜]\™H‹œÛÝ\˜ÙTÙ]‹[\]PØXÚH—JNÂˆBŸB˜Û\ÜÈ]šX]\È^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜]šX]\È‹Èœ™\Ù\™H‹™[YØ]H‹šYÛ›Ü™H—JNÂˆBŸB˜Û\ÜÈ]]ÔØ]™H^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜]]ÔØ]™H‹È™\ØX›Y‹™[˜X›Y—JNÂˆBŸB˜Û\ÜÈ˜\ÙH^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜˜\ÙHŠNÂˆBŸB˜Û\ÜÈ˜]ÚÝ]]^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜˜]ÚÝ]]ŠNÂˆ\Ë™›Ü›X]HÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë™›Ü›X]È››Û™H‹˜ÛÛ˜Ø]‹žš\‹žš\ÛÛ\™\ÜÈ—JNÂˆBŸB˜Û\ÜÈ™Z]š[Ü“Ý™\œšYH^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜™Z]š[Ü“Ý™\œšYHŠNÂˆBˆÉš[˜[^™WJ
HÂˆ\ÖÉÛÛ[HH™]ÈX\
\ÖÉÛÛ[Kš[J
KœÜ]
×ÊËÊK™š[\ŠOˆš[˜ÛY\ÊŽˆŠJK›X\
OˆœÜ]
Žˆ‹ŠJJNÂˆBŸB˜Û\ÜÈØXÚH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ØXÚH‹YJNÂˆ\Ë[\]PØXÚHH[ÂˆBŸB˜Û\ÜÈÚ[™ÙH^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜Ú[™ÙHŠNÂˆBŸB˜Û\ÜÈÛÛ[[Ûˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÛ[[Ûˆ‹YJNÂˆ\Ë™]HH[Âˆ\Ë›ØØ[HH[Âˆ\Ë›ØØ[TÙ]H[Âˆ\Ë›Y\ÜØYÚ[™ÈH[Âˆ\ËœÝ\™\ÜÐ˜[›™\ˆH[Âˆ\Ë[\]HH[Âˆ\Ë˜[Y][Û“Y\ÜØYÚ[™ÈH[Âˆ\Ë™\œÚ[ÛÛÛ›ÛH[Âˆ\Ë›ÙÈH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈÛÛ\™\ÜÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÛ\™\ÜÈŠNÂˆ\ËœØÛÜHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\ËœØÛÜKÈš[XYÙSÛ›H‹™ØÝ[Y[—JNÂˆBŸB˜Û\ÜÈÛÛ\™\ÜÓÙÚXØ[ÝXÝ\™H^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÛ\™\ÜÓÙÚXØ[ÝXÝ\™HŠNÂˆBŸB˜Û\ÜÈÛÛ\™\ÜÓØš™XÝÝ™X[H^[™ÈÜ[ÛŒLÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÛ\™\ÜÓØš™XÝÝ™X[HŠNÂˆBŸB˜Û\ÜÈÛÛ\™\ÜÚ[Ûˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÛ\™\ÜÚ[Ûˆ‹YJNÂˆ\Ë˜ÛÛ\™\ÜÓÙÚXØ[ÝXÝ\™HH[Âˆ\Ë˜ÛÛ\™\ÜÓØš™XÝÝ™X[HH[Âˆ\Ë›]™[H[Âˆ\Ë\HH[ÂˆBŸB˜Û\ÜÈÛÛ™šYÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÛ™šYÈ‹YJNÂˆ\Ë˜XÜ›Ø˜]H[Âˆ\Ëœ™\Ù[H[Âˆ\Ë˜XÙHH[Âˆ\Ë˜YÙ[H™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈÛÛ™›Ü›X[˜ÙH^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÛ™›Ü›X[˜ÙH‹ÈH‹ˆ—JNÂˆBŸB˜Û\ÜÈÛÛ[ÛÜH^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÛ[ÛÜHŠNÂˆBŸB˜Û\ÜÈÛÜY\È^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜ÛÜY\È‹KˆOˆˆHJNÂˆBŸB˜Û\ÜÈÜ™X]Üˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜Ü™X]ÜˆŠNÂˆBŸB˜Û\ÜÈÝ\œ™[YÙH^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜Ý\œ™[YÙH‹ˆOˆˆH
NÂˆBŸB˜Û\ÜÈ]H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™]H‹YJNÂˆ\Ë˜Y\Ý]HH[Âˆ\Ë˜]šX]\ÈH[Âˆ\Ëš[˜Ü™[Y[[ØYH[Âˆ\Ë›Ý]]ÓH[Âˆ\Ëœ˜[™ÙHH[Âˆ\Ëœ™XÛÜ™H[Âˆ\ËœÝ\›ÙHH[Âˆ\Ë\šHH[Âˆ\ËÚ[™ÝÈH[Âˆ\ËžÛH[Âˆ\Ë™^ÛYS”ÈH™]ÈSØš™XÝ\œ˜^J
NÂˆ\Ë˜[œÙ›Ü›HH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈXYÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™XYÈ‹YJNÂˆ\Ë\šHH[ÂˆBŸB˜Û\ÜÈY˜][\Y˜XÙH^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™Y˜][\Y˜XÙHŠNÂˆ\ËÜš][™ÔØÜš\HÙ]Ýš[™ÓÜ[ÛŠ]šX]\ËÜš][™ÔØÜš\ÈŠˆ‹\˜XšXÈ‹Þ\š[XÈ‹‘X\Ý]\›ÜX[”›ÛX[ˆ‹‘Ü™YZÈ‹’Xœ™]È‹’˜\[™\ÙH‹’ÛÜ™X[ˆ‹”›ÛX[ˆ‹”Ú[\YšYYÚ[™\ÙH‹•ZH‹•˜Y][Û˜[Ú[™\ÙH‹•šY]˜[Y\ÙH—JNÂˆBŸB˜Û\ÜÈ\Ý[˜][Ûˆ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™\Ý[˜][Ûˆ‹Èœˆ‹œÛ‹œÈ‹ÙXÛY[‹žœ—JNÂˆBŸB˜Û\ÜÈØÝ[Y[\ÜÙ[X›H^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™ØÝ[Y[\ÜÙ[X›HŠNÂˆBŸB˜Û\ÜÈš]™\ˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™š]™\ˆ‹YJNÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHÈ]šX]\Ë›˜[YKš[J
HˆˆŽÂˆ\Ë™›Û[™›ÈH[Âˆ\ËžÈH[ÂˆBŸB˜Û\ÜÈ\^Ü[Ûˆ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™\^Ü[Ûˆ‹ÈœÚ[\^‹™\^›\Û™ÑYÙH‹™\^›\ÚÜYÙH—JNÂˆBŸB˜Û\ÜÈ[˜[ZXÔ™[™\ˆ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™[˜[ZXÔ™[™\ˆ‹È™›Ü˜šY[ˆ‹œ™\]Z\™Y—JNÂˆBŸB˜Û\ÜÈ[X™Y^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™[X™YŠNÂˆBŸB˜Û\ÜÈÛÛ™šY×Ñ[˜Üž\^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™[˜Üž\ŠNÂˆBŸB˜Û\ÜÈÛÛ™šY×Ñ[˜Üž\[Ûˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™[˜Üž\[Ûˆ‹YJNÂˆ\Ë™[˜Üž\H[Âˆ\Ë™[˜Üž\[Û“]™[H[Âˆ\Ëœ\›Z\ÜÚ[ÛœÈH[ÂˆBŸB˜Û\ÜÈ[˜Üž\[Û“]™[^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™[˜Üž\[Û“]™[‹Èš]‹ŒLŽš]—JNÂˆBŸB˜Û\ÜÈ[™›Ü˜ÙH^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™[™›Ü˜ÙHŠNÂˆBŸB˜Û\ÜÈ\]X]H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™\]X]HŠNÂˆ\Ë™›Ü˜ÙHHÙ][YÙ\ŠÂˆ]Nˆ]šX]\Ë™›Ü˜ÙKˆY˜][˜[YNˆKˆ˜[Y]NˆˆOˆˆOOHˆJNÂˆ\Ë™œ›ÛHH]šX]\Ë™œ›ÛHˆŽÂˆ\ËÈH]šX]\ËÈˆŽÂˆBŸB˜Û\ÜÈ\]X]T˜[™ÙH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™\]X]T˜[™ÙHŠNÂˆ\Ë™œ›ÛHH]šX]\Ë™œ›ÛHˆŽÂˆ\ËÈH]šX]\ËÈˆŽÂˆ\Ë—Ý[šXÛÙT˜[™ÙHH]šX]\Ë[šXÛÙT˜[™ÙHˆŽÂˆBˆÙ][šXÛÙT˜[™ÙJ
HÂˆÛÛœÝ˜[™Ù\ÈH×NÂˆÛÛœÝ[šXÛÙT™YÙ^HÕW
ÊÌNXKYKQ—JÊKÎÂˆÛÛœÝ[šXÛÙT˜[™ÙHH\Ë—Ý[šXÛÙT˜[™ÙNÂˆ›Üˆ
]˜[™ÙHÙˆ[šXÛÙT˜[™ÙKœÜ]
‹ŠK›X\
Oˆš[J
JK™š[\ŠOˆH^
JHÂˆ˜[™ÙHH˜[™ÙKœÜ]
‹H‹ŠK›X\
OˆÂˆÛÛœÝ›Ý[™H›X]Ú
[šXÛÙT™YÙ^
NÂˆYˆ
Y›Ý[™
HÂˆ™]\›ˆÂˆBˆ™]\›ˆ\œÙR[
›Ý[™ÌWKMŠNÂˆJNÂˆYˆ
˜[™ÙK›[™ÝOOHJHÂˆ˜[™ÙKœ\Ú
˜[™ÙVÌJNÂˆBˆ˜[™Ù\Ëœ\Ú
˜[™ÙJNÂˆBˆ™]\›ˆÚYÝÊ\Ë[šXÛÙT˜[™ÙH‹˜[™Ù\ÊNÂˆBŸB˜Û\ÜÈ^ÛYH^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™^ÛYHŠNÂˆBˆÉš[˜[^™WJ
HÂˆ\ÖÉÛÛ[HH\ÖÉÛÛ[Kš[J
KœÜ]
×ÊËÊK™š[\ŠOˆ	‰ˆÈ˜Ø[Ý[]H‹˜ÛÜÙH‹™[\ˆ‹™^]‹š[š]X[^™H‹œ™XYH‹˜[Y]H—Kš[˜ÛY\Ê
JNÂˆBŸB˜Û\ÜÈ^ÛYS”È^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™^ÛYS”ÈŠNÂˆBŸB˜Û\ÜÈ›\X™[^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™›\X™[‹È\ÙTš[\”Ù][™È‹›Ûˆ‹›Ù™ˆ—JNÂˆBŸB˜Û\ÜÈÛÛ™šY×Ñ›Û[™›È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™›Û[™›È‹YJNÂˆ\Ë™[X™YH[Âˆ\Ë›X\H[Âˆ\ËœÝXœÙ]™[ÝÈH[Âˆ\Ë˜[Ø^\Ñ[X™YH™]ÈSØš™XÝ\œ˜^J
NÂˆ\Ë™Y˜][\Y˜XÙHH™]ÈSØš™XÝ\œ˜^J
NÂˆ\Ë›™]™\‘[X™YH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈ›Ü›QšY[š[[™È^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™›Ü›QšY[š[[™ÈŠNÂˆBŸB˜Û\ÜÈÜ›Ý\\™[^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™Ü›Ý\\™[ŠNÂˆBŸB˜Û\ÜÈY‘[\H^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQšY‘[\H‹È™]U˜[YH‹™]QÜ›Ý\‹šYÛ›Ü™H‹œ™[[Ý™H—JNÂˆBŸB˜Û\ÜÈ[˜ÛYVÛÛ[^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQš[˜ÛYVÛÛ[ŠNÂˆBŸB˜Û\ÜÈ[˜Ü™[Y[[ØY^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQš[˜Ü™[Y[[ØY‹È››Û™H‹™›ÜØ\™Û›H—JNÂˆBŸB˜Û\ÜÈ[˜Ü™[Y[[Y\™ÙH^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQš[˜Ü™[Y[[Y\™ÙHŠNÂˆBŸB˜Û\ÜÈ[\˜XÝ]™H^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQš[\˜XÝ]™HŠNÂˆBŸB˜Û\ÜÈ›ÙÈ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQš›ÙÈ‹È\ÙTš[\”Ù][™È‹››Û™H‹œYÙTÙ]—JNÂˆBŸB˜Û\ÜÈX™[š[\ˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›X™[š[\ˆ‹YJNÂˆ\Ë›˜[YHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›˜[YKÈžœ‹™‹š\‹Ü—JNÂˆ\Ë˜˜]ÚÝ]]H[Âˆ\Ë™›\X™[H[Âˆ\Ë™›Û[™›ÈH[Âˆ\ËžÈH[ÂˆBŸB˜Û\ÜÈ^[Ý]^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›^[Ý]‹ÈœYÚ[˜]H‹œ[™[—JNÂˆBŸB˜Û\ÜÈ]™[^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›]™[‹ˆOˆˆˆ
NÂˆBŸB˜Û\ÜÈ[™X\š^™Y^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›[™X\š^™YŠNÂˆBŸB˜Û\ÜÈØØ[H^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›ØØ[HŠNÂˆBŸB˜Û\ÜÈØØ[TÙ]^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›ØØ[TÙ]ŠNÂˆBŸB˜Û\ÜÈÙÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›ÙÈ‹YJNÂˆ\Ë›[ÙHH[Âˆ\Ë™\ÚÛH[Âˆ\ËÈH[Âˆ\Ë\šHH[ÂˆBŸB˜Û\ÜÈX\[[Y[^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›X\‹YJNÂˆ\Ë™\]X]HH™]ÈSØš™XÝ\œ˜^J
NÂˆ\Ë™\]X]T˜[™ÙHH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈYY][R[™›È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›YY][R[™›È‹YJNÂˆ\Ë›X\H[ÂˆBŸB˜Û\ÜÈÛÛ™šY×ÓY\ÜØYÙH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›Y\ÜØYÙH‹YJNÂˆ\Ë›\ÙÒYH[Âˆ\ËœÙ]™\š]HH[ÂˆBŸB˜Û\ÜÈY\ÜØYÚ[™È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›Y\ÜØYÚ[™È‹YJNÂˆ\Ë›Y\ÜØYÙHH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈ[ÙH^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›[ÙH‹È˜\[™‹›Ý™\Üš]H—JNÂˆBŸB˜Û\ÜÈ[ÙYžP[››ÝÈ^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›[ÙYžP[››ÝÈŠNÂˆBŸB˜Û\ÜÈ\ÙÒY^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›\ÙÒY‹KˆOˆˆHJNÂˆBŸB˜Û\ÜÈ˜[YP]ˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›˜[YP]ˆŠNÂˆBŸB˜Û\ÜÈ™]™\‘[X™Y^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›™]™\‘[X™YŠNÂˆBŸB˜Û\ÜÈ[X™\“ÙÛÜY\È^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›[X™\“ÙÛÜY\È‹[ˆOˆˆHˆ	‰ˆˆHJNÂˆBŸB˜Û\ÜÈÜ[XÝ[Ûˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›Ü[XÝ[Ûˆ‹YJNÂˆ\Ë™\Ý[˜][ÛˆH[ÂˆBŸB˜Û\ÜÈÝ]]^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›Ý]]‹YJNÂˆ\ËÈH[Âˆ\Ë\HH[Âˆ\Ë\šHH[ÂˆBŸB˜Û\ÜÈÝ]]š[ˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›Ý]]š[ˆŠNÂˆBŸB˜Û\ÜÈÝ]]Ó^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›Ý]]Ó‹YJNÂˆ\Ë\šHH[ÂˆBŸB˜Û\ÜÈÝ™\œš[^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ›Ý™\œš[‹È››Û™H‹˜›Ý‹™˜]È‹™šY[—JNÂˆBŸB˜Û\ÜÈXÚÙ]È^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœXÚÙ]ÈŠNÂˆBˆÉš[˜[^™WJ
HÂˆYˆ
\ÖÉÛÛ[HOOHŠˆŠHÂˆ™]\›ŽÂˆBˆ\ÖÉÛÛ[HH\ÖÉÛÛ[Kš[J
KœÜ]
×ÊËÊK™š[\ŠOˆÈ˜ÛÛ™šYÈ‹™]\Ù]È‹[\]H‹ž™ˆ‹žÛ—Kš[˜ÛY\Ê
JNÂˆBŸB˜Û\ÜÈYÙSÙ™œÙ]^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœYÙSÙ™œÙ]ŠNÂˆ\ËžHÙ][YÙ\ŠÂˆ]Nˆ]šX]\ËžˆY˜][˜[YNˆ\ÙVÔÙ][™È‹ˆ˜[Y]NˆˆOˆYBˆJNÂˆ\ËžHHÙ][YÙ\ŠÂˆ]Nˆ]šX]\ËžKˆY˜][˜[YNˆ\ÙVÔÙ][™È‹ˆ˜[Y]NˆˆOˆYBˆJNÂˆBŸB˜Û\ÜÈYÙT˜[™ÙH^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœYÙT˜[™ÙHŠNÂˆBˆÉš[˜[^™WJ
HÂˆÛÛœÝ[X™\œÈH\ÖÉÛÛ[Kš[J
KœÜ]
×ÊËÊK›X\
Oˆ\œÙR[
L
JNÂˆÛÛœÝ˜[™Ù\ÈH×NÂˆ›Üˆ
]HHZHH[X™\œË›[™ÝÈHZNÈH
ÏHŠHÂˆ˜[™Ù\Ëœ\Ú
[X™\œËœÛXÙJKH
ÈŠJNÂˆBˆ\ÖÉÛÛ[HH˜[™Ù\ÎÂˆBŸB˜Û\ÜÈYÚ[˜][Ûˆ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœYÚ[˜][Ûˆ‹ÈœÚ[\^‹™\^ÚÜYÙH‹™\^Û™ÑYÙH—JNÂˆBŸB˜Û\ÜÈYÚ[˜][Û“Ý™\œšYH^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœYÚ[˜][Û“Ý™\œšYH‹È››Û™H‹™›Ü˜ÙQ\^‹™›Ü˜ÙQ\^Û™ÑYÙH‹™›Ü˜ÙQ\^ÚÜYÙH‹™›Ü˜ÙTÚ[\^—JNÂˆBŸB˜Û\ÜÈ\^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ\‹KˆOˆ˜[ÙJNÂˆBŸB˜Û\ÜÈÛ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÛ‹YJNÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë˜˜]ÚÝ]]H[Âˆ\Ë™›Û[™›ÈH[Âˆ\Ëš›ÙÈH[Âˆ\Ë›YY][R[™›ÈH[Âˆ\Ë›Ý]]š[ˆH[Âˆ\ËœYÙSÙ™œÙ]H[Âˆ\ËœÝ\HH[Âˆ\ËžÈH[ÂˆBŸB˜Û\ÜÈˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœˆ‹YJNÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë˜YØ™Q^[œÚ[Û“]™[H[Âˆ\Ë˜˜]ÚÝ]]H[Âˆ\Ë˜ÛÛ\™\ÜÚ[ÛˆH[Âˆ\Ë˜Ü™X]ÜˆH[Âˆ\Ë™[˜Üž\[ÛˆH[Âˆ\Ë™›Û[™›ÈH[Âˆ\Ëš[\˜XÝ]™HH[Âˆ\Ë›[™X\š^™YH[Âˆ\Ë›Ü[XÝ[ÛˆH[Âˆ\Ëœ˜HH[Âˆ\Ëœ›ÙXÙ\ˆH[Âˆ\Ëœ™[™\”ÛXÞHH[Âˆ\ËœØÜš\[Ù[H[Âˆ\ËœÚ[[š[H[Âˆ\ËœÝX›Z]›Ü›X]H[Âˆ\ËYÙÙYH[Âˆ\Ë™\œÚ[ÛˆH[Âˆ\ËšY]Ù\”™Y™\™[˜Ù\ÈH[Âˆ\ËžÈH[ÂˆBŸB˜Û\ÜÈ˜H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ˜H‹YJNÂˆ\Ë˜[YH[Âˆ\Ë˜ÛÛ™›Ü›X[˜ÙHH[Âˆ\Ëš[˜ÛYVÛÛ[H[Âˆ\Ëœ\H[ÂˆBŸB˜Û\ÜÈ\›Z\ÜÚ[ÛœÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ\›Z\ÜÚ[ÛœÈ‹YJNÂˆ\Ë˜XØÙ\ÜÚX›PÛÛ[H[Âˆ\Ë˜Ú[™ÙHH[Âˆ\Ë˜ÛÛ[ÛÜHH[Âˆ\Ë™ØÝ[Y[\ÜÙ[X›HH[Âˆ\Ë™›Ü›QšY[š[[™ÈH[Âˆ\Ë›[ÙYžP[››ÝÈH[Âˆ\ËœZ[^Y]Y]HH[Âˆ\Ëœš[H[Âˆ\Ëœš[YÚ]X[]HH[ÂˆBŸB˜Û\ÜÈXÚÕ˜^PžT”Ú^™H^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœXÚÕ˜^PžT”Ú^™HŠNÂˆBŸB˜Û\ÜÈÛÛ™šY×ÔXÝ\™H^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœXÝ\™HŠNÂˆBŸB˜Û\ÜÈZ[^Y]Y]H^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœZ[^Y]Y]HŠNÂˆBŸB˜Û\ÜÈ™\Ù[˜ÙH^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ™\Ù[˜ÙH‹Èœ™\Ù\™H‹™\ÜÛÛ™H‹™\ÜÛÛ™TÝXÝ\™H‹šYÛ›Ü™H‹œ™[[Ý™H—JNÂˆBŸB˜Û\ÜÈ™\Ù[^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ™\Ù[‹YJNÂˆ\Ë˜™Z]š[Ü“Ý™\œšYHH[Âˆ\Ë˜ØXÚHH[Âˆ\Ë˜ÛÛ[[ÛˆH[Âˆ\Ë˜ÛÜY\ÈH[Âˆ\Ë™\Ý[˜][ÛˆH[Âˆ\Ëš[˜Ü™[Y[[Y\™ÙHH[Âˆ\Ë›^[Ý]H[Âˆ\Ë›Ý]]H[Âˆ\Ë›Ý™\œš[H[Âˆ\ËœYÚ[˜][ÛˆH[Âˆ\ËœYÚ[˜][Û“Ý™\œšYHH[Âˆ\ËœØÜš\H[Âˆ\Ë˜[Y]HH[Âˆ\ËžH[Âˆ\Ë™š]™\ˆH™]ÈSØš™XÝ\œ˜^J
NÂˆ\Ë›X™[š[\ˆH™]ÈSØš™XÝ\œ˜^J
NÂˆ\ËœÛH™]ÈSØš™XÝ\œ˜^J
NÂˆ\ËœˆH™]ÈSØš™XÝ\œ˜^J
NÂˆ\ËœÈH™]ÈSØš™XÝ\œ˜^J
NÂˆ\ËœÝX›Z]\›H™]ÈSØš™XÝ\œ˜^J
NÂˆ\ËÙXÛY[H™]ÈSØš™XÝ\œ˜^J
NÂˆ\ËžœH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈš[^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœš[ŠNÂˆBŸB˜Û\ÜÈš[YÚ]X[]H^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœš[YÚ]X[]HŠNÂˆBŸB˜Û\ÜÈš[ØØ[[™È^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœš[ØØ[[™È‹È˜\Y˜][‹››ÔØØ[[™È—JNÂˆBŸB˜Û\ÜÈš[\“˜[YH^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœš[\“˜[YHŠNÂˆBŸB˜Û\ÜÈ›ÙXÙ\ˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ›ÙXÙ\ˆŠNÂˆBŸB˜Û\ÜÈÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÈ‹YJNÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë˜˜]ÚÝ]]H[Âˆ\Ë™›Û[™›ÈH[Âˆ\Ëš›ÙÈH[Âˆ\Ë›YY][R[™›ÈH[Âˆ\Ë›Ý]]š[ˆH[Âˆ\ËœÝ\HH[Âˆ\ËžÈH[ÂˆBŸB˜Û\ÜÈ˜[™ÙH^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ˜[™ÙHŠNÂˆBˆÉš[˜[^™WJ
HÂˆ\ÖÉÛÛ[HH\ÖÉÛÛ[KœÜ]
‹‹ŠK›X\
˜[™ÙHOˆ˜[™ÙKœÜ]
‹HŠK›X\
Oˆ\œÙR[
š[J
KL
JJK™š[\Š˜[™ÙHOˆ˜[™ÙK™]™\žJOˆZ\Ó˜SŠ
JJK›X\
˜[™ÙHOˆÂˆYˆ
˜[™ÙK›[™ÝOOHJHÂˆ˜[™ÙKœ\Ú
˜[™ÙVÌJNÂˆBˆ™]\›ˆ˜[™ÙNÂˆJNÂˆBŸB˜Û\ÜÈ™XÛÜ™^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ™XÛÜ™ŠNÂˆBˆÉš[˜[^™WJ
HÂˆ\ÖÉÛÛ[HH\ÖÉÛÛ[Kš[J
NÂˆÛÛœÝˆH\œÙR[
\ÖÉÛÛ[KL
NÂˆYˆ
Z\Ó˜SŠŠH	‰ˆˆH
HÂˆ\ÖÉÛÛ[HHŽÂˆBˆBŸB˜Û\ÜÈ™[]˜[^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ™[]˜[ŠNÂˆBˆÉš[˜[^™WJ
HÂˆ\ÖÉÛÛ[HH\ÖÉÛÛ[Kš[J
KœÜ]
×ÊËÊNÂˆBŸB˜Û\ÜÈ™[˜[YH^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ™[˜[YHŠNÂˆBˆÉš[˜[^™WJ
HÂˆ\ÖÉÛÛ[HH\ÖÉÛÛ[Kš[J
NÂˆYˆ
\ÖÉÛÛ[KÓÝÙ\Ø\ÙJ
KœÝ\ÕÚ]
ž[ŠH™]È™YÑ^
–×ÓW×V×ÓW—×Ó_KWJˆ‹HŠK\Ý
\ÖÉÛÛ[JJHÂˆØ\›Š–HH™[˜[YNˆ[˜[YH˜[YHŠNÂˆBˆBŸB˜Û\ÜÈ™[™\”ÛXÞH^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ™[™\”ÛXÞH‹ÈœÙ\™\ˆ‹˜ÛY[—JNÂˆBŸB˜Û\ÜÈ[”ØÜš\È^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœ[”ØÜš\È‹È˜›Ý‹˜ÛY[‹››Û™H‹œÙ\™\ˆ—JNÂˆBŸB˜Û\ÜÈÛÛ™šY×ÔØÜš\^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœØÜš\‹YJNÂˆ\Ë˜Ý\œ™[YÙHH[Âˆ\Ë™^ÛYHH[Âˆ\Ëœ[”ØÜš\ÈH[ÂˆBŸB˜Û\ÜÈØÜš\[Ù[^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœØÜš\[Ù[‹È–H‹››Û™H—JNÂˆBŸB˜Û\ÜÈÙ]™\š]H^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÙ]™\š]H‹ÈšYÛ›Ü™H‹™\œ›Üˆ‹š[™›Ü›X][Ûˆ‹˜XÙH‹Ø\›š[™È—JNÂˆBŸB˜Û\ÜÈÚ[[š[^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÚ[[š[‹YJNÂˆ\Ë˜YÚ[[š[H[Âˆ\Ëœš[\“˜[YHH[ÂˆBŸB˜Û\ÜÈÝ\H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÝ\HŠNÂˆ\Ë›[ÙHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›[ÙKÈ\ÙTš[\”Ù][™È‹›Ûˆ‹›Ù™ˆ—JNÂˆBŸB˜Û\ÜÈÝ\›ÙH^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÝ\›ÙHŠNÂˆBŸB˜Û\ÜÈÝ\YÙH^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÝ\YÙH‹ˆOˆYJNÂˆBŸB˜Û\ÜÈÝX›Z]›Ü›X]^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÝX›Z]›Ü›X]‹Èš[‹™[YØ]H‹™™ˆ‹ž[‹œˆ—JNÂˆBŸB˜Û\ÜÈÝX›Z]\›^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÝX›Z]\›ŠNÂˆBŸB˜Û\ÜÈÝXœÙ]™[ÝÈ^[™È[YÙ\“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÝXœÙ]™[ÝÈ‹LˆOˆˆH	‰ˆˆHL
NÂˆBŸB˜Û\ÜÈÝ\™\ÜÐ˜[›™\ˆ^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQœÝ\™\ÜÐ˜[›™\ˆŠNÂˆBŸB˜Û\ÜÈYÙÙY^[™ÈÜ[ÛŒHÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQYÙÙYŠNÂˆBŸB˜Û\ÜÈÛÛ™šY×Õ[\]H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ[\]H‹YJNÂˆ\Ë˜˜\ÙHH[Âˆ\Ëœ™[]˜[H[Âˆ\ËœÝ\YÙHH[Âˆ\Ë\šHH[Âˆ\ËžÛH[ÂˆBŸB˜Û\ÜÈ™\ÚÛ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™\ÚÛ‹È˜XÙH‹™\œ›Üˆ‹š[™›Ü›X][Ûˆ‹Ø\›š[™È—JNÂˆBŸB˜Û\ÜÈÈ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQÈ‹È›[‹›Y[[ÜžH‹œÝ\œˆ‹œÝÝ]‹œÞ\Ý[H‹\šH—JNÂˆBŸB˜Û\ÜÈ[\]PØXÚH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ[\]PØXÚHŠNÂˆ\Ë›X^[šY\ÈHÙ][YÙ\ŠÂˆ]Nˆ]šX]\Ë›X^[šY\ËˆY˜][˜[YNˆKˆ˜[Y]NˆˆOˆˆHˆJNÂˆBŸB˜Û\ÜÈ˜XÙH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜XÙH‹YJNÂˆ\Ë˜\™XHH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈ˜[œÙ›Ü›H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜[œÙ›Ü›H‹YJNÂˆ\Ë™Ü›Ý\\™[H[Âˆ\ËšY‘[\HH[Âˆ\Ë›˜[YP]ˆH[Âˆ\ËœXÝ\™HH[Âˆ\Ëœ™\Ù[˜ÙHH[Âˆ\Ëœ™[˜[YHH[Âˆ\ËÚ]\ÜXÙHH[ÂˆBŸB˜Û\ÜÈ\H^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ\H‹È››Û™H‹˜\ØÚZNH‹˜\ØÚZR^‹˜ØÚ]˜^‹™›]H‹›È‹œ[“[™Ý‹›˜]]™H‹ž‹›Y\™ÙY—JNÂˆBŸB˜Û\ÜÈ\šH^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ\šHŠNÂˆBŸB˜Û\ÜÈÛÛ™šY×Õ˜[Y]H^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜[Y]H‹Èœ™TÝX›Z]‹œ™Tš[‹œ™Q^XÝ]H‹œ™TØ]™H—JNÂˆBŸB˜Û\ÜÈ˜[Y]P\›Ý˜[ÚYÛ˜]\™\È^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜[Y]P\›Ý˜[ÚYÛ˜]\™\ÈŠNÂˆBˆÉš[˜[^™WJ
HÂˆ\ÖÉÛÛ[HH\ÖÉÛÛ[Kš[J
KœÜ]
×ÊËÊK™š[\ŠOˆÈ™ØÔ™XYH‹œÜÝÚYÛˆ—Kš[˜ÛY\Ê
JNÂˆBŸB˜Û\ÜÈ˜[Y][Û“Y\ÜØYÚ[™È^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ˜[Y][Û“Y\ÜØYÚ[™È‹È˜[Y\ÜØYÙ\Ò[™]šYX[H‹˜[Y\ÜØYÙ\ÕÙÙ]\ˆ‹™š\œÝY\ÜØYÙSÛ›H‹››ÓY\ÜØYÙ\È—JNÂˆBŸB˜Û\ÜÈ™\œÚ[Ûˆ^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ™\œÚ[Ûˆ‹ÈŒKÈ‹ŒKˆ‹ŒKH‹ŒK‹ŒKŒÈ‹ŒKŒˆ—JNÂˆBŸB˜Û\ÜÈ™\œÚ[ÛÛÛ›Û^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQ•™\œÚ[ÛÛÛ›ÛŠNÂˆ\Ë›Ý]]™[ÝÈHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›Ý]]™[ÝËÈØ\›ˆ‹™\œ›Üˆ‹\]H—JNÂˆ\ËœÛÝ\˜ÙPX›Ý™HHÙ]Ýš[™ÓÜ[ÛŠ]šX]\ËœÛÝ\˜ÙPX›Ý™KÈØ\›ˆ‹™\œ›Üˆ—JNÂˆ\ËœÛÝ\˜ÙP™[ÝÈHÙ]Ýš[™ÓÜ[ÛŠ]šX]\ËœÛÝ\˜ÙP™[ÝËÈ\]H‹›XZ[Z[ˆ—JNÂˆBŸB˜Û\ÜÈšY]Ù\”™Y™\™[˜Ù\È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQšY]Ù\”™Y™\™[˜Ù\È‹YJNÂˆ\ËQ‘WÒ”ÐÛÛœÛÛHH[Âˆ\ËQ‘WÒ”ÑXYÙÙ\ˆH[Âˆ\Ë˜YšY]Ù\”™Y™\™[˜Ù\ÈH[Âˆ\Ë™\^Ü[ÛˆH[Âˆ\Ë™[™›Ü˜ÙHH[Âˆ\Ë›[X™\“ÙÛÜY\ÈH[Âˆ\ËœYÙT˜[™ÙHH[Âˆ\ËœXÚÕ˜^PžT”Ú^™HH[Âˆ\Ëœš[ØØ[[™ÈH[ÂˆBŸB˜Û\ÜÈÙXÛY[^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQÙXÛY[‹YJNÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHÈ]šX]\Ë›˜[YKš[J
HˆˆŽÂˆ\Ë™›Û[™›ÈH[Âˆ\ËžÈH[ÂˆBŸB˜Û\ÜÈÚ]\ÜXÙH^[™ÈÜ[Û“Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQÚ]\ÜXÙH‹Èœ™\Ù\™H‹›š[H‹››Ü›X[^™H‹œš[H‹š[H—JNÂˆBŸB˜Û\ÜÈÚ[™ÝÈ^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQÚ[™ÝÈŠNÂˆBˆÉš[˜[^™WJ
HÂˆÛÛœÝZ\ˆH\ÖÉÛÛ[KœÜ]
‹‹ŠK›X\
Oˆ\œÙR[
š[J
KL
JNÂˆYˆ
Z\‹œÛÛYJOˆ\Ó˜SŠ
JJHÂˆ\ÖÉÛÛ[HHÌNÂˆ™]\›ŽÂˆBˆYˆ
Z\‹›[™ÝOOHJHÂˆZ\‹œ\Ú
Z\–ÌJNÂˆBˆ\ÖÉÛÛ[HHZ\ŽÂˆBŸB˜Û\ÜÈÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQžÈ‹YJNÂˆ\Ë\šHH™]ÈSØš™XÝ\œ˜^J
NÂˆ\ËžÛH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQž‹YJNÂˆ\ËœXÚÙ]ÈH[ÂˆBŸB˜Û\ÜÈÛ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQžÛ‹YJNÂˆ\Ë™XYÈH[Âˆ\Ë\šHH[ÂˆBŸB˜Û\ÜÈœ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ‘’Q×Ó”×ÒQžœ‹YJNÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHÈ]šX]\Ë›˜[YKš[J
HˆˆŽÂˆ\Ë˜˜]ÚÝ]]H[Âˆ\Ë™›\X™[H[Âˆ\Ë™›Û[™›ÈH[Âˆ\ËžÈH[ÂˆBŸB˜Û\ÜÈÛÛ™šYÓ˜[Y\ÜXÙHÂˆÝ]XÈÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆYˆ
ÛÛ™šYÓ˜[Y\ÜXÙKš\ÓÝÛ”›Ü\J˜[YJJHÂˆ™]\›ˆÛÛ™šYÓ˜[Y\ÜXÙVÛ˜[YWJ]šX]\ÊNÂˆBˆ™]\›ˆ[™Yš[™YÂˆBˆÝ]XÈXÜ›Ø˜]
]œÊHÂˆ™]\›ˆ™]ÈXÜ›Ø˜]
]œÊNÂˆBˆÝ]XÈXÜ›Ø˜]Ê]œÊHÂˆ™]\›ˆ™]ÈXÜ›Ø˜]Ê]œÊNÂˆBˆÝ]XÈQ‘WÒ”ÐÛÛœÛÛJ]œÊHÂˆ™]\›ˆ™]ÈQ‘WÒ”ÐÛÛœÛÛJ]œÊNÂˆBˆÝ]XÈQ‘WÒ”ÑXYÙÙ\Š]œÊHÂˆ™]\›ˆ™]ÈQ‘WÒ”ÑXYÙÙ\Š]œÊNÂˆBˆÝ]XÈYÚ[[š[
]œÊHÂˆ™]\›ˆ™]ÈYÚ[[š[
]œÊNÂˆBˆÝ]XÈYšY]Ù\”™Y™\™[˜Ù\Ê]œÊHÂˆ™]\›ˆ™]ÈYšY]Ù\”™Y™\™[˜Ù\Ê]œÊNÂˆBˆÝ]XÈY\Ý]J]œÊHÂˆ™]\›ˆ™]ÈY\Ý]J]œÊNÂˆBˆÝ]XÈYØ™Q^[œÚ[Û“]™[
]œÊHÂˆ™]\›ˆ™]ÈYØ™Q^[œÚ[Û“]™[
]œÊNÂˆBˆÝ]XÈYÙ[
]œÊHÂˆ™]\›ˆ™]ÈYÙ[
]œÊNÂˆBˆÝ]XÈ[Ø^\Ñ[X™Y
]œÊHÂˆ™]\›ˆ™]È[Ø^\Ñ[X™Y
]œÊNÂˆBˆÝ]XÈ[Y
]œÊHÂˆ™]\›ˆ™]È[Y
]œÊNÂˆBˆÝ]XÈ\™XJ]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×Ð\™XJ]œÊNÂˆBˆÝ]XÈ]šX]\Ê]œÊHÂˆ™]\›ˆ™]È]šX]\Ê]œÊNÂˆBˆÝ]XÈ]]ÔØ]™J]œÊHÂˆ™]\›ˆ™]È]]ÔØ]™J]œÊNÂˆBˆÝ]XÈ˜\ÙJ]œÊHÂˆ™]\›ˆ™]È˜\ÙJ]œÊNÂˆBˆÝ]XÈ˜]ÚÝ]]
]œÊHÂˆ™]\›ˆ™]È˜]ÚÝ]]
]œÊNÂˆBˆÝ]XÈ™Z]š[Ü“Ý™\œšYJ]œÊHÂˆ™]\›ˆ™]È™Z]š[Ü“Ý™\œšYJ]œÊNÂˆBˆÝ]XÈØXÚJ]œÊHÂˆ™]\›ˆ™]ÈØXÚJ]œÊNÂˆBˆÝ]XÈÚ[™ÙJ]œÊHÂˆ™]\›ˆ™]ÈÚ[™ÙJ]œÊNÂˆBˆÝ]XÈÛÛ[[ÛŠ]œÊHÂˆ™]\›ˆ™]ÈÛÛ[[ÛŠ]œÊNÂˆBˆÝ]XÈÛÛ\™\ÜÊ]œÊHÂˆ™]\›ˆ™]ÈÛÛ\™\ÜÊ]œÊNÂˆBˆÝ]XÈÛÛ\™\ÜÓÙÚXØ[ÝXÝ\™J]œÊHÂˆ™]\›ˆ™]ÈÛÛ\™\ÜÓÙÚXØ[ÝXÝ\™J]œÊNÂˆBˆÝ]XÈÛÛ\™\ÜÓØš™XÝÝ™X[J]œÊHÂˆ™]\›ˆ™]ÈÛÛ\™\ÜÓØš™XÝÝ™X[J]œÊNÂˆBˆÝ]XÈÛÛ\™\ÜÚ[ÛŠ]œÊHÂˆ™]\›ˆ™]ÈÛÛ\™\ÜÚ[ÛŠ]œÊNÂˆBˆÝ]XÈÛÛ™šYÊ]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šYÊ]œÊNÂˆBˆÝ]XÈÛÛ™›Ü›X[˜ÙJ]œÊHÂˆ™]\›ˆ™]ÈÛÛ™›Ü›X[˜ÙJ]œÊNÂˆBˆÝ]XÈÛÛ[ÛÜJ]œÊHÂˆ™]\›ˆ™]ÈÛÛ[ÛÜJ]œÊNÂˆBˆÝ]XÈÛÜY\Ê]œÊHÂˆ™]\›ˆ™]ÈÛÜY\Ê]œÊNÂˆBˆÝ]XÈÜ™X]ÜŠ]œÊHÂˆ™]\›ˆ™]ÈÜ™X]ÜŠ]œÊNÂˆBˆÝ]XÈÝ\œ™[YÙJ]œÊHÂˆ™]\›ˆ™]ÈÝ\œ™[YÙJ]œÊNÂˆBˆÝ]XÈ]J]œÊHÂˆ™]\›ˆ™]È]J]œÊNÂˆBˆÝ]XÈXYÊ]œÊHÂˆ™]\›ˆ™]ÈXYÊ]œÊNÂˆBˆÝ]XÈY˜][\Y˜XÙJ]œÊHÂˆ™]\›ˆ™]ÈY˜][\Y˜XÙJ]œÊNÂˆBˆÝ]XÈ\Ý[˜][ÛŠ]œÊHÂˆ™]\›ˆ™]È\Ý[˜][ÛŠ]œÊNÂˆBˆÝ]XÈØÝ[Y[\ÜÙ[X›J]œÊHÂˆ™]\›ˆ™]ÈØÝ[Y[\ÜÙ[X›J]œÊNÂˆBˆÝ]XÈš]™\Š]œÊHÂˆ™]\›ˆ™]Èš]™\Š]œÊNÂˆBˆÝ]XÈ\^Ü[ÛŠ]œÊHÂˆ™]\›ˆ™]È\^Ü[ÛŠ]œÊNÂˆBˆÝ]XÈ[˜[ZXÔ™[™\Š]œÊHÂˆ™]\›ˆ™]È[˜[ZXÔ™[™\Š]œÊNÂˆBˆÝ]XÈ[X™Y
]œÊHÂˆ™]\›ˆ™]È[X™Y
]œÊNÂˆBˆÝ]XÈ[˜Üž\
]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×Ñ[˜Üž\
]œÊNÂˆBˆÝ]XÈ[˜Üž\[ÛŠ]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×Ñ[˜Üž\[ÛŠ]œÊNÂˆBˆÝ]XÈ[˜Üž\[Û“]™[
]œÊHÂˆ™]\›ˆ™]È[˜Üž\[Û“]™[
]œÊNÂˆBˆÝ]XÈ[™›Ü˜ÙJ]œÊHÂˆ™]\›ˆ™]È[™›Ü˜ÙJ]œÊNÂˆBˆÝ]XÈ\]X]J]œÊHÂˆ™]\›ˆ™]È\]X]J]œÊNÂˆBˆÝ]XÈ\]X]T˜[™ÙJ]œÊHÂˆ™]\›ˆ™]È\]X]T˜[™ÙJ]œÊNÂˆBˆÝ]XÈ^ÛYJ]œÊHÂˆ™]\›ˆ™]È^ÛYJ]œÊNÂˆBˆÝ]XÈ^ÛYS”Ê]œÊHÂˆ™]\›ˆ™]È^ÛYS”Ê]œÊNÂˆBˆÝ]XÈ›\X™[
]œÊHÂˆ™]\›ˆ™]È›\X™[
]œÊNÂˆBˆÝ]XÈ›Û[™›Ê]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×Ñ›Û[™›Ê]œÊNÂˆBˆÝ]XÈ›Ü›QšY[š[[™Ê]œÊHÂˆ™]\›ˆ™]È›Ü›QšY[š[[™Ê]œÊNÂˆBˆÝ]XÈÜ›Ý\\™[
]œÊHÂˆ™]\›ˆ™]ÈÜ›Ý\\™[
]œÊNÂˆBˆÝ]XÈY‘[\J]œÊHÂˆ™]\›ˆ™]ÈY‘[\J]œÊNÂˆBˆÝ]XÈ[˜ÛYVÛÛ[
]œÊHÂˆ™]\›ˆ™]È[˜ÛYVÛÛ[
]œÊNÂˆBˆÝ]XÈ[˜Ü™[Y[[ØY
]œÊHÂˆ™]\›ˆ™]È[˜Ü™[Y[[ØY
]œÊNÂˆBˆÝ]XÈ[˜Ü™[Y[[Y\™ÙJ]œÊHÂˆ™]\›ˆ™]È[˜Ü™[Y[[Y\™ÙJ]œÊNÂˆBˆÝ]XÈ[\˜XÝ]™J]œÊHÂˆ™]\›ˆ™]È[\˜XÝ]™J]œÊNÂˆBˆÝ]XÈ›ÙÊ]œÊHÂˆ™]\›ˆ™]È›ÙÊ]œÊNÂˆBˆÝ]XÈX™[š[\Š]œÊHÂˆ™]\›ˆ™]ÈX™[š[\Š]œÊNÂˆBˆÝ]XÈ^[Ý]
]œÊHÂˆ™]\›ˆ™]È^[Ý]
]œÊNÂˆBˆÝ]XÈ]™[
]œÊHÂˆ™]\›ˆ™]È]™[
]œÊNÂˆBˆÝ]XÈ[™X\š^™Y
]œÊHÂˆ™]\›ˆ™]È[™X\š^™Y
]œÊNÂˆBˆÝ]XÈØØ[J]œÊHÂˆ™]\›ˆ™]ÈØØ[J]œÊNÂˆBˆÝ]XÈØØ[TÙ]
]œÊHÂˆ™]\›ˆ™]ÈØØ[TÙ]
]œÊNÂˆBˆÝ]XÈÙÊ]œÊHÂˆ™]\›ˆ™]ÈÙÊ]œÊNÂˆBˆÝ]XÈX\
]œÊHÂˆ™]\›ˆ™]ÈX\[[Y[
]œÊNÂˆBˆÝ]XÈYY][R[™›Ê]œÊHÂˆ™]\›ˆ™]ÈYY][R[™›Ê]œÊNÂˆBˆÝ]XÈY\ÜØYÙJ]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×ÓY\ÜØYÙJ]œÊNÂˆBˆÝ]XÈY\ÜØYÚ[™Ê]œÊHÂˆ™]\›ˆ™]ÈY\ÜØYÚ[™Ê]œÊNÂˆBˆÝ]XÈ[ÙJ]œÊHÂˆ™]\›ˆ™]È[ÙJ]œÊNÂˆBˆÝ]XÈ[ÙYžP[››ÝÊ]œÊHÂˆ™]\›ˆ™]È[ÙYžP[››ÝÊ]œÊNÂˆBˆÝ]XÈ\ÙÒY
]œÊHÂˆ™]\›ˆ™]È\ÙÒY
]œÊNÂˆBˆÝ]XÈ˜[YP]Š]œÊHÂˆ™]\›ˆ™]È˜[YP]Š]œÊNÂˆBˆÝ]XÈ™]™\‘[X™Y
]œÊHÂˆ™]\›ˆ™]È™]™\‘[X™Y
]œÊNÂˆBˆÝ]XÈ[X™\“ÙÛÜY\Ê]œÊHÂˆ™]\›ˆ™]È[X™\“ÙÛÜY\Ê]œÊNÂˆBˆÝ]XÈÜ[XÝ[ÛŠ]œÊHÂˆ™]\›ˆ™]ÈÜ[XÝ[ÛŠ]œÊNÂˆBˆÝ]XÈÝ]]
]œÊHÂˆ™]\›ˆ™]ÈÝ]]
]œÊNÂˆBˆÝ]XÈÝ]]š[Š]œÊHÂˆ™]\›ˆ™]ÈÝ]]š[Š]œÊNÂˆBˆÝ]XÈÝ]]Ó
]œÊHÂˆ™]\›ˆ™]ÈÝ]]Ó
]œÊNÂˆBˆÝ]XÈÝ™\œš[
]œÊHÂˆ™]\›ˆ™]ÈÝ™\œš[
]œÊNÂˆBˆÝ]XÈXÚÙ]Ê]œÊHÂˆ™]\›ˆ™]ÈXÚÙ]Ê]œÊNÂˆBˆÝ]XÈYÙSÙ™œÙ]
]œÊHÂˆ™]\›ˆ™]ÈYÙSÙ™œÙ]
]œÊNÂˆBˆÝ]XÈYÙT˜[™ÙJ]œÊHÂˆ™]\›ˆ™]ÈYÙT˜[™ÙJ]œÊNÂˆBˆÝ]XÈYÚ[˜][ÛŠ]œÊHÂˆ™]\›ˆ™]ÈYÚ[˜][ÛŠ]œÊNÂˆBˆÝ]XÈYÚ[˜][Û“Ý™\œšYJ]œÊHÂˆ™]\›ˆ™]ÈYÚ[˜][Û“Ý™\œšYJ]œÊNÂˆBˆÝ]XÈ\
]œÊHÂˆ™]\›ˆ™]È\
]œÊNÂˆBˆÝ]XÈÛ
]œÊHÂˆ™]\›ˆ™]ÈÛ
]œÊNÂˆBˆÝ]XÈŠ]œÊHÂˆ™]\›ˆ™]ÈŠ]œÊNÂˆBˆÝ]XÈ˜J]œÊHÂˆ™]\›ˆ™]È˜J]œÊNÂˆBˆÝ]XÈ\›Z\ÜÚ[ÛœÊ]œÊHÂˆ™]\›ˆ™]È\›Z\ÜÚ[ÛœÊ]œÊNÂˆBˆÝ]XÈXÚÕ˜^PžT”Ú^™J]œÊHÂˆ™]\›ˆ™]ÈXÚÕ˜^PžT”Ú^™J]œÊNÂˆBˆÝ]XÈXÝ\™J]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×ÔXÝ\™J]œÊNÂˆBˆÝ]XÈZ[^Y]Y]J]œÊHÂˆ™]\›ˆ™]ÈZ[^Y]Y]J]œÊNÂˆBˆÝ]XÈ™\Ù[˜ÙJ]œÊHÂˆ™]\›ˆ™]È™\Ù[˜ÙJ]œÊNÂˆBˆÝ]XÈ™\Ù[
]œÊHÂˆ™]\›ˆ™]È™\Ù[
]œÊNÂˆBˆÝ]XÈš[
]œÊHÂˆ™]\›ˆ™]Èš[
]œÊNÂˆBˆÝ]XÈš[YÚ]X[]J]œÊHÂˆ™]\›ˆ™]Èš[YÚ]X[]J]œÊNÂˆBˆÝ]XÈš[ØØ[[™Ê]œÊHÂˆ™]\›ˆ™]Èš[ØØ[[™Ê]œÊNÂˆBˆÝ]XÈš[\“˜[YJ]œÊHÂˆ™]\›ˆ™]Èš[\“˜[YJ]œÊNÂˆBˆÝ]XÈ›ÙXÙ\Š]œÊHÂˆ™]\›ˆ™]È›ÙXÙ\Š]œÊNÂˆBˆÝ]XÈÊ]œÊHÂˆ™]\›ˆ™]ÈÊ]œÊNÂˆBˆÝ]XÈ˜[™ÙJ]œÊHÂˆ™]\›ˆ™]È˜[™ÙJ]œÊNÂˆBˆÝ]XÈ™XÛÜ™
]œÊHÂˆ™]\›ˆ™]È™XÛÜ™
]œÊNÂˆBˆÝ]XÈ™[]˜[
]œÊHÂˆ™]\›ˆ™]È™[]˜[
]œÊNÂˆBˆÝ]XÈ™[˜[YJ]œÊHÂˆ™]\›ˆ™]È™[˜[YJ]œÊNÂˆBˆÝ]XÈ™[™\”ÛXÞJ]œÊHÂˆ™]\›ˆ™]È™[™\”ÛXÞJ]œÊNÂˆBˆÝ]XÈ[”ØÜš\Ê]œÊHÂˆ™]\›ˆ™]È[”ØÜš\Ê]œÊNÂˆBˆÝ]XÈØÜš\
]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×ÔØÜš\
]œÊNÂˆBˆÝ]XÈØÜš\[Ù[
]œÊHÂˆ™]\›ˆ™]ÈØÜš\[Ù[
]œÊNÂˆBˆÝ]XÈÙ]™\š]J]œÊHÂˆ™]\›ˆ™]ÈÙ]™\š]J]œÊNÂˆBˆÝ]XÈÚ[[š[
]œÊHÂˆ™]\›ˆ™]ÈÚ[[š[
]œÊNÂˆBˆÝ]XÈÝ\J]œÊHÂˆ™]\›ˆ™]ÈÝ\J]œÊNÂˆBˆÝ]XÈÝ\›ÙJ]œÊHÂˆ™]\›ˆ™]ÈÝ\›ÙJ]œÊNÂˆBˆÝ]XÈÝ\YÙJ]œÊHÂˆ™]\›ˆ™]ÈÝ\YÙJ]œÊNÂˆBˆÝ]XÈÝX›Z]›Ü›X]
]œÊHÂˆ™]\›ˆ™]ÈÝX›Z]›Ü›X]
]œÊNÂˆBˆÝ]XÈÝX›Z]\›
]œÊHÂˆ™]\›ˆ™]ÈÝX›Z]\›
]œÊNÂˆBˆÝ]XÈÝXœÙ]™[ÝÊ]œÊHÂˆ™]\›ˆ™]ÈÝXœÙ]™[ÝÊ]œÊNÂˆBˆÝ]XÈÝ\™\ÜÐ˜[›™\Š]œÊHÂˆ™]\›ˆ™]ÈÝ\™\ÜÐ˜[›™\Š]œÊNÂˆBˆÝ]XÈYÙÙY
]œÊHÂˆ™]\›ˆ™]ÈYÙÙY
]œÊNÂˆBˆÝ]XÈ[\]J]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×Õ[\]J]œÊNÂˆBˆÝ]XÈ[\]PØXÚJ]œÊHÂˆ™]\›ˆ™]È[\]PØXÚJ]œÊNÂˆBˆÝ]XÈ™\ÚÛ
]œÊHÂˆ™]\›ˆ™]È™\ÚÛ
]œÊNÂˆBˆÝ]XÈÊ]œÊHÂˆ™]\›ˆ™]ÈÊ]œÊNÂˆBˆÝ]XÈ˜XÙJ]œÊHÂˆ™]\›ˆ™]È˜XÙJ]œÊNÂˆBˆÝ]XÈ˜[œÙ›Ü›J]œÊHÂˆ™]\›ˆ™]È˜[œÙ›Ü›J]œÊNÂˆBˆÝ]XÈ\J]œÊHÂˆ™]\›ˆ™]È\J]œÊNÂˆBˆÝ]XÈ\šJ]œÊHÂˆ™]\›ˆ™]È\šJ]œÊNÂˆBˆÝ]XÈ˜[Y]J]œÊHÂˆ™]\›ˆ™]ÈÛÛ™šY×Õ˜[Y]J]œÊNÂˆBˆÝ]XÈ˜[Y]P\›Ý˜[ÚYÛ˜]\™\Ê]œÊHÂˆ™]\›ˆ™]È˜[Y]P\›Ý˜[ÚYÛ˜]\™\Ê]œÊNÂˆBˆÝ]XÈ˜[Y][Û“Y\ÜØYÚ[™Ê]œÊHÂˆ™]\›ˆ™]È˜[Y][Û“Y\ÜØYÚ[™Ê]œÊNÂˆBˆÝ]XÈ™\œÚ[ÛŠ]œÊHÂˆ™]\›ˆ™]È™\œÚ[ÛŠ]œÊNÂˆBˆÝ]XÈ™\œÚ[ÛÛÛ›Û
]œÊHÂˆ™]\›ˆ™]È™\œÚ[ÛÛÛ›Û
]œÊNÂˆBˆÝ]XÈšY]Ù\”™Y™\™[˜Ù\Ê]œÊHÂˆ™]\›ˆ™]ÈšY]Ù\”™Y™\™[˜Ù\Ê]œÊNÂˆBˆÝ]XÈÙXÛY[
]œÊHÂˆ™]\›ˆ™]ÈÙXÛY[
]œÊNÂˆBˆÝ]XÈÚ]\ÜXÙJ]œÊHÂˆ™]\›ˆ™]ÈÚ]\ÜXÙJ]œÊNÂˆBˆÝ]XÈÚ[™ÝÊ]œÊHÂˆ™]\›ˆ™]ÈÚ[™ÝÊ]œÊNÂˆBˆÝ]XÈÊ]œÊHÂˆ™]\›ˆ™]ÈÊ]œÊNÂˆBˆÝ]XÈ
]œÊHÂˆ™]\›ˆ™]È
]œÊNÂˆBˆÝ]XÈÛ
]œÊHÂˆ™]\›ˆ™]ÈÛ
]œÊNÂˆBˆÝ]XÈœ
]œÊHÂˆ™]\›ˆ™]Èœ
]œÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KØÛÛ›™XÝ[Û—ÜÙ]šœÂ‚‚˜ÛÛœÝÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQH˜[Y\ÜXÙRYË˜ÛÛ›™XÝ[Û”Ù]šYÂ˜Û\ÜÈÛÛ›™XÝ[Û”Ù]^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQ˜ÛÛ›™XÝ[Û”Ù]‹YJNÂˆ\ËÜÙÛÛ›™XÝ[ÛˆH™]ÈSØš™XÝ\œ˜^J
NÂˆ\Ëž[ÛÛ›™XÝ[ÛˆH™]ÈSØš™XÝ\œ˜^J
NÂˆ\ËžÙÛÛ›™XÝ[ÛˆH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈY™™XÝ]™R[œ]ÛXÞH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQ™Y™™XÝ]™R[œ]ÛXÞHŠNÂˆ\ËšYH]šX]\ËšYˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë\ÙHH]šX]\Ë\ÙHˆŽÂˆ\Ë\ÙZ™YˆH]šX]\Ë\ÙZ™YˆˆŽÂˆBŸB˜Û\ÜÈY™™XÝ]™SÝ]]ÛXÞH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQ™Y™™XÝ]™SÝ]]ÛXÞHŠNÂˆ\ËšYH]šX]\ËšYˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë\ÙHH]šX]\Ë\ÙHˆŽÂˆ\Ë\ÙZ™YˆH]šX]\Ë\ÙZ™YˆˆŽÂˆBŸB˜Û\ÜÈÜ\˜][Ûˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQ›Ü\˜][ÛˆŠNÂˆ\ËšYH]šX]\ËšYˆŽÂˆ\Ëš[œ]H]šX]\Ëš[œ]ˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë›Ý]]H]šX]\Ë›Ý]]ˆŽÂˆ\Ë\ÙHH]šX]\Ë\ÙHˆŽÂˆ\Ë\ÙZ™YˆH]šX]\Ë\ÙZ™YˆˆŽÂˆBŸB˜Û\ÜÈ›ÛÝ[[Y[^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQœ›ÛÝ[[Y[ŠNÂˆ\ËšYH]šX]\ËšYˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë\ÙHH]šX]\Ë\ÙHˆŽÂˆ\Ë\ÙZ™YˆH]šX]\Ë\ÙZ™YˆˆŽÂˆBŸB˜Û\ÜÈÛØ\XÝ[Ûˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQœÛØ\XÝ[ÛˆŠNÂˆ\ËšYH]šX]\ËšYˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë\ÙHH]šX]\Ë\ÙHˆŽÂˆ\Ë\ÙZ™YˆH]šX]\Ë\ÙZ™YˆˆŽÂˆBŸB˜Û\ÜÈÛØ\Y™\ÜÈ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQœÛØ\Y™\ÜÈŠNÂˆ\ËšYH]šX]\ËšYˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë\ÙHH]šX]\Ë\ÙHˆŽÂˆ\Ë\ÙZ™YˆH]šX]\Ë\ÙZ™YˆˆŽÂˆBŸB˜Û\ÜÈÛÛ›™XÝ[Û—ÜÙ]Õ\šH^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQ\šHŠNÂˆ\ËšYH]šX]\ËšYˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë\ÙHH]šX]\Ë\ÙHˆŽÂˆ\Ë\ÙZ™YˆH]šX]\Ë\ÙZ™YˆˆŽÂˆBŸB˜Û\ÜÈÜÙY™\ÜÈ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQÜÙY™\ÜÈŠNÂˆ\ËšYH]šX]\ËšYˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë\ÙHH]šX]\Ë\ÙHˆŽÂˆ\Ë\ÙZ™YˆH]šX]\Ë\ÙZ™YˆˆŽÂˆBŸB˜Û\ÜÈÜÙÛÛ›™XÝ[Ûˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQÜÙÛÛ›™XÝ[Ûˆ‹YJNÂˆ\Ë™]Q\ØÜš\[ÛˆH]šX]\Ë™]Q\ØÜš\[ÛˆˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë™Y™™XÝ]™R[œ]ÛXÞHH[Âˆ\Ë™Y™™XÝ]™SÝ]]ÛXÞHH[Âˆ\Ë›Ü\˜][ÛˆH[Âˆ\ËœÛØ\XÝ[ÛˆH[Âˆ\ËœÛØ\Y™\ÜÈH[Âˆ\ËÜÙY™\ÜÈH[ÂˆBŸB˜Û\ÜÈ[ÛÛ›™XÝ[Ûˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQž[ÛÛ›™XÝ[Ûˆ‹YJNÂˆ\Ë™]Q\ØÜš\[ÛˆH]šX]\Ë™]Q\ØÜš\[ÛˆˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ë\šHH[ÂˆBŸB˜Û\ÜÈÙÛÛ›™XÝ[Ûˆ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓÓ“‘PÕSÓ—ÔÑUÓ”×ÒQžÙÛÛ›™XÝ[Ûˆ‹YJNÂˆ\Ë™]Q\ØÜš\[ÛˆH]šX]\Ë™]Q\ØÜš\[ÛˆˆŽÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆ\Ëœ›ÛÝ[[Y[H[Âˆ\Ë\šHH[ÂˆBŸB˜Û\ÜÈÛÛ›™XÝ[Û”Ù]˜[Y\ÜXÙHÂˆÝ]XÈÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆYˆ
ÛÛ›™XÝ[Û”Ù]˜[Y\ÜXÙKš\ÓÝÛ”›Ü\J˜[YJJHÂˆ™]\›ˆÛÛ›™XÝ[Û”Ù]˜[Y\ÜXÙVÛ˜[YWJ]šX]\ÊNÂˆBˆ™]\›ˆ[™Yš[™YÂˆBˆÝ]XÈÛÛ›™XÝ[Û”Ù]
]œÊHÂˆ™]\›ˆ™]ÈÛÛ›™XÝ[Û”Ù]
]œÊNÂˆBˆÝ]XÈY™™XÝ]™R[œ]ÛXÞJ]œÊHÂˆ™]\›ˆ™]ÈY™™XÝ]™R[œ]ÛXÞJ]œÊNÂˆBˆÝ]XÈY™™XÝ]™SÝ]]ÛXÞJ]œÊHÂˆ™]\›ˆ™]ÈY™™XÝ]™SÝ]]ÛXÞJ]œÊNÂˆBˆÝ]XÈÜ\˜][ÛŠ]œÊHÂˆ™]\›ˆ™]ÈÜ\˜][ÛŠ]œÊNÂˆBˆÝ]XÈ›ÛÝ[[Y[
]œÊHÂˆ™]\›ˆ™]È›ÛÝ[[Y[
]œÊNÂˆBˆÝ]XÈÛØ\XÝ[ÛŠ]œÊHÂˆ™]\›ˆ™]ÈÛØ\XÝ[ÛŠ]œÊNÂˆBˆÝ]XÈÛØ\Y™\ÜÊ]œÊHÂˆ™]\›ˆ™]ÈÛØ\Y™\ÜÊ]œÊNÂˆBˆÝ]XÈ\šJ]œÊHÂˆ™]\›ˆ™]ÈÛÛ›™XÝ[Û—ÜÙ]Õ\šJ]œÊNÂˆBˆÝ]XÈÜÙY™\ÜÊ]œÊHÂˆ™]\›ˆ™]ÈÜÙY™\ÜÊ]œÊNÂˆBˆÝ]XÈÜÙÛÛ›™XÝ[ÛŠ]œÊHÂˆ™]\›ˆ™]ÈÜÙÛÛ›™XÝ[ÛŠ]œÊNÂˆBˆÝ]XÈ[ÛÛ›™XÝ[ÛŠ]œÊHÂˆ™]\›ˆ™]È[ÛÛ›™XÝ[ÛŠ]œÊNÂˆBˆÝ]XÈÙÛÛ›™XÝ[ÛŠ]œÊHÂˆ™]\›ˆ™]ÈÙÛÛ›™XÝ[ÛŠ]œÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÙ]\Ù]ËšœÂ‚‚‚˜ÛÛœÝUTÑU×Ó”×ÒQH˜[Y\ÜXÙRYË™]\Ù]ËšYÂ˜Û\ÜÈ]\Ù]×Ñ]H^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠUTÑU×Ó”×ÒQ™]H‹]šX]\ÊNÂˆBˆÉ\ÓœÐYÛ›ÜÝX×J
HÂˆ™]\›ˆYNÂˆBŸB˜Û\ÜÈ]\Ù]È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠUTÑU×Ó”×ÒQ™]\Ù]È‹YJNÂˆ\Ë™]HH[Âˆ\Ë”ÚYÛ˜]\™HH[ÂˆBˆÉÛÚ[JÚ[
HÂˆÛÛœÝ˜[YHHÚ[É›ÙS˜[YWNÂˆYˆ
˜[YHOOH™]Hˆ	‰ˆÚ[É˜[Y\ÜXÙRYHOOHUTÑU×Ó”×ÒQ˜[YHOOH”ÚYÛ˜]\™Hˆ	‰ˆÚ[É˜[Y\ÜXÙRYHOOH˜[Y\ÜXÙRYËœÚYÛ˜]\™KšY
HÂˆ\ÖÛ˜[YWHHÚ[ÂˆBˆ\ÖÉ\[™Ú[JÚ[
NÂˆBŸB˜Û\ÜÈ]\Ù]Ó˜[Y\ÜXÙHÂˆÝ]XÈÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆYˆ
]\Ù]Ó˜[Y\ÜXÙKš\ÓÝÛ”›Ü\J˜[YJJHÂˆ™]\›ˆ]\Ù]Ó˜[Y\ÜXÙVÛ˜[YWJ]šX]\ÊNÂˆBˆ™]\›ˆ[™Yš[™YÂˆBˆÝ]XÈ]\Ù]Ê]šX]\ÊHÂˆ™]\›ˆ™]È]\Ù]Ê]šX]\ÊNÂˆBˆÝ]XÈ]J]šX]\ÊHÂˆ™]\›ˆ™]È]\Ù]×Ñ]J]šX]\ÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÛØØ[WÜÙ]šœÂ‚‚‚˜ÛÛœÝÐÐSWÔÑUÓ”×ÒQH˜[Y\ÜXÙRYË›ØØ[TÙ]šYÂ˜Û\ÜÈØ[[™\”Þ[X›ÛÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ˜Ø[[™\”Þ[X›ÛÈ‹YJNÂˆ\Ë›˜[YHH™Ü™YÛÜšX[ˆŽÂˆ\Ë™^S˜[Y\ÈH™]ÈSØš™XÝ\œ˜^JŠNÂˆ\Ë™\˜S˜[Y\ÈH[Âˆ\Ë›Y\šYY[S˜[Y\ÈH[Âˆ\Ë›[Û˜[Y\ÈH™]ÈSØš™XÝ\œ˜^JŠNÂˆBŸB˜Û\ÜÈÝ\œ™[˜ÞTÞ[X›Û^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ˜Ý\œ™[˜ÞTÞ[X›ÛŠNÂˆ\Ë›˜[YHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›˜[YKÈœÞ[X›Û‹š\ÛÛ˜[YH‹™XÚ[X[—JNÂˆBŸB˜Û\ÜÈÝ\œ™[˜ÞTÞ[X›ÛÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ˜Ý\œ™[˜ÞTÞ[X›ÛÈ‹YJNÂˆ\Ë˜Ý\œ™[˜ÞTÞ[X›ÛH™]ÈSØš™XÝ\œ˜^JÊNÂˆBŸB˜Û\ÜÈ]T]\›ˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ™]T]\›ˆŠNÂˆ\Ë›˜[YHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›˜[YKÈ™[‹›Û™È‹›YY‹œÚÜ—JNÂˆBŸB˜Û\ÜÈ]T]\›œÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ™]T]\›œÈ‹YJNÂˆ\Ë™]T]\›ˆH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈ]U[YTÞ[X›ÛÈ^[™ÈÛÛ[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ™]U[YTÞ[X›ÛÈŠNÂˆBŸB˜Û\ÜÈ^H^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ™^HŠNÂˆBŸB˜Û\ÜÈ^S˜[Y\È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ™^S˜[Y\È‹YJNÂˆ\Ë˜X˜œˆHÙ][YÙ\ŠÂˆ]Nˆ]šX]\Ë˜X˜œ‹ˆY˜][˜[YNˆˆ˜[Y]NˆOˆOOHBˆJNÂˆ\Ë™^HH™]ÈSØš™XÝ\œ˜^JÊNÂˆBŸB˜Û\ÜÈ\˜H^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ™\˜HŠNÂˆBŸB˜Û\ÜÈ\˜S˜[Y\È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ™\˜S˜[Y\È‹YJNÂˆ\Ë™\˜HH™]ÈSØš™XÝ\œ˜^JŠNÂˆBŸB˜Û\ÜÈØØ[WÜÙ]ÓØØ[H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›ØØ[H‹YJNÂˆ\Ë™\ØÈH]šX]\Ë™\ØÈˆŽÂˆ\Ë›˜[YHHš\ÛÛ˜[YHŽÂˆ\Ë˜Ø[[™\”Þ[X›ÛÈH[Âˆ\Ë˜Ý\œ™[˜ÞTÞ[X›ÛÈH[Âˆ\Ë™]T]\›œÈH[Âˆ\Ë™]U[YTÞ[X›ÛÈH[Âˆ\Ë›[X™\”]\›œÈH[Âˆ\Ë›[X™\”Þ[X›ÛÈH[Âˆ\Ë[YT]\›œÈH[Âˆ\Ë\Q˜XÙ\ÈH[ÂˆBŸB˜Û\ÜÈØØ[WÜÙ]ÓØØ[TÙ]^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›ØØ[TÙ]‹YJNÂˆ\Ë›ØØ[HH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈY\šYY[H^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›Y\šYY[HŠNÂˆBŸB˜Û\ÜÈY\šYY[S˜[Y\È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›Y\šYY[S˜[Y\È‹YJNÂˆ\Ë›Y\šYY[HH™]ÈSØš™XÝ\œ˜^JŠNÂˆBŸB˜Û\ÜÈ[Û^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›[ÛŠNÂˆBŸB˜Û\ÜÈ[Û˜[Y\È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›[Û˜[Y\È‹YJNÂˆ\Ë˜X˜œˆHÙ][YÙ\ŠÂˆ]Nˆ]šX]\Ë˜X˜œ‹ˆY˜][˜[YNˆˆ˜[Y]NˆOˆOOHBˆJNÂˆ\Ë›[ÛH™]ÈSØš™XÝ\œ˜^JLŠNÂˆBŸB˜Û\ÜÈ[X™\”]\›ˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›[X™\”]\›ˆŠNÂˆ\Ë›˜[YHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›˜[YKÈ™[‹›Û™È‹›YY‹œÚÜ—JNÂˆBŸB˜Û\ÜÈ[X™\”]\›œÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›[X™\”]\›œÈ‹YJNÂˆ\Ë›[X™\”]\›ˆH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈ[X™\”Þ[X›Û^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›[X™\”Þ[X›ÛŠNÂˆ\Ë›˜[YHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›˜[YKÈ™XÚ[X[‹™Ü›Ý\[™È‹œ\˜Ù[‹›Z[\È‹ž™\›È—JNÂˆBŸB˜Û\ÜÈ[X™\”Þ[X›ÛÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ›[X™\”Þ[X›ÛÈ‹YJNÂˆ\Ë›[X™\”Þ[X›ÛH™]ÈSØš™XÝ\œ˜^JJNÂˆBŸB˜Û\ÜÈ[YT]\›ˆ^[™ÈÝš[™ÓØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ[YT]\›ˆŠNÂˆ\Ë›˜[YHHÙ]Ýš[™ÓÜ[ÛŠ]šX]\Ë›˜[YKÈ™[‹›Û™È‹›YY‹œÚÜ—JNÂˆBŸB˜Û\ÜÈ[YT]\›œÈ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ[YT]\›œÈ‹YJNÂˆ\Ë[YT]\›ˆH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈ\Q˜XÙH^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ\Q˜XÙH‹YJNÂˆ\Ë›˜[YHH]šX]\Ë›˜[YHˆŽÂˆBŸB˜Û\ÜÈ\Q˜XÙ\È^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÐÐSWÔÑUÓ”×ÒQ\Q˜XÙ\È‹YJNÂˆ\Ë\Q˜XÙHH™]ÈSØš™XÝ\œ˜^J
NÂˆBŸB˜Û\ÜÈØØ[TÙ]˜[Y\ÜXÙHÂˆÝ]XÈÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆYˆ
ØØ[TÙ]˜[Y\ÜXÙKš\ÓÝÛ”›Ü\J˜[YJJHÂˆ™]\›ˆØØ[TÙ]˜[Y\ÜXÙVÛ˜[YWJ]šX]\ÊNÂˆBˆ™]\›ˆ[™Yš[™YÂˆBˆÝ]XÈØ[[™\”Þ[X›ÛÊ]œÊHÂˆ™]\›ˆ™]ÈØ[[™\”Þ[X›ÛÊ]œÊNÂˆBˆÝ]XÈÝ\œ™[˜ÞTÞ[X›Û
]œÊHÂˆ™]\›ˆ™]ÈÝ\œ™[˜ÞTÞ[X›Û
]œÊNÂˆBˆÝ]XÈÝ\œ™[˜ÞTÞ[X›ÛÊ]œÊHÂˆ™]\›ˆ™]ÈÝ\œ™[˜ÞTÞ[X›ÛÊ]œÊNÂˆBˆÝ]XÈ]T]\›Š]œÊHÂˆ™]\›ˆ™]È]T]\›Š]œÊNÂˆBˆÝ]XÈ]T]\›œÊ]œÊHÂˆ™]\›ˆ™]È]T]\›œÊ]œÊNÂˆBˆÝ]XÈ]U[YTÞ[X›ÛÊ]œÊHÂˆ™]\›ˆ™]È]U[YTÞ[X›ÛÊ]œÊNÂˆBˆÝ]XÈ^J]œÊHÂˆ™]\›ˆ™]È^J]œÊNÂˆBˆÝ]XÈ^S˜[Y\Ê]œÊHÂˆ™]\›ˆ™]È^S˜[Y\Ê]œÊNÂˆBˆÝ]XÈ\˜J]œÊHÂˆ™]\›ˆ™]È\˜J]œÊNÂˆBˆÝ]XÈ\˜S˜[Y\Ê]œÊHÂˆ™]\›ˆ™]È\˜S˜[Y\Ê]œÊNÂˆBˆÝ]XÈØØ[J]œÊHÂˆ™]\›ˆ™]ÈØØ[WÜÙ]ÓØØ[J]œÊNÂˆBˆÝ]XÈØØ[TÙ]
]œÊHÂˆ™]\›ˆ™]ÈØØ[WÜÙ]ÓØØ[TÙ]
]œÊNÂˆBˆÝ]XÈY\šYY[J]œÊHÂˆ™]\›ˆ™]ÈY\šYY[J]œÊNÂˆBˆÝ]XÈY\šYY[S˜[Y\Ê]œÊHÂˆ™]\›ˆ™]ÈY\šYY[S˜[Y\Ê]œÊNÂˆBˆÝ]XÈ[Û
]œÊHÂˆ™]\›ˆ™]È[Û
]œÊNÂˆBˆÝ]XÈ[Û˜[Y\Ê]œÊHÂˆ™]\›ˆ™]È[Û˜[Y\Ê]œÊNÂˆBˆÝ]XÈ[X™\”]\›Š]œÊHÂˆ™]\›ˆ™]È[X™\”]\›Š]œÊNÂˆBˆÝ]XÈ[X™\”]\›œÊ]œÊHÂˆ™]\›ˆ™]È[X™\”]\›œÊ]œÊNÂˆBˆÝ]XÈ[X™\”Þ[X›Û
]œÊHÂˆ™]\›ˆ™]È[X™\”Þ[X›Û
]œÊNÂˆBˆÝ]XÈ[X™\”Þ[X›ÛÊ]œÊHÂˆ™]\›ˆ™]È[X™\”Þ[X›ÛÊ]œÊNÂˆBˆÝ]XÈ[YT]\›Š]œÊHÂˆ™]\›ˆ™]È[YT]\›Š]œÊNÂˆBˆÝ]XÈ[YT]\›œÊ]œÊHÂˆ™]\›ˆ™]È[YT]\›œÊ]œÊNÂˆBˆÝ]XÈ\Q˜XÙJ]œÊHÂˆ™]\›ˆ™]È\Q˜XÙJ]œÊNÂˆBˆÝ]XÈ\Q˜XÙ\Ê]œÊHÂˆ™]\›ˆ™]È\Q˜XÙ\Ê]œÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÜÚYÛ˜]\™KšœÂ‚‚˜ÛÛœÝÒQÓUT‘WÓ”×ÒQH˜[Y\ÜXÙRYËœÚYÛ˜]\™KšYÂ˜Û\ÜÈÚYÛ˜]\™WÔÚYÛ˜]\™H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÒQÓUT‘WÓ”×ÒQœÚYÛ˜]\™H‹YJNÂˆBŸB˜Û\ÜÈÚYÛ˜]\™S˜[Y\ÜXÙHÂˆÝ]XÈÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆYˆ
ÚYÛ˜]\™S˜[Y\ÜXÙKš\ÓÝÛ”›Ü\J˜[YJJHÂˆ™]\›ˆÚYÛ˜]\™S˜[Y\ÜXÙVÛ˜[YWJ]šX]\ÊNÂˆBˆ™]\›ˆ[™Yš[™YÂˆBˆÝ]XÈÚYÛ˜]\™J]šX]\ÊHÂˆ™]\›ˆ™]ÈÚYÛ˜]\™WÔÚYÛ˜]\™J]šX]\ÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÜÝ[\ÚY]šœÂ‚‚˜ÛÛœÝÕSTÒQUÓ”×ÒQH˜[Y\ÜXÙRYËœÝ[\ÚY]šYÂ˜Û\ÜÈÝ[\ÚY]^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÕSTÒQUÓ”×ÒQœÝ[\ÚY]‹YJNÂˆBŸB˜Û\ÜÈÝ[\ÚY]˜[Y\ÜXÙHÂˆÝ]XÈÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆYˆ
Ý[\ÚY]˜[Y\ÜXÙKš\ÓÝÛ”›Ü\J˜[YJJHÂˆ™]\›ˆÝ[\ÚY]˜[Y\ÜXÙVÛ˜[YWJ]šX]\ÊNÂˆBˆ™]\›ˆ[™Yš[™YÂˆBˆÝ]XÈÝ[\ÚY]
]šX]\ÊHÂˆ™]\›ˆ™]ÈÝ[\ÚY]
]šX]\ÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÞšœÂ‚‚‚˜ÛÛœÝÓ”×ÒQH˜[Y\ÜXÙRYËžšYÂ˜Û\ÜÈÖ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\ŠÓ”×ÒQž‹YJNÂˆ\Ë]ZYH]šX]\Ë]ZYˆŽÂˆ\Ë[YTÝ[\H]šX]\Ë[YTÝ[\ˆŽÂˆ\Ë˜ÛÛ™šYÈH[Âˆ\Ë˜ÛÛ›™XÝ[Û”Ù]H[Âˆ\Ë™]\Ù]ÈH[Âˆ\Ë›ØØ[TÙ]H[Âˆ\ËœÝ[\ÚY]H™]ÈSØš™XÝ\œ˜^J
NÂˆ\Ë[\]HH[ÂˆBˆÉÛÚ[ÚXÚ×JÚ[
HÂˆÛÛœÝœÈH˜[Y\ÜXÙRYÖØÚ[É›ÙS˜[YWWNÂˆ™]\›ˆœÈ	‰ˆÚ[É˜[Y\ÜXÙRYHOOHœËšYÂˆBŸB˜Û\ÜÈ˜[Y\ÜXÙHÂˆÝ]XÈÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆYˆ
˜[Y\ÜXÙKš\ÓÝÛ”›Ü\J˜[YJJHÂˆ™]\›ˆ˜[Y\ÜXÙVÛ˜[YWJ]šX]\ÊNÂˆBˆ™]\›ˆ[™Yš[™YÂˆBˆÝ]XÈ
]šX]\ÊHÂˆ™]\›ˆ™]ÈÖ
]šX]\ÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÞ[šœÂ‚‚‚‚‚˜ÛÛœÝSÓ”×ÒQH˜[Y\ÜXÙRYËž[šYÂ˜ÛÛœÝ	šXÚ^HÞ[X›Û

NÂ˜ÛÛœÝSQÔÕSTÈH™]ÈÙ]
È˜ÛÛÜˆ‹™›Û‹™›ÛY˜[Z[H‹™›Û\Ú^™H‹™›Û\Ý™]Ú‹™›Û\Ý[H‹™›Û]ÙZYÚ‹›X\™Ú[ˆ‹›X\™Ú[‹X›ÝÛH‹›X\™Ú[‹[Y‹›X\™Ú[‹\šYÚ‹›X\™Ú[‹]Ü‹›]\‹\ÜXÚ[™È‹›[™KZZYÚ‹›Üœ[œÈ‹œYÙKXœ™XZËXY\ˆ‹œYÙKXœ™XZËX™Y›Ü™H‹œYÙKXœ™XZËZ[œÚYH‹X‹Z[\˜[‹X‹\ÝÜ‹^X[YÛˆ‹^YXÛÜ˜][Ûˆ‹^Z[™[‹™\XØ[X[YÛˆ‹ÚYÝÜÈ‹šÙ\›š[™Ë[[ÙH‹ž˜KY›ÛZÜš^›Û[\ØØ[H‹ž˜KY›Û]™\XØ[\ØØ[H‹ž˜K\ÜXÙ\[ˆ‹ž˜K]X‹\ÝÜÈ—JNÂ˜ÛÛœÝÝ[SX\[™ÈH™]ÈX\
ÖÈœYÙKXœ™XZËXY\ˆ‹˜œ™XZÐY\ˆ—KÈœYÙKXœ™XZËX™Y›Ü™H‹˜œ™XZÐ™Y›Ü™H—KÈœYÙKXœ™XZËZ[œÚYH‹˜œ™XZÒ[œÚYH—KÈšÙ\›š[™Ë[[ÙH‹˜[YHOˆ˜[YHOOH››Û™HˆÈ››Û™Hˆˆ››Ü›X[—KÈž˜KY›ÛZÜš^›Û[\ØØ[H‹˜[YHOˆØØ[V
	ÓX]›X^
\œÙR[
˜[YJHÈL
KÑš^Y
Š_JXKÈž˜KY›Û]™\XØ[\ØØ[H‹˜[YHOˆØØ[VJ	ÓX]›X^
\œÙR[
˜[YJHÈL
KÑš^Y
Š_JXKÈž˜K\ÜXÙ\[ˆ‹ˆ—KÈž˜K]X‹\ÝÜÈ‹ˆ—KÈ™›Û\Ú^™H‹
˜[YKÜšYÚ[˜[
HOˆÂˆ˜[YHHÜšYÚ[˜[™›ÛÚ^™HHX]˜XœÊÙ]YX\Ý\™[Y[
˜[YJJNÂˆ™]\›ˆYX\Ý\™UÔÝš[™ÊŽNH
ˆ˜[YJNÂŸWKÈ›]\‹\ÜXÚ[™È‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWKÈ›[™KZZYÚ‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWKÈ›X\™Ú[ˆ‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWKÈ›X\™Ú[‹X›ÝÛH‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWKÈ›X\™Ú[‹[Y‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWKÈ›X\™Ú[‹\šYÚ‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWKÈ›X\™Ú[‹]Ü‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWKÈ^Z[™[‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWKÈ™›ÛY˜[Z[H‹˜[YHOˆ˜[YWKÈ™\XØ[X[YÛˆ‹˜[YHOˆYX\Ý\™UÔÝš[™ÊÙ]YX\Ý\™[Y[
˜[YJJWWJNÂ˜ÛÛœÝÜXÙ\Ô™YÑ^H×ÊËÙÎÂ˜ÛÛœÝÜ›”™YÑ^HÖ×——JËÙÎÂ˜ÛÛœÝÜ›‘›Ü”šXÚ^™YÑ^H×—ËÙÎÂ™[˜Ý[ÛˆX\Ý[JÝ[TÝ‹›ÙKšXÚ^
HÂˆÛÛœÝÝ[HHØš™XÝ˜Ü™X]J[
NÂˆYˆ
\Ý[TÝŠHÂˆ™]\›ˆÝ[NÂˆBˆÛÛœÝÜšYÚ[˜[HØš™XÝ˜Ü™X]J[
NÂˆ›Üˆ
ÛÛœÝÚÙ^K˜[YWHÙˆÝ[TÝ‹œÜ]
ŽÈŠK›X\
ÈOˆËœÜ]
Žˆ‹ŠJJHÂˆÛÛœÝX\[™ÈHÝ[SX\[™Ë™Ù]
Ù^JNÂˆYˆ
X\[™ÈOOHˆŠHÂˆÛÛ[YNÂˆBˆ]™]Õ˜[YHH˜[YNÂˆYˆ
X\[™ÊHÂˆ™]Õ˜[YHH\[ÙˆX\[™ÈOOHœÝš[™ÈˆÈX\[™ÈˆX\[™Ê˜[YKÜšYÚ[˜[
NÂˆBˆYˆ
Ù^K™[™ÕÚ]
œØØ[HŠJHÂˆÝ[K˜[œÙ›Ü›HHÝ[K˜[œÙ›Ü›HÈ	ÜÝ[VÚÙ^W_H	Û™]Õ˜[Y_Xˆ™]Õ˜[YNÂˆH[ÙHÂˆÝ[VÚÙ^Kœ™\XÙP[
ËJØK^KV—JKÙË
Ë
HOˆÕ\\Ø\ÙJ
JWHH™]Õ˜[YNÂˆBˆBˆYˆ
Ý[K™›Û˜[Z[JHÂˆÙ]›Û˜[Z[JÂˆ\Y˜XÙNˆÝ[K™›Û˜[Z[KˆÙZYÚˆÝ[K™›ÛÙZYÚ››Ü›X[‹ˆÜÝ\™NˆÝ[K™›ÛÝ[H››Ü›X[‹ˆÚ^™NˆÜšYÚ[˜[™›ÛÚ^™HˆK›ÙK›ÙVÉÛØ˜[]WK™›Ûš[™\‹Ý[JNÂˆBˆYˆ
šXÚ^	‰ˆÝ[K™\XØ[[YÛˆ	‰ˆÝ[K™\XØ[[YÛˆOOHŒˆ	‰ˆÝ[K™›ÛÚ^™JHÂˆÛÛœÝÕP—ÔÕTT—ÔÐÔ’TÑPÕÔˆHNÎÂˆÛÛœÝ‘T•PÐSÑPÕÔˆHŒÌÌÎÂˆÛÛœÝ›ÛÚ^™HHÙ]YX\Ý\™[Y[
Ý[K™›ÛÚ^™JNÂˆÝ[K™›ÛÚ^™HHYX\Ý\™UÔÝš[™Ê›ÛÚ^™H
ˆÕP—ÔÕTT—ÔÐÔ’TÑPÕÔŠNÂˆÝ[K™\XØ[[YÛˆHYX\Ý\™UÔÝš[™ÊX]œÚYÛŠÙ]YX\Ý\™[Y[
Ý[K™\XØ[[YÛŠJH
ˆ›ÛÚ^™H
ˆ‘T•PÐSÑPÕÔŠNÂˆBˆYˆ
šXÚ^	‰ˆÝ[K™›ÛÚ^™JHÂˆÝ[K™›ÛÚ^™HHØ[Ê	ÜÝ[K™›ÛÚ^™_H
ˆ˜\ŠK]Ý[\ØØ[KY˜XÝÜŠJXÂˆBˆš^^[™[
Ý[JNÂˆ™]\›ˆÝ[NÂŸB™[˜Ý[ÛˆÚXÚÔÝ[J›ÙJHÂˆYˆ
[›ÙKœÝ[JHÂˆ™]\›ˆˆŽÂˆBˆ™]\›ˆ›ÙKœÝ[KœÜ]
ŽÈŠK™š[\ŠÈOˆH\Ëš[J
JK›X\
ÈOˆËœÜ]
Žˆ‹ŠK›X\
Oˆš[J
JJK™š[\Š
ÚÙ^K˜[YWJHOˆÂˆYˆ
Ù^HOOH™›ÛY˜[Z[HŠHÂˆ›ÙVÉÛØ˜[]WK\ÙY\Y˜XÙ\Ë˜Y
˜[YJNÂˆBˆ™]\›ˆSQÔÕSTËš\ÊÙ^JNÂˆJK›X\
ÝˆOˆÝ‹š›Ú[ŠŽˆŠJKš›Ú[ŠŽÈŠNÂŸB˜ÛÛœÝ›ÕÚ]\ÈH™]ÈÙ]
È˜›ÙH‹š[—JNÂ˜Û\ÜÈ[Øš™XÝ^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\Ë˜[YJHÂˆÝ\\ŠSÓ”×ÒQ˜[YJNÂˆ\ÖÉšXÚ^HH˜[ÙNÂˆ\ËœÝ[HH]šX]\ËœÝ[HˆŽÂˆBˆÉÛX[—JZ[\ŠHÂˆÝ\\–ÉÛX[—JZ[\ŠNÂˆ\ËœÝ[HHÚXÚÔÝ[J\ÊNÂˆBˆÉXØÙ\Ú]\ÜXÙWJ
HÂˆ™]\›ˆS›ÕÚ]\Ëš\Ê\ÖÉ›ÙS˜[YWJNÂˆBˆÉÛ•^JÝ‹šXÚ^H˜[ÙJHÂˆYˆ
\šXÚ^
HÂˆÝˆHÝ‹œ™\XÙP[
Ü›”™YÑ^ˆŠNÂˆYˆ
]\ËœÝ[Kš[˜ÛY\Êž˜K\ÜXÙ\[ŽžY\ÈŠJHÂˆÝˆHÝ‹œ™\XÙP[
ÜXÙ\Ô™YÑ^ˆŠNÂˆBˆH[ÙHÂˆ\ÖÉšXÚ^HHYNÂˆBˆYˆ
ÝŠHÂˆ\ÖÉÛÛ[H
ÏHÝŽÂˆBˆBˆÉ\ÚÛ\×JYX\Ý\™K]\ÝÜHYJHÂˆÛÛœÝ˜Q›ÛHØš™XÝ˜Ü™X]J[
NÂˆÛÛœÝX\™Ú[ˆHÂˆÜˆ˜S‹ˆ›ÝÛNˆ˜S‹ˆYˆ˜S‹ˆšYÚˆ˜S‚ˆNÂˆ][™RZYÚH[Âˆ›Üˆ
ÛÛœÝÚÙ^K˜[YWHÙˆ\ËœÝ[KœÜ]
ŽÈŠK›X\
ÈOˆËœÜ]
Žˆ‹ŠJJHÂˆÝÚ]Ú
Ù^JHÂˆØ\ÙH™›ÛY˜[Z[HŽ‚ˆ˜Q›Û\Y˜XÙHHÝš\][Ý\Ê˜[YJNÂˆœ™XZÎÂˆØ\ÙH™›Û\Ú^™HŽ‚ˆ˜Q›ÛœÚ^™HHÙ]YX\Ý\™[Y[
˜[YJNÂˆœ™XZÎÂˆØ\ÙH™›Û]ÙZYÚŽ‚ˆ˜Q›ÛÙZYÚH˜[YNÂˆœ™XZÎÂˆØ\ÙH™›Û\Ý[HŽ‚ˆ˜Q›ÛœÜÝ\™HH˜[YNÂˆœ™XZÎÂˆØ\ÙH›]\‹\ÜXÚ[™ÈŽ‚ˆ˜Q›Û›]\”ÜXÚ[™ÈHÙ]YX\Ý\™[Y[
˜[YJNÂˆœ™XZÎÂˆØ\ÙH›X\™Ú[ˆŽ‚ˆÛÛœÝ˜[Y\ÈH˜[YKœÜ]
ÈÊK›X\
OˆÙ]YX\Ý\™[Y[

JNÂˆÝÚ]Ú
˜[Y\Ë›[™Ý
HÂˆØ\ÙHN‚ˆX\™Ú[‹ÜHX\™Ú[‹˜›ÝÛHHX\™Ú[‹›YHX\™Ú[‹œšYÚH˜[Y\ÖÌNÂˆœ™XZÎÂˆØ\ÙHŽ‚ˆX\™Ú[‹ÜHX\™Ú[‹˜›ÝÛHH˜[Y\ÖÌNÂˆX\™Ú[‹›YHX\™Ú[‹œšYÚH˜[Y\ÖÌWNÂˆœ™XZÎÂˆØ\ÙHÎ‚ˆX\™Ú[‹ÜH˜[Y\ÖÌNÂˆX\™Ú[‹˜›ÝÛHH˜[Y\ÖÌ—NÂˆX\™Ú[‹›YHX\™Ú[‹œšYÚH˜[Y\ÖÌWNÂˆœ™XZÎÂˆØ\ÙH‚ˆX\™Ú[‹ÜH˜[Y\ÖÌNÂˆX\™Ú[‹›YH˜[Y\ÖÌWNÂˆX\™Ú[‹˜›ÝÛHH˜[Y\ÖÌ—NÂˆX\™Ú[‹œšYÚH˜[Y\ÖÌ×NÂˆœ™XZÎÂˆBˆœ™XZÎÂˆØ\ÙH›X\™Ú[‹]ÜŽ‚ˆX\™Ú[‹ÜHÙ]YX\Ý\™[Y[
˜[YJNÂˆœ™XZÎÂˆØ\ÙH›X\™Ú[‹X›ÝÛHŽ‚ˆX\™Ú[‹˜›ÝÛHHÙ]YX\Ý\™[Y[
˜[YJNÂˆœ™XZÎÂˆØ\ÙH›X\™Ú[‹[YŽ‚ˆX\™Ú[‹›YHÙ]YX\Ý\™[Y[
˜[YJNÂˆœ™XZÎÂˆØ\ÙH›X\™Ú[‹\šYÚŽ‚ˆX\™Ú[‹œšYÚHÙ]YX\Ý\™[Y[
˜[YJNÂˆœ™XZÎÂˆØ\ÙH›[™KZZYÚŽ‚ˆ[™RZYÚHÙ]YX\Ý\™[Y[
˜[YJNÂˆœ™XZÎÂˆBˆBˆYX\Ý\™Kœ\Ú]J˜Q›ÛX\™Ú[‹[™RZYÚ
NÂˆYˆ
\ÖÉÛÛ[JHÂˆYX\Ý\™K˜YÝš[™Ê\ÖÉÛÛ[JNÂˆH[ÙHÂˆ›Üˆ
ÛÛœÝÚ[Ùˆ\ÖÉÙ]Ú[™[—J
JHÂˆYˆ
Ú[É›ÙS˜[YWHOOHˆÝ^ŠHÂˆYX\Ý\™K˜YÝš[™ÊÚ[ÉÛÛ[JNÂˆÛÛ[YNÂˆBˆÚ[É\ÚÛ\×JYX\Ý\™JNÂˆBˆBˆYˆ
]\ÝÜ
HÂˆYX\Ý\™KœÜ›Û

NÂˆBˆBˆÉÒSJ]˜Z[X›TÜXÙJHÂˆÛÛœÝÚ[™[ˆH×NÂˆ\ÖÉ^˜WHHÂˆÚ[™[‚ˆNÂˆ\ÖÉÚ[™[•ÒSJßJNÂˆYˆ
Ú[™[‹›[™ÝOOH	‰ˆ]\ÖÉÛÛ[JHÂˆ™]\›ˆS™\Ý[‘STNÂˆBˆ]˜[YNÂˆYˆ
\ÖÉšXÚ^JHÂˆ˜[YHH\ÖÉÛÛ[HÈ\ÖÉÛÛ[Kœ™\XÙP[
Ü›‘›Ü”šXÚ^™YÑ^—ˆŠHˆ[™Yš[™YÂˆH[ÙHÂˆ˜[YHH\ÖÉÛÛ[H[™Yš[™YÂˆBˆ™]\›ˆS™\Ý[œÝXØÙ\ÜÊÂˆ˜[YNˆ\ÖÉ›ÙS˜[YWKˆ]šX]\ÎˆÂˆ™YŽˆ\Ëš™Y‹ˆÝ[NˆX\Ý[J\ËœÝ[K\Ë\ÖÉšXÚ^JBˆKˆÚ[™[‹ˆ˜[YBˆJNÂˆBŸB˜Û\ÜÈH^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\Ë˜HŠNÂˆ\Ëš™YˆHš^T“
]šX]\Ëš™YŠHˆŽÂˆBŸB˜Û\ÜÈˆ^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\Ë˜ˆŠNÂˆBˆÉ\ÚÛ\×JYX\Ý\™JHÂˆYX\Ý\™Kœ\Ú›Û
ÂˆÙZYÚˆ˜›Û‚ˆJNÂˆÝ\\–É\ÚÛ\×JYX\Ý\™JNÂˆYX\Ý\™KœÜ›Û

NÂˆBŸB˜Û\ÜÈ›ÙH^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\Ë˜›ÙHŠNÂˆBˆÉÒSJ]˜Z[X›TÜXÙJHÂˆÛÛœÝ™\ÈHÝ\\–ÉÒSJ]˜Z[X›TÜXÙJNÂˆÛÛœÝÂˆ[ˆHH™\ÎÂˆYˆ
Z[
HÂˆ™]\›ˆS™\Ý[‘STNÂˆBˆ[›˜[YHH™]ˆŽÂˆ[˜]šX]\Ë˜Û\ÜÈHÈž˜TšXÚ—NÂˆ™]\›ˆ™\ÎÂˆBŸB˜Û\ÜÈœˆ^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\Ë˜œˆŠNÂˆBˆÉ^J
HÂˆ™]\›ˆ—ˆŽÂˆBˆÉ\ÚÛ\×JYX\Ý\™JHÂˆYX\Ý\™K˜YÝš[™Ê—ˆŠNÂˆBˆÉÒSJ]˜Z[X›TÜXÙJHÂˆ™]\›ˆS™\Ý[œÝXØÙ\ÜÊÂˆ˜[YNˆ˜œˆ‚ˆJNÂˆBŸB˜Û\ÜÈ[^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\Ëš[ŠNÂˆBˆÉÒSJ]˜Z[X›TÜXÙJHÂˆÛÛœÝÚ[™[ˆH×NÂˆ\ÖÉ^˜WHHÂˆÚ[™[‚ˆNÂˆ\ÖÉÚ[™[•ÒSJßJNÂˆYˆ
Ú[™[‹›[™ÝOOH
HÂˆ™]\›ˆS™\Ý[œÝXØÙ\ÜÊÂˆ˜[YNˆ™]ˆ‹ˆ]šX]\ÎˆÂˆÛ\ÜÎˆÈž˜TšXÚ—KˆÝ[NˆßBˆKˆ˜[YNˆ\ÖÉÛÛ[Hˆ‚ˆJNÂˆBˆYˆ
Ú[™[‹›[™ÝOOHJHÂˆÛÛœÝÚ[HÚ[™[–ÌNÂˆYˆ
Ú[˜]šX]\ÏË˜Û\ÜËš[˜ÛY\Êž˜TšXÚŠJHÂˆ™]\›ˆS™\Ý[œÝXØÙ\ÜÊÚ[
NÂˆBˆBˆ™]\›ˆS™\Ý[œÝXØÙ\ÜÊÂˆ˜[YNˆ™]ˆ‹ˆ]šX]\ÎˆÂˆÛ\ÜÎˆÈž˜TšXÚ—KˆÝ[NˆßBˆKˆÚ[™[‚ˆJNÂˆBŸB˜Û\ÜÈH^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\ËšHŠNÂˆBˆÉ\ÚÛ\×JYX\Ý\™JHÂˆYX\Ý\™Kœ\Ú›Û
ÂˆÜÝ\™Nˆš][XÈ‚ˆJNÂˆÝ\\–É\ÚÛ\×JYX\Ý\™JNÂˆYX\Ý\™KœÜ›Û

NÂˆBŸB˜Û\ÜÈH^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\Ë›HŠNÂˆBŸB˜Û\ÜÈÛ^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\Ë›ÛŠNÂˆBŸB˜Û\ÜÈ^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\ËœŠNÂˆBˆÉ\ÚÛ\×JYX\Ý\™JHÂˆÝ\\–É\ÚÛ\×JYX\Ý\™K˜[ÙJNÂˆYX\Ý\™K˜YÝš[™Ê—ˆŠNÂˆYX\Ý\™K˜Y\˜J
NÂˆYX\Ý\™KœÜ›Û

NÂˆBˆÉ^J
HÂˆÛÛœÝÚX›[™ÜÈH\ÖÉÙ]\™[J
VÉÙ]Ú[™[—J
NÂˆYˆ
ÚX›[™ÜË˜]
LJHOOH\ÊHÂˆ™]\›ˆÝ\\–É^J
NÂˆBˆ™]\›ˆÝ\\–É^J
H
È—ˆŽÂˆBŸB˜Û\ÜÈÜ[ˆ^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\ËœÜ[ˆŠNÂˆBŸB˜Û\ÜÈÝXˆ^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\ËœÝXˆŠNÂˆBŸB˜Û\ÜÈÝ\^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\ËœÝ\ŠNÂˆBŸB˜Û\ÜÈ[^[™È[Øš™XÝÂˆÛÛœÝXÝÜŠ]šX]\ÊHÂˆÝ\\Š]šX]\Ë[ŠNÂˆBŸB˜Û\ÜÈ[˜[Y\ÜXÙHÂˆÝ]XÈÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆYˆ
[˜[Y\ÜXÙKš\ÓÝÛ”›Ü\J˜[YJJHÂˆ™]\›ˆ[˜[Y\ÜXÙVÛ˜[YWJ]šX]\ÊNÂˆBˆ™]\›ˆ[™Yš[™YÂˆBˆÝ]XÈJ]šX]\ÊHÂˆ™]\›ˆ™]ÈJ]šX]\ÊNÂˆBˆÝ]XÈŠ]šX]\ÊHÂˆ™]\›ˆ™]ÈŠ]šX]\ÊNÂˆBˆÝ]XÈ›ÙJ]šX]\ÊHÂˆ™]\›ˆ™]È›ÙJ]šX]\ÊNÂˆBˆÝ]XÈœŠ]šX]\ÊHÂˆ™]\›ˆ™]ÈœŠ]šX]\ÊNÂˆBˆÝ]XÈ[
]šX]\ÊHÂˆ™]\›ˆ™]È[
]šX]\ÊNÂˆBˆÝ]XÈJ]šX]\ÊHÂˆ™]\›ˆ™]ÈJ]šX]\ÊNÂˆBˆÝ]XÈJ]šX]\ÊHÂˆ™]\›ˆ™]ÈJ]šX]\ÊNÂˆBˆÝ]XÈÛ
]šX]\ÊHÂˆ™]\›ˆ™]ÈÛ
]šX]\ÊNÂˆBˆÝ]XÈ
]šX]\ÊHÂˆ™]\›ˆ™]È
]šX]\ÊNÂˆBˆÝ]XÈÜ[Š]šX]\ÊHÂˆ™]\›ˆ™]ÈÜ[Š]šX]\ÊNÂˆBˆÝ]XÈÝXŠ]šX]\ÊHÂˆ™]\›ˆ™]ÈÝXŠ]šX]\ÊNÂˆBˆÝ]XÈÝ\
]šX]\ÊHÂˆ™]\›ˆ™]ÈÝ\
]šX]\ÊNÂˆBˆÝ]XÈ[
]šX]\ÊHÂˆ™]\›ˆ™]È[
]šX]\ÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÜÙ]\šœÂ‚‚‚‚‚‚‚‚‚˜ÛÛœÝ˜[Y\ÜXÙTÙ]\HÂˆÛÛ™šYÎˆÛÛ™šYÓ˜[Y\ÜXÙKˆÛÛ›™XÝ[ÛŽˆÛÛ›™XÝ[Û”Ù]˜[Y\ÜXÙKˆ]\Ù]Îˆ]\Ù]Ó˜[Y\ÜXÙKˆØØ[TÙ]ˆØØ[TÙ]˜[Y\ÜXÙKˆÚYÛ˜]\™NˆÚYÛ˜]\™S˜[Y\ÜXÙKˆÝ[\ÚY]ˆÝ[\ÚY]˜[Y\ÜXÙKˆ[\]Nˆ[\]S˜[Y\ÜXÙKˆˆ˜[Y\ÜXÙKˆ[ˆ[˜[Y\ÜXÙBŸNÂ‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÝ[šÛ›ÝÛ‹šœÂ‚‚˜Û\ÜÈ[šÛ›ÝÛ“˜[Y\ÜXÙHÂˆÛÛœÝXÝÜŠœÒY
HÂˆ\Ë›˜[Y\ÜXÙRYHœÒYÂˆBˆÉZ[SØš™XÝJ˜[YK]šX]\ÊHÂˆ™]\›ˆ™]È[Øš™XÝ
\Ë›˜[Y\ÜXÙRY˜[YK]šX]\ÊNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KØZ[\‹šœÂ‚‚‚‚‚‚‚˜Û\ÜÈ›ÛÝ^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠYÊHÂˆÝ\\ŠLKœ›ÛÝ‹Øš™XÝ˜Ü™X]J[
JNÂˆ\Ë™[[Y[H[Âˆ\ÖÉY×HHYÎÂˆBˆÉÛÚ[JÚ[
HÂˆ\Ë™[[Y[HÚ[Âˆ™]\›ˆYNÂˆBˆÉš[˜[^™WJ
HÂˆÝ\\–Éš[˜[^™WJ
NÂˆYˆ
\Ë™[[Y[[\]H[œÝ[˜Ù[Ùˆ[\]JHÂˆ\ÖÉY×KœÙ]
	›ÛÝ\Ë™[[Y[
NÂˆ\Ë™[[Y[[\]VÉ™\ÛÛ™T›ÝÝ\\×J\ÖÉY×JNÂˆ\Ë™[[Y[[\]VÉY×HH\ÖÉY×NÂˆBˆBŸB˜Û\ÜÈ[\H^[™ÈSØš™XÝÂˆÛÛœÝXÝÜŠ
HÂˆÝ\\ŠLKˆ‹Øš™XÝ˜Ü™X]J[
JNÂˆBˆÉÛÚ[JÊHÂˆ™]\›ˆ˜[ÙNÂˆBŸB˜Û\ÜÈZ[\ˆÂˆÛÛœÝXÝÜŠ›ÛÝ˜[YTÜXÙHH[
HÂˆ\Ë—Û˜[Y\ÜXÙTÝXÚÈH×NÂˆ\Ë—ÛœÐYÛ›ÜÝXÓ]™[HÂˆ\Ë—Û˜[Y\ÜXÙT™Yš^\ÈH™]ÈX\

NÂˆ\Ë—Û˜[Y\ÜXÙ\ÈH™]ÈX\

NÂˆ\Ë—Û™^œÒYHX]›X^
‹‹“Øš™XÝ˜[Y\Ê˜[Y\ÜXÙRYÊK›X\

ÂˆYˆJHOˆY
JNÂˆ\Ë—ØÝ\œ™[˜[Y\ÜXÙHH›ÛÝ˜[YTÜXÙH™]È[šÛ›ÝÛ“˜[Y\ÜXÙJ
ÊÝ\Ë—Û™^œÒY
NÂˆBˆZ[›ÛÝ
YÊHÂˆ™]\›ˆ™]È›ÛÝ
YÊNÂˆBˆZ[
ÂˆœÔ™Yš^ˆ˜[YKˆ]šX]\Ëˆ˜[Y\ÜXÙKˆ™Yš^\ÂˆJHÂˆÛÛœÝ\Ó˜[Y\ÜXÙQYˆH˜[Y\ÜXÙHOOH[ÂˆYˆ
\Ó˜[Y\ÜXÙQYŠHÂˆ\Ë—Û˜[Y\ÜXÙTÝXÚËœ\Ú
\Ë—ØÝ\œ™[˜[Y\ÜXÙJNÂˆ\Ë—ØÝ\œ™[˜[Y\ÜXÙHH\Ë—ÜÙX\˜Ú˜[Y\ÜXÙJ˜[Y\ÜXÙJNÂˆBˆYˆ
™Yš^\ÊHÂˆ\Ë—ØY˜[Y\ÜXÙT™Yš^
™Yš^\ÊNÂˆBˆYˆ
]šX]\Ëš\ÓÝÛ”›Ü\J	œÐ]šX]\ÊJHÂˆÛÛœÝ]U[\]HH˜[Y\ÜXÙTÙ]\™]\Ù]ÎÂˆÛÛœÝœÐ]œÈH]šX]\ÖÉœÐ]šX]\×NÂˆ]˜P]œÈH[Âˆ›Üˆ
ÛÛœÝÛœË]œ×HÙˆØš™XÝ™[šY\ÊœÐ]œÊJHÂˆÛÛœÝœÕÕ\ÙHH\Ë—ÙÙ]˜[Y\ÜXÙUÕ\ÙJœÊNÂˆYˆ
œÕÕ\ÙHOOH]U[\]JHÂˆ˜P]œÈHÂˆ˜Nˆ]œÂˆNÂˆœ™XZÎÂˆBˆBˆYˆ
˜P]œÊHÂˆ]šX]\ÖÉœÐ]šX]\×HH˜P]œÎÂˆH[ÙHÂˆ[]H]šX]\ÖÉœÐ]šX]\×NÂˆBˆBˆÛÛœÝ˜[Y\ÜXÙUÕ\ÙHH\Ë—ÙÙ]˜[Y\ÜXÙUÕ\ÙJœÔ™Yš^
NÂˆÛÛœÝ›ÙHH˜[Y\ÜXÙUÕ\ÙOË–ÉZ[SØš™XÝJ˜[YK]šX]\ÊH™]È[\J
NÂˆYˆ
›ÙVÉ\ÓœÐYÛ›ÜÝX×J
JHÂˆ\Ë—ÛœÐYÛ›ÜÝXÓ]™[
ÊÎÂˆBˆYˆ
\Ó˜[Y\ÜXÙQYˆ™Yš^\È›ÙVÉ\ÓœÐYÛ›ÜÝX×J
JHÂˆ›ÙVÉÛX[\HHÂˆ\Ó˜[Y\ÜXÙNˆ\Ó˜[Y\ÜXÙQY‹ˆ™Yš^\ËˆœÐYÛ›ÜÝXÎˆ›ÙVÉ\ÓœÐYÛ›ÜÝX×J
BˆNÂˆBˆ™]\›ˆ›ÙNÂˆBˆ\ÓœÐYÛ›ÜÝXÊ
HÂˆ™]\›ˆ\Ë—ÛœÐYÛ›ÜÝXÓ]™[ˆÂˆBˆÜÙX\˜Ú˜[Y\ÜXÙJœÓ˜[YJHÂˆ]œÈH\Ë—Û˜[Y\ÜXÙ\Ë™Ù]
œÓ˜[YJNÂˆYˆ
œÊHÂˆ™]\›ˆœÎÂˆBˆ›Üˆ
ÛÛœÝÛ˜[YKÂˆÚXÚÂˆWHÙˆØš™XÝ™[šY\Ê˜[Y\ÜXÙRYÊJHÂˆYˆ
ÚXÚÊœÓ˜[YJJHÂˆœÈH˜[Y\ÜXÙTÙ]\Û˜[YWNÂˆYˆ
œÊHÂˆ\Ë—Û˜[Y\ÜXÙ\ËœÙ]
œÓ˜[YKœÊNÂˆ™]\›ˆœÎÂˆBˆœ™XZÎÂˆBˆBˆœÈH™]È[šÛ›ÝÛ“˜[Y\ÜXÙJ
ÊÝ\Ë—Û™^œÒY
NÂˆ\Ë—Û˜[Y\ÜXÙ\ËœÙ]
œÓ˜[YKœÊNÂˆ™]\›ˆœÎÂˆBˆØY˜[Y\ÜXÙT™Yš^
™Yš^\ÊHÂˆ›Üˆ
ÛÛœÝÂˆ™Yš^ˆ˜[YBˆHÙˆ™Yš^\ÊHÂˆÛÛœÝ˜[Y\ÜXÙHH\Ë—ÜÙX\˜Ú˜[Y\ÜXÙJ˜[YJNÂˆ]™Yš^ÝXÚÈH\Ë—Û˜[Y\ÜXÙT™Yš^\Ë™Ù]
™Yš^
NÂˆYˆ
\™Yš^ÝXÚÊHÂˆ™Yš^ÝXÚÈH×NÂˆ\Ë—Û˜[Y\ÜXÙT™Yš^\ËœÙ]
™Yš^™Yš^ÝXÚÊNÂˆBˆ™Yš^ÝXÚËœ\Ú
˜[Y\ÜXÙJNÂˆBˆBˆÙÙ]˜[Y\ÜXÙUÕ\ÙJ™Yš^
HÂˆYˆ
\™Yš^
HÂˆ™]\›ˆ\Ë—ØÝ\œ™[˜[Y\ÜXÙNÂˆBˆÛÛœÝ™Yš^ÝXÚÈH\Ë—Û˜[Y\ÜXÙT™Yš^\Ë™Ù]
™Yš^
NÂˆYˆ
™Yš^ÝXÚÏË›[™Ýˆ
HÂˆ™]\›ˆ™Yš^ÝXÚË˜]
LJNÂˆBˆØ\›Š[šÛ›ÝÛˆ˜[Y\ÜXÙH™Yš^ˆ	Ü™Yš^K˜
NÂˆ™]\›ˆ[ÂˆBˆÛX[Š]JHÂˆÛÛœÝÂˆ\Ó˜[Y\ÜXÙKˆ™Yš^\ËˆœÐYÛ›ÜÝXÂˆHH]NÂˆYˆ
\Ó˜[Y\ÜXÙJHÂˆ\Ë—ØÝ\œ™[˜[Y\ÜXÙHH\Ë—Û˜[Y\ÜXÙTÝXÚËœÜ

NÂˆBˆYˆ
™Yš^\ÊHÂˆ™Yš^\Ë™›Ü‘XXÚ

Âˆ™Yš^ˆJHOˆÂˆ\Ë—Û˜[Y\ÜXÙT™Yš^\Ë™Ù]
™Yš^
KœÜ

NÂˆJNÂˆBˆYˆ
œÐYÛ›ÜÝXÊHÂˆ\Ë—ÛœÐYÛ›ÜÝXÓ]™[KNÂˆBˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÜ\œÙ\‹šœÂ‚‚‚‚˜Û\ÜÈT\œÙ\ˆ^[™ÈS\œÙ\˜\ÙHÂˆÛÛœÝXÝÜŠ›ÛÝ˜[YTÜXÙHH[šXÚ^H˜[ÙJHÂˆÝ\\Š
NÂˆ\Ë—ØZ[\ˆH™]ÈZ[\Š›ÛÝ˜[YTÜXÙJNÂˆ\Ë—ÜÝXÚÈH×NÂˆ\Ë—ÙÛØ˜[]HHÂˆ\ÙY\Y˜XÙ\Îˆ™]ÈÙ]

BˆNÂˆ\Ë—ÚYÈH™]ÈX\

NÂˆ\Ë—ØÝ\œ™[H\Ë—ØZ[\‹˜Z[›ÛÝ
\Ë—ÚYÊNÂˆ\Ë—Ù\œ›ÜÛÙHHS\œÙ\‘\œ›ÜÛÙK“›Ñ\œ›ÜŽÂˆ\Ë—ÝÚ]T™YÙ^H×—ÊÉÎÂˆ\Ë—Û˜œÜÈH×L
ËÙÎÂˆ\Ë—ÜšXÚ^HšXÚ^ÂˆBˆ\œÙJ]JHÂˆ\Ëœ\œÙV[
]JNÂˆYˆ
\Ë—Ù\œ›ÜÛÙHOOHS\œÙ\‘\œ›ÜÛÙK“›Ñ\œ›ÜŠHÂˆ™]\›ˆ[™Yš[™YÂˆBˆ\Ë—ØÝ\œ™[Éš[˜[^™WJ
NÂˆ™]\›ˆ\Ë—ØÝ\œ™[™[[Y[ÂˆBˆÛ•^
^
HÂˆ^H^œ™\XÙJ\Ë—Û˜œÜËX]ÚOˆX]ÚœÛXÙJJH
ÈˆŠNÂˆYˆ
\Ë—ÜšXÚ^\Ë—ØÝ\œ™[ÉXØÙ\Ú]\ÜXÙWJ
JHÂˆ\Ë—ØÝ\œ™[ÉÛ•^J^\Ë—ÜšXÚ^
NÂˆ™]\›ŽÂˆBˆYˆ
\Ë—ÝÚ]T™YÙ^\Ý
^
JHÂˆ™]\›ŽÂˆBˆ\Ë—ØÝ\œ™[ÉÛ•^J^š[J
JNÂˆBˆÛÙ]J^
HÂˆ\Ë—ØÝ\œ™[ÉÛ•^J^
NÂˆBˆÛZÐ]šX]\Ê]šX]\ËYÓ˜[YJHÂˆ]˜[Y\ÜXÙHH[Âˆ]™Yš^\ÈH[ÂˆÛÛœÝ]šX]SØšˆHØš™XÝ˜Ü™X]JßJNÂˆ›Üˆ
ÛÛœÝÂˆ˜[YKˆ˜[YBˆHÙˆ]šX]\ÊHÂˆYˆ
˜[YHOOHž[œÈŠHÂˆYˆ
[˜[Y\ÜXÙJHÂˆ˜[Y\ÜXÙHH˜[YNÂˆH[ÙHÂˆØ\›ŠHH][\H˜[Y\ÜXÙHYš[š][Ûˆ[ˆ	ÝYÓ˜[Y_O˜
NÂˆBˆH[ÙHYˆ
˜[YKœÝ\ÕÚ]
ž[œÎˆŠJHÂˆÛÛœÝ™Yš^H˜[YKœÝXœÝš[™Êž[œÎˆ‹›[™Ý
NÂˆ™Yš^\ÈÏÏH×NÂˆ™Yš^\Ëœ\Ú
Âˆ™Yš^ˆ˜[YBˆJNÂˆH[ÙHÂˆÛÛœÝHH˜[YKš[™^ÙŠŽˆŠNÂˆYˆ
HOOHLJHÂˆ]šX]SØš–Û˜[YWHH˜[YNÂˆH[ÙHÂˆÛÛœÝœÐ]œÈH]šX]SØš–ÉœÐ]šX]\×HÏÏHØš™XÝ˜Ü™X]J[
NÂˆÛÛœÝÛœË]“˜[YWHHÛ˜[YKœÛXÙJJK˜[YKœÛXÙJH
ÈJWNÂˆÛÛœÝ]œÈHœÐ]œÖÛœ×HHØš™XÝ˜Ü™X]J[
NÂˆ]œÖØ]“˜[YWHH˜[YNÂˆBˆBˆBˆ™]\›ˆÛ˜[Y\ÜXÙK™Yš^\Ë]šX]SØš—NÂˆBˆÙÙ]˜[YP[™™Yš^
˜[YKœÐYÛ›ÜÝXÊHÂˆÛÛœÝHH˜[YKš[™^ÙŠŽˆŠNÂˆYˆ
HOOHLJHÂˆ™]\›ˆÛ˜[YK[NÂˆBˆ™]\›ˆÛ˜[YKœÝXœÝš[™ÊH
ÈJKœÐYÛ›ÜÝXÈÈˆˆˆ˜[YKœÝXœÝš[™ÊJWNÂˆBˆÛ™YÚ[‘[[Y[
YÓ˜[YK]šX]\Ë\Ñ[\JHÂˆÛÛœÝÛ˜[Y\ÜXÙK™Yš^\Ë]šX]\ÓØš—HH\Ë—ÛZÐ]šX]\Ê]šX]\ËYÓ˜[YJNÂˆÛÛœÝÛ˜[YKœÔ™Yš^HH\Ë—ÙÙ]˜[YP[™™Yš^
YÓ˜[YK\Ë—ØZ[\‹š\ÓœÐYÛ›ÜÝXÊ
JNÂˆÛÛœÝ›ÙHH\Ë—ØZ[\‹˜Z[
ÂˆœÔ™Yš^ˆ˜[YKˆ]šX]\Îˆ]šX]\ÓØš‹ˆ˜[Y\ÜXÙKˆ™Yš^\ÂˆJNÂˆ›ÙVÉÛØ˜[]WHH\Ë—ÙÛØ˜[]NÂˆYˆ
\Ñ[\JHÂˆ›ÙVÉš[˜[^™WJ
NÂˆYˆ
\Ë—ØÝ\œ™[ÉÛÚ[J›ÙJJHÂˆ›ÙVÉÙ]YJ\Ë—ÚYÊNÂˆBˆ›ÙVÉÛX[—J\Ë—ØZ[\ŠNÂˆ™]\›ŽÂˆBˆ\Ë—ÜÝXÚËœ\Ú
\Ë—ØÝ\œ™[
NÂˆ\Ë—ØÝ\œ™[H›ÙNÂˆBˆÛ‘[™[[Y[
˜[YJHÂˆÛÛœÝ›ÙHH\Ë—ØÝ\œ™[ÂˆYˆ
›ÙVÉ\ÐÑUV[J
H	‰ˆ\[Ùˆ›ÙVÉÛÛ[HOOHœÝš[™ÈŠHÂˆÛÛœÝ\œÙ\ˆH™]ÈT\œÙ\Š
NÂˆ\œÙ\‹—ÙÛØ˜[]HH\Ë—ÙÛØ˜[]NÂˆÛÛœÝ›ÛÝH\œÙ\‹œ\œÙJ›ÙVÉÛÛ[JNÂˆ›ÙVÉÛÛ[HH[Âˆ›ÙVÉÛÚ[J›ÛÝ
NÂˆBˆ›ÙVÉš[˜[^™WJ
NÂˆ\Ë—ØÝ\œ™[H\Ë—ÜÝXÚËœÜ

NÂˆYˆ
\Ë—ØÝ\œ™[ÉÛÚ[J›ÙJJHÂˆ›ÙVÉÙ]YJ\Ë—ÚYÊNÂˆBˆ›ÙVÉÛX[—J\Ë—ØZ[\ŠNÂˆBˆÛ‘\œ›ÜŠÛÙJHÂˆ\Ë—Ù\œ›ÜÛÙHHÛÙNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ˜KÙ˜XÝÜžKšœÂ‚‚‚‚‚‚‚‚˜Û\ÜÈQ˜XÝÜžHÂˆÛÛœÝXÝÜŠ]JHÂˆžHÂˆ\Ëœ›ÛÝH™]ÈT\œÙ\Š
Kœ\œÙJQ˜XÝÜžK—ØÜ™X]QØÝ[Y[
]JJNÂˆÛÛœÝš[™\ˆH™]Èš[™\Š\Ëœ›ÛÝ
NÂˆ\Ë™›Ü›HHš[™\‹˜š[™

NÂˆ\Ë™]R[™\ˆH™]È]R[™\Š\Ëœ›ÛÝš[™\‹™Ù]]J
JNÂˆ\Ë™›Ü›VÉÛØ˜[]WK[\]HH\Ë™›Ü›NÂˆHØ]Ú
JHÂˆØ\›ŠHH[ˆ\œ›ÜˆØØÝ\œ™Y\š[™È\œÚ[™È[™š[™[™Îˆ	Ù_X
NÂˆBˆBˆ\Õ˜[Y

HÂˆ™]\›ˆHJ\Ëœ›ÛÝ	‰ˆ\Ë™›Ü›JNÂˆBˆØÜ™X]TYÙ\Ò[\Š
HÂˆÛÛœÝ]\˜]ÜˆH\Ë™›Ü›VÉÔYÙ\×J
NÂˆ™]\›ˆ™]È›ÛZ\ÙJ
™\ÛÛ™K™Z™XÝ
HOˆÂˆÛÛœÝ™^]\˜][ÛˆH

HOˆÂˆžHÂˆÛÛœÝ˜[YHH]\˜]Ü‹›™^

NÂˆYˆ
˜[YK™Û™JHÂˆ™\ÛÛ™J˜[YK˜[YJNÂˆH[ÙHÂˆÙ][Y[Ý]
™^]\˜][Û‹
NÂˆBˆHØ]Ú
JHÂˆ™Z™XÝ
JNÂˆBˆNÂˆÙ][Y[Ý]
™^]\˜][Û‹
NÂˆJNÂˆBˆ\Þ[˜ÈØÜ™X]TYÙ\Ê
HÂˆžHÂˆ\ËœYÙ\ÈH]ØZ]\Ë—ØÜ™X]TYÙ\Ò[\Š
NÂˆ\Ë™[\ÈH\ËœYÙ\Ë˜Ú[™[‹›X\
ÈOˆÂˆÛÛœÝÂˆÚYˆZYÚˆHHË˜]šX]\ËœÝ[NÂˆ™]\›ˆÌ\œÙR[
ÚY
K\œÙR[
ZYÚ
WNÂˆJNÂˆHØ]Ú
JHÂˆØ\›ŠHH[ˆ\œ›ÜˆØØÝ\œ™Y\š[™È^[Ý]ˆ	Ù_X
NÂˆBˆBˆÙ]›Ý[™[™Ð›Þ
YÙR[™^
HÂˆ™]\›ˆ\Ë™[\ÖÜYÙR[™^NÂˆBˆ\Þ[˜ÈÙ][TYÙ\Ê
HÂˆYˆ
]\ËœYÙ\ÊHÂˆ]ØZ]\Ë—ØÜ™X]TYÙ\Ê
NÂˆBˆ™]\›ˆ\Ë™[\Ë›[™ÝÂˆBˆÙ][XYÙ\Ê[XYÙ\ÊHÂˆ\Ë™›Ü›VÉÛØ˜[]WKš[XYÙ\ÈH[XYÙ\ÎÂˆBˆÙ]›ÛÊ›ÛÊHÂˆ\Ë™›Ü›VÉÛØ˜[]WK™›Ûš[™\ˆH™]È›Ûš[™\Š›ÛÊNÂˆÛÛœÝZ\ÜÚ[™Ñ›ÛÈH×NÂˆ›Üˆ
]\Y˜XÙHÙˆ\Ë™›Ü›VÉÛØ˜[]WK\ÙY\Y˜XÙ\ÊHÂˆ\Y˜XÙHHÝš\][Ý\Ê\Y˜XÙJNÂˆÛÛœÝ›ÛH\Ë™›Ü›VÉÛØ˜[]WK™›Ûš[™\‹™š[™
\Y˜XÙJNÂˆYˆ
Y›Û
HÂˆZ\ÜÚ[™Ñ›ÛËœ\Ú
\Y˜XÙJNÂˆBˆBˆYˆ
Z\ÜÚ[™Ñ›ÛË›[™Ýˆ
HÂˆ™]\›ˆZ\ÜÚ[™Ñ›ÛÎÂˆBˆ™]\›ˆ[ÂˆBˆ\[™›ÛÊ›ÛË™X[SZ\ÜÚ[™Ñ›ÛÊHÂˆ\Ë™›Ü›VÉÛØ˜[]WK™›Ûš[™\‹˜Y
›ÛË™X[SZ\ÜÚ[™Ñ›ÛÊNÂˆBˆ\Þ[˜ÈÙ]YÙ\Ê
HÂˆYˆ
]\ËœYÙ\ÊHÂˆ]ØZ]\Ë—ØÜ™X]TYÙ\Ê
NÂˆBˆÛÛœÝYÙ\ÈH\ËœYÙ\ÎÂˆ\ËœYÙ\ÈH[Âˆ™]\›ˆYÙ\ÎÂˆBˆÙ\šX[^™Q]JÝÜ˜YÙJHÂˆ™]\›ˆ\Ë™]R[™\‹œÙ\šX[^™JÝÜ˜YÙJNÂˆBˆÝ]XÈØÜ™X]QØÝ[Y[
]JHÂˆYˆ
Y]VÈ‹Þž—JHÂˆ™]\›ˆ]VÈžž—NÂˆBˆ™]\›ˆØš™XÝ˜[Y\Ê]JKš›Ú[ŠˆŠNÂˆBˆÝ]XÈÙ]šXÚ^\Ò[
˜ÊHÂˆYˆ
\˜È\[Ùˆ˜ÈOOHœÝš[™ÈŠHÂˆ™]\›ˆ[ÂˆBˆžHÂˆ]›ÛÝH™]ÈT\œÙ\Š[˜[Y\ÜXÙKYJKœ\œÙJ˜ÊNÂˆYˆ
VÈ˜›ÙH‹ž[—Kš[˜ÛY\Ê›ÛÝÉ›ÙS˜[YWJJHÂˆÛÛœÝ™]Ô›ÛÝH[˜[Y\ÜXÙK˜›ÙJßJNÂˆ™]Ô›ÛÝÉ\[™Ú[J›ÛÝ
NÂˆ›ÛÝH™]Ô›ÛÝÂˆBˆÛÛœÝ™\Ý[H›ÛÝÉÒSJ
NÂˆYˆ
\™\Ý[œÝXØÙ\ÜÊHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝÂˆ[ˆHH™\Ý[ÂˆÛÛœÝÂˆ]šX]\ÂˆHH[ÂˆYˆ
]šX]\ÊHÂˆYˆ
]šX]\Ë˜Û\ÜÊHÂˆ]šX]\Ë˜Û\ÜÈH]šX]\Ë˜Û\ÜË™š[\Š]ˆOˆX]‹œÝ\ÕÚ]
ž˜HŠJNÂˆBˆ]šX]\Ë™\ˆH˜]]ÈŽÂˆBˆ™]\›ˆÂˆ[ˆÝŽˆ›ÛÝÉ^J
BˆNÂˆHØ]Ú
JHÂˆØ\›ŠHH[ˆ\œ›ÜˆØØÝ\œ™Y\š[™È\œÚ[™ÈÙˆšXÚ^ˆ	Ù_X
NÂˆBˆ™]\›ˆ[ÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KØ[››Ý][Û‹šœÂ‚‚‚‚‚‚‚‚‚‚‚‚‚‚‚˜Û\ÜÈ[››Ý][Û‘˜XÝÜžHÂˆÝ]XÈÜ™X]QÛØ˜[Ê“X[˜YÙ\ŠHÂˆ™]\›ˆ›ÛZ\ÙK˜[
Ü“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ˜XÜ›Ñ›Ü›HŠK“X[˜YÙ\‹™[œÝ\™QØÊž˜Q]\Ù]ÈŠK“X[˜YÙ\‹™[œÝ\™PØ][ÙÊœÝXÝ™YT›ÛÝŠK“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ˜˜\ÙU\›ŠK“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ˜]XÚY[ÈŠK“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ™ÛØ˜[ÛÛÜ”ÜXÙPØXÚHŠWJK[Š
ØXÜ›Ñ›Ü›K˜Q]\Ù]ËÝXÝ™YT›ÛÝ˜\ÙU\›]XÚY[ËÛØ˜[ÛÛÜ”ÜXÙPØXÚWJHOˆ
Âˆ“X[˜YÙ\‹ˆXÜ›Ñ›Ü›NˆXÜ›Ñ›Ü›H[œÝ[˜Ù[ÙˆXÝÈXÜ›Ñ›Ü›HˆXÝ™[\Kˆ˜Q]\Ù]ËˆÝXÝ™YT›ÛÝˆ˜\ÙU\›ˆ]XÚY[ËˆÛØ˜[ÛÛÜ”ÜXÙPØXÚBˆJK™X\ÛÛˆOˆÂˆØ\›ŠÜ™X]QÛØ˜[Îˆ‰Ü™X\ÛÛŸH‹˜
NÂˆ™]\›ˆ[ÂˆJNÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]J™Y‹™Y‹[››Ý][Û‘ÛØ˜[ËY˜XÝÜžKÛÛXÝšY[ËÜœ[‘šY[ËÛÛXÝžU\KYÙT™YŠHÂˆÛÛœÝYÙR[™^HÛÛXÝšY[ÈÈ]ØZ]\Ë—ÙÙ]YÙR[™^
™Y‹™Y‹[››Ý][Û‘ÛØ˜[Ëœ“X[˜YÙ\ŠHˆ[Âˆ™]\›ˆ[››Ý][Û‘ÛØ˜[Ëœ“X[˜YÙ\‹™[œÝ\™J\Ë—ØÜ™X]H‹Þ™Y‹™Y‹[››Ý][Û‘ÛØ˜[ËY˜XÝÜžKÛÛXÝšY[ËÜœ[‘šY[ËÛÛXÝžU\KYÙR[™^YÙT™Y—JNÂˆBˆÝ]XÈØÜ™X]J™Y‹™Y‹[››Ý][Û‘ÛØ˜[ËY˜XÝÜžKÛÛXÝšY[ÈH˜[ÙKÜœ[‘šY[ÈH[ÛÛXÝžU\HH[YÙR[™^H[YÙT™YˆH[
HÂˆÛÛœÝXÝH™Y‹™™]ÚY”™YŠ™YŠNÂˆYˆ
JXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ˆ[™Yš[™YÂˆBˆ]ÝX\HHXÝ™Ù]
”ÝX\HŠNÂˆÝX\HHÝX\H[œÝ[˜Ù[Ùˆ˜[YHÈÝX\K›˜[YHˆ[ÂˆYˆ
ÛÛXÝžU\H	‰ˆXÛÛXÝžU\Kš\Ê[››Ý][Û•\VÜÝX\KÕ\\Ø\ÙJ
WJJHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝÂˆXÜ›Ñ›Ü›Kˆ“X[˜YÙ\‚ˆHH[››Ý][Û‘ÛØ˜[ÎÂˆÛÛœÝYH™Yˆ[œÝ[˜Ù[Ùˆ™YˆÈ™Y‹ÔÝš[™Ê
Hˆ[››ÝÉÚY˜XÝÜžK˜Ü™X]SØš’Y

_XÂˆÛÛœÝ\˜[Y]\œÈHÂˆ™Y‹ˆ™Y‹ˆXÝˆÝX\KˆYˆ[››Ý][Û‘ÛØ˜[ËˆÛÛXÝšY[ËˆÜœ[‘šY[Ëˆ™YY\X\˜[˜Ù\ÎˆXÛÛXÝšY[È	‰ˆXÜ›Ñ›Ü›K™Ù]
“™YY\X\˜[˜Ù\ÈŠHOOHYKˆYÙR[™^ˆ]˜[X]Ü“Ü[ÛœÎˆ“X[˜YÙ\‹™]˜[X]Ü“Ü[ÛœËˆYÙT™Y‚ˆNÂˆÝÚ]Ú
ÝX\JHÂˆØ\ÙH“[šÈŽ‚ˆ™]\›ˆ™]È[šÐ[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH•^Ž‚ˆ™]\›ˆ™]È^[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH•ÚYÙ]Ž‚ˆ]šY[\HHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ‘•‚ˆJNÂˆšY[\HHšY[\H[œÝ[˜Ù[Ùˆ˜[YHÈšY[\K›˜[YHˆ[ÂˆÝÚ]Ú
šY[\JHÂˆØ\ÙH•Ž‚ˆ™]\›ˆ™]È^ÚYÙ][››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙHˆŽ‚ˆ™]\›ˆ™]È]Û•ÚYÙ][››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙHÚŽ‚ˆ™]\›ˆ™]ÈÚÚXÙUÚYÙ][››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH”ÚYÈŽ‚ˆ™]\›ˆ™]ÈÚYÛ˜]\™UÚYÙ][››Ý][ÛŠ\˜[Y]\œÊNÂˆBˆØ\›Š[š[\[Y[YÚYÙ]šY[\H‰ÙšY[\_H‹
È™˜[[™È˜XÚÈÈ˜\ÙHšY[\KˆŠNÂˆ™]\›ˆ™]ÈÚYÙ][››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH”Ü\Ž‚ˆ™]\›ˆ™]ÈÜ\[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH‘œ™YU^Ž‚ˆ™]\›ˆ™]Èœ™YU^[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH“[™HŽ‚ˆ™]\›ˆ™]È[™P[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH”Ü]X\™HŽ‚ˆ™]\›ˆ™]ÈÜ]X\™P[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙHÚ\˜ÛHŽ‚ˆ™]\›ˆ™]ÈÚ\˜ÛP[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH”ÛS[™HŽ‚ˆ™]\›ˆ™]ÈÛ[[™P[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH”ÛYÛÛˆŽ‚ˆ™]\›ˆ™]ÈÛYÛÛ[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙHØ\™]Ž‚ˆ™]\›ˆ™]ÈØ\™][››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH’[šÈŽ‚ˆ™]\›ˆ™]È[šÐ[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH’YÚYÚŽ‚ˆ™]\›ˆ™]ÈYÚYÚ[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH•[™\›[™HŽ‚ˆ™]\›ˆ™]È[™\›[™P[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH”Ü]ZYÙÛHŽ‚ˆ™]\›ˆ™]ÈÜ]ZYÙÛP[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH”ÝšZÙSÝ]Ž‚ˆ™]\›ˆ™]ÈÝšZÙSÝ][››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH”Ý[\Ž‚ˆ™]\›ˆ™]ÈÝ[\[››Ý][ÛŠ\˜[Y]\œÊNÂˆØ\ÙH‘š[P]XÚY[Ž‚ˆ™]\›ˆ™]Èš[P]XÚY[[››Ý][ÛŠ\˜[Y]\œÊNÂˆY˜][‚ˆYˆ
XÛÛXÝšY[ÊHÂˆYˆ
\ÝX\JHÂˆØ\›Š[››Ý][Ûˆ\ÈZ\ÜÚ[™ÈH™\]Z\™YÔÝX\KˆŠNÂˆH[ÙHÂˆØ\›Š[š[\[Y[Y[››Ý][Ûˆ\H‰ÜÝX\_H‹
È™˜[[™È˜XÚÈÈ˜\ÙH[››Ý][Û‹ˆŠNÂˆBˆBˆ™]\›ˆ™]È[››Ý][ÛŠ\˜[Y]\œÊNÂˆBˆBˆÝ]XÈ\Þ[˜ÈÙÙ]YÙR[™^
™Y‹™Y‹“X[˜YÙ\ŠHÂˆžHÂˆÛÛœÝ[››ÝXÝH]ØZ]™Y‹™™]ÚY”™Y\Þ[˜Ê™YŠNÂˆYˆ
J[››ÝXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ˆLNÂˆBˆÛÛœÝYÙT™YˆH[››ÝXÝ™Ù]˜]Ê”ŠNÂˆYˆ
YÙT™Yˆ[œÝ[˜Ù[Ùˆ™YŠHÂˆžHÂˆÛÛœÝYÙR[™^H]ØZ]“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ™Ù]YÙR[™^‹ÜYÙT™Y—JNÂˆ™]\›ˆYÙR[™^ÂˆHØ]Ú
^
HÂˆ[™›ÊÙÙ]YÙR[™^KH›ÝH˜[YYÙH™Y™\™[˜ÙNˆ‰Ù^H‹˜
NÂˆBˆBˆYˆ
[››ÝXÝš\Ê’ÚYÈŠJHÂˆ™]\›ˆLNÂˆBˆÛÛœÝ[TYÙ\ÈH]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊ›[TYÙ\ÈŠNÂˆ›Üˆ
]YÙR[™^HÈYÙR[™^[TYÙ\ÎÈYÙR[™^
ÊÊHÂˆÛÛœÝYÙHH]ØZ]“X[˜YÙ\‹™Ù]YÙJYÙR[™^
NÂˆÛÛœÝ[››Ý][ÛœÈH]ØZ]“X[˜YÙ\‹™[œÝ\™JYÙK˜[››Ý][ÛœÈŠNÂˆ›Üˆ
ÛÛœÝ[››Ý™YˆÙˆ[››Ý][ÛœÊHÂˆYˆ
[››Ý™Yˆ[œÝ[˜Ù[Ùˆ™Yˆ	‰ˆ\Ô™YœÑ\]X[
[››Ý™Y‹™YŠJHÂˆ™]\›ˆYÙR[™^ÂˆBˆBˆBˆHØ]Ú
^
HÂˆØ\›ŠÙÙ]YÙR[™^ˆ‰Ù^H‹˜
NÂˆBˆ™]\›ˆLNÂˆBˆÝ]XÈÙ[™\˜]R[XYÙ\Ê[››Ý][ÛœË™Y‹\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY
HÂˆYˆ
Z\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY
HÂˆØ\›Š™Ù[™\˜]R[XYÙ\ÎˆÙ™œØÜ™Y[Ø[˜\È\È›ÝÝ\ÜYØ[››ÝØ]™HÜˆš[ÛÛYH[››Ý][ÛœÈÚ][XYÙ\ËˆŠNÂˆ™]\›ˆ[ÂˆBˆ][XYÙT›ÛZ\Ù\ÎÂˆ›Üˆ
ÛÛœÝÂˆš]X\Yˆš]X\ˆHÙˆ[››Ý][ÛœÊHÂˆYˆ
Xš]X\
HÂˆÛÛ[YNÂˆBˆ[XYÙT›ÛZ\Ù\ÈH™]ÈX\

NÂˆ[XYÙT›ÛZ\Ù\ËœÙ]
š]X\YÝ[\[››Ý][Û‹˜Ü™X]R[XYÙJš]X\™YŠJNÂˆBˆ™]\›ˆ[XYÙT›ÛZ\Ù\ÎÂˆBˆÝ]XÈ\Þ[˜ÈØ]™S™]Ð[››Ý][ÛœÊ]˜[X]Ü‹\ÚË[››Ý][ÛœË[XYÙT›ÛZ\Ù\ËÚ[™Ù\ÊHÂˆÛÛœÝ™YˆH]˜[X]Ü‹ž™YŽÂˆ]˜\ÙQ›Û™YŽÂˆÛÛœÝ›ÛZ\Ù\ÈH×NÂˆÛÛœÝÂˆ\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜYˆHH]˜[X]Ü‹›Ü[ÛœÎÂˆ›Üˆ
ÛÛœÝ[››Ý][ÛˆÙˆ[››Ý][ÛœÊHÂˆYˆ
[››Ý][Û‹™[]Y
HÂˆÛÛ[YNÂˆBˆÝÚ]Ú
[››Ý][Û‹˜[››Ý][Û•\JHÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K‘”‘QUV‚ˆYˆ
X˜\ÙQ›Û™YŠHÂˆÛÛœÝ˜\ÙQ›ÛH™]ÈXÝ
™YŠNÂˆ˜\ÙQ›ÛœÙ]Y“˜[YJ˜\ÙQ›Û‹’[™]XØHŠNÂˆ˜\ÙQ›ÛœÙ]Y“˜[YJ•\H‹‘›ÛŠNÂˆ˜\ÙQ›ÛœÙ]Y“˜[YJ”ÝX\H‹•\LHŠNÂˆ˜\ÙQ›ÛœÙ]Y“˜[YJ‘[˜ÛÙ[™È‹•Ú[[œÚQ[˜ÛÙ[™ÈŠNÂˆ˜\ÙQ›Û™YˆH™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆÚ[™Ù\Ëœ]
˜\ÙQ›Û™Y‹Âˆ]Nˆ˜\ÙQ›ÛˆJNÂˆBˆ›ÛZ\Ù\Ëœ\Ú
œ™YU^[››Ý][Û‹˜Ü™X]S™]Ð[››Ý][ÛŠ™Y‹[››Ý][Û‹Ú[™Ù\ËÂˆ]˜[X]Ü‹ˆ\ÚËˆ˜\ÙQ›Û™Y‚ˆJJNÂˆœ™XZÎÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K’QÒQÒ‚ˆYˆ
[››Ý][Û‹œ]XYÚ[ÊHÂˆ›ÛZ\Ù\Ëœ\Ú
YÚYÚ[››Ý][Û‹˜Ü™X]S™]Ð[››Ý][ÛŠ™Y‹[››Ý][Û‹Ú[™Ù\ÊJNÂˆH[ÙHÂˆ›ÛZ\Ù\Ëœ\Ú
[šÐ[››Ý][Û‹˜Ü™X]S™]Ð[››Ý][ÛŠ™Y‹[››Ý][Û‹Ú[™Ù\ÊJNÂˆBˆœ™XZÎÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K’S’Î‚ˆ›ÛZ\Ù\Ëœ\Ú
[šÐ[››Ý][Û‹˜Ü™X]S™]Ð[››Ý][ÛŠ™Y‹[››Ý][Û‹Ú[™Ù\ÊJNÂˆœ™XZÎÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K”ÕST‚ˆÛÛœÝ[XYÙHH\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜYÈ]ØZ][XYÙT›ÛZ\Ù\ÏË™Ù]
[››Ý][Û‹˜š]X\Y
Hˆ[ÂˆYˆ
[XYÙOËš[XYÙTÝ™X[JHÂˆÛÛœÝÂˆ[XYÙTÝ™X[KˆÛX\ÚÔÝ™X[BˆHH[XYÙNÂˆYˆ
ÛX\ÚÔÝ™X[JHÂˆÛÛœÝÛX\ÚÔ™YˆH™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆÚ[™Ù\Ëœ]
ÛX\ÚÔ™Y‹Âˆ]NˆÛX\ÚÔÝ™X[BˆJNÂˆ[XYÙTÝ™X[K™XÝœÙ]
”ÓX\ÚÈ‹ÛX\ÚÔ™YŠNÂˆBˆÛÛœÝ[XYÙT™YˆH[XYÙKš[XYÙT™YˆH™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆÚ[™Ù\Ëœ]
[XYÙT™Y‹Âˆ]Nˆ[XYÙTÝ™X[BˆJNÂˆ[XYÙKš[XYÙTÝ™X[HH[XYÙKœÛX\ÚÔÝ™X[HH[ÂˆBˆ›ÛZ\Ù\Ëœ\Ú
Ý[\[››Ý][Û‹˜Ü™X]S™]Ð[››Ý][ÛŠ™Y‹[››Ý][Û‹Ú[™Ù\ËÂˆ[XYÙBˆJJNÂˆœ™XZÎÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K”ÒQÓUT‘N‚ˆ›ÛZ\Ù\Ëœ\Ú
Ý[\[››Ý][Û‹˜Ü™X]S™]Ð[››Ý][ÛŠ™Y‹[››Ý][Û‹Ú[™Ù\ËßJJNÂˆœ™XZÎÂˆBˆBˆ™]\›ˆÂˆ[››Ý][ÛœÎˆ
]ØZ]›ÛZ\ÙK˜[
›ÛZ\Ù\ÊJK™›]

BˆNÂˆBˆÝ]XÈ\Þ[˜Èš[™]Ð[››Ý][ÛœÊ[››Ý][Û‘ÛØ˜[Ë]˜[X]Ü‹\ÚË[››Ý][ÛœË[XYÙT›ÛZ\Ù\ÊHÂˆYˆ
X[››Ý][ÛœÊHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝÂˆÜ[ÛœËˆ™Y‚ˆHH]˜[X]ÜŽÂˆÛÛœÝ›ÛZ\Ù\ÈH×NÂˆ›Üˆ
ÛÛœÝ[››Ý][ÛˆÙˆ[››Ý][ÛœÊHÂˆYˆ
[››Ý][Û‹™[]Y
HÂˆÛÛ[YNÂˆBˆÝÚ]Ú
[››Ý][Û‹˜[››Ý][Û•\JHÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K‘”‘QUV‚ˆ›ÛZ\Ù\Ëœ\Ú
œ™YU^[››Ý][Û‹˜Ü™X]S™]Ôš[[››Ý][ÛŠ[››Ý][Û‘ÛØ˜[Ë™Y‹[››Ý][Û‹Âˆ]˜[X]Ü‹ˆ\ÚËˆ]˜[X]Ü“Ü[ÛœÎˆÜ[ÛœÂˆJJNÂˆœ™XZÎÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K’QÒQÒ‚ˆYˆ
[››Ý][Û‹œ]XYÚ[ÊHÂˆ›ÛZ\Ù\Ëœ\Ú
YÚYÚ[››Ý][Û‹˜Ü™X]S™]Ôš[[››Ý][ÛŠ[››Ý][Û‘ÛØ˜[Ë™Y‹[››Ý][Û‹Âˆ]˜[X]Ü“Ü[ÛœÎˆÜ[ÛœÂˆJJNÂˆH[ÙHÂˆ›ÛZ\Ù\Ëœ\Ú
[šÐ[››Ý][Û‹˜Ü™X]S™]Ôš[[››Ý][ÛŠ[››Ý][Û‘ÛØ˜[Ë™Y‹[››Ý][Û‹Âˆ]˜[X]Ü“Ü[ÛœÎˆÜ[ÛœÂˆJJNÂˆBˆœ™XZÎÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K’S’Î‚ˆ›ÛZ\Ù\Ëœ\Ú
[šÐ[››Ý][Û‹˜Ü™X]S™]Ôš[[››Ý][ÛŠ[››Ý][Û‘ÛØ˜[Ë™Y‹[››Ý][Û‹Âˆ]˜[X]Ü“Ü[ÛœÎˆÜ[ÛœÂˆJJNÂˆœ™XZÎÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K”ÕST‚ˆÛÛœÝ[XYÙHHÜ[ÛœËš\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜYÈ]ØZ][XYÙT›ÛZ\Ù\ÏË™Ù]
[››Ý][Û‹˜š]X\Y
Hˆ[ÂˆYˆ
[XYÙOËš[XYÙTÝ™X[JHÂˆÛÛœÝÂˆ[XYÙTÝ™X[KˆÛX\ÚÔÝ™X[BˆHH[XYÙNÂˆYˆ
ÛX\ÚÔÝ™X[JHÂˆ[XYÙTÝ™X[K™XÝœÙ]
”ÓX\ÚÈ‹ÛX\ÚÔÝ™X[JNÂˆBˆ[XYÙKš[XYÙT™YˆH™]ÈœYÔÝ™X[J[XYÙTÝ™X[K[XYÙTÝ™X[K›[™Ý
NÂˆ[XYÙKš[XYÙTÝ™X[HH[XYÙKœÛX\ÚÔÝ™X[HH[ÂˆBˆ›ÛZ\Ù\Ëœ\Ú
Ý[\[››Ý][Û‹˜Ü™X]S™]Ôš[[››Ý][ÛŠ[››Ý][Û‘ÛØ˜[Ë™Y‹[››Ý][Û‹Âˆ[XYÙKˆ]˜[X]Ü“Ü[ÛœÎˆÜ[ÛœÂˆJJNÂˆœ™XZÎÂˆØ\ÙH[››Ý][Û‘Y]Ü•\K”ÒQÓUT‘N‚ˆ›ÛZ\Ù\Ëœ\Ú
Ý[\[››Ý][Û‹˜Ü™X]S™]Ôš[[››Ý][ÛŠ[››Ý][Û‘ÛØ˜[Ë™Y‹[››Ý][Û‹Âˆ]˜[X]Ü“Ü[ÛœÎˆÜ[ÛœÂˆJJNÂˆœ™XZÎÂˆBˆBˆ™]\›ˆ›ÛZ\ÙK˜[
›ÛZ\Ù\ÊNÂˆBŸB™[˜Ý[ÛˆÙ]™ØÛÛÜŠÛÛÜ‹Y˜][ÛÛÜˆH™]ÈZ[Û[\Y\œ˜^JÊJHÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JÛÛÜŠJHÂˆ™]\›ˆY˜][ÛÛÜŽÂˆBˆÛÛœÝ™ØÛÛÜˆHY˜][ÛÛÜˆ™]ÈZ[Û[\Y\œ˜^JÊNÂˆÝÚ]Ú
ÛÛÜ‹›[™Ý
HÂˆØ\ÙH‚ˆ™]\›ˆ[ÂˆØ\ÙHN‚ˆÛÛÜ”ÜXÙU][Ë™Ü˜^K™Ù]™Ø’][JÛÛÜ‹™ØÛÛÜ‹
NÂˆ™]\›ˆ™ØÛÛÜŽÂˆØ\ÙHÎ‚ˆÛÛÜ”ÜXÙU][Ëœ™Ø‹™Ù]™Ø’][JÛÛÜ‹™ØÛÛÜ‹
NÂˆ™]\›ˆ™ØÛÛÜŽÂˆØ\ÙH‚ˆÛÛÜ”ÜXÙU][Ë˜Û^ZË™Ù]™Ø’][JÛÛÜ‹™ØÛÛÜ‹
NÂˆ™]\›ˆ™ØÛÛÜŽÂˆY˜][‚ˆ™]\›ˆY˜][ÛÛÜŽÂˆBŸB™[˜Ý[ÛˆÙ]ÛÛÜ\œ˜^JÛÛÜ‹Y˜][˜[YHH[
HÂˆ™]\›ˆÛÛÜˆ	‰ˆ\œ˜^K™œ›ÛJÛÛÜ‹ÈOˆÈÈMJHY˜][˜[YNÂŸB™[˜Ý[ÛˆÙ]]XYÚ[ÊXÝ™XÝ
HÂˆÛÛœÝ]XYÚ[ÈHXÝ™Ù]\œ˜^J”]XYÚ[ÈŠNÂˆYˆ
Z\Ó[X™\\œ˜^J]XYÚ[Ë[
H]XYÚ[Ë›[™ÝOOH]XYÚ[Ë›[™Ý	Hˆ
HÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ™]Ô]XYÚ[ÈH™]È›Ø]Ì\œ˜^J]XYÚ[Ë›[™Ý
NÂˆ›Üˆ
]HHZHH]XYÚ[Ë›[™ÝÈHZNÈH
ÏH
HÂˆÛÛœÝÞKLK‹L‹ËLËMHH]XYÚ[ËœÛXÙJKH
È
NÂˆÛÛœÝZ[–HX]›Z[ŠK‹Ë
NÂˆÛÛœÝX^HX]›X^
K‹Ë
NÂˆÛÛœÝZ[–HHX]›Z[ŠLKL‹LËM
NÂˆÛÛœÝX^HHX]›X^
LKL‹LËM
NÂˆYˆ
™XÝOOH[	‰ˆ
Z[–™XÝÌHX^ˆ™XÝÌ—HZ[–H™XÝÌWHX^Hˆ™XÝÌ×JJHÂˆ™]\›ˆ[ÂˆBˆ™]Ô]XYÚ[ËœÙ]
ÛZ[–X^KX^X^KZ[–Z[–KX^Z[–WKJNÂˆBˆ™]\›ˆ™]Ô]XYÚ[ÎÂŸB™[˜Ý[ÛˆÙ]˜[œÙ›Ü›SX]š^
™XÝ˜›ÞX]š^
HÂˆÛÛœÝZ[“X^H™]È›Ø]Ì\œ˜^JÒ[™š[š]K[™š[š]KR[™š[š]KR[™š[š]WJNÂˆ][˜^X[[YÛ™Y›Ý[™[™Ð›Þ
˜›ÞX]š^Z[“X^
NÂˆÛÛœÝÛZ[–Z[–KX^X^WHHZ[“X^ÂˆYˆ
Z[–OOHX^Z[–HOOHX^JHÂˆ™]\›ˆÌKK™XÝÌK™XÝÌWWNÂˆBˆÛÛœÝ˜][ÈH
™XÝÌ—HH™XÝÌJHÈ
X^HZ[–
NÂˆÛÛœÝT˜][ÈH
™XÝÌ×HH™XÝÌWJHÈ
X^HHZ[–JNÂˆ™]\›ˆÞ˜][ËT˜][Ë™XÝÌHHZ[–
ˆ˜][Ë™XÝÌWHHZ[–H
ˆT˜][×NÂŸB˜Û\ÜÈ[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÛÛœÝÂˆXÝˆ™Y‹ˆ[››Ý][Û‘ÛØ˜[Ëˆ™Y‹ˆÜœ[‘šY[ÂˆHH\˜[\ÎÂˆÛÛœÝ\™[™YˆHÜœ[‘šY[ÏË™Ù]
™YŠNÂˆYˆ
\™[™YŠHÂˆXÝœÙ]
”\™[‹\™[™YŠNÂˆBˆ\ËœÙ]]JXÝ™Ù]
•ŠJNÂˆ\ËœÙ]ÛÛ[ÊXÝ™Ù]
ÛÛ[ÈŠJNÂˆ\ËœÙ][ÙYšXØ][Û‘]JXÝ™Ù]
“HŠJNÂˆ\ËœÙ]›YÜÊXÝ™Ù]
‘ˆŠJNÂˆ\ËœÙ]™XÝ[™ÛJXÝ™Ù]\œ˜^J”™XÝŠJNÂˆ\ËœÙ]ÛÛÜŠXÝ™Ù]\œ˜^JÈŠJNÂˆ\ËœÙ]›Ü™\”Ý[JXÝ
NÂˆ\ËœÙ]\X\˜[˜ÙJXÝ
NÂˆ\ËœÙ]Ü[Û˜[ÛÛ[
XÝ
NÂˆÛÛœÝRÈHXÝ™Ù]
“RÈŠNÂˆ\ËœÙ]›Ü™\[™˜XÚÙÜ›Ý[™ÛÛÜœÊRÊNÂˆ\ËœÙ]›Ý][ÛŠRËXÝ
NÂˆ\Ëœ™YˆH\˜[\Ëœ™Yˆ[œÝ[˜Ù[Ùˆ™YˆÈ\˜[\Ëœ™Yˆˆ[Âˆ\Ë—ÜÝ™X[\ÈH×NÂˆYˆ
\Ë˜\X\˜[˜ÙJHÂˆ\Ë—ÜÝ™X[\Ëœ\Ú
\Ë˜\X\˜[˜ÙJNÂˆBˆÛÛœÝ\ÓØÚÙYHHJ\Ë™›YÜÈ	ˆ[››Ý][Û‘›YË“ÐÒÑQ
NÂˆÛÛœÝ\ÐÛÛ[ØÚÙYHHJ\Ë™›YÜÈ	ˆ[››Ý][Û‘›YË“ÐÒÑQÓÓ•S•ÊNÂˆ\Ë™]HHÂˆ[››Ý][Û‘›YÜÎˆ\Ë™›YÜËˆ›Ü™\”Ý[Nˆ\Ë˜›Ü™\”Ý[KˆÛÛÜŽˆ\Ë˜ÛÛÜ‹ˆ˜XÚÙÜ›Ý[™ÛÛÜŽˆ\Ë˜˜XÚÙÜ›Ý[™ÛÛÜ‹ˆ›Ü™\ÛÛÜŽˆ\Ë˜›Ü™\ÛÛÜ‹ˆ›Ý][ÛŽˆ\Ëœ›Ý][Û‹ˆÛÛ[ÓØšŽˆ\Ë—ØÛÛ[Ëˆ\Ð\X\˜[˜ÙNˆH]\Ë˜\X\˜[˜ÙKˆYˆ\˜[\ËšYˆ[ÙYšXØ][Û‘]Nˆ\Ë›[ÙYšXØ][Û‘]Kˆ™XÝˆ\Ëœ™XÝ[™ÛKˆÝX\Nˆ\˜[\ËœÝX\Kˆ\ÓÝÛØ[˜\Îˆ˜[ÙKˆ›Ô›Ý]NˆHJ\Ë™›YÜÈ	ˆ[››Ý][Û‘›YË““Ô“ÕUJKˆ›ÒSˆ\ÓØÚÙY	‰ˆ\ÐÛÛ[ØÚÙYˆ\ÑY]X›Nˆ˜[ÙKˆÝXÝ\™[ˆLBˆNÂˆYˆ
[››Ý][Û‘ÛØ˜[ËœÝXÝ™YT›ÛÝ
HÂˆ]ÝXÝ\™[HXÝ™Ù]
”ÝXÝ\™[ŠNÂˆ\Ë™]KœÝXÝ\™[HÝXÝ\™[H[X™\‹š\Ò[YÙ\ŠÝXÝ\™[
H	‰ˆÝXÝ\™[HÈÝXÝ\™[ˆLNÂˆ[››Ý][Û‘ÛØ˜[ËœÝXÝ™YT›ÛÝ˜Y[››Ý][Û’YÔYÙJ\˜[\ËœYÙT™Y‹ÝXÝ\™[
NÂˆBˆYˆ
\˜[\Ë˜ÛÛXÝšY[ÊHÂˆÛÛœÝÚYÈHXÝ™Ù]
’ÚYÈŠNÂˆYˆ
\œ˜^Kš\Ð\œ˜^JÚYÊJHÂˆÛÛœÝÚYYÈH×NÂˆ›Üˆ
ÛÛœÝÚYÙˆÚYÊHÂˆYˆ
ÚY[œÝ[˜Ù[Ùˆ™YŠHÂˆÚYYËœ\Ú
ÚYÔÝš[™Ê
JNÂˆBˆBˆYˆ
ÚYYË›[™ÝOOH
HÂˆ\Ë™]KšÚYYÈHÚYYÎÂˆBˆBˆ\Ë™]K˜XÝ[ÛœÈHÛÛXÝXÝ[ÛœÊ™Y‹XÝ[››Ý][ÛXÝ[Û‘]™[\JNÂˆ\Ë™]K™šY[˜[YHH\Ë—ØÛÛœÝXÝšY[˜[YJXÝ
NÂˆ\Ë™]KœYÙR[™^H\˜[\ËœYÙR[™^ÂˆBˆÛÛœÝ]HXÝ™Ù]
’UŠNÂˆYˆ
][œÝ[˜Ù[Ùˆ˜[YJHÂˆ\Ë™]Kš]H]›˜[YNÂˆBˆ\Ë—Ú\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜYH\˜[\Ë™]˜[X]Ü“Ü[ÛœËš\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜYÂˆ\Ë—Ù˜[˜XÚÑ›ÛXÝH[Âˆ\Ë—Û™YY\X\˜[˜Ù\ÈH˜[ÙNÂˆBˆÚ\Ñ›YÊ›YÜË›YÊHÂˆ™]\›ˆHJ›YÜÈ	ˆ›YÊNÂˆBˆØZ[›YÜÊ›ÕšY]Ë›Ôš[
HÂˆ]Âˆ›YÜÂˆHH\ÎÂˆYˆ
›ÕšY]ÈOOH[™Yš[™Y
HÂˆYˆ
›Ôš[OOH[™Yš[™Y
HÂˆ™]\›ˆ[™Yš[™YÂˆBˆYˆ
›Ôš[
HÂˆ™]\›ˆ›YÜÈ	ˆ[››Ý][Û‘›YË”’S•ÂˆBˆ™]\›ˆ›YÜÈ	ˆ[››Ý][Û‘›YË’QSˆ[››Ý][Û‘›YË”’S•ÂˆBˆYˆ
›ÕšY]ÊHÂˆ›YÜÈH[››Ý][Û‘›YË”’S•ÂˆYˆ
›Ôš[
HÂˆ™]\›ˆ›YÜÈ	ˆ[››Ý][Û‘›YË““Õ’QUÈ[››Ý][Û‘›YË’QSŽÂˆBˆ™]\›ˆ›YÜÈ	ˆ[››Ý][Û‘›YË’QSˆ[››Ý][Û‘›YË““Õ’QUÎÂˆBˆ›YÜÈ	HŠ[››Ý][Û‘›YË’QSˆ[››Ý][Û‘›YË““Õ’QUÊNÂˆYˆ
›Ôš[
HÂˆ™]\›ˆ›YÜÈ	ˆ[››Ý][Û‘›YË”’S•ÂˆBˆ™]\›ˆ›YÜÈ[››Ý][Û‘›YË”’S•ÂˆBˆÚ\ÕšY]ØX›J›YÜÊHÂˆ™]\›ˆ]\Ë—Ú\Ñ›YÊ›YÜË[››Ý][Û‘›YË’S•’TÒP“JH	‰ˆ]\Ë—Ú\Ñ›YÊ›YÜË[››Ý][Û‘›YË““Õ’QUÊNÂˆBˆÚ\Ôš[X›J›YÜÊHÂˆ™]\›ˆ\Ë—Ú\Ñ›YÊ›YÜË[››Ý][Û‘›YË”’S•
H	‰ˆ]\Ë—Ú\Ñ›YÊ›YÜË[››Ý][Û‘›YË’QSŠH	‰ˆ]\Ë—Ú\Ñ›YÊ›YÜË[››Ý][Û‘›YË’S•’TÒP“JNÂˆBˆ]\Ý™UšY]ÙY
[››Ý][Û”ÝÜ˜YÙKÜ™[™\‘›Ü›\ÊHÂˆÛÛœÝ›ÕšY]ÈH[››Ý][Û”ÝÜ˜YÙOË™Ù]
\Ë™]KšY
OË››ÕšY]ÎÂˆYˆ
›ÕšY]ÈOOH[™Yš[™Y
HÂˆ™]\›ˆ[›ÕšY]ÎÂˆBˆ™]\›ˆ\ËšY]ØX›H	‰ˆ]\Ë—Ú\Ñ›YÊ\Ë™›YÜË[››Ý][Û‘›YË’QSŠNÂˆBˆ]\Ý™Tš[Y
[››Ý][Û”ÝÜ˜YÙJHÂˆÛÛœÝ›Ôš[H[››Ý][Û”ÝÜ˜YÙOË™Ù]
\Ë™]KšY
OË››Ôš[ÂˆYˆ
›Ôš[OOH[™Yš[™Y
HÂˆ™]\›ˆ[›Ôš[ÂˆBˆ™]\›ˆ\Ëœš[X›NÂˆBˆ]\Ý™UšY]ÙYÚ[‘Y][™Ê\ÑY][™Ë[ÙYšYYYÈH[
HÂˆ™]\›ˆ\ÑY][™ÈÈ]\Ë™]Kš\ÑY]X›Hˆ[[ÙYšYYYÏËš\Ê\Ë™]KšY
NÂˆBˆÙ]šY]ØX›J
HÂˆYˆ
\Ë™]Kœ]XYÚ[ÈOOH[
HÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
\Ë™›YÜÈOOH
HÂˆ™]\›ˆYNÂˆBˆ™]\›ˆ\Ë—Ú\ÕšY]ØX›J\Ë™›YÜÊNÂˆBˆÙ]š[X›J
HÂˆYˆ
\Ë™]Kœ]XYÚ[ÈOOH[
HÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
\Ë™›YÜÈOOH
HÂˆ™]\›ˆ˜[ÙNÂˆBˆ™]\›ˆ\Ë—Ú\Ôš[X›J\Ë™›YÜÊNÂˆBˆÜ\œÙTÝš[™Ò[\Š]JHÂˆÛÛœÝÝˆH\[Ùˆ]HOOHœÝš[™ÈˆÈÝš[™ÕÔ”Ýš[™Ê]JHˆˆŽÂˆÛÛœÝ\ˆHÝˆ	‰ˆšYJÝŠK™\ˆOOHœˆÈœˆˆ›ˆŽÂˆ™]\›ˆÂˆÝ‹ˆ\‚ˆNÂˆBˆÙ]Y˜][\X\˜[˜ÙJ\˜[\ÊHÂˆÛÛœÝÂˆXÝˆ[››Ý][Û‘ÛØ˜[ÂˆHH\˜[\ÎÂˆÛÛœÝY˜][\X\˜[˜ÙHHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ‘H‚ˆJH[››Ý][Û‘ÛØ˜[Ë˜XÜ›Ñ›Ü›K™Ù]
‘HŠNÂˆ\Ë—ÙY˜][\X\˜[˜ÙHH\[ÙˆY˜][\X\˜[˜ÙHOOHœÝš[™ÈˆÈY˜][\X\˜[˜ÙHˆˆŽÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]HH\œÙQY˜][\X\˜[˜ÙJ\Ë—ÙY˜][\X\˜[˜ÙJNÂˆBˆÙ]]J]JHÂˆ\Ë—Ý]HH\Ë—Ü\œÙTÝš[™Ò[\Š]JNÂˆBˆÙ]ÛÛ[ÊÛÛ[ÊHÂˆ\Ë—ØÛÛ[ÈH\Ë—Ü\œÙTÝš[™Ò[\ŠÛÛ[ÊNÂˆBˆÙ][ÙYšXØ][Û‘]J[ÙYšXØ][Û‘]JHÂˆ\Ë›[ÙYšXØ][Û‘]HH\[Ùˆ[ÙYšXØ][Û‘]HOOHœÝš[™ÈˆÈ[ÙYšXØ][Û‘]Hˆ[ÂˆBˆÙ]›YÜÊ›YÜÊHÂˆ\Ë™›YÜÈH[X™\‹š\Ò[YÙ\Š›YÜÊH	‰ˆ›YÜÈˆÈ›YÜÈˆÂˆYˆ
\Ë™›YÜÈ	ˆ[››Ý][Û‘›YË’S•’TÒP“H	‰ˆ\Ë˜ÛÛœÝXÝÜ‹›˜[YHOOH[››Ý][ÛˆŠHÂˆ\Ë™›YÜÈH[››Ý][Û‘›YË’S•’TÒP“NÂˆBˆBˆ\Ñ›YÊ›YÊHÂˆ™]\›ˆ\Ë—Ú\Ñ›YÊ\Ë™›YÜË›YÊNÂˆBˆÙ]™XÝ[™ÛJ™XÝ[™ÛJHÂˆ\Ëœ™XÝ[™ÛHHÛÚÝ\›Ü›X[™XÝ
™XÝ[™ÛKÌJNÂˆBˆÙ]ÛÛÜŠÛÛÜŠHÂˆ\Ë˜ÛÛÜˆHÙ]™ØÛÛÜŠÛÛÜŠNÂˆBˆÙ][™Q[™[™ÜÊ[™Q[™[™ÜÊHÂˆ\Ë›[™Q[™[™ÜÈHÈ“›Û™H‹“›Û™H—NÂˆYˆ
\œ˜^Kš\Ð\œ˜^J[™Q[™[™ÜÊH	‰ˆ[™Q[™[™ÜË›[™ÝOOHŠHÂˆ›Üˆ
]HHÈHŽÈJÊÊHÂˆÛÛœÝØšˆH[™Q[™[™ÜÖÚWNÂˆYˆ
Øšˆ[œÝ[˜Ù[Ùˆ˜[YJHÂˆÝÚ]Ú
Øš‹›˜[YJHÂˆØ\ÙH“›Û™HŽ‚ˆÛÛ[YNÂˆØ\ÙH”Ü]X\™HŽ‚ˆØ\ÙHÚ\˜ÛHŽ‚ˆØ\ÙH‘X[[Û™Ž‚ˆØ\ÙH“Ü[\œ›ÝÈŽ‚ˆØ\ÙHÛÜÙY\œ›ÝÈŽ‚ˆØ\ÙH]Ž‚ˆØ\ÙH”“Ü[\œ›ÝÈŽ‚ˆØ\ÙH”ÛÜÙY\œ›ÝÈŽ‚ˆØ\ÙH”Û\ÚŽ‚ˆ\Ë›[™Q[™[™ÜÖÚWHHØš‹›˜[YNÂˆÛÛ[YNÂˆBˆBˆØ\›ŠYÛ›Üš[™È[˜[Y[™Q[™[™Îˆ	ÛØšŸX
NÂˆBˆBˆBˆÙ]›Ý][ÛŠZËXÝ
HÂˆ\Ëœ›Ý][ÛˆHÂˆ][™ÛHHZÈ[œÝ[˜Ù[ÙˆXÝÈZË™Ù]
”ˆŠHˆXÝ™Ù]
”›Ý]HŠHÂˆYˆ
[X™\‹š\Ò[YÙ\Š[™ÛJH	‰ˆ[™ÛHOOH
HÂˆ[™ÛH	OHÍŒÂˆYˆ
[™ÛH
HÂˆ[™ÛH
ÏHÍŒÂˆBˆYˆ
[™ÛH	HLOOH
HÂˆ\Ëœ›Ý][ÛˆH[™ÛNÂˆBˆBˆBˆÙ]›Ü™\[™˜XÚÙÜ›Ý[™ÛÛÜœÊZÊHÂˆYˆ
ZÈ[œÝ[˜Ù[ÙˆXÝ
HÂˆ\Ë˜›Ü™\ÛÛÜˆHÙ]™ØÛÛÜŠZË™Ù]\œ˜^JÈŠK[
NÂˆ\Ë˜˜XÚÙÜ›Ý[™ÛÛÜˆHÙ]™ØÛÛÜŠZË™Ù]\œ˜^J‘ÈŠK[
NÂˆH[ÙHÂˆ\Ë˜›Ü™\ÛÛÜˆH\Ë˜˜XÚÙÜ›Ý[™ÛÛÜˆH[ÂˆBˆBˆÙ]›Ü™\”Ý[J›Ü™\”Ý[JHÂˆ\Ë˜›Ü™\”Ý[HH™]È[››Ý][Û›Ü™\”Ý[J
NÂˆYˆ
J›Ü™\”Ý[H[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆYˆ
›Ü™\”Ý[Kš\Ê”ÈŠJHÂˆÛÛœÝXÝH›Ü™\”Ý[K™Ù]
”ÈŠNÂˆYˆ
XÝ[œÝ[˜Ù[ÙˆXÝ
HÂˆÛÛœÝXÝ\HHXÝ™Ù]
•\HŠNÂˆYˆ
YXÝ\H\Ó˜[YJXÝ\K›Ü™\ˆŠJHÂˆ\Ë˜›Ü™\”Ý[KœÙ]ÚY
XÝ™Ù]
•ÈŠK\Ëœ™XÝ[™ÛJNÂˆ\Ë˜›Ü™\”Ý[KœÙ]Ý[JXÝ™Ù]
”ÈŠJNÂˆ\Ë˜›Ü™\”Ý[KœÙ]\Ú\œ˜^JXÝ™Ù]\œ˜^J‘ŠJNÂˆBˆBˆH[ÙHYˆ
›Ü™\”Ý[Kš\Ê›Ü™\ˆŠJHÂˆÛÛœÝ\œ˜^HH›Ü™\”Ý[K™Ù]\œ˜^J›Ü™\ˆŠNÂˆYˆ
\œ˜^Kš\Ð\œ˜^J\œ˜^JH	‰ˆ\œ˜^K›[™ÝHÊHÂˆ\Ë˜›Ü™\”Ý[KœÙ]Üš^›Û[ÛÜ›™\”˜Y]\Ê\œ˜^VÌJNÂˆ\Ë˜›Ü™\”Ý[KœÙ]™\XØ[ÛÜ›™\”˜Y]\Ê\œ˜^VÌWJNÂˆ\Ë˜›Ü™\”Ý[KœÙ]ÚY
\œ˜^VÌ—K\Ëœ™XÝ[™ÛJNÂˆYˆ
\œ˜^K›[™ÝOOH
HÂˆ\Ë˜›Ü™\”Ý[KœÙ]\Ú\œ˜^J\œ˜^VÌ×KYJNÂˆBˆBˆH[ÙHÂˆ\Ë˜›Ü™\”Ý[KœÙ]ÚY

NÂˆBˆBˆÙ]\X\˜[˜ÙJXÝ
HÂˆ\Ë˜\X\˜[˜ÙHH[ÂˆÛÛœÝ\X\˜[˜ÙTÝ]\ÈHXÝ™Ù]
TŠNÂˆYˆ
J\X\˜[˜ÙTÝ]\È[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆÛÛœÝ›Ü›X[\X\˜[˜ÙTÝ]HH\X\˜[˜ÙTÝ]\Ë™Ù]
“ˆŠNÂˆYˆ
›Ü›X[\X\˜[˜ÙTÝ]H[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JHÂˆ\Ë˜\X\˜[˜ÙHH›Ü›X[\X\˜[˜ÙTÝ]NÂˆ™]\›ŽÂˆBˆYˆ
J›Ü›X[\X\˜[˜ÙTÝ]H[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆÛÛœÝ\ÈHXÝ™Ù]
TÈŠNÂˆYˆ
J\È[œÝ[˜Ù[Ùˆ˜[YJH[›Ü›X[\X\˜[˜ÙTÝ]Kš\Ê\Ë›˜[YJJHÂˆ™]\›ŽÂˆBˆÛÛœÝ\X\˜[˜ÙHH›Ü›X[\X\˜[˜ÙTÝ]K™Ù]
\Ë›˜[YJNÂˆYˆ
\X\˜[˜ÙH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JHÂˆ\Ë˜\X\˜[˜ÙHH\X\˜[˜ÙNÂˆBˆBˆÙ]Ü[Û˜[ÛÛ[
XÝ
HÂˆ\Ë›ØÈH[ÂˆÛÛœÝØÈHXÝ™Ù]
“ÐÈŠNÂˆYˆ
ØÈ[œÝ[˜Ù[Ùˆ˜[YJHÂˆØ\›ŠœÙ]Ü[Û˜[ÛÛ[ˆÝ\Ü›ÜˆÓ˜[YKY[žH\È›Ý[\[Y[YˆŠNÂˆH[ÙHYˆ
ØÈ[œÝ[˜Ù[ÙˆXÝ
HÂˆ\Ë›ØÈHØÎÂˆBˆBˆ\Þ[˜ÈØY™\ÛÝ\˜Ù\ÊÙ^\Ë\X\˜[˜ÙJHÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH]ØZ]\X\˜[˜ÙK™XÝ™Ù]\Þ[˜Ê”™\ÛÝ\˜Ù\ÈŠNÂˆYˆ
™\ÛÝ\˜Ù\ÊHÂˆ]ØZ]Øš™XÝØY\‹›ØY
™\ÛÝ\˜Ù\ËÙ^\Ë™\ÛÝ\˜Ù\Ëž™YŠNÂˆBˆ™]\›ˆ™\ÛÝ\˜Ù\ÎÂˆBˆ\Þ[˜ÈÙ]Ü\˜]Ü“\Ý
]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJHÂˆÛÛœÝÂˆ\ÓÝÛØ[˜\ËˆYˆ™XÝˆHH\Ë™]NÂˆ]\X\˜[˜ÙHH\Ë˜\X\˜[˜ÙNÂˆÛÛœÝ\Õ\Ú[™ÓÝÛØ[˜\ÈHHJ\ÓÝÛØ[˜\È	‰ˆ[[	ˆ™[™\š[™Ò[[›YË‘TÔVJNÂˆYˆ
\Õ\Ú[™ÓÝÛØ[˜\È	‰ˆ
\ËÚYOOH\ËšZYÚOOH
JHÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH˜[ÙNÂˆ™]\›ˆÂˆÜ\Ýˆ™]ÈÜ\˜]Ü“\Ý

KˆÙ\\˜]Q›Ü›Nˆ˜[ÙKˆÙ\\˜]PØ[˜\Îˆ˜[ÙBˆNÂˆBˆYˆ
X\X\˜[˜ÙJHÂˆYˆ
Z\Õ\Ú[™ÓÝÛØ[˜\ÊHÂˆ™]\›ˆÂˆÜ\Ýˆ™]ÈÜ\˜]Ü“\Ý

KˆÙ\\˜]Q›Ü›Nˆ˜[ÙKˆÙ\\˜]PØ[˜\Îˆ˜[ÙBˆNÂˆBˆ\X\˜[˜ÙHH™]ÈÝš[™ÔÝ™X[JˆŠNÂˆ\X\˜[˜ÙK™XÝH™]ÈXÝ

NÂˆBˆÛÛœÝ\X\˜[˜ÙQXÝH\X\˜[˜ÙK™XÝÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH]ØZ]\Ë›ØY™\ÛÝ\˜Ù\Ê‘TÓÕTÑT×ÒÑVT×ÓÔTUÔ—ÓTÕ\X\˜[˜ÙJNÂˆÛÛœÝ˜›ÞHÛÚÝ\™XÝ
\X\˜[˜ÙQXÝ™Ù]\œ˜^J›ÞŠKÌKWJNÂˆÛÛœÝX]š^HÛÚÝ\X]š^
\X\˜[˜ÙQXÝ™Ù]\œ˜^J“X]š^ŠKQS•UWÓPU’V
NÂˆÛÛœÝ˜[œÙ›Ü›HHÙ]˜[œÙ›Ü›SX]š^
™XÝ˜›ÞX]š^
NÂˆÛÛœÝÜ\ÝH™]ÈÜ\˜]Ü“\Ý

NÂˆ]Ü[Û˜[ÛÛ[ÂˆYˆ
\Ë›ØÊHÂˆÜ[Û˜[ÛÛ[H]ØZ]]˜[X]Ü‹œ\œÙSX\šÙYÛÛ[›ÜÊ\Ë›ØË[
NÂˆBˆYˆ
Ü[Û˜[ÛÛ[OOH[™Yš[™Y
HÂˆÜ\Ý˜YÜ
ÔË˜™YÚ[“X\šÙYÛÛ[›ÜËÈ“ÐÈ‹Ü[Û˜[ÛÛ[JNÂˆBˆÜ\Ý˜YÜ
ÔË˜™YÚ[[››Ý][Û‹ÚY™XÝ˜[œÙ›Ü›KX]š^\Õ\Ú[™ÓÝÛØ[˜\×JNÂˆ]ØZ]]˜[X]Ü‹™Ù]Ü\˜]Ü“\Ý
ÂˆÝ™X[Nˆ\X\˜[˜ÙKˆ\ÚËˆ™\ÛÝ\˜Ù\ËˆÜ\˜]Ü“\ÝˆÜ\Ýˆ˜[˜XÚÑ›ÛXÝˆ\Ë—Ù˜[˜XÚÑ›ÛXÝˆJNÂˆÜ\Ý˜YÜ
ÔË™[™[››Ý][Û‹×JNÂˆYˆ
Ü[Û˜[ÛÛ[OOH[™Yš[™Y
HÂˆÜ\Ý˜YÜ
ÔË™[™X\šÙYÛÛ[×JNÂˆBˆ\Ëœ™\Ù]

NÂˆ™]\›ˆÂˆÜ\ÝˆÙ\\˜]Q›Ü›Nˆ˜[ÙKˆÙ\\˜]PØ[˜\Îˆ\Õ\Ú[™ÓÝÛØ[˜\ÂˆNÂˆBˆ\Þ[˜ÈØ]™J]˜[X]Ü‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊHÂˆ™]\›ˆ[ÂˆBˆÙ]Ý™\›^\Õ^ÛÛ[

HÂˆ™]\›ˆ˜[ÙNÂˆBˆÙ]\Õ^ÛÛ[

HÂˆ™]\›ˆ˜[ÙNÂˆBˆ\Þ[˜È^˜XÝ^ÛÛ[
]˜[X]Ü‹\ÚËšY]Ð›Þ
HÂˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆ™]\›ŽÂˆBˆÛÛœÝ™\ÛÝ\˜Ù\ÈH]ØZ]\Ë›ØY™\ÛÝ\˜Ù\Ê‘TÓÕTÑT×ÒÑVT×ÕVÐÓÓ•S•\Ë˜\X\˜[˜ÙJNÂˆÛÛœÝ^H×NÂˆÛÛœÝY™™\ˆH×NÂˆ]š\œÝÜÚ][ÛˆH[ÂˆÛÛœÝÚ[šÈHÂˆ\Ú\™YÚ^™NˆX]’[™š[š]Kˆ™XYNˆYKˆ[œ]Y]YJÚ[šËÚ^™JHÂˆ›Üˆ
ÛÛœÝ][HÙˆÚ[šËš][\ÊHÂˆYˆ
][KœÝˆOOH[™Yš[™Y
HÂˆÛÛ[YNÂˆBˆš\œÝÜÚ][ÛˆH][K˜[œÙ›Ü›KœÛXÙJLŠNÂˆY™™\‹œ\Ú
][KœÝŠNÂˆYˆ
][Kš\ÑSÓ
HÂˆ^œ\Ú
Y™™\‹š›Ú[ŠˆŠKš[Q[™

JNÂˆY™™\‹›[™ÝHÂˆBˆBˆBˆNÂˆ]ØZ]]˜[X]Ü‹™Ù]^ÛÛ[
ÂˆÝ™X[Nˆ\Ë˜\X\˜[˜ÙKˆ\ÚËˆ™\ÛÝ\˜Ù\Ëˆ[˜ÛYSX\šÙYÛÛ[ˆYKˆÙY\Ú]TÜXÙNˆYKˆÚ[šËˆšY]Ð›ÞˆJNÂˆ\Ëœ™\Ù]

NÂˆYˆ
Y™™\‹›[™Ý
HÂˆ^œ\Ú
Y™™\‹š›Ú[ŠˆŠKš[Q[™

JNÂˆBˆYˆ
^›[™ÝˆH^ÌJHÂˆÛÛœÝ\X\˜[˜ÙQXÝH\Ë˜\X\˜[˜ÙK™XÝÂˆÛÛœÝ˜›ÞHÛÚÝ\™XÝ
\X\˜[˜ÙQXÝ™Ù]\œ˜^J›ÞŠK[
NÂˆÛÛœÝX]š^HÛÚÝ\X]š^
\X\˜[˜ÙQXÝ™Ù]\œ˜^J“X]š^ŠK[
NÂˆ\Ë™]K^ÜÚ][ÛˆH\Ë—Ý˜[œÙ›Ü›TÚ[
š\œÝÜÚ][Û‹˜›ÞX]š^
NÂˆ\Ë™]K^ÛÛ[H^ÂˆBˆBˆÝ˜[œÙ›Ü›TÚ[
ÛÛÜ™Ë˜›ÞX]š^
HÂˆÛÛœÝÂˆ™XÝˆHH\Ë™]NÂˆ˜›ÞHÌKWNÂˆX]š^HÌKKNÂˆÛÛœÝ˜[œÙ›Ü›HHÙ]˜[œÙ›Ü›SX]š^
™XÝ˜›ÞX]š^
NÂˆ˜[œÙ›Ü›VÍHOH™XÝÌNÂˆ˜[œÙ›Ü›VÍWHOH™XÝÌWNÂˆÛÛœÝHÛÛÜ™ËœÛXÙJ
NÂˆ][˜\U˜[œÙ›Ü›J˜[œÙ›Ü›JNÂˆ][˜\U˜[œÙ›Ü›JX]š^
NÂˆ™]\›ˆÂˆBˆÙ]šY[Øš™XÝ

HÂˆYˆ
\Ë™]KšÚYYÊHÂˆ™]\›ˆÂˆYˆ\Ë™]KšYˆXÝ[ÛœÎˆ\Ë™]K˜XÝ[ÛœËˆ˜[YNˆ\Ë™]K™šY[˜[YKˆÝ›ÚÙPÛÛÜŽˆ\Ë™]K˜›Ü™\ÛÛÜ‹ˆš[ÛÛÜŽˆ\Ë™]K˜˜XÚÙÜ›Ý[™ÛÛÜ‹ˆ\Nˆˆ‹ˆÚYYÎˆ\Ë™]KšÚYYËˆYÙNˆ\Ë™]KœYÙR[™^ˆ›Ý][ÛŽˆ\Ëœ›Ý][Û‚ˆNÂˆBˆ™]\›ˆ[ÂˆBˆ™\Ù]

HÂˆ›Üˆ
ÛÛœÝÝ™X[HÙˆ\Ë—ÜÝ™X[\ÊHÂˆÝ™X[Kœ™\Ù]

NÂˆBˆBˆØÛÛœÝXÝšY[˜[YJXÝ
HÂˆYˆ
YXÝš\Ê•ŠH	‰ˆYXÝš\Ê”\™[ŠJHÂˆØ\›Š•[šÛ›ÝÛˆšY[˜[YK˜[[™È˜XÚÈÈ[\HšY[˜[YKˆŠNÂˆ™]\›ˆˆŽÂˆBˆYˆ
YXÝš\Ê”\™[ŠJHÂˆ™]\›ˆÝš[™ÕÔ”Ýš[™ÊXÝ™Ù]
•ŠJNÂˆBˆÛÛœÝšY[˜[YHH×NÂˆYˆ
XÝš\Ê•ŠJHÂˆšY[˜[YK[œÚY
Ýš[™ÕÔ”Ýš[™ÊXÝ™Ù]
•ŠJJNÂˆBˆ]ÛÜXÝHXÝÂˆÛÛœÝš\Ú]YH™]È™Y”Ù]

NÂˆYˆ
XÝ›Øš’Y
HÂˆš\Ú]Yœ]
XÝ›Øš’Y
NÂˆBˆÚ[H
ÛÜXÝš\Ê”\™[ŠJHÂˆÛÜXÝHÛÜXÝ™Ù]
”\™[ŠNÂˆYˆ
JÛÜXÝ[œÝ[˜Ù[ÙˆXÝ
HÛÜXÝ›Øš’Y	‰ˆš\Ú]Yš\ÊÛÜXÝ›Øš’Y
JHÂˆœ™XZÎÂˆBˆYˆ
ÛÜXÝ›Øš’Y
HÂˆš\Ú]Yœ]
ÛÜXÝ›Øš’Y
NÂˆBˆYˆ
ÛÜXÝš\Ê•ŠJHÂˆšY[˜[YK[œÚY
Ýš[™ÕÔ”Ýš[™ÊÛÜXÝ™Ù]
•ŠJJNÂˆBˆBˆ™]\›ˆšY[˜[YKš›Ú[Š‹ˆŠNÂˆBˆÙ]ÚY

HÂˆ™]\›ˆ\Ë™]Kœ™XÝÌ—HH\Ë™]Kœ™XÝÌNÂˆBˆÙ]ZYÚ

HÂˆ™]\›ˆ\Ë™]Kœ™XÝÌ×HH\Ë™]Kœ™XÝÌWNÂˆBŸB˜Û\ÜÈ[››Ý][Û›Ü™\”Ý[HÂˆÛÛœÝXÝÜŠ
HÂˆ\ËÚYHNÂˆ\Ëœ˜]ÕÚYHNÂˆ\ËœÝ[HH[››Ý][Û›Ü™\”Ý[U\K”ÓÓQÂˆ\Ë™\Ú\œ˜^HHÌ×NÂˆ\ËšÜš^›Û[ÛÜ›™\”˜Y]\ÈHÂˆ\Ë™\XØ[ÛÜ›™\”˜Y]\ÈHÂˆBˆÙ]ÚY
ÚY™XÝHÌJHÂˆYˆ
ÚY[œÝ[˜Ù[Ùˆ˜[YJHÂˆ\ËÚYHÂˆ™]\›ŽÂˆBˆYˆ
\[ÙˆÚYOOH›[X™\ˆŠHÂˆYˆ
ÚYˆ
HÂˆ\Ëœ˜]ÕÚYHÚYÂˆÛÛœÝX^ÚYH
™XÝÌ—HH™XÝÌJHÈŽÂˆÛÛœÝX^ZYÚH
™XÝÌ×HH™XÝÌWJHÈŽÂˆYˆ
X^ÚYˆ	‰ˆX^ZYÚˆ	‰ˆ
ÚYˆX^ÚYÚYˆX^ZYÚ
JHÂˆØ\›Š[››Ý][Û›Ü™\”Ý[KœÙ]ÚYHYÛ›Üš[™ÈÚYˆ	ÝÚYX
NÂˆÚYHNÂˆBˆBˆ\ËÚYHÚYÂˆBˆBˆÙ]Ý[JÝ[JHÂˆYˆ
JÝ[H[œÝ[˜Ù[Ùˆ˜[YJJHÂˆ™]\›ŽÂˆBˆÝÚ]Ú
Ý[K›˜[YJHÂˆØ\ÙH”ÈŽ‚ˆ\ËœÝ[HH[››Ý][Û›Ü™\”Ý[U\K”ÓÓQÂˆœ™XZÎÂˆØ\ÙH‘Ž‚ˆ\ËœÝ[HH[››Ý][Û›Ü™\”Ý[U\K‘TÒQÂˆœ™XZÎÂˆØ\ÙHˆŽ‚ˆ\ËœÝ[HH[››Ý][Û›Ü™\”Ý[U\K‘U‘SQÂˆœ™XZÎÂˆØ\ÙH’HŽ‚ˆ\ËœÝ[HH[››Ý][Û›Ü™\”Ý[U\K’S”ÑUÂˆœ™XZÎÂˆØ\ÙH•HŽ‚ˆ\ËœÝ[HH[››Ý][Û›Ü™\”Ý[U\K•S‘T“S‘NÂˆœ™XZÎÂˆY˜][‚ˆœ™XZÎÂˆBˆBˆÙ]\Ú\œ˜^J\Ú\œ˜^K›Ü˜ÙTÝ[HH˜[ÙJHÂˆYˆ
\œ˜^Kš\Ð\œ˜^J\Ú\œ˜^JJHÂˆ]\Õ˜[YHYNÂˆ][™\›ÜÈHYNÂˆ›Üˆ
ÛÛœÝ[[Y[Ùˆ\Ú\œ˜^JHÂˆÛÛœÝ˜[Y[X™\ˆH
Ù[[Y[HÂˆYˆ
]˜[Y[X™\ŠHÂˆ\Õ˜[YH˜[ÙNÂˆœ™XZÎÂˆH[ÙHYˆ
[[Y[ˆ
HÂˆ[™\›ÜÈH˜[ÙNÂˆBˆBˆYˆ
\Ú\œ˜^K›[™ÝOOH\Õ˜[Y	‰ˆX[™\›ÜÊHÂˆ\Ë™\Ú\œ˜^HH\Ú\œ˜^NÂˆYˆ
›Ü˜ÙTÝ[JHÂˆ\ËœÙ]Ý[J˜[YK™Ù]
‘ŠJNÂˆBˆH[ÙHÂˆ\ËÚYHÂˆBˆH[ÙHYˆ
\Ú\œ˜^JHÂˆ\ËÚYHÂˆBˆBˆÙ]Üš^›Û[ÛÜ›™\”˜Y]\Ê˜Y]\ÊHÂˆYˆ
[X™\‹š\Ò[YÙ\Š˜Y]\ÊJHÂˆ\ËšÜš^›Û[ÛÜ›™\”˜Y]\ÈH˜Y]\ÎÂˆBˆBˆÙ]™\XØ[ÛÜ›™\”˜Y]\Ê˜Y]\ÊHÂˆYˆ
[X™\‹š\Ò[YÙ\Š˜Y]\ÊJHÂˆ\Ë™\XØ[ÛÜ›™\”˜Y]\ÈH˜Y]\ÎÂˆBˆBŸB˜Û\ÜÈX\šÝ\[››Ý][Ûˆ^[™È[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆHH\˜[\ÎÂˆYˆ
XÝš\Ê’T•ŠJHÂˆÛÛœÝ˜]ÒT•HXÝ™Ù]˜]Ê’T•ŠNÂˆ\Ë™]Kš[”™\UÈH˜]ÒT•[œÝ[˜Ù[Ùˆ™YˆÈ˜]ÒT•ÔÝš[™Ê
Hˆ[ÂˆÛÛœÝHXÝ™Ù]
”•ŠNÂˆ\Ë™]Kœ™\U\HH[œÝ[˜Ù[Ùˆ˜[YHÈ›˜[YHˆ[››Ý][Û”™\U\K”‘TNÂˆBˆ]Ü\™YˆH[ÂˆYˆ
\Ë™]Kœ™\U\HOOH[››Ý][Û”™\U\K‘Ô“ÕT
HÂˆÛÛœÝ\™[HXÝ™Ù]
’T•ŠNÂˆ\ËœÙ]]J\™[™Ù]
•ŠJNÂˆ\Ë™]K]SØšˆH\Ë—Ý]NÂˆ\ËœÙ]ÛÛ[Ê\™[™Ù]
ÛÛ[ÈŠJNÂˆ\Ë™]K˜ÛÛ[ÓØšˆH\Ë—ØÛÛ[ÎÂˆYˆ
\\™[š\ÊÜ™X][Û‘]HŠJHÂˆ\Ë™]K˜Ü™X][Û‘]HH[ÂˆH[ÙHÂˆ\ËœÙ]Ü™X][Û‘]J\™[™Ù]
Ü™X][Û‘]HŠJNÂˆ\Ë™]K˜Ü™X][Û‘]HH\Ë˜Ü™X][Û‘]NÂˆBˆYˆ
\\™[š\Ê“HŠJHÂˆ\Ë™]K›[ÙYšXØ][Û‘]HH[ÂˆH[ÙHÂˆ\ËœÙ][ÙYšXØ][Û‘]J\™[™Ù]
“HŠJNÂˆ\Ë™]K›[ÙYšXØ][Û‘]HH\Ë›[ÙYšXØ][Û‘]NÂˆBˆÜ\™YˆH\™[™Ù]˜]Ê”Ü\ŠNÂˆYˆ
\\™[š\ÊÈŠJHÂˆ\Ë™]K˜ÛÛÜˆH[ÂˆH[ÙHÂˆ\ËœÙ]ÛÛÜŠ\™[™Ù]\œ˜^JÈŠJNÂˆ\Ë™]K˜ÛÛÜˆH\Ë˜ÛÛÜŽÂˆBˆH[ÙHÂˆ\Ë™]K]SØšˆH\Ë—Ý]NÂˆ\ËœÙ]Ü™X][Û‘]JXÝ™Ù]
Ü™X][Û‘]HŠJNÂˆ\Ë™]K˜Ü™X][Û‘]HH\Ë˜Ü™X][Û‘]NÂˆÜ\™YˆHXÝ™Ù]˜]Ê”Ü\ŠNÂˆYˆ
YXÝš\ÊÈŠJHÂˆ\Ë™]K˜ÛÛÜˆH[ÂˆBˆBˆ\Ë™]KœÜ\™YˆHÜ\™Yˆ[œÝ[˜Ù[Ùˆ™YˆÈÜ\™Y‹ÔÝš[™Ê
Hˆ[ÂˆYˆ
XÝš\Ê”ÈŠJHÂˆ\Ë™]KœšXÚ^HQ˜XÝÜžK™Ù]šXÚ^\Ò[
XÝ™Ù]
”ÈŠJNÂˆBˆBˆÙ]Ü™X][Û‘]JÜ™X][Û‘]JHÂˆ\Ë˜Ü™X][Û‘]HH\[ÙˆÜ™X][Û‘]HOOHœÝš[™ÈˆÈÜ™X][Û‘]Hˆ[ÂˆBˆÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜KˆÝ›ÚÙPÛÛÜ‹ˆš[ÛÛÜ‹ˆ›[™[ÙKˆÝ›ÚÙP[Kˆš[[KˆÚ[ÐØ[˜XÚÂˆJHÂˆÛÛœÝ˜›ÞH\Ë™]Kœ™XÝHÒ[™š[š]K[™š[š]KR[™š[š]KR[™š[š]WNÂˆÛÛœÝY™™\ˆHÈœH—NÂˆYˆ
^˜JHÂˆY™™\‹œ\Ú
^˜JNÂˆBˆYˆ
Ý›ÚÙPÛÛÜŠHÂˆY™™\‹œ\Ú
	ÜÝ›ÚÙPÛÛÜ–Ì_H	ÜÝ›ÚÙPÛÛÜ–ÌW_H	ÜÝ›ÚÙPÛÛÜ–Ì—_H‘Ø
NÂˆBˆYˆ
š[ÛÛÜŠHÂˆY™™\‹œ\Ú
	Ùš[ÛÛÜ–Ì_H	Ùš[ÛÛÜ–ÌW_H	Ùš[ÛÛÜ–Ì—_H™Ø
NÂˆBˆÛÛœÝÚ[Ð\œ˜^HH\Ë™]Kœ]XYÚ[È›Ø]Ì\œ˜^K™œ›ÛJÝ\Ëœ™XÝ[™ÛVÌK\Ëœ™XÝ[™ÛVÌ×K\Ëœ™XÝ[™ÛVÌ—K\Ëœ™XÝ[™ÛVÌ×K\Ëœ™XÝ[™ÛVÌK\Ëœ™XÝ[™ÛVÌWK\Ëœ™XÝ[™ÛVÌ—K\Ëœ™XÝ[™ÛVÌWWJNÂˆ›Üˆ
]HHZHHÚ[Ð\œ˜^K›[™ÝÈHZNÈH
ÏH
HÂˆÛÛœÝÚ[ÈHÚ[ÐØ[˜XÚÊY™™\‹Ú[Ð\œ˜^KœÝX˜\œ˜^JKH
È
JNÂˆ][œ™XÝ›Ý[™[™Ð›Þ
‹‹œÚ[Ë˜›Þ
NÂˆBˆY™™\‹œ\Ú
”HŠNÂˆÛÛœÝ›Ü›QXÝH™]ÈXÝ
™YŠNÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[QXÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[HH™]ÈÝš[™ÔÝ™X[JY™™\‹š›Ú[ŠˆŠJNÂˆ\X\˜[˜ÙTÝ™X[K™XÝH\X\˜[˜ÙTÝ™X[QXÝÂˆ›Ü›QXÝœÙ]
‘›L‹\X\˜[˜ÙTÝ™X[JNÂˆÛÛœÝÜÑXÝH™]ÈXÝ
™YŠNÂˆYˆ
›[™[ÙJHÂˆÜÑXÝœÙ]Y“˜[YJ“H‹›[™[ÙJNÂˆBˆÜÑXÝœÙ]Y“[X™\ŠÐH‹Ý›ÚÙP[JNÂˆÜÑXÝœÙ]Y“[X™\Š˜ØH‹š[[JNÂˆÛÛœÝÝ]QXÝH™]ÈXÝ
™YŠNÂˆÝ]QXÝœÙ]
‘ÔÌ‹ÜÑXÝ
NÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH™]ÈXÝ
™YŠNÂˆ™\ÛÝ\˜Ù\ËœÙ]
‘^ÔÝ]H‹Ý]QXÝ
NÂˆ™\ÛÝ\˜Ù\ËœÙ]
–Øš™XÝ‹›Ü›QXÝ
NÂˆÛÛœÝ\X\˜[˜ÙQXÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙQXÝœÙ]
”™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\ÊNÂˆ\X\˜[˜ÙQXÝœÙ]
›Þ‹˜›Þ
NÂˆ\Ë˜\X\˜[˜ÙHH™]ÈÝš[™ÔÝ™X[J‹ÑÔÌÜÈÑ›LÈŠNÂˆ\Ë˜\X\˜[˜ÙK™XÝH\X\˜[˜ÙQXÝÂˆ\Ë—ÜÝ™X[\Ëœ\Ú
\Ë˜\X\˜[˜ÙK\X\˜[˜ÙTÝ™X[JNÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]S™]Ð[››Ý][ÛŠ™Y‹[››Ý][Û‹Ú[™Ù\Ë\˜[\ÊHÂˆÛÛœÝ[››Ý][Û”™YˆH[››Ý][Û‹œ™YˆH™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆÛÛœÝ\H]ØZ]\Ë˜Ü™X]S™]Ð\X\˜[˜ÙTÝ™X[J[››Ý][Û‹™Y‹\˜[\ÊNÂˆ][››Ý][Û‘XÝÂˆYˆ
\
HÂˆÛÛœÝ\™YˆH™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆ[››Ý][Û‘XÝH\Ë˜Ü™X]S™]ÑXÝ
[››Ý][Û‹™Y‹Âˆ\™Y‚ˆJNÂˆÚ[™Ù\Ëœ]
\™Y‹Âˆ]Nˆ\ˆJNÂˆH[ÙHÂˆ[››Ý][Û‘XÝH\Ë˜Ü™X]S™]ÑXÝ
[››Ý][Û‹™Y‹ßJNÂˆBˆYˆ
[X™\‹š\Ò[YÙ\Š[››Ý][Û‹œ\™[™YRY
JHÂˆ[››Ý][Û‘XÝœÙ]
”ÝXÝ\™[‹[››Ý][Û‹œ\™[™YRY
NÂˆBˆÚ[™Ù\Ëœ]
[››Ý][Û”™Y‹Âˆ]Nˆ[››Ý][Û‘XÝˆJNÂˆÛÛœÝ™]™YˆHÂˆ™YŽˆ[››Ý][Û”™Y‚ˆNÂˆYˆ
[››Ý][Û‹œÜ\
HÂˆÛÛœÝÜ\H[››Ý][Û‹œÜ\ÂˆYˆ
Ü\™[]Y
HÂˆ[››Ý][Û‘XÝ™[]J”Ü\ŠNÂˆ[››Ý][Û‘XÝ™[]JÛÛ[ÈŠNÂˆ[››Ý][Û‘XÝ™[]J”ÈŠNÂˆ™]\›ˆ™]™YŽÂˆBˆÛÛœÝÜ\™YˆHÜ\œ™YˆH™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆÜ\œ\™[H[››Ý][Û”™YŽÂˆÛÛœÝÜ\XÝHÜ\[››Ý][Û‹˜Ü™X]S™]ÑXÝ
Ü\™YŠNÂˆÚ[™Ù\Ëœ]
Ü\™Y‹Âˆ]NˆÜ\XÝˆJNÂˆ[››Ý][Û‘XÝœÙ]Y‘Yš[™Y
ÛÛ[È‹Ýš[™ÕÐ\ØÚZSÜ•UŒM‘JÜ\˜ÛÛ[ÊJNÂˆ[››Ý][Û‘XÝœÙ]
”Ü\‹Ü\™YŠNÂˆ™]\›ˆÜ™]™Y‹Âˆ™YŽˆÜ\™Y‚ˆWNÂˆBˆ™]\›ˆ™]™YŽÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]S™]Ôš[[››Ý][ÛŠ[››Ý][Û‘ÛØ˜[Ë™Y‹[››Ý][Û‹\˜[\ÊHÂˆÛÛœÝ\H]ØZ]\Ë˜Ü™X]S™]Ð\X\˜[˜ÙTÝ™X[J[››Ý][Û‹™Y‹\˜[\ÊNÂˆÛÛœÝ[››Ý][Û‘XÝH\Ë˜Ü™X]S™]ÑXÝ
[››Ý][Û‹™Y‹\ÈÂˆ\ˆHˆßJNÂˆÛÛœÝ™]Ð[››Ý][ÛˆH™]È\Ëœ›ÝÝ\K˜ÛÛœÝXÝÜŠÂˆXÝˆ[››Ý][Û‘XÝˆ™Y‹ˆ[››Ý][Û‘ÛØ˜[Ëˆ]˜[X]Ü“Ü[ÛœÎˆ\˜[\Ë™]˜[X]Ü“Ü[ÛœÂˆJNÂˆYˆ
[››Ý][Û‹œ™YŠHÂˆ™]Ð[››Ý][Û‹œ™YˆH™]Ð[››Ý][Û‹œ™Y•Ô™\XÙHH[››Ý][Û‹œ™YŽÂˆBˆ™]\›ˆ™]Ð[››Ý][ÛŽÂˆBŸB˜Û\ÜÈÚYÙ][››Ý][Ûˆ^[™È[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‹ˆ[››Ý][Û‘ÛØ˜[ÂˆHH\˜[\ÎÂˆÛÛœÝ]HH\Ë™]NÂˆ\Ë—Û™YY\X\˜[˜Ù\ÈH\˜[\Ë›™YY\X\˜[˜Ù\ÎÂˆ]K˜[››Ý][Û•\HH[››Ý][Û•\K•ÒQÑUÂˆYˆ
]K™šY[˜[YHOOH[™Yš[™Y
HÂˆ]K™šY[˜[YHH\Ë—ØÛÛœÝXÝšY[˜[YJXÝ
NÂˆBˆYˆ
]K˜XÝ[ÛœÈOOH[™Yš[™Y
HÂˆ]K˜XÝ[ÛœÈHÛÛXÝXÝ[ÛœÊ™Y‹XÝ[››Ý][ÛXÝ[Û‘]™[\JNÂˆBˆ]šY[˜[YHHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ•ˆ‹ˆÙ]\œ˜^NˆYBˆJNÂˆ]K™šY[˜[YHH\Ë—ÙXÛÙQ›Ü›U˜[YJšY[˜[YJNÂˆÛÛœÝY˜][šY[˜[YHHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ‘ˆ‹ˆÙ]\œ˜^NˆYBˆJNÂˆ]K™Y˜][šY[˜[YHH\Ë—ÙXÛÙQ›Ü›U˜[YJY˜][šY[˜[YJNÂˆYˆ
šY[˜[YHOOH[™Yš[™Y	‰ˆ[››Ý][Û‘ÛØ˜[Ëž˜Q]\Ù]ÊHÂˆÛÛœÝ]H\Ë—Ý]KœÝŽÂˆYˆ
]
HÂˆ\Ë—Ú\Õ˜[YQœ›ÛVHHYNÂˆ]K™šY[˜[YHHšY[˜[YHH[››Ý][Û‘ÛØ˜[Ëž˜Q]\Ù]Ë™Ù]˜[YJ]
NÂˆBˆBˆYˆ
šY[˜[YHOOH[™Yš[™Y	‰ˆ]K™Y˜][šY[˜[YHOOH[
HÂˆ]K™šY[˜[YHH]K™Y˜][šY[˜[YNÂˆBˆ]K˜[\›˜]]™U^HÝš[™ÕÔ”Ýš[™ÊXÝ™Ù]
•HŠHˆŠNÂˆ\ËœÙ]Y˜][\X\˜[˜ÙJ\˜[\ÊNÂˆ]Kš\Ð\X\˜[˜ÙHH\Ë—Û™YY\X\˜[˜Ù\È	‰ˆ]K™šY[˜[YHOOH[™Yš[™Y	‰ˆ]K™šY[˜[YHOOH[ÂˆÛÛœÝšY[\HHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ‘•‚ˆJNÂˆ]K™šY[\HHšY[\H[œÝ[˜Ù[Ùˆ˜[YHÈšY[\K›˜[YHˆ[ÂˆÛÛœÝØØ[™\ÛÝ\˜Ù\ÈHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ‘ˆ‚ˆJNÂˆÛÛœÝXÜ›Ñ›Ü›T™\ÛÝ\˜Ù\ÈH[››Ý][Û‘ÛØ˜[Ë˜XÜ›Ñ›Ü›K™Ù]
‘ˆŠNÂˆÛÛœÝ\X\˜[˜ÙT™\ÛÝ\˜Ù\ÈH\Ë˜\X\˜[˜ÙOË™XÝ™Ù]
”™\ÛÝ\˜Ù\ÈŠNÂˆ\Ë—ÙšY[™\ÛÝ\˜Ù\ÈHÂˆØØ[™\ÛÝ\˜Ù\ËˆXÜ›Ñ›Ü›T™\ÛÝ\˜Ù\Ëˆ\X\˜[˜ÙT™\ÛÝ\˜Ù\ËˆY\™ÙY™\ÛÝ\˜Ù\ÎˆXÝ›Y\™ÙJÂˆ™Y‹ˆXÝ\œ˜^NˆÛØØ[™\ÛÝ\˜Ù\Ë\X\˜[˜ÙT™\ÛÝ\˜Ù\ËXÜ›Ñ›Ü›T™\ÛÝ\˜Ù\×KˆY\™ÙTÝX‘XÝÎˆYBˆJBˆNÂˆ]K™šY[›YÜÈHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ‘™ˆ‚ˆJNÂˆYˆ
S[X™\‹š\Ò[YÙ\Š]K™šY[›YÜÊH]K™šY[›YÜÈ
HÂˆ]K™šY[›YÜÈHÂˆBˆ]Kœ\ÜÝÛÜ™H\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË”TÔÕÓÔ‘
NÂˆ]Kœ™XYÛ›HH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË”‘PQÓ“JNÂˆ]Kœ™\]Z\™YH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË”‘TURT‘Q
NÂˆ]KšY[ˆH\Ë—Ú\Ñ›YÊ]K˜[››Ý][Û‘›YÜË[››Ý][Û‘›YË’QSŠH\Ë—Ú\Ñ›YÊ]K˜[››Ý][Û‘›YÜË[››Ý][Û‘›YË““Õ’QUÊNÂˆBˆÙXÛÙQ›Ü›U˜[YJ›Ü›U˜[YJHÂˆYˆ
\œ˜^Kš\Ð\œ˜^J›Ü›U˜[YJJHÂˆ™]\›ˆ›Ü›U˜[YK™š[\Š][HOˆ\[Ùˆ][HOOHœÝš[™ÈŠK›X\
][HOˆÝš[™ÕÔ”Ýš[™Ê][JJNÂˆH[ÙHYˆ
›Ü›U˜[YH[œÝ[˜Ù[Ùˆ˜[YJHÂˆ™]\›ˆÝš[™ÕÔ”Ýš[™Ê›Ü›U˜[YK›˜[YJNÂˆH[ÙHYˆ
\[Ùˆ›Ü›U˜[YHOOHœÝš[™ÈŠHÂˆ™]\›ˆÝš[™ÕÔ”Ýš[™Ê›Ü›U˜[YJNÂˆBˆ™]\›ˆ[ÂˆBˆ\ÑšY[›YÊ›YÊHÂˆ™]\›ˆHJ\Ë™]K™šY[›YÜÈ	ˆ›YÊNÂˆBˆÚ\ÕšY]ØX›J›YÜÊHÂˆ™]\›ˆYNÂˆBˆ]\Ý™UšY]ÙY
[››Ý][Û”ÝÜ˜YÙK™[™\‘›Ü›\ÊHÂˆYˆ
™[™\‘›Ü›\ÊHÂˆ™]\›ˆ\ËšY]ØX›NÂˆBˆ™]\›ˆÝ\\‹›]\Ý™UšY]ÙY
[››Ý][Û”ÝÜ˜YÙK™[™\‘›Ü›\ÊH	‰ˆ]\Ë—Ú\Ñ›YÊ\Ë™›YÜË[››Ý][Û‘›YË““Õ’QUÊNÂˆBˆÙ]›Ý][Û“X]š^
[››Ý][Û”ÝÜ˜YÙJHÂˆ]›Ý][ÛˆH[››Ý][Û”ÝÜ˜YÙOË™Ù]
\Ë™]KšY
OËœ›Ý][ÛŽÂˆYˆ
›Ý][ÛˆOOH[™Yš[™Y
HÂˆ›Ý][ÛˆH\Ëœ›Ý][ÛŽÂˆBˆ™]\›ˆ›Ý][ÛˆOOHÈQS•UWÓPU’VˆÙ]›Ý][Û“X]š^
›Ý][Û‹\ËÚY\ËšZYÚ
NÂˆBˆÙ]›Ü™\[™˜XÚÙÜ›Ý[™\X\˜[˜Ù\Ê[››Ý][Û”ÝÜ˜YÙJHÂˆ]›Ý][ÛˆH[››Ý][Û”ÝÜ˜YÙOË™Ù]
\Ë™]KšY
OËœ›Ý][ÛŽÂˆYˆ
›Ý][ÛˆOOH[™Yš[™Y
HÂˆ›Ý][ÛˆH\Ëœ›Ý][ÛŽÂˆBˆYˆ
]\Ë˜˜XÚÙÜ›Ý[™ÛÛÜˆ	‰ˆ]\Ë˜›Ü™\ÛÛÜŠHÂˆ™]\›ˆˆŽÂˆBˆÛÛœÝ™XÝH›Ý][ÛˆOOH›Ý][ÛˆOOHNÈ	Ý\ËÚYH	Ý\ËšZYÚH™Xˆ	Ý\ËšZYÚH	Ý\ËÚYH™XÂˆ]ÝˆHˆŽÂˆYˆ
\Ë˜˜XÚÙÜ›Ý[™ÛÛÜŠHÂˆÝˆH	ÙÙ]ÛÛÜŠ\Ë˜˜XÚÙÜ›Ý[™ÛÛÜ‹YJ_H	Ü™XÝHˆÂˆBˆYˆ
\Ë˜›Ü™\ÛÛÜŠHÂˆÛÛœÝ›Ü™\•ÚYH\Ë˜›Ü™\”Ý[KÚYNÂˆÝˆ
ÏH	Ø›Ü™\•ÚYHÈ	ÙÙ]ÛÛÜŠ\Ë˜›Ü™\ÛÛÜ‹˜[ÙJ_H	Ü™XÝHÈÂˆBˆ™]\›ˆÝŽÂˆBˆ\Þ[˜ÈÙ]Ü\˜]Ü“\Ý
]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJHÂˆYˆ
[[	ˆ™[™\š[™Ò[[›YËS““ÕUSÓ”×Ñ“Ô“TÈ	‰ˆJ\È[œÝ[˜Ù[ÙˆÚYÛ˜]\™UÚYÙ][››Ý][ÛŠH	‰ˆ]\Ë™]K››ÒS	‰ˆ]\Ë™]Kš\ÓÝÛØ[˜\ÊHÂˆ™]\›ˆÂˆÜ\Ýˆ™]ÈÜ\˜]Ü“\Ý

KˆÙ\\˜]Q›Ü›NˆYKˆÙ\\˜]PØ[˜\Îˆ˜[ÙBˆNÂˆBˆYˆ
]\Ë—Ú\Õ^
HÂˆ™]\›ˆÝ\\‹™Ù]Ü\˜]Ü“\Ý
]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJNÂˆBˆÛÛœÝÛÛ[H]ØZ]\Ë—ÙÙ]\X\˜[˜ÙJ]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJNÂˆYˆ
\Ë˜\X\˜[˜ÙH	‰ˆÛÛ[OOH[
HÂˆ™]\›ˆÝ\\‹™Ù]Ü\˜]Ü“\Ý
]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJNÂˆBˆÛÛœÝÜ\ÝH™]ÈÜ\˜]Ü“\Ý

NÂˆYˆ
]\Ë—ÙY˜][\X\˜[˜ÙHÛÛ[OOH[
HÂˆ™]\›ˆÂˆÜ\ÝˆÙ\\˜]Q›Ü›Nˆ˜[ÙKˆÙ\\˜]PØ[˜\Îˆ˜[ÙBˆNÂˆBˆÛÛœÝ\Õ\Ú[™ÓÝÛØ[˜\ÈHHJ\Ë™]Kš\ÓÝÛØ[˜\È	‰ˆ[[	ˆ™[™\š[™Ò[[›YË‘TÔVJNÂˆÛÛœÝX]š^HÌKKNÂˆÛÛœÝ˜›ÞHÌ\ËÚY\ËšZYÚNÂˆÛÛœÝ˜[œÙ›Ü›HHÙ]˜[œÙ›Ü›SX]š^
\Ë™]Kœ™XÝ˜›ÞX]š^
NÂˆ]Ü[Û˜[ÛÛ[ÂˆYˆ
\Ë›ØÊHÂˆÜ[Û˜[ÛÛ[H]ØZ]]˜[X]Ü‹œ\œÙSX\šÙYÛÛ[›ÜÊ\Ë›ØË[
NÂˆBˆYˆ
Ü[Û˜[ÛÛ[OOH[™Yš[™Y
HÂˆÜ\Ý˜YÜ
ÔË˜™YÚ[“X\šÙYÛÛ[›ÜËÈ“ÐÈ‹Ü[Û˜[ÛÛ[JNÂˆBˆÜ\Ý˜YÜ
ÔË˜™YÚ[[››Ý][Û‹Ý\Ë™]KšY\Ë™]Kœ™XÝ˜[œÙ›Ü›K\Ë™Ù]›Ý][Û“X]š^
[››Ý][Û”ÝÜ˜YÙJK\Õ\Ú[™ÓÝÛØ[˜\×JNÂˆÛÛœÝÝ™X[HH™]ÈÝš[™ÔÝ™X[JÛÛ[
NÂˆ]ØZ]]˜[X]Ü‹™Ù]Ü\˜]Ü“\Ý
ÂˆÝ™X[Kˆ\ÚËˆ™\ÛÝ\˜Ù\Îˆ\Ë—ÙšY[™\ÛÝ\˜Ù\Ë›Y\™ÙY™\ÛÝ\˜Ù\ËˆÜ\˜]Ü“\ÝˆÜ\ÝˆJNÂˆÜ\Ý˜YÜ
ÔË™[™[››Ý][Û‹×JNÂˆYˆ
Ü[Û˜[ÛÛ[OOH[™Yš[™Y
HÂˆÜ\Ý˜YÜ
ÔË™[™X\šÙYÛÛ[×JNÂˆBˆ™]\›ˆÂˆÜ\ÝˆÙ\\˜]Q›Ü›Nˆ˜[ÙKˆÙ\\˜]PØ[˜\Îˆ\Õ\Ú[™ÓÝÛØ[˜\ÂˆNÂˆBˆÙÙ]RÑXÝ
›Ý][ÛŠHÂˆÛÛœÝZÈH™]ÈXÝ
[
NÂˆYˆ
›Ý][ÛŠHÂˆZËœÙ]
”ˆ‹›Ý][ÛŠNÂˆBˆZËœÙ]Y\œ˜^JÈ‹Ù]ÛÛÜ\œ˜^J\Ë˜›Ü™\ÛÛÜŠJNÂˆZËœÙ]Y\œ˜^J‘È‹Ù]ÛÛÜ\œ˜^J\Ë˜˜XÚÙÜ›Ý[™ÛÛÜŠJNÂˆ™]\›ˆZËœÚ^™HˆÈZÈˆ[ÂˆBˆ[Y[™Ø]™YXÝ
[››Ý][Û”ÝÜ˜YÙKXÝ
HßBˆÙ]˜[YJXÝ˜[YK™Y‹Ú[™Ù\ÊHÂˆÛÛœÝÂˆXÝˆ\™[XÝˆ™YŽˆ\™[™Y‚ˆHHÙ]\™[Õ\]JXÝ\Ëœ™Y‹™YŠNÂˆYˆ
\\™[XÝ
HÂˆXÝœÙ]
•ˆ‹˜[YJNÂˆH[ÙHYˆ
XÚ[™Ù\Ëš\Ê\™[™YŠJHÂˆÛÛœÝ™]Ô\™[XÝH\™[XÝ˜ÛÛ™J
NÂˆ™]Ô\™[XÝœÙ]
•ˆ‹˜[YJNÂˆÚ[™Ù\Ëœ]
\™[™Y‹Âˆ]Nˆ™]Ô\™[XÝˆJNÂˆ™]\›ˆ™]Ô\™[XÝÂˆBˆ™]\›ˆ[ÂˆBˆ\Þ[˜ÈØ]™J]˜[X]Ü‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊHÂˆÛÛœÝÝÜ˜YÙQ[žHH[››Ý][Û”ÝÜ˜YÙOË™Ù]
\Ë™]KšY
NÂˆÛÛœÝ›YÜÈH\Ë—ØZ[›YÜÊÝÜ˜YÙQ[žOË››ÕšY]ËÝÜ˜YÙQ[žOË››Ôš[
NÂˆ]˜[YHHÝÜ˜YÙQ[žOË˜[YKˆ›Ý][ÛˆHÝÜ˜YÙQ[žOËœ›Ý][ÛŽÂˆYˆ
˜[YHOOH\Ë™]K™šY[˜[YH˜[YHOOH[™Yš[™Y
HÂˆYˆ
]\Ë—Ú\Õ˜[YQœ›ÛVH	‰ˆ›Ý][ÛˆOOH[™Yš[™Y	‰ˆ›YÜÈOOH[™Yš[™Y
HÂˆ™]\›ŽÂˆBˆ˜[YHH\Ë™]K™šY[˜[YNÂˆBˆYˆ
›Ý][ÛˆOOH[™Yš[™Y	‰ˆ]\Ë—Ú\Õ˜[YQœ›ÛVH	‰ˆ\œ˜^Kš\Ð\œ˜^J˜[YJH	‰ˆ\œ˜^Kš\Ð\œ˜^J\Ë™]K™šY[˜[YJH	‰ˆ\Ð\œ˜^Q\]X[
˜[YK\Ë™]K™šY[˜[YJH	‰ˆ›YÜÈOOH[™Yš[™Y
HÂˆ™]\›ŽÂˆBˆYˆ
›Ý][ÛˆOOH[™Yš[™Y
HÂˆ›Ý][ÛˆH\Ëœ›Ý][ÛŽÂˆBˆ]\X\˜[˜ÙHH[ÂˆYˆ
]\Ë—Û™YY\X\˜[˜Ù\ÊHÂˆ\X\˜[˜ÙHH]ØZ]\Ë—ÙÙ]\X\˜[˜ÙJ]˜[X]Ü‹\ÚË™[™\š[™Ò[[›YË”ÐU‘K[››Ý][Û”ÝÜ˜YÙJNÂˆYˆ
\X\˜[˜ÙHOOH[	‰ˆ›YÜÈOOH[™Yš[™Y
HÂˆ™]\›ŽÂˆBˆH[ÙHßBˆ]™YY\X\˜[˜Ù\ÈH˜[ÙNÂˆYˆ
\X\˜[˜ÙOË›™YY\X\˜[˜Ù\ÊHÂˆ™YY\X\˜[˜Ù\ÈHYNÂˆ\X\˜[˜ÙHH[ÂˆBˆÛÛœÝÂˆ™Y‚ˆHH]˜[X]ÜŽÂˆÛÛœÝÜšYÚ[˜[XÝH™Y‹™™]ÚY”™YŠ\Ëœ™YŠNÂˆYˆ
JÜšYÚ[˜[XÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆÛÛœÝXÝH™]ÈXÝ
™YŠNÂˆ›Üˆ
ÛÛœÝÙ^HÙˆÜšYÚ[˜[XÝ™Ù]Ù^\Ê
JHÂˆYˆ
Ù^HOOHTŠHÂˆXÝœÙ]
Ù^KÜšYÚ[˜[XÝ™Ù]˜]ÊÙ^JJNÂˆBˆBˆYˆ
›YÜÈOOH[™Yš[™Y
HÂˆXÝœÙ]
‘ˆ‹›YÜÊNÂˆYˆ
\X\˜[˜ÙHOOH[	‰ˆ[™YY\X\˜[˜Ù\ÊHÂˆÛÛœÝ\HÜšYÚ[˜[XÝ™Ù]˜]ÊTŠNÂˆYˆ
\
HÂˆXÝœÙ]
T‹\
NÂˆBˆBˆBˆÛÛœÝ˜HHÂˆ]ˆ\Ë™]K™šY[˜[YKˆ˜[YBˆNÂˆÛÛœÝ™]Ô\™[XÝH\ËœÙ]˜[YJXÝ\œ˜^Kš\Ð\œ˜^J˜[YJHÈ˜[YK›X\
Ýš[™ÕÐ\ØÚZSÜ•UŒM‘JHˆÝš[™ÕÐ\ØÚZSÜ•UŒM‘J˜[YJK™Y‹Ú[™Ù\ÊNÂˆ\Ë˜[Y[™Ø]™YXÝ
[››Ý][Û”ÝÜ˜YÙK™]Ô\™[XÝXÝ
NÂˆÛÛœÝX^X™SRÈH\Ë—ÙÙ]RÑXÝ
›Ý][ÛŠNÂˆYˆ
X^X™SRÊHÂˆXÝœÙ]
“RÈ‹X^X™SRÊNÂˆBˆÚ[™Ù\Ëœ]
\Ëœ™Y‹Âˆ]NˆXÝˆ˜Kˆ™YY\X\˜[˜Ù\ÂˆJNÂˆYˆ
\X\˜[˜ÙHOOH[
HÂˆÛÛœÝ™]Ô™YˆH™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆÛÛœÝTH™]ÈXÝ
™YŠNÂˆXÝœÙ]
T‹T
NÂˆTœÙ]
“ˆ‹™]Ô™YŠNÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH\Ë—ÙÙ]Ø]™QšY[™\ÛÝ\˜Ù\Ê™YŠNÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[HH™]ÈÝš[™ÔÝ™X[J\X\˜[˜ÙJNÂˆÛÛœÝ\X\˜[˜ÙQXÝH\X\˜[˜ÙTÝ™X[K™XÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙQXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆ\X\˜[˜ÙQXÝœÙ]
”™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\ÊNÂˆÛÛœÝ˜›ÞH›Ý][Ûˆ	HNOOHÈÌ\ËÚY\ËšZYÚHˆÌ\ËšZYÚ\ËÚYNÂˆ\X\˜[˜ÙQXÝœÙ]
›Þ‹˜›Þ
NÂˆÛÛœÝ›Ý][Û“X]š^H\Ë™Ù]›Ý][Û“X]š^
[››Ý][Û”ÝÜ˜YÙJNÂˆYˆ
›Ý][Û“X]š^OOHQS•UWÓPU’V
HÂˆ\X\˜[˜ÙQXÝœÙ]
“X]š^‹›Ý][Û“X]š^
NÂˆBˆÚ[™Ù\Ëœ]
™]Ô™Y‹Âˆ]Nˆ\X\˜[˜ÙTÝ™X[Kˆ˜Nˆ[ˆ™YY\X\˜[˜Ù\Îˆ˜[ÙBˆJNÂˆBˆXÝœÙ]
“H‹‰ÙÙ][ÙYšXØ][Û‘]J
_X
NÂˆBˆ\Þ[˜ÈÙÙ]\X\˜[˜ÙJ]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJHÂˆYˆ
\Ë™]Kœ\ÜÝÛÜ™
HÂˆ™]\›ˆ[ÂˆBˆÛÛœÝÝÜ˜YÙQ[žHH[››Ý][Û”ÝÜ˜YÙOË™Ù]
\Ë™]KšY
NÂˆ]˜[YK›Ý][ÛŽÂˆYˆ
ÝÜ˜YÙQ[žJHÂˆ˜[YHHÝÜ˜YÙQ[žK™›Ü›X]Y˜[YHÝÜ˜YÙQ[žK˜[YNÂˆ›Ý][ÛˆHÝÜ˜YÙQ[žKœ›Ý][ÛŽÂˆBˆYˆ
›Ý][ÛˆOOH[™Yš[™Y	‰ˆ˜[YHOOH[™Yš[™Y	‰ˆ]\Ë—Û™YY\X\˜[˜Ù\ÊHÂˆYˆ
]\Ë—Ú\Õ˜[YQœ›ÛVH\Ë˜\X\˜[˜ÙJHÂˆ™]\›ˆ[ÂˆBˆBˆÛÛœÝÛÛÜœÈH\Ë™Ù]›Ü™\[™˜XÚÙÜ›Ý[™\X\˜[˜Ù\Ê[››Ý][Û”ÝÜ˜YÙJNÂˆYˆ
˜[YHOOH[™Yš[™Y
HÂˆ˜[YHH\Ë™]K™šY[˜[YNÂˆYˆ
]˜[YJHÂˆ™]\›ˆÕ“PÈH	ØÛÛÜœßTHSPØÂˆBˆBˆYˆ
\œ˜^Kš\Ð\œ˜^J˜[YJH	‰ˆ˜[YK›[™ÝOOHJHÂˆ˜[YHH˜[YVÌNÂˆBˆ\ÜÙ\
\[Ùˆ˜[YHOOHœÝš[™È‹‘^XÝY˜[YXÈ™HHÝš[™ËˆŠNÂˆ˜[YHH˜[YKš[Q[™

NÂˆYˆ
\Ë™]K˜ÛÛX›ÊHÂˆÛÛœÝÜ[ÛˆH\Ë™]K›Ü[ÛœË™š[™

Âˆ^Ü˜[YBˆJHOˆ˜[YHOOH^Ü˜[YJNÂˆ˜[YHHÜ[ÛË™\Ü^U˜[YH˜[YNÂˆBˆYˆ
˜[YHOOHˆŠHÂˆ™]\›ˆÕ“PÈH	ØÛÛÜœßTHSPØÂˆBˆYˆ
›Ý][ÛˆOOH[™Yš[™Y
HÂˆ›Ý][ÛˆH\Ëœ›Ý][ÛŽÂˆBˆ][™PÛÝ[HLNÂˆ][™\ÎÂˆYˆ
\Ë™]K›][S[™JHÂˆ[™\ÈH˜[YKœÜ]
×—ß‹ÊK›X\
[™HOˆ[™K››Ü›X[^™J“‘ÈŠJNÂˆ[™PÛÝ[H[™\Ë›[™ÝÂˆH[ÙHÂˆ[™\ÈHÝ˜[YKœ™\XÙJ×—ß‹ËˆŠK››Ü›X[^™J“‘ÈŠWNÂˆBˆÛÛœÝY˜][Y[™ÈHNÂˆÛÛœÝY˜][Y[™ÈHŽÂˆ]ÂˆÚYˆÝ[ÚYˆZYÚˆÝ[ZYÚˆHH\ÎÂˆYˆ
›Ý][ÛˆOOHL›Ý][ÛˆOOHÌ
HÂˆÝÝ[ÚYÝ[ZYÚHHÝÝ[ZYÚÝ[ÚYNÂˆBˆYˆ
]\Ë—ÙY˜][\X\˜[˜ÙJHÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]HH\œÙQY˜][\X\˜[˜ÙJ\Ë—ÙY˜][\X\˜[˜ÙHH‹Ò[™]XØHˆÈŠNÂˆBˆ]›ÛH]ØZ]ÚYÙ][››Ý][Û‹—ÙÙ]›Û]J]˜[X]Ü‹\ÚË\Ë™]K™Y˜][\X\˜[˜ÙQ]K\Ë—ÙšY[™\ÛÝ\˜Ù\Ë›Y\™ÙY™\ÛÝ\˜Ù\ÊNÂˆ]Y˜][\X\˜[˜ÙK›ÛÚ^™K[™RZYÚÂˆÛÛœÝ[˜ÛÙY[™\ÈH×NÂˆ][˜ÛÙ[™Ñ\œ›ÜˆH˜[ÙNÂˆ›Üˆ
ÛÛœÝ[™HÙˆ[™\ÊHÂˆÛÛœÝ[˜ÛÙYÝš[™ÈH›Û™[˜ÛÙTÝš[™Ê[™JNÂˆYˆ
[˜ÛÙYÝš[™Ë›[™ÝˆJHÂˆ[˜ÛÙ[™Ñ\œ›ÜˆHYNÂˆBˆ[˜ÛÙY[™\Ëœ\Ú
[˜ÛÙYÝš[™Ëš›Ú[ŠˆŠJNÂˆBˆYˆ
[˜ÛÙ[™Ñ\œ›Üˆ	‰ˆ[[	ˆ™[™\š[™Ò[[›YË”ÐU‘JHÂˆ™]\›ˆÂˆ™YY\X\˜[˜Ù\ÎˆYBˆNÂˆBˆYˆ
[˜ÛÙ[™Ñ\œ›Üˆ	‰ˆ\Ë—Ú\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY
HÂˆÛÛœÝ›Û˜[Z[HH\Ë™]K˜ÛÛXˆÈ›[Û›ÜÜXÙHˆˆœØ[œË\Ù\šYˆŽÂˆÛÛœÝ˜ZÙU[šXÛÙQ›ÛH™]È˜ZÙU[šXÛÙQ›Û
]˜[X]Ü‹ž™Y‹›Û˜[Z[JNÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH˜ZÙU[šXÛÙQ›Û˜Ü™X]Q›Û™\ÛÝ\˜Ù\Ê[™\Ëš›Ú[ŠˆŠJNÂˆÛÛœÝ™]Ñ›ÛH™\ÛÝ\˜Ù\Ë™Ù]˜]Ê‘›ÛŠNÂˆYˆ
\Ë—ÙšY[™\ÛÝ\˜Ù\Ë›Y\™ÙY™\ÛÝ\˜Ù\Ëš\Ê‘›ÛŠJHÂˆÛÛœÝÛ›ÛH\Ë—ÙšY[™\ÛÝ\˜Ù\Ë›Y\™ÙY™\ÛÝ\˜Ù\Ë™Ù]
‘›ÛŠNÂˆ›Üˆ
ÛÛœÝÙ^HÙˆ™]Ñ›Û™Ù]Ù^\Ê
JHÂˆÛ›ÛœÙ]
Ù^K™]Ñ›Û™Ù]˜]ÊÙ^JJNÂˆBˆH[ÙHÂˆ\Ë—ÙšY[™\ÛÝ\˜Ù\Ë›Y\™ÙY™\ÛÝ\˜Ù\ËœÙ]
‘›Û‹™]Ñ›Û
NÂˆBˆÛÛœÝ›Û˜[YHH˜ZÙU[šXÛÙQ›Û™›Û˜[YK›˜[YNÂˆ›ÛH]ØZ]ÚYÙ][››Ý][Û‹—ÙÙ]›Û]J]˜[X]Ü‹\ÚËÂˆ›Û˜[YKˆ›ÛÚ^™NˆˆK™\ÛÝ\˜Ù\ÊNÂˆ›Üˆ
]HHZHH[˜ÛÙY[™\Ë›[™ÝÈHZNÈJÊÊHÂˆ[˜ÛÙY[™\ÖÚWHHÝš[™ÕÕUŒM”Ýš[™Ê[™\ÖÚWJNÂˆBˆÛÛœÝØ]™YY˜][\X\˜[˜ÙHHØš™XÝ˜\ÜÚYÛŠØš™XÝ˜Ü™X]J[
K\Ë™]K™Y˜][\X\˜[˜ÙQ]JNÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]K™›ÛÚ^™HHÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]K™›Û˜[YHH›Û˜[YNÂˆÙY˜][\X\˜[˜ÙK›ÛÚ^™K[™RZYÚHH\Ë—ØÛÛ\]Q›ÛÚ^™JÝ[ZYÚHˆ
ˆY˜][Y[™ËÝ[ÚYHˆ
ˆY˜][Y[™Ë˜[YK›Û[™PÛÝ[
NÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]HHØ]™YY˜][\X\˜[˜ÙNÂˆH[ÙHÂˆYˆ
]\Ë—Ú\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY
HÂˆØ\›Š—ÙÙ]\X\˜[˜ÙNˆÙ™œØÜ™Y[Ø[˜\È\È›ÝÝ\ÜY[››Ý][ÛˆX^H›Ý™[™\ˆÛÜœ™XÝKˆŠNÂˆBˆÙY˜][\X\˜[˜ÙK›ÛÚ^™K[™RZYÚHH\Ë—ØÛÛ\]Q›ÛÚ^™JÝ[ZYÚHˆ
ˆY˜][Y[™ËÝ[ÚYHˆ
ˆY˜][Y[™Ë˜[YK›Û[™PÛÝ[
NÂˆBˆ]\ØÙ[H›Û™\ØÙ[ÂˆYˆ
\Ó˜SŠ\ØÙ[
JHÂˆ\ØÙ[HTÑSS‘WÑPÕÔˆ
ˆ[™RZYÚÂˆH[ÙHÂˆ\ØÙ[HX]›X^
TÑSS‘WÑPÕÔˆ
ˆ[™RZYÚX]˜XœÊ\ØÙ[
H
ˆ›ÛÚ^™JNÂˆBˆÛÛœÝY˜][”Y[™ÈHX]›Z[ŠX]™›ÛÜŠ
Ý[ZYÚH›ÛÚ^™JHÈŠKY˜][Y[™ÊNÂˆÛÛœÝ[YÛ›Y[H\Ë™]K^[YÛ›Y[ÂˆYˆ
\Ë™]K›][S[™JHÂˆ™]\›ˆ\Ë—ÙÙ]][[[™P\X\˜[˜ÙJY˜][\X\˜[˜ÙK[˜ÛÙY[™\Ë›Û›ÛÚ^™KÝ[ÚYÝ[ZYÚ[YÛ›Y[Y˜][Y[™ËY˜][”Y[™Ë\ØÙ[[™RZYÚ[››Ý][Û”ÝÜ˜YÙJNÂˆBˆYˆ
\Ë™]K˜ÛÛXŠHÂˆ™]\›ˆ\Ë—ÙÙ]ÛÛX\X\˜[˜ÙJY˜][\X\˜[˜ÙK›Û[˜ÛÙY[™\ÖÌK›ÛÚ^™KÝ[ÚYÝ[ZYÚY˜][Y[™ËY˜][”Y[™Ë\ØÙ[[™RZYÚ[››Ý][Û”ÝÜ˜YÙJNÂˆBˆÛÛœÝ›ÝÛTY[™ÈHY˜][”Y[™È
È\ØÙ[ÂˆYˆ
[YÛ›Y[OOH[YÛ›Y[ˆŠHÂˆ™]\›ˆÕ“PÈH	ØÛÛÜœßP•
ÈY˜][\X\˜[˜ÙH
ÈHH	Û[X™\•ÔÝš[™ÊY˜][Y[™Ê_H	Û[X™\•ÔÝš[™Ê›ÝÛTY[™Ê_HH
	Ù\ØØ\TÝš[™Ê[˜ÛÙY[™\ÖÌJ_JH˜
ÈˆUHSPÈŽÂˆBˆÛÛœÝ™]’[™›ÈHÂˆÚYˆˆNÂˆÛÛœÝ™[™\™Y^H\Ë—Ü™[™\•^
[˜ÛÙY[™\ÖÌK›Û›ÛÚ^™KÝ[ÚY[YÛ›Y[™]’[™›ËY˜][Y[™Ë›ÝÛTY[™ÊNÂˆ™]\›ˆÕ“PÈH	ØÛÛÜœßP•
ÈY˜][\X\˜[˜ÙH
ÈHHH	Ü™[™\™Y^X
ÈˆUHSPÈŽÂˆBˆÝ]XÈ\Þ[˜ÈÙÙ]›Û]J]˜[X]Ü‹\ÚË\X\˜[˜ÙQ]K™\ÛÝ\˜Ù\ÊHÂˆÛÛœÝÜ\˜]Ü“\ÝH™]ÈÜ\˜]Ü“\Ý

NÂˆÛÛœÝ[š]X[Ý]HHÂˆ›Ûˆ[ˆÛÛ™J
HÂˆ™]\›ˆ\ÎÂˆBˆNÂˆÛÛœÝÂˆ›Û˜[YKˆ›ÛÚ^™BˆHH\X\˜[˜ÙQ]NÂˆ]ØZ]]˜[X]Ü‹š[™TÙ]›Û
™\ÛÝ\˜Ù\ËÙ›Û˜[YH	‰ˆ˜[YK™Ù]
›Û˜[YJK›ÛÚ^™WK[Ü\˜]Ü“\Ý\ÚË[š]X[Ý]K[
NÂˆ™]\›ˆ[š]X[Ý]K™›ÛÂˆBˆÙÙ]^ÚY
^›Û
HÂˆ™]\›ˆX]œÝ[T™XÚ\ÙJ›Û˜Ú\œÕÑÛ\Ê^
K›X\
ÈOˆËÚY
JHÈLÂˆBˆØÛÛ\]Q›ÛÚ^™JZYÚÚY^›Û[™PÛÝ[
HÂˆ]Âˆ›ÛÚ^™BˆHH\Ë™]K™Y˜][\X\˜[˜ÙQ]NÂˆ][™RZYÚH
›ÛÚ^™HLŠH
ˆS‘WÑPÕÔ‹ˆ[X™\“Ù“[™\ÈHX]œ›Ý[™
ZYÚÈ[™RZYÚ
NÂˆYˆ
Y›ÛÚ^™JHÂˆÛÛœÝ›Ý[™Ú]ÛÑYÚ]ÈHOˆX]™›ÛÜŠ
ˆL
HÈLÂˆYˆ
[™PÛÝ[OOHLJHÂˆÛÛœÝ^ÚYH\Ë—ÙÙ]^ÚY
^›Û
NÂˆ›ÛÚ^™HH›Ý[™Ú]ÛÑYÚ]ÊX]›Z[ŠZYÚÈS‘WÑPÕÔ‹ÚYÈ^ÚY
JNÂˆ[X™\“Ù“[™\ÈHNÂˆH[ÙHÂˆÛÛœÝ[™\ÈH^œÜ]
×—ß‹ÊNÂˆÛÛœÝØXÚY[™\ÈH×NÂˆ›Üˆ
ÛÛœÝ[™HÙˆ[™\ÊHÂˆÛÛœÝ[˜ÛÙYH›Û™[˜ÛÙTÝš[™Ê[™JKš›Ú[ŠˆŠNÂˆÛÛœÝÛ\ÈH›Û˜Ú\œÕÑÛ\Ê[˜ÛÙY
NÂˆÛÛœÝÜÚ][ÛœÈH›Û™Ù]Ú\”ÜÚ][ÛœÊ[˜ÛÙY
NÂˆØXÚY[™\Ëœ\Ú
Âˆ[™Nˆ[˜ÛÙYˆÛ\ËˆÜÚ][ÛœÂˆJNÂˆBˆÛÛœÝ\ÕÛÐšYÈHœÚ^™HOˆÂˆ]Ý[ZYÚHÂˆ›Üˆ
ÛÛœÝØXÚHÙˆØXÚY[™\ÊHÂˆÛÛœÝÚ[šÜÈH\Ë—ÜÜ][™J[›ÛœÚ^™KÚYØXÚJNÂˆÝ[ZYÚ
ÏHÚ[šÜË›[™Ý
ˆœÚ^™NÂˆYˆ
Ý[ZYÚˆZYÚ
HÂˆ™]\›ˆYNÂˆBˆBˆ™]\›ˆ˜[ÙNÂˆNÂˆ[X™\“Ù“[™\ÈHX]›X^
[X™\“Ù“[™\Ë[™PÛÝ[
NÂˆÚ[H
YJHÂˆ[™RZYÚHZYÚÈ[X™\“Ù“[™\ÎÂˆ›ÛÚ^™HH›Ý[™Ú]ÛÑYÚ]Ê[™RZYÚÈS‘WÑPÕÔŠNÂˆYˆ
\ÕÛÐšYÊ›ÛÚ^™JJHÂˆ[X™\“Ù“[™\ÊÊÎÂˆÛÛ[YNÂˆBˆœ™XZÎÂˆBˆBˆÛÛœÝÂˆ›Û˜[YKˆ›ÛÛÛÜ‚ˆHH\Ë™]K™Y˜][\X\˜[˜ÙQ]NÂˆ\Ë—ÙY˜][\X\˜[˜ÙHHÜ™X]QY˜][\X\˜[˜ÙJÂˆ›ÛÚ^™Kˆ›Û˜[YKˆ›ÛÛÛÜ‚ˆJNÂˆBˆ™]\›ˆÝ\Ë—ÙY˜][\X\˜[˜ÙK›ÛÚ^™KZYÚÈ[X™\“Ù“[™\×NÂˆBˆÜ™[™\•^
^›Û›ÛÚ^™KÝ[ÚY[YÛ›Y[™]’[™›ËY[™Ë”Y[™ÊHÂˆ]ÚYÂˆYˆ
[YÛ›Y[OOHJHÂˆÛÛœÝÚYH\Ë—ÙÙ]^ÚY
^›Û
H
ˆ›ÛÚ^™NÂˆÚYH
Ý[ÚYHÚY
HÈŽÂˆH[ÙHYˆ
[YÛ›Y[OOHŠHÂˆÛÛœÝÚYH\Ë—ÙÙ]^ÚY
^›Û
H
ˆ›ÛÚ^™NÂˆÚYHÝ[ÚYHÚYHY[™ÎÂˆH[ÙHÂˆÚYHY[™ÎÂˆBˆÛÛœÝÚYÝˆH[X™\•ÔÝš[™ÊÚYH™]’[™›ËœÚY
NÂˆ™]’[™›ËœÚYHÚYÂˆ”Y[™ÈH[X™\•ÔÝš[™Ê”Y[™ÊNÂˆ™]\›ˆ	ÜÚYÝŸH	Ý”Y[™ßH
	Ù\ØØ\TÝš[™Ê^
_JH˜ÂˆBˆÙÙ]Ø]™QšY[™\ÛÝ\˜Ù\Ê™YŠHÂˆÛÛœÝÂˆØØ[™\ÛÝ\˜Ù\Ëˆ\X\˜[˜ÙT™\ÛÝ\˜Ù\ËˆXÜ›Ñ›Ü›T™\ÛÝ\˜Ù\ÂˆHH\Ë—ÙšY[™\ÛÝ\˜Ù\ÎÂˆÛÛœÝ›Û˜[YHH\Ë™]K™Y˜][\X\˜[˜ÙQ]OË™›Û˜[YNÂˆYˆ
Y›Û˜[YJHÂˆ™]\›ˆØØ[™\ÛÝ\˜Ù\ÈXÝ™[\NÂˆBˆ›Üˆ
ÛÛœÝ™\ÛÝ\˜Ù\ÈÙˆÛØØ[™\ÛÝ\˜Ù\Ë\X\˜[˜ÙT™\ÛÝ\˜Ù\×JHÂˆYˆ
™\ÛÝ\˜Ù\È[œÝ[˜Ù[ÙˆXÝ
HÂˆÛÛœÝØØ[›ÛH™\ÛÝ\˜Ù\Ë™Ù]
‘›ÛŠNÂˆYˆ
ØØ[›Û[œÝ[˜Ù[ÙˆXÝ	‰ˆØØ[›Ûš\Ê›Û˜[YJJHÂˆ™]\›ˆ™\ÛÝ\˜Ù\ÎÂˆBˆBˆBˆYˆ
XÜ›Ñ›Ü›T™\ÛÝ\˜Ù\È[œÝ[˜Ù[ÙˆXÝ
HÂˆÛÛœÝXÜ›Ñ›Ü›Q›ÛHXÜ›Ñ›Ü›T™\ÛÝ\˜Ù\Ë™Ù]
‘›ÛŠNÂˆYˆ
XÜ›Ñ›Ü›Q›Û[œÝ[˜Ù[ÙˆXÝ	‰ˆXÜ›Ñ›Ü›Q›Ûš\Ê›Û˜[YJJHÂˆÛÛœÝÝX‘›ÛXÝH™]ÈXÝ
™YŠNÂˆÝX‘›ÛXÝœÙ]
›Û˜[YKXÜ›Ñ›Ü›Q›Û™Ù]˜]Ê›Û˜[YJJNÂˆÛÛœÝÝX”™\ÛÝ\˜Ù\ÑXÝH™]ÈXÝ
™YŠNÂˆÝX”™\ÛÝ\˜Ù\ÑXÝœÙ]
‘›Û‹ÝX‘›ÛXÝ
NÂˆ™]\›ˆXÝ›Y\™ÙJÂˆ™Y‹ˆXÝ\œ˜^NˆÜÝX”™\ÛÝ\˜Ù\ÑXÝØØ[™\ÛÝ\˜Ù\×KˆY\™ÙTÝX‘XÝÎˆYBˆJNÂˆBˆBˆ™]\›ˆØØ[™\ÛÝ\˜Ù\ÈXÝ™[\NÂˆBˆÙ]šY[Øš™XÝ

HÂˆ™]\›ˆ[ÂˆBŸB˜Û\ÜÈ^ÚYÙ][››Ý][Ûˆ^[™ÈÚYÙ][››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆHH\˜[\ÎÂˆYˆ
XÝš\Ê”QŠJHÂˆ\Ë™›YÜÈH[››Ý][Û‘›YË’QSŽÂˆ\Ë™]KšY[ˆHYNÂˆØ\›Š˜\˜ÛÙ\È\™H›ÝÝ\ÜYŠNÂˆBˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]Kœ™XYÛ›H	‰ˆ]\Ë™]K››ÒSÂˆ\Ë—Ú\Õ^HYNÂˆYˆ
\[Ùˆ\Ë™]K™šY[˜[YHOOHœÝš[™ÈŠHÂˆ\Ë™]K™šY[˜[YHHˆŽÂˆBˆ][YÛ›Y[HÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ”H‚ˆJNÂˆYˆ
S[X™\‹š\Ò[YÙ\Š[YÛ›Y[
H[YÛ›Y[[YÛ›Y[ˆŠHÂˆ[YÛ›Y[H[ÂˆBˆ\Ë™]K^[YÛ›Y[H[YÛ›Y[Âˆ]X^[][S[™ÝHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ“X^[ˆ‚ˆJNÂˆYˆ
S[X™\‹š\Ò[YÙ\ŠX^[][S[™Ý
HX^[][S[™Ý
HÂˆX^[][S[™ÝHÂˆBˆ\Ë™]K›X^[ˆHX^[][S[™ÝÂˆ\Ë™]K›][S[™HH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË“USSS‘JNÂˆ\Ë™]K˜ÛÛXˆH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YËÓÓPŠH	‰ˆ]\Ë™]K›][S[™H	‰ˆ]\Ë™]Kœ\ÜÝÛÜ™	‰ˆ]\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË‘’STÑSPÕ
H	‰ˆ\Ë™]K›X^[ˆOOHÂˆ\Ë™]K™Ó›ÝØÜ›ÛH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË‘Ó“ÕÐÔ“Ó
NÂˆÛÛœÝÂˆ]NˆÂˆXÝ[ÛœÂˆBˆHH\ÎÂˆYˆ
XXÝ[ÛœÊHÂˆ™]\›ŽÂˆBˆÛÛœÝQ‘]U[YHH×QŠ]_[YJWÊÎ’Ù^\Ý›ÚÙ_›Ü›X]
JÎ‘^
O×
ÉÈ—OÊ×‰È—JÊVÉÈ—O×
NÉÎÂˆ]Ø[•\ÙRS]U[YHH˜[ÙNÂˆYˆ
XÝ[ÛœË‘›Ü›X]Ë›[™ÝOOHH	‰ˆXÝ[ÛœË’Ù^\Ý›ÚÙOË›[™ÝOOHH	‰ˆQ‘]U[YK\Ý
XÝ[ÛœË‘›Ü›X]ÌJH	‰ˆQ‘]U[YK\Ý
XÝ[ÛœË’Ù^\Ý›ÚÙVÌJHXÝ[ÛœË‘›Ü›X]Ë›[™ÝOOH	‰ˆXÝ[ÛœË’Ù^\Ý›ÚÙOË›[™ÝOOHH	‰ˆQ‘]U[YK\Ý
XÝ[ÛœË’Ù^\Ý›ÚÙVÌJHXÝ[ÛœË’Ù^\Ý›ÚÙOË›[™ÝOOH	‰ˆXÝ[ÛœË‘›Ü›X]Ë›[™ÝOOHH	‰ˆQ‘]U[YK\Ý
XÝ[ÛœË‘›Ü›X]ÌJJHÂˆØ[•\ÙRS]U[YHHYNÂˆBˆÛÛœÝXÝ[ÛœÕÕš\Ú]H×NÂˆYˆ
XÝ[ÛœË‘›Ü›X]
HÂˆXÝ[ÛœÕÕš\Ú]œ\Ú
‹‹˜XÝ[ÛœË‘›Ü›X]
NÂˆBˆYˆ
XÝ[ÛœË’Ù^\Ý›ÚÙJHÂˆXÝ[ÛœÕÕš\Ú]œ\Ú
‹‹˜XÝ[ÛœË’Ù^\Ý›ÚÙJNÂˆBˆYˆ
Ø[•\ÙRS]U[YJHÂˆ[]HXÝ[ÛœË’Ù^\Ý›ÚÙNÂˆXÝ[ÛœË‘›Ü›X]HXÝ[ÛœÕÕš\Ú]ÂˆBˆ›Üˆ
ÛÛœÝ›Ü›X]XÝ[ÛˆÙˆXÝ[ÛœÕÕš\Ú]
HÂˆÛÛœÝHH›Ü›X]XÝ[Û‹›X]Ú
Q‘]U[YJNÂˆYˆ
[JHÂˆÛÛ[YNÂˆBˆÛÛœÝ\Ñ]HHVÌWHOOH‘]HŽÂˆ]›Ü›X]HVÌ—NÂˆÛÛœÝ[HH\œÙR[
›Ü›X]L
NÂˆYˆ
Z\Ó˜SŠ[JH	‰ˆX]™›ÛÜŠX]›ÙÌL
[JJH
ÈHOOHVÌ—K›[™Ý
HÂˆ›Ü›X]H
\Ñ]HÈ]Q›Ü›X]Èˆ[YQ›Ü›X]ÊVÛ[WHÏÈ›Ü›X]ÂˆBˆ\Ë™]K™]][YQ›Ü›X]H›Ü›X]ÂˆYˆ
XØ[•\ÙRS]U[YJHÂˆœ™XZÎÂˆBˆYˆ
\Ñ]JHÂˆYˆ
ÒS_ÜßË\Ý
›Ü›X]
JHÂˆ\Ë™]K™]][YU\HH™]][YK[ØØ[ŽÂˆ\Ë™]K[YTÝ\HÜÜËË\Ý
›Ü›X]
HÈHˆŒÂˆH[ÙHÂˆ\Ë™]K™]][YU\HH™]HŽÂˆBˆœ™XZÎÂˆBˆ\Ë™]K™]][YU\HH[YHŽÂˆ\Ë™]K[YTÝ\HÜÜËË\Ý
›Ü›X]
HÈHˆŒÂˆœ™XZÎÂˆBˆBˆÙ]\Õ^ÛÛ[

HÂˆ™]\›ˆH]\Ë˜\X\˜[˜ÙH	‰ˆ]\Ë—Û™YY\X\˜[˜Ù\ÎÂˆBˆÙÙ]ÛÛX\X\˜[˜ÙJY˜][\X\˜[˜ÙK›Û^›ÛÚ^™KÚYZYÚY[™Ë”Y[™Ë\ØÙ[[™RZYÚ[››Ý][Û”ÝÜ˜YÙJHÂˆÛÛœÝÛÛX•ÚYHÚYÈ\Ë™]K›X^[ŽÂˆÛÛœÝÛÛÜœÈH\Ë™Ù]›Ü™\[™˜XÚÙÜ›Ý[™\X\˜[˜Ù\Ê[››Ý][Û”ÝÜ˜YÙJNÂˆÛÛœÝYˆH×NÂˆÛÛœÝÜÚ][ÛœÈH›Û™Ù]Ú\”ÜÚ][ÛœÊ^
NÂˆ›Üˆ
ÛÛœÝÜÝ\[™HÙˆÜÚ][ÛœÊHÂˆY‹œ\Ú

	Ù\ØØ\TÝš[™Ê^œÝXœÝš[™ÊÝ\[™
J_JH˜
NÂˆBˆÛÛœÝ™[™\™YÛÛXˆHY‹š›Ú[Š	Û[X™\•ÔÝš[™ÊÛÛX•ÚY
_H
NÂˆ™]\›ˆÕ“PÈH	ØÛÛÜœßP•
ÈY˜][\X\˜[˜ÙH
ÈHH	Û[X™\•ÔÝš[™ÊY[™Ê_H	Û[X™\•ÔÝš[™Ê”Y[™È
È\ØÙ[
_HH	Ü™[™\™YÛÛXŸX
ÈˆUHSPÈŽÂˆBˆÙÙ]][[[™P\X\˜[˜ÙJY˜][\X\˜[˜ÙK[™\Ë›Û›ÛÚ^™KÚYZYÚ[YÛ›Y[Y[™Ë”Y[™Ë\ØÙ[[™RZYÚ[››Ý][Û”ÝÜ˜YÙJHÂˆÛÛœÝYˆH×NÂˆÛÛœÝÝ[ÚYHÚYHˆ
ˆY[™ÎÂˆÛÛœÝ™]’[™›ÈHÂˆÚYˆˆNÂˆ›Üˆ
]HHZHH[™\Ë›[™ÝÈHZNÈJÊÊHÂˆÛÛœÝ[™HH[™\ÖÚWNÂˆÛÛœÝÚ[šÜÈH\Ë—ÜÜ][™J[™K›Û›ÛÚ^™KÝ[ÚY
NÂˆ›Üˆ
]ˆHšˆHÚ[šÜË›[™ÝÈˆšŽÈŠÊÊHÂˆÛÛœÝÚ[šÈHÚ[šÜÖÚ—NÂˆÛÛœÝ”ÚYHHOOH	‰ˆˆOOHÈ]”Y[™ÈH
[™RZYÚH\ØÙ[
Hˆ[[™RZYÚÂˆY‹œ\Ú
\Ë—Ü™[™\•^
Ú[šË›Û›ÛÚ^™KÚY[YÛ›Y[™]’[™›ËY[™Ë”ÚY
JNÂˆBˆBˆÛÛœÝÛÛÜœÈH\Ë™Ù]›Ü™\[™˜XÚÙÜ›Ý[™\X\˜[˜Ù\Ê[››Ý][Û”ÝÜ˜YÙJNÂˆÛÛœÝ™[™\™Y^HY‹š›Ú[Š—ˆŠNÂˆ™]\›ˆÕ“PÈH	ØÛÛÜœßP•
ÈY˜][\X\˜[˜ÙH
ÈHH	Û[X™\•ÔÝš[™ÊZYÚ
_HH	Ü™[™\™Y^X
ÈˆUHSPÈŽÂˆBˆÜÜ][™J[™K›Û›ÛÚ^™KÚYØXÚHHßJHÂˆ[™HHØXÚK›[™H[™NÂˆÛÛœÝÛ\ÈHØXÚK™Û\È›Û˜Ú\œÕÑÛ\Ê[™JNÂˆYˆ
Û\Ë›[™ÝHJHÂˆ™]\›ˆÛ[™WNÂˆBˆÛÛœÝÜÚ][ÛœÈHØXÚKœÜÚ][ÛœÈ›Û™Ù]Ú\”ÜÚ][ÛœÊ[™JNÂˆÛÛœÝØØ[HH›ÛÚ^™HÈLÂˆÛÛœÝÚ[šÜÈH×NÂˆ]\ÝÜXÙTÜÒ[”Ýš[™ÔÝ\HLKˆ\ÝÜXÙTÜÒ[”Ýš[™Ñ[™HLKˆ\ÝÜXÙTÜÈHLKˆÝ\Ú[šÈHˆÝ\œ™[ÚYHÂˆ›Üˆ
]HHZHHÛ\Ë›[™ÝÈHZNÈJÊÊHÂˆÛÛœÝÜÝ\[™HHÜÚ][ÛœÖÚWNÂˆÛÛœÝÛ\HÛ\ÖÚWNÂˆÛÛœÝÛ\ÚYHÛ\ÚY
ˆØØ[NÂˆYˆ
Û\[šXÛÙHOOHˆŠHÂˆYˆ
Ý\œ™[ÚY
ÈÛ\ÚYˆÚY
HÂˆÚ[šÜËœ\Ú
[™KœÝXœÝš[™ÊÝ\Ú[šËÝ\
JNÂˆÝ\Ú[šÈHÝ\ÂˆÝ\œ™[ÚYHÛ\ÚYÂˆ\ÝÜXÙTÜÒ[”Ýš[™ÔÝ\HLNÂˆ\ÝÜXÙTÜÈHLNÂˆH[ÙHÂˆÝ\œ™[ÚY
ÏHÛ\ÚYÂˆ\ÝÜXÙTÜÒ[”Ýš[™ÔÝ\HÝ\Âˆ\ÝÜXÙTÜÒ[”Ýš[™Ñ[™H[™Âˆ\ÝÜXÙTÜÈHNÂˆBˆH[ÙHYˆ
Ý\œ™[ÚY
ÈÛ\ÚYˆÚY
HÂˆYˆ
\ÝÜXÙTÜÒ[”Ýš[™ÔÝ\OOHLJHÂˆÚ[šÜËœ\Ú
[™KœÝXœÝš[™ÊÝ\Ú[šË\ÝÜXÙTÜÒ[”Ýš[™Ñ[™
JNÂˆÝ\Ú[šÈH\ÝÜXÙTÜÒ[”Ýš[™Ñ[™ÂˆHH\ÝÜXÙTÜÈ
ÈNÂˆ\ÝÜXÙTÜÒ[”Ýš[™ÔÝ\HLNÂˆÝ\œ™[ÚYHÂˆH[ÙHÂˆÚ[šÜËœ\Ú
[™KœÝXœÝš[™ÊÝ\Ú[šËÝ\
JNÂˆÝ\Ú[šÈHÝ\ÂˆÝ\œ™[ÚYHÛ\ÚYÂˆBˆH[ÙHÂˆÝ\œ™[ÚY
ÏHÛ\ÚYÂˆBˆBˆYˆ
Ý\Ú[šÈ[™K›[™Ý
HÂˆÚ[šÜËœ\Ú
[™KœÝXœÝš[™ÊÝ\Ú[šË[™K›[™Ý
JNÂˆBˆ™]\›ˆÚ[šÜÎÂˆBˆ\Þ[˜È^˜XÝ^ÛÛ[
]˜[X]Ü‹\ÚËšY]Ð›Þ
HÂˆ]ØZ]Ý\\‹™^˜XÝ^ÛÛ[
]˜[X]Ü‹\ÚËšY]Ð›Þ
NÂˆÛÛœÝ^H\Ë™]K^ÛÛ[ÂˆYˆ
]^
HÂˆ™]\›ŽÂˆBˆÛÛœÝ[^H^š›Ú[Š—ˆŠNÂˆYˆ
[^OOH\Ë™]K™šY[˜[YJHÂˆ™]\›ŽÂˆBˆÛÛœÝ™YÙ^H[^œ™\XÙP[
ÊËŠŠÏ×‰ßJ
_×WJ_
ÊÊKÙË
ÛKJHOˆHÈ	Ü_Xˆ—ÊÈŠNÂˆYˆ
™]È™YÑ^
—Ê‰Ü™YÙ^WÊ‰
K\Ý
\Ë™]K™šY[˜[YJJHÂˆ\Ë™]K^ÛÛ[H\Ë™]K™šY[˜[YKœÜ]
—ˆŠNÂˆBˆBˆÙ]šY[Øš™XÝ

HÂˆ™]\›ˆÂˆYˆ\Ë™]KšYˆ˜[YNˆ\Ë™]K™šY[˜[YKˆY˜][˜[YNˆ\Ë™]K™Y˜][šY[˜[YHˆ‹ˆ][[[™Nˆ\Ë™]K›][S[™Kˆ\ÜÝÛÜ™ˆ\Ë™]Kœ\ÜÝÛÜ™ˆÚ\“[Z]ˆ\Ë™]K›X^[‹ˆÛÛXŽˆ\Ë™]K˜ÛÛX‹ˆY]X›Nˆ]\Ë™]Kœ™XYÛ›KˆY[Žˆ\Ë™]KšY[‹ˆ˜[YNˆ\Ë™]K™šY[˜[YKˆ™XÝˆ\Ë™]Kœ™XÝˆXÝ[ÛœÎˆ\Ë™]K˜XÝ[ÛœËˆYÙNˆ\Ë™]KœYÙR[™^ˆÝ›ÚÙPÛÛÜŽˆ\Ë™]K˜›Ü™\ÛÛÜ‹ˆš[ÛÛÜŽˆ\Ë™]K˜˜XÚÙÜ›Ý[™ÛÛÜ‹ˆ›Ý][ÛŽˆ\Ëœ›Ý][Û‹ˆ]][YQ›Ü›X]ˆ\Ë™]K™]][YQ›Ü›X]ˆ\Ñ]][YRSˆH]\Ë™]K™]][YU\Kˆ\Nˆ^‚ˆNÂˆBŸB˜Û\ÜÈ]Û•ÚYÙ][››Ý][Ûˆ^[™ÈÚYÙ][››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆ\Ë˜ÚXÚÙY\X\˜[˜ÙHH[Âˆ\Ë[˜ÚXÚÙY\X\˜[˜ÙHH[ÂˆÛÛœÝ\Ô˜Y[ÈH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË”QSÊKˆ\Ô\Ú]ÛˆH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË”TÒ•UÓŠNÂˆ\Ë™]K˜ÚXÚÐ›ÞHZ\Ô˜Y[È	‰ˆZ\Ô\Ú]ÛŽÂˆ\Ë™]Kœ˜Y[Ð]ÛˆH\Ô˜Y[È	‰ˆZ\Ô\Ú]ÛŽÂˆ\Ë™]Kœ\Ú]ÛˆH\Ô\Ú]ÛŽÂˆ\Ë™]Kš\ÕÛÛ\Û›HH˜[ÙNÂˆYˆ
\Ë™]K˜ÚXÚÐ›Þ
HÂˆ\Ë—Ü›ØÙ\ÜÐÚXÚÐ›Þ
\˜[\ÊNÂˆH[ÙHYˆ
\Ë™]Kœ˜Y[Ð]ÛŠHÂˆ\Ë—Ü›ØÙ\ÜÔ˜Y[Ð]ÛŠ\˜[\ÊNÂˆH[ÙHYˆ
\Ë™]Kœ\Ú]ÛŠHÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈHYNÂˆ\Ë™]K››ÒSH˜[ÙNÂˆ\Ë—Ü›ØÙ\ÜÔ\Ú]ÛŠ\˜[\ÊNÂˆH[ÙHÂˆØ\›Š’[˜[YšY[›YÜÈ›Üˆ]ÛˆÚYÙ][››Ý][ÛˆŠNÂˆBˆBˆ\Þ[˜ÈÙ]Ü\˜]Ü“\Ý
]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJHÂˆYˆ
\Ë™]Kœ\Ú]ÛŠHÂˆ™]\›ˆÝ\\‹™Ù]Ü\˜]Ü“\Ý
]˜[X]Ü‹\ÚË[[˜[ÙK[››Ý][Û”ÝÜ˜YÙJNÂˆBˆ]˜[YHH[Âˆ]›Ý][ÛˆH[ÂˆYˆ
[››Ý][Û”ÝÜ˜YÙJHÂˆÛÛœÝÝÜ˜YÙQ[žHH[››Ý][Û”ÝÜ˜YÙK™Ù]
\Ë™]KšY
NÂˆ˜[YHHÝÜ˜YÙQ[žHÈÝÜ˜YÙQ[žK˜[YHˆ[Âˆ›Ý][ÛˆHÝÜ˜YÙQ[žHÈÝÜ˜YÙQ[žKœ›Ý][Ûˆˆ[ÂˆBˆYˆ
˜[YHOOH[	‰ˆ\Ë˜\X\˜[˜ÙJHÂˆ™]\›ˆÝ\\‹™Ù]Ü\˜]Ü“\Ý
]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJNÂˆBˆYˆ
˜[YHOOH[˜[YHOOH[™Yš[™Y
HÂˆ˜[YHH\Ë™]K˜ÚXÚÐ›ÞÈ\Ë™]K™šY[˜[YHOOH\Ë™]K™^Ü˜[YHˆ\Ë™]K™šY[˜[YHOOH\Ë™]K˜]Û•˜[YNÂˆBˆÛÛœÝ\X\˜[˜ÙHH˜[YHÈ\Ë˜ÚXÚÙY\X\˜[˜ÙHˆ\Ë[˜ÚXÚÙY\X\˜[˜ÙNÂˆYˆ
\X\˜[˜ÙJHÂˆÛÛœÝØ]™Y\X\˜[˜ÙHH\Ë˜\X\˜[˜ÙNÂˆÛÛœÝØ]™YX]š^HÛÚÝ\X]š^
\X\˜[˜ÙK™XÝ™Ù]\œ˜^J“X]š^ŠKQS•UWÓPU’V
NÂˆYˆ
›Ý][ÛŠHÂˆ\X\˜[˜ÙK™XÝœÙ]
“X]š^‹\Ë™Ù]›Ý][Û“X]š^
[››Ý][Û”ÝÜ˜YÙJJNÂˆBˆ\Ë˜\X\˜[˜ÙHH\X\˜[˜ÙNÂˆÛÛœÝÜ\˜]Ü“\ÝHÝ\\‹™Ù]Ü\˜]Ü“\Ý
]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJNÂˆ\Ë˜\X\˜[˜ÙHHØ]™Y\X\˜[˜ÙNÂˆ\X\˜[˜ÙK™XÝœÙ]
“X]š^‹Ø]™YX]š^
NÂˆ™]\›ˆÜ\˜]Ü“\ÝÂˆBˆ™]\›ˆÂˆÜ\Ýˆ™]ÈÜ\˜]Ü“\Ý

KˆÙ\\˜]Q›Ü›Nˆ˜[ÙKˆÙ\\˜]PØ[˜\Îˆ˜[ÙBˆNÂˆBˆ\Þ[˜ÈØ]™J]˜[X]Ü‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊHÂˆYˆ
\Ë™]K˜ÚXÚÐ›Þ
HÂˆ\Ë—ÜØ]™PÚXÚØ›Þ
]˜[X]Ü‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊNÂˆ™]\›ŽÂˆBˆYˆ
\Ë™]Kœ˜Y[Ð]ÛŠHÂˆ\Ë—ÜØ]™T˜Y[Ð]ÛŠ]˜[X]Ü‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊNÂˆBˆBˆ\Þ[˜ÈÜØ]™PÚXÚØ›Þ
]˜[X]Ü‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊHÂˆYˆ
X[››Ý][Û”ÝÜ˜YÙJHÂˆ™]\›ŽÂˆBˆÛÛœÝÝÜ˜YÙQ[žHH[››Ý][Û”ÝÜ˜YÙK™Ù]
\Ë™]KšY
NÂˆÛÛœÝ›YÜÈH\Ë—ØZ[›YÜÊÝÜ˜YÙQ[žOË››ÕšY]ËÝÜ˜YÙQ[žOË››Ôš[
NÂˆ]›Ý][ÛˆHÝÜ˜YÙQ[žOËœ›Ý][Û‹ˆ˜[YHHÝÜ˜YÙQ[žOË˜[YNÂˆYˆ
›Ý][ÛˆOOH[™Yš[™Y	‰ˆ›YÜÈOOH[™Yš[™Y
HÂˆYˆ
˜[YHOOH[™Yš[™Y
HÂˆ™]\›ŽÂˆBˆÛÛœÝY˜][˜[YHH\Ë™]K™šY[˜[YHOOH\Ë™]K™^Ü˜[YNÂˆYˆ
Y˜][˜[YHOOH˜[YJHÂˆ™]\›ŽÂˆBˆBˆ]XÝH]˜[X]Ü‹ž™Y‹™™]ÚY”™YŠ\Ëœ™YŠNÂˆYˆ
JXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆXÝHXÝ˜ÛÛ™J
NÂˆYˆ
›Ý][ÛˆOOH[™Yš[™Y
HÂˆ›Ý][ÛˆH\Ëœ›Ý][ÛŽÂˆBˆYˆ
˜[YHOOH[™Yš[™Y
HÂˆ˜[YHH\Ë™]K™šY[˜[YHOOH\Ë™]K™^Ü˜[YNÂˆBˆÛÛœÝ˜HHÂˆ]ˆ\Ë™]K™šY[˜[YKˆ˜[YNˆ˜[YHÈ\Ë™]K™^Ü˜[YHˆˆ‚ˆNÂˆÛÛœÝ˜[YHH˜[YK™Ù]
˜[YHÈ\Ë™]K™^Ü˜[YHˆ“Ù™ˆŠNÂˆ\ËœÙ]˜[YJXÝ˜[YK]˜[X]Ü‹ž™Y‹Ú[™Ù\ÊNÂˆXÝœÙ]
TÈ‹˜[YJNÂˆXÝœÙ]
“H‹‰ÙÙ][ÙYšXØ][Û‘]J
_X
NÂˆYˆ
›YÜÈOOH[™Yš[™Y
HÂˆXÝœÙ]
‘ˆ‹›YÜÊNÂˆBˆÛÛœÝX^X™SRÈH\Ë—ÙÙ]RÑXÝ
›Ý][ÛŠNÂˆYˆ
X^X™SRÊHÂˆXÝœÙ]
“RÈ‹X^X™SRÊNÂˆBˆÚ[™Ù\Ëœ]
\Ëœ™Y‹Âˆ]NˆXÝˆ˜Kˆ™YY\X\˜[˜Ù\Îˆ˜[ÙBˆJNÂˆBˆ\Þ[˜ÈÜØ]™T˜Y[Ð]ÛŠ]˜[X]Ü‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊHÂˆYˆ
X[››Ý][Û”ÝÜ˜YÙJHÂˆ™]\›ŽÂˆBˆÛÛœÝÝÜ˜YÙQ[žHH[››Ý][Û”ÝÜ˜YÙK™Ù]
\Ë™]KšY
NÂˆÛÛœÝ›YÜÈH\Ë—ØZ[›YÜÊÝÜ˜YÙQ[žOË››ÕšY]ËÝÜ˜YÙQ[žOË››Ôš[
NÂˆ]›Ý][ÛˆHÝÜ˜YÙQ[žOËœ›Ý][Û‹ˆ˜[YHHÝÜ˜YÙQ[žOË˜[YNÂˆYˆ
›Ý][ÛˆOOH[™Yš[™Y	‰ˆ›YÜÈOOH[™Yš[™Y
HÂˆYˆ
˜[YHOOH[™Yš[™Y
HÂˆ™]\›ŽÂˆBˆÛÛœÝY˜][˜[YHH\Ë™]K™šY[˜[YHOOH\Ë™]K˜]Û•˜[YNÂˆYˆ
Y˜][˜[YHOOH˜[YJHÂˆ™]\›ŽÂˆBˆBˆ]XÝH]˜[X]Ü‹ž™Y‹™™]ÚY”™YŠ\Ëœ™YŠNÂˆYˆ
JXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆXÝHXÝ˜ÛÛ™J
NÂˆYˆ
˜[YHOOH[™Yš[™Y
HÂˆ˜[YHH\Ë™]K™šY[˜[YHOOH\Ë™]K˜]Û•˜[YNÂˆBˆYˆ
›Ý][ÛˆOOH[™Yš[™Y
HÂˆ›Ý][ÛˆH\Ëœ›Ý][ÛŽÂˆBˆÛÛœÝ˜HHÂˆ]ˆ\Ë™]K™šY[˜[YKˆ˜[YNˆ˜[YHÈ\Ë™]K˜]Û•˜[YHˆˆ‚ˆNÂˆÛÛœÝ˜[YHH˜[YK™Ù]
˜[YHÈ\Ë™]K˜]Û•˜[YHˆ“Ù™ˆŠNÂˆYˆ
˜[YJHÂˆ\ËœÙ]˜[YJXÝ˜[YK]˜[X]Ü‹ž™Y‹Ú[™Ù\ÊNÂˆBˆXÝœÙ]
TÈ‹˜[YJNÂˆXÝœÙ]
“H‹‰ÙÙ][ÙYšXØ][Û‘]J
_X
NÂˆYˆ
›YÜÈOOH[™Yš[™Y
HÂˆXÝœÙ]
‘ˆ‹›YÜÊNÂˆBˆÛÛœÝX^X™SRÈH\Ë—ÙÙ]RÑXÝ
›Ý][ÛŠNÂˆYˆ
X^X™SRÊHÂˆXÝœÙ]
“RÈ‹X^X™SRÊNÂˆBˆÚ[™Ù\Ëœ]
\Ëœ™Y‹Âˆ]NˆXÝˆ˜Kˆ™YY\X\˜[˜Ù\Îˆ˜[ÙBˆJNÂˆBˆÙÙ]Y˜][ÚXÚÙY\X\˜[˜ÙJ\˜[\Ë\JHÂˆÛÛœÝÂˆÚYˆZYÚˆHH\ÎÂˆÛÛœÝ˜›ÞHÌÚYZYÚNÂˆÛÛœÝ“Ó•ÔUSÈHŽÂˆÛÛœÝ›ÛÚ^™HHX]›Z[ŠÚYZYÚ
H
ˆ“Ó•ÔUSÎÂˆ]Y]šXÜËÚ\ŽÂˆYˆ
\HOOH˜ÚXÚÈŠHÂˆY]šXÜÈHÂˆÚYˆÍMH
ˆ›ÛÚ^™KˆZYÚˆÌH
ˆ›ÛÚ^™BˆNÂˆÚ\ˆH—ÌÈŽÂˆH[ÙHYˆ
\HOOH™\ØÈŠHÂˆY]šXÜÈHÂˆÚYˆÎLH
ˆ›ÛÚ^™KˆZYÚˆÌH
ˆ›ÛÚ^™BˆNÂˆÚ\ˆH—ÈŽÂˆH[ÙHÂˆ[œ™XXÚX›JÙÙ]Y˜][ÚXÚÙY\X\˜[˜ÙHH[œÝ\ÜY\Nˆ	Ý\_X
NÂˆBˆÛÛœÝÚYH[X™\•ÔÝš[™Ê
ÚYHY]šXÜËÚY
HÈŠNÂˆÛÛœÝTÚYH[X™\•ÔÝš[™Ê
ZYÚHY]šXÜËšZYÚ
HÈŠNÂˆÛÛœÝ\X\˜[˜ÙHHH•Ô’œÖ˜Qˆ	Ù›ÛÚ^™_HˆÈ	ÞÚYH	ÞTÚYH
	ØÚ\ŸJHˆUXÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[QXÝH™]ÈXÝ
\˜[\Ëž™YŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
‘›Ü›U\H‹JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ•\H‹–Øš™XÝŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
›Þ‹˜›Þ
NÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
“X]š^‹ÌKKJNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
“[™Ý‹\X\˜[˜ÙK›[™Ý
NÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH™]ÈXÝ
\˜[\Ëž™YŠNÂˆÛÛœÝ›ÛH™]ÈXÝ
\˜[\Ëž™YŠNÂˆ›ÛœÙ]
”’œÖ˜Qˆ‹\Ë™˜[˜XÚÑ›ÛXÝ
NÂˆ™\ÛÝ\˜Ù\ËœÙ]
‘›Û‹›Û
NÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
”™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\ÊNÂˆ\Ë˜ÚXÚÙY\X\˜[˜ÙHH™]ÈÝš[™ÔÝ™X[J\X\˜[˜ÙJNÂˆ\Ë˜ÚXÚÙY\X\˜[˜ÙK™XÝH\X\˜[˜ÙTÝ™X[QXÝÂˆ\Ë—ÜÝ™X[\Ëœ\Ú
\Ë˜ÚXÚÙY\X\˜[˜ÙJNÂˆBˆÜ›ØÙ\ÜÐÚXÚÐ›Þ
\˜[\ÊHÂˆÛÛœÝÝ\ÝÛP\X\˜[˜ÙHH\˜[\Ë™XÝ™Ù]
TŠNÂˆYˆ
JÝ\ÝÛP\X\˜[˜ÙH[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆÛÛœÝ›Ü›X[\X\˜[˜ÙHHÝ\ÝÛP\X\˜[˜ÙK™Ù]
“ˆŠNÂˆYˆ
J›Ü›X[\X\˜[˜ÙH[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆÛÛœÝ\Õ˜[YHH\Ë—ÙXÛÙQ›Ü›U˜[YJ\˜[\Ë™XÝ™Ù]
TÈŠJNÂˆYˆ
\[Ùˆ\Õ˜[YHOOHœÝš[™ÈŠHÂˆ\Ë™]K™šY[˜[YHH\Õ˜[YNÂˆBˆÛÛœÝY\ÈH\Ë™]K™šY[˜[YHOOH[	‰ˆ\Ë™]K™šY[˜[YHOOH“Ù™ˆˆÈ\Ë™]K™šY[˜[YHˆ–Y\ÈŽÂˆÛÛœÝ^Ü˜[Y\ÈH\Ë—ÙXÛÙQ›Ü›U˜[YJ›Ü›X[\X\˜[˜ÙK™Ù]Ù^\Ê
JNÂˆYˆ
^Ü˜[Y\Ë›[™ÝOOH
HÂˆ^Ü˜[Y\Ëœ\Ú
“Ù™ˆ‹Y\ÊNÂˆH[ÙHYˆ
^Ü˜[Y\Ë›[™ÝOOHJHÂˆYˆ
^Ü˜[Y\ÖÌHOOH“Ù™ˆŠHÂˆ^Ü˜[Y\Ëœ\Ú
Y\ÊNÂˆH[ÙHÂˆ^Ü˜[Y\Ë[œÚY
“Ù™ˆŠNÂˆBˆH[ÙHYˆ
^Ü˜[Y\Ëš[˜ÛY\ÊY\ÊJHÂˆ^Ü˜[Y\Ë›[™ÝHÂˆ^Ü˜[Y\Ëœ\Ú
“Ù™ˆ‹Y\ÊNÂˆH[ÙHÂˆÛÛœÝÝ\–Y\ÈH^Ü˜[Y\Ë™š[™
ˆOˆˆOOH“Ù™ˆŠNÂˆ^Ü˜[Y\Ë›[™ÝHÂˆ^Ü˜[Y\Ëœ\Ú
“Ù™ˆ‹Ý\–Y\ÊNÂˆBˆYˆ
Y^Ü˜[Y\Ëš[˜ÛY\Ê\Ë™]K™šY[˜[YJJHÂˆ\Ë™]K™šY[˜[YHH“Ù™ˆŽÂˆBˆ\Ë™]K™^Ü˜[YHH^Ü˜[Y\ÖÌWNÂˆÛÛœÝÚXÚÙY\X\˜[˜ÙHH›Ü›X[\X\˜[˜ÙK™Ù]
\Ë™]K™^Ü˜[YJNÂˆ\Ë˜ÚXÚÙY\X\˜[˜ÙHHÚXÚÙY\X\˜[˜ÙH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[HÈÚXÚÙY\X\˜[˜ÙHˆ[ÂˆÛÛœÝ[˜ÚXÚÙY\X\˜[˜ÙHH›Ü›X[\X\˜[˜ÙK™Ù]
“Ù™ˆŠNÂˆ\Ë[˜ÚXÚÙY\X\˜[˜ÙHH[˜ÚXÚÙY\X\˜[˜ÙH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[HÈ[˜ÚXÚÙY\X\˜[˜ÙHˆ[ÂˆYˆ
\Ë˜ÚXÚÙY\X\˜[˜ÙJHÂˆ\Ë—ÜÝ™X[\Ëœ\Ú
\Ë˜ÚXÚÙY\X\˜[˜ÙJNÂˆH[ÙHÂˆ\Ë—ÙÙ]Y˜][ÚXÚÙY\X\˜[˜ÙJ\˜[\Ë˜ÚXÚÈŠNÂˆBˆYˆ
\Ë[˜ÚXÚÙY\X\˜[˜ÙJHÂˆ\Ë—ÜÝ™X[\Ëœ\Ú
\Ë[˜ÚXÚÙY\X\˜[˜ÙJNÂˆBˆ\Ë—Ù˜[˜XÚÑ›ÛXÝH\Ë™˜[˜XÚÑ›ÛXÝÂˆYˆ
\Ë™]K™Y˜][šY[˜[YHOOH[
HÂˆ\Ë™]K™Y˜][šY[˜[YHH“Ù™ˆŽÂˆBˆBˆÜ›ØÙ\ÜÔ˜Y[Ð]ÛŠ\˜[\ÊHÂˆ\Ë™]K˜]Û•˜[YHH[ÂˆÛÛœÝšY[\™[H\˜[\Ë™XÝ™Ù]
”\™[ŠNÂˆYˆ
šY[\™[[œÝ[˜Ù[ÙˆXÝ
HÂˆ\Ëœ\™[H\˜[\Ë™XÝ™Ù]˜]Ê”\™[ŠNÂˆÛÛœÝšY[\™[˜[YHHšY[\™[™Ù]
•ˆŠNÂˆYˆ
šY[\™[˜[YH[œÝ[˜Ù[Ùˆ˜[YJHÂˆ\Ë™]K™šY[˜[YHH\Ë—ÙXÛÙQ›Ü›U˜[YJšY[\™[˜[YJNÂˆBˆBˆÛÛœÝ\X\˜[˜ÙTÝ]\ÈH\˜[\Ë™XÝ™Ù]
TŠNÂˆYˆ
J\X\˜[˜ÙTÝ]\È[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆÛÛœÝ›Ü›X[\X\˜[˜ÙHH\X\˜[˜ÙTÝ]\Ë™Ù]
“ˆŠNÂˆYˆ
J›Ü›X[\X\˜[˜ÙH[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆ›Üˆ
ÛÛœÝÙ^HÙˆ›Ü›X[\X\˜[˜ÙK™Ù]Ù^\Ê
JHÂˆYˆ
Ù^HOOH“Ù™ˆŠHÂˆ\Ë™]K˜]Û•˜[YHH\Ë—ÙXÛÙQ›Ü›U˜[YJÙ^JNÂˆœ™XZÎÂˆBˆBˆÛÛœÝÚXÚÙY\X\˜[˜ÙHH›Ü›X[\X\˜[˜ÙK™Ù]
\Ë™]K˜]Û•˜[YJNÂˆ\Ë˜ÚXÚÙY\X\˜[˜ÙHHÚXÚÙY\X\˜[˜ÙH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[HÈÚXÚÙY\X\˜[˜ÙHˆ[ÂˆÛÛœÝ[˜ÚXÚÙY\X\˜[˜ÙHH›Ü›X[\X\˜[˜ÙK™Ù]
“Ù™ˆŠNÂˆ\Ë[˜ÚXÚÙY\X\˜[˜ÙHH[˜ÚXÚÙY\X\˜[˜ÙH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[HÈ[˜ÚXÚÙY\X\˜[˜ÙHˆ[ÂˆYˆ
\Ë˜ÚXÚÙY\X\˜[˜ÙJHÂˆ\Ë—ÜÝ™X[\Ëœ\Ú
\Ë˜ÚXÚÙY\X\˜[˜ÙJNÂˆH[ÙHÂˆ\Ë—ÙÙ]Y˜][ÚXÚÙY\X\˜[˜ÙJ\˜[\Ë™\ØÈŠNÂˆBˆYˆ
\Ë[˜ÚXÚÙY\X\˜[˜ÙJHÂˆ\Ë—ÜÝ™X[\Ëœ\Ú
\Ë[˜ÚXÚÙY\X\˜[˜ÙJNÂˆBˆ\Ë—Ù˜[˜XÚÑ›ÛXÝH\Ë™˜[˜XÚÑ›ÛXÝÂˆYˆ
\Ë™]K™Y˜][šY[˜[YHOOH[
HÂˆ\Ë™]K™Y˜][šY[˜[YHH“Ù™ˆŽÂˆBˆBˆÜ›ØÙ\ÜÔ\Ú]ÛŠ\˜[\ÊHÂˆÛÛœÝÂˆXÝˆ[››Ý][Û‘ÛØ˜[ÂˆHH\˜[\ÎÂˆYˆ
YXÝš\ÊHŠH	‰ˆYXÝš\ÊPHŠH	‰ˆ]\Ë™]K˜[\›˜]]™U^
HÂˆØ\›Š”\Ú]ÛœÈÚ]Ý]XÝ[ÛˆXÝ[Û˜\šY\È\™H›ÝÝ\ÜYŠNÂˆ™]\›ŽÂˆBˆ\Ë™]Kš\ÕÛÛ\Û›HHYXÝš\ÊHŠH	‰ˆYXÝš\ÊPHŠNÂˆØ][ÙËœ\œÙQ\ÝXÝ[Û˜\žJÂˆ\ÝXÝˆXÝˆ™\Ý[ØšŽˆ\Ë™]KˆØÐ˜\ÙU\›ˆ[››Ý][Û‘ÛØ˜[Ë˜˜\ÙU\›ˆØÐ]XÚY[Îˆ[››Ý][Û‘ÛØ˜[Ë˜]XÚY[ÂˆJNÂˆBˆÙ]šY[Øš™XÝ

HÂˆ]\HH˜]ÛˆŽÂˆ]^Ü˜[Y\ÎÂˆYˆ
\Ë™]K˜ÚXÚÐ›Þ
HÂˆ\HH˜ÚXÚØ›ÞŽÂˆ^Ü˜[Y\ÈH\Ë™]K™^Ü˜[YNÂˆH[ÙHYˆ
\Ë™]Kœ˜Y[Ð]ÛŠHÂˆ\HHœ˜Y[Ø]ÛˆŽÂˆ^Ü˜[Y\ÈH\Ë™]K˜]Û•˜[YNÂˆBˆ™]\›ˆÂˆYˆ\Ë™]KšYˆ˜[YNˆ\Ë™]K™šY[˜[YH“Ù™ˆ‹ˆY˜][˜[YNˆ\Ë™]K™Y˜][šY[˜[YKˆ^Ü˜[Y\ËˆY]X›Nˆ]\Ë™]Kœ™XYÛ›Kˆ˜[YNˆ\Ë™]K™šY[˜[YKˆ™XÝˆ\Ë™]Kœ™XÝˆY[Žˆ\Ë™]KšY[‹ˆXÝ[ÛœÎˆ\Ë™]K˜XÝ[ÛœËˆYÙNˆ\Ë™]KœYÙR[™^ˆÝ›ÚÙPÛÛÜŽˆ\Ë™]K˜›Ü™\ÛÛÜ‹ˆš[ÛÛÜŽˆ\Ë™]K˜˜XÚÙÜ›Ý[™ÛÛÜ‹ˆ›Ý][ÛŽˆ\Ëœ›Ý][Û‹ˆ\BˆNÂˆBˆÙ]˜[˜XÚÑ›ÛXÝ

HÂˆÛÛœÝXÝH™]ÈXÝ

NÂˆXÝœÙ]Y“˜[YJ˜\ÙQ›Û‹–˜\‘[™Ø˜]ÈŠNÂˆXÝœÙ]Y“˜[YJ•\H‹‘˜[˜XÚÕ\HŠNÂˆXÝœÙ]Y“˜[YJ”ÝX\H‹‘˜[˜XÚÕ\HŠNÂˆXÝœÙ]Y“˜[YJ‘[˜ÛÙ[™È‹–˜\‘[™Ø˜]Ñ[˜ÛÙ[™ÈŠNÂˆ™]\›ˆÚYÝÊ\Ë™˜[˜XÚÑ›ÛXÝ‹XÝ
NÂˆBŸB˜Û\ÜÈÚÚXÙUÚYÙ][››Ý][Ûˆ^[™ÈÚYÙ][››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ëš[™XÙ\ÈHXÝ™Ù]\œ˜^J’HŠNÂˆ\Ëš\Ò[™XÙ\ÈH\œ˜^Kš\Ð\œ˜^J\Ëš[™XÙ\ÊH	‰ˆ\Ëš[™XÙ\Ë›[™ÝˆÂˆ\Ë™]K›Ü[ÛœÈH×NÂˆÛÛœÝÜ[ÛœÈHÙ][š\š]X›T›Ü\JÂˆXÝˆÙ^Nˆ“Ü‚ˆJNÂˆYˆ
\œ˜^Kš\Ð\œ˜^JÜ[ÛœÊJHÂˆ›Üˆ
]HHZHHÜ[ÛœË›[™ÝÈHZNÈJÊÊHÂˆÛÛœÝÜ[ÛˆH™Y‹™™]ÚY”™YŠÜ[ÛœÖÚWJNÂˆÛÛœÝ\ÓÜ[Û\œ˜^HH\œ˜^Kš\Ð\œ˜^JÜ[ÛŠNÂˆ\Ë™]K›Ü[ÛœÖÚWHHÂˆ^Ü˜[YNˆ\Ë—ÙXÛÙQ›Ü›U˜[YJ\ÓÜ[Û\œ˜^HÈ™Y‹™™]ÚY”™YŠÜ[Û–ÌJHˆÜ[ÛŠKˆ\Ü^U˜[YNˆ\Ë—ÙXÛÙQ›Ü›U˜[YJ\ÓÜ[Û\œ˜^HÈ™Y‹™™]ÚY”™YŠÜ[Û–ÌWJHˆÜ[ÛŠBˆNÂˆBˆBˆYˆ
]\Ëš\Ò[™XÙ\ÊHÂˆYˆ
\[Ùˆ\Ë™]K™šY[˜[YHOOHœÝš[™ÈŠHÂˆ\Ë™]K™šY[˜[YHHÝ\Ë™]K™šY[˜[YWNÂˆH[ÙHÂˆ\Ë™]K™šY[˜[YHH×NÂˆBˆH[ÙHÂˆ\Ë™]K™šY[˜[YHH×NÂˆÛÛœÝZHH\Ë™]K›Ü[ÛœË›[™ÝÂˆ›Üˆ
ÛÛœÝHÙˆ\Ëš[™XÙ\ÊHÂˆYˆ
[X™\‹š\Ò[YÙ\ŠJH	‰ˆHH	‰ˆHZJHÂˆ\Ë™]K™šY[˜[YKœ\Ú
\Ë™]K›Ü[ÛœÖÚWK™^Ü˜[YJNÂˆBˆBˆBˆYˆ
\Ë™]K›Ü[ÛœË›[™ÝOOH	‰ˆ\Ë™]K™šY[˜[YK›[™Ýˆ
HÂˆ\Ë™]K›Ü[ÛœÈH\Ë™]K™šY[˜[YK›X\
˜[YHOˆ
Âˆ^Ü˜[YNˆ˜[YKˆ\Ü^U˜[YNˆ˜[YBˆJJNÂˆBˆ\Ë™]K˜ÛÛX›ÈH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YËÓÓP“ÊNÂˆ\Ë™]K›][TÙ[XÝH\Ëš\ÑšY[›YÊ[››Ý][Û‘šY[›YË“USTÑSPÕ
NÂˆ\Ë—Ú\Õ^HYNÂˆBˆÙ]šY[Øš™XÝ

HÂˆÛÛœÝ\HH\Ë™]K˜ÛÛX›ÈÈ˜ÛÛX›Ø›Þˆˆ›\Ý›ÞŽÂˆÛÛœÝ˜[YHH\Ë™]K™šY[˜[YK›[™ÝˆÈ\Ë™]K™šY[˜[YVÌHˆ[Âˆ™]\›ˆÂˆYˆ\Ë™]KšYˆ˜[YKˆY˜][˜[YNˆ\Ë™]K™Y˜][šY[˜[YKˆY]X›Nˆ]\Ë™]Kœ™XYÛ›Kˆ˜[YNˆ\Ë™]K™šY[˜[YKˆ™XÝˆ\Ë™]Kœ™XÝˆ[R][\Îˆ\Ë™]K™šY[˜[YK›[™Ýˆ][\TÙ[XÝ[ÛŽˆ\Ë™]K›][TÙ[XÝˆY[Žˆ\Ë™]KšY[‹ˆXÝ[ÛœÎˆ\Ë™]K˜XÝ[ÛœËˆ][\Îˆ\Ë™]K›Ü[ÛœËˆYÙNˆ\Ë™]KœYÙR[™^ˆÝ›ÚÙPÛÛÜŽˆ\Ë™]K˜›Ü™\ÛÛÜ‹ˆš[ÛÛÜŽˆ\Ë™]K˜˜XÚÙÜ›Ý[™ÛÛÜ‹ˆ›Ý][ÛŽˆ\Ëœ›Ý][Û‹ˆ\BˆNÂˆBˆ[Y[™Ø]™YXÝ
[››Ý][Û”ÝÜ˜YÙKXÝ
HÂˆYˆ
]\Ëš\Ò[™XÙ\ÊHÂˆ™]\›ŽÂˆBˆ]˜[Y\ÈH[››Ý][Û”ÝÜ˜YÙOË™Ù]
\Ë™]KšY
OË˜[YNÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J˜[Y\ÊJHÂˆ˜[Y\ÈHÝ˜[Y\×NÂˆBˆÛÛœÝ[™XÙ\ÈH×NÂˆÛÛœÝÂˆÜ[ÛœÂˆHH\Ë™]NÂˆ›Üˆ
]HHˆHZHHÜ[ÛœË›[™ÝÈHZNÈJÊÊHÂˆYˆ
Ü[ÛœÖÚWK™^Ü˜[YHOOH˜[Y\ÖÚ—JHÂˆ[™XÙ\Ëœ\Ú
JNÂˆˆ
ÏHNÂˆBˆBˆXÝœÙ]
’H‹[™XÙ\ÊNÂˆBˆ\Þ[˜ÈÙÙ]\X\˜[˜ÙJ]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJHÂˆYˆ
\Ë™]K˜ÛÛX›ÊHÂˆ™]\›ˆÝ\\‹—ÙÙ]\X\˜[˜ÙJ]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJNÂˆBˆ]^ÜY˜[YK›Ý][ÛŽÂˆÛÛœÝÝÜ˜YÙQ[žHH[››Ý][Û”ÝÜ˜YÙOË™Ù]
\Ë™]KšY
NÂˆYˆ
ÝÜ˜YÙQ[žJHÂˆ›Ý][ÛˆHÝÜ˜YÙQ[žKœ›Ý][ÛŽÂˆ^ÜY˜[YHHÝÜ˜YÙQ[žK˜[YNÂˆBˆYˆ
›Ý][ÛˆOOH[™Yš[™Y	‰ˆ^ÜY˜[YHOOH[™Yš[™Y	‰ˆ]\Ë—Û™YY\X\˜[˜Ù\ÊHÂˆ™]\›ˆ[ÂˆBˆYˆ
^ÜY˜[YHOOH[™Yš[™Y
HÂˆ^ÜY˜[YHH\Ë™]K™šY[˜[YNÂˆH[ÙHYˆ
P\œ˜^Kš\Ð\œ˜^J^ÜY˜[YJJHÂˆ^ÜY˜[YHHÙ^ÜY˜[YWNÂˆBˆÛÛœÝY˜][Y[™ÈHNÂˆÛÛœÝY˜][Y[™ÈHŽÂˆ]ÂˆÚYˆÝ[ÚYˆZYÚˆÝ[ZYÚˆHH\ÎÂˆYˆ
›Ý][ÛˆOOHL›Ý][ÛˆOOHÌ
HÂˆÝÝ[ÚYÝ[ZYÚHHÝÝ[ZYÚÝ[ÚYNÂˆBˆÛÛœÝ[™PÛÝ[H\Ë™]K›Ü[ÛœË›[™ÝÂˆÛÛœÝ˜[YR[™XÙ\ÈH×NÂˆ›Üˆ
]HHÈH[™PÛÝ[ÈJÊÊHÂˆÛÛœÝÂˆ^Ü˜[YBˆHH\Ë™]K›Ü[ÛœÖÚWNÂˆYˆ
^ÜY˜[YKš[˜ÛY\Ê^Ü˜[YJJHÂˆ˜[YR[™XÙ\Ëœ\Ú
JNÂˆBˆBˆYˆ
]\Ë—ÙY˜][\X\˜[˜ÙJHÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]HH\œÙQY˜][\X\˜[˜ÙJ\Ë—ÙY˜][\X\˜[˜ÙHH‹Ò[™]XØHˆÈŠNÂˆBˆÛÛœÝ›ÛH]ØZ]ÚYÙ][››Ý][Û‹—ÙÙ]›Û]J]˜[X]Ü‹\ÚË\Ë™]K™Y˜][\X\˜[˜ÙQ]K\Ë—ÙšY[™\ÛÝ\˜Ù\Ë›Y\™ÙY™\ÛÝ\˜Ù\ÊNÂˆ]Y˜][\X\˜[˜ÙNÂˆ]Âˆ›ÛÚ^™BˆHH\Ë™]K™Y˜][\X\˜[˜ÙQ]NÂˆYˆ
Y›ÛÚ^™JHÂˆÛÛœÝ[™RZYÚH
Ý[ZYÚHY˜][Y[™ÊHÈ[™PÛÝ[Âˆ][™UÚYHLNÂˆ]˜[YNÂˆ›Üˆ
ÛÛœÝÂˆ\Ü^U˜[YBˆHÙˆ\Ë™]K›Ü[ÛœÊHÂˆÛÛœÝÚYH\Ë—ÙÙ]^ÚY
\Ü^U˜[YK›Û
NÂˆYˆ
ÚYˆ[™UÚY
HÂˆ[™UÚYHÚYÂˆ˜[YHH\Ü^U˜[YNÂˆBˆBˆÙY˜][\X\˜[˜ÙK›ÛÚ^™WHH\Ë—ØÛÛ\]Q›ÛÚ^™J[™RZYÚÝ[ÚYHˆ
ˆY˜][Y[™Ë˜[YK›ÛLJNÂˆH[ÙHÂˆY˜][\X\˜[˜ÙHH\Ë—ÙY˜][\X\˜[˜ÙNÂˆBˆÛÛœÝ[™RZYÚH›ÛÚ^™H
ˆS‘WÑPÕÔŽÂˆÛÛœÝ”Y[™ÈH
[™RZYÚH›ÛÚ^™JHÈŽÂˆÛÛœÝ[X™\“Ù•š\ÚX›S[™\ÈHX]™›ÛÜŠÝ[ZYÚÈ[™RZYÚ
NÂˆ]š\œÝ[™^HÂˆYˆ
˜[YR[™XÙ\Ë›[™Ýˆ
HÂˆÛÛœÝZ[’[™^HX]›Z[Š‹‹˜[YR[™XÙ\ÊNÂˆÛÛœÝX^[™^HX]›X^
‹‹˜[YR[™XÙ\ÊNÂˆš\œÝ[™^HX]›X^
X^[™^H[X™\“Ù•š\ÚX›S[™\È
ÈJNÂˆYˆ
š\œÝ[™^ˆZ[’[™^
HÂˆš\œÝ[™^HZ[’[™^ÂˆBˆBˆÛÛœÝ[™HX]›Z[Šš\œÝ[™^
È[X™\“Ù•š\ÚX›S[™\È
ÈK[™PÛÝ[
NÂˆÛÛœÝYˆHÈ‹Õ“PÈH‹HH	ÝÝ[ÚYH	ÝÝ[ZYÚH™HÈ˜NÂˆYˆ
˜[YR[™XÙ\Ë›[™Ý
HÂˆY‹œ\Ú
ŒŒˆÍMŽˆŽML™ÈŠNÂˆ›Üˆ
ÛÛœÝ[™^Ùˆ˜[YR[™XÙ\ÊHÂˆYˆ
š\œÝ[™^H[™^	‰ˆ[™^[™
HÂˆY‹œ\Ú
H	ÝÝ[ZYÚH
[™^Hš\œÝ[™^
ÈJH
ˆ[™RZYÚH	ÝÝ[ÚYH	Û[™RZYÚH™H˜
NÂˆBˆBˆBˆY‹œ\Ú
•‹Y˜][\X\˜[˜ÙKHH	ÝÝ[ZYÚHX
NÂˆÛÛœÝ™]’[™›ÈHÂˆÚYˆˆNÂˆ›Üˆ
]HHš\œÝ[™^ÈH[™ÈJÊÊHÂˆÛÛœÝÂˆ\Ü^U˜[YBˆHH\Ë™]K›Ü[ÛœÖÚWNÂˆÛÛœÝœY[™ÈHHOOHš\œÝ[™^È”Y[™ÈˆÂˆY‹œ\Ú
\Ë—Ü™[™\•^
\Ü^U˜[YK›Û›ÛÚ^™KÝ[ÚY™]’[™›ËY˜][Y[™Ë[[™RZYÚ
ÈœY[™ÊJNÂˆBˆY‹œ\Ú
‘UHSPÈŠNÂˆ™]\›ˆY‹š›Ú[Š—ˆŠNÂˆBŸB˜Û\ÜÈÚYÛ˜]\™UÚYÙ][››Ý][Ûˆ^[™ÈÚYÙ][››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆ\Ë™]K™šY[˜[YHH[Âˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]K››ÒSH]\Ë™]Kš\ÓÝÛØ[˜\ÎÂˆBˆÙ]šY[Øš™XÝ

HÂˆ™]\›ˆÂˆYˆ\Ë™]KšYˆ˜[YNˆ[ˆYÙNˆ\Ë™]KœYÙR[™^ˆ\NˆœÚYÛ˜]\™H‚ˆNÂˆBŸB˜Û\ÜÈ^[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÛÛœÝQUSÒPÓÓ—ÔÒV‘HHŒŽÂˆÝ\\Š\˜[\ÊNÂˆ\Ë™]K››Ô›Ý]HHYNÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]K››ÒSH˜[ÙNÂˆÛÛœÝÂˆXÝˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K•VÂˆYˆ
\Ë™]Kš\Ð\X\˜[˜ÙJHÂˆ\Ë™]K›˜[YHH“›ÒXÛÛˆŽÂˆH[ÙHÂˆ\Ë™]Kœ™XÝÌWHH\Ë™]Kœ™XÝÌ×HHQUSÒPÓÓ—ÔÒV‘NÂˆ\Ë™]Kœ™XÝÌ—HH\Ë™]Kœ™XÝÌH
ÈQUSÒPÓÓ—ÔÒV‘NÂˆ\Ë™]K›˜[YHHXÝš\Ê“˜[YHŠHÈXÝ™Ù]
“˜[YHŠK›˜[YHˆ“›ÝHŽÂˆBˆYˆ
XÝš\Ê”Ý]HŠJHÂˆ\Ë™]KœÝ]HHXÝ™Ù]
”Ý]HŠH[Âˆ\Ë™]KœÝ]S[Ù[HXÝ™Ù]
”Ý]S[Ù[ŠH[ÂˆH[ÙHÂˆ\Ë™]KœÝ]HH[Âˆ\Ë™]KœÝ]S[Ù[H[ÂˆBˆBŸB˜Û\ÜÈ[šÐ[››Ý][Ûˆ^[™È[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ[››Ý][Û‘ÛØ˜[ÂˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K“S’ÎÂˆ\Ë™]K››ÒSH˜[ÙNÂˆÛÛœÝ]XYÚ[ÈHÙ]]XYÚ[ÊXÝ\Ëœ™XÝ[™ÛJNÂˆYˆ
]XYÚ[ÊHÂˆ\Ë™]Kœ]XYÚ[ÈH]XYÚ[ÎÂˆBˆ\Ë™]K˜›Ü™\ÛÛÜˆH\Ë™]K˜ÛÛÜŽÂˆØ][ÙËœ\œÙQ\ÝXÝ[Û˜\žJÂˆ\ÝXÝˆXÝˆ™\Ý[ØšŽˆ\Ë™]KˆØÐ˜\ÙU\›ˆ[››Ý][Û‘ÛØ˜[Ë˜˜\ÙU\›ˆØÐ]XÚY[Îˆ[››Ý][Û‘ÛØ˜[Ë˜]XÚY[ÂˆJNÂˆBˆÙ]Ý™\›^\Õ^ÛÛ[

HÂˆ™]\›ˆYNÂˆBŸB˜Û\ÜÈÜ\[››Ý][Ûˆ^[™È[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K”ÔTÂˆ\Ë™]K››ÒSH˜[ÙNÂˆYˆ
\ËÚYOOH\ËšZYÚOOH
HÂˆ\Ë™]Kœ™XÝH[ÂˆBˆ]\™[][HHXÝ™Ù]
”\™[ŠNÂˆYˆ
\\™[][JHÂˆØ\›Š”Ü\[››Ý][Ûˆ\ÈHZ\ÜÚ[™ÈÜˆ[˜[Y\™[[››Ý][Û‹ˆŠNÂˆ™]\›ŽÂˆBˆ\Ë™]Kœ\™[™XÝHÛÚÝ\›Ü›X[™XÝ
\™[][K™Ù]\œ˜^J”™XÝŠK[
NÂˆ\Ë™]K˜Ü™X][Û‘]HH\™[][K™Ù]
Ü™X][Û‘]HŠHˆŽÂˆÛÛœÝH\™[][K™Ù]
”•ŠNÂˆYˆ
\Ó˜[YJ[››Ý][Û”™\U\K‘Ô“ÕT
JHÂˆ\™[][HH\™[][K™Ù]
’T•ŠNÂˆBˆYˆ
\\™[][Kš\Ê“HŠJHÂˆ\Ë™]K›[ÙYšXØ][Û‘]HH[ÂˆH[ÙHÂˆ\ËœÙ][ÙYšXØ][Û‘]J\™[][K™Ù]
“HŠJNÂˆ\Ë™]K›[ÙYšXØ][Û‘]HH\Ë›[ÙYšXØ][Û‘]NÂˆBˆYˆ
\\™[][Kš\ÊÈŠJHÂˆ\Ë™]K˜ÛÛÜˆH[ÂˆH[ÙHÂˆ\ËœÙ]ÛÛÜŠ\™[][K™Ù]\œ˜^JÈŠJNÂˆ\Ë™]K˜ÛÛÜˆH\Ë˜ÛÛÜŽÂˆBˆYˆ
]\ËšY]ØX›JHÂˆÛÛœÝ\™[›YÜÈH\™[][K™Ù]
‘ˆŠNÂˆYˆ
\Ë—Ú\ÕšY]ØX›J\™[›YÜÊJHÂˆ\ËœÙ]›YÜÊ\™[›YÜÊNÂˆBˆBˆ\ËœÙ]]J\™[][K™Ù]
•ŠJNÂˆ\Ë™]K]SØšˆH\Ë—Ý]NÂˆ\ËœÙ]ÛÛ[Ê\™[][K™Ù]
ÛÛ[ÈŠJNÂˆ\Ë™]K˜ÛÛ[ÓØšˆH\Ë—ØÛÛ[ÎÂˆYˆ
\™[][Kš\Ê”ÈŠJHÂˆ\Ë™]KœšXÚ^HQ˜XÝÜžK™Ù]šXÚ^\Ò[
\™[][K™Ù]
”ÈŠJNÂˆBˆ\Ë™]K›Ü[ˆHHYXÝ™Ù]
“Ü[ˆŠNÂˆBˆÝ]XÈÜ™X]S™]ÑXÝ
[››Ý][Û‹™Y‹Ü\˜[\ÊHÂˆÛÛœÝÂˆÛ[››Ý][Û‹ˆ™XÝˆ\™[ˆHH[››Ý][ÛŽÂˆÛÛœÝÜ\HÛ[››Ý][Ûˆ™]ÈXÝ
™YŠNÂˆÜ\œÙ]Y“›Ý^\ÝÊ•\H‹˜[YK™Ù]
[››ÝŠJNÂˆÜ\œÙ]Y“›Ý^\ÝÊ”ÝX\H‹˜[YK™Ù]
”Ü\ŠJNÂˆÜ\œÙ]Y“›Ý^\ÝÊ“Ü[ˆ‹˜[ÙJNÂˆÜ\œÙ]Y\œ˜^J”™XÝ‹™XÝ
NÂˆÜ\œÙ]
”\™[‹\™[
NÂˆ™]\›ˆÜ\ÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]S™]Ð\X\˜[˜ÙTÝ™X[J[››Ý][Û‹™Y‹\˜[\ÊHÂˆ™]\›ˆ[ÂˆBŸB˜Û\ÜÈœ™YU^[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]Kš\ÑY]X›HH]\Ë™]K››ÒSÂˆ\Ë™]K››ÒSH˜[ÙNÂˆÛÛœÝÂˆ[››Ý][Û‘ÛØ˜[Ëˆ]˜[X]Ü“Ü[ÛœËˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K‘”‘QUVÂˆ\ËœÙ]Y˜][\X\˜[˜ÙJ\˜[\ÊNÂˆ\Ë—Ú\Ð\X\˜[˜ÙHHH]\Ë˜\X\˜[˜ÙNÂˆYˆ
\Ë—Ú\Ð\X\˜[˜ÙJHÂˆÛÛœÝÂˆ›ÛÛÛÜ‹ˆ›ÛÚ^™BˆHH\œÙP\X\˜[˜ÙTÝ™X[J\Ë˜\X\˜[˜ÙK]˜[X]Ü“Ü[ÛœË™Y‹[››Ý][Û‘ÛØ˜[Ë™ÛØ˜[ÛÛÜ”ÜXÙPØXÚJNÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]K™›ÛÛÛÜˆH›ÛÛÛÜŽÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]K™›ÛÚ^™HH›ÛÚ^™HLÂˆH[ÙHÂˆ\Ë™]K™Y˜][\X\˜[˜ÙQ]K™›ÛÚ^™HHLÂˆÛÛœÝÂˆ›ÛÛÛÜ‹ˆ›ÛÚ^™BˆHH\Ë™]K™Y˜][\X\˜[˜ÙQ]NÂˆYˆ
\Ë—ØÛÛ[ËœÝŠHÂˆ\Ë™]K^ÛÛ[H\Ë—ØÛÛ[ËœÝ‹œÜ]
×—ß‹ÊK›X\
[™HOˆ[™Kš[Q[™

JNÂˆÛÛœÝÂˆÛÛÜ™Ëˆ˜›ÞˆX]š^ˆHH˜ZÙU[šXÛÙQ›Û™Ù]š\œÝÜÚ][Û’[™›Ê\Ëœ™XÝ[™ÛK\Ëœ›Ý][Û‹›ÛÚ^™JNÂˆ\Ë™]K^ÜÚ][ÛˆH\Ë—Ý˜[œÙ›Ü›TÚ[
ÛÛÜ™Ë˜›ÞX]š^
NÂˆBˆYˆ
\Ë—Ú\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY
HÂˆÛÛœÝÝ›ÚÙP[HH\˜[\Ë™XÝ™Ù]
ÐHŠNÂˆÛÛœÝ˜ZÙU[šXÛÙQ›ÛH™]È˜ZÙU[šXÛÙQ›Û
™Y‹œØ[œË\Ù\šYˆŠNÂˆ\Ë˜\X\˜[˜ÙHH˜ZÙU[šXÛÙQ›Û˜Ü™X]P\X\˜[˜ÙJ\Ë—ØÛÛ[ËœÝ‹\Ëœ™XÝ[™ÛK\Ëœ›Ý][Û‹›ÛÚ^™K›ÛÛÛÜ‹Ý›ÚÙP[JNÂˆ\Ë—ÜÝ™X[\Ëœ\Ú
\Ë˜\X\˜[˜ÙJNÂˆH[ÙHÂˆØ\›Š‘œ™YU^[››Ý][ÛŽˆÙ™œØÜ™Y[Ø[˜\È\È›ÝÝ\ÜY[››Ý][ÛˆX^H›Ý™[™\ˆÛÜœ™XÝKˆŠNÂˆBˆBˆBˆÙ]\Õ^ÛÛ[

HÂˆ™]\›ˆ\Ë—Ú\Ð\X\˜[˜ÙNÂˆBˆÝ]XÈÜ™X]S™]ÑXÝ
[››Ý][Û‹™Y‹Âˆ\™Y‹ˆ\ˆJHÂˆÛÛœÝÂˆÛÛÜ‹ˆ]Kˆ›ÛÚ^™KˆÛ[››Ý][Û‹ˆ™XÝˆ›Ý][Û‹ˆ\Ù\‹ˆ˜[YBˆHH[››Ý][ÛŽÂˆÛÛœÝœ™Y]^HÛ[››Ý][Ûˆ™]ÈXÝ
™YŠNÂˆœ™Y]^œÙ]Y“›Ý^\ÝÊ•\H‹˜[YK™Ù]
[››ÝŠJNÂˆœ™Y]^œÙ]Y“›Ý^\ÝÊ”ÝX\H‹˜[YK™Ù]
‘œ™YU^ŠJNÂˆœ™Y]^œÙ]
Û[››Ý][ÛˆÈ“HˆˆÜ™X][Û‘]H‹‰ÙÙ][ÙYšXØ][Û‘]J]J_X
NÂˆYˆ
Û[››Ý][ÛŠHÂˆœ™Y]^™[]J”ÈŠNÂˆBˆœ™Y]^œÙ]Y\œ˜^J”™XÝ‹™XÝ
NÂˆÛÛœÝHHÒ[ˆ	Ù›ÛÚ^™_Hˆ	ÙÙ]ÛÛÜŠÛÛÜ‹YJ_XÂˆœ™Y]^œÙ]
‘H‹JNÂˆœ™Y]^œÙ]Y‘Yš[™Y
ÛÛ[È‹Ýš[™ÕÐ\ØÚZSÜ•UŒM‘J˜[YJJNÂˆœ™Y]^œÙ]Y“›Ý^\ÝÊ‘ˆ‹
NÂˆœ™Y]^œÙ]Y“›Ý^\ÝÊ›Ü™\ˆ‹ÌJNÂˆœ™Y]^œÙ]Y“[X™\Š”›Ý]H‹›Ý][ÛŠNÂˆœ™Y]^œÙ]Y‘Yš[™Y
•‹Ýš[™ÕÐ\ØÚZSÜ•UŒM‘J\Ù\ŠJNÂˆYˆ
\™Yˆ\
HÂˆÛÛœÝˆH™]ÈXÝ
™YŠNÂˆœ™Y]^œÙ]
T‹ŠNÂˆ‹œÙ]
“ˆ‹\™Yˆ\
NÂˆBˆ™]\›ˆœ™Y]^ÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]S™]Ð\X\˜[˜ÙTÝ™X[J[››Ý][Û‹™Y‹\˜[\ÊHÂˆÛÛœÝÂˆ˜\ÙQ›Û™Y‹ˆ]˜[X]Ü‹ˆ\ÚÂˆHH\˜[\ÎÂˆÛÛœÝÂˆÛÛÜ‹ˆ›ÛÚ^™Kˆ™XÝˆ›Ý][Û‹ˆ˜[YBˆHH[››Ý][ÛŽÂˆYˆ
XÛÛÜŠHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ™\ÛÝ\˜Ù\ÈH™]ÈXÝ
™YŠNÂˆÛÛœÝ›ÛH™]ÈXÝ
™YŠNÂˆYˆ
˜\ÙQ›Û™YŠHÂˆ›ÛœÙ]
’[ˆ‹˜\ÙQ›Û™YŠNÂˆH[ÙHÂˆÛÛœÝ˜\ÙQ›ÛH™]ÈXÝ
™YŠNÂˆ˜\ÙQ›ÛœÙ]Y“˜[YJ˜\ÙQ›Û‹’[™]XØHŠNÂˆ˜\ÙQ›ÛœÙ]Y“˜[YJ•\H‹‘›ÛŠNÂˆ˜\ÙQ›ÛœÙ]Y“˜[YJ”ÝX\H‹•\LHŠNÂˆ˜\ÙQ›ÛœÙ]Y“˜[YJ‘[˜ÛÙ[™È‹•Ú[[œÚQ[˜ÛÙ[™ÈŠNÂˆ›ÛœÙ]
’[ˆ‹˜\ÙQ›Û
NÂˆBˆ™\ÛÝ\˜Ù\ËœÙ]
‘›Û‹›Û
NÂˆÛÛœÝ[ˆH]ØZ]ÚYÙ][››Ý][Û‹—ÙÙ]›Û]J]˜[X]Ü‹\ÚËÂˆ›Û˜[YNˆ’[ˆ‹ˆ›ÛÚ^™BˆK™\ÛÝ\˜Ù\ÊNÂˆÛÛœÝÞKLK‹L—HH™XÝÂˆ]ÈHˆHNÂˆ]HLˆHLNÂˆYˆ
›Ý][Ûˆ	HNOOH
HÂˆÝËHHÚ×NÂˆBˆÛÛœÝ[™\ÈH˜[YKœÜ]
—ˆŠNÂˆÛÛœÝØØ[HH›ÛÚ^™HÈLÂˆ]Ý[ÚYHR[™š[š]NÂˆÛÛœÝ[˜ÛÙY[™\ÈH×NÂˆ›Üˆ
][™HÙˆ[™\ÊHÂˆÛÛœÝ[˜ÛÙYH[‹™[˜ÛÙTÝš[™Ê[™JNÂˆYˆ
[˜ÛÙY›[™ÝˆJHÂˆ™]\›ˆ[ÂˆBˆ[™HH[˜ÛÙYš›Ú[ŠˆŠNÂˆ[˜ÛÙY[™\Ëœ\Ú
[™JNÂˆ][™UÚYHÂˆÛÛœÝÛ\ÈH[‹˜Ú\œÕÑÛ\Ê[™JNÂˆ›Üˆ
ÛÛœÝÛ\ÙˆÛ\ÊHÂˆ[™UÚY
ÏHÛ\ÚY
ˆØØ[NÂˆBˆÝ[ÚYHX]›X^
Ý[ÚY[™UÚY
NÂˆBˆ]ØØ[HHNÂˆYˆ
Ý[ÚYˆÊHÂˆØØ[HHÈÈÝ[ÚYÂˆBˆ]œØØ[HHNÂˆÛÛœÝ[™RZYÚHS‘WÑPÕÔˆ
ˆ›ÛÚ^™NÂˆÛÛœÝ[™P\ØÙ[H
S‘WÑPÕÔˆHS‘WÑTÐÑS•ÑPÕÔŠH
ˆ›ÛÚ^™NÂˆÛÛœÝÝ[ZYÚH[™RZYÚ
ˆ[™\Ë›[™ÝÂˆYˆ
Ý[ZYÚˆ
HÂˆœØØ[HHÈÝ[ZYÚÂˆBˆÛÛœÝœØØ[HHX]›Z[ŠØØ[KœØØ[JNÂˆÛÛœÝ™]Ñ›ÛÚ^™HH›ÛÚ^™H
ˆœØØ[NÂˆ]š\œÝÚ[Û\›ÞX]š^ÂˆÝÚ]Ú
›Ý][ÛŠHÂˆØ\ÙH‚ˆX]š^HÌKWNÂˆÛ\›ÞHÜ™XÝÌK™XÝÌWKËNÂˆš\œÝÚ[HÜ™XÝÌK™XÝÌ×HH[™P\ØÙ[NÂˆœ™XZÎÂˆØ\ÙHL‚ˆX]š^HÌKLKNÂˆÛ\›ÞHÜ™XÝÌWK\™XÝÌ—KËNÂˆš\œÝÚ[HÜ™XÝÌWK\™XÝÌHH[™P\ØÙ[NÂˆœ™XZÎÂˆØ\ÙHN‚ˆX]š^HËLKLWNÂˆÛ\›ÞHË\™XÝÌ—K\™XÝÌ×KËNÂˆš\œÝÚ[HË\™XÝÌ—K\™XÝÌWHH[™P\ØÙ[NÂˆœ™XZÎÂˆØ\ÙHÌ‚ˆX]š^HÌLKKNÂˆÛ\›ÞHË\™XÝÌ×K™XÝÌKËNÂˆš\œÝÚ[HË\™XÝÌ×K™XÝÌ—HH[™P\ØÙ[NÂˆœ™XZÎÂˆBˆÛÛœÝY™™\ˆHÈœH‹	ÛX]š^š›Ú[ŠˆŠ_HÛX	ØÛ\›Þš›Ú[ŠˆŠ_H™HÈ˜•	ÙÙ]ÛÛÜŠÛÛÜ‹YJ_XÈÒ[ˆ	Û[X™\•ÔÝš[™Ê™]Ñ›ÛÚ^™J_H˜NÂˆY™™\‹œ\Ú
	Ùš\œÝÚ[š›Ú[ŠˆŠ_H
	Ù\ØØ\TÝš[™Ê[˜ÛÙY[™\ÖÌJ_JH˜
NÂˆÛÛœÝ”ÚYH[X™\•ÔÝš[™Ê[™RZYÚ
NÂˆ›Üˆ
]HHKZHH[˜ÛÙY[™\Ë›[™ÝÈHZNÈJÊÊHÂˆÛÛœÝ[™HH[˜ÛÙY[™\ÖÚWNÂˆY™™\‹œ\Ú
IÝ”ÚYH
	Ù\ØØ\TÝš[™Ê[™J_JH˜
NÂˆBˆY™™\‹œ\Ú
‘U‹”HŠNÂˆÛÛœÝ\X\˜[˜ÙHHY™™\‹š›Ú[Š—ˆŠNÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[QXÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
‘›Ü›U\H‹JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ•\H‹–Øš™XÝŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
›Þ‹™XÝ
NÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
”™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\ÊNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
“X]š^‹ÌKK\™XÝÌK\™XÝÌWWJNÂˆÛÛœÝ\H™]ÈÝš[™ÔÝ™X[J\X\˜[˜ÙJNÂˆ\™XÝH\X\˜[˜ÙTÝ™X[QXÝÂˆ™]\›ˆ\ÂˆBŸB˜Û\ÜÈ[™P[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K“S‘NÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]K››ÒSH˜[ÙNÂˆÛÛœÝ[™PÛÛÜ™[˜]\ÈHÛÚÝ\™XÝ
XÝ™Ù]\œ˜^J“ŠKÌJNÂˆ\Ë™]K›[™PÛÛÜ™[˜]\ÈH][››Ü›X[^™T™XÝ
[™PÛÛÜ™[˜]\ÊNÂˆ\ËœÙ][™Q[™[™ÜÊXÝ™Ù]\œ˜^J“HŠJNÂˆ\Ë™]K›[™Q[™[™ÜÈH\Ë›[™Q[™[™ÜÎÂˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆÛÛœÝÝ›ÚÙPÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌJNÂˆÛÛœÝÝ›ÚÙP[HHXÝ™Ù]
ÐHŠNÂˆÛÛœÝ[\š[ÜÛÛÜˆHÙ]™ØÛÛÜŠXÝ™Ù]\œ˜^J’PÈŠK[
NÂˆÛÛœÝš[ÛÛÜˆHÙ]ÛÛÜ\œ˜^J[\š[ÜÛÛÜŠNÂˆÛÛœÝš[[HHš[ÛÛÜˆÈÝ›ÚÙP[Hˆ[ÂˆÛÛœÝ›Ü™\•ÚYH\Ë˜›Ü™\”Ý[KÚYKˆ›Ü™\Y\ÝHˆ
ˆ›Ü™\•ÚYÂˆÛÛœÝ˜›ÞHÝ\Ë™]K›[™PÛÛÜ™[˜]\ÖÌHH›Ü™\Y\Ý\Ë™]K›[™PÛÛÜ™[˜]\ÖÌWHH›Ü™\Y\Ý\Ë™]K›[™PÛÛÜ™[˜]\ÖÌ—H
È›Ü™\Y\Ý\Ë™]K›[™PÛÛÜ™[˜]\ÖÌ×H
È›Ü™\Y\ÝNÂˆYˆ
U][š[\œÙXÝ
\Ëœ™XÝ[™ÛK˜›Þ
JHÂˆ\Ëœ™XÝ[™ÛHH˜›ÞÂˆBˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜Nˆ	Ø›Ü™\•ÚYHØˆÝ›ÚÙPÛÛÜ‹ˆš[ÛÛÜ‹ˆÝ›ÚÙP[Kˆš[[KˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆY™™\‹œ\Ú
	Û[™PÛÛÜ™[˜]\ÖÌ_H	Û[™PÛÛÜ™[˜]\ÖÌW_HX	Û[™PÛÛÜ™[˜]\ÖÌ—_H	Û[™PÛÛÜ™[˜]\ÖÌ×_H”ÈŠNÂˆ™]\›ˆÜÚ[ÖÌHH›Ü™\•ÚYÚ[ÖÍ×HH›Ü™\•ÚYÚ[ÖÌ—H
È›Ü™\•ÚYÚ[ÖÌ×H
È›Ü™\•ÚYNÂˆBˆJNÂˆBˆBŸB˜Û\ÜÈÜ]X\™P[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K”ÔUPT‘NÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]K››ÒSH˜[ÙNÂˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆÛÛœÝÝ›ÚÙPÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌJNÂˆÛÛœÝÝ›ÚÙP[HHXÝ™Ù]
ÐHŠNÂˆÛÛœÝ[\š[ÜÛÛÜˆHÙ]™ØÛÛÜŠXÝ™Ù]\œ˜^J’PÈŠK[
NÂˆÛÛœÝš[ÛÛÜˆHÙ]ÛÛÜ\œ˜^J[\š[ÜÛÛÜŠNÂˆÛÛœÝš[[HHš[ÛÛÜˆÈÝ›ÚÙP[Hˆ[ÂˆYˆ
\Ë˜›Ü™\”Ý[KÚYOOH	‰ˆYš[ÛÛÜŠHÂˆ™]\›ŽÂˆBˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜Nˆ	Ý\Ë˜›Ü™\”Ý[KÚYHØˆÝ›ÚÙPÛÛÜ‹ˆš[ÛÛÜ‹ˆÝ›ÚÙP[Kˆš[[KˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆÛÛœÝHÚ[ÖÍH
È\Ë˜›Ü™\”Ý[KÚYÈŽÂˆÛÛœÝHHÚ[ÖÍWH
È\Ë˜›Ü™\”Ý[KÚYÈŽÂˆÛÛœÝÚYHÚ[ÖÍ—HHÚ[ÖÍHH\Ë˜›Ü™\”Ý[KÚYÂˆÛÛœÝZYÚHÚ[ÖÌ×HHÚ[ÖÍ×HH\Ë˜›Ü™\”Ý[KÚYÂˆY™™\‹œ\Ú
	ÞH	Þ_H	ÝÚYH	ÚZYÚH™X
NÂˆYˆ
š[ÛÛÜŠHÂˆY™™\‹œ\Ú
ˆŠNÂˆH[ÙHÂˆY™™\‹œ\Ú
”ÈŠNÂˆBˆ™]\›ˆÜÚ[ÖÌKÚ[ÖÍ×KÚ[ÖÌ—KÚ[ÖÌ×WNÂˆBˆJNÂˆBˆBŸB˜Û\ÜÈÚ\˜ÛP[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\KÒTÓNÂˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆÛÛœÝÝ›ÚÙPÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌJNÂˆÛÛœÝÝ›ÚÙP[HHXÝ™Ù]
ÐHŠNÂˆÛÛœÝ[\š[ÜÛÛÜˆHÙ]™ØÛÛÜŠXÝ™Ù]\œ˜^J’PÈŠK[
NÂˆÛÛœÝš[ÛÛÜˆHÙ]ÛÛÜ\œ˜^J[\š[ÜÛÛÜŠNÂˆÛÛœÝš[[HHš[ÛÛÜˆÈÝ›ÚÙP[Hˆ[ÂˆYˆ
\Ë˜›Ü™\”Ý[KÚYOOH	‰ˆYš[ÛÛÜŠHÂˆ™]\›ŽÂˆBˆÛÛœÝÛÛ›ÛÚ[Ñ\Ý[˜ÙHHÈÈ
ˆX][ŠX]”HÈ
ˆ
ˆ
JNÂˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜Nˆ	Ý\Ë˜›Ü™\”Ý[KÚYHØˆÝ›ÚÙPÛÛÜ‹ˆš[ÛÛÜ‹ˆÝ›ÚÙP[Kˆš[[KˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆÛÛœÝHÚ[ÖÌH
È\Ë˜›Ü™\”Ý[KÚYÈŽÂˆÛÛœÝLHÚ[ÖÌWHH\Ë˜›Ü™\”Ý[KÚYÈŽÂˆÛÛœÝHHÚ[ÖÍ—HH\Ë˜›Ü™\”Ý[KÚYÈŽÂˆÛÛœÝLHHÚ[ÖÍ×H
È\Ë˜›Ü™\”Ý[KÚYÈŽÂˆÛÛœÝZYH
È
HH
HÈŽÂˆÛÛœÝSZYHL
È
LHHL
HÈŽÂˆÛÛœÝÙ™œÙ]H
HH
HÈˆ
ˆÛÛ›ÛÚ[Ñ\Ý[˜ÙNÂˆÛÛœÝSÙ™œÙ]H
LHHL
HÈˆ
ˆÛÛ›ÛÚ[Ñ\Ý[˜ÙNÂˆY™™\‹œ\Ú
	ÞZYH	ÞL_HX	ÞZY
ÈÙ™œÙ]H	ÞL_H	Þ_H	ÞSZY
ÈSÙ™œÙ]H	Þ_H	ÞSZYHØ	Þ_H	ÞSZYHSÙ™œÙ]H	ÞZY
ÈÙ™œÙ]H	ÞLH	ÞZYH	ÞLHØ	ÞZYHÙ™œÙ]H	ÞLH	ÞH	ÞSZYHSÙ™œÙ]H	ÞH	ÞSZYHØ	ÞH	ÞSZY
ÈSÙ™œÙ]H	ÞZYHÙ™œÙ]H	ÞL_H	ÞZYH	ÞL_HØšŠNÂˆYˆ
š[ÛÛÜŠHÂˆY™™\‹œ\Ú
ˆŠNÂˆH[ÙHÂˆY™™\‹œ\Ú
”ÈŠNÂˆBˆ™]\›ˆÜÚ[ÖÌKÚ[ÖÍ×KÚ[ÖÌ—KÚ[ÖÌ×WNÂˆBˆJNÂˆBˆBŸB˜Û\ÜÈÛ[[™P[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K”ÓSS‘NÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]K››ÒSH˜[ÙNÂˆ\Ë™]K™\XÙ\ÈH[ÂˆYˆ
J\È[œÝ[˜Ù[ÙˆÛYÛÛ[››Ý][ÛŠJHÂˆ\ËœÙ][™Q[™[™ÜÊXÝ™Ù]\œ˜^J“HŠJNÂˆ\Ë™]K›[™Q[™[™ÜÈH\Ë›[™Q[™[™ÜÎÂˆBˆÛÛœÝ˜]Õ™\XÙ\ÈHXÝ™Ù]\œ˜^J•™\XÙ\ÈŠNÂˆYˆ
Z\Ó[X™\\œ˜^J˜]Õ™\XÙ\Ë[
JHÂˆ™]\›ŽÂˆBˆÛÛœÝ™\XÙ\ÈH\Ë™]K™\XÙ\ÈH›Ø]Ì\œ˜^K™œ›ÛJ˜]Õ™\XÙ\ÊNÂˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆÛÛœÝÝ›ÚÙPÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌJNÂˆÛÛœÝÝ›ÚÙP[HHXÝ™Ù]
ÐHŠNÂˆ]š[ÛÛÜˆHÙ]™ØÛÛÜŠXÝ™Ù]\œ˜^J’PÈŠK[
NÂˆYˆ
š[ÛÛÜŠHÂˆš[ÛÛÜˆHÙ]ÛÛÜ\œ˜^Jš[ÛÛÜŠNÂˆBˆ]Ü\˜]ÜŽÂˆYˆ
š[ÛÛÜŠHÂˆYˆ
\Ë˜ÛÛÜŠHÂˆÜ\˜]ÜˆHš[ÛÛÜ‹™]™\žJ
ËJHOˆÈOOHÝ›ÚÙPÛÛÜ–ÚWJHÈ™ˆˆˆˆŽÂˆH[ÙHÂˆÜ\˜]ÜˆH™ˆŽÂˆBˆH[ÙHÂˆÜ\˜]ÜˆH”ÈŽÂˆBˆÛÛœÝ›Ü™\•ÚYH\Ë˜›Ü™\”Ý[KÚYKˆ›Ü™\Y\ÝHˆ
ˆ›Ü™\•ÚYÂˆÛÛœÝ˜›ÞHÒ[™š[š]K[™š[š]KR[™š[š]KR[™š[š]WNÂˆ›Üˆ
]HHZHH™\XÙ\Ë›[™ÝÈHZNÈH
ÏHŠHÂˆ][œ™XÝ›Ý[™[™Ð›Þ
™\XÙ\ÖÚWHH›Ü™\Y\Ý™\XÙ\ÖÚH
ÈWHH›Ü™\Y\Ý™\XÙ\ÖÚWH
È›Ü™\Y\Ý™\XÙ\ÖÚH
ÈWH
È›Ü™\Y\Ý˜›Þ
NÂˆBˆYˆ
U][š[\œÙXÝ
\Ëœ™XÝ[™ÛK˜›Þ
JHÂˆ\Ëœ™XÝ[™ÛHH˜›ÞÂˆBˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜Nˆ	Ø›Ü™\•ÚYHØˆÝ›ÚÙPÛÛÜ‹ˆÝ›ÚÙP[Kˆš[ÛÛÜ‹ˆš[[Nˆš[ÛÛÜˆÈÝ›ÚÙP[Hˆ[ˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆ›Üˆ
]HHZHH™\XÙ\Ë›[™ÝÈHZNÈH
ÏHŠHÂˆY™™\‹œ\Ú
	Ý™\XÙ\ÖÚW_H	Ý™\XÙ\ÖÚH
ÈW_H	ÚHOOHÈ›Hˆˆ›ŸX
NÂˆBˆY™™\‹œ\Ú
Ü\˜]ÜŠNÂˆ™]\›ˆÜÚ[ÖÌKÚ[ÖÍ×KÚ[ÖÌ—KÚ[ÖÌ×WNÂˆBˆJNÂˆBˆBŸB˜Û\ÜÈÛYÛÛ[››Ý][Ûˆ^[™ÈÛ[[™P[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K”ÓQÓÓŽÂˆBŸB˜Û\ÜÈØ\™][››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\KÐT‘UÂˆBŸB˜Û\ÜÈ[šÐ[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]K››ÒSH˜[ÙNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K’S’ÎÂˆ\Ë™]Kš[šÓ\ÝÈH×NÂˆ\Ë™]Kš\ÑY]X›HH]\Ë™]K››ÒSÂˆ\Ë™]K››ÒSH˜[ÙNÂˆ\Ë™]K›ÜXÚ]HHXÝ™Ù]
ÐHŠHNÂˆÛÛœÝ˜]Ò[šÓ\ÝÈHXÝ™Ù]\œ˜^J’[šÓ\ÝŠNÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J˜]Ò[šÓ\ÝÊJHÂˆ™]\›ŽÂˆBˆ›Üˆ
]HHZHH˜]Ò[šÓ\ÝË›[™ÝÈHZNÈ
ÊÚJHÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J˜]Ò[šÓ\ÝÖÚWJJHÂˆÛÛ[YNÂˆBˆÛÛœÝ[šÓ\ÝH™]È›Ø]Ì\œ˜^J˜]Ò[šÓ\ÝÖÚWK›[™Ý
NÂˆ\Ë™]Kš[šÓ\ÝËœ\Ú
[šÓ\Ý
NÂˆ›Üˆ
]ˆHšˆH˜]Ò[šÓ\ÝÖÚWK›[™ÝÈˆšŽÈˆ
ÏHŠHÂˆÛÛœÝH™Y‹™™]ÚY”™YŠ˜]Ò[šÓ\ÝÖÚWVÚ—JKˆHH™Y‹™™]ÚY”™YŠ˜]Ò[šÓ\ÝÖÚWVÚˆ
ÈWJNÂˆYˆ
\[ÙˆOOH›[X™\ˆˆ	‰ˆ\[ÙˆHOOH›[X™\ˆŠHÂˆ[šÓ\ÝÚ—HHÂˆ[šÓ\ÝÚˆ
ÈWHHNÂˆBˆBˆBˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆÛÛœÝÝ›ÚÙPÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌJNÂˆÛÛœÝÝ›ÚÙP[HHXÝ™Ù]
ÐHŠNÂˆÛÛœÝ›Ü™\•ÚYH\Ë˜›Ü™\”Ý[KÚYKˆ›Ü™\Y\ÝHˆ
ˆ›Ü™\•ÚYÂˆÛÛœÝ˜›ÞHÒ[™š[š]K[™š[š]KR[™š[š]KR[™š[š]WNÂˆ›Üˆ
ÛÛœÝ[šÓ\ÝÙˆ\Ë™]Kš[šÓ\ÝÊHÂˆ›Üˆ
]HHZHH[šÓ\Ý›[™ÝÈHZNÈH
ÏHŠHÂˆ][œ™XÝ›Ý[™[™Ð›Þ
[šÓ\ÝÚWHH›Ü™\Y\Ý[šÓ\ÝÚH
ÈWHH›Ü™\Y\Ý[šÓ\ÝÚWH
È›Ü™\Y\Ý[šÓ\ÝÚH
ÈWH
È›Ü™\Y\Ý˜›Þ
NÂˆBˆBˆYˆ
U][š[\œÙXÝ
\Ëœ™XÝ[™ÛK˜›Þ
JHÂˆ\Ëœ™XÝ[™ÛHH˜›ÞÂˆBˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜Nˆ	Ø›Ü™\•ÚYHØˆÝ›ÚÙPÛÛÜ‹ˆÝ›ÚÙP[KˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆ›Üˆ
ÛÛœÝ[šÓ\ÝÙˆ\Ë™]Kš[šÓ\ÝÊHÂˆ›Üˆ
]HHZHH[šÓ\Ý›[™ÝÈHZNÈH
ÏHŠHÂˆY™™\‹œ\Ú
	Ú[šÓ\ÝÚW_H	Ú[šÓ\ÝÚH
ÈW_H	ÚHOOHÈ›Hˆˆ›ŸX
NÂˆBˆY™™\‹œ\Ú
”ÈŠNÂˆBˆ™]\›ˆÜÚ[ÖÌKÚ[ÖÍ×KÚ[ÖÌ—KÚ[ÖÌ×WNÂˆBˆJNÂˆBˆBˆÝ]XÈÜ™X]S™]ÑXÝ
[››Ý][Û‹™Y‹Âˆ\™Y‹ˆ\ˆJHÂˆÛÛœÝÂˆÛ[››Ý][Û‹ˆÛÛÜ‹ˆ]KˆÜXÚ]Kˆ]ËˆÝ][™\Ëˆ™XÝˆ›Ý][Û‹ˆXÚÛ™\ÜËˆ\Ù\‚ˆHH[››Ý][ÛŽÂˆÛÛœÝ[šÈHÛ[››Ý][Ûˆ™]ÈXÝ
™YŠNÂˆ[šËœÙ]Y“›Ý^\ÝÊ•\H‹˜[YK™Ù]
[››ÝŠJNÂˆ[šËœÙ]Y“›Ý^\ÝÊ”ÝX\H‹˜[YK™Ù]
’[šÈŠJNÂˆ[šËœÙ]
Û[››Ý][ÛˆÈ“HˆˆÜ™X][Û‘]H‹‰ÙÙ][ÙYšXØ][Û‘]J]J_X
NÂˆ[šËœÙ]Y\œ˜^J”™XÝ‹™XÝ
NÂˆ[šËœÙ]Y\œ˜^J’[šÓ\Ý‹Ý][™\ÏËœÚ[È]ÏËœÚ[ÊNÂˆ[šËœÙ]Y“›Ý^\ÝÊ‘ˆ‹
NÂˆ[šËœÙ]Y“[X™\Š”›Ý]H‹›Ý][ÛŠNÂˆ[šËœÙ]Y‘Yš[™Y
•‹Ýš[™ÕÐ\ØÚZSÜ•UŒM‘J\Ù\ŠJNÂˆYˆ
Ý][™\ÊHÂˆ[šËœÙ]Y“˜[YJ’U‹’[šÒYÚYÚŠNÂˆBˆYˆ
XÚÛ™\ÜÈˆ
HÂˆÛÛœÝœÈH™]ÈXÝ
™YŠNÂˆ[šËœÙ]
”È‹œÊNÂˆœËœÙ]
•È‹XÚÛ™\ÜÊNÂˆBˆ[šËœÙ]Y\œ˜^JÈ‹Ù]ÛÛÜ\œ˜^JÛÛÜŠJNÂˆ[šËœÙ]Y“[X™\ŠÐH‹ÜXÚ]JNÂˆYˆ
\\™YŠHÂˆÛÛœÝˆH™]ÈXÝ
™YŠNÂˆ[šËœÙ]
T‹ŠNÂˆ‹œÙ]
“ˆ‹\™Yˆ\
NÂˆBˆ™]\›ˆ[šÎÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]S™]Ð\X\˜[˜ÙTÝ™X[J[››Ý][Û‹™Y‹\˜[\ÊHÂˆYˆ
[››Ý][Û‹›Ý][™\ÊHÂˆ™]\›ˆ\Ë˜Ü™X]S™]Ð\X\˜[˜ÙTÝ™X[Q›Ü’YÚYÚ
[››Ý][Û‹™Y‹\˜[\ÊNÂˆBˆÛÛœÝÂˆÛÛÜ‹ˆ™XÝˆ]ËˆXÚÛ™\ÜËˆÜXÚ]BˆHH[››Ý][ÛŽÂˆYˆ
XÛÛÜŠHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ\X\˜[˜ÙPY™™\ˆHØ	ÝXÚÛ™\ÜßHÈHˆH˜	ÙÙ]ÛÛÜŠÛÛÜ‹˜[ÙJ_XNÂˆYˆ
ÜXÚ]HOOHJHÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
‹ÔŒÜÈŠNÂˆBˆ›Üˆ
ÛÛœÝÝ][™HÙˆ]Ë›[™\ÊHÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
	Û[X™\•ÔÝš[™ÊÝ][™VÍJ_H	Û[X™\•ÔÝš[™ÊÝ][™VÍWJ_HX
NÂˆ›Üˆ
]HH‹ZHHÝ][™K›[™ÝÈHZNÈH
ÏHŠHÂˆYˆ
\Ó˜SŠÝ][™VÚWJJHÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
	Û[X™\•ÔÝš[™ÊÝ][™VÚH
ÈJ_H	Û[X™\•ÔÝš[™ÊÝ][™VÚH
ÈWJ_H
NÂˆH[ÙHÂˆÛÛœÝØÌ^Ì^KÌžÌžKWHHÝ][™KœÛXÙJKH
ÈŠNÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
ØÌ^Ì^KÌžÌžKWK›X\
[X™\•ÔÝš[™ÊKš›Ú[ŠˆŠH
ÈˆÈŠNÂˆBˆBˆYˆ
Ý][™K›[™ÝOOHŠHÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
	Û[X™\•ÔÝš[™ÊÝ][™VÍJ_H	Û[X™\•ÔÝš[™ÊÝ][™VÍWJ_H
NÂˆBˆBˆ\X\˜[˜ÙPY™™\‹œ\Ú
”ÈŠNÂˆÛÛœÝ\X\˜[˜ÙHH\X\˜[˜ÙPY™™\‹š›Ú[Š—ˆŠNÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[QXÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
‘›Ü›U\H‹JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ•\H‹–Øš™XÝŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
›Þ‹™XÝ
NÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
“[™Ý‹\X\˜[˜ÙK›[™Ý
NÂˆYˆ
ÜXÚ]HOOHJHÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH™]ÈXÝ
™YŠNÂˆÛÛœÝ^ÔÝ]HH™]ÈXÝ
™YŠNÂˆÛÛœÝŒH™]ÈXÝ
™YŠNÂˆŒœÙ]
ÐH‹ÜXÚ]JNÂˆŒœÙ]Y“˜[YJ•\H‹‘^ÔÝ]HŠNÂˆ^ÔÝ]KœÙ]
”Œ‹Œ
NÂˆ™\ÛÝ\˜Ù\ËœÙ]
‘^ÔÝ]H‹^ÔÝ]JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
”™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\ÊNÂˆBˆÛÛœÝ\H™]ÈÝš[™ÔÝ™X[J\X\˜[˜ÙJNÂˆ\™XÝH\X\˜[˜ÙTÝ™X[QXÝÂˆ™]\›ˆ\ÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]S™]Ð\X\˜[˜ÙTÝ™X[Q›Ü’YÚYÚ
[››Ý][Û‹™Y‹\˜[\ÊHÂˆÛÛœÝÂˆÛÛÜ‹ˆ™XÝˆÝ][™\ÎˆÂˆÝ][™BˆKˆÜXÚ]BˆHH[››Ý][ÛŽÂˆYˆ
XÛÛÜŠHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ\X\˜[˜ÙPY™™\ˆHØ	ÙÙ]ÛÛÜŠÛÛÜ‹YJ_X‹ÔŒÜÈ—NÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
	Û[X™\•ÔÝš[™ÊÝ][™VÍJ_H	Û[X™\•ÔÝš[™ÊÝ][™VÍWJ_HX
NÂˆ›Üˆ
]HH‹ZHHÝ][™K›[™ÝÈHZNÈH
ÏHŠHÂˆYˆ
\Ó˜SŠÝ][™VÚWJJHÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
	Û[X™\•ÔÝš[™ÊÝ][™VÚH
ÈJ_H	Û[X™\•ÔÝš[™ÊÝ][™VÚH
ÈWJ_H
NÂˆH[ÙHÂˆÛÛœÝØÌ^Ì^KÌžÌžKWHHÝ][™KœÛXÙJKH
ÈŠNÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
ØÌ^Ì^KÌžÌžKWK›X\
[X™\•ÔÝš[™ÊKš›Ú[ŠˆŠH
ÈˆÈŠNÂˆBˆBˆ\X\˜[˜ÙPY™™\‹œ\Ú
šˆŠNÂˆÛÛœÝ\X\˜[˜ÙHH\X\˜[˜ÙPY™™\‹š›Ú[Š—ˆŠNÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[QXÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
‘›Ü›U\H‹JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ•\H‹–Øš™XÝŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
›Þ‹™XÝ
NÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
“[™Ý‹\X\˜[˜ÙK›[™Ý
NÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH™]ÈXÝ
™YŠNÂˆÛÛœÝ^ÔÝ]HH™]ÈXÝ
™YŠNÂˆ™\ÛÝ\˜Ù\ËœÙ]
‘^ÔÝ]H‹^ÔÝ]JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
”™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\ÊNÂˆÛÛœÝŒH™]ÈXÝ
™YŠNÂˆ^ÔÝ]KœÙ]
”Œ‹Œ
NÂˆŒœÙ]Y“˜[YJ“H‹“][\HŠNÂˆYˆ
ÜXÚ]HOOHJHÂˆŒœÙ]
˜ØH‹ÜXÚ]JNÂˆŒœÙ]Y“˜[YJ•\H‹‘^ÔÝ]HŠNÂˆBˆÛÛœÝ\H™]ÈÝš[™ÔÝ™X[J\X\˜[˜ÙJNÂˆ\™XÝH\X\˜[˜ÙTÝ™X[QXÝÂˆ™]\›ˆ\ÂˆBŸB˜Û\ÜÈYÚYÚ[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K’QÒQÒÂˆ\Ë™]Kš\ÑY]X›HH]\Ë™]K››ÒSÂˆ\Ë™]K››ÒSH˜[ÙNÂˆ\Ë™]K›ÜXÚ]HHXÝ™Ù]
ÐHŠHNÂˆÛÛœÝ]XYÚ[ÈH\Ë™]Kœ]XYÚ[ÈHÙ]]XYÚ[ÊXÝ[
NÂˆYˆ
]XYÚ[ÊHÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH\Ë˜\X\˜[˜ÙOË™XÝ™Ù]
”™\ÛÝ\˜Ù\ÈŠNÂˆYˆ
]\Ë˜\X\˜[˜ÙH\™\ÛÝ\˜Ù\ÏËš\Ê‘^ÔÝ]HŠJHÂˆYˆ
\Ë˜\X\˜[˜ÙJHÂˆØ\›Š’YÚYÚ[››Ý][ÛˆHYÛ›Üš[™ÈZ[Z[ˆ\X\˜[˜ÙHÝ™X[KˆŠNÂˆBˆÛÛœÝš[ÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌKKJNÂˆÛÛœÝš[[HHXÝ™Ù]
ÐHŠNÂˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆš[ÛÛÜ‹ˆ›[™[ÙNˆ“][\H‹ˆš[[KˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆY™™\‹œ\Ú
	ÜÚ[ÖÌ_H	ÜÚ[ÖÌW_HX	ÜÚ[ÖÌ—_H	ÜÚ[ÖÌ×_H	ÜÚ[ÖÍ—_H	ÜÚ[ÖÍ×_H	ÜÚ[ÖÍ_H	ÜÚ[ÖÍW_H™ˆŠNÂˆ™]\›ˆÜÚ[ÖÌKÚ[ÖÍ×KÚ[ÖÌ—KÚ[ÖÌ×WNÂˆBˆJNÂˆBˆH[ÙHÂˆ\Ë™]KœÜ\™YˆH[ÂˆBˆBˆÙ]Ý™\›^\Õ^ÛÛ[

HÂˆ™]\›ˆYNÂˆBˆÝ]XÈÜ™X]S™]ÑXÝ
[››Ý][Û‹™Y‹Âˆ\™Y‹ˆ\ˆJHÂˆÛÛœÝÂˆÛÛÜ‹ˆ]KˆÛ[››Ý][Û‹ˆÜXÚ]Kˆ™XÝˆ›Ý][Û‹ˆ\Ù\‹ˆ]XYÚ[ÂˆHH[››Ý][ÛŽÂˆÛÛœÝYÚYÚHÛ[››Ý][Ûˆ™]ÈXÝ
™YŠNÂˆYÚYÚœÙ]Y“›Ý^\ÝÊ•\H‹˜[YK™Ù]
[››ÝŠJNÂˆYÚYÚœÙ]Y“›Ý^\ÝÊ”ÝX\H‹˜[YK™Ù]
’YÚYÚŠJNÂˆYÚYÚœÙ]
Û[››Ý][ÛˆÈ“HˆˆÜ™X][Û‘]H‹‰ÙÙ][ÙYšXØ][Û‘]J]J_X
NÂˆYÚYÚœÙ]Y\œ˜^J”™XÝ‹™XÝ
NÂˆYÚYÚœÙ]Y“›Ý^\ÝÊ‘ˆ‹
NÂˆYÚYÚœÙ]Y“›Ý^\ÝÊ›Ü™\ˆ‹ÌJNÂˆYÚYÚœÙ]Y“[X™\Š”›Ý]H‹›Ý][ÛŠNÂˆYÚYÚœÙ]Y\œ˜^J”]XYÚ[È‹]XYÚ[ÊNÂˆYÚYÚœÙ]Y\œ˜^JÈ‹Ù]ÛÛÜ\œ˜^JÛÛÜŠJNÂˆYÚYÚœÙ]Y“[X™\ŠÐH‹ÜXÚ]JNÂˆYÚYÚœÙ]Y‘Yš[™Y
•‹Ýš[™ÕÐ\ØÚZSÜ•UŒM‘J\Ù\ŠJNÂˆYˆ
\™Yˆ\
HÂˆÛÛœÝˆH™]ÈXÝ
™YŠNÂˆYÚYÚœÙ]
T‹ŠNÂˆ‹œÙ]
“ˆ‹\™Yˆ\
NÂˆBˆ™]\›ˆYÚYÚÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]S™]Ð\X\˜[˜ÙTÝ™X[J[››Ý][Û‹™Y‹\˜[\ÊHÂˆÛÛœÝÂˆÛÛÜ‹ˆ™XÝˆÝ][™\ËˆÜXÚ]BˆHH[››Ý][ÛŽÂˆYˆ
XÛÛÜŠHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ\X\˜[˜ÙPY™™\ˆHØ	ÙÙ]ÛÛÜŠÛÛÜ‹YJ_X‹ÔŒÜÈ—NÂˆÛÛœÝY™™\ˆH×NÂˆ›Üˆ
ÛÛœÝÝ][™HÙˆÝ][™\ÊHÂˆY™™\‹›[™ÝHÂˆY™™\‹œ\Ú
	Û[X™\•ÔÝš[™ÊÝ][™VÌJ_H	Û[X™\•ÔÝš[™ÊÝ][™VÌWJ_HX
NÂˆ›Üˆ
]HH‹ZHHÝ][™K›[™ÝÈHZNÈH
ÏHŠHÂˆY™™\‹œ\Ú
	Û[X™\•ÔÝš[™ÊÝ][™VÚWJ_H	Û[X™\•ÔÝš[™ÊÝ][™VÚH
ÈWJ_H
NÂˆBˆY™™\‹œ\Ú
šŠNÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
Y™™\‹š›Ú[Š—ˆŠJNÂˆBˆ\X\˜[˜ÙPY™™\‹œ\Ú
™ŠˆŠNÂˆÛÛœÝ\X\˜[˜ÙHH\X\˜[˜ÙPY™™\‹š›Ú[Š—ˆŠNÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[QXÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
‘›Ü›U\H‹JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ•\H‹–Øš™XÝŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
›Þ‹™XÝ
NÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
“[™Ý‹\X\˜[˜ÙK›[™Ý
NÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH™]ÈXÝ
™YŠNÂˆÛÛœÝ^ÔÝ]HH™]ÈXÝ
™YŠNÂˆ™\ÛÝ\˜Ù\ËœÙ]
‘^ÔÝ]H‹^ÔÝ]JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
”™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\ÊNÂˆÛÛœÝŒH™]ÈXÝ
™YŠNÂˆ^ÔÝ]KœÙ]
”Œ‹Œ
NÂˆŒœÙ]Y“˜[YJ“H‹“][\HŠNÂˆYˆ
ÜXÚ]HOOHJHÂˆŒœÙ]
˜ØH‹ÜXÚ]JNÂˆŒœÙ]Y“˜[YJ•\H‹‘^ÔÝ]HŠNÂˆBˆÛÛœÝ\H™]ÈÝš[™ÔÝ™X[J\X\˜[˜ÙJNÂˆ\™XÝH\X\˜[˜ÙTÝ™X[QXÝÂˆ™]\›ˆ\ÂˆBŸB˜Û\ÜÈ[™\›[™P[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K•S‘T“S‘NÂˆÛÛœÝ]XYÚ[ÈH\Ë™]Kœ]XYÚ[ÈHÙ]]XYÚ[ÊXÝ[
NÂˆYˆ
]XYÚ[ÊHÂˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆÛÛœÝÝ›ÚÙPÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌJNÂˆÛÛœÝÝ›ÚÙP[HHXÝ™Ù]
ÐHŠNÂˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜Nˆ–×HMÌHÈ‹ˆÝ›ÚÙPÛÛÜ‹ˆÝ›ÚÙP[KˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆY™™\‹œ\Ú
	ÜÚ[ÖÍ_H	ÜÚ[ÖÍWH
ÈKŒßHX	ÜÚ[ÖÍ—_H	ÜÚ[ÖÍ×H
ÈKŒßH”ÈŠNÂˆ™]\›ˆÜÚ[ÖÌKÚ[ÖÍ×KÚ[ÖÌ—KÚ[ÖÌ×WNÂˆBˆJNÂˆBˆH[ÙHÂˆ\Ë™]KœÜ\™YˆH[ÂˆBˆBˆÙ]Ý™\›^\Õ^ÛÛ[

HÂˆ™]\›ˆYNÂˆBŸB˜Û\ÜÈÜ]ZYÙÛP[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K”ÔURQÑÓNÂˆÛÛœÝ]XYÚ[ÈH\Ë™]Kœ]XYÚ[ÈHÙ]]XYÚ[ÊXÝ[
NÂˆYˆ
]XYÚ[ÊHÂˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆÛÛœÝÝ›ÚÙPÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌJNÂˆÛÛœÝÝ›ÚÙP[HHXÝ™Ù]
ÐHŠNÂˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜Nˆ–×HHÈ‹ˆÝ›ÚÙPÛÛÜ‹ˆÝ›ÚÙP[KˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆÛÛœÝHH
Ú[ÖÌWHHÚ[ÖÍWJHÈŽÂˆ]ÚYHNÂˆ]HÚ[ÖÍNÂˆÛÛœÝHHÚ[ÖÍWNÂˆÛÛœÝ[™HÚ[ÖÍ—NÂˆY™™\‹œ\Ú
	ÞH	ÞH
ÈÚYHX
NÂˆÈÂˆ
ÏHŽÂˆÚYHÚYOOHÈHˆÂˆY™™\‹œ\Ú
	ÞH	ÞH
ÈÚYH
NÂˆHÚ[H
[™
NÂˆY™™\‹œ\Ú
”ÈŠNÂˆ™]\›ˆÜÚ[ÖÍKHHˆ
ˆK[™H
Èˆ
ˆWNÂˆBˆJNÂˆBˆH[ÙHÂˆ\Ë™]KœÜ\™YˆH[ÂˆBˆBˆÙ]Ý™\›^\Õ^ÛÛ[

HÂˆ™]\›ˆYNÂˆBŸB˜Û\ÜÈÝšZÙSÝ][››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K”Õ’RÑSÕUÂˆÛÛœÝ]XYÚ[ÈH\Ë™]Kœ]XYÚ[ÈHÙ]]XYÚ[ÊXÝ[
NÂˆYˆ
]XYÚ[ÊHÂˆYˆ
]\Ë˜\X\˜[˜ÙJHÂˆÛÛœÝÝ›ÚÙPÛÛÜˆHÙ]ÛÛÜ\œ˜^J\Ë˜ÛÛÜ‹ÌJNÂˆÛÛœÝÝ›ÚÙP[HHXÝ™Ù]
ÐHŠNÂˆ\Ë—ÜÙ]Y˜][\X\˜[˜ÙJÂˆ™Y‹ˆ^˜Nˆ–×HHÈ‹ˆÝ›ÚÙPÛÛÜ‹ˆÝ›ÚÙP[KˆÚ[ÐØ[˜XÚÎˆ
Y™™\‹Ú[ÊHOˆÂˆY™™\‹œ\Ú
	ÊÚ[ÖÌH
ÈÚ[ÖÍJHÈŸH
È	ÊÚ[ÖÌWH
ÈÚ[ÖÍWJHÈŸHX	ÊÚ[ÖÌ—H
ÈÚ[ÖÍ—JHÈŸH
È	ÊÚ[ÖÌ×H
ÈÚ[ÖÍ×JHÈŸH”ÈŠNÂˆ™]\›ˆÜÚ[ÖÌKÚ[ÖÍ×KÚ[ÖÌ—KÚ[ÖÌ×WNÂˆBˆJNÂˆBˆH[ÙHÂˆ\Ë™]KœÜ\™YˆH[ÂˆBˆBˆÙ]Ý™\›^\Õ^ÛÛ[

HÂˆ™]\›ˆYNÂˆBŸB˜Û\ÜÈÝ[\[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÜØ]™Y\ÓÝÛØ[˜\ÈH[ÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K”ÕSTÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]Kš\ÑY]X›HH]\Ë™]K››ÒSÂˆ\Ë™]K››ÒSH˜[ÙNÂˆBˆ]\Ý™UšY]ÙYÚ[‘Y][™Ê\ÑY][™Ë[ÙYšYYYÈH[
HÂˆYˆ
\ÑY][™ÊHÂˆYˆ
]\Ë™]Kš\ÑY]X›JHÂˆ™]\›ˆYNÂˆBˆ\ËˆÜØ]™Y\ÓÝÛØ[˜\ÈÏÏH\Ë™]Kš\ÓÝÛØ[˜\ÎÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈHYNÂˆ™]\›ˆYNÂˆBˆYˆ
\ËˆÜØ]™Y\ÓÝÛØ[˜\ÈOOH[
HÂˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\ËˆÜØ]™Y\ÓÝÛØ[˜\ÎÂˆ\ËˆÜØ]™Y\ÓÝÛØ[˜\ÈH[ÂˆBˆ™]\›ˆ[[ÙYšYYYÏËš\Ê\Ë™]KšY
NÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]R[XYÙJš]X\™YŠHÂˆÛÛœÝÂˆÚYˆZYÚˆHHš]X\ÂˆÛÛœÝØ[˜\ÈH™]ÈÙ™œØÜ™Y[Ø[˜\ÊÚYZYÚ
NÂˆÛÛœÝÝHØ[˜\Ë™Ù]ÛÛ^
Œ™‹Âˆ[NˆYBˆJNÂˆÝ™˜]Ò[XYÙJš]X\
NÂˆÛÛœÝ]HHÝ™Ù][XYÙQ]JÚYZYÚ
K™]NÂˆÛÛœÝYŒÌˆH™]ÈZ[Ì\œ˜^J]K˜Y™™\ŠNÂˆÛÛœÝ\Ð[HHYŒÌ‹œÛÛYJ™X]\™U\Ýš\Ó]Q[™X[ˆÈOˆˆOOH™ˆˆOˆ
	ˆ™ŠHOOH™ŠNÂˆYˆ
\Ð[JHÂˆÝ™š[Ý[HHÚ]HŽÂˆÝ™š[™XÝ
ÚYZYÚ
NÂˆÝ™˜]Ò[XYÙJš]X\
NÂˆBˆÛÛœÝœYÐY™™\”›ÛZ\ÙHHØ[˜\Ë˜ÛÛ™\Ð›ØŠÂˆ\Nˆš[XYÙKÚœYÈ‹ˆ]X[]NˆBˆJK[Š›ØˆOˆ›Ø‹˜\œ˜^PY™™\Š
JNÂˆÛÛœÝØš™XÝ˜[YHH˜[YK™Ù]
–Øš™XÝŠNÂˆÛÛœÝ[XYÙS˜[YHH˜[YK™Ù]
’[XYÙHŠNÂˆÛÛœÝ[XYÙHH™]ÈXÝ
™YŠNÂˆ[XYÙKœÙ]
•\H‹Øš™XÝ˜[YJNÂˆ[XYÙKœÙ]
”ÝX\H‹[XYÙS˜[YJNÂˆ[XYÙKœÙ]
š]Ô\ÛÛ\Û™[‹
NÂˆ[XYÙKœÙ]Y“˜[YJÛÛÜ”ÜXÙH‹‘]šXÙT‘ÐˆŠNÂˆ[XYÙKœÙ]Y“˜[YJ‘š[\ˆ‹‘ÕXÛÙHŠNÂˆ[XYÙKœÙ]
›Þ‹ÌÚYZYÚJNÂˆ[XYÙKœÙ]
•ÚY‹ÚY
NÂˆ[XYÙKœÙ]
’ZYÚ‹ZYÚ
NÂˆ]ÛX\ÚÔÝ™X[HH[ÂˆYˆ
\Ð[JHÂˆÛÛœÝ[PY™™\ˆH™]ÈZ[\œ˜^JYŒÌ‹›[™Ý
NÂˆYˆ
™X]\™U\Ýš\Ó]Q[™X[ŠHÂˆ›Üˆ
]HHZHHYŒÌ‹›[™ÝÈHZNÈJÊÊHÂˆ[PY™™\–ÚWHHYŒÌ–ÚWHˆÂˆBˆH[ÙHÂˆ›Üˆ
]HHZHHYŒÌ‹›[™ÝÈHZNÈJÊÊHÂˆ[PY™™\–ÚWHHYŒÌ–ÚWH	ˆ™ŽÂˆBˆBˆÛÛœÝÛX\ÚÈH™]ÈXÝ
™YŠNÂˆÛX\ÚËœÙ]
•\H‹Øš™XÝ˜[YJNÂˆÛX\ÚËœÙ]
”ÝX\H‹[XYÙS˜[YJNÂˆÛX\ÚËœÙ]
š]Ô\ÛÛ\Û™[‹
NÂˆÛX\ÚËœÙ]Y“˜[YJÛÛÜ”ÜXÙH‹‘]šXÙQÜ˜^HŠNÂˆÛX\ÚËœÙ]
•ÚY‹ÚY
NÂˆÛX\ÚËœÙ]
’ZYÚ‹ZYÚ
NÂˆÛX\ÚÔÝ™X[HH™]ÈÝ™X[J[PY™™\‹ÛX\ÚÊNÂˆBˆÛÛœÝ[XYÙTÝ™X[HH™]ÈÝ™X[J]ØZ]œYÐY™™\”›ÛZ\ÙK[XYÙJNÂˆ™]\›ˆÂˆ[XYÙTÝ™X[KˆÛX\ÚÔÝ™X[KˆÚYˆZYÚˆNÂˆBˆÝ]XÈÜ™X]S™]ÑXÝ
[››Ý][Û‹™Y‹Âˆ\™Y‹ˆ\ˆJHÂˆÛÛœÝÂˆ]KˆÛ[››Ý][Û‹ˆ™XÝˆ›Ý][Û‹ˆ\Ù\‚ˆHH[››Ý][ÛŽÂˆÛÛœÝÝ[\HÛ[››Ý][Ûˆ™]ÈXÝ
™YŠNÂˆÝ[\œÙ]Y“›Ý^\ÝÊ•\H‹˜[YK™Ù]
[››ÝŠJNÂˆÝ[\œÙ]Y“›Ý^\ÝÊ”ÝX\H‹˜[YK™Ù]
”Ý[\ŠJNÂˆÝ[\œÙ]
Û[››Ý][ÛˆÈ“HˆˆÜ™X][Û‘]H‹‰ÙÙ][ÙYšXØ][Û‘]J]J_X
NÂˆÝ[\œÙ]Y\œ˜^J”™XÝ‹™XÝ
NÂˆÝ[\œÙ]Y“›Ý^\ÝÊ‘ˆ‹
NÂˆÝ[\œÙ]Y“›Ý^\ÝÊ›Ü™\ˆ‹ÌJNÂˆÝ[\œÙ]Y“[X™\Š”›Ý]H‹›Ý][ÛŠNÂˆÝ[\œÙ]Y‘Yš[™Y
•‹Ýš[™ÕÐ\ØÚZSÜ•UŒM‘J\Ù\ŠJNÂˆYˆ
\™Yˆ\
HÂˆÛÛœÝˆH™]ÈXÝ
™YŠNÂˆÝ[\œÙ]
T‹ŠNÂˆ‹œÙ]
“ˆ‹\™Yˆ\
NÂˆBˆ™]\›ˆÝ[\ÂˆBˆÝ]XÈ\Þ[˜ÈØÜ™X]S™]Ð\X\˜[˜ÙTÝ™X[Q›Ü‘˜]Ú[™Ê[››Ý][Û‹™YŠHÂˆÛÛœÝÂˆ\™PÛÛÝ\œËˆÛÛÜ‹ˆ™XÝˆ[™\ËˆXÚÛ™\ÜÂˆHH[››Ý][ÛŽÂˆYˆ
XÛÛÜŠHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ\X\˜[˜ÙPY™™\ˆHØ	ÝXÚÛ™\ÜßHÈHˆH˜	ÙÙ]ÛÛÜŠÛÛÜ‹\™PÛÛÝ\œÊ_XNÂˆ›Üˆ
ÛÛœÝ[™HÙˆ[™\ÊHÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
	Û[X™\•ÔÝš[™Ê[™VÍJ_H	Û[X™\•ÔÝš[™Ê[™VÍWJ_HX
NÂˆ›Üˆ
]HH‹ZHH[™K›[™ÝÈHZNÈH
ÏHŠHÂˆYˆ
\Ó˜SŠ[™VÚWJJHÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
	Û[X™\•ÔÝš[™Ê[™VÚH
ÈJ_H	Û[X™\•ÔÝš[™Ê[™VÚH
ÈWJ_H
NÂˆH[ÙHÂˆÛÛœÝØÌ^Ì^KÌžÌžKWHH[™KœÛXÙJKH
ÈŠNÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
ØÌ^Ì^KÌžÌžKWK›X\
[X™\•ÔÝš[™ÊKš›Ú[ŠˆŠH
ÈˆÈŠNÂˆBˆBˆYˆ
[™K›[™ÝOOHŠHÂˆ\X\˜[˜ÙPY™™\‹œ\Ú
	Û[X™\•ÔÝš[™Ê[™VÍJ_H	Û[X™\•ÔÝš[™Ê[™VÍWJ_H
NÂˆBˆBˆ\X\˜[˜ÙPY™™\‹œ\Ú
\™PÛÛÝ\œÈÈ‘ˆˆˆ”ÈŠNÂˆÛÛœÝ\X\˜[˜ÙHH\X\˜[˜ÙPY™™\‹š›Ú[Š—ˆŠNÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[QXÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
‘›Ü›U\H‹JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ•\H‹–Øš™XÝŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
›Þ‹™XÝ
NÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
“[™Ý‹\X\˜[˜ÙK›[™Ý
NÂˆÛÛœÝ\H™]ÈÝš[™ÔÝ™X[J\X\˜[˜ÙJNÂˆ\™XÝH\X\˜[˜ÙTÝ™X[QXÝÂˆ™]\›ˆ\ÂˆBˆÝ]XÈ\Þ[˜ÈÜ™X]S™]Ð\X\˜[˜ÙTÝ™X[J[››Ý][Û‹™Y‹\˜[\ÊHÂˆYˆ
[››Ý][Û‹›Û[››Ý][ÛŠHÂˆ™]\›ˆ[ÂˆBˆYˆ
[››Ý][Û‹š\ÔÚYÛ˜]\™JHÂˆ™]\›ˆ\ËˆØÜ™X]S™]Ð\X\˜[˜ÙTÝ™X[Q›Ü‘˜]Ú[™Ê[››Ý][Û‹™YŠNÂˆBˆÛÛœÝÂˆ›Ý][Û‚ˆHH[››Ý][ÛŽÂˆÛÛœÝÂˆ[XYÙT™Y‹ˆÚYˆZYÚˆHH\˜[\Ëš[XYÙNÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH™]ÈXÝ
™YŠNÂˆÛÛœÝØš™XÝH™]ÈXÝ
™YŠNÂˆ™\ÛÝ\˜Ù\ËœÙ]
–Øš™XÝ‹Øš™XÝ
NÂˆØš™XÝœÙ]
’[L‹[XYÙT™YŠNÂˆÛÛœÝ\X\˜[˜ÙHHH	ÝÚYH	ÚZYÚHÛHÒ[LÈXÂˆÛÛœÝ\X\˜[˜ÙTÝ™X[QXÝH™]ÈXÝ
™YŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
‘›Ü›U\H‹JNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ”ÝX\H‹‘›Ü›HŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]Y“˜[YJ•\H‹–Øš™XÝŠNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
›Þ‹ÌÚYZYÚJNÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
”™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\ÊNÂˆYˆ
›Ý][ÛŠHÂˆÛÛœÝX]š^HÙ]›Ý][Û“X]š^
›Ý][Û‹ÚYZYÚ
NÂˆ\X\˜[˜ÙTÝ™X[QXÝœÙ]
“X]š^‹X]š^
NÂˆBˆÛÛœÝ\H™]ÈÝš[™ÔÝ™X[J\X\˜[˜ÙJNÂˆ\™XÝH\X\˜[˜ÙTÝ™X[QXÝÂˆ™]\›ˆ\ÂˆBŸB˜Û\ÜÈš[P]XÚY[[››Ý][Ûˆ^[™ÈX\šÝ\[››Ý][ÛˆÂˆÛÛœÝXÝÜŠ\˜[\ÊHÂˆÝ\\Š\˜[\ÊNÂˆÛÛœÝÂˆXÝˆ™Y‚ˆHH\˜[\ÎÂˆÛÛœÝš[HH™]Èš[TÜXÊXÝ™Ù]
‘”ÈŠK™YŠNÂˆ\Ë™]K˜[››Ý][Û•\HH[››Ý][Û•\K‘’SPUPÒQS•Âˆ\Ë™]Kš\ÓÝÛØ[˜\ÈH\Ë™]K››Ô›Ý]NÂˆ\Ë™]K››ÒSH˜[ÙNÂˆ\Ë™]K™š[HHš[KœÙ\šX[^˜X›NÂˆÛÛœÝ˜[YHHXÝ™Ù]
“˜[YHŠNÂˆ\Ë™]K›˜[YHH˜[YH[œÝ[˜Ù[Ùˆ˜[YHÈÝš[™ÕÔ”Ýš[™Ê˜[YK›˜[YJHˆ”\Ú[ˆŽÂˆÛÛœÝš[[HHXÝ™Ù]
˜ØHŠNÂˆ\Ë™]K™š[[HH\[Ùˆš[[HOOH›[X™\ˆˆ	‰ˆš[[HH	‰ˆš[[HHHÈš[[Hˆ[ÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KØØ[Ý[]WÛYKšœÂ‚˜ÛÛœÝTSTÈHÂˆÙ]Š
HÂˆ™]\›ˆÚYÝÊ\Ëœˆ‹™]ÈZ[\œ˜^JÍËL‹MËŒ‹ËL‹MËŒ‹ËL‹MËŒ‹ËL‹MËŒ‹KKMŒKKMŒKKMŒKKMŒLKM‹ŒËLKM‹ŒËLKM‹ŒËLKM‹ŒË‹LMKŒK‹LMKŒK‹LMKŒK‹LMKŒWJJNÂˆKˆÙ]Ê
HÂˆ™]\›ˆÚYÝÊ\ËšÈ‹™]È[Ì\œ˜^JËMŽÍŽLÍ‹LÎMMN‹ŒŒLNNKLLLLÌÌLMÍNMËLŒ‹LMÌÌŒÌLÍKMMÌNNËMÍÌÍMM‹LNMNMMËMŒŒËLNNLMŒ‹NŒÍŽ‹MÍLLKLMLŒŒŽLLŒÍLÍLÌŽKLMMÎMLLLLŽMLMŒÌ‹ÍÌMÍÌLËLÍÌÎMÌÌ‹MÌMMNŽLKÎMŒËMŒÎÌÍKMMLÍÎMŽÎLLNNÍŽLLNÌÍŒÎMŒKLMŒÍLÌMLKLMŽMËMLMÍÎMÌÍLÌŽÌËLNLŒÍÌÍLÍÎMNLŒŒMÍŒËNÎLÌMŒ‹LÍLÌMMM‹LMLÌNLŒŒLÌŽLÌÍLËLMMMMÍŒÌ‹LLMÌÌŽLÎLMÍLÍNLÍÌŒŒ‹MÌŒLŒNMÎKÍŒŽLNKMÍËMŒNMNÍKLÌÍLŒNNMLÌÎLKLNNŒÌLLŽLMMKLMMŒÍMLKMMÍÍMKMÌMMÌKLNMNŒ‹LLLMLŒËLŒMLŒÎNKNÌÌÌLÌÍNKLÌŒLMÍLMMŒNNÎLÌLMLMKLMMLŒÌÌLLLŒŒLÍÎKÌNÎÌNKLÍÍMMLWJJNÂˆBŸNÂ™[˜Ý[ÛˆØ[Ý[]SQJ]KÙ™œÙ][™Ý
HÂˆ]HMÌÌNNLËˆHHLÌMÌÌÎÎKˆˆHLMÌÌNNMˆÈHÌMÌÌÎÎÂˆÛÛœÝYY[™ÝH[™Ý
ÈÌˆ	ˆŒÎÂˆÛÛœÝYYH™]ÈZ[\œ˜^JYY[™Ý
NÂˆ]KŽÂˆ›Üˆ
HHÈH[™ÝÈ
ÊÚJHÂˆYYÚWHH]VÛÙ™œÙ]
Ê×NÂˆBˆYYÚJÊ×HHÂˆÛÛœÝˆHYY[™ÝHÂˆYˆ
HŠHÂˆHHŽÂˆBˆYYÚJÊ×HH[™ÝÈ	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆH	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆLÈ	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆŒH	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆŽH	ˆ™ŽÂˆH
ÏHÎÂˆÛÛœÝÈH™]È[Ì\œ˜^JMŠNÂˆÛÛœÝÂˆËˆ‚ˆHHTSTÎÂˆ›Üˆ
HHÈHYY[™ÝÊHÂˆ›Üˆ
ˆHÈˆMŽÈ
ÊÚ‹H
ÏH
HÂˆÖÚ—HHYYÚWHYYÚH
ÈWHYYÚH
È—HMˆYYÚH
È×HÂˆBˆ]HHˆˆHKˆÈH‹ˆHËˆ‹ˆÎÂˆ›Üˆ
ˆHÈˆÈ
ÊÚŠHÂˆYˆ
ˆMŠHÂˆˆHˆ	ˆÈ˜ˆ	ˆÂˆÈHŽÂˆH[ÙHYˆ
ˆÌŠHÂˆˆH	ˆˆ™	ˆÎÂˆÈHH
ˆˆ
ÈH	ˆMNÂˆH[ÙHYˆ
ˆ
HÂˆˆHˆˆÈˆÂˆÈHÈ
ˆˆ
ÈH	ˆMNÂˆH[ÙHÂˆˆHÈˆ
ˆ™
NÂˆÈHÈ
ˆˆ	ˆMNÂˆBˆÛÛœÝ\Hˆ›Ý]P\™ÈHH
Èˆ
ÈÖÚ—H
ÈÖÙ×Hˆ›Ý]HH–Ú—NÂˆHÎÂˆÈHŽÂˆˆHˆ
È
›Ý]P\™È›Ý]H›Ý]P\™ÈˆÌˆH›Ý]JHÂˆHH\ÂˆBˆH
ÈHÂˆHHH
ÈˆÂˆˆHˆ
ÈÈÂˆÈHÈ
ÈÂˆBˆ™]\›ˆ™]ÈZ[\œ˜^JÚ	ˆ‘‹ˆ	ˆ‘‹ˆMˆ	ˆ‘‹ˆ	ˆ‘‹H	ˆ‘‹Hˆ	ˆ‘‹HˆMˆ	ˆ‘‹Hˆ	ˆ‘‹ˆ	ˆ‘‹ˆˆ	ˆ‘‹ˆˆMˆ	ˆ‘‹ˆˆ	ˆ‘‹È	ˆ‘‹Èˆ	ˆ‘‹ÈˆMˆ	ˆ‘‹Èˆ	ˆ‘—JNÂŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÙ]\Ù]Ü™XY\‹šœÂ‚‚‚™[˜Ý[ÛˆXÛÙTÝš[™ÊÝŠHÂˆžHÂˆ™]\›ˆÝš[™ÕÕUŽÝš[™ÊÝŠNÂˆHØ]Ú
^
HÂˆØ\›ŠU‹NXÛÙ[™È˜Z[Yˆ‰Ù^H‹˜
NÂˆ™]\›ˆÝŽÂˆBŸB˜Û\ÜÈ]\Ù]S\œÙ\ˆ^[™ÈÚ[\VS\œÙ\ˆÂˆÛÛœÝXÝÜŠÜ[ÛœÊHÂˆÝ\\ŠÜ[ÛœÊNÂˆ\Ë››ÙHH[ÂˆBˆÛ‘[™[[Y[
˜[YJHÂˆÛÛœÝ›ÙHHÝ\\‹›Û‘[™[[Y[
˜[YJNÂˆYˆ
›ÙH	‰ˆ˜[YHOOHž˜N™]\Ù]ÈŠHÂˆ\Ë››ÙHH›ÙNÂˆ›ÝÈ™]È\œ›ÜŠX›Ü[™È]\Ù]S\œÙ\‹ˆŠNÂˆBˆBŸB˜Û\ÜÈ]\Ù]™XY\ˆÂˆÛÛœÝXÝÜŠ]JHÂˆYˆ
]K™]\Ù]ÊHÂˆ\Ë››ÙHH™]ÈÚ[\VS\œÙ\ŠÂˆ\Ð]šX]\ÎˆYBˆJKœ\œÙQœ›ÛTÝš[™Ê]K™]\Ù]ÊK™ØÝ[Y[[[Y[ÂˆH[ÙHÂˆÛÛœÝ\œÙ\ˆH™]È]\Ù]S\œÙ\ŠÂˆ\Ð]šX]\ÎˆYBˆJNÂˆžHÂˆ\œÙ\‹œ\œÙQœ›ÛTÝš[™Ê]VÈžž—JNÂˆHØ]ÚßBˆ\Ë››ÙHH\œÙ\‹››ÙNÂˆBˆBˆÙ]˜[YJ]
HÂˆYˆ
]\Ë››ÙH\]
HÂˆ™]\›ˆˆŽÂˆBˆÛÛœÝ›ÙHH\Ë››ÙKœÙX\˜Ú›ÙJ\œÙVT]
]
K
NÂˆYˆ
[›ÙJHÂˆ™]\›ˆˆŽÂˆBˆÛÛœÝš\œÝH›ÙK™š\œÝÚ[ÂˆYˆ
š\œÝË››ÙS˜[YHOOH˜[YHŠHÂˆ™]\›ˆ›ÙK˜Ú[™[‹›X\
Ú[OˆXÛÙTÝš[™ÊÚ[^ÛÛ[
JNÂˆBˆ™]\›ˆXÛÙTÝš[™Ê›ÙK^ÛÛ[
NÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÚ[\œÙXÝÜ‹šœÂ˜Û\ÜÈÚ[™ÛR[\œÙXÝÜˆÂˆØ[››Ý][ÛŽÂˆÛZ[–H[™š[š]NÂˆÛZ[–HH[™š[š]NÂˆÛX^HR[™š[š]NÂˆÛX^HHR[™š[š]NÂˆÜ]XYÚ[ÈH[ÂˆÝ^H×NÂˆÙ^˜PÚ\œÈH×NÂˆÛ\Ý[\œÙXÝ[™Ô]XY[™^HLNÂˆØØ[•ZÙQ^˜PÚ\œÈH˜[ÙNÂˆÛÛœÝXÝÜŠ[››Ý][ÛŠHÂˆ\ËˆØ[››Ý][ÛˆH[››Ý][ÛŽÂˆÛÛœÝ]XYÚ[ÈH[››Ý][Û‹™]Kœ]XYÚ[ÎÂˆYˆ
\]XYÚ[ÊHÂˆÝ\ËˆÛZ[–\ËˆÛZ[–K\ËˆÛX^\ËˆÛX^WHH[››Ý][Û‹™]Kœ™XÝÂˆ™]\›ŽÂˆBˆ›Üˆ
]HHZHH]XYÚ[Ë›[™ÝÈHZNÈH
ÏH
HÂˆ\ËˆÛZ[–HX]›Z[Š\ËˆÛZ[–]XYÚ[ÖÚWJNÂˆ\ËˆÛX^HX]›X^
\ËˆÛX^]XYÚ[ÖÚH
È—JNÂˆ\ËˆÛZ[–HHX]›Z[Š\ËˆÛZ[–K]XYÚ[ÖÚH
ÈWJNÂˆ\ËˆÛX^HHX]›X^
\ËˆÛX^K]XYÚ[ÖÚH
ÈWJNÂˆBˆYˆ
]XYÚ[Ë›[™Ýˆ
HÂˆ\ËˆÜ]XYÚ[ÈH]XYÚ[ÎÂˆBˆBˆÝ™\›\ÊÝ\ŠHÂˆ™]\›ˆJ\ËˆÛZ[–HÝ\‹ˆÛX^\ËˆÛX^HÝ\‹ˆÛZ[–\ËˆÛZ[–HHÝ\‹ˆÛX^H\ËˆÛX^HHÝ\‹ˆÛZ[–JNÂˆBˆÚ[\œÙXÝÊJHÂˆYˆ
\ËˆÛZ[–H\ËˆÛX^H\ËˆÛZ[–HHH\ËˆÛX^HHJHÂˆ™]\›ˆ˜[ÙNÂˆBˆÛÛœÝ]XYÚ[ÈH\ËˆÜ]XYÚ[ÎÂˆYˆ
\]XYÚ[ÊHÂˆ™]\›ˆYNÂˆBˆYˆ
\ËˆÛ\Ý[\œÙXÝ[™Ô]XY[™^H
HÂˆÛÛœÝHH\ËˆÛ\Ý[\œÙXÝ[™Ô]XY[™^ÂˆYˆ
J]XYÚ[ÖÚWHH]XYÚ[ÖÚH
È—HH]XYÚ[ÖÚH
ÈWHHH]XYÚ[ÖÚH
ÈWHHJJHÂˆ™]\›ˆYNÂˆBˆ\ËˆÛ\Ý[\œÙXÝ[™Ô]XY[™^HLNÂˆBˆ›Üˆ
]HHZHH]XYÚ[Ë›[™ÝÈHZNÈH
ÏH
HÂˆYˆ
J]XYÚ[ÖÚWHH]XYÚ[ÖÚH
È—HH]XYÚ[ÖÚH
ÈWHHH]XYÚ[ÖÚH
ÈWHHJJHÂˆ\ËˆÛ\Ý[\œÙXÝ[™Ô]XY[™^HNÂˆ™]\›ˆYNÂˆBˆBˆ™]\›ˆ˜[ÙNÂˆBˆYÛ\
KÛ\
HÂˆYˆ
]\ËˆÚ[\œÙXÝÊJJHÂˆ\Ë™\ØX›Q^˜PÚ\œÊ
NÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
\ËˆÙ^˜PÚ\œË›[™Ýˆ
HÂˆ\ËˆÝ^œ\Ú
\ËˆÙ^˜PÚ\œËš›Ú[ŠˆŠJNÂˆ\ËˆÙ^˜PÚ\œË›[™ÝHÂˆBˆ\ËˆÝ^œ\Ú
Û\
NÂˆ\ËˆØØ[•ZÙQ^˜PÚ\œÈHYNÂˆ™]\›ˆYNÂˆBˆY^˜PÚ\ŠÚ\ŠHÂˆYˆ
\ËˆØØ[•ZÙQ^˜PÚ\œÊHÂˆ\ËˆÙ^˜PÚ\œËœ\Ú
Ú\ŠNÂˆBˆBˆ\ØX›Q^˜PÚ\œÊ
HÂˆYˆ
]\ËˆØØ[•ZÙQ^˜PÚ\œÊHÂˆ™]\›ŽÂˆBˆ\ËˆØØ[•ZÙQ^˜PÚ\œÈH˜[ÙNÂˆ\ËˆÙ^˜PÚ\œË›[™ÝHÂˆBˆÙ]^

HÂˆ\ËˆØ[››Ý][Û‹™]K›Ý™\›ZY^H\ËˆÝ^š›Ú[ŠˆŠNÂˆBŸB˜Û\ÜÈ[\œÙXÝÜˆÂˆÚ[\œÙXÝÜœÈH™]ÈX\

NÂˆÛÛœÝXÝÜŠ[››Ý][ÛœÊHÂˆ›Üˆ
ÛÛœÝ[››Ý][ÛˆÙˆ[››Ý][ÛœÊHÂˆYˆ
X[››Ý][Û‹™]Kœ]XYÚ[È	‰ˆX[››Ý][Û‹™]Kœ™XÝ
HÂˆÛÛ[YNÂˆBˆÛÛœÝ[\œÙXÝÜˆH™]ÈÚ[™ÛR[\œÙXÝÜŠ[››Ý][ÛŠNÂˆ›Üˆ
ÛÛœÝÛÝ\’[\œÙXÝÜ‹Ý™\›\[™×HÙˆ\ËˆÚ[\œÙXÝÜœÊHÂˆYˆ
Ý\’[\œÙXÝÜ‹›Ý™\›\Ê[\œÙXÝÜŠJHÂˆYˆ
[Ý™\›\[™ÊHÂˆ\ËˆÚ[\œÙXÝÜœËœÙ]
Ý\’[\œÙXÝÜ‹™]ÈÙ]
Ú[\œÙXÝÜ—JJNÂˆH[ÙHÂˆÝ™\›\[™Ë˜Y
[\œÙXÝÜŠNÂˆBˆBˆBˆ\ËˆÚ[\œÙXÝÜœËœÙ]
[\œÙXÝÜ‹[
NÂˆBˆBˆYÛ\
˜[œÙ›Ü›KÚYZYÚÛ\
HÂˆÛÛœÝH˜[œÙ›Ü›VÍH
ÈÚYÈŽÂˆÛÛœÝHH˜[œÙ›Ü›VÍWH
ÈZYÚÈŽÂˆ]Ý™\›\[™Ò[\œÙXÝÜœÎÂˆ›Üˆ
ÛÛœÝÚ[\œÙXÝÜ‹Ý™\›\[™×HÙˆ\ËˆÚ[\œÙXÝÜœÊHÂˆYˆ
Ý™\›\[™Ò[\œÙXÝÜœÊHÂˆYˆ
Ý™\›\[™Ò[\œÙXÝÜœËš\Ê[\œÙXÝÜŠJHÂˆ[\œÙXÝÜ‹˜YÛ\
KÛ\
NÂˆH[ÙHÂˆ[\œÙXÝÜ‹™\ØX›Q^˜PÚ\œÊ
NÂˆBˆÛÛ[YNÂˆBˆYˆ
Z[\œÙXÝÜ‹˜YÛ\
KÛ\
JHÂˆÛÛ[YNÂˆBˆÝ™\›\[™Ò[\œÙXÝÜœÈHÝ™\›\[™ÎÂˆBˆBˆY^˜PÚ\ŠÚ\ŠHÂˆ›Üˆ
ÛÛœÝ[\œÙXÝÜˆÙˆ\ËˆÚ[\œÙXÝÜœËšÙ^\Ê
JHÂˆ[\œÙXÝÜ‹˜Y^˜PÚ\ŠÚ\ŠNÂˆBˆBˆÙ]^

HÂˆ›Üˆ
ÛÛœÝ[\œÙXÝÜˆÙˆ\ËˆÚ[\œÙXÝÜœËšÙ^\Ê
JHÂˆ[\œÙXÝÜ‹œÙ]^

NÂˆBˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KØØ[Ý[]WÜÚWÛÝ\‹šœÂ‚˜Û\ÜÈÛÜ™ÂˆÛÛœÝXÝÜŠYÚ[YÙ\‹ÝÒ[YÙ\ŠHÂˆ\ËšYÚHYÚ[YÙ\ˆÂˆ\Ë›ÝÈHÝÒ[YÙ\ˆÂˆBˆ[™
ÛÜ™
HÂˆ\ËšYÚ	HÛÜ™šYÚÂˆ\Ë›ÝÈ	HÛÜ™›ÝÎÂˆBˆÜŠÛÜ™
HÂˆ\ËšYÚHÛÜ™šYÚÂˆ\Ë›ÝÈHÛÜ™›ÝÎÂˆBˆÚYšYÚ
XÙ\ÊHÂˆYˆ
XÙ\ÈHÌŠHÂˆ\Ë›ÝÈH\ËšYÚˆXÙ\ÈHÌˆÂˆ\ËšYÚHÂˆH[ÙHÂˆ\Ë›ÝÈH\Ë›ÝÈˆXÙ\È\ËšYÚÌˆHXÙ\ÎÂˆ\ËšYÚH\ËšYÚˆXÙ\ÈÂˆBˆBˆ›Ý]TšYÚ
XÙ\ÊHÂˆ]ÝËYÚÂˆYˆ
XÙ\È	ˆÌŠHÂˆYÚH\Ë›ÝÎÂˆÝÈH\ËšYÚÂˆH[ÙHÂˆÝÈH\Ë›ÝÎÂˆYÚH\ËšYÚÂˆBˆXÙ\È	HÌNÂˆ\Ë›ÝÈHÝÈˆXÙ\ÈYÚÌˆHXÙ\ÎÂˆ\ËšYÚHYÚˆXÙ\ÈÝÈÌˆHXÙ\ÎÂˆBˆ›Ý

HÂˆ\ËšYÚH\ËšYÚÂˆ\Ë›ÝÈH\Ë›ÝÎÂˆBˆY
ÛÜ™
HÂˆÛÛœÝÝÐYH
\Ë›ÝÈˆ
H
È
ÛÜ™›ÝÈˆ
NÂˆ]YÚYH
\ËšYÚˆ
H
È
ÛÜ™šYÚˆ
NÂˆYˆ
ÝÐYˆ™™™™™™™ŠHÂˆYÚY
ÏHNÂˆBˆ\Ë›ÝÈHÝÐYÂˆ\ËšYÚHYÚYÂˆBˆÛÜUÊž]\ËÙ™œÙ]
HÂˆž]\ÖÛÙ™œÙ]HH\ËšYÚˆ	ˆ™ŽÂˆž]\ÖÛÙ™œÙ]
ÈWHH\ËšYÚˆMˆ	ˆ™ŽÂˆž]\ÖÛÙ™œÙ]
È—HH\ËšYÚˆ	ˆ™ŽÂˆž]\ÖÛÙ™œÙ]
È×HH\ËšYÚ	ˆ™ŽÂˆž]\ÖÛÙ™œÙ]
ÈHH\Ë›ÝÈˆ	ˆ™ŽÂˆž]\ÖÛÙ™œÙ]
ÈWHH\Ë›ÝÈˆMˆ	ˆ™ŽÂˆž]\ÖÛÙ™œÙ]
È—HH\Ë›ÝÈˆ	ˆ™ŽÂˆž]\ÖÛÙ™œÙ]
È×HH\Ë›ÝÈ	ˆ™ŽÂˆBˆ\ÜÚYÛŠÛÜ™
HÂˆ\ËšYÚHÛÜ™šYÚÂˆ\Ë›ÝÈHÛÜ™›ÝÎÂˆBŸB˜ÛÛœÝØ[Ý[]WÜÚWÛÝ\—ÔTSTÈHÂˆÙ]Ê
HÂˆ™]\›ˆÚYÝÊ\ËšÈ‹Û™]ÈÛÜ™
ŽL™ŽNÌŽYLŒŠK™]ÈÛÜ™
ÌLÍÍLKŒÙYXÙ
K™]ÈÛÜ™
XÌ˜˜Ù‹XÍØŒ™ŠK™]ÈÛÜ™
NXY˜MKNY˜˜ÊK™]ÈÛÜ™
ÎMM˜ÌX‹ŒÍLÎ
K™]ÈÛÜ™
NYŒLLYŒKŒYNJK™]ÈÛÜ™
LŒÙŽ˜MYŒNMŽXŠK™]ÈÛÜ™
XŒXÍYYKM™LN
K™]ÈÛÜ™
ØXNNLÌÌŠK™]ÈÛÜ™
LŽÍXŒKMÌ™˜™JK™]ÈÛÜ™
ÌNX™KYMŒŽÊK™]ÈÛÜ™
MLÍÙÌËY™˜LŠK™]ÈÛÜ™
Ì˜™MYÍŒØŽM™ŠK™]ÈÛÜ™
XŒY™KØŒMŽM˜ŒJK™]ÈÛÜ™
X™Ì˜MËXÍÌLŒÍJK™]ÈÛÜ™
ÌNX™ŒMÍÙŽLŽM
K™]ÈÛÜ™
MXŽXÌKYYŒMYŠK™]ÈÛÜ™
Y˜™MÎ‹ÎŒYLÊK™]ÈÛÜ™
˜ÌNYÍ‹ŽÙXJK™]ÈÛÜ™
ØLXØËÍØXÎXÍJK™]ÈÛÜ™
™NL˜Í™‹NL˜ŒÍJK™]ÈÛÜ™
MÍXK™XM™MÊK™]ÈÛÜ™
XØŒNYË™Y˜™
K™]ÈÛÜ™
Í™ŽNKÌLMLØJK™]ÈÛÜ™
NÙMLML‹YM™˜XŠK™]ÈÛÜ™
NÌXÍ™™ÌŒL
K™]ÈÛÜ™
ŒÌØÎN˜ŒŒLÙŠK™]ÈÛÜ™
™NMÙ˜ÍË™YYŒYM
K™]ÈÛÜ™
Í™L™ŒËÙN˜ÌŠK™]ÈÛÜ™
XMÎLMËLÌXMÌJK™]ÈÛÜ™
˜ØMŒÍLKLÎ™ŠK™]ÈÛÜ™
MŽLŽMËLM™MÌ
K™]ÈÛÜ™
ØÌNK™Œ™™˜ÊK™]ÈÛÜ™
™LXŒŒLÎXÌ˜ÎLŠK™]ÈÛÜ™
˜Í™˜ËXXÍ˜YY
K™]ÈÛÜ™
LÌÎLËYMXŒÙŠK™]ÈÛÜ™
LMÌÍM˜YŒÙJK™]ÈÛÜ™
Í˜LX˜‹ØÍÍØŒ˜N
K™]ÈÛÜ™
XÌ˜ÎL™KÙYYYMŠK™]ÈÛÜ™
LÌŒ˜ÎKMŒÍLØŠK™]ÈÛÜ™
L˜™™NLKÙŒLÍ
K™]ÈÛÜ™
NXM‹˜ÍŒÌJK™]ÈÛÜ™
ÌŽÌŽMÎLJK™]ÈÛÜ™
ÍÍ˜ÍLXLËM™LÌ
K™]ÈÛÜ™
NL™NNK™YLŒN
K™]ÈÛÜ™
ŽNLŒMMXNLL
K™]ÈÛÜ™
LÍNKMÍÌLŒ˜JK™]ÈÛÜ™
L˜XLÌÌ˜˜™XŽ
K™]ÈÛÜ™
NXMÌLM‹Ž™Î
K™]ÈÛÜ™
YLÍÍ˜ÌLMXXLÊK™]ÈÛÜ™
ÍÍÍËŽYXŽNJK™]ÈÛÜ™
ÍŒ˜ØKLNXN
K™]ÈÛÜ™
ÎLXÌØŒËÍXÎMXMŒÊK™]ÈÛÜ™
YXMKLÍNXØŠK™]ÈÛÜ™
XŽXØØM‹ÍÍŒÙLÍÌÊK™]ÈÛÜ™
Ž™M™™ŒË˜Œ˜ŽLÊK™]ÈÛÜ™
ÍŽ™YKYY˜Œ™˜ÊK™]ÈÛÜ™
ÎMMŒÍ™‹ÌMÌ™Œ
K™]ÈÛÜ™
ÎÎMLYŒXÌŠK™]ÈÛÜ™
ØÍÌŒXMÎYXÊK™]ÈÛÜ™
L™Y™™˜KŒÍŒÌYLŽ
K™]ÈÛÜ™
ML˜ÙX‹N˜™NJK™]ÈÛÜ™
™YŽXLÙËŒ˜ÍÎLMJK™]ÈÛÜ™
ÍÌMÎŒ‹LÍÌLÌ˜ŠK™]ÈÛÜ™
ØLÌÙXÙKXLŒNXÊK™]ÈÛÜ™
N˜ŽÍËŒXÌÌŒÊK™]ÈÛÜ™
XYMÙ‹ÙLXŒYJK™]ÈÛÜ™
MÙÙ‹YM™YMÎ
K™]ÈÛÜ™
™ŒØXKÌŒMÍ™˜˜JK™]ÈÛÜ™
MŒÍÙÍKL˜ÎNMŠK™]ÈÛÜ™
LLÙŽN™YŽLYJK™]ÈÛÜ™
XÌLŒÍKLÌXÍÌXŠK™]ÈÛÜ™
ŽÍÙKŒÌÙ
K™]ÈÛÜ™
Ì˜ØXXØ‹ÍÌLÊK™]ÈÛÜ™
ØÎYX™LKMXÎX™X˜ÊK™]ÈÛÜ™
ÌYØÍXÌLÊK™]ÈÛÜ™
ØÍY™KØŒÙM˜ŠK™]ÈÛÜ™
NMÙŒŽNXË˜ÍMÙL˜JK™]ÈÛÜ™
Y˜Ø™˜X‹ØY™˜YXÊK™]ÈÛÜ™
˜ÍNNËMÍNMÊWJNÂˆBŸNÂ™[˜Ý[ÛˆÚ
™\Ý[K‹\
HÂˆ™\Ý[˜\ÜÚYÛŠ
NÂˆ™\Ý[˜[™
JNÂˆ\˜\ÜÚYÛŠ
NÂˆ\››Ý

NÂˆ\˜[™
ŠNÂˆ™\Ý[žÜŠ\
NÂŸB™[˜Ý[ÛˆXZŠ™\Ý[K‹\
HÂˆ™\Ý[˜\ÜÚYÛŠ
NÂˆ™\Ý[˜[™
JNÂˆ\˜\ÜÚYÛŠ
NÂˆ\˜[™
ŠNÂˆ™\Ý[žÜŠ\
NÂˆ\˜\ÜÚYÛŠJNÂˆ\˜[™
ŠNÂˆ™\Ý[žÜŠ\
NÂŸB™[˜Ý[ÛˆÚYÛXJ™\Ý[\
HÂˆ™\Ý[˜\ÜÚYÛŠ
NÂˆ™\Ý[œ›Ý]TšYÚ
Ž
NÂˆ\˜\ÜÚYÛŠ
NÂˆ\œ›Ý]TšYÚ
Í
NÂˆ™\Ý[žÜŠ\
NÂˆ\˜\ÜÚYÛŠ
NÂˆ\œ›Ý]TšYÚ
ÎJNÂˆ™\Ý[žÜŠ\
NÂŸB™[˜Ý[ÛˆÚYÛXTš[YJ™\Ý[\
HÂˆ™\Ý[˜\ÜÚYÛŠ
NÂˆ™\Ý[œ›Ý]TšYÚ
M
NÂˆ\˜\ÜÚYÛŠ
NÂˆ\œ›Ý]TšYÚ
N
NÂˆ™\Ý[žÜŠ\
NÂˆ\˜\ÜÚYÛŠ
NÂˆ\œ›Ý]TšYÚ
JNÂˆ™\Ý[žÜŠ\
NÂŸB™[˜Ý[Ûˆ]TÚYÛXJ™\Ý[\
HÂˆ™\Ý[˜\ÜÚYÛŠ
NÂˆ™\Ý[œ›Ý]TšYÚ
JNÂˆ\˜\ÜÚYÛŠ
NÂˆ\œ›Ý]TšYÚ

NÂˆ™\Ý[žÜŠ\
NÂˆ\˜\ÜÚYÛŠ
NÂˆ\œÚYšYÚ
ÊNÂˆ™\Ý[žÜŠ\
NÂŸB™[˜Ý[Ûˆ]TÚYÛXTš[YJ™\Ý[\
HÂˆ™\Ý[˜\ÜÚYÛŠ
NÂˆ™\Ý[œ›Ý]TšYÚ
NJNÂˆ\˜\ÜÚYÛŠ
NÂˆ\œ›Ý]TšYÚ
ŒJNÂˆ™\Ý[žÜŠ\
NÂˆ\˜\ÜÚYÛŠ
NÂˆ\œÚYšYÚ
ŠNÂˆ™\Ý[žÜŠ\
NÂŸB™[˜Ý[ÛˆØ[Ý[]TÒMLLŠ]KÙ™œÙ][™Ý[ÙLÎH˜[ÙJHÂˆ]K‹ËK‹ÎÂˆYˆ
[[ÙLÎ
HÂˆH™]ÈÛÜ™
˜LYMËŒØ˜ØÎL
NÂˆHH™]ÈÛÜ™
˜ØYNKØXMÌØŠNÂˆˆH™]ÈÛÜ™
ØÍ™YŒÍÌ‹™NMŽ˜ŠNÂˆÈH™]ÈÛÜ™
MM™LØKYŒYÍ™ŒJNÂˆH™]ÈÛÜ™
LLMLÙ‹YMŽ™JNÂˆHH™]ÈÛÜ™
XŒMŽË˜ŒÙM˜ÌYŠNÂˆˆH™]ÈÛÜ™
YŽÙXX‹˜X™˜ŠNÂˆÈH™]ÈÛÜ™
X™LÙNKLÍÙLŒMÎJNÂˆH[ÙHÂˆH™]ÈÛÜ™
Ø˜˜ŽYYÌLNYY
NÂˆHH™]ÈÛÜ™
ŒŽXLŽL˜KÍØÙLÊNÂˆˆH™]ÈÛÜ™
LMNLMXKÌÌMÊNÂˆÈH™]ÈÛÜ™
ML™™XÙÌMNLÎJNÂˆH™]ÈÛÜ™
ÌÌÌË™˜ÌŒÌJNÂˆHH™]ÈÛÜ™
XNËŽNMLLJNÂˆˆH™]ÈÛÜ™
ŒÌ™LŽN˜MÊNÂˆÈH™]ÈÛÜ™
ØMY™Y˜M˜M
NÂˆBˆÛÛœÝYY[™ÝHX]˜ÙZ[

[™Ý
ÈMÊHÈLŽ
H
ˆLŽÂˆÛÛœÝYYH™]ÈZ[\œ˜^JYY[™Ý
NÂˆ]KŽÂˆ›Üˆ
HHÈH[™ÝÈ
ÊÚJHÂˆYYÚWHH]VÛÙ™œÙ]
Ê×NÂˆBˆYYÚJÊ×HHÂˆÛÛœÝˆHYY[™ÝHMŽÂˆYˆ
HŠHÂˆHHŽÂˆBˆH
ÏHLNÂˆYYÚJÊ×HH[™ÝˆŽH	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆŒH	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆLÈ	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆH	ˆ™ŽÂˆYYÚJÊ×HH[™ÝÈ	ˆ™ŽÂˆÛÛœÝÈH™]È\œ˜^J
NÂˆ›Üˆ
HHÈHÈJÊÊHÂˆÖÚWHH™]ÈÛÜ™

NÂˆBˆÛÛœÝÂˆÂˆHHØ[Ý[]WÜÚWÛÝ\—ÔTSTÎÂˆ]HH™]ÈÛÜ™

KˆˆH™]ÈÛÜ™

KˆÈH™]ÈÛÜ™

NÂˆ]H™]ÈÛÜ™

KˆHH™]ÈÛÜ™

KˆˆH™]ÈÛÜ™

NÂˆ]ÈH™]ÈÛÜ™

KˆH™]ÈÛÜ™

NÂˆÛÛœÝHH™]ÈÛÜ™

KˆˆH™]ÈÛÜ™

NÂˆÛÛœÝ\HH™]ÈÛÜ™

Kˆ\ˆH™]ÈÛÜ™

NÂˆ]\ÎÂˆ›Üˆ
HHÈHYY[™ÝÊHÂˆ›Üˆ
ˆHÈˆMŽÈ
ÊÚŠHÂˆÖÚ—KšYÚHYYÚWHYYÚH
ÈWHMˆYYÚH
È—HYYÚH
È×NÂˆÖÚ—K›ÝÈHYYÚH
ÈHYYÚH
ÈWHMˆYYÚH
È—HYYÚH
È×NÂˆH
ÏHÂˆBˆ›Üˆ
ˆHMŽÈˆÈ
ÊÚŠHÂˆ\ÈHÖÚ—NÂˆ]TÚYÛXTš[YJ\ËÖÚˆH—K\ŠNÂˆ\Ë˜Y
ÖÚˆH×JNÂˆ]TÚYÛXJ\KÖÚˆHMWK\ŠNÂˆ\Ë˜Y
\JNÂˆ\Ë˜Y
ÖÚˆHM—JNÂˆBˆK˜\ÜÚYÛŠ
NÂˆ‹˜\ÜÚYÛŠJNÂˆË˜\ÜÚYÛŠŠNÂˆ˜\ÜÚYÛŠÊNÂˆK˜\ÜÚYÛŠ
NÂˆ‹˜\ÜÚYÛŠJNÂˆË˜\ÜÚYÛŠŠNÂˆ˜\ÜÚYÛŠÊNÂˆ›Üˆ
ˆHÈˆÈ
ÊÚŠHÂˆK˜\ÜÚYÛŠ
NÂˆÚYÛXTš[YJ\KK\ŠNÂˆK˜Y
\JNÂˆÚ
\KK‹Ë\ŠNÂˆK˜Y
\JNÂˆK˜Y
ÖÚ—JNÂˆK˜Y
ÖÚ—JNÂˆÚYÛXJ‹K\ŠNÂˆXZŠ\KK‹Ë\ŠNÂˆ‹˜Y
\JNÂˆ\ÈHÂˆHÎÂˆÈHŽÂˆˆHNÂˆ˜Y
JNÂˆHHÂˆHÎÂˆÈHŽÂˆˆHNÂˆ\Ë˜\ÜÚYÛŠJNÂˆ\Ë˜Y
ŠNÂˆHH\ÎÂˆBˆ˜Y
JNÂˆK˜Y
ŠNÂˆ‹˜Y
ÊNÂˆË˜Y

NÂˆ˜Y
JNÂˆK˜Y
ŠNÂˆ‹˜Y
ÊNÂˆË˜Y

NÂˆBˆ]™\Ý[ÂˆYˆ
[[ÙLÎ
HÂˆ™\Ý[H™]ÈZ[\œ˜^J
NÂˆ˜ÛÜUÊ™\Ý[
NÂˆK˜ÛÜUÊ™\Ý[
NÂˆ‹˜ÛÜUÊ™\Ý[MŠNÂˆË˜ÛÜUÊ™\Ý[
NÂˆ˜ÛÜUÊ™\Ý[ÌŠNÂˆK˜ÛÜUÊ™\Ý[
NÂˆ‹˜ÛÜUÊ™\Ý[
NÂˆË˜ÛÜUÊ™\Ý[MŠNÂˆH[ÙHÂˆ™\Ý[H™]ÈZ[\œ˜^J
NÂˆ˜ÛÜUÊ™\Ý[
NÂˆK˜ÛÜUÊ™\Ý[
NÂˆ‹˜ÛÜUÊ™\Ý[MŠNÂˆË˜ÛÜUÊ™\Ý[
NÂˆ˜ÛÜUÊ™\Ý[ÌŠNÂˆK˜ÛÜUÊ™\Ý[
NÂˆBˆ™]\›ˆ™\Ý[ÂŸB™[˜Ý[ÛˆØ[Ý[]TÒLÎ
]KÙ™œÙ][™Ý
HÂˆ™]\›ˆØ[Ý[]TÒMLLŠ]KÙ™œÙ][™ÝYJNÂŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KØØ[Ý[]WÜÚLM‹šœÂ‚˜ÛÛœÝØ[Ý[]WÜÚLM—ÔTSTÈHÂˆÙ]Ê
HÂˆ™]\›ˆÚYÝÊ\ËšÈ‹ÌŽL™ŽNÌLÍÍLKXÌ˜˜Ù‹NXY˜MKÎMM˜ÌX‹NYŒLLYŒKLŒÙŽ˜MXŒXÍYYKØXNNLŽÍXŒKÌNX™KMLÍÙÌËÌ˜™MYÍXŒY™KX™Ì˜MËÌNX™ŒMÍMXŽXÌKY˜™MÎ‹˜ÌNYÍ‹ØLXØË™NL˜Í™‹MÍXKXØŒNYËÍ™ŽNKNÙMLML‹NÌXÍ™ŒÌØÎ™NMÙ˜ÍËÍ™L™ŒËXMÎLMË˜ØMŒÍLKMŽLŽMËØÌNK™LXŒŒLÎ˜Í™˜ËLÌÎLËLMÌÍMÍ˜LX˜‹XÌ˜ÎL™KLÌŒ˜ÎKL˜™™NLKNXM‹ÌŽÌÍÍ˜ÍLXLËNL™NNKŽNLŒLÍNKL˜XLÌNXMÌLM‹YLÍÍ˜ÌÍÍÍËÍŒ˜ØKÎLXÌØŒËYXMKXŽXØØM‹Ž™M™™ŒËÍŽ™YKÎMMŒÍ™‹ÎÎMØÍÌŒL™Y™™˜KML˜ÙX‹™YŽXLÙËÍÌMÎŒ—JNÂˆBŸNÂ™[˜Ý[Ûˆ›ÝŠŠHÂˆ™]\›ˆˆˆÌˆHŽÂŸB™[˜Ý[ÛˆØ[Ý[]WÜÚLM—ØÚ
KŠHÂˆ™]\›ˆ	ˆHˆž	ˆŽÂŸB™[˜Ý[ÛˆØ[Ý[]WÜÚLM—ÛXZŠKŠHÂˆ™]\›ˆ	ˆHˆ	ˆˆˆH	ˆŽÂŸB™[˜Ý[ÛˆØ[Ý[]WÜÚLM—ÜÚYÛXJ
HÂˆ™]\›ˆ›ÝŠŠHˆ›ÝŠLÊHˆ›ÝŠŒŠNÂŸB™[˜Ý[ÛˆØ[Ý[]WÜÚLM—ÜÚYÛXTš[YJ
HÂˆ™]\›ˆ›ÝŠŠHˆ›ÝŠLJHˆ›ÝŠJNÂŸB™[˜Ý[ÛˆØ[Ý[]WÜÚLM—Û]TÚYÛXJ
HÂˆ™]\›ˆ›ÝŠÊHˆ›ÝŠN
HˆˆÎÂŸB™[˜Ý[ÛˆØ[Ý[]WÜÚLM—Û]TÚYÛXTš[YJ
HÂˆ™]\›ˆ›ÝŠMÊHˆ›ÝŠNJHˆˆLÂŸB™[˜Ý[ÛˆØ[Ý[]TÒLMŠ]KÙ™œÙ][™Ý
HÂˆ]H˜LYMËˆHH˜ØYNKˆˆHØÍ™YŒÍÌ‹ˆÈHMM™LØKˆHLLMLÙ‹ˆHHXŒMŽËˆˆHYŽÙXX‹ˆÈHX™LÙNNÂˆÛÛœÝYY[™ÝHX]˜ÙZ[

[™Ý
ÈJHÈ
H
ˆÂˆÛÛœÝYYH™]ÈZ[\œ˜^JYY[™Ý
NÂˆ]KŽÂˆ›Üˆ
HHÈH[™ÝÈ
ÊÚJHÂˆYYÚWHH]VÛÙ™œÙ]
Ê×NÂˆBˆYYÚJÊ×HHÂˆÛÛœÝˆHYY[™ÝHÂˆYˆ
HŠHÂˆHHŽÂˆBˆH
ÏHÎÂˆYYÚJÊ×HH[™ÝˆŽH	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆŒH	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆLÈ	ˆ™ŽÂˆYYÚJÊ×HH[™ÝˆH	ˆ™ŽÂˆYYÚJÊ×HH[™ÝÈ	ˆ™ŽÂˆÛÛœÝÈH™]ÈZ[Ì\œ˜^J
NÂˆÛÛœÝÂˆÂˆHHØ[Ý[]WÜÚLM—ÔTSTÎÂˆ›Üˆ
HHÈHYY[™ÝÊHÂˆ›Üˆ
ˆHÈˆMŽÈ
ÊÚŠHÂˆÖÚ—HHYYÚWHYYÚH
ÈWHMˆYYÚH
È—HYYÚH
È×NÂˆH
ÏHÂˆBˆ›Üˆ
ˆHMŽÈˆÈ
ÊÚŠHÂˆÖÚ—HHØ[Ý[]WÜÚLM—Û]TÚYÛXTš[YJÖÚˆH—JH
ÈÖÚˆH×H
ÈØ[Ý[]WÜÚLM—Û]TÚYÛXJÖÚˆHMWJH
ÈÖÚˆHM—HÂˆBˆ]HHˆˆHKˆÈH‹ˆHËˆHHˆˆHKˆÈH‹ˆHËˆKˆŽÂˆ›Üˆ
ˆHÈˆÈ
ÊÚŠHÂˆHH
ÈØ[Ý[]WÜÚLM—ÜÚYÛXTš[YJJH
ÈØ[Ý[]WÜÚLM—ØÚ
K‹ÊH
ÈÖÚ—H
ÈÖÚ—NÂˆˆHØ[Ý[]WÜÚLM—ÜÚYÛXJJH
ÈØ[Ý[]WÜÚLM—ÛXZŠK‹ÊNÂˆHÎÂˆÈHŽÂˆˆHNÂˆHH
ÈHÂˆHÎÂˆÈHŽÂˆˆHNÂˆHHH
ÈˆÂˆBˆH
ÈHÂˆHHH
ÈˆÂˆˆHˆ
ÈÈÂˆÈHÈ
ÈÂˆH
ÈHÂˆHHH
ÈˆÂˆˆHˆ
ÈÈÂˆÈHÈ
ÈÂˆBˆ™]\›ˆ™]ÈZ[\œ˜^JÚˆ	ˆ‘‹ˆMˆ	ˆ‘‹ˆ	ˆ‘‹	ˆ‘‹Hˆ	ˆ‘‹HˆMˆ	ˆ‘‹Hˆ	ˆ‘‹H	ˆ‘‹ˆˆ	ˆ‘‹ˆˆMˆ	ˆ‘‹ˆˆ	ˆ‘‹ˆ	ˆ‘‹Èˆ	ˆ‘‹ÈˆMˆ	ˆ‘‹Èˆ	ˆ‘‹È	ˆ‘‹ˆ	ˆ‘‹ˆMˆ	ˆ‘‹ˆ	ˆ‘‹	ˆ‘‹Hˆ	ˆ‘‹HˆMˆ	ˆ‘‹Hˆ	ˆ‘‹H	ˆ‘‹ˆˆ	ˆ‘‹ˆˆMˆ	ˆ‘‹ˆˆ	ˆ‘‹ˆ	ˆ‘‹Èˆ	ˆ‘‹ÈˆMˆ	ˆ‘‹Èˆ	ˆ‘‹È	ˆ‘—JNÂŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÙXÜž\ÜÝ™X[KšœÂ‚˜ÛÛœÝÚ[šÔÚ^™HHLLŽÂ˜Û\ÜÈXÜž\Ý™X[H^[™ÈXÛÙTÝ™X[HÂˆÛÛœÝXÝÜŠÝ‹X^X™S[™ÝXÜž\
HÂˆÝ\\ŠX^X™S[™Ý
NÂˆ\ËœÝˆHÝŽÂˆ\Ë™XÝHÝ‹™XÝÂˆ\Ë™XÜž\HXÜž\Âˆ\Ë›™^Ú[šÈH[Âˆ\Ëš[š]X[^™YH˜[ÙNÂˆBˆ™XY›ØÚÊ
HÂˆ]Ú[šÎÂˆYˆ
\Ëš[š]X[^™Y
HÂˆÚ[šÈH\Ë›™^Ú[šÎÂˆH[ÙHÂˆÚ[šÈH\ËœÝ‹™Ù]ž]\ÊÚ[šÔÚ^™JNÂˆ\Ëš[š]X[^™YHYNÂˆBˆYˆ
XÚ[šÏË›[™Ý
HÂˆ\Ë™[ÙˆHYNÂˆ™]\›ŽÂˆBˆ\Ë›™^Ú[šÈH\ËœÝ‹™Ù]ž]\ÊÚ[šÔÚ^™JNÂˆÛÛœÝ\Ó[Ü™Q]HH\Ë›™^Ú[šÏË›[™ÝˆÂˆÛÛœÝXÜž\H\Ë™XÜž\ÂˆÚ[šÈHXÜž\
Ú[šËZ\Ó[Ü™Q]JNÂˆÛÛœÝY™™\“[™ÝH\Ë˜Y™™\“[™Ýˆ™]Ó[™ÝHY™™\“[™Ý
ÈÚ[šË›[™ÝˆY™™\ˆH\Ë™[œÝ\™PY™™\Š™]Ó[™Ý
NÂˆY™™\‹œÙ]
Ú[šËY™™\“[™Ý
NÂˆ\Ë˜Y™™\“[™ÝH™]Ó[™ÝÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KØÜž\ËšœÂ‚‚‚‚‚‚˜Û\ÜÈTÑ›Ý\Ú\\ˆÂˆÛÛœÝXÝÜŠÙ^JHÂˆ\Ë˜HHÂˆ\Ë˜ˆHÂˆÛÛœÝÈH™]ÈZ[\œ˜^JMŠNÂˆÛÛœÝÙ^S[™ÝHÙ^K›[™ÝÂˆ›Üˆ
]HHÈHMŽÈ
ÊÚJHÂˆÖÚWHHNÂˆBˆ›Üˆ
]HHˆHÈHMŽÈ
ÊÚJHÂˆÛÛœÝ\HÖÚWNÂˆˆHˆ
È\
ÈÙ^VÚH	HÙ^S[™ÝH	ˆ™ŽÂˆÖÚWHHÖÚ—NÂˆÖÚ—HH\ÂˆBˆ\ËœÈHÎÂˆBˆ[˜Üž\›ØÚÊ]JHÂˆ]HH\Ë˜KˆˆH\Ë˜ŽÂˆÛÛœÝÈH\ËœÎÂˆÛÛœÝˆH]K›[™ÝÂˆÛÛœÝÝ]]H™]ÈZ[\œ˜^JŠNÂˆ›Üˆ
]HHÈHŽÈ
ÊÚJHÂˆHHH
ÈH	ˆ™ŽÂˆÛÛœÝ\HÖØWNÂˆˆHˆ
È\	ˆ™ŽÂˆÛÛœÝ\ˆHÖØ—NÂˆÖØWHH\ŽÂˆÖØ—HH\ÂˆÝ]]ÚWHH]VÚWHˆÖÝ\
È\ˆ	ˆ™—NÂˆBˆ\Ë˜HHNÂˆ\Ë˜ˆHŽÂˆ™]\›ˆÝ]]ÂˆBˆXÜž\›ØÚÊ]JHÂˆ™]\›ˆ\Ë™[˜Üž\›ØÚÊ]JNÂˆBˆ[˜Üž\
]JHÂˆ™]\›ˆ\Ë™[˜Üž\›ØÚÊ]JNÂˆBŸB˜Û\ÜÈ[Ú\\ˆÂˆXÜž\›ØÚÊ]JHÂˆ™]\›ˆ]NÂˆBˆ[˜Üž\
]JHÂˆ™]\›ˆ]NÂˆBŸB˜Û\ÜÈQTÐ˜\ÙPÚ\\ˆÂˆÜÈH™]ÈZ[\œ˜^JÌŒËØËÍËØ‹Œ‹˜‹™‹ÍKÌKË˜‹™KËX‹Í‹ØK‹ÎKÙ˜KNKËŒYL‹Y‹XËMÌ‹ÌË™LË‹Í‹Ù‹ËØËÍMKMKŒKÌKÌKMKÍËŒËÌËNM‹KXKËL‹L‹X‹ËŒ‹ÍKKË˜ËXKX‹™KXKLL‹Ø‹‹ŒËŽKLË™‹LËKYŒ˜ËŒKX‹˜KØ‹™KÎKKËNÙ‹Y‹XK˜‹ËÌËKKŽK‹Ù‹LØËY‹NLKLË‹L‹YÎK˜Ë‹KŒKL™‹ŒË‹ÙËLËXËY‹MËMËÍMËÙKÙYNKÌËŒK‹ËŒ‹˜KL‹YKŽMKYK‹‹LÌ‹ØKKK‹XËÌ‹ËXËŒ‹LKMKMÎKMËÎÍË™KKNK˜ËM‹XKKØKYK˜KÎK™KXËM‹Í‹NÍY‹‹™‹KÌÙKK‹Ë‹KŒKÍKMËŽK‹ÌKYYKLKŽNLKŽKKKMX‹YKËNKÙKMKŽ‹ËLKK™‹M‹‹ŽKNK™‹ŒM˜‹M—JNÂˆÚ[—ÜÈH™]ÈZ[\œ˜^JÌL‹K˜KKÌÍ‹MKÎ™‹LËYKKŒËË˜‹ØËLËÎK‹X‹™‹™‹ËÍKËÍKNKØ‹MØ‹MÌ‹M‹Ì‹ŒËÙYKËMK‹‹˜KÌËK™KLK‹ŽKŒ‹Í‹X‹L‹K™‹KKÌ‹Ž‹‹ŽNM‹MXËØËYK‹L‹˜ËÌL™YŽKKYKMK‹MËMËYLX‹Ë˜ËËKËMNKŽŒËK‹˜ËYK‹ØKÙ‹‹‹ÌKY‹™ËKLËK˜‹ØKLKLKK‹ËËXKMËŒ‹Ù‹ÙKŒM‹ÌËM‹XËÍŒ‹MËYÍKKL‹ŽKÍËNXËÍK‹™KËŒKXKÌKYŽKÍKK™‹ËŒ‹KXKN™KX‹˜ËM‹ÙK‹Í‹‹ÎKŒXK‹Ì™KÎÙXKY‹NÌËËÍËÌKŒKL‹LNKËXËY‹ŒLKÙ‹NKNKKK™MKØKY‹LËÎKXËY‹LLØ‹YK˜KKŒÎX‹˜‹ØËËLËNKŒKMË˜‹ÙK˜KÍË‹‹LKŽKMŒËMKŒKËÙJNÂˆÛZ^H™]ÈZ[Ì\œ˜^JÌLL‹XÌLŒXLM‹LŒXŒMÌYÎÍ˜ËÍŒ™ÎLËÍŒ™LØK˜LÙŒŒÌÌKÌŽNÙMMMLË˜ÍXMÌKŒLÍÙK˜ÍXÍÍMLMÙ‹MÙMŒ‹XMÍÍŽKLLŒYNNY˜‹˜Î˜ØXM‹ŒŽ˜ÍØYMXË˜™NNMËÍM™™NKØXY™ŒÎKLŽNYYXYLËØØXL™™K˜ÌØY™KN˜ÎØÍM™NXÙ‹YNM™‹˜YMÎX™KŒØ˜˜Ø‹LÌ˜ÌÍÌŽXLM™ÎLŒXÍ‹LÌYŽMËYMŽXË™ŒMMKŒLNKXÌÙÌŒËMMØYLŽÍŒXÎLÍKŽMŽÍÙKLÍMÙMÌ‹YYYXLY™NKMÙŒL‹Ø˜X˜˜Ø‹ÍXL˜ÌØŽMÌYŽXŒØÙ‹ÎY™MËL™XËYŽYYŒKLNM˜K™LÌÎLËYXLNNMÙŒLNNKNYŽMKÌØÍÌÍØ™‹ÙÙLØX™™L™NKŒYÌŒL‹YÍ™‹LÍÙŒ™ŒMÍÙL™™ØYX‹MMLNYKXXMKMØØËÍMXÍËÙLXYKÌÍÌMKÌL˜ÌY˜ŽÙŒLL˜ŒËMLXLÌN‹XŒLÌØÎKŽL˜ŽMÌLŽY‹M˜™‹ÙY˜ŒLYMÍLY™™XMX‹ÍXÌŽM˜KØ˜ØŽŒKŽYLÍØËÙNYMÍËÙYYLYKÌØMÙMKŒX˜ØÙŒ™˜XÌŒËNYLLÌ‹ŽÙXÌÎKNNN˜ŒMÎLYŒ™‹ÍŽÎŽ‹˜MY˜ØÎX‹M˜ÌNLMŽYL˜LKŒY˜XKLØ™ŽËXÍÌ™X˜ËŒX™YKØŒÙKXLMØMÌËMYXNXÎÙLŒNYŽKÌŽÙŒ‹ŒŒÌÎLY‹˜ÌØNYMM™ŒÙNŒÍ‹XÙŒXÌ˜‹ÍŒLLŒYYŽLÌŒLKLŒÙŒXKŒ™XŒŽË˜ÙLŒLËMŽMM™MKNXÍŒÍ™K˜NÍÍÌËMÎMÎXŒMXMKŽMÍ‹Ì˜LÍY‹ØØXMMYXÙYË™MYÙ˜ËY™XÌLKLÙØÙXKÎXÎYY‹ÍØÌYLÙYYÙ˜™ÙŽXÍ‹ÌXMŒ˜Y‹Ù˜Y™˜M™˜NŽKŒØ™˜MXŒ‹NŽËÎNŽMNLŽXÎMKXŽXŽLNYKLMØÌMËYÍLÍË™™LLLKŒÍÌYXKNMNÙM˜‹MÍLLÌÍŒMLÙÌŽMÍ‹LÍŒŒY‹ŒÙ™ŒMÙÎKÌÌ™ÍL‹NLLMŒÌËMÌNMXŒÎLÌK˜ŒL™KXYÍŒNËMM˜ÎË˜ÍMØŽXKØÍÍŽLKL™ŒÍMXLXÙ˜MNX‹™YLM˜‹ŒN˜™XNYŒYMMŒ‹ŽLØÌ‹ŽYXÎK˜˜ŒÙŽØŒŒÌŒËÙXNLÙYKÌL˜YMKØMØŒLØËÍX˜ÌÍËMXXŒ˜KŽXØMŒŒKŒÎLLÍ˜NX‹YMÌNYŒ‹LÎLŒL™M™™‹MŒYÌÍÌ‹NMÙMÎKÌŒ˜™YØÌŒ™LË™LÎYÍYKŒÌ˜MMKXÎXXÌKLŽLØ˜LKŒYMË™NXLXË™NÌ™XÎL‹ÎXÎNLØ‹Í˜MNMÌXÙ™NKL™™L‹ÌÍM‹XÎXÎM™XÍKXY™™MÙKŽMŒMŒË™Y˜ÍŽÌMØŒKŒÍ˜X˜KLNÙMËYLLMÌXËÍ™MLÎYØLÍYNM‹ŽØÍN‹ŒÍMØÍŒ™NKÌŒ™L‹ŒLMY™‹™MNLNŒØ˜ÍKM™ŒÍ˜ÙKNÍŒYËMÙ˜ÙÍØLLÍØKÎXNMÌK˜˜ŒÌM˜ËX˜LXËŽLÎM‹NÌÍMYLÎMÌŒYYL™‹ÙNMŒ‹YLŽLŽKX™˜ÙLÍMYŒÌÌÙ‹Ù˜ÙLKÌXÍYKŒÙLN™ÌLËÌÌYØØKLÎXÌKØŒŒØÍ™ËÍL˜XØ™ËYŒMYNM‹LLXÙMYYŒÌÙŒ™Œ™Y™™˜‹MÍÎXL‹NMÌŽNNK˜˜˜YNMŒ˜LÎ‹YY™KLMMKÍŽXXNŽMØL×JNÂˆÛZ^ÛÛH™]ÈZ[\œ˜^JMŠK›X\

ËJHOˆHLŽÈHHˆHHˆXŠNÂˆÛÛœÝXÝÜŠ
HÂˆ\Ë˜Y™™\ˆH™]ÈZ[\œ˜^JMŠNÂˆ\Ë˜Y™™\”ÜÚ][ÛˆHÂˆBˆÙ^[™Ù^JÚ\\’Ù^JHÂˆ[œ™XXÚX›JØ[››ÝØ[Ù^[™Ù^XÛˆH˜\ÙHÛ\ÜÈŠNÂˆBˆÙXÜž\
[œ]Ù^JHÂˆ]KŽÂˆÛÛœÝÝ]HH™]ÈZ[\œ˜^JMŠNÂˆÝ]KœÙ]
[œ]
NÂˆ›Üˆ
]ˆHÈH\Ë—ÚÙ^TÚ^™NÈˆMŽÈ
ÊÚ‹
ÊÚÊHÂˆÝ]VÚ—HHÙ^VÚ×NÂˆBˆ›Üˆ
]HH\Ë—ØÞXÛ\ÓÙ”™\]][ÛˆHNÈHHNÈKZJHÂˆHÝ]VÌL×NÂˆÝ]VÌL×HHÝ]VÎWNÂˆÝ]VÎWHHÝ]VÍWNÂˆÝ]VÍWHHÝ]VÌWNÂˆÝ]VÌWHHÂˆHÝ]VÌMNÂˆHHÝ]VÌLNÂˆÝ]VÌMHHÝ]VÍ—NÂˆÝ]VÌLHHÝ]VÌ—NÂˆÝ]VÍ—HHÂˆÝ]VÌ—HHNÂˆHÝ]VÌMWNÂˆHHÝ]VÌLWNÂˆˆHÝ]VÍ×NÂˆÝ]VÌMWHHÝ]VÌ×NÂˆÝ]VÌLWHHÂˆÝ]VÍ×HHNÂˆÝ]VÌ×HHŽÂˆ›Üˆ
]ˆHÈˆMŽÈ
ÊÚŠHÂˆÝ]VÚ—HH\Ë—Ú[—ÜÖÜÝ]VÚ—WNÂˆBˆ›Üˆ
]ˆHÈHH
ˆMŽÈˆMŽÈ
ÊÚ‹
ÊÚÊHÂˆÝ]VÚ—HHÙ^VÚ×NÂˆBˆ›Üˆ
]ˆHÈˆMŽÈˆ
ÏH
HÂˆÛÛœÝÌH\Ë—ÛZ^ÜÝ]VÚ—WNÂˆÛÛœÝÌHH\Ë—ÛZ^ÜÝ]VÚˆ
ÈWWNÂˆÛÛœÝÌˆH\Ë—ÛZ^ÜÝ]VÚˆ
È—WNÂˆÛÛœÝÌÈH\Ë—ÛZ^ÜÝ]VÚˆ
È×WNÂˆHÌˆÌHˆˆÌHˆÌˆˆMˆˆÌˆMˆˆÌÈˆˆÌÈÂˆÝ]VÚ—HHˆ	ˆ™ŽÂˆÝ]VÚˆ
ÈWHHˆMˆ	ˆ™ŽÂˆÝ]VÚˆ
È—HHˆ	ˆ™ŽÂˆÝ]VÚˆ
È×HH	ˆ™ŽÂˆBˆBˆHÝ]VÌL×NÂˆÝ]VÌL×HHÝ]VÎWNÂˆÝ]VÎWHHÝ]VÍWNÂˆÝ]VÍWHHÝ]VÌWNÂˆÝ]VÌWHHÂˆHÝ]VÌMNÂˆHHÝ]VÌLNÂˆÝ]VÌMHHÝ]VÍ—NÂˆÝ]VÌLHHÝ]VÌ—NÂˆÝ]VÍ—HHÂˆÝ]VÌ—HHNÂˆHÝ]VÌMWNÂˆHHÝ]VÌLWNÂˆˆHÝ]VÍ×NÂˆÝ]VÌMWHHÝ]VÌ×NÂˆÝ]VÌLWHHÂˆÝ]VÍ×HHNÂˆÝ]VÌ×HHŽÂˆ›Üˆ
]ˆHÈˆMŽÈ
ÊÚŠHÂˆÝ]VÚ—HH\Ë—Ú[—ÜÖÜÝ]VÚ—WNÂˆÝ]VÚ—HHÙ^VÚ—NÂˆBˆ™]\›ˆÝ]NÂˆBˆÙ[˜Üž\
[œ]Ù^JHÂˆÛÛœÝÈH\Ë—ÜÎÂˆ]KŽÂˆÛÛœÝÝ]HH™]ÈZ[\œ˜^JMŠNÂˆÝ]KœÙ]
[œ]
NÂˆ›Üˆ
]ˆHÈˆMŽÈ
ÊÚŠHÂˆÝ]VÚ—HHÙ^VÚ—NÂˆBˆ›Üˆ
]HHNÈH\Ë—ØÞXÛ\ÓÙ”™\]][ÛŽÈJÊÊHÂˆ›Üˆ
]ˆHÈˆMŽÈ
ÊÚŠHÂˆÝ]VÚ—HHÖÜÝ]VÚ—WNÂˆBˆˆHÝ]VÌWNÂˆÝ]VÌWHHÝ]VÍWNÂˆÝ]VÍWHHÝ]VÎWNÂˆÝ]VÎWHHÝ]VÌL×NÂˆÝ]VÌL×HHŽÂˆˆHÝ]VÌ—NÂˆHHÝ]VÍ—NÂˆÝ]VÌ—HHÝ]VÌLNÂˆÝ]VÍ—HHÝ]VÌMNÂˆÝ]VÌLHHŽÂˆÝ]VÌMHHNÂˆˆHÝ]VÌ×NÂˆHHÝ]VÍ×NÂˆHÝ]VÌLWNÂˆÝ]VÌ×HHÝ]VÌMWNÂˆÝ]VÍ×HHŽÂˆÝ]VÌLWHHNÂˆÝ]VÌMWHHÂˆ›Üˆ
]ˆHÈˆMŽÈˆ
ÏH
HÂˆÛÛœÝÌHÝ]VÚ—NÂˆÛÛœÝÌHHÝ]VÚˆ
ÈWNÂˆÛÛœÝÌˆHÝ]VÚˆ
È—NÂˆÛÛœÝÌÈHÝ]VÚˆ
È×NÂˆHÌˆÌHˆÌˆˆÌÎÂˆÝ]VÚ—HHˆ\Ë—ÛZ^ÛÛÜÌˆÌWNÂˆÝ]VÚˆ
ÈWHHˆ\Ë—ÛZ^ÛÛÜÌHˆÌ—NÂˆÝ]VÚˆ
È—HHˆ\Ë—ÛZ^ÛÛÜÌˆˆÌ×NÂˆÝ]VÚˆ
È×HHˆ\Ë—ÛZ^ÛÛÜÌÈˆÌNÂˆBˆ›Üˆ
]ˆHÈHH
ˆMŽÈˆMŽÈ
ÊÚ‹
ÊÚÊHÂˆÝ]VÚ—HHÙ^VÚ×NÂˆBˆBˆ›Üˆ
]ˆHÈˆMŽÈ
ÊÚŠHÂˆÝ]VÚ—HHÖÜÝ]VÚ—WNÂˆBˆˆHÝ]VÌWNÂˆÝ]VÌWHHÝ]VÍWNÂˆÝ]VÍWHHÝ]VÎWNÂˆÝ]VÎWHHÝ]VÌL×NÂˆÝ]VÌL×HHŽÂˆˆHÝ]VÌ—NÂˆHHÝ]VÍ—NÂˆÝ]VÌ—HHÝ]VÌLNÂˆÝ]VÍ—HHÝ]VÌMNÂˆÝ]VÌLHHŽÂˆÝ]VÌMHHNÂˆˆHÝ]VÌ×NÂˆHHÝ]VÍ×NÂˆHÝ]VÌLWNÂˆÝ]VÌ×HHÝ]VÌMWNÂˆÝ]VÍ×HHŽÂˆÝ]VÌLWHHNÂˆÝ]VÌMWHHÂˆ›Üˆ
]ˆHÈH\Ë—ÚÙ^TÚ^™NÈˆMŽÈ
ÊÚ‹
ÊÚÊHÂˆÝ]VÚ—HHÙ^VÚ×NÂˆBˆ™]\›ˆÝ]NÂˆBˆÙXÜž\›ØÚÌŠ]Kš[˜[^™JHÂˆÛÛœÝÛÝ\˜ÙS[™ÝH]K›[™ÝÂˆ]Y™™\ˆH\Ë˜Y™™\‹ˆY™™\“[™ÝH\Ë˜Y™™\”ÜÚ][ÛŽÂˆÛÛœÝ™\Ý[H×NÂˆ]]ˆH\Ëš]ŽÂˆ›Üˆ
]HHÈHÛÝ\˜ÙS[™ÝÈ
ÊÚJHÂˆY™™\–ØY™™\“[™ÝHH]VÚWNÂˆ
ÊØY™™\“[™ÝÂˆYˆ
Y™™\“[™ÝMŠHÂˆÛÛ[YNÂˆBˆÛÛœÝZ[ˆH\Ë—ÙXÜž\
Y™™\‹\Ë—ÚÙ^JNÂˆ›Üˆ
]ˆHÈˆMŽÈ
ÊÚŠHÂˆZ[–Ú—HH]–Ú—NÂˆBˆ]ˆHY™™\ŽÂˆ™\Ý[œ\Ú
Z[ŠNÂˆY™™\ˆH™]ÈZ[\œ˜^JMŠNÂˆY™™\“[™ÝHÂˆBˆ\Ë˜Y™™\ˆHY™™\ŽÂˆ\Ë˜Y™™\“[™ÝHY™™\“[™ÝÂˆ\Ëš]ˆH]ŽÂˆYˆ
™\Ý[›[™ÝOOH
HÂˆ™]\›ˆ™]ÈZ[\œ˜^J
NÂˆBˆ]Ý]][™ÝHMˆ
ˆ™\Ý[›[™ÝÂˆYˆ
š[˜[^™JHÂˆÛÛœÝ\Ý›ØÚÈH™\Ý[˜]
LJNÂˆ]Ó[ˆH\Ý›ØÚÖÌMWNÂˆYˆ
Ó[ˆHMŠHÂˆ›Üˆ
]HHMKZHHMˆHÓ[ŽÈHHZNÈKZJHÂˆYˆ
\Ý›ØÚÖÚWHOOHÓ[ŠHÂˆÓ[ˆHÂˆœ™XZÎÂˆBˆBˆÝ]][™ÝOHÓ[ŽÂˆ™\Ý[Ü™\Ý[›[™ÝHWHH\Ý›ØÚËœÝX˜\œ˜^JMˆHÓ[ŠNÂˆBˆBˆÛÛœÝÝ]]H™]ÈZ[\œ˜^JÝ]][™Ý
NÂˆ›Üˆ
]HHˆHZHH™\Ý[›[™ÝÈHZNÈ
ÊÚKˆ
ÏHMŠHÂˆÝ]]œÙ]
™\Ý[ÚWKŠNÂˆBˆ™]\›ˆÝ]]ÂˆBˆXÜž\›ØÚÊ]Kš[˜[^™K]ˆH[
HÂˆÛÛœÝÛÝ\˜ÙS[™ÝH]K›[™ÝÂˆÛÛœÝY™™\ˆH\Ë˜Y™™\ŽÂˆ]Y™™\“[™ÝH\Ë˜Y™™\”ÜÚ][ÛŽÂˆYˆ
]ŠHÂˆ\Ëš]ˆH]ŽÂˆH[ÙHÂˆ›Üˆ
]HHÈY™™\“[™ÝMˆ	‰ˆHÛÝ\˜ÙS[™ÝÈ
ÊÚK
ÊØY™™\“[™Ý
HÂˆY™™\–ØY™™\“[™ÝHH]VÚWNÂˆBˆYˆ
Y™™\“[™ÝMŠHÂˆ\Ë˜Y™™\“[™ÝHY™™\“[™ÝÂˆ™]\›ˆ™]ÈZ[\œ˜^J
NÂˆBˆ\Ëš]ˆHY™™\ŽÂˆ]HH]KœÝX˜\œ˜^JMŠNÂˆBˆ\Ë˜Y™™\ˆH™]ÈZ[\œ˜^JMŠNÂˆ\Ë˜Y™™\“[™ÝHÂˆ\Ë™XÜž\›ØÚÈH\Ë—ÙXÜž\›ØÚÌŽÂˆ™]\›ˆ\Ë™XÜž\›ØÚÊ]Kš[˜[^™JNÂˆBˆ[˜Üž\
]K]ŠHÂˆÛÛœÝÛÝ\˜ÙS[™ÝH]K›[™ÝÂˆ]Y™™\ˆH\Ë˜Y™™\‹ˆY™™\“[™ÝH\Ë˜Y™™\”ÜÚ][ÛŽÂˆÛÛœÝ™\Ý[H×NÂˆ]ˆH™]ÈZ[\œ˜^JMŠNÂˆ›Üˆ
]HHÈHÛÝ\˜ÙS[™ÝÈ
ÊÚJHÂˆY™™\–ØY™™\“[™ÝHH]VÚWNÂˆ
ÊØY™™\“[™ÝÂˆYˆ
Y™™\“[™ÝMŠHÂˆÛÛ[YNÂˆBˆ›Üˆ
]ˆHÈˆMŽÈ
ÊÚŠHÂˆY™™\–Ú—HH]–Ú—NÂˆBˆÛÛœÝÚ\\ˆH\Ë—Ù[˜Üž\
Y™™\‹\Ë—ÚÙ^JNÂˆ]ˆHÚ\\ŽÂˆ™\Ý[œ\Ú
Ú\\ŠNÂˆY™™\ˆH™]ÈZ[\œ˜^JMŠNÂˆY™™\“[™ÝHÂˆBˆ\Ë˜Y™™\ˆHY™™\ŽÂˆ\Ë˜Y™™\“[™ÝHY™™\“[™ÝÂˆ\Ëš]ˆH]ŽÂˆYˆ
™\Ý[›[™ÝOOH
HÂˆ™]\›ˆ™]ÈZ[\œ˜^J
NÂˆBˆÛÛœÝÝ]][™ÝHMˆ
ˆ™\Ý[›[™ÝÂˆÛÛœÝÝ]]H™]ÈZ[\œ˜^JÝ]][™Ý
NÂˆ›Üˆ
]HHˆHZHH™\Ý[›[™ÝÈHZNÈ
ÊÚKˆ
ÏHMŠHÂˆÝ]]œÙ]
™\Ý[ÚWKŠNÂˆBˆ™]\›ˆÝ]]ÂˆBŸB˜Û\ÜÈQTÌLŽÚ\\ˆ^[™ÈQTÐ˜\ÙPÚ\\ˆÂˆÜ˜ÛÛˆH™]ÈZ[\œ˜^JÌK‹LŒX‹Í‹˜ËX‹XK™‹YK˜ËŒËÍ‹MËÍK˜KŒËÙ˜KY‹ÍKLKÎKÌ‹MË™ŒKÌ‹Y‹KKMÌË‹ØËËYØKÍNØ‹K‹LŒX‹Í‹˜ËX‹XK™‹YK˜ËŒËÍ‹MËÍK˜KŒËÙ˜KY‹ÍKLKÎKÌ‹MË™ŒKÌ‹Y‹KKMÌË‹ØËËYØKÍNØ‹K‹LŒX‹Í‹˜ËX‹XK™‹YK˜ËŒËÍ‹MËÍK˜KŒËÙ˜KY‹ÍKLKÎKÌ‹MË™ŒKÌ‹Y‹KKMÌË‹ØËËYØKÍNØ‹K‹LŒX‹Í‹˜ËX‹XK™‹YK˜ËŒËÍ‹MËÍK˜KŒËÙ˜KY‹ÍKLKÎKÌ‹MË™ŒKÌ‹Y‹KKMÌË‹ØËËYØKÍNØ‹K‹LŒX‹Í‹˜ËX‹XK™‹YK˜ËŒËÍ‹MËÍK˜KŒËÙ˜KY‹ÍKLKÎKÌ‹MË™ŒKÌ‹Y‹KKMÌË‹ØËËYØKÍNØ‹JNÂˆÛÛœÝXÝÜŠÙ^JHÂˆÝ\\Š
NÂˆ\Ë—ØÞXÛ\ÓÙ”™\]][ÛˆHLÂˆ\Ë—ÚÙ^TÚ^™HHMŒÂˆ\Ë—ÚÙ^HH\Ë—Ù^[™Ù^JÙ^JNÂˆBˆÙ^[™Ù^JÚ\\’Ù^JHÂˆÛÛœÝˆHMÍŽÂˆÛÛœÝÈH\Ë—ÜÎÂˆÛÛœÝ˜ÛÛˆH\Ë—Ü˜ÛÛŽÂˆÛÛœÝ™\Ý[H™]ÈZ[\œ˜^JŠNÂˆ™\Ý[œÙ]
Ú\\’Ù^JNÂˆ›Üˆ
]ˆHM‹HHNÈˆŽÈ
ÊÚJHÂˆ]HH™\Ý[ÚˆH×NÂˆ]ˆH™\Ý[ÚˆH—NÂˆ]ÈH™\Ý[ÚˆHWNÂˆ]H™\Ý[ÚˆHNÂˆHHÖÝWNÂˆˆHÖÝ—NÂˆÈHÖÝ×NÂˆHÖÝNÂˆHH˜ÛÛ–ÚWNÂˆ›Üˆ
]ˆHÈˆÈ
ÊÛŠHÂˆ™\Ý[Ú—HHHH™\Ý[ÚˆHM—NÂˆŠÊÎÂˆ™\Ý[Ú—HHˆH™\Ý[ÚˆHM—NÂˆŠÊÎÂˆ™\Ý[Ú—HHÈH™\Ý[ÚˆHM—NÂˆŠÊÎÂˆ™\Ý[Ú—HHH™\Ý[ÚˆHM—NÂˆŠÊÎÂˆBˆBˆ™]\›ˆ™\Ý[ÂˆBŸB˜Û\ÜÈQTÌMÚ\\ˆ^[™ÈQTÐ˜\ÙPÚ\\ˆÂˆÛÛœÝXÝÜŠÙ^JHÂˆÝ\\Š
NÂˆ\Ë—ØÞXÛ\ÓÙ”™\]][ÛˆHMÂˆ\Ë—ÚÙ^TÚ^™HHŒÂˆ\Ë—ÚÙ^HH\Ë—Ù^[™Ù^JÙ^JNÂˆBˆÙ^[™Ù^JÚ\\’Ù^JHÂˆÛÛœÝˆHÂˆÛÛœÝÈH\Ë—ÜÎÂˆÛÛœÝ™\Ý[H™]ÈZ[\œ˜^JŠNÂˆ™\Ý[œÙ]
Ú\\’Ù^JNÂˆ]ˆHNÂˆ]K‹ËÂˆ›Üˆ
]ˆHÌ‹HHNÈˆŽÈ
ÊÚJHÂˆYˆ
ˆ	HÌˆOOHMŠHÂˆHHÖÝWNÂˆˆHÖÝ—NÂˆÈHÖÝ×NÂˆHÖÝNÂˆH[ÙHYˆ
ˆ	HÌˆOOH
HÂˆHH™\Ý[ÚˆH×NÂˆˆH™\Ý[ÚˆH—NÂˆÈH™\Ý[ÚˆHWNÂˆH™\Ý[ÚˆHNÂˆHHÖÝWNÂˆˆHÖÝ—NÂˆÈHÖÝ×NÂˆHÖÝNÂˆHHŽÂˆYˆ

ˆHJHHMŠHÂˆˆH
ˆˆXŠH	ˆ™ŽÂˆBˆBˆ›Üˆ
]ˆHÈˆÈ
ÊÛŠHÂˆ™\Ý[Ú—HHHH™\Ý[ÚˆHÌ—NÂˆŠÊÎÂˆ™\Ý[Ú—HHˆH™\Ý[ÚˆHÌ—NÂˆŠÊÎÂˆ™\Ý[Ú—HHÈH™\Ý[ÚˆHÌ—NÂˆŠÊÎÂˆ™\Ý[Ú—HHH™\Ý[ÚˆHÌ—NÂˆŠÊÎÂˆBˆBˆ™]\›ˆ™\Ý[ÂˆBŸB˜Û\ÜÈ˜\ÙHÂˆÚ\Ú
\ÜÝÛÜ™[œ]\Ù\ž]\ÊHÂˆ[œ™XXÚX›JXœÝ˜XÝY]ÙÚ\ÚØ[YŠNÂˆBˆÚXÚÓÝÛ™\”\ÜÝÛÜ™
\ÜÝÛÜ™ÝÛ™\•˜[Y][Û”Ø[\Ù\ž]\ËÝÛ™\”\ÜÝÛÜ™
HÂˆÛÛœÝ\Ú]HH™]ÈZ[\œ˜^J\ÜÝÛÜ™›[™Ý
ÈMŠNÂˆ\Ú]KœÙ]
\ÜÝÛÜ™
NÂˆ\Ú]KœÙ]
ÝÛ™\•˜[Y][Û”Ø[\ÜÝÛÜ™›[™Ý
NÂˆ\Ú]KœÙ]
\Ù\ž]\Ë\ÜÝÛÜ™›[™Ý
ÈÝÛ™\•˜[Y][Û”Ø[›[™Ý
NÂˆÛÛœÝ™\Ý[H\Ë—Ú\Ú
\ÜÝÛÜ™\Ú]K\Ù\ž]\ÊNÂˆ™]\›ˆ\Ð\œ˜^Q\]X[
™\Ý[ÝÛ™\”\ÜÝÛÜ™
NÂˆBˆÚXÚÕ\Ù\”\ÜÝÛÜ™
\ÜÝÛÜ™\Ù\•˜[Y][Û”Ø[\Ù\”\ÜÝÛÜ™
HÂˆÛÛœÝ\Ú]HH™]ÈZ[\œ˜^J\ÜÝÛÜ™›[™Ý
È
NÂˆ\Ú]KœÙ]
\ÜÝÛÜ™
NÂˆ\Ú]KœÙ]
\Ù\•˜[Y][Û”Ø[\ÜÝÛÜ™›[™Ý
NÂˆÛÛœÝ™\Ý[H\Ë—Ú\Ú
\ÜÝÛÜ™\Ú]K×JNÂˆ™]\›ˆ\Ð\œ˜^Q\]X[
™\Ý[\Ù\”\ÜÝÛÜ™
NÂˆBˆÙ]ÝÛ™\’Ù^J\ÜÝÛÜ™ÝÛ™\’Ù^TØ[\Ù\ž]\ËÝÛ™\‘[˜Üž\[ÛŠHÂˆÛÛœÝ\Ú]HH™]ÈZ[\œ˜^J\ÜÝÛÜ™›[™Ý
ÈMŠNÂˆ\Ú]KœÙ]
\ÜÝÛÜ™
NÂˆ\Ú]KœÙ]
ÝÛ™\’Ù^TØ[\ÜÝÛÜ™›[™Ý
NÂˆ\Ú]KœÙ]
\Ù\ž]\Ë\ÜÝÛÜ™›[™Ý
ÈÝÛ™\’Ù^TØ[›[™Ý
NÂˆÛÛœÝÙ^HH\Ë—Ú\Ú
\ÜÝÛÜ™\Ú]K\Ù\ž]\ÊNÂˆÛÛœÝÚ\\ˆH™]ÈQTÌMÚ\\ŠÙ^JNÂˆ™]\›ˆÚ\\‹™XÜž\›ØÚÊÝÛ™\‘[˜Üž\[Û‹˜[ÙK™]ÈZ[\œ˜^JMŠJNÂˆBˆÙ]\Ù\’Ù^J\ÜÝÛÜ™\Ù\’Ù^TØ[\Ù\‘[˜Üž\[ÛŠHÂˆÛÛœÝ\Ú]HH™]ÈZ[\œ˜^J\ÜÝÛÜ™›[™Ý
È
NÂˆ\Ú]KœÙ]
\ÜÝÛÜ™
NÂˆ\Ú]KœÙ]
\Ù\’Ù^TØ[\ÜÝÛÜ™›[™Ý
NÂˆÛÛœÝÙ^HH\Ë—Ú\Ú
\ÜÝÛÜ™\Ú]K×JNÂˆÛÛœÝÚ\\ˆH™]ÈQTÌMÚ\\ŠÙ^JNÂˆ™]\›ˆÚ\\‹™XÜž\›ØÚÊ\Ù\‘[˜Üž\[Û‹˜[ÙK™]ÈZ[\œ˜^JMŠJNÂˆBŸB˜Û\ÜÈŒMÈ^[™È˜\ÙHÂˆÚ\Ú
\ÜÝÛÜ™[œ]\Ù\ž]\ÊHÂˆ™]\›ˆØ[Ý[]TÒLMŠ[œ][œ]›[™Ý
NÂˆBŸB˜Û\ÜÈŒŒ^[™È˜\ÙHÂˆÚ\Ú
\ÜÝÛÜ™[œ]\Ù\ž]\ÊHÂˆ]ÈHØ[Ý[]TÒLMŠ[œ][œ]›[™Ý
KœÝX˜\œ˜^JÌŠNÂˆ]HHÌNÂˆ]HHÂˆÚ[H
HK˜]
LJHˆHHÌŠHÂˆÛÛœÝÛÛXš[™Y[™ÝH\ÜÝÛÜ™›[™Ý
ÈË›[™Ý
È\Ù\ž]\Ë›[™ÝˆÛÛXš[™Y\œ˜^HH™]ÈZ[\œ˜^JÛÛXš[™Y[™Ý
NÂˆ]Üš]SÙ™œÙ]HÂˆÛÛXš[™Y\œ˜^KœÙ]
\ÜÝÛÜ™Üš]SÙ™œÙ]
NÂˆÜš]SÙ™œÙ]
ÏH\ÜÝÛÜ™›[™ÝÂˆÛÛXš[™Y\œ˜^KœÙ]
ËÜš]SÙ™œÙ]
NÂˆÜš]SÙ™œÙ]
ÏHË›[™ÝÂˆÛÛXš[™Y\œ˜^KœÙ]
\Ù\ž]\ËÜš]SÙ™œÙ]
NÂˆÛÛœÝÌHH™]ÈZ[\œ˜^JÛÛXš[™Y[™Ý
ˆ
NÂˆ›Üˆ
]ˆHÜÈHÈˆÈŠÊËÜÈ
ÏHÛÛXš[™Y[™Ý
HÂˆÌKœÙ]
ÛÛXš[™Y\œ˜^KÜÊNÂˆBˆÛÛœÝÚ\\ˆH™]ÈQTÌLŽÚ\\ŠËœÝX˜\œ˜^JMŠJNÂˆHHÚ\\‹™[˜Üž\
ÌKËœÝX˜\œ˜^JM‹ÌŠJNÂˆÛÛœÝ™[XZ[™\ˆHX]œÝ[T™XÚ\ÙJKœÛXÙJMŠJH	HÎÂˆYˆ
™[XZ[™\ˆOOH
HÂˆÈHØ[Ý[]TÒLMŠKK›[™Ý
NÂˆH[ÙHYˆ
™[XZ[™\ˆOOHJHÂˆÈHØ[Ý[]TÒLÎ
KK›[™Ý
NÂˆH[ÙHYˆ
™[XZ[™\ˆOOHŠHÂˆÈHØ[Ý[]TÒMLLŠKK›[™Ý
NÂˆBˆJÊÎÂˆBˆ™]\›ˆËœÝX˜\œ˜^JÌŠNÂˆBŸB˜Û\ÜÈÚ\\•˜[œÙ›Ü›HÂˆÛÛœÝXÝÜŠÝš[™ÐÚ\\ÛÛœÝXÝÜ‹Ý™X[PÚ\\ÛÛœÝXÝÜŠHÂˆ\Ë”Ýš[™ÐÚ\\ÛÛœÝXÝÜˆHÝš[™ÐÚ\\ÛÛœÝXÝÜŽÂˆ\Ë”Ý™X[PÚ\\ÛÛœÝXÝÜˆHÝ™X[PÚ\\ÛÛœÝXÝÜŽÂˆBˆÜ™X]TÝ™X[JÝ™X[K[™Ý
HÂˆÛÛœÝÚ\\ˆH™]È\Ë”Ý™X[PÚ\\ÛÛœÝXÝÜŠ
NÂˆ™]\›ˆ™]ÈXÜž\Ý™X[JÝ™X[K[™Ý[˜Ý[ÛˆÚ\\•˜[œÙ›Ü›QXÜž\Ý™X[J]Kš[˜[^™JHÂˆ™]\›ˆÚ\\‹™XÜž\›ØÚÊ]Kš[˜[^™JNÂˆJNÂˆBˆXÜž\Ýš[™ÊÊHÂˆÛÛœÝÚ\\ˆH™]È\Ë”Ýš[™ÐÚ\\ÛÛœÝXÝÜŠ
NÂˆ]]HHÝš[™ÕÐž]\ÊÊNÂˆ]HHÚ\\‹™XÜž\›ØÚÊ]KYJNÂˆ™]\›ˆž]\ÕÔÝš[™Ê]JNÂˆBˆ[˜Üž\Ýš[™ÊÊHÂˆÛÛœÝÚ\\ˆH™]È\Ë”Ýš[™ÐÚ\\ÛÛœÝXÝÜŠ
NÂˆYˆ
Ú\\ˆ[œÝ[˜Ù[ÙˆQTÐ˜\ÙPÚ\\ŠHÂˆÛÛœÝÝ“[ˆHË›[™ÝÂˆÛÛœÝYHMˆHÝ“[ˆ	HMŽÂˆÈ
ÏHÝš[™Ë™œ›ÛPÚ\ÛÙJY
Kœ™\X]
Y
NÂˆÛÛœÝ]ˆH™]ÈZ[\œ˜^JMŠNÂˆÜž\Ë™Ù]˜[™ÛU˜[Y\Ê]ŠNÂˆ]]HHÝš[™ÕÐž]\ÊÊNÂˆ]HHÚ\\‹™[˜Üž\
]K]ŠNÂˆÛÛœÝYˆH™]ÈZ[\œ˜^JMˆ
È]K›[™Ý
NÂˆY‹œÙ]
]ŠNÂˆY‹œÙ]
]KMŠNÂˆ™]\›ˆž]\ÕÔÝš[™ÊYŠNÂˆBˆ]]HHÝš[™ÕÐž]\ÊÊNÂˆ]HHÚ\\‹™[˜Üž\
]JNÂˆ™]\›ˆž]\ÕÔÝš[™Ê]JNÂˆBŸB˜Û\ÜÈÚ\\•˜[œÙ›Ü›Q˜XÝÜžHÂˆÝ]XÈÙ]ÙY˜][\ÜÝÛÜ™ž]\Ê
HÂˆ™]\›ˆÚYÝÊ\Ë—ÙY˜][\ÜÝÛÜ™ž]\È‹™]ÈZ[\œ˜^JÌŽ™‹KYKKÍKKKKM‹™‹˜KK™K™K‹ŽÙK™‹ËNK™KLËŽKØWJJNÂˆBˆØÜ™X]Q[˜Üž\[Û’Ù^LŒ
™]š\Ú[Û‹\ÜÝÛÜ™ÝÛ™\”\ÜÝÛÜ™ÝÛ™\•˜[Y][Û”Ø[ÝÛ™\’Ù^TØ[Pž]\Ë\Ù\”\ÜÝÛÜ™\Ù\•˜[Y][Û”Ø[\Ù\’Ù^TØ[ÝÛ™\‘[˜Üž\[Û‹\Ù\‘[˜Üž\[Û‹\›\ÊHÂˆYˆ
\ÜÝÛÜ™
HÂˆÛÛœÝ\ÜÝÛÜ™[™ÝHX]›Z[ŠLË\ÜÝÛÜ™›[™Ý
NÂˆ\ÜÝÛÜ™H\ÜÝÛÜ™œÝX˜\œ˜^J\ÜÝÛÜ™[™Ý
NÂˆH[ÙHÂˆ\ÜÝÛÜ™H×NÂˆBˆÛÛœÝ[ÛÜš]HH™]š\Ú[ÛˆOOHˆÈ™]ÈŒŒ

Hˆ™]ÈŒMÊ
NÂˆYˆ
[ÛÜš]K˜ÚXÚÕ\Ù\”\ÜÝÛÜ™
\ÜÝÛÜ™\Ù\•˜[Y][Û”Ø[\Ù\”\ÜÝÛÜ™
JHÂˆ™]\›ˆ[ÛÜš]K™Ù]\Ù\’Ù^J\ÜÝÛÜ™\Ù\’Ù^TØ[\Ù\‘[˜Üž\[ÛŠNÂˆH[ÙHYˆ
\ÜÝÛÜ™›[™Ý	‰ˆ[ÛÜš]K˜ÚXÚÓÝÛ™\”\ÜÝÛÜ™
\ÜÝÛÜ™ÝÛ™\•˜[Y][Û”Ø[Pž]\ËÝÛ™\”\ÜÝÛÜ™
JHÂˆ™]\›ˆ[ÛÜš]K™Ù]ÝÛ™\’Ù^J\ÜÝÛÜ™ÝÛ™\’Ù^TØ[Pž]\ËÝÛ™\‘[˜Üž\[ÛŠNÂˆBˆ™]\›ˆ[ÂˆBˆÜ™\\™RÙ^Q]Jš[RY\ÜÝÛÜ™ÝÛ™\”\ÜÝÛÜ™\Ù\”\ÜÝÛÜ™›YÜË™]š\Ú[Û‹Ù^S[™Ý[˜Üž\Y]Y]JHÂˆÛÛœÝ\Ú]TÚ^™HH
ÈÝÛ™\”\ÜÝÛÜ™›[™Ý
Èš[RY›[™ÝÂˆÛÛœÝ\Ú]HH™]ÈZ[\œ˜^J\Ú]TÚ^™JNÂˆ]HHˆ‹ˆŽÂˆYˆ
\ÜÝÛÜ™
HÂˆˆHX]›Z[ŠÌ‹\ÜÝÛÜ™›[™Ý
NÂˆ›Üˆ
ÈHŽÈ
ÊÚJHÂˆ\Ú]VÚWHH\ÜÝÛÜ™ÚWNÂˆBˆBˆˆHÂˆÚ[H
HÌŠHÂˆ\Ú]VÚJÊ×HHÚ\\•˜[œÙ›Ü›Q˜XÝÜžK—ÙY˜][\ÜÝÛÜ™ž]\ÖÚŠÊ×NÂˆBˆ\Ú]KœÙ]
ÝÛ™\”\ÜÝÛÜ™JNÂˆH
ÏHÝÛ™\”\ÜÝÛÜ™›[™ÝÂˆ\Ú]VÚJÊ×HH›YÜÈ	ˆ™ŽÂˆ\Ú]VÚJÊ×HH›YÜÈˆ	ˆ™ŽÂˆ\Ú]VÚJÊ×HH›YÜÈˆMˆ	ˆ™ŽÂˆ\Ú]VÚJÊ×HH›YÜÈˆ	ˆ™ŽÂˆ\Ú]KœÙ]
š[RYJNÂˆH
ÏHš[RY›[™ÝÂˆYˆ
™]š\Ú[ÛˆH	‰ˆY[˜Üž\Y]Y]JHÂˆ\Ú]K™š[
™‹KH
È
NÂˆH
ÏHÂˆBˆ]\ÚHØ[Ý[]SQJ\Ú]KJNÂˆÛÛœÝÙ^S[™Ý[ž]\ÈHÙ^S[™ÝˆÎÂˆYˆ
™]š\Ú[ÛˆHÊHÂˆ›Üˆ
ˆHÈˆLÈ
ÊÚŠHÂˆ\ÚHØ[Ý[]SQJ\ÚÙ^S[™Ý[ž]\ÊNÂˆBˆBˆÛÛœÝ[˜Üž\[Û’Ù^HH\ÚœÝX˜\œ˜^JÙ^S[™Ý[ž]\ÊNÂˆ]Ú\\‹ÚXÚÑ]NÂˆYˆ
™]š\Ú[ÛˆHÊHÂˆHHÂˆ\Ú]KœÙ]
Ú\\•˜[œÙ›Ü›Q˜XÝÜžK—ÙY˜][\ÜÝÛÜ™ž]\ËJNÂˆH
ÏHÌŽÂˆ\Ú]KœÙ]
š[RYJNÂˆH
ÏHš[RY›[™ÝÂˆÚ\\ˆH™]ÈTÑ›Ý\Ú\\Š[˜Üž\[Û’Ù^JNÂˆÚXÚÑ]HHÚ\\‹™[˜Üž\›ØÚÊØ[Ý[]SQJ\Ú]KJJNÂˆˆH[˜Üž\[Û’Ù^K›[™ÝÂˆÛÛœÝ\š]™YÙ^HH™]ÈZ[\œ˜^JŠNÂˆ›Üˆ
ˆHNÈˆHNNÈ
ÊÚŠHÂˆ›Üˆ
]ÈHÈÈŽÈ
ÊÚÊHÂˆ\š]™YÙ^VÚ×HH[˜Üž\[Û’Ù^VÚ×HˆŽÂˆBˆÚ\\ˆH™]ÈTÑ›Ý\Ú\\Š\š]™YÙ^JNÂˆÚXÚÑ]HHÚ\\‹™[˜Üž\›ØÚÊÚXÚÑ]JNÂˆBˆH[ÙHÂˆÚ\\ˆH™]ÈTÑ›Ý\Ú\\Š[˜Üž\[Û’Ù^JNÂˆÚXÚÑ]HHÚ\\‹™[˜Üž\›ØÚÊÚ\\•˜[œÙ›Ü›Q˜XÝÜžK—ÙY˜][\ÜÝÛÜ™ž]\ÊNÂˆBˆ™]\›ˆÚXÚÑ]K™]™\žJ
]KÊHOˆ\Ù\”\ÜÝÛÜ™Ú×HOOH]JHÈ[˜Üž\[Û’Ù^Hˆ[ÂˆBˆÙXÛÙU\Ù\”\ÜÝÛÜ™
\ÜÝÛÜ™ÝÛ™\”\ÜÝÛÜ™™]š\Ú[Û‹Ù^S[™Ý
HÂˆÛÛœÝ\Ú]HH™]ÈZ[\œ˜^JÌŠNÂˆ]HHÂˆÛÛœÝˆHX]›Z[ŠÌ‹\ÜÝÛÜ™›[™Ý
NÂˆ›Üˆ
ÈHŽÈ
ÊÚJHÂˆ\Ú]VÚWHH\ÜÝÛÜ™ÚWNÂˆBˆ]ˆHÂˆÚ[H
HÌŠHÂˆ\Ú]VÚJÊ×HHÚ\\•˜[œÙ›Ü›Q˜XÝÜžK—ÙY˜][\ÜÝÛÜ™ž]\ÖÚŠÊ×NÂˆBˆ]\ÚHØ[Ý[]SQJ\Ú]KJNÂˆÛÛœÝÙ^S[™Ý[ž]\ÈHÙ^S[™ÝˆÎÂˆYˆ
™]š\Ú[ÛˆHÊHÂˆ›Üˆ
ˆHÈˆLÈ
ÊÚŠHÂˆ\ÚHØ[Ý[]SQJ\Ú\Ú›[™Ý
NÂˆBˆBˆ]Ú\\‹\Ù\”\ÜÝÛÜ™ÂˆYˆ
™]š\Ú[ÛˆHÊHÂˆ\Ù\”\ÜÝÛÜ™HÝÛ™\”\ÜÝÛÜ™ÂˆÛÛœÝ\š]™YÙ^HH™]ÈZ[\œ˜^JÙ^S[™Ý[ž]\ÊNÂˆ›Üˆ
ˆHNNÈˆHÈ‹KJHÂˆ›Üˆ
]ÈHÈÈÙ^S[™Ý[ž]\ÎÈ
ÊÚÊHÂˆ\š]™YÙ^VÚ×HH\ÚÚ×HˆŽÂˆBˆÚ\\ˆH™]ÈTÑ›Ý\Ú\\Š\š]™YÙ^JNÂˆ\Ù\”\ÜÝÛÜ™HÚ\\‹™[˜Üž\›ØÚÊ\Ù\”\ÜÝÛÜ™
NÂˆBˆH[ÙHÂˆÚ\\ˆH™]ÈTÑ›Ý\Ú\\Š\ÚœÝX˜\œ˜^JÙ^S[™Ý[ž]\ÊJNÂˆ\Ù\”\ÜÝÛÜ™HÚ\\‹™[˜Üž\›ØÚÊÝÛ™\”\ÜÝÛÜ™
NÂˆBˆ™]\›ˆ\Ù\”\ÜÝÛÜ™ÂˆBˆØZ[Øš™XÝÙ^J[KÙ[‹[˜Üž\[Û’Ù^K\ÐY\ÈH˜[ÙJHÂˆÛÛœÝˆH[˜Üž\[Û’Ù^K›[™ÝÂˆÛÛœÝÙ^HH™]ÈZ[\œ˜^Jˆ
ÈJNÂˆÙ^KœÙ]
[˜Üž\[Û’Ù^JNÂˆ]HHŽÂˆÙ^VÚJÊ×HH[H	ˆ™ŽÂˆÙ^VÚJÊ×HH[Hˆ	ˆ™ŽÂˆÙ^VÚJÊ×HH[HˆMˆ	ˆ™ŽÂˆÙ^VÚJÊ×HHÙ[ˆ	ˆ™ŽÂˆÙ^VÚJÊ×HHÙ[ˆˆ	ˆ™ŽÂˆYˆ
\ÐY\ÊHÂˆÙ^VÚJÊ×HHÌÎÂˆÙ^VÚJÊ×HHNÂˆÙ^VÚJÊ×HH˜ÎÂˆÙ^VÚJÊ×HHMÂˆBˆÛÛœÝ\ÚHØ[Ý[]SQJÙ^KJNÂˆ™]\›ˆ\ÚœÝX˜\œ˜^JX]›Z[Šˆ
ÈKMŠJNÂˆBˆØZ[Ú\\ÛÛœÝXÝÜŠÙ‹˜[YK[KÙ[‹Ù^JHÂˆYˆ
J˜[YH[œÝ[˜Ù[Ùˆ˜[YJJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[YÜž\š[\ˆ˜[YKˆŠNÂˆBˆÛÛœÝÙ[ˆH\ÎÂˆÛÛœÝÜž\š[\ˆHÙ‹™Ù]
˜[YK›˜[YJNÂˆÛÛœÝÙ›HHÜž\š[\Ë™Ù]
Ñ“HŠNÂˆYˆ
XÙ›HÙ›K›˜[YHOOH“›Û™HŠHÂˆ™]\›ˆ[˜Ý[Ûˆ

HÂˆ™]\›ˆ™]È[Ú\\Š
NÂˆNÂˆBˆYˆ
Ù›K›˜[YHOOH•ŒˆŠHÂˆ™]\›ˆ[˜Ý[Ûˆ

HÂˆ™]\›ˆ™]ÈTÑ›Ý\Ú\\ŠÙ[‹ˆØZ[Øš™XÝÙ^J[KÙ[‹Ù^K˜[ÙJJNÂˆNÂˆBˆYˆ
Ù›K›˜[YHOOHQTÕŒˆŠHÂˆ™]\›ˆ[˜Ý[Ûˆ

HÂˆ™]\›ˆ™]ÈQTÌLŽÚ\\ŠÙ[‹ˆØZ[Øš™XÝÙ^J[KÙ[‹Ù^KYJJNÂˆNÂˆBˆYˆ
Ù›K›˜[YHOOHQTÕŒÈŠHÂˆ™]\›ˆ[˜Ý[Ûˆ

HÂˆ™]\›ˆ™]ÈQTÌMÚ\\ŠÙ^JNÂˆNÂˆBˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ•[šÛ›ÝÛˆÜž\ÈY]ÙŠNÂˆBˆÛÛœÝXÝÜŠXÝš[RY\ÜÝÛÜ™
HÂˆÛÛœÝš[\ˆHXÝ™Ù]
‘š[\ˆŠNÂˆYˆ
Z\Ó˜[YJš[\‹”Ý[™\™ŠJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ[šÛ›ÝÛˆ[˜Üž\[ÛˆY]ÙŠNÂˆBˆ\Ë™š[\“˜[YHHš[\‹›˜[YNÂˆ\Ë™XÝHXÝÂˆÛÛœÝ[ÛÜš]HHXÝ™Ù]
•ˆŠNÂˆYˆ
S[X™\‹š\Ò[YÙ\Š[ÛÜš]JH[ÛÜš]HOOHH	‰ˆ[ÛÜš]HOOHˆ	‰ˆ[ÛÜš]HOOH	‰ˆ[ÛÜš]HOOHJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ[œÝ\ÜY[˜Üž\[Ûˆ[ÛÜš]HŠNÂˆBˆ\Ë˜[ÛÜš]HH[ÛÜš]NÂˆ]Ù^S[™ÝHXÝ™Ù]
“[™ÝŠNÂˆYˆ
ZÙ^S[™Ý
HÂˆYˆ
[ÛÜš]HHÊHÂˆÙ^S[™ÝHÂˆH[ÙHÂˆÛÛœÝÙ‘XÝHXÝ™Ù]
ÑˆŠNÂˆÛÛœÝÝ™X[PÜž\Ó˜[YHHXÝ™Ù]
”ÝQˆŠNÂˆYˆ
Ù‘XÝ[œÝ[˜Ù[ÙˆXÝ	‰ˆÝ™X[PÜž\Ó˜[YH[œÝ[˜Ù[Ùˆ˜[YJHÂˆÙ‘XÝœÝ\™\ÜÑ[˜Üž\[ÛˆHYNÂˆÛÛœÝ[™\‘XÝHÙ‘XÝ™Ù]
Ý™X[PÜž\Ó˜[YK›˜[YJNÂˆÙ^S[™ÝH[™\‘XÝË™Ù]
“[™ÝŠHLŽÂˆYˆ
Ù^S[™Ý
HÂˆÙ^S[™ÝHÎÂˆBˆBˆBˆBˆYˆ
S[X™\‹š\Ò[YÙ\ŠÙ^S[™Ý
HÙ^S[™ÝÙ^S[™Ý	HOOH
HÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠš[˜[YÙ^H[™ÝŠNÂˆBˆÛÛœÝÝÛ™\ž]\ÈHÝš[™ÕÐž]\ÊXÝ™Ù]
“ÈŠJKˆ\Ù\ž]\ÈHÝš[™ÕÐž]\ÊXÝ™Ù]
•HŠJNÂˆÛÛœÝÝÛ™\”\ÜÝÛÜ™HÝÛ™\ž]\ËœÝX˜\œ˜^JÌŠNÂˆÛÛœÝ\Ù\”\ÜÝÛÜ™H\Ù\ž]\ËœÝX˜\œ˜^JÌŠNÂˆÛÛœÝ›YÜÈHXÝ™Ù]
”ŠNÂˆÛÛœÝ™]š\Ú[ÛˆHXÝ™Ù]
”ˆŠNÂˆÛÛœÝ[˜Üž\Y]Y]HH
[ÛÜš]HOOH[ÛÜš]HOOHJH	‰ˆXÝ™Ù]
‘[˜Üž\Y]Y]HŠHOOH˜[ÙNÂˆ\Ë™[˜Üž\Y]Y]HH[˜Üž\Y]Y]NÂˆÛÛœÝš[RYž]\ÈHÝš[™ÕÐž]\Êš[RY
NÂˆ]\ÜÝÛÜ™ž]\ÎÂˆYˆ
\ÜÝÛÜ™
HÂˆYˆ
™]š\Ú[ÛˆOOHŠHÂˆžHÂˆ\ÜÝÛÜ™H]ŽÝš[™ÕÔÝš[™Ê\ÜÝÛÜ™
NÂˆHØ]ÚÂˆØ\›ŠÚ\\•˜[œÙ›Ü›Q˜XÝÜžNˆ[˜X›HÈÛÛ™\UŽ[˜ÛÙY\ÜÝÛÜ™ˆŠNÂˆBˆBˆ\ÜÝÛÜ™ž]\ÈHÝš[™ÕÐž]\Ê\ÜÝÛÜ™
NÂˆBˆ][˜Üž\[Û’Ù^NÂˆYˆ
[ÛÜš]HOOHJHÂˆ[˜Üž\[Û’Ù^HH\ËˆÜ™\\™RÙ^Q]Jš[RYž]\Ë\ÜÝÛÜ™ž]\ËÝÛ™\”\ÜÝÛÜ™\Ù\”\ÜÝÛÜ™›YÜË™]š\Ú[Û‹Ù^S[™Ý[˜Üž\Y]Y]JNÂˆH[ÙHÂˆÛÛœÝÝÛ™\•˜[Y][Û”Ø[HÝÛ™\ž]\ËœÝX˜\œ˜^JÌ‹
NÂˆÛÛœÝÝÛ™\’Ù^TØ[HÝÛ™\ž]\ËœÝX˜\œ˜^J
NÂˆÛÛœÝPž]\ÈH\Ù\ž]\ËœÝX˜\œ˜^J
NÂˆÛÛœÝ\Ù\•˜[Y][Û”Ø[H\Ù\ž]\ËœÝX˜\œ˜^JÌ‹
NÂˆÛÛœÝ\Ù\’Ù^TØ[H\Ù\ž]\ËœÝX˜\œ˜^J
NÂˆÛÛœÝÝÛ™\‘[˜Üž\[ÛˆHÝš[™ÕÐž]\ÊXÝ™Ù]
“ÑHŠJNÂˆÛÛœÝ\Ù\‘[˜Üž\[ÛˆHÝš[™ÕÐž]\ÊXÝ™Ù]
•QHŠJNÂˆÛÛœÝ\›\ÈHÝš[™ÕÐž]\ÊXÝ™Ù]
”\›\ÈŠJNÂˆ[˜Üž\[Û’Ù^HH\ËˆØÜ™X]Q[˜Üž\[Û’Ù^LŒ
™]š\Ú[Û‹\ÜÝÛÜ™ž]\ËÝÛ™\”\ÜÝÛÜ™ÝÛ™\•˜[Y][Û”Ø[ÝÛ™\’Ù^TØ[Pž]\Ë\Ù\”\ÜÝÛÜ™\Ù\•˜[Y][Û”Ø[\Ù\’Ù^TØ[ÝÛ™\‘[˜Üž\[Û‹\Ù\‘[˜Üž\[Û‹\›\ÊNÂˆBˆYˆ
Y[˜Üž\[Û’Ù^JHÂˆYˆ
\\ÜÝÛÜ™
HÂˆ›ÝÈ™]È\ÜÝÛÜ™^Ù\[ÛŠ“›È\ÜÝÛÜ™Ú]™[ˆ‹\ÜÝÛÜ™™\ÜÛœÙ\Ë“‘QQÔTÔÕÓÔ‘
NÂˆBˆÛÛœÝXÛÙY\ÜÝÛÜ™H\ËˆÙXÛÙU\Ù\”\ÜÝÛÜ™
\ÜÝÛÜ™ž]\ËÝÛ™\”\ÜÝÛÜ™™]š\Ú[Û‹Ù^S[™Ý
NÂˆ[˜Üž\[Û’Ù^HH\ËˆÜ™\\™RÙ^Q]Jš[RYž]\ËXÛÙY\ÜÝÛÜ™ÝÛ™\”\ÜÝÛÜ™\Ù\”\ÜÝÛÜ™›YÜË™]š\Ú[Û‹Ù^S[™Ý[˜Üž\Y]Y]JNÂˆBˆYˆ
Y[˜Üž\[Û’Ù^JHÂˆ›ÝÈ™]È\ÜÝÛÜ™^Ù\[ÛŠ’[˜ÛÜœ™XÝ\ÜÝÛÜ™‹\ÜÝÛÜ™™\ÜÛœÙ\Ë’SÓÔ”‘PÕÔTÔÕÓÔ‘
NÂˆBˆYˆ
[ÛÜš]HOOH	‰ˆ[˜Üž\[Û’Ù^K›[™ÝMŠHÂˆ\Ë™[˜Üž\[Û’Ù^HH™]ÈZ[\œ˜^JMŠNÂˆ\Ë™[˜Üž\[Û’Ù^KœÙ]
[˜Üž\[Û’Ù^JNÂˆH[ÙHÂˆ\Ë™[˜Üž\[Û’Ù^HH[˜Üž\[Û’Ù^NÂˆBˆYˆ
[ÛÜš]HH
HÂˆÛÛœÝÙˆHXÝ™Ù]
ÑˆŠNÂˆYˆ
Ùˆ[œÝ[˜Ù[ÙˆXÝ
HÂˆÙ‹œÝ\™\ÜÑ[˜Üž\[ÛˆHYNÂˆBˆ\Ë˜ÙˆHÙŽÂˆ\ËœÝYˆHXÝ™Ù]
”ÝQˆŠH˜[YK™Ù]
’Y[]HŠNÂˆ\ËœÝ™ˆHXÝ™Ù]
”Ý‘ˆŠH˜[YK™Ù]
’Y[]HŠNÂˆ\Ë™Y™ˆHXÝ™Ù]
‘Q‘ˆŠH\ËœÝYŽÂˆBˆBˆÜ™X]PÚ\\•˜[œÙ›Ü›J[KÙ[ŠHÂˆYˆ
\Ë˜[ÛÜš]HOOH\Ë˜[ÛÜš]HOOHJHÂˆ™]\›ˆ™]ÈÚ\\•˜[œÙ›Ü›J\ËˆØZ[Ú\\ÛÛœÝXÝÜŠ\Ë˜Ù‹\ËœÝ™‹[KÙ[‹\Ë™[˜Üž\[Û’Ù^JK\ËˆØZ[Ú\\ÛÛœÝXÝÜŠ\Ë˜Ù‹\ËœÝY‹[KÙ[‹\Ë™[˜Üž\[Û’Ù^JJNÂˆBˆÛÛœÝÙ^HH\ËˆØZ[Øš™XÝÙ^J[KÙ[‹\Ë™[˜Üž\[Û’Ù^K˜[ÙJNÂˆÛÛœÝÚ\\ÛÛœÝXÝÜˆH[˜Ý[Ûˆ

HÂˆ™]\›ˆ™]ÈTÑ›Ý\Ú\\ŠÙ^JNÂˆNÂˆ™]\›ˆ™]ÈÚ\\•˜[œÙ›Ü›JÚ\\ÛÛœÝXÝÜ‹Ú\\ÛÛœÝXÝÜŠNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÞ™Y‹šœÂ‚‚‚‚‚‚˜Û\ÜÈ™YˆÂˆÙš\œÝ™Y”ÝTÜÈH[ÂˆÛÛœÝXÝÜŠÝ™X[K“X[˜YÙ\ŠHÂˆ\ËœÝ™X[HHÝ™X[NÂˆ\Ëœ“X[˜YÙ\ˆH“X[˜YÙ\ŽÂˆ\Ë™[šY\ÈH×NÂˆ\Ë—Þ™Y”Ý\ÈH™]ÈÙ]

NÂˆ\Ë—ØØXÚSX\H™]ÈX\

NÂˆ\Ë—Ü[™[™Ô™YœÈH™]È™Y”Ù]

NÂˆ\Ë—Û™]Ô\œÚ\Ý[™Y“[HH[Âˆ\Ë—Û™]Õ[\Ü˜\žT™Y“[HH[Âˆ\Ë—Ü\œÚ\Ý[™YœÐØXÚHH[ÂˆBˆÙ]™]Ô\œÚ\Ý[™YŠØšŠHÂˆYˆ
\Ë—Û™]Ô\œÚ\Ý[™Y“[HOOH[
HÂˆ\Ë—Û™]Ô\œÚ\Ý[™Y“[HH\Ë™[šY\Ë›[™ÝNÂˆBˆÛÛœÝ[HH\Ë—Û™]Ô\œÚ\Ý[™Y“[JÊÎÂˆ\Ë—ØØXÚSX\œÙ]
[KØšŠNÂˆ™]\›ˆ™Y‹™Ù]
[K
NÂˆBˆÙ]™]Õ[\Ü˜\žT™YŠ
HÂˆYˆ
\Ë—Û™]Õ[\Ü˜\žT™Y“[HOOH[
HÂˆ\Ë—Û™]Õ[\Ü˜\žT™Y“[HH\Ë™[šY\Ë›[™ÝNÂˆYˆ
\Ë—Û™]Ô\œÚ\Ý[™Y“[JHÂˆ\Ë—Ü\œÚ\Ý[™YœÐØXÚHH™]ÈX\

NÂˆ›Üˆ
]HH\Ë—Û™]Õ[\Ü˜\žT™Y“[NÈH\Ë—Û™]Ô\œÚ\Ý[™Y“[NÈJÊÊHÂˆ\Ë—Ü\œÚ\Ý[™YœÐØXÚKœÙ]
K\Ë—ØØXÚSX\™Ù]
JJNÂˆ\Ë—ØØXÚSX\™[]JJNÂˆBˆBˆBˆ™]\›ˆ™Y‹™Ù]
\Ë—Û™]Õ[\Ü˜\žT™Y“[JÊË
NÂˆBˆ™\Ù]™]Õ[\Ü˜\žT™YŠ
HÂˆ\Ë—Û™]Õ[\Ü˜\žT™Y“[HH[ÂˆYˆ
\Ë—Ü\œÚ\Ý[™YœÐØXÚJHÂˆ›Üˆ
ÛÛœÝÛ[KØš—HÙˆ\Ë—Ü\œÚ\Ý[™YœÐØXÚJHÂˆ\Ë—ØØXÚSX\œÙ]
[KØšŠNÂˆBˆBˆ\Ë—Ü\œÚ\Ý[™YœÐØXÚHH[ÂˆBˆÙ]Ý\™YŠÝ\™YŠHÂˆ\ËœÝ\™Y”]Y]YHHÜÝ\™Y—NÂˆBˆ\œÙJ™XÛÝ™\žS[ÙHH˜[ÙJHÂˆ]˜Z[\‘XÝÂˆYˆ
\™XÛÝ™\žS[ÙJHÂˆ˜Z[\‘XÝH\Ëœ™XY™YŠ
NÂˆH[ÙHÂˆØ\›Š’[™^[™È[ˆØš™XÝÈŠNÂˆ˜Z[\‘XÝH\Ëš[™^Øš™XÝÊ
NÂˆBˆ˜Z[\‘XÝ˜\ÜÚYÛ–™YŠ\ÊNÂˆ\Ë˜Z[\ˆH˜Z[\‘XÝÂˆ][˜Üž\ÂˆžHÂˆ[˜Üž\H˜Z[\‘XÝ™Ù]
‘[˜Üž\ŠNÂˆHØ]Ú
^
HÂˆYˆ
^[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠHÂˆ›ÝÈ^ÂˆBˆØ\›Š™Y‹œ\œÙHH[˜[Y‘[˜Üž\ˆ™Y™\™[˜ÙNˆ‰Ù^H‹˜
NÂˆBˆYˆ
[˜Üž\[œÝ[˜Ù[ÙˆXÝ
HÂˆÛÛœÝYÈH˜Z[\‘XÝ™Ù]
’QŠNÂˆÛÛœÝš[RYHYÏË›[™ÝÈYÖÌHˆˆŽÂˆ[˜Üž\œÝ\™\ÜÑ[˜Üž\[ÛˆHYNÂˆ\Ë™[˜Üž\H™]ÈÚ\\•˜[œÙ›Ü›Q˜XÝÜžJ[˜Üž\š[RY\Ëœ“X[˜YÙ\‹œ\ÜÝÛÜ™
NÂˆBˆ]›ÛÝÂˆžHÂˆ›ÛÝH˜Z[\‘XÝ™Ù]
”›ÛÝŠNÂˆHØ]Ú
^
HÂˆYˆ
^[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠHÂˆ›ÝÈ^ÂˆBˆØ\›Š™Y‹œ\œÙHH[˜[Y”›ÛÝˆ™Y™\™[˜ÙNˆ‰Ù^H‹˜
NÂˆBˆYˆ
›ÛÝ[œÝ[˜Ù[ÙˆXÝ
HÂˆžHÂˆÛÛœÝYÙ\ÈH›ÛÝ™Ù]
”YÙ\ÈŠNÂˆYˆ
YÙ\È[œÝ[˜Ù[ÙˆXÝ
HÂˆ\Ëœ›ÛÝH›ÛÝÂˆ™]\›ŽÂˆBˆHØ]Ú
^
HÂˆYˆ
^[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠHÂˆ›ÝÈ^ÂˆBˆØ\›Š™Y‹œ\œÙHH[˜[Y”YÙ\Èˆ™Y™\™[˜ÙNˆ‰Ù^H‹˜
NÂˆBˆBˆYˆ
\™XÛÝ™\žS[ÙJHÂˆ›ÝÈ™]È™Y”\œÙQ^Ù\[ÛŠ
NÂˆBˆ›ÝÈ™]È[˜[Y‘^Ù\[ÛŠ’[˜[Y›ÛÝ™Y™\™[˜ÙKˆŠNÂˆBˆ›ØÙ\ÜÖ™Y•X›J\œÙ\ŠHÂˆYˆ
JX›TÝ]Hˆ[ˆ\ÊJHÂˆ\ËX›TÝ]HHÂˆ[žS[NˆˆÝ™X[TÜÎˆ\œÙ\‹›^\‹œÝ™X[KœÜËˆ\œÙ\YŒNˆ\œÙ\‹˜YŒKˆ\œÙ\YŒŽˆ\œÙ\‹˜YŒ‚ˆNÂˆBˆÛÛœÝØšˆH\Ëœ™XY™Y•X›J\œÙ\ŠNÂˆYˆ
Z\ÐÛY
Øš‹˜Z[\ˆŠJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™YˆX›NˆÛÝ[›Ýš[™˜Z[\ˆXÝ[Û˜\žHŠNÂˆBˆ]XÝH\œÙ\‹™Ù]ØšŠ
NÂˆYˆ
JXÝ[œÝ[˜Ù[ÙˆXÝ
H	‰ˆXÝ™XÝ
HÂˆXÝHXÝ™XÝÂˆBˆYˆ
JXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™YˆX›NˆÛÝ[›Ý\œÙH˜Z[\ˆXÝ[Û˜\žHŠNÂˆBˆ[]H\ËX›TÝ]NÂˆ™]\›ˆXÝÂˆBˆ™XY™Y•X›J\œÙ\ŠHÂˆÛÛœÝÝ™X[HH\œÙ\‹›^\‹œÝ™X[NÂˆÛÛœÝX›TÝ]HH\ËX›TÝ]NÂˆÝ™X[KœÜÈHX›TÝ]KœÝ™X[TÜÎÂˆ\œÙ\‹˜YŒHHX›TÝ]Kœ\œÙ\YŒNÂˆ\œÙ\‹˜YŒˆHX›TÝ]Kœ\œÙ\YŒŽÂˆ]ØšŽÂˆÚ[H
YJHÂˆYˆ
J™š\œÝ[žS[Hˆ[ˆX›TÝ]JHJ™[žPÛÝ[ˆ[ˆX›TÝ]JJHÂˆYˆ
\ÐÛY
ØšˆH\œÙ\‹™Ù]ØšŠ
K˜Z[\ˆŠJHÂˆœ™XZÎÂˆBˆX›TÝ]K™š\œÝ[žS[HHØšŽÂˆX›TÝ]K™[žPÛÝ[H\œÙ\‹™Ù]ØšŠ
NÂˆBˆ]š\œÝHX›TÝ]K™š\œÝ[žS[NÂˆÛÛœÝÛÝ[HX›TÝ]K™[žPÛÝ[ÂˆYˆ
S[X™\‹š\Ò[YÙ\Šš\œÝ
HS[X™\‹š\Ò[YÙ\ŠÛÝ[
JHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™YˆX›NˆÜ›Û™È\\È[ˆÝXœÙXÝ[ÛˆXY\ˆŠNÂˆBˆ›Üˆ
]HHX›TÝ]K™[žS[NÈHÛÝ[ÈJÊÊHÂˆX›TÝ]KœÝ™X[TÜÈHÝ™X[KœÜÎÂˆX›TÝ]K™[žS[HHNÂˆX›TÝ]Kœ\œÙ\YŒHH\œÙ\‹˜YŒNÂˆX›TÝ]Kœ\œÙ\YŒˆH\œÙ\‹˜YŒŽÂˆÛÛœÝ[žHHßNÂˆ[žK›Ù™œÙ]H\œÙ\‹™Ù]ØšŠ
NÂˆ[žK™Ù[ˆH\œÙ\‹™Ù]ØšŠ
NÂˆÛÛœÝ\HH\œÙ\‹™Ù]ØšŠ
NÂˆYˆ
\H[œÝ[˜Ù[ÙˆÛY
HÂˆÝÚ]Ú
\K˜ÛY
HÂˆØ\ÙH™ˆŽ‚ˆ[žK™œ™YHHYNÂˆœ™XZÎÂˆØ\ÙH›ˆŽ‚ˆ[žK[˜ÛÛ\™\ÜÙYHYNÂˆœ™XZÎÂˆBˆBˆYˆ
S[X™\‹š\Ò[YÙ\Š[žK›Ù™œÙ]
HS[X™\‹š\Ò[YÙ\Š[žK™Ù[ŠHJ[žK™œ™YH[žK[˜ÛÛ\™\ÜÙY
JHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ[˜[Y[žH[ˆ™YˆÝXœÙXÝ[ÛŽˆ	Ùš\œÝK	ØÛÝ[X
NÂˆBˆYˆ
HOOH	‰ˆ[žK™œ™YH	‰ˆš\œÝOOHJHÂˆš\œÝHÂˆBˆYˆ
]\Ë™[šY\ÖÚH
Èš\œÝJHÂˆ\Ë™[šY\ÖÚH
Èš\œÝHH[žNÂˆBˆBˆX›TÝ]K™[žS[HHÂˆX›TÝ]KœÝ™X[TÜÈHÝ™X[KœÜÎÂˆX›TÝ]Kœ\œÙ\YŒHH\œÙ\‹˜YŒNÂˆX›TÝ]Kœ\œÙ\YŒˆH\œÙ\‹˜YŒŽÂˆ[]HX›TÝ]K™š\œÝ[žS[NÂˆ[]HX›TÝ]K™[žPÛÝ[ÂˆBˆYˆ
\Ë™[šY\ÖÌH	‰ˆ]\Ë™[šY\ÖÌK™œ™YJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™YˆX›Nˆ[™^XÝYš\œÝØš™XÝŠNÂˆBˆ™]\›ˆØšŽÂˆBˆ›ØÙ\ÜÖ™Y”Ý™X[JÝ™X[JHÂˆYˆ
JœÝ™X[TÝ]Hˆ[ˆ\ÊJHÂˆÛÛœÝÂˆXÝˆÜÂˆHHÝ™X[NÂˆÛÛœÝž]UÚYÈHXÝ™Ù]
•ÈŠNÂˆÛÛœÝ˜[™ÙHHXÝ™Ù]
’[™^ŠHÌXÝ™Ù]
”Ú^™HŠWNÂˆ\ËœÝ™X[TÝ]HHÂˆ[žT˜[™Ù\Îˆ˜[™ÙKˆž]UÚYËˆ[žS[NˆˆÝ™X[TÜÎˆÜÂˆNÂˆBˆ\Ëœ™XY™Y”Ý™X[JÝ™X[JNÂˆ[]H\ËœÝ™X[TÝ]NÂˆ™]\›ˆÝ™X[K™XÝÂˆBˆ™XY™Y”Ý™X[JÝ™X[JHÂˆÛÛœÝÝ™X[TÝ]HH\ËœÝ™X[TÝ]NÂˆÝ™X[KœÜÈHÝ™X[TÝ]KœÝ™X[TÜÎÂˆÛÛœÝÝ\QšY[ÚYÙ™œÙ]šY[ÚYÙ[™\˜][Û‘šY[ÚYHHÝ™X[TÝ]K˜ž]UÚYÎÂˆÛÛœÝ[žT˜[™Ù\ÈHÝ™X[TÝ]K™[žT˜[™Ù\ÎÂˆÚ[H
[žT˜[™Ù\Ë›[™Ýˆ
HÂˆÛÛœÝÙš\œÝ—HH[žT˜[™Ù\ÎÂˆYˆ
S[X™\‹š\Ò[YÙ\Šš\œÝ
HS[X™\‹š\Ò[YÙ\ŠŠJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ[˜[Y™Yˆ˜[™ÙHšY[Îˆ	Ùš\œÝK	ÛŸX
NÂˆBˆYˆ
S[X™\‹š\Ò[YÙ\Š\QšY[ÚY
HS[X™\‹š\Ò[YÙ\ŠÙ™œÙ]šY[ÚY
HS[X™\‹š\Ò[YÙ\ŠÙ[™\˜][Û‘šY[ÚY
JHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ[˜[Y™Yˆ[žHšY[È[™Ýˆ	Ùš\œÝK	ÛŸX
NÂˆBˆ›Üˆ
]HHÝ™X[TÝ]K™[žS[NÈHŽÈ
ÊÚJHÂˆÝ™X[TÝ]K™[žS[HHNÂˆÝ™X[TÝ]KœÝ™X[TÜÈHÝ™X[KœÜÎÂˆ]\HHˆÙ™œÙ]HˆÙ[™\˜][ÛˆHÂˆ›Üˆ
]ˆHÈˆ\QšY[ÚYÈ
ÊÚŠHÂˆÛÛœÝ\Pž]HHÝ™X[K™Ù]ž]J
NÂˆYˆ
\Pž]HOOHLJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™Yˆž]UÚYÈ	Ý\IËˆŠNÂˆBˆ\HH\H\Pž]NÂˆBˆYˆ
\QšY[ÚYOOH
HÂˆ\HHNÂˆBˆ›Üˆ
]ˆHÈˆÙ™œÙ]šY[ÚYÈ
ÊÚŠHÂˆÛÛœÝÙ™œÙ]ž]HHÝ™X[K™Ù]ž]J
NÂˆYˆ
Ù™œÙ]ž]HOOHLJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™Yˆž]UÚYÈ	ÛÙ™œÙ]	ËˆŠNÂˆBˆÙ™œÙ]HÙ™œÙ]Ù™œÙ]ž]NÂˆBˆ›Üˆ
]ˆHÈˆÙ[™\˜][Û‘šY[ÚYÈ
ÊÚŠHÂˆÛÛœÝÙ[™\˜][Ûž]HHÝ™X[K™Ù]ž]J
NÂˆYˆ
Ù[™\˜][Ûž]HOOHLJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™Yˆž]UÚYÈ	ÙÙ[™\˜][Û‰ËˆŠNÂˆBˆÙ[™\˜][ÛˆHÙ[™\˜][ÛˆÙ[™\˜][Ûž]NÂˆBˆÛÛœÝ[žHHßNÂˆ[žK›Ù™œÙ]HÙ™œÙ]Âˆ[žK™Ù[ˆHÙ[™\˜][ÛŽÂˆÝÚ]Ú
\JHÂˆØ\ÙH‚ˆ[žK™œ™YHHYNÂˆœ™XZÎÂˆØ\ÙHN‚ˆ[žK[˜ÛÛ\™\ÜÙYHYNÂˆœ™XZÎÂˆØ\ÙHŽ‚ˆœ™XZÎÂˆY˜][‚ˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ[˜[Y™Yˆ[žH\Nˆ	Ý\_X
NÂˆBˆYˆ
]\Ë™[šY\ÖÙš\œÝ
ÈWJHÂˆ\Ë™[šY\ÖÙš\œÝ
ÈWHH[žNÂˆBˆBˆÝ™X[TÝ]K™[žS[HHÂˆÝ™X[TÝ]KœÝ™X[TÜÈHÝ™X[KœÜÎÂˆ[žT˜[™Ù\ËœÜXÙJŠNÂˆBˆBˆ[™^Øš™XÝÊ
HÂˆÛÛœÝPˆHKˆˆHKˆÔˆHˆÔPÑHHŒÂˆÛÛœÝTÑS•HKˆHØÎÂˆ[˜Ý[Ûˆ™XYÚÙ[Š]KÙ™œÙ]
HÂˆ]ÚÙ[ˆHˆ‹ˆÚH]VÛÙ™œÙ]NÂˆÚ[H
ÚOOHˆ	‰ˆÚOOHÔˆ	‰ˆÚOOH
HÂˆYˆ

ÊÛÙ™œÙ]H]K›[™Ý
HÂˆœ™XZÎÂˆBˆÚÙ[ˆ
ÏHÝš[™Ë™œ›ÛPÚ\ÛÙJÚ
NÂˆÚH]VÛÙ™œÙ]NÂˆBˆ™]\›ˆÚÙ[ŽÂˆBˆ[˜Ý[ÛˆÚÚ\[[
]KÙ™œÙ]Ú]
HÂˆÛÛœÝ[™ÝHÚ]›[™Ýˆ]S[™ÝH]K›[™ÝÂˆ]ÚÚ\YHÂˆÚ[H
Ù™œÙ]]S[™Ý
HÂˆ]HHÂˆÚ[H
H[™Ý	‰ˆ]VÛÙ™œÙ]
ÈWHOOHÚ]ÚWJHÂˆ
ÊÚNÂˆBˆYˆ
HH[™Ý
HÂˆœ™XZÎÂˆBˆÙ™œÙ]
ÊÎÂˆÚÚ\Y
ÊÎÂˆBˆ™]\›ˆÚÚ\YÂˆBˆÛÛœÝÑ[™Øš”™YÑ^H×Š[™ØšŸ
×Ê×
×ÊÛØšŸ™YŸ˜Z[\—Ê
W‹ÙÎÂˆÛÛœÝÔÝ\™Y”™YÑ^H×ŠÝ\™YŸ
×Ê×
×ÊÛØšŠW‹ÙÎÂˆÛÛœÝØš”™YÑ^H×Š
ÊWÊÊ
ÊWÊÛØš—‹ÎÂˆÛÛœÝ˜Z[\ž]\ÈH™]ÈZ[\œ˜^JÌLM‹LMMËLKLLKLMJNÂˆÛÛœÝÝ\™Yž]\ÈH™]ÈZ[\œ˜^JÌLMKLM‹MËLMLM‹LŒLMLKL—JNÂˆÛÛœÝ™Yž]\ÈH™]ÈZ[\œ˜^JÍË‹LKL—JNÂˆ\Ë™[šY\Ë›[™ÝHÂˆ\Ë—ØØXÚSX\˜ÛX\Š
NÂˆÛÛœÝÝ™X[HH\ËœÝ™X[NÂˆÝ™X[KœÜÈHÂˆÛÛœÝY™™\ˆHÝ™X[K™Ù]ž]\Ê
KˆY™™\”ÝˆHž]\ÕÔÝš[™ÊY™™\ŠKˆ[™ÝHY™™\‹›[™ÝÂˆ]ÜÚ][ÛˆHÝ™X[KœÝ\ÂˆÛÛœÝ˜Z[\œÈH×Kˆ™Y”Ý\ÈH×NÂˆÚ[H
ÜÚ][Ûˆ[™Ý
HÂˆ]ÚHY™™\–ÜÜÚ][Û—NÂˆYˆ
ÚOOHPˆÚOOHˆÚOOHÔˆÚOOHÔPÑJHÂˆ
ÊÜÜÚ][ÛŽÂˆÛÛ[YNÂˆBˆYˆ
ÚOOHTÑS•
HÂˆÈÂˆ
ÊÜÜÚ][ÛŽÂˆYˆ
ÜÚ][ÛˆH[™Ý
HÂˆœ™XZÎÂˆBˆÚHY™™\–ÜÜÚ][Û—NÂˆHÚ[H
ÚOOHˆ	‰ˆÚOOHÔŠNÂˆÛÛ[YNÂˆBˆÛÛœÝÚÙ[ˆH™XYÚÙ[ŠY™™\‹ÜÚ][ÛŠNÂˆ]NÂˆYˆ
ÚÙ[‹œÝ\ÕÚ]
ž™YˆŠH	‰ˆ
ÚÙ[‹›[™ÝOOH×ËË\Ý
ÚÙ[–ÍJJJHÂˆÜÚ][Ûˆ
ÏHÚÚ\[[
Y™™\‹ÜÚ][Û‹˜Z[\ž]\ÊNÂˆ˜Z[\œËœ\Ú
ÜÚ][ÛŠNÂˆÜÚ][Ûˆ
ÏHÚÚ\[[
Y™™\‹ÜÚ][Û‹Ý\™Yž]\ÊNÂˆH[ÙHYˆ
HHØš”™YÑ^™^XÊÚÙ[ŠJHÂˆÛÛœÝ[HHVÌWHˆÙ[ˆHVÌ—HÂˆÛÛœÝÝ\ÜÈHÜÚ][Ûˆ
ÈÚÙ[‹›[™ÝÂˆ]ÛÛ[[™Ýˆ\]Q[šY\ÈH˜[ÙNÂˆYˆ
]\Ë™[šY\ÖÛ[WJHÂˆ\]Q[šY\ÈHYNÂˆH[ÙHYˆ
\Ë™[šY\ÖÛ[WK™Ù[ˆOOHÙ[ŠHÂˆžHÂˆÛÛœÝ\œÙ\ˆH™]È\œÙ\ŠÂˆ^\Žˆ™]È^\ŠÝ™X[K›XZÙTÝX”Ý™X[JÝ\ÜÊJBˆJNÂˆ\œÙ\‹™Ù]ØšŠ
NÂˆ\]Q[šY\ÈHYNÂˆHØ]Ú
^
HÂˆYˆ
^[œÝ[˜Ù[Ùˆ\œÙ\‘SÑ‘^Ù\[ÛŠHÂˆØ\›Š[™^Øš™XÝÈKHÚXÚÚ[™ÈØš™XÝ
	ÝÚÙ[ŸJNˆ‰Ù^H‹˜
NÂˆH[ÙHÂˆ\]Q[šY\ÈHYNÂˆBˆBˆBˆYˆ
\]Q[šY\ÊHÂˆ\Ë™[šY\ÖÛ[WHHÂˆÙ™œÙ]ˆÜÚ][ÛˆHÝ™X[KœÝ\ˆÙ[‹ˆ[˜ÛÛ\™\ÜÙYˆYBˆNÂˆBˆÑ[™Øš”™YÑ^›\Ý[™^HÝ\ÜÎÂˆÛÛœÝX]ÚHÑ[™Øš”™YÑ^™^XÊY™™\”ÝŠNÂˆYˆ
X]Ú
HÂˆÛÛœÝ[™ÜÈHÑ[™Øš”™YÑ^›\Ý[™^
ÈNÂˆÛÛ[[™ÝH[™ÜÈHÜÚ][ÛŽÂˆYˆ
X]ÚÌWHOOH™[™ØšˆŠHÂˆØ\›Š[™^Øš™XÝÎˆ›Ý[™‰ÛX]ÚÌW_Hˆ[œÚYHÙˆ[›Ý\ˆ›Øšˆ‹
È	ØØ]\ÙYžHZ\ÜÚ[™È™[™ØšˆˆKHžZ[™ÈÈ™XÛÝ™\‹‰ÊNÂˆÛÛ[[™ÝOHX]ÚÌWK›[™Ý
ÈNÂˆBˆH[ÙHÂˆÛÛ[[™ÝH[™ÝHÜÚ][ÛŽÂˆBˆÛÛœÝÛÛ[HY™™\‹œÝX˜\œ˜^JÜÚ][Û‹ÜÚ][Ûˆ
ÈÛÛ[[™Ý
NÂˆÛÛœÝ™Y•YÓÙ™œÙ]HÚÚ\[[
ÛÛ[™Yž]\ÊNÂˆYˆ
™Y•YÓÙ™œÙ]ÛÛ[[™Ý	‰ˆÛÛ[Þ™Y•YÓÙ™œÙ]
ÈWH
HÂˆ™Y”Ý\Ëœ\Ú
ÜÚ][ÛˆHÝ™X[KœÝ\
NÂˆ\Ë—Þ™Y”Ý\Ë˜Y
ÜÚ][ÛˆHÝ™X[KœÝ\
NÂˆBˆÜÚ][Ûˆ
ÏHÛÛ[[™ÝÂˆH[ÙHYˆ
ÚÙ[‹œÝ\ÕÚ]
˜Z[\ˆŠH	‰ˆ
ÚÙ[‹›[™ÝOOHÈ×ËË\Ý
ÚÙ[–Í×JJJHÂˆ˜Z[\œËœ\Ú
ÜÚ][ÛŠNÂˆÛÛœÝÝ\ÜÈHÜÚ][Ûˆ
ÈÚÙ[‹›[™ÝÂˆ]ÛÛ[[™ÝÂˆÔÝ\™Y”™YÑ^›\Ý[™^HÝ\ÜÎÂˆÛÛœÝX]ÚHÔÝ\™Y”™YÑ^™^XÊY™™\”ÝŠNÂˆYˆ
X]Ú
HÂˆÛÛœÝ[™ÜÈHÔÝ\™Y”™YÑ^›\Ý[™^
ÈNÂˆÛÛ[[™ÝH[™ÜÈHÜÚ][ÛŽÂˆYˆ
X]ÚÌWHOOHœÝ\™YˆŠHÂˆØ\›Š[™^Øš™XÝÎˆ›Ý[™‰ÛX]ÚÌW_HˆY\ˆ˜Z[\ˆ‹
È	ØØ]\ÙYžHZ\ÜÚ[™ÈœÝ\™YˆˆKHžZ[™ÈÈ™XÛÝ™\‹‰ÊNÂˆÛÛ[[™ÝOHX]ÚÌWK›[™Ý
ÈNÂˆBˆH[ÙHÂˆÛÛ[[™ÝH[™ÝHÜÚ][ÛŽÂˆBˆÜÚ][Ûˆ
ÏHÛÛ[[™ÝÂˆH[ÙHÂˆÜÚ][Ûˆ
ÏHÚÙ[‹›[™Ý
ÈNÂˆBˆBˆ›Üˆ
ÛÛœÝ™Y”ÝHÙˆ™Y”Ý\ÊHÂˆ\ËœÝ\™Y”]Y]YKœ\Ú
™Y”ÝJNÂˆ\Ëœ™XY™YŠYJNÂˆBˆÛÛœÝ˜Z[\‘XÝÈH×NÂˆ]\Ñ[˜Üž\YH˜[ÙNÂˆ›Üˆ
ÛÛœÝ˜Z[\ˆÙˆ˜Z[\œÊHÂˆÝ™X[KœÜÈH˜Z[\ŽÂˆÛÛœÝ\œÙ\ˆH™]È\œÙ\ŠÂˆ^\Žˆ™]È^\ŠÝ™X[JKˆ™YŽˆ\Ëˆ[ÝÔÝ™X[\ÎˆYKˆ™XÛÝ™\žS[ÙNˆYBˆJNÂˆÛÛœÝØšˆH\œÙ\‹™Ù]ØšŠ
NÂˆYˆ
Z\ÐÛY
Øš‹˜Z[\ˆŠJHÂˆÛÛ[YNÂˆBˆÛÛœÝXÝH\œÙ\‹™Ù]ØšŠ
NÂˆYˆ
JXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆÛÛ[YNÂˆBˆ˜Z[\‘XÝËœ\Ú
XÝ
NÂˆYˆ
XÝš\Ê‘[˜Üž\ŠJHÂˆ\Ñ[˜Üž\YHYNÂˆBˆBˆ]˜Z[\‘XÝ˜Z[\‘\œ›ÜŽÂˆ›Üˆ
ÛÛœÝXÝÙˆË‹‹˜Z[\‘XÝË™Ù[‘˜[˜XÚÈ‹‹‹˜Z[\‘XÝ×JHÂˆYˆ
XÝOOH™Ù[‘˜[˜XÚÈŠHÂˆYˆ
]˜Z[\‘\œ›ÜŠHÂˆœ™XZÎÂˆBˆ\Ë—ÙÙ[™\˜][Û‘˜[˜XÚÈHYNÂˆÛÛ[YNÂˆBˆ]˜[YYÙ\ÑXÝH˜[ÙNÂˆžHÂˆÛÛœÝ›ÛÝXÝHXÝ™Ù]
”›ÛÝŠNÂˆYˆ
J›ÛÝXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆÛÛ[YNÂˆBˆÛÛœÝYÙ\ÑXÝH›ÛÝXÝ™Ù]
”YÙ\ÈŠNÂˆYˆ
JYÙ\ÑXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆÛÛ[YNÂˆBˆÛÛœÝYÙ\ÐÛÝ[HYÙ\ÑXÝ™Ù]
ÛÝ[ŠNÂˆYˆ
[X™\‹š\Ò[YÙ\ŠYÙ\ÐÛÝ[
JHÂˆ˜[YYÙ\ÑXÝHYNÂˆBˆHØ]Ú
^
HÂˆ˜Z[\‘\œ›ÜˆH^ÂˆÛÛ[YNÂˆBˆYˆ
˜[YYÙ\ÑXÝ	‰ˆ
Z\Ñ[˜Üž\YXÝš\Ê‘[˜Üž\ŠJH	‰ˆXÝš\Ê’QŠJHÂˆ™]\›ˆXÝÂˆBˆ˜Z[\‘XÝHXÝÂˆBˆYˆ
˜Z[\‘XÝ
HÂˆ™]\›ˆ˜Z[\‘XÝÂˆBˆYˆ
\ËÜXÝ
HÂˆ™]\›ˆ\ËÜXÝÂˆBˆYˆ
]˜Z[\‘XÝË›[™Ý
HÂˆ›Üˆ
ÛÛœÝ[H[ˆ\Ë™[šY\ÊHÂˆYˆ
SØš™XÝš\ÓÝÛŠ\Ë™[šY\Ë[JJHÂˆÛÛ[YNÂˆBˆÛÛœÝ[žHH\Ë™[šY\ÖÛ[WNÂˆÛÛœÝ™YˆH™Y‹™Ù]
\œÙR[
[JK[žK™Ù[ŠNÂˆ]ØšŽÂˆžHÂˆØšˆH\Ë™™]Ú
™YŠNÂˆHØ]ÚÂˆÛÛ[YNÂˆBˆYˆ
Øšˆ[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JHÂˆØšˆHØš‹™XÝÂˆBˆYˆ
Øšˆ[œÝ[˜Ù[ÙˆXÝ	‰ˆØš‹š\Ê”›ÛÝŠJHÂˆ™]\›ˆØšŽÂˆBˆBˆBˆ›ÝÈ™]È[˜[Y‘^Ù\[ÛŠ’[˜[YˆÝXÝ\™KˆŠNÂˆBˆ™XY™YŠ™XÛÝ™\žS[ÙHH˜[ÙJHÂˆÛÛœÝÝ™X[HH\ËœÝ™X[NÂˆÛÛœÝÝ\™Y”\œÙYØXÚHH™]ÈÙ]

NÂˆÚ[H
\ËœÝ\™Y”]Y]YK›[™Ý
HÂˆžHÂˆÛÛœÝÝ\™YˆH\ËœÝ\™Y”]Y]YVÌNÂˆYˆ
Ý\™Y”\œÙYØXÚKš\ÊÝ\™YŠJHÂˆØ\›Šœ™XY™YˆHÚÚ\[™È™YˆX›HÚ[˜ÙH]Ø\È[™XYH\œÙYˆŠNÂˆ\ËœÝ\™Y”]Y]YKœÚY

NÂˆÛÛ[YNÂˆBˆÝ\™Y”\œÙYØXÚK˜Y
Ý\™YŠNÂˆÝ™X[KœÜÈHÝ\™Yˆ
ÈÝ™X[KœÝ\ÂˆÛÛœÝ\œÙ\ˆH™]È\œÙ\ŠÂˆ^\Žˆ™]È^\ŠÝ™X[JKˆ™YŽˆ\Ëˆ[ÝÔÝ™X[\ÎˆYBˆJNÂˆ]ØšˆH\œÙ\‹™Ù]ØšŠ
NÂˆ]XÝÂˆYˆ
\ÐÛY
Øš‹ž™YˆŠJHÂˆXÝH\Ëœ›ØÙ\ÜÖ™Y•X›J\œÙ\ŠNÂˆYˆ
]\ËÜXÝ
HÂˆ\ËÜXÝHXÝÂˆBˆØšˆHXÝ™Ù]
–™Y”ÝHŠNÂˆYˆ
[X™\‹š\Ò[YÙ\ŠØšŠH	‰ˆ]\Ë—Þ™Y”Ý\Ëš\ÊØšŠJHÂˆ\Ë—Þ™Y”Ý\Ë˜Y
ØšŠNÂˆ\ËœÝ\™Y”]Y]YKœ\Ú
ØšŠNÂˆ\ËˆÙš\œÝ™Y”ÝTÜÈÏÏHØšŽÂˆBˆH[ÙHYˆ
[X™\‹š\Ò[YÙ\ŠØšŠJHÂˆYˆ
S[X™\‹š\Ò[YÙ\Š\œÙ\‹™Ù]ØšŠ
JHZ\ÐÛY
\œÙ\‹™Ù]ØšŠ
K›ØšˆŠHJ
ØšˆH\œÙ\‹™Ù]ØšŠ
JH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™YˆÝ™X[HŠNÂˆBˆXÝH\Ëœ›ØÙ\ÜÖ™Y”Ý™X[JØšŠNÂˆYˆ
]\ËÜXÝ
HÂˆ\ËÜXÝHXÝÂˆBˆYˆ
YXÝ
HÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ‘˜Z[YÈ™XY™YˆÝ™X[HŠNÂˆBˆH[ÙHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[Y™YˆÝ™X[HXY\ˆŠNÂˆBˆØšˆHXÝ™Ù]
”™]ˆŠNÂˆYˆ
[X™\‹š\Ò[YÙ\ŠØšŠJHÂˆ\ËœÝ\™Y”]Y]YKœ\Ú
ØšŠNÂˆH[ÙHYˆ
Øšˆ[œÝ[˜Ù[Ùˆ™YŠHÂˆ\ËœÝ\™Y”]Y]YKœ\Ú
Øš‹›[JNÂˆBˆHØ]Ú
JHÂˆYˆ
H[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠHÂˆ›ÝÈNÂˆBˆ[™›ÊŠÚ[H™XY[™È™YŠNˆˆ
ÈJNÂˆBˆ\ËœÝ\™Y”]Y]YKœÚY

NÂˆBˆYˆ
\ËÜXÝ
HÂˆ™]\›ˆ\ËÜXÝÂˆBˆYˆ
™XÛÝ™\žS[ÙJHÂˆ™]\›ˆ[™Yš[™YÂˆBˆ›ÝÈ™]È™Y”\œÙQ^Ù\[ÛŠ
NÂˆBˆÙ]\Ý™Y”Ý™X[TÜÊ
HÂˆ™]\›ˆ\ËˆÙš\œÝ™Y”ÝTÜÈÏÈ
\Ë—Þ™Y”Ý\ËœÚ^™HˆÈX]›X^
‹‹\Ë—Þ™Y”Ý\ÊHˆ[
NÂˆBˆÙ][žJJHÂˆÛÛœÝ™Y‘[žHH\Ë™[šY\ÖÚWNÂˆYˆ
™Y‘[žH	‰ˆ^™Y‘[žK™œ™YH	‰ˆ™Y‘[žK›Ù™œÙ]
HÂˆ™]\›ˆ™Y‘[žNÂˆBˆ™]\›ˆ[ÂˆBˆ™]ÚY”™YŠØš‹Ý\™\ÜÑ[˜Üž\[ÛˆH˜[ÙJHÂˆYˆ
Øšˆ[œÝ[˜Ù[Ùˆ™YŠHÂˆ™]\›ˆ\Ë™™]Ú
Øš‹Ý\™\ÜÑ[˜Üž\[ÛŠNÂˆBˆ™]\›ˆØšŽÂˆBˆ™]Ú
™Y‹Ý\™\ÜÑ[˜Üž\[ÛˆH˜[ÙJHÂˆYˆ
J™Yˆ[œÝ[˜Ù[Ùˆ™YŠJHÂˆ›ÝÈ™]È\œ›ÜŠœ™YˆØš™XÝ\È›ÝH™Y™\™[˜ÙHŠNÂˆBˆÛÛœÝ[HH™Y‹›[NÂˆÛÛœÝØXÚQ[žHH\Ë—ØØXÚSX\™Ù]
[JNÂˆYˆ
ØXÚQ[žHOOH[™Yš[™Y
HÂˆYˆ
ØXÚQ[žH[œÝ[˜Ù[ÙˆXÝ	‰ˆXØXÚQ[žK›Øš’Y
HÂˆØXÚQ[žK›Øš’YH™Y‹ÔÝš[™Ê
NÂˆBˆ™]\›ˆØXÚQ[žNÂˆBˆ]™Y‘[žHH\Ë™Ù][žJ[JNÂˆYˆ
™Y‘[žHOOH[
HÂˆ™]\›ˆ™Y‘[žNÂˆBˆYˆ
\Ë—Ü[™[™Ô™YœËš\Ê™YŠJHÂˆ\Ë—Ü[™[™Ô™YœËœ™[[Ý™J™YŠNÂˆØ\›ŠYÛ›Üš[™ÈÚ\˜Ý[\ˆ™Y™\™[˜ÙNˆ	Ü™YŸK˜
NÂˆ™]\›ˆÒTÕST—Ô‘QŽÂˆBˆ\Ë—Ü[™[™Ô™YœËœ]
™YŠNÂˆžHÂˆ™Y‘[žHH™Y‘[žK[˜ÛÛ\™\ÜÙYÈ\Ë™™]Ú[˜ÛÛ\™\ÜÙY
™Y‹™Y‘[žKÝ\™\ÜÑ[˜Üž\[ÛŠHˆ\Ë™™]ÚÛÛ\™\ÜÙY
™Y‹™Y‘[žKÝ\™\ÜÑ[˜Üž\[ÛŠNÂˆ\Ë—Ü[™[™Ô™YœËœ™[[Ý™J™YŠNÂˆHØ]Ú
^
HÂˆ\Ë—Ü[™[™Ô™YœËœ™[[Ý™J™YŠNÂˆ›ÝÈ^ÂˆBˆYˆ
™Y‘[žH[œÝ[˜Ù[ÙˆXÝ
HÂˆ™Y‘[žK›Øš’YH™Y‹ÔÝš[™Ê
NÂˆH[ÙHYˆ
™Y‘[žH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JHÂˆ™Y‘[žK™XÝ›Øš’YH™Y‹ÔÝš[™Ê
NÂˆBˆ™]\›ˆ™Y‘[žNÂˆBˆ™]Ú[˜ÛÛ\™\ÜÙY
™Y‹™Y‘[žKÝ\™\ÜÑ[˜Üž\[ÛˆH˜[ÙJHÂˆÛÛœÝÙ[ˆH™Y‹™Ù[ŽÂˆ][HH™Y‹›[NÂˆYˆ
™Y‘[žK™Ù[ˆOOHÙ[ŠHÂˆÛÛœÝ\ÙÈH[˜ÛÛœÚ\Ý[Ù[™\˜][Ûˆ[ˆ™YŽˆ	Ü™YŸXÂˆYˆ
\Ë—ÙÙ[™\˜][Û‘˜[˜XÚÈ	‰ˆ™Y‘[žK™Ù[ˆÙ[ŠHÂˆØ\›Š\ÙÊNÂˆ™]\›ˆ\Ë™™]Ú[˜ÛÛ\™\ÜÙY
™Y‹™Ù]
[K™Y‘[žK™Ù[ŠK™Y‘[žKÝ\™\ÜÑ[˜Üž\[ÛŠNÂˆBˆ›ÝÈ™]È™Y‘[žQ^Ù\[ÛŠ\ÙÊNÂˆBˆÛÛœÝÝ™X[HH\ËœÝ™X[K›XZÙTÝX”Ý™X[J™Y‘[žK›Ù™œÙ]
È\ËœÝ™X[KœÝ\
NÂˆÛÛœÝ\œÙ\ˆH™]È\œÙ\ŠÂˆ^\Žˆ™]È^\ŠÝ™X[JKˆ™YŽˆ\Ëˆ[ÝÔÝ™X[\ÎˆYBˆJNÂˆÛÛœÝØšŒHH\œÙ\‹™Ù]ØšŠ
NÂˆÛÛœÝØšŒˆH\œÙ\‹™Ù]ØšŠ
NÂˆÛÛœÝØšŒÈH\œÙ\‹™Ù]ØšŠ
NÂˆYˆ
ØšŒHOOH[HØšŒˆOOHÙ[ˆJØšŒÈ[œÝ[˜Ù[ÙˆÛY
JHÂˆ›ÝÈ™]È™Y‘[žQ^Ù\[ÛŠ˜Y
[˜ÛÛ\™\ÜÙY
H™Yˆ[žNˆ	Ü™YŸX
NÂˆBˆYˆ
ØšŒË˜ÛYOOH›ØšˆŠHÂˆYˆ
ØšŒË˜ÛYœÝ\ÕÚ]
›ØšˆŠJHÂˆ[HH\œÙR[
ØšŒË˜ÛYœÝXœÝš[™ÊÊKL
NÂˆYˆ
S[X™\‹š\Ó˜SŠ[JJHÂˆ™]\›ˆ[NÂˆBˆBˆ›ÝÈ™]È™Y‘[žQ^Ù\[ÛŠ˜Y
[˜ÛÛ\™\ÜÙY
H™Yˆ[žNˆ	Ü™YŸX
NÂˆBˆ™Y‘[žHH\Ë™[˜Üž\	‰ˆ\Ý\™\ÜÑ[˜Üž\[ÛˆÈ\œÙ\‹™Ù]ØšŠ\Ë™[˜Üž\˜Ü™X]PÚ\\•˜[œÙ›Ü›J[KÙ[ŠJHˆ\œÙ\‹™Ù]ØšŠ
NÂˆYˆ
J™Y‘[žH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JJHÂˆ\Ë—ØØXÚSX\œÙ]
[K™Y‘[žJNÂˆBˆ™]\›ˆ™Y‘[žNÂˆBˆ™]ÚÛÛ\™\ÜÙY
™Y‹™Y‘[žKÝ\™\ÜÑ[˜Üž\[ÛˆH˜[ÙJHÂˆÛÛœÝX›SÙ™œÙ]H™Y‘[žK›Ù™œÙ]ÂˆÛÛœÝÝ™X[HH\Ë™™]Ú
™Y‹™Ù]
X›SÙ™œÙ]
JNÂˆYˆ
JÝ™X[H[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ˜˜YØš”ÝHÝ™X[HŠNÂˆBˆÛÛœÝš\œÝHÝ™X[K™XÝ™Ù]
‘š\œÝŠNÂˆÛÛœÝˆHÝ™X[K™XÝ™Ù]
“ˆŠNÂˆYˆ
S[X™\‹š\Ò[YÙ\Šš\œÝ
HS[X™\‹š\Ò[YÙ\ŠŠJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠš[˜[Yš\œÝ[™ˆ\˜[Y]\œÈ›ÜˆØš”ÝHÝ™X[HŠNÂˆBˆ]\œÙ\ˆH™]È\œÙ\ŠÂˆ^\Žˆ™]È^\ŠÝ™X[JKˆ™YŽˆ\Ëˆ[ÝÔÝ™X[\ÎˆYBˆJNÂˆÛÛœÝ[\ÈH™]È\œ˜^JŠNÂˆÛÛœÝÙ™œÙ]ÈH™]È\œ˜^JŠNÂˆ›Üˆ
]HHÈHŽÈ
ÊÚJHÂˆÛÛœÝ[HH\œÙ\‹™Ù]ØšŠ
NÂˆYˆ
S[X™\‹š\Ò[YÙ\Š[JJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ[˜[YØš™XÝ[X™\ˆ[ˆHØš”ÝHÝ™X[Nˆ	Û[_X
NÂˆBˆÛÛœÝÙ™œÙ]H\œÙ\‹™Ù]ØšŠ
NÂˆYˆ
S[X™\‹š\Ò[YÙ\ŠÙ™œÙ]
JHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ[˜[YØš™XÝÙ™œÙ][ˆHØš”ÝHÝ™X[Nˆ	ÛÙ™œÙ]X
NÂˆBˆ[\ÖÚWHH[NÂˆÛÛœÝ[žHH\Ë™Ù][žJ[JNÂˆYˆ
[žOË›Ù™œÙ]OOHX›SÙ™œÙ]	‰ˆ[žK™Ù[ˆOOHJHÂˆ[žK™Ù[ˆHNÂˆBˆÙ™œÙ]ÖÚWHHÙ™œÙ]ÂˆBˆÛÛœÝÝ\H
Ý™X[KœÝ\
H
Èš\œÝÂˆÛÛœÝ[šY\ÈH™]È\œ˜^JŠNÂˆ›Üˆ
]HHÈHŽÈ
ÊÚJHÂˆÛÛœÝ[™ÝHHˆHHÈÙ™œÙ]ÖÚH
ÈWHHÙ™œÙ]ÖÚWHˆ[™Yš[™YÂˆYˆ
[™Ý
HÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ’[˜[YÙ™œÙ][ˆHØš”ÝHÝ™X[KˆŠNÂˆBˆ\œÙ\ˆH™]È\œÙ\ŠÂˆ^\Žˆ™]È^\ŠÝ™X[K›XZÙTÝX”Ý™X[JÝ\
ÈÙ™œÙ]ÖÚWK[™ÝÝ™X[K™XÝ
JKˆ™YŽˆ\Ëˆ[ÝÔÝ™X[\ÎˆYBˆJNÂˆÛÛœÝØšˆH\œÙ\‹™Ù]ØšŠ
NÂˆ[šY\ÖÚWHHØšŽÂˆYˆ
Øšˆ[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JHÂˆÛÛ[YNÂˆBˆÛÛœÝ[HH[\ÖÚWKˆ[žHH\Ë™[šY\ÖÛ[WNÂˆYˆ
[žH	‰ˆ[žK›Ù™œÙ]OOHX›SÙ™œÙ]	‰ˆ[žK™Ù[ˆOOHJHÂˆ\Ë—ØØXÚSX\œÙ]
[KØšŠNÂˆBˆBˆ™Y‘[žHH[šY\ÖÞ™Y‘[žK™Ù[—NÂˆYˆ
™Y‘[žHOOH[™Yš[™Y
HÂˆ›ÝÈ™]È™Y‘[žQ^Ù\[ÛŠ˜Y
ÛÛ\™\ÜÙY
H™Yˆ[žNˆ	Ü™YŸX
NÂˆBˆ™]\›ˆ™Y‘[žNÂˆBˆ\Þ[˜È™]ÚY”™Y\Þ[˜ÊØš‹Ý\™\ÜÑ[˜Üž\[ÛŠHÂˆYˆ
Øšˆ[œÝ[˜Ù[Ùˆ™YŠHÂˆ™]\›ˆ\Ë™™]Ú\Þ[˜ÊØš‹Ý\™\ÜÑ[˜Üž\[ÛŠNÂˆBˆ™]\›ˆØšŽÂˆBˆ\Þ[˜È™]Ú\Þ[˜Ê™Y‹Ý\™\ÜÑ[˜Üž\[ÛŠHÂˆžHÂˆ™]\›ˆ\Ë™™]Ú
™Y‹Ý\™\ÜÑ[˜Üž\[ÛŠNÂˆHØ]Ú
^
HÂˆYˆ
J^[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠJHÂˆ›ÝÈ^ÂˆBˆ]ØZ]\Ëœ“X[˜YÙ\‹œ™\]Y\Ý˜[™ÙJ^˜™YÚ[‹^™[™
NÂˆ™]\›ˆ\Ë™™]Ú\Þ[˜Ê™Y‹Ý\™\ÜÑ[˜Üž\[ÛŠNÂˆBˆBˆÙ]Ø][ÙÓØšŠ
HÂˆ™]\›ˆ\Ëœ›ÛÝÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÙØÝ[Y[šœÂ‚‚‚‚‚‚‚‚‚‚‚‚‚‚‚‚‚‚‚‚˜ÛÛœÝUT—ÔÒV‘WÓQQPP“ÖHÌŒL‹ÎL—NÂ˜Û\ÜÈYÙHÂˆØ\™P[››Ý][ÛœÐØXÚYH˜[ÙNÂˆÜ™\ÛÝ\˜Ù\Ô›ÛZ\ÙHH[ÂˆÛÛœÝXÝÜŠÂˆ“X[˜YÙ\‹ˆ™Y‹ˆYÙR[™^ˆYÙQXÝˆ™Y‹ˆÛØ˜[Y˜XÝÜžKˆ›ÛØXÚKˆZ[[ÓX\ØXÚKˆÝ[™\™›Û]PØXÚKˆÛØ˜[ÛÛÜ”ÜXÙPØXÚKˆÛØ˜[[XYÙPØXÚKˆÞ\Ý[Q›ÛØXÚKˆ›Û›[™[Ù\ÔÙ]ˆ˜Q˜XÝÜžBˆJHÂˆ\Ëœ“X[˜YÙ\ˆH“X[˜YÙ\ŽÂˆ\ËœYÙR[™^HYÙR[™^Âˆ\ËœYÙQXÝHYÙQXÝÂˆ\Ëž™YˆH™YŽÂˆ\Ëœ™YˆH™YŽÂˆ\Ë™›ÛØXÚHH›ÛØXÚNÂˆ\Ë˜Z[[ÓX\ØXÚHHZ[[ÓX\ØXÚNÂˆ\ËœÝ[™\™›Û]PØXÚHHÝ[™\™›Û]PØXÚNÂˆ\Ë™ÛØ˜[ÛÛÜ”ÜXÙPØXÚHHÛØ˜[ÛÛÜ”ÜXÙPØXÚNÂˆ\Ë™ÛØ˜[[XYÙPØXÚHHÛØ˜[[XYÙPØXÚNÂˆ\ËœÞ\Ý[Q›ÛØXÚHHÞ\Ý[Q›ÛØXÚNÂˆ\Ë››Û›[™[Ù\ÔÙ]H›Û›[™[Ù\ÔÙ]Âˆ\Ë™]˜[X]Ü“Ü[ÛœÈH“X[˜YÙ\‹™]˜[X]Ü“Ü[ÛœÎÂˆ\Ëž˜Q˜XÝÜžHH˜Q˜XÝÜžNÂˆÛÛœÝYÛÝ[\œÈHÂˆØšŽˆˆNÂˆ\Ë—ÛØØ[Y˜XÝÜžHHÛ\ÜÈ^[™ÈÛØ˜[Y˜XÝÜžHÂˆÝ]XÈÜ™X]SØš’Y

HÂˆ™]\›ˆ	ÜYÙR[™^WÉÊÊÚYÛÝ[\œË›ØšŸXÂˆBˆÝ]XÈÙ]YÙSØš’Y

HÂˆ™]\›ˆ	Ü™Y‹ÔÝš[™Ê
_XÂˆBˆNÂˆBˆØÜ™X]T\X[]˜[X]ÜŠ[™\ŠHÂˆ™]\›ˆ™]È\X[]˜[X]ÜŠÂˆ™YŽˆ\Ëž™Y‹ˆ[™\‹ˆYÙR[™^ˆ\ËœYÙR[™^ˆY˜XÝÜžNˆ\Ë—ÛØØ[Y˜XÝÜžKˆ›ÛØXÚNˆ\Ë™›ÛØXÚKˆZ[[ÓX\ØXÚNˆ\Ë˜Z[[ÓX\ØXÚKˆÝ[™\™›Û]PØXÚNˆ\ËœÝ[™\™›Û]PØXÚKˆÛØ˜[ÛÛÜ”ÜXÙPØXÚNˆ\Ë™ÛØ˜[ÛÛÜ”ÜXÙPØXÚKˆÛØ˜[[XYÙPØXÚNˆ\Ë™ÛØ˜[[XYÙPØXÚKˆÞ\Ý[Q›ÛØXÚNˆ\ËœÞ\Ý[Q›ÛØXÚKˆÜ[ÛœÎˆ\Ë™]˜[X]Ü“Ü[ÛœÂˆJNÂˆBˆÙÙ][š\š]X›T›Ü\JÙ^KÙ]\œ˜^HH˜[ÙJHÂˆÛÛœÝ˜[YHHÙ][š\š]X›T›Ü\JÂˆXÝˆ\ËœYÙQXÝˆÙ^KˆÙ]\œ˜^KˆÝÜÚ[‘›Ý[™ˆ˜[ÙBˆJNÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J˜[YJJHÂˆ™]\›ˆ˜[YNÂˆBˆYˆ
˜[YK›[™ÝOOHHJ˜[YVÌH[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ˆ˜[YVÌNÂˆBˆ™]\›ˆXÝ›Y\™ÙJÂˆ™YŽˆ\Ëž™Y‹ˆXÝ\œ˜^Nˆ˜[YBˆJNÂˆBˆÙ]ÛÛ[

HÂˆ™]\›ˆ\ËœYÙQXÝ™Ù]\œ˜^JÛÛ[ÈŠNÂˆBˆÙ]™\ÛÝ\˜Ù\Ê
HÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH\ËˆÙÙ][š\š]X›T›Ü\J”™\ÛÝ\˜Ù\ÈŠNÂˆ™]\›ˆÚYÝÊ\Ëœ™\ÛÝ\˜Ù\È‹™\ÛÝ\˜Ù\È[œÝ[˜Ù[ÙˆXÝÈ™\ÛÝ\˜Ù\ÈˆXÝ™[\JNÂˆBˆÙÙ]›Ý[™[™Ð›Þ
˜[YJHÂˆYˆ
\Ëž˜Q]JHÂˆ™]\›ˆ\Ëž˜Q]K˜˜›ÞÂˆBˆÛÛœÝ›ÞHÛÚÝ\›Ü›X[™XÝ
\ËˆÙÙ][š\š]X›T›Ü\J˜[YKYJK[
NÂˆYˆ
›Þ
HÂˆYˆ
›ÞÌ—HH›ÞÌHˆ	‰ˆ›ÞÌ×HH›ÞÌWHˆ
HÂˆ™]\›ˆ›ÞÂˆBˆØ\›Š[\KÜˆ[˜[YÉÛ˜[Y_H[žK˜
NÂˆBˆ™]\›ˆ[ÂˆBˆÙ]YYXP›Þ

HÂˆ™]\›ˆÚYÝÊ\Ë›YYXP›Þ‹\ËˆÙÙ]›Ý[™[™Ð›Þ
“YYXP›ÞŠHUT—ÔÒV‘WÓQQPP“Ö
NÂˆBˆÙ]Ü›Ü›Þ

HÂˆ™]\›ˆÚYÝÊ\Ë˜Ü›Ü›Þ‹\ËˆÙÙ]›Ý[™[™Ð›Þ
Ü›Ü›ÞŠH\Ë›YYXP›Þ
NÂˆBˆÙ]\Ù\•[š]

HÂˆÛÛœÝØšˆH\ËœYÙQXÝ™Ù]
•\Ù\•[š]ŠNÂˆ™]\›ˆÚYÝÊ\Ë\Ù\•[š]‹\[ÙˆØšˆOOH›[X™\ˆˆ	‰ˆØšˆˆÈØšˆˆKŒ
NÂˆBˆÙ]šY]Ê
HÂˆÛÛœÝÂˆÜ›Ü›ÞˆYYXP›ÞˆHH\ÎÂˆYˆ
Ü›Ü›ÞOOHYYXP›Þ	‰ˆZ\Ð\œ˜^Q\]X[
Ü›Ü›ÞYYXP›Þ
JHÂˆÛÛœÝ›ÞH][š[\œÙXÝ
Ü›Ü›ÞYYXP›Þ
NÂˆYˆ
›Þ	‰ˆ›ÞÌ—HH›ÞÌHˆ	‰ˆ›ÞÌ×HH›ÞÌWHˆ
HÂˆ™]\›ˆÚYÝÊ\ËšY]È‹›Þ
NÂˆBˆØ\›Š‘[\HÐÜ›Ü›Þ[™ÓYYXP›Þ[\œÙXÝ[Û‹ˆŠNÂˆBˆ™]\›ˆÚYÝÊ\ËšY]È‹YYXP›Þ
NÂˆBˆÙ]›Ý]J
HÂˆ]›Ý]HH\ËˆÙÙ][š\š]X›T›Ü\J”›Ý]HŠHÂˆYˆ
›Ý]H	HLOOH
HÂˆ›Ý]HHÂˆH[ÙHYˆ
›Ý]HHÍŒ
HÂˆ›Ý]H	OHÍŒÂˆH[ÙHYˆ
›Ý]H
HÂˆ›Ý]HH
›Ý]H	HÍŒ
ÈÍŒ
H	HÍŒÂˆBˆ™]\›ˆÚYÝÊ\Ëœ›Ý]H‹›Ý]JNÂˆBˆÛÛ”ÝX”Ý™X[Q\œ›ÜŠ™X\ÛÛ‹Øš’Y
HÂˆYˆ
\Ë™]˜[X]Ü“Ü[ÛœËšYÛ›Ü™Q\œ›ÜœÊHÂˆØ\›ŠÙ]ÛÛ[Ý™X[HHYÛ›Üš[™ÈÝX‹\Ý™X[H
	ÛØš’YJNˆ‰Ü™X\ÛÛŸH‹˜
NÂˆ™]\›ŽÂˆBˆ›ÝÈ™X\ÛÛŽÂˆBˆ\Þ[˜ÈÙ]ÛÛ[Ý™X[J
HÂˆÛÛœÝÛÛ[H]ØZ]\Ëœ“X[˜YÙ\‹™[œÝ\™J\Ë˜ÛÛ[ŠNÂˆYˆ
ÛÛ[[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JHÂˆ™]\›ˆÛÛ[ÂˆBˆYˆ
\œ˜^Kš\Ð\œ˜^JÛÛ[
JHÂˆ™]\›ˆ™]ÈÝ™X[\ÔÙ\]Y[˜ÙTÝ™X[JÛÛ[\ËˆÛÛ”ÝX”Ý™X[Q\œ›Ü‹˜š[™
\ÊJNÂˆBˆ™]\›ˆ™]È[Ý™X[J
NÂˆBˆÙ]˜Q]J
HÂˆ™]\›ˆÚYÝÊ\Ëž˜Q]H‹\Ëž˜Q˜XÝÜžHÈÂˆ˜›Þˆ\Ëž˜Q˜XÝÜžK™Ù]›Ý[™[™Ð›Þ
\ËœYÙR[™^
BˆHˆ[
NÂˆBˆ\Þ[˜ÈÜ™\XÙRYžT™YŠ[››Ý][ÛœË[]Y[››Ý][ÛœË^\Ý[™Ð[››Ý][ÛœÊHÂˆÛÛœÝ›ÛZ\Ù\ÈH×NÂˆ›Üˆ
ÛÛœÝ[››Ý][ÛˆÙˆ[››Ý][ÛœÊHÂˆYˆ
[››Ý][Û‹šY
HÂˆÛÛœÝ™YˆH™Y‹™œ›ÛTÝš[™Ê[››Ý][Û‹šY
NÂˆYˆ
\™YŠHÂˆØ\›ŠH›Û‹[[šÙY[››Ý][ÛˆØ[››Ý™H[ÙYšYYˆ	Ø[››Ý][Û‹šYX
NÂˆÛÛ[YNÂˆBˆYˆ
[››Ý][Û‹™[]Y
HÂˆ[]Y[››Ý][ÛœËœ]
™Y‹™YŠNÂˆYˆ
[››Ý][Û‹œÜ\™YŠHÂˆÛÛœÝÜ\™YˆH™Y‹™œ›ÛTÝš[™Ê[››Ý][Û‹œÜ\™YŠNÂˆYˆ
Ü\™YŠHÂˆ[]Y[››Ý][ÛœËœ]
Ü\™Y‹Ü\™YŠNÂˆBˆBˆÛÛ[YNÂˆBˆYˆ
[››Ý][Û‹œÜ\Ë™[]Y
HÂˆÛÛœÝÜ\™YˆH™Y‹™œ›ÛTÝš[™Ê[››Ý][Û‹œÜ\™YŠNÂˆYˆ
Ü\™YŠHÂˆ[]Y[››Ý][ÛœËœ]
Ü\™Y‹Ü\™YŠNÂˆBˆBˆ^\Ý[™Ð[››Ý][ÛœÏËœ]
™YŠNÂˆ[››Ý][Û‹œ™YˆH™YŽÂˆ›ÛZ\Ù\Ëœ\Ú
\Ëž™Y‹™™]Ú\Þ[˜Ê™YŠK[ŠØšˆOˆÂˆYˆ
Øšˆ[œÝ[˜Ù[ÙˆXÝ
HÂˆ[››Ý][Û‹›Û[››Ý][ÛˆHØš‹˜ÛÛ™J
NÂˆBˆK

HOˆÂˆØ\›ŠØ[››Ý™]ÚÛ[››Ý][Û—›ÜŽˆ	Ü™YŸK˜
NÂˆJJNÂˆ[]H[››Ý][Û‹šYÂˆBˆBˆ]ØZ]›ÛZ\ÙK˜[
›ÛZ\Ù\ÊNÂˆBˆ\Þ[˜ÈØ]™S™]Ð[››Ý][ÛœÊ[™\‹\ÚË[››Ý][ÛœË[XYÙT›ÛZ\Ù\ËÚ[™Ù\ÊHÂˆYˆ
\Ëž˜Q˜XÝÜžJHÂˆ›ÝÈ™]È\œ›ÜŠ–NˆØ[››ÝØ]™H™]È[››Ý][ÛœËˆŠNÂˆBˆÛÛœÝ\X[]˜[X]ÜˆH\ËˆØÜ™X]T\X[]˜[X]ÜŠ[™\ŠNÂˆÛÛœÝ[]Y[››Ý][ÛœÈH™]È™Y”Ù]ØXÚJ
NÂˆÛÛœÝ^\Ý[™Ð[››Ý][ÛœÈH™]È™Y”Ù]

NÂˆ]ØZ]\ËˆÜ™\XÙRYžT™YŠ[››Ý][ÛœË[]Y[››Ý][ÛœË^\Ý[™Ð[››Ý][ÛœÊNÂˆÛÛœÝYÙQXÝH\ËœYÙQXÝÂˆÛÛœÝ[››Ý][ÛœÐ\œ˜^HH\Ë˜[››Ý][ÛœË™š[\ŠHOˆJH[œÝ[˜Ù[Ùˆ™Yˆ	‰ˆ[]Y[››Ý][ÛœËš\ÊJJJNÂˆÛÛœÝ™]Ñ]HH]ØZ][››Ý][Û‘˜XÝÜžKœØ]™S™]Ð[››Ý][ÛœÊ\X[]˜[X]Ü‹\ÚË[››Ý][ÛœË[XYÙT›ÛZ\Ù\ËÚ[™Ù\ÊNÂˆ›Üˆ
ÛÛœÝÂˆ™Y‚ˆHÙˆ™]Ñ]K˜[››Ý][ÛœÊHÂˆYˆ
™Yˆ[œÝ[˜Ù[Ùˆ™Yˆ	‰ˆY^\Ý[™Ð[››Ý][ÛœËš\Ê™YŠJHÂˆ[››Ý][ÛœÐ\œ˜^Kœ\Ú
™YŠNÂˆBˆBˆÛÛœÝXÝHYÙQXÝ˜ÛÛ™J
NÂˆXÝœÙ]
[››ÝÈ‹[››Ý][ÛœÐ\œ˜^JNÂˆÚ[™Ù\Ëœ]
\Ëœ™Y‹Âˆ]NˆXÝˆJNÂˆ›Üˆ
ÛÛœÝ[]Y™YˆÙˆ[]Y[››Ý][ÛœÊHÂˆÚ[™Ù\Ëœ]
[]Y™Y‹Âˆ]Nˆ[ˆJNÂˆBˆBˆ\Þ[˜ÈØ]™J[™\‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊHÂˆÛÛœÝ\X[]˜[X]ÜˆH\ËˆØÜ™X]T\X[]˜[X]ÜŠ[™\ŠNÂˆÛÛœÝ[››Ý][ÛœÈH]ØZ]\Ë—Ü\œÙY[››Ý][ÛœÎÂˆÛÛœÝ›ÛZ\Ù\ÈH×NÂˆ›Üˆ
ÛÛœÝ[››Ý][ÛˆÙˆ[››Ý][ÛœÊHÂˆ›ÛZ\Ù\Ëœ\Ú
[››Ý][Û‹œØ]™J\X[]˜[X]Ü‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊK˜Ø]Ú
[˜Ý[Ûˆ
™X\ÛÛŠHÂˆØ\›ŠœØ]™HHYÛ›Üš[™È[››Ý][Ûˆ]H\š[™Èˆ
È‰Ý\ÚË›˜[Y_Hˆ\ÚÎˆ‰Ü™X\ÛÛŸH‹˜
NÂˆ™]\›ˆ[ÂˆJJNÂˆBˆ™]\›ˆ›ÛZ\ÙK˜[
›ÛZ\Ù\ÊNÂˆBˆ\Þ[˜ÈØY™\ÛÝ\˜Ù\ÊÙ^\ÊHÂˆ]ØZ]
\ËˆÜ™\ÛÝ\˜Ù\Ô›ÛZ\ÙHÏÏH\Ëœ“X[˜YÙ\‹™[œÝ\™J\Ëœ™\ÛÝ\˜Ù\ÈŠJNÂˆ]ØZ]Øš™XÝØY\‹›ØY
\Ëœ™\ÛÝ\˜Ù\ËÙ^\Ë\Ëž™YŠNÂˆBˆ\Þ[˜ÈÙÙ]Y\™ÙY™\ÛÝ\˜Ù\ÊÝ™X[QXÝÙ^\ÊHÂˆÛÛœÝØØ[™\ÛÝ\˜Ù\ÈHÝ™X[QXÝË™Ù]
”™\ÛÝ\˜Ù\ÈŠNÂˆYˆ
JØØ[™\ÛÝ\˜Ù\È[œÝ[˜Ù[ÙˆXÝ	‰ˆØØ[™\ÛÝ\˜Ù\ËœÚ^™JJHÂˆ™]\›ˆ\Ëœ™\ÛÝ\˜Ù\ÎÂˆBˆ]ØZ]Øš™XÝØY\‹›ØY
ØØ[™\ÛÝ\˜Ù\ËÙ^\Ë\Ëž™YŠNÂˆ™]\›ˆXÝ›Y\™ÙJÂˆ™YŽˆ\Ëž™Y‹ˆXÝ\œ˜^NˆÛØØ[™\ÛÝ\˜Ù\Ë\Ëœ™\ÛÝ\˜Ù\×KˆY\™ÙTÝX‘XÝÎˆYBˆJNÂˆBˆ\Þ[˜ÈÙ]Ü\˜]Ü“\Ý
Âˆ[™\‹ˆÚ[šËˆ\ÚËˆ[[ˆØXÚRÙ^Kˆ[››Ý][Û”ÝÜ˜YÙHH[ˆ[ÙYšYYYÈH[ˆJHÂˆÛÛœÝÛÛ[Ý™X[T›ÛZ\ÙHH\Ë™Ù]ÛÛ[Ý™X[J
NÂˆÛÛœÝ™\ÛÝ\˜Ù\Ô›ÛZ\ÙHH\Ë›ØY™\ÛÝ\˜Ù\Ê‘TÓÕTÑT×ÒÑVT×ÓÔTUÔ—ÓTÕ
NÂˆÛÛœÝ\X[]˜[X]ÜˆH\ËˆØÜ™X]T\X[]˜[X]ÜŠ[™\ŠNÂˆÛÛœÝ™]Ð[››ÝÐžTYÙHH]\Ëž˜Q˜XÝÜžHÈÙ]™]Ð[››Ý][ÛœÓX\
[››Ý][Û”ÝÜ˜YÙJHˆ[ÂˆÛÛœÝ™]Ð[››ÝÈH™]Ð[››ÝÐžTYÙOË™Ù]
\ËœYÙR[™^
NÂˆ]™]Ð[››Ý][ÛœÔ›ÛZ\ÙHH›ÛZ\ÙKœ™\ÛÛ™J[
NÂˆ][]Y[››Ý][ÛœÈH[ÂˆYˆ
™]Ð[››ÝÊHÂˆÛÛœÝ[››Ý][Û‘ÛØ˜[Ô›ÛZ\ÙHH\Ëœ“X[˜YÙ\‹™[œÝ\™QØÊ˜[››Ý][Û‘ÛØ˜[ÈŠNÂˆ][XYÙT›ÛZ\Ù\ÎÂˆÛÛœÝZ\ÜÚ[™Ðš]X\ÈH™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝÂˆš]X\Yˆš]X\ˆHÙˆ™]Ð[››ÝÊHÂˆYˆ
š]X\Y	‰ˆXš]X\	‰ˆ[Z\ÜÚ[™Ðš]X\Ëš\Êš]X\Y
JHÂˆZ\ÜÚ[™Ðš]X\Ë˜Y
š]X\Y
NÂˆBˆBˆÛÛœÝÂˆ\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜYˆHH\Ë™]˜[X]Ü“Ü[ÛœÎÂˆYˆ
Z\ÜÚ[™Ðš]X\ËœÚ^™Hˆ
HÂˆÛÛœÝ[››Ý][Û•Ú]š]X\ÈH™]Ð[››ÝËœÛXÙJ
NÂˆ›Üˆ
ÛÛœÝÚÙ^K[››Ý][Û—HÙˆ[››Ý][Û”ÝÜ˜YÙJHÂˆYˆ
ZÙ^KœÝ\ÕÚ]
[››Ý][Û‘Y]Ü”™Yš^
JHÂˆÛÛ[YNÂˆBˆYˆ
[››Ý][Û‹˜š]X\	‰ˆZ\ÜÚ[™Ðš]X\Ëš\Ê[››Ý][Û‹˜š]X\Y
JHÂˆ[››Ý][Û•Ú]š]X\Ëœ\Ú
[››Ý][ÛŠNÂˆBˆBˆ[XYÙT›ÛZ\Ù\ÈH[››Ý][Û‘˜XÝÜžK™Ù[™\˜]R[XYÙ\Ê[››Ý][Û•Ú]š]X\Ë\Ëž™Y‹\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY
NÂˆH[ÙHÂˆ[XYÙT›ÛZ\Ù\ÈH[››Ý][Û‘˜XÝÜžK™Ù[™\˜]R[XYÙ\Ê™]Ð[››ÝË\Ëž™Y‹\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY
NÂˆBˆ[]Y[››Ý][ÛœÈH™]È™Y”Ù]

NÂˆ™]Ð[››Ý][ÛœÔ›ÛZ\ÙHH›ÛZ\ÙK˜[
Ø[››Ý][Û‘ÛØ˜[Ô›ÛZ\ÙK\ËˆÜ™\XÙRYžT™YŠ™]Ð[››ÝË[]Y[››Ý][ÛœË[
WJK[Š
Ø[››Ý][Û‘ÛØ˜[×JHOˆÂˆYˆ
X[››Ý][Û‘ÛØ˜[ÊHÂˆ™]\›ˆ[ÂˆBˆ™]\›ˆ[››Ý][Û‘˜XÝÜžKœš[™]Ð[››Ý][ÛœÊ[››Ý][Û‘ÛØ˜[Ë\X[]˜[X]Ü‹\ÚË™]Ð[››ÝË[XYÙT›ÛZ\Ù\ÊNÂˆJNÂˆBˆÛÛœÝYÙS\Ý›ÛZ\ÙHH›ÛZ\ÙK˜[
ØÛÛ[Ý™X[T›ÛZ\ÙK™\ÛÝ\˜Ù\Ô›ÛZ\ÙWJK[Š\Þ[˜È
ØÛÛ[Ý™X[WJHOˆÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH]ØZ]\ËˆÙÙ]Y\™ÙY™\ÛÝ\˜Ù\ÊÛÛ[Ý™X[K™XÝ‘TÓÕTÑT×ÒÑVT×ÓÔTUÔ—ÓTÕ
NÂˆÛÛœÝÜ\ÝH™]ÈÜ\˜]Ü“\Ý
[[Ú[šÊNÂˆ[™\‹œÙ[™
”Ý\™[™\”YÙH‹Âˆ˜[œÜ\™[˜ÞNˆ\X[]˜[X]Ü‹š\Ð›[™[Ù\Ê™\ÛÝ\˜Ù\Ë\Ë››Û›[™[Ù\ÔÙ]
KˆYÙR[™^ˆ\ËœYÙR[™^ˆØXÚRÙ^BˆJNÂˆ]ØZ]\X[]˜[X]Ü‹™Ù]Ü\˜]Ü“\Ý
ÂˆÝ™X[NˆÛÛ[Ý™X[Kˆ\ÚËˆ™\ÛÝ\˜Ù\ËˆÜ\˜]Ü“\ÝˆÜ\ÝˆJNÂˆ™]\›ˆÜ\ÝÂˆJNÂˆ]ÜYÙSÜ\Ý[››Ý][ÛœË™]Ð[››Ý][Ûœ×HH]ØZ]›ÛZ\ÙK˜[
ÜYÙS\Ý›ÛZ\ÙK\Ë—Ü\œÙY[››Ý][ÛœË™]Ð[››Ý][ÛœÔ›ÛZ\ÙWJNÂˆYˆ
™]Ð[››Ý][ÛœÊHÂˆ[››Ý][ÛœÈH[››Ý][ÛœË™š[\ŠHOˆJKœ™Yˆ	‰ˆ[]Y[››Ý][ÛœËš\ÊKœ™YŠJJNÂˆ›Üˆ
]HHZHH™]Ð[››Ý][ÛœË›[™ÝÈHZNÈJÊÊHÂˆÛÛœÝ™]Ð[››Ý][ÛˆH™]Ð[››Ý][ÛœÖÚWNÂˆYˆ
™]Ð[››Ý][Û‹œ™Y•Ô™\XÙJHÂˆÛÛœÝˆH[››Ý][ÛœË™š[™[™^
HOˆKœ™Yˆ	‰ˆ\Ô™YœÑ\]X[
Kœ™Y‹™]Ð[››Ý][Û‹œ™Y•Ô™\XÙJJNÂˆYˆ
ˆH
HÂˆ[››Ý][ÛœËœÜXÙJ‹K™]Ð[››Ý][ÛŠNÂˆ™]Ð[››Ý][ÛœËœÜXÙJKKKJNÂˆZKKNÂˆBˆBˆBˆ[››Ý][ÛœÈH[››Ý][ÛœË˜ÛÛ˜Ø]
™]Ð[››Ý][ÛœÊNÂˆBˆYˆ
[››Ý][ÛœË›[™ÝOOH[[	ˆ™[™\š[™Ò[[›YËS““ÕUSÓ”×ÑTÐP“JHÂˆYÙSÜ\Ý™›\Ú
YJNÂˆ™]\›ˆÂˆ[™ÝˆYÙSÜ\ÝÝ[[™ÝˆNÂˆBˆÛÛœÝ™[™\‘›Ü›\ÈHHJ[[	ˆ™[™\š[™Ò[[›YËS““ÕUSÓ”×Ñ“Ô“TÊKˆ\ÑY][™ÈHHJ[[	ˆ™[™\š[™Ò[[›YË’T×ÑQUS‘ÊKˆ[[[žHHHJ[[	ˆ™[™\š[™Ò[[›YËS–JKˆ[[\Ü^HHHJ[[	ˆ™[™\š[™Ò[[›YË‘TÔVJKˆ[[š[HHJ[[	ˆ™[™\š[™Ò[[›YË”’S•
NÂˆÛÛœÝÜ\Ý›ÛZ\Ù\ÈH×NÂˆ›Üˆ
ÛÛœÝ[››Ý][ÛˆÙˆ[››Ý][ÛœÊHÂˆYˆ
[[[žH[[\Ü^H	‰ˆ[››Ý][Û‹›]\Ý™UšY]ÙY
[››Ý][Û”ÝÜ˜YÙK™[™\‘›Ü›\ÊH	‰ˆ[››Ý][Û‹›]\Ý™UšY]ÙYÚ[‘Y][™Ê\ÑY][™Ë[ÙYšYYYÊH[[š[	‰ˆ[››Ý][Û‹›]\Ý™Tš[Y
[››Ý][Û”ÝÜ˜YÙJJHÂˆÜ\Ý›ÛZ\Ù\Ëœ\Ú
[››Ý][Û‹™Ù]Ü\˜]Ü“\Ý
\X[]˜[X]Ü‹\ÚË[[[››Ý][Û”ÝÜ˜YÙJK˜Ø]Ú
[˜Ý[Ûˆ
™X\ÛÛŠHÂˆØ\›Š™Ù]Ü\˜]Ü“\ÝHYÛ›Üš[™È[››Ý][Ûˆ]H\š[™Èˆ
È‰Ý\ÚË›˜[Y_Hˆ\ÚÎˆ‰Ü™X\ÛÛŸH‹˜
NÂˆ™]\›ˆÂˆÜ\Ýˆ[ˆÙ\\˜]Q›Ü›Nˆ˜[ÙKˆÙ\\˜]PØ[˜\Îˆ˜[ÙBˆNÂˆJJNÂˆBˆBˆÛÛœÝÜ\ÝÈH]ØZ]›ÛZ\ÙK˜[
Ü\Ý›ÛZ\Ù\ÊNÂˆ]›Ü›HH˜[ÙKˆØ[˜\ÈH˜[ÙNÂˆ›Üˆ
ÛÛœÝÂˆÜ\ÝˆÙ\\˜]Q›Ü›KˆÙ\\˜]PØ[˜\ÂˆHÙˆÜ\ÝÊHÂˆYÙSÜ\Ý˜YÜ\Ý
Ü\Ý
NÂˆ›Ü›HHÙ\\˜]Q›Ü›NÂˆØ[˜\ÈHÙ\\˜]PØ[˜\ÎÂˆBˆYÙSÜ\Ý™›\Ú
YKÂˆ›Ü›KˆØ[˜\ÂˆJNÂˆ™]\›ˆÂˆ[™ÝˆYÙSÜ\ÝÝ[[™ÝˆNÂˆBˆ\Þ[˜È^˜XÝ^ÛÛ[
Âˆ[™\‹ˆ\ÚËˆ[˜ÛYSX\šÙYÛÛ[ˆ\ØX›S›Ü›X[^˜][Û‹ˆÚ[šËˆ[\œÙXÝÜˆH[ˆJHÂˆÛÛœÝÛÛ[Ý™X[T›ÛZ\ÙHH\Ë™Ù]ÛÛ[Ý™X[J
NÂˆÛÛœÝ™\ÛÝ\˜Ù\Ô›ÛZ\ÙHH\Ë›ØY™\ÛÝ\˜Ù\Ê‘TÓÕTÑT×ÒÑVT×ÕVÐÓÓ•S•
NÂˆÛÛœÝ[™Ô›ÛZ\ÙHH\Ëœ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ›[™ÈŠNÂˆÛÛœÝØÛÛ[Ý™X[K[™×HH]ØZ]›ÛZ\ÙK˜[
ØÛÛ[Ý™X[T›ÛZ\ÙK™\ÛÝ\˜Ù\Ô›ÛZ\ÙK[™Ô›ÛZ\ÙWJNÂˆÛÛœÝ™\ÛÝ\˜Ù\ÈH]ØZ]\ËˆÙÙ]Y\™ÙY™\ÛÝ\˜Ù\ÊÛÛ[Ý™X[K™XÝ‘TÓÕTÑT×ÒÑVT×ÕVÐÓÓ•S•
NÂˆÛÛœÝ\X[]˜[X]ÜˆH\ËˆØÜ™X]T\X[]˜[X]ÜŠ[™\ŠNÂˆ™]\›ˆ\X[]˜[X]Ü‹™Ù]^ÛÛ[
ÂˆÝ™X[NˆÛÛ[Ý™X[Kˆ\ÚËˆ™\ÛÝ\˜Ù\Ëˆ[˜ÛYSX\šÙYÛÛ[ˆ\ØX›S›Ü›X[^˜][Û‹ˆÚ[šËˆšY]Ð›Þˆ\ËšY]Ëˆ[™Ëˆ[\œÙXÝÜ‚ˆJNÂˆBˆ\Þ[˜ÈÙ]ÝXÝ™YJ
HÂˆÛÛœÝÝXÝ™YT›ÛÝH]ØZ]\Ëœ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊœÝXÝ™YT›ÛÝŠNÂˆYˆ
\ÝXÝ™YT›ÛÝ
HÂˆ™]\›ˆ[ÂˆBˆ]ØZ]\Ë—Ü\œÙY[››Ý][ÛœÎÂˆžHÂˆÛÛœÝÝXÝ™YHH]ØZ]\Ëœ“X[˜YÙ\‹™[œÝ\™J\Ë—Ü\œÙTÝXÝ™YH‹ÜÝXÝ™YT›ÛÝJNÂˆÛÛœÝ]HH]ØZ]\Ëœ“X[˜YÙ\‹™[œÝ\™JÝXÝ™YKœÙ\šX[^˜X›HŠNÂˆ™]\›ˆ]NÂˆHØ]Ú
^
HÂˆØ\›ŠÙ]ÝXÝ™YNˆ‰Ù^H‹˜
NÂˆ™]\›ˆ[ÂˆBˆBˆÜ\œÙTÝXÝ™YJÝXÝ™YT›ÛÝ
HÂˆÛÛœÝ™YHH™]ÈÝXÝ™YTYÙJÝXÝ™YT›ÛÝ\ËœYÙQXÝ
NÂˆ™YKœ\œÙJ\Ëœ™YŠNÂˆ™]\›ˆ™YNÂˆBˆ\Þ[˜ÈÙ][››Ý][ÛœÑ]J[™\‹\ÚË[[
HÂˆÛÛœÝ[››Ý][ÛœÈH]ØZ]\Ë—Ü\œÙY[››Ý][ÛœÎÂˆYˆ
[››Ý][ÛœË›[™ÝOOH
HÂˆ™]\›ˆ[››Ý][ÛœÎÂˆBˆÛÛœÝ[››Ý][ÛœÑ]HH×Kˆ^ÛÛ[›ÛZ\Ù\ÈH×NÂˆ]\X[]˜[X]ÜŽÂˆÛÛœÝ[[[žHHHJ[[	ˆ™[™\š[™Ò[[›YËS–JKˆ[[\Ü^HHHJ[[	ˆ™[™\š[™Ò[[›YË‘TÔVJKˆ[[š[HHJ[[	ˆ™[™\š[™Ò[[›YË”’S•
NÂˆÛÛœÝYÚYÚY[››Ý][ÛœÈH×NÂˆ›Üˆ
ÛÛœÝ[››Ý][ÛˆÙˆ[››Ý][ÛœÊHÂˆÛÛœÝ\Õš\ÚX›HH[[[žH[[\Ü^H	‰ˆ[››Ý][Û‹šY]ØX›NÂˆYˆ
\Õš\ÚX›H[[š[	‰ˆ[››Ý][Û‹œš[X›JHÂˆ[››Ý][ÛœÑ]Kœ\Ú
[››Ý][Û‹™]JNÂˆBˆYˆ
[››Ý][Û‹š\Õ^ÛÛ[	‰ˆ\Õš\ÚX›JHÂˆ\X[]˜[X]ÜˆÏÏH\ËˆØÜ™X]T\X[]˜[X]ÜŠ[™\ŠNÂˆ^ÛÛ[›ÛZ\Ù\Ëœ\Ú
[››Ý][Û‹™^˜XÝ^ÛÛ[
\X[]˜[X]Ü‹\ÚËËR[™š[š]KR[™š[š]K[™š[š]K[™š[š]WJK˜Ø]Ú
[˜Ý[Ûˆ
™X\ÛÛŠHÂˆØ\›ŠÙ][››Ý][ÛœÑ]HHYÛ›Üš[™È^ÛÛ[\š[™È‰Ý\ÚË›˜[Y_Hˆ\ÚÎˆ‰Ü™X\ÛÛŸH‹˜
NÂˆJJNÂˆH[ÙHYˆ
[››Ý][Û‹›Ý™\›^\Õ^ÛÛ[	‰ˆ\Õš\ÚX›JHÂˆYÚYÚY[››Ý][ÛœËœ\Ú
[››Ý][ÛŠNÂˆBˆBˆYˆ
YÚYÚY[››Ý][ÛœË›[™Ýˆ
HÂˆÛÛœÝ[\œÙXÝÜˆH™]È[\œÙXÝÜŠYÚYÚY[››Ý][ÛœÊNÂˆ^ÛÛ[›ÛZ\Ù\Ëœ\Ú
\Ë™^˜XÝ^ÛÛ[
Âˆ[™\‹ˆ\ÚËˆ[˜ÛYSX\šÙYÛÛ[ˆ˜[ÙKˆ\ØX›S›Ü›X[^˜][ÛŽˆ˜[ÙKˆÚ[šÎˆ[ˆšY]Ð›Þˆ\ËšY]Ëˆ[™Îˆ[ˆ[\œÙXÝÜ‚ˆJK[Š

HOˆÂˆ[\œÙXÝÜ‹œÙ]^

NÂˆJJNÂˆBˆ]ØZ]›ÛZ\ÙK˜[
^ÛÛ[›ÛZ\Ù\ÊNÂˆ™]\›ˆ[››Ý][ÛœÑ]NÂˆBˆÙ][››Ý][ÛœÊ
HÂˆÛÛœÝ[››ÝÈH\ËˆÙÙ][š\š]X›T›Ü\J[››ÝÈŠNÂˆ™]\›ˆÚYÝÊ\Ë˜[››Ý][ÛœÈ‹\œ˜^Kš\Ð\œ˜^J[››ÝÊHÈ[››ÝÈˆ×JNÂˆBˆÙ]Ü\œÙY[››Ý][ÛœÊ
HÂˆÛÛœÝ›ÛZ\ÙHH\Ëœ“X[˜YÙ\‹™[œÝ\™J\Ë˜[››Ý][ÛœÈŠK[Š\Þ[˜È[››ÝÈOˆÂˆYˆ
[››ÝË›[™ÝOOH
HÂˆ™]\›ˆ[››ÝÎÂˆBˆÛÛœÝØ[››Ý][Û‘ÛØ˜[ËšY[Øš™XÝ×HH]ØZ]›ÛZ\ÙK˜[
Ý\Ëœ“X[˜YÙ\‹™[œÝ\™QØÊ˜[››Ý][Û‘ÛØ˜[ÈŠK\Ëœ“X[˜YÙ\‹™[œÝ\™QØÊ™šY[Øš™XÝÈŠWJNÂˆYˆ
X[››Ý][Û‘ÛØ˜[ÊHÂˆ™]\›ˆ×NÂˆBˆÛÛœÝÜœ[‘šY[ÈHšY[Øš™XÝÏË›Üœ[‘šY[ÎÂˆÛÛœÝ[››Ý][Û”›ÛZ\Ù\ÈH×NÂˆ›Üˆ
ÛÛœÝ[››Ý][Û”™YˆÙˆ[››ÝÊHÂˆ[››Ý][Û”›ÛZ\Ù\Ëœ\Ú
[››Ý][Û‘˜XÝÜžK˜Ü™X]J\Ëž™Y‹[››Ý][Û”™Y‹[››Ý][Û‘ÛØ˜[Ë\Ë—ÛØØ[Y˜XÝÜžK˜[ÙKÜœ[‘šY[Ë[\Ëœ™YŠK˜Ø]Ú
[˜Ý[Ûˆ
™X\ÛÛŠHÂˆØ\›ŠÜ\œÙY[››Ý][ÛœÎˆ‰Ü™X\ÛÛŸH‹˜
NÂˆ™]\›ˆ[ÂˆJJNÂˆBˆÛÛœÝÛÜY[››Ý][ÛœÈH×NÂˆ]Ü\[››Ý][ÛœËÚYÙ][››Ý][ÛœÎÂˆ›Üˆ
ÛÛœÝ[››Ý][ÛˆÙˆ]ØZ]›ÛZ\ÙK˜[
[››Ý][Û”›ÛZ\Ù\ÊJHÂˆYˆ
X[››Ý][ÛŠHÂˆÛÛ[YNÂˆBˆYˆ
[››Ý][Ûˆ[œÝ[˜Ù[ÙˆÚYÙ][››Ý][ÛŠHÂˆ
ÚYÙ][››Ý][ÛœÈH×JKœ\Ú
[››Ý][ÛŠNÂˆÛÛ[YNÂˆBˆYˆ
[››Ý][Ûˆ[œÝ[˜Ù[ÙˆÜ\[››Ý][ÛŠHÂˆ
Ü\[››Ý][ÛœÈH×JKœ\Ú
[››Ý][ÛŠNÂˆÛÛ[YNÂˆBˆÛÜY[››Ý][ÛœËœ\Ú
[››Ý][ÛŠNÂˆBˆYˆ
ÚYÙ][››Ý][ÛœÊHÂˆÛÜY[››Ý][ÛœËœ\Ú
‹‹ÚYÙ][››Ý][ÛœÊNÂˆBˆYˆ
Ü\[››Ý][ÛœÊHÂˆÛÜY[››Ý][ÛœËœ\Ú
‹‹œÜ\[››Ý][ÛœÊNÂˆBˆ™]\›ˆÛÜY[››Ý][ÛœÎÂˆJNÂˆ\ËˆØ\™P[››Ý][ÛœÐØXÚYHYNÂˆ™]\›ˆÚYÝÊ\Ë—Ü\œÙY[››Ý][ÛœÈ‹›ÛZ\ÙJNÂˆBˆÙ]œÐXÝ[ÛœÊ
HÂˆÛÛœÝXÝ[ÛœÈHÛÛXÝXÝ[ÛœÊ\Ëž™Y‹\ËœYÙQXÝYÙPXÝ[Û‘]™[\JNÂˆ™]\›ˆÚYÝÊ\ËšœÐXÝ[ÛœÈ‹XÝ[ÛœÊNÂˆBˆ\Þ[˜ÈÛÛXÝ[››Ý][ÛœÐžU\J[™\‹\ÚË\\Ë›ÛZ\Ù\Ë[››Ý][Û‘ÛØ˜[ÊHÂˆÛÛœÝÂˆYÙR[™^ˆHH\ÎÂˆYˆ
\ËˆØ\™P[››Ý][ÛœÐØXÚY
HÂˆÛÛœÝØXÚY[››Ý][ÛœÈH]ØZ]\Ë—Ü\œÙY[››Ý][ÛœÎÂˆ›Üˆ
ÛÛœÝÂˆ]BˆHÙˆØXÚY[››Ý][ÛœÊHÂˆYˆ
]\\È\\Ëš\Ê]K˜[››Ý][Û•\JJHÂˆ]KœYÙR[™^HYÙR[™^Âˆ›ÛZ\Ù\Ëœ\Ú
›ÛZ\ÙKœ™\ÛÛ™J]JJNÂˆBˆBˆ™]\›ŽÂˆBˆÛÛœÝ[››ÝÈH]ØZ]\Ëœ“X[˜YÙ\‹™[œÝ\™J\Ë˜[››Ý][ÛœÈŠNÂˆ›Üˆ
ÛÛœÝ[››Ý][Û”™YˆÙˆ[››ÝÊHÂˆ›ÛZ\Ù\Ëœ\Ú
[››Ý][Û‘˜XÝÜžK˜Ü™X]J\Ëž™Y‹[››Ý][Û”™Y‹[››Ý][Û‘ÛØ˜[Ë\Ë—ÛØØ[Y˜XÝÜžK˜[ÙK[\\Ë\Ëœ™YŠK[Š\Þ[˜È[››Ý][ÛˆOˆÂˆYˆ
X[››Ý][ÛŠHÂˆ™]\›ˆ[ÂˆBˆ[››Ý][Û‹™]KœYÙR[™^HYÙR[™^ÂˆYˆ
[››Ý][Û‹š\Õ^ÛÛ[	‰ˆ[››Ý][Û‹šY]ØX›JHÂˆÛÛœÝ\X[]˜[X]ÜˆH\ËˆØÜ™X]T\X[]˜[X]ÜŠ[™\ŠNÂˆ]ØZ][››Ý][Û‹™^˜XÝ^ÛÛ[
\X[]˜[X]Ü‹\ÚËËR[™š[š]KR[™š[š]K[™š[š]K[™š[š]WJNÂˆBˆ™]\›ˆ[››Ý][Û‹™]NÂˆJK˜Ø]Ú
[˜Ý[Ûˆ
™X\ÛÛŠHÂˆØ\›ŠÛÛXÝ[››Ý][ÛœÐžU\Nˆ‰Ü™X\ÛÛŸH‹˜
NÂˆ™]\›ˆ[ÂˆJJNÂˆBˆBŸB˜ÛÛœÝ—ÒPQT—ÔÒQÓUT‘HH™]ÈZ[\œ˜^JÌKL‹™JNÂ˜ÛÛœÝÕT•‘Q—ÔÒQÓUT‘HH™]ÈZ[\œ˜^JÌÌËÍŒKÌ‹ÍÎÌ‹K—JNÂ˜ÛÛœÝS‘Ð’—ÔÒQÓUT‘HH™]ÈZ[\œ˜^JÌK™K™‹Œ‹˜WJNÂ™[˜Ý[Ûˆš[™
Ý™X[KÚYÛ˜]\™K[Z]HL˜XÚÝØ\™ÈH˜[ÙJHÂˆÛÛœÝÚYÛ˜]\™S[™ÝHÚYÛ˜]\™K›[™ÝÂˆÛÛœÝØØ[ž]\ÈHÝ™X[KœYZÐž]\Ê[Z]
NÂˆÛÛœÝØØ[“[™ÝHØØ[ž]\Ë›[™ÝHÚYÛ˜]\™S[™ÝÂˆYˆ
ØØ[“[™ÝH
HÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
˜XÚÝØ\™ÊHÂˆÛÛœÝÚYÛ˜]\™Q[™HÚYÛ˜]\™S[™ÝHNÂˆ]ÜÈHØØ[ž]\Ë›[™ÝHNÂˆÚ[H
ÜÈHÚYÛ˜]\™Q[™
HÂˆ]ˆHÂˆÚ[H
ˆÚYÛ˜]\™S[™Ý	‰ˆØØ[ž]\ÖÜÜÈH—HOOHÚYÛ˜]\™VÜÚYÛ˜]\™Q[™H—JHÂˆŠÊÎÂˆBˆYˆ
ˆHÚYÛ˜]\™S[™Ý
HÂˆÝ™X[KœÜÈ
ÏHÜÈHÚYÛ˜]\™Q[™Âˆ™]\›ˆYNÂˆBˆÜËKNÂˆBˆH[ÙHÂˆ]ÜÈHÂˆÚ[H
ÜÈHØØ[“[™Ý
HÂˆ]ˆHÂˆÚ[H
ˆÚYÛ˜]\™S[™Ý	‰ˆØØ[ž]\ÖÜÜÈ
È—HOOHÚYÛ˜]\™VÚ—JHÂˆŠÊÎÂˆBˆYˆ
ˆHÚYÛ˜]\™S[™Ý
HÂˆÝ™X[KœÜÈ
ÏHÜÎÂˆ™]\›ˆYNÂˆBˆÜÊÊÎÂˆBˆBˆ™]\›ˆ˜[ÙNÂŸB˜Û\ÜÈ‘ØÝ[Y[ÂˆÜYÙT›ÛZ\Ù\ÈH™]ÈX\

NÂˆÝ™\œÚ[ÛˆH[ÂˆÛÛœÝXÝÜŠ“X[˜YÙ\‹Ý™X[JHÂˆYˆ
Ý™X[K›[™ÝH
HÂˆ›ÝÈ™]È[˜[Y‘^Ù\[ÛŠ•Hˆš[H\È[\KK™Kˆ]ÈÚ^™H\È™\›Èž]\ËˆŠNÂˆBˆ\Ëœ“X[˜YÙ\ˆH“X[˜YÙ\ŽÂˆ\ËœÝ™X[HHÝ™X[NÂˆ\Ëž™YˆH™]È™YŠÝ™X[K“X[˜YÙ\ŠNÂˆÛÛœÝYÛÝ[\œÈHÂˆ›ÛˆˆNÂˆ\Ë—ÙÛØ˜[Y˜XÝÜžHHÛ\ÜÈÂˆÝ]XÈÙ]ØÒY

HÂˆ™]\›ˆ×ÉÜ“X[˜YÙ\‹™ØÒYXÂˆBˆÝ]XÈÜ™X]Q›ÛY

HÂˆ™]\›ˆ‰ÊÊÚYÛÝ[\œË™›ÛXÂˆBˆÝ]XÈÜ™X]SØš’Y

HÂˆ[œ™XXÚX›JXœÝ˜XÝY]ÙÜ™X]SØš’YØ[YˆŠNÂˆBˆÝ]XÈÙ]YÙSØš’Y

HÂˆ[œ™XXÚX›JXœÝ˜XÝY]ÙÙ]YÙSØš’YØ[YˆŠNÂˆBˆNÂˆBˆ\œÙJ™XÛÝ™\žS[ÙJHÂˆ\Ëž™Y‹œ\œÙJ™XÛÝ™\žS[ÙJNÂˆ\Ë˜Ø][ÙÈH™]ÈØ][ÙÊ\Ëœ“X[˜YÙ\‹\Ëž™YŠNÂˆBˆÙ][™X\š^˜][ÛŠ
HÂˆ][™X\š^˜][ÛˆH[ÂˆžHÂˆ[™X\š^˜][ÛˆH[™X\š^˜][Û‹˜Ü™X]J\ËœÝ™X[JNÂˆHØ]Ú
\œŠHÂˆYˆ
\œˆ[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠHÂˆ›ÝÈ\œŽÂˆBˆ[™›Ê\œŠNÂˆBˆ™]\›ˆÚYÝÊ\Ë›[™X\š^˜][Ûˆ‹[™X\š^˜][ÛŠNÂˆBˆÙ]Ý\™YŠ
HÂˆÛÛœÝÝ™X[HH\ËœÝ™X[NÂˆ]Ý\™YˆHÂˆYˆ
\Ë›[™X\š^˜][ÛŠHÂˆÝ™X[Kœ™\Ù]

NÂˆYˆ
š[™
Ý™X[KS‘Ð’—ÔÒQÓUT‘JJHÂˆÝ™X[KœÚÚ\
ŠNÂˆ]ÚHÝ™X[KœYZÐž]J
NÂˆÚ[H
\ÕÚ]TÜXÙJÚ
JHÂˆÝ™X[KœÜÊÊÎÂˆÚHÝ™X[KœYZÐž]J
NÂˆBˆÝ\™YˆHÝ™X[KœÜÈHÝ™X[KœÝ\ÂˆBˆH[ÙHÂˆÛÛœÝÝ\HLÂˆÛÛœÝÝ\™Y“[™ÝHÕT•‘Q—ÔÒQÓUT‘K›[™ÝÂˆ]›Ý[™H˜[ÙKˆÜÈHÝ™X[K™[™ÂˆÚ[H
Y›Ý[™	‰ˆÜÈˆ
HÂˆÜÈOHÝ\HÝ\™Y“[™ÝÂˆYˆ
ÜÈ
HÂˆÜÈHÂˆBˆÝ™X[KœÜÈHÜÎÂˆ›Ý[™Hš[™
Ý™X[KÕT•‘Q—ÔÒQÓUT‘KÝ\YJNÂˆBˆYˆ
›Ý[™
HÂˆÝ™X[KœÚÚ\
JNÂˆ]ÚÂˆÈÂˆÚHÝ™X[K™Ù]ž]J
NÂˆHÚ[H
\ÕÚ]TÜXÙJÚ
JNÂˆ]ÝˆHˆŽÂˆÚ[H
ÚHŒ	‰ˆÚHÎJHÂˆÝˆ
ÏHÝš[™Ë™œ›ÛPÚ\ÛÙJÚ
NÂˆÚHÝ™X[K™Ù]ž]J
NÂˆBˆÝ\™YˆH\œÙR[
Ý‹L
NÂˆYˆ
\Ó˜SŠÝ\™YŠJHÂˆÝ\™YˆHÂˆBˆBˆBˆ™]\›ˆÚYÝÊ\ËœÝ\™Yˆ‹Ý\™YŠNÂˆBˆÚXÚÒXY\Š
HÂˆÛÛœÝÝ™X[HH\ËœÝ™X[NÂˆÝ™X[Kœ™\Ù]

NÂˆYˆ
Yš[™
Ý™X[K—ÒPQT—ÔÒQÓUT‘JJHÂˆ™]\›ŽÂˆBˆÝ™X[K›[Ý™TÝ\

NÂˆÝ™X[KœÚÚ\
—ÒPQT—ÔÒQÓUT‘K›[™Ý
NÂˆ]™\œÚ[ÛˆHˆ‹ˆÚÂˆÚ[H

ÚHÝ™X[K™Ù]ž]J
JHˆŒ	‰ˆ™\œÚ[Û‹›[™ÝÊHÂˆ™\œÚ[Ûˆ
ÏHÝš[™Ë™œ›ÛPÚ\ÛÙJÚ
NÂˆBˆYˆ
—Õ‘T”ÒSÓ—Ô‘QÑV\Ý
™\œÚ[ÛŠJHÂˆ\ËˆÝ™\œÚ[ÛˆH™\œÚ[ÛŽÂˆH[ÙHÂˆØ\›Š[˜[YˆXY\ˆ™\œÚ[ÛŽˆ	Ý™\œÚ[ÛŸX
NÂˆBˆBˆ\œÙTÝ\™YŠ
HÂˆ\Ëž™Y‹œÙ]Ý\™YŠ\ËœÝ\™YŠNÂˆBˆÙ][TYÙ\Ê
HÂˆ][HHÂˆYˆ
\Ë˜Ø][ÙËš\ÐXÝX[[TYÙ\ÊHÂˆ[HH\Ë˜Ø][ÙË›[TYÙ\ÎÂˆH[ÙHYˆ
\Ëž˜Q˜XÝÜžJHÂˆ[HH\Ëž˜Q˜XÝÜžK™Ù][TYÙ\Ê
NÂˆH[ÙHYˆ
\Ë›[™X\š^˜][ÛŠHÂˆ[HH\Ë›[™X\š^˜][Û‹›[TYÙ\ÎÂˆH[ÙHÂˆ[HH\Ë˜Ø][ÙË›[TYÙ\ÎÂˆBˆ™]\›ˆÚYÝÊ\Ë›[TYÙ\È‹[JNÂˆBˆÚ\ÓÛ›QØÝ[Y[ÚYÛ˜]\™\ÊšY[Ë™XÝ\œÚ[Û‘\H
HÂˆÛÛœÝ‘PÕT”ÒSÓ—ÓSRUHLÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JšY[ÊJHÂˆ™]\›ˆ˜[ÙNÂˆBˆ™]\›ˆšY[Ë™]™\žJšY[OˆÂˆšY[H\Ëž™Y‹™™]ÚY”™YŠšY[
NÂˆYˆ
JšY[[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
šY[š\Ê’ÚYÈŠJHÂˆYˆ

ÊÜ™XÝ\œÚ[Û‘\ˆ‘PÕT”ÒSÓ—ÓSRU
HÂˆØ\›ŠˆÚ\ÓÛ›QØÝ[Y[ÚYÛ˜]\™\ÎˆX^[][H™XÝ\œÚ[Ûˆ\™XXÚYŠNÂˆ™]\›ˆ˜[ÙNÂˆBˆ™]\›ˆ\ËˆÚ\ÓÛ›QØÝ[Y[ÚYÛ˜]\™\ÊšY[™Ù]
’ÚYÈŠK™XÝ\œÚ[Û‘\
NÂˆBˆÛÛœÝ\ÔÚYÛ˜]\™HH\Ó˜[YJšY[™Ù]
‘•ŠK”ÚYÈŠNÂˆÛÛœÝ™XÝ[™ÛHHšY[™Ù]
”™XÝŠNÂˆÛÛœÝ\Ò[š\ÚX›HH\œ˜^Kš\Ð\œ˜^J™XÝ[™ÛJH	‰ˆ™XÝ[™ÛK™]™\žJ˜[YHOˆ˜[YHOOH
NÂˆ™]\›ˆ\ÔÚYÛ˜]\™H	‰ˆ\Ò[š\ÚX›NÂˆJNÂˆBˆØÛÛXÝÚYÛ˜]\™PÙ\YšXØ]\ÊšY[ËÛÛXÝYÚYÛ˜]\™PÙ\YšXØ]\Ëš\Ú]YH™]È™Y”Ù]

JHÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JšY[ÊJHÂˆ™]\›ŽÂˆBˆ›Üˆ
]šY[ÙˆšY[ÊHÂˆYˆ
šY[[œÝ[˜Ù[Ùˆ™YŠHÂˆYˆ
š\Ú]Yš\ÊšY[
JHÂˆÛÛ[YNÂˆBˆš\Ú]Yœ]
šY[
NÂˆBˆšY[H\Ëž™Y‹™™]ÚY”™YŠšY[
NÂˆYˆ
JšY[[œÝ[˜Ù[ÙˆXÝ
JHÂˆÛÛ[YNÂˆBˆYˆ
šY[š\Ê’ÚYÈŠJHÂˆ\ËˆØÛÛXÝÚYÛ˜]\™PÙ\YšXØ]\ÊšY[™Ù]
’ÚYÈŠKÛÛXÝYÚYÛ˜]\™PÙ\YšXØ]\Ëš\Ú]Y
NÂˆÛÛ[YNÂˆBˆÛÛœÝ\ÔÚYÛ˜]\™HH\Ó˜[YJšY[™Ù]
‘•ŠK”ÚYÈŠNÂˆYˆ
Z\ÔÚYÛ˜]\™JHÂˆÛÛ[YNÂˆBˆÛÛœÝ˜[YHHšY[™Ù]
•ˆŠNÂˆYˆ
J˜[YH[œÝ[˜Ù[ÙˆXÝ
JHÂˆÛÛ[YNÂˆBˆÛÛœÝÝX‘š[\ˆH˜[YK™Ù]
”ÝX‘š[\ˆŠNÂˆYˆ
JÝX‘š[\ˆ[œÝ[˜Ù[Ùˆ˜[YJJHÂˆÛÛ[YNÂˆBˆÛÛXÝYÚYÛ˜]\™PÙ\YšXØ]\Ë˜Y
ÝX‘š[\‹›˜[YJNÂˆBˆBˆÙ]Þ˜TÝ™X[\Ê
HÂˆÛÛœÝÂˆXÜ›Ñ›Ü›BˆHH\Ë˜Ø][ÙÎÂˆYˆ
XXÜ›Ñ›Ü›JHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ˜HHXÜ›Ñ›Ü›K™Ù]
–HŠNÂˆÛÛœÝ[šY\ÈH™]ÈX\
Èžž‹[\]H‹™]\Ù]È‹˜ÛÛ™šYÈ‹˜ÛÛ›™XÝ[Û”Ù]‹›ØØ[TÙ]‹œÝ[\ÚY]‹‹Þž—K›X\
HOˆÙK[JJNÂˆYˆ
˜H[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[H	‰ˆ^˜Kš\Ñ[\JHÂˆ[šY\ËœÙ]
žž‹˜JNÂˆ™]\›ˆ[šY\ÎÂˆBˆYˆ
P\œ˜^Kš\Ð\œ˜^J˜JH˜K›[™ÝOOH
HÂˆ™]\›ˆ[ÂˆBˆ›Üˆ
]HHZHH˜K›[™ÝÈHZNÈH
ÏHŠHÂˆ]˜[YNÂˆYˆ
HOOH
HÂˆ˜[YHHžžŽÂˆH[ÙHYˆ
HOOHZHHŠHÂˆ˜[YHH‹ÞžŽÂˆH[ÙHÂˆ˜[YHH˜VÚWNÂˆBˆYˆ
Y[šY\Ëš\Ê˜[YJJHÂˆÛÛ[YNÂˆBˆÛÛœÝ]HH\Ëž™Y‹™™]ÚY”™YŠ˜VÚH
ÈWJNÂˆYˆ
J]H[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JH]Kš\Ñ[\JHÂˆÛÛ[YNÂˆBˆ[šY\ËœÙ]
˜[YK]JNÂˆBˆ™]\›ˆ[šY\ÎÂˆBˆÙ]˜Q]\Ù]Ê
HÂˆÛÛœÝÝ™X[\ÈH\Ë—Þ˜TÝ™X[\ÎÂˆYˆ
\Ý™X[\ÊHÂˆ™]\›ˆÚYÝÊ\Ëž˜Q]\Ù]È‹[
NÂˆBˆ›Üˆ
ÛÛœÝÙ^HÙˆÈ™]\Ù]È‹žž—JHÂˆÛÛœÝÝ™X[HHÝ™X[\Ë™Ù]
Ù^JNÂˆYˆ
\Ý™X[JHÂˆÛÛ[YNÂˆBˆžHÂˆÛÛœÝÝˆHÝš[™ÕÕUŽÝš[™ÊÝ™X[K™Ù]Ýš[™Ê
JNÂˆÛÛœÝ]HHÂˆÚÙ^WNˆÝ‚ˆNÂˆ™]\›ˆÚYÝÊ\Ëž˜Q]\Ù]È‹™]È]\Ù]™XY\Š]JJNÂˆHØ]ÚÂˆØ\›Š–HH[˜[Y]‹NÝš[™ËˆŠNÂˆœ™XZÎÂˆBˆBˆ™]\›ˆÚYÝÊ\Ëž˜Q]\Ù]È‹[
NÂˆBˆÙ]˜Q]J
HÂˆÛÛœÝÝ™X[\ÈH\Ë—Þ˜TÝ™X[\ÎÂˆYˆ
\Ý™X[\ÊHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ]HHØš™XÝ˜Ü™X]J[
NÂˆ›Üˆ
ÛÛœÝÚÙ^KÝ™X[WHÙˆÝ™X[\ÊHÂˆYˆ
\Ý™X[JHÂˆÛÛ[YNÂˆBˆžHÂˆ]VÚÙ^WHHÝš[™ÕÕUŽÝš[™ÊÝ™X[K™Ù]Ýš[™Ê
JNÂˆHØ]ÚÂˆØ\›Š–HH[˜[Y]‹NÝš[™ËˆŠNÂˆ™]\›ˆ[ÂˆBˆBˆ™]\›ˆ]NÂˆBˆÙ]˜Q˜XÝÜžJ
HÂˆ]]NÂˆYˆ
\Ëœ“X[˜YÙ\‹™[˜X›V˜H	‰ˆ\Ë˜Ø][ÙË›™YYÔ™[™\š[™È	‰ˆ\Ë™›Ü›R[™›Ëš\Ö˜H	‰ˆ]\Ë™›Ü›R[™›Ëš\ÐXÜ›Ñ›Ü›JHÂˆ]HH\Ëž˜Q]NÂˆBˆ™]\›ˆÚYÝÊ\Ëž˜Q˜XÝÜžH‹]HÈ™]ÈQ˜XÝÜžJ]JHˆ[
NÂˆBˆÙ]\Ô\™V˜J
HÂˆ™]\›ˆ\Ëž˜Q˜XÝÜžHÈ\Ëž˜Q˜XÝÜžKš\Õ˜[Y

Hˆ˜[ÙNÂˆBˆÙ][›Ü–˜J
HÂˆ™]\›ˆ\Ëž˜Q˜XÝÜžHÈ\Ëž˜Q˜XÝÜžK™Ù]YÙ\Ê
Hˆ[ÂˆBˆ\Þ[˜ÈÛØY˜R[XYÙ\Ê
HÂˆÛÛœÝ˜R[XYÙ\ÈH]ØZ]\Ëœ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊž˜R[XYÙ\ÈŠNÂˆYˆ
^˜R[XYÙ\ÊHÂˆ™]\›ŽÂˆBˆ\Ëž˜Q˜XÝÜžKœÙ][XYÙ\Ê˜R[XYÙ\ÊNÂˆBˆ\Þ[˜ÈÛØY˜Q›ÛÊ[™\‹\ÚÊHÂˆÛÛœÝXÜ›Ñ›Ü›HH]ØZ]\Ëœ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ˜XÜ›Ñ›Ü›HŠNÂˆYˆ
XXÜ›Ñ›Ü›JHÂˆ™]\›ŽÂˆBˆÛÛœÝ™\ÛÝ\˜Ù\ÈH]ØZ]XÜ›Ñ›Ü›K™Ù]\Þ[˜Ê‘ˆŠNÂˆYˆ
J™\ÛÝ\˜Ù\È[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆ]ØZ]Øš™XÝØY\‹›ØY
™\ÛÝ\˜Ù\ËÈ‘›Û—K\Ëž™YŠNÂˆÛÛœÝ›Û™\ÈH™\ÛÝ\˜Ù\Ë™Ù]
‘›ÛŠNÂˆYˆ
J›Û™\È[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆÛÛœÝÜ[ÛœÈHØš™XÝ˜\ÜÚYÛŠØš™XÝ˜Ü™X]J[
K\Ëœ“X[˜YÙ\‹™]˜[X]Ü“Ü[ÛœËÂˆ\ÙTÞ\Ý[Q›ÛÎˆ˜[ÙBˆJNÂˆÛÛœÝÂˆZ[[ÓX\ØXÚKˆ›ÛØXÚKˆÝ[™\™›Û]PØXÚBˆHH\Ë˜Ø][ÙÎÂˆÛÛœÝ\X[]˜[X]ÜˆH™]È\X[]˜[X]ÜŠÂˆ™YŽˆ\Ëž™Y‹ˆ[™\‹ˆYÙR[™^ˆLKˆY˜XÝÜžNˆ\Ë—ÙÛØ˜[Y˜XÝÜžKˆ›ÛØXÚKˆZ[[ÓX\ØXÚKˆÝ[™\™›Û]PØXÚKˆÜ[ÛœÂˆJNÂˆÛÛœÝÜ\˜]Ü“\ÝH™]ÈÜ\˜]Ü“\Ý

NÂˆÛÛœÝ‘›ÛÈH×NÂˆÛÛœÝ[š]X[Ý]HHÂˆÙ]›Û

HÂˆ™]\›ˆ‘›ÛË˜]
LJNÂˆKˆÙ]›Û
›Û
HÂˆ‘›ÛËœ\Ú
›Û
NÂˆKˆÛÛ™J
HÂˆ™]\›ˆ\ÎÂˆBˆNÂˆÛÛœÝ\œÙQ›ÛH
›Û˜[YK˜[˜XÚÑ›ÛXÝÜÜÑ›Û[™›ÊHOˆ\X[]˜[X]Ü‹š[™TÙ]›Û
™\ÛÝ\˜Ù\ËÓ˜[YK™Ù]
›Û˜[YJKWK[Ü\˜]Ü“\Ý\ÚË[š]X[Ý]K˜[˜XÚÑ›ÛXÝÜÜÑ›Û[™›ÊK˜Ø]Ú
™X\ÛÛˆOˆÂˆØ\›ŠØY˜Q›ÛÎˆ‰Ü™X\ÛÛŸH‹˜
NÂˆ™]\›ˆ[ÂˆJNÂˆÛÛœÝ›ÛZ\Ù\ÈH×NÂˆ›Üˆ
ÛÛœÝÙ›Û˜[YK›ÛHÙˆ›Û™\ÊHÂˆÛÛœÝ\ØÜš\ÜˆH›Û™Ù]
‘›Û\ØÜš\ÜˆŠNÂˆYˆ
J\ØÜš\Üˆ[œÝ[˜Ù[ÙˆXÝ
JHÂˆÛÛ[YNÂˆBˆ]›Û˜[Z[HH\ØÜš\Ü‹™Ù]
‘›Û˜[Z[HŠNÂˆ›Û˜[Z[HH›Û˜[Z[Kœ™\XÙP[
ÖÈJÊ
KÙË‰HŠNÂˆÛÛœÝ›ÛÙZYÚH\ØÜš\Ü‹™Ù]
‘›ÛÙZYÚŠNÂˆÛÛœÝ][XÐ[™ÛHHY\ØÜš\Ü‹™Ù]
’][XÐ[™ÛHŠNÂˆÛÛœÝÜÜÑ›Û[™›ÈHÂˆ›Û˜[Z[Kˆ›ÛÙZYÚˆ][XÐ[™ÛBˆNÂˆYˆ
]˜[Y]PÔÔÑ›Û
ÜÜÑ›Û[™›ÊJHÂˆÛÛ[YNÂˆBˆ›ÛZ\Ù\Ëœ\Ú
\œÙQ›Û
›Û˜[YK[ÜÜÑ›Û[™›ÊJNÂˆBˆ]ØZ]›ÛZ\ÙK˜[
›ÛZ\Ù\ÊNÂˆÛÛœÝZ\ÜÚ[™Ñ›ÛÈH\Ëž˜Q˜XÝÜžKœÙ]›ÛÊ‘›ÛÊNÂˆYˆ
[Z\ÜÚ[™Ñ›ÛÊHÂˆ™]\›ŽÂˆBˆÜ[ÛœËšYÛ›Ü™Q\œ›ÜœÈHYNÂˆ›ÛZ\Ù\Ë›[™ÝHÂˆ‘›ÛË›[™ÝHÂˆÛÛœÝ™X[SZ\ÜÚ[™Ñ›ÛÈH™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝZ\ÜÚ[™ÈÙˆZ\ÜÚ[™Ñ›ÛÊHÂˆYˆ
YÙ]˜Q›Û˜[YJ	ÛZ\ÜÚ[™ßKT™YÝ[\˜
JHÂˆ™X[SZ\ÜÚ[™Ñ›ÛË˜Y
Z\ÜÚ[™ÊNÂˆBˆBˆYˆ
™X[SZ\ÜÚ[™Ñ›ÛËœÚ^™JHÂˆZ\ÜÚ[™Ñ›ÛËœ\Ú
”’”ËQ˜[˜XÚÈŠNÂˆBˆ›Üˆ
ÛÛœÝZ\ÜÚ[™ÈÙˆZ\ÜÚ[™Ñ›ÛÊHÂˆYˆ
™X[SZ\ÜÚ[™Ñ›ÛËš\ÊZ\ÜÚ[™ÊJHÂˆÛÛ[YNÂˆBˆ›Üˆ
ÛÛœÝ›Û[™›ÈÙˆÞÂˆ˜[YNˆ”™YÝ[\ˆ‹ˆ›ÛÙZYÚˆˆ][XÐ[™ÛNˆˆKÂˆ˜[YNˆ›Û‹ˆ›ÛÙZYÚˆÌˆ][XÐ[™ÛNˆˆKÂˆ˜[YNˆ’][XÈ‹ˆ›ÛÙZYÚˆˆ][XÐ[™ÛNˆL‚ˆKÂˆ˜[YNˆ›Û][XÈ‹ˆ›ÛÙZYÚˆÌˆ][XÐ[™ÛNˆL‚ˆWJHÂˆÛÛœÝ˜[YHH	ÛZ\ÜÚ[™ßKIÙ›Û[™›Ë›˜[Y_XÂˆ›ÛZ\Ù\Ëœ\Ú
\œÙQ›Û
˜[YKÙ]˜Q›ÛXÝ
˜[YJKÂˆ›Û˜[Z[NˆZ\ÜÚ[™Ëˆ›ÛÙZYÚˆ›Û[™›Ë™›ÛÙZYÚˆ][XÐ[™ÛNˆ›Û[™›Ëš][XÐ[™ÛBˆJJNÂˆBˆBˆ]ØZ]›ÛZ\ÙK˜[
›ÛZ\Ù\ÊNÂˆ\Ëž˜Q˜XÝÜžK˜\[™›ÛÊ‘›ÛË™X[SZ\ÜÚ[™Ñ›ÛÊNÂˆBˆØY˜T™\ÛÝ\˜Ù\Ê[™\‹\ÚÊHÂˆ™]\›ˆ›ÛZ\ÙK˜[
Ý\ËˆÛØY˜Q›ÛÊ[™\‹\ÚÊK˜Ø]Ú


HOˆßJK\ËˆÛØY˜R[XYÙ\Ê
WJNÂˆBˆÙ\šX[^™V˜Q]J[››Ý][Û”ÝÜ˜YÙJHÂˆ™]\›ˆ\Ëž˜Q˜XÝÜžHÈ\Ëž˜Q˜XÝÜžKœÙ\šX[^™Q]J[››Ý][Û”ÝÜ˜YÙJHˆ[ÂˆBˆÙ]™\œÚ[ÛŠ
HÂˆ™]\›ˆ\Ë˜Ø][ÙË™\œÚ[Ûˆ\ËˆÝ™\œÚ[ÛŽÂˆBˆÙ]›Ü›R[™›Ê
HÂˆÛÛœÝ›Ü›R[™›ÈHÂˆ\ÑšY[Îˆ˜[ÙKˆ\ÐXÜ›Ñ›Ü›Nˆ˜[ÙKˆ\Ö˜Nˆ˜[ÙKˆ\ÔÚYÛ˜]\™\Îˆ˜[ÙBˆNÂˆÛÛœÝÂˆXÜ›Ñ›Ü›BˆHH\Ë˜Ø][ÙÎÂˆYˆ
XXÜ›Ñ›Ü›JHÂˆ™]\›ˆÚYÝÊ\Ë™›Ü›R[™›È‹›Ü›R[™›ÊNÂˆBˆžHÂˆÛÛœÝšY[ÈHXÜ›Ñ›Ü›K™Ù]
‘šY[ÈŠNÂˆÛÛœÝ\ÑšY[ÈH\œ˜^Kš\Ð\œ˜^JšY[ÊH	‰ˆšY[Ë›[™ÝˆÂˆ›Ü›R[™›Ëš\ÑšY[ÈH\ÑšY[ÎÂˆÛÛœÝ˜HHXÜ›Ñ›Ü›K™Ù]
–HŠNÂˆ›Ü›R[™›Ëš\Ö˜HH\œ˜^Kš\Ð\œ˜^J˜JH	‰ˆ˜K›[™Ýˆ˜H[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[H	‰ˆ^˜Kš\Ñ[\NÂˆÛÛœÝÚYÑ›YÜÈHXÜ›Ñ›Ü›K™Ù]
”ÚYÑ›YÜÈŠNÂˆÛÛœÝ\ÔÚYÛ˜]\™\ÈHHJÚYÑ›YÜÈ	ˆJNÂˆÛÛœÝ\ÓÛ›QØÝ[Y[ÚYÛ˜]\™\ÈH\ÔÚYÛ˜]\™\È	‰ˆ\ËˆÚ\ÓÛ›QØÝ[Y[ÚYÛ˜]\™\ÊšY[ÊNÂˆ›Ü›R[™›Ëš\ÐXÜ›Ñ›Ü›HH\ÑšY[È	‰ˆZ\ÓÛ›QØÝ[Y[ÚYÛ˜]\™\ÎÂˆ›Ü›R[™›Ëš\ÔÚYÛ˜]\™\ÈH\ÔÚYÛ˜]\™\ÎÂˆHØ]Ú
^
HÂˆYˆ
^[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠHÂˆ›ÝÈ^ÂˆBˆØ\›ŠØ[››Ý™]Ú›Ü›H[™›Ü›X][ÛŽˆ‰Ù^H‹˜
NÂˆBˆ™]\›ˆÚYÝÊ\Ë™›Ü›R[™›È‹›Ü›R[™›ÊNÂˆBˆÙ]ØÝ[Y[[™›Ê
HÂˆÛÛœÝÂˆØ][ÙËˆ›Ü›R[™›Ëˆ™Y‚ˆHH\ÎÂˆÛÛœÝØÒ[™›ÈHÂˆ‘›Ü›X]™\œÚ[ÛŽˆ\Ë™\œÚ[Û‹ˆ[™ÝXYÙNˆØ][ÙË›[™Ëˆ[˜Üž\š[\“˜[YNˆ™Y‹™[˜Üž\Ë™š[\“˜[YHÏÈ[ˆ\Ó[™X\š^™YˆH]\Ë›[™X\š^˜][Û‹ˆ\ÐXÜ›Ñ›Ü›T™\Ù[ˆ›Ü›R[™›Ëš\ÐXÜ›Ñ›Ü›Kˆ\ÖT™\Ù[ˆ›Ü›R[™›Ëš\Ö˜Kˆ\ÐÛÛXÝ[Û”™\Ù[ˆHXØ][ÙË˜ÛÛXÝ[Û‹ˆ\ÔÚYÛ˜]\™\Ô™\Ù[ˆ›Ü›R[™›Ëš\ÔÚYÛ˜]\™\ÂˆNÂˆ][™›ÑXÝÂˆžHÂˆ[™›ÑXÝH™Y‹˜Z[\‹™Ù]
’[™›ÈŠNÂˆHØ]Ú
\œŠHÂˆYˆ
\œˆ[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠHÂˆ›ÝÈ\œŽÂˆBˆ[™›Ê•HØÝ[Y[[™›Ü›X][ÛˆXÝ[Û˜\žH\È[˜[YˆŠNÂˆBˆYˆ
J[™›ÑXÝ[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ˆÚYÝÊ\Ë™ØÝ[Y[[™›È‹ØÒ[™›ÊNÂˆBˆ›Üˆ
ÛÛœÝÚÙ^K˜[YWHÙˆ[™›ÑXÝ
HÂˆÝÚ]Ú
Ù^JHÂˆØ\ÙH•]HŽ‚ˆØ\ÙH]]ÜˆŽ‚ˆØ\ÙH”ÝXš™XÝŽ‚ˆØ\ÙH’Ù^]ÛÜ™ÈŽ‚ˆØ\ÙHÜ™X]ÜˆŽ‚ˆØ\ÙH”›ÙXÙ\ˆŽ‚ˆØ\ÙHÜ™X][Û‘]HŽ‚ˆØ\ÙH“[Ù]HŽ‚ˆYˆ
\[Ùˆ˜[YHOOHœÝš[™ÈŠHÂˆØÒ[™›ÖÚÙ^WHHÝš[™ÕÔ”Ýš[™Ê˜[YJNÂˆÛÛ[YNÂˆBˆœ™XZÎÂˆØ\ÙH•˜\YŽ‚ˆYˆ
˜[YH[œÝ[˜Ù[Ùˆ˜[YJHÂˆØÒ[™›ÖÚÙ^WHH˜[YNÂˆÛÛ[YNÂˆBˆœ™XZÎÂˆY˜][‚ˆ]Ý\ÝÛU˜[YNÂˆÝÚ]Ú
\[Ùˆ˜[YJHÂˆØ\ÙHœÝš[™ÈŽ‚ˆÝ\ÝÛU˜[YHHÝš[™ÕÔ”Ýš[™Ê˜[YJNÂˆœ™XZÎÂˆØ\ÙH›[X™\ˆŽ‚ˆØ\ÙH˜›ÛÛX[ˆŽ‚ˆÝ\ÝÛU˜[YHH˜[YNÂˆœ™XZÎÂˆY˜][‚ˆYˆ
˜[YH[œÝ[˜Ù[Ùˆ˜[YJHÂˆÝ\ÝÛU˜[YHH˜[YNÂˆBˆœ™XZÎÂˆBˆYˆ
Ý\ÝÛU˜[YHOOH[™Yš[™Y
HÂˆØ\›Š˜Y˜[YK›ÜˆÝ\ÝÛHÙ^H‰ÚÙ^_H‹[ˆ[™›Îˆ	Ý˜[Y_K˜
NÂˆÛÛ[YNÂˆBˆØÒ[™›ËÝ\ÝÛHÏÏHØš™XÝ˜Ü™X]J[
NÂˆØÒ[™›ËÝ\ÝÛVÚÙ^WHHÝ\ÝÛU˜[YNÂˆÛÛ[YNÂˆBˆØ\›Š˜Y˜[YK›ÜˆÙ^H‰ÚÙ^_H‹[ˆ[™›Îˆ	Ý˜[Y_K˜
NÂˆBˆ™]\›ˆÚYÝÊ\Ë™ØÝ[Y[[™›È‹ØÒ[™›ÊNÂˆBˆÙ]š[™Ù\œš[Ê
HÂˆÛÛœÝ’S‘ÑT”’S•Ñ’T”ÕÐ–UTÈHLÂˆÛÛœÝSTWÑ’S‘ÑT”’S•H—‹œ™\X]
MŠNÂˆ[˜Ý[Ûˆ˜[Y]J]JHÂˆ™]\›ˆ\[Ùˆ]HOOHœÝš[™Èˆ	‰ˆ]K›[™ÝOOHMˆ	‰ˆ]HOOHSTWÑ’S‘ÑT”’S•ÂˆBˆÛÛœÝYH\Ëž™Y‹˜Z[\‹™Ù]
’QŠNÂˆ]\ÚÜšYÚ[˜[\Ú[ÙYšYYÂˆYˆ
\œ˜^Kš\Ð\œ˜^JY
H	‰ˆ˜[Y]JYÌJJHÂˆ\ÚÜšYÚ[˜[HÝš[™ÕÐž]\ÊYÌJNÂˆYˆ
YÌWHOOHYÌH	‰ˆ˜[Y]JYÌWJJHÂˆ\Ú[ÙYšYYHÝš[™ÕÐž]\ÊYÌWJNÂˆBˆH[ÙHÂˆ\ÚÜšYÚ[˜[HØ[Ý[]SQJ\ËœÝ™X[K™Ù]ž]T˜[™ÙJ’S‘ÑT”’S•Ñ’T”ÕÐ–UTÊK’S‘ÑT”’S•Ñ’T”ÕÐ–UTÊNÂˆBˆ™]\›ˆÚYÝÊ\Ë™š[™Ù\œš[È‹ÝÒ^][
\ÚÜšYÚ[˜[
K\Ú[ÙYšYYÈÒ^][
\Ú[ÙYšYY
Hˆ[JNÂˆBˆ\Þ[˜ÈÙÙ][™X\š^˜][Û”YÙJYÙR[™^
HÂˆÛÛœÝÂˆØ][ÙËˆ[™X\š^˜][Û‹ˆ™Y‚ˆHH\ÎÂˆÛÛœÝ™YˆH™Y‹™Ù]
[™X\š^˜][Û‹›Øš™XÝ[X™\‘š\œÝ
NÂˆžHÂˆÛÛœÝØšˆH]ØZ]™Y‹™™]Ú\Þ[˜Ê™YŠNÂˆYˆ
Øšˆ[œÝ[˜Ù[ÙˆXÝ
HÂˆ]\HHØš‹™Ù]˜]Ê•\HŠNÂˆYˆ
\H[œÝ[˜Ù[Ùˆ™YŠHÂˆ\HH]ØZ]™Y‹™™]Ú\Þ[˜Ê\JNÂˆBˆYˆ
\Ó˜[YJ\K”YÙHŠH[Øš‹š\Ê•\HŠH	‰ˆ[Øš‹š\Ê’ÚYÈŠH	‰ˆØš‹š\ÊÛÛ[ÈŠJHÂˆYˆ
XØ][ÙËœYÙRÚYÐÛÝ[ØXÚKš\Ê™YŠJHÂˆØ][ÙËœYÙRÚYÐÛÝ[ØXÚKœ]
™Y‹JNÂˆBˆYˆ
XØ][ÙËœYÙR[™^ØXÚKš\Ê™YŠJHÂˆØ][ÙËœYÙR[™^ØXÚKœ]
™Y‹
NÂˆBˆ™]\›ˆÛØš‹™Y—NÂˆBˆBˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ•H[™X\š^˜][ÛˆXÝ[Û˜\žHÙ\Û‰ÝÚ[ÈH˜[YYÙHXÝ[Û˜\žKˆŠNÂˆHØ]Ú
™X\ÛÛŠHÂˆØ\›ŠÙÙ][™X\š^˜][Û”YÙNˆ‰Ü™X\ÛÛ‹›Y\ÜØYÙ_H‹˜
NÂˆ™]\›ˆØ][ÙË™Ù]YÙQXÝ
YÙR[™^
NÂˆBˆBˆÙ]YÙJYÙR[™^
HÂˆÛÛœÝØXÚY›ÛZ\ÙHH\ËˆÜYÙT›ÛZ\Ù\Ë™Ù]
YÙR[™^
NÂˆYˆ
ØXÚY›ÛZ\ÙJHÂˆ™]\›ˆØXÚY›ÛZ\ÙNÂˆBˆÛÛœÝÂˆØ][ÙËˆ[™X\š^˜][Û‹ˆ˜Q˜XÝÜžBˆHH\ÎÂˆ]›ÛZ\ÙNÂˆYˆ
˜Q˜XÝÜžJHÂˆ›ÛZ\ÙHH›ÛZ\ÙKœ™\ÛÛ™JÑXÝ™[\K[JNÂˆH[ÙHYˆ
[™X\š^˜][ÛËœYÙQš\œÝOOHYÙR[™^
HÂˆ›ÛZ\ÙHH\ËˆÙÙ][™X\š^˜][Û”YÙJYÙR[™^
NÂˆH[ÙHÂˆ›ÛZ\ÙHHØ][ÙË™Ù]YÙQXÝ
YÙR[™^
NÂˆBˆ›ÛZ\ÙHH›ÛZ\ÙK[Š
ÜYÙQXÝ™Y—JHOˆ™]ÈYÙJÂˆ“X[˜YÙ\Žˆ\Ëœ“X[˜YÙ\‹ˆ™YŽˆ\Ëž™Y‹ˆYÙR[™^ˆYÙQXÝˆ™Y‹ˆÛØ˜[Y˜XÝÜžNˆ\Ë—ÙÛØ˜[Y˜XÝÜžKˆ›ÛØXÚNˆØ][ÙË™›ÛØXÚKˆZ[[ÓX\ØXÚNˆØ][ÙË˜Z[[ÓX\ØXÚKˆÝ[™\™›Û]PØXÚNˆØ][ÙËœÝ[™\™›Û]PØXÚKˆÛØ˜[ÛÛÜ”ÜXÙPØXÚNˆØ][ÙË™ÛØ˜[ÛÛÜ”ÜXÙPØXÚKˆÛØ˜[[XYÙPØXÚNˆØ][ÙË™ÛØ˜[[XYÙPØXÚKˆÞ\Ý[Q›ÛØXÚNˆØ][ÙËœÞ\Ý[Q›ÛØXÚKˆ›Û›[™[Ù\ÔÙ]ˆØ][ÙË››Û›[™[Ù\ÔÙ]ˆ˜Q˜XÝÜžBˆJJNÂˆ\ËˆÜYÙT›ÛZ\Ù\ËœÙ]
YÙR[™^›ÛZ\ÙJNÂˆ™]\›ˆ›ÛZ\ÙNÂˆBˆ\Þ[˜ÈÚXÚÑš\œÝYÙJ™XÛÝ™\žS[ÙHH˜[ÙJHÂˆYˆ
™XÛÝ™\žS[ÙJHÂˆ™]\›ŽÂˆBˆžHÂˆ]ØZ]\Ë™Ù]YÙJ
NÂˆHØ]Ú
™X\ÛÛŠHÂˆYˆ
™X\ÛÛˆ[œÝ[˜Ù[Ùˆ™Y‘[žQ^Ù\[ÛŠHÂˆ\ËˆÜYÙT›ÛZ\Ù\Ë™[]J
NÂˆ]ØZ]\Ë˜ÛX[\

NÂˆ›ÝÈ™]È™Y”\œÙQ^Ù\[ÛŠ
NÂˆBˆBˆBˆ\Þ[˜ÈÚXÚÓ\ÝYÙJ™XÛÝ™\žS[ÙHH˜[ÙJHÂˆÛÛœÝÂˆØ][ÙËˆ“X[˜YÙ\‚ˆHH\ÎÂˆØ][ÙËœÙ]XÝX[[TYÙ\Ê
NÂˆ][TYÙ\ÎÂˆžHÂˆ]ØZ]›ÛZ\ÙK˜[
Ü“X[˜YÙ\‹™[œÝ\™QØÊž˜Q˜XÝÜžHŠK“X[˜YÙ\‹™[œÝ\™QØÊ›[™X\š^˜][ÛˆŠK“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ›[TYÙ\ÈŠWJNÂˆYˆ
\Ëž˜Q˜XÝÜžJHÂˆ™]\›ŽÂˆH[ÙHYˆ
\Ë›[™X\š^˜][ÛŠHÂˆ[TYÙ\ÈH\Ë›[™X\š^˜][Û‹›[TYÙ\ÎÂˆH[ÙHÂˆ[TYÙ\ÈHØ][ÙË›[TYÙ\ÎÂˆBˆYˆ
S[X™\‹š\Ò[YÙ\Š[TYÙ\ÊJHÂˆ›ÝÈ™]È›Ü›X]\œ›ÜŠ”YÙHÛÝ[\È›Ý[ˆ[YÙ\‹ˆŠNÂˆH[ÙHYˆ
[TYÙ\ÈHJHÂˆ™]\›ŽÂˆBˆ]ØZ]\Ë™Ù]YÙJ[TYÙ\ÈHJNÂˆHØ]Ú
™X\ÛÛŠHÂˆ\ËˆÜYÙT›ÛZ\Ù\Ë™[]J[TYÙ\ÈHJNÂˆ]ØZ]\Ë˜ÛX[\

NÂˆYˆ
™X\ÛÛˆ[œÝ[˜Ù[Ùˆ™Y‘[žQ^Ù\[Ûˆ	‰ˆ\™XÛÝ™\žS[ÙJHÂˆ›ÝÈ™]È™Y”\œÙQ^Ù\[ÛŠ
NÂˆBˆØ\›ŠÚXÚÓ\ÝYÙHH[˜[YÔYÙ\È™YHÐÛÝ[ˆ	Û[TYÙ\ßK˜
NÂˆ]YÙ\Õ™YNÂˆžHÂˆYÙ\Õ™YHH]ØZ]Ø][ÙË™Ù][YÙQXÝÊ™XÛÝ™\žS[ÙJNÂˆHØ]Ú
™X\ÛÛ[
HÂˆYˆ
™X\ÛÛ[[œÝ[˜Ù[Ùˆ™Y‘[žQ^Ù\[Ûˆ	‰ˆ\™XÛÝ™\žS[ÙJHÂˆ›ÝÈ™]È™Y”\œÙQ^Ù\[ÛŠ
NÂˆBˆØ][ÙËœÙ]XÝX[[TYÙ\ÊJNÂˆ™]\›ŽÂˆBˆ›Üˆ
ÛÛœÝÜYÙR[™^ÜYÙQXÝ™Y—WHÙˆYÙ\Õ™YJHÂˆ]›ÛZ\ÙNÂˆYˆ
YÙQXÝ[œÝ[˜Ù[Ùˆ\œ›ÜŠHÂˆ›ÛZ\ÙHH›ÛZ\ÙKœ™Z™XÝ
YÙQXÝ
NÂˆ›ÛZ\ÙK˜Ø]Ú


HOˆßJNÂˆH[ÙHÂˆ›ÛZ\ÙHH›ÛZ\ÙKœ™\ÛÛ™J™]ÈYÙJÂˆ“X[˜YÙ\‹ˆ™YŽˆ\Ëž™Y‹ˆYÙR[™^ˆYÙQXÝˆ™Y‹ˆÛØ˜[Y˜XÝÜžNˆ\Ë—ÙÛØ˜[Y˜XÝÜžKˆ›ÛØXÚNˆØ][ÙË™›ÛØXÚKˆZ[[ÓX\ØXÚNˆØ][ÙË˜Z[[ÓX\ØXÚKˆÝ[™\™›Û]PØXÚNˆØ][ÙËœÝ[™\™›Û]PØXÚKˆÛØ˜[ÛÛÜ”ÜXÙPØXÚNˆ\Ë™ÛØ˜[ÛÛÜ”ÜXÙPØXÚKˆÛØ˜[[XYÙPØXÚNˆØ][ÙË™ÛØ˜[[XYÙPØXÚKˆÞ\Ý[Q›ÛØXÚNˆØ][ÙËœÞ\Ý[Q›ÛØXÚKˆ›Û›[™[Ù\ÔÙ]ˆØ][ÙË››Û›[™[Ù\ÔÙ]ˆ˜Q˜XÝÜžNˆ[ˆJJNÂˆBˆ\ËˆÜYÙT›ÛZ\Ù\ËœÙ]
YÙR[™^›ÛZ\ÙJNÂˆBˆØ][ÙËœÙ]XÝX[[TYÙ\ÊYÙ\Õ™YKœÚ^™JNÂˆBˆBˆ\Þ[˜È›Û˜[˜XÚÊY[™\ŠHÂˆÛÛœÝÂˆØ][ÙËˆ“X[˜YÙ\‚ˆHH\ÎÂˆ›Üˆ
ÛÛœÝ˜[œÛ]Y›ÛÙˆ]ØZ]›ÛZ\ÙK˜[
Ø][ÙË™›ÛØXÚJJHÂˆYˆ
˜[œÛ]Y›Û›ØYY˜[YHOOHY
HÂˆ˜[œÛ]Y›Û™˜[˜XÚÊ[™\‹“X[˜YÙ\‹™]˜[X]Ü“Ü[ÛœÊNÂˆ™]\›ŽÂˆBˆBˆBˆ\Þ[˜ÈÛX[\
X[X[UšYÙÙ\™YH˜[ÙJHÂˆ™]\›ˆ\Ë˜Ø][ÙÈÈ\Ë˜Ø][ÙË˜ÛX[\
X[X[UšYÙÙ\™Y
HˆÛX\‘ÛØ˜[ØXÚ\Ê
NÂˆBˆ\Þ[˜ÈØÛÛXÝšY[Øš™XÝÊ˜[YK\™[™Y‹šY[™Y‹›ÛZ\Ù\Ë[››Ý][Û‘ÛØ˜[Ëš\Ú]Y™YœËÜœ[‘šY[ÊHÂˆÛÛœÝÂˆ™Y‚ˆHH\ÎÂˆYˆ
JšY[™Yˆ[œÝ[˜Ù[Ùˆ™YŠHš\Ú]Y™YœËš\ÊšY[™YŠJHÂˆ™]\›ŽÂˆBˆš\Ú]Y™YœËœ]
šY[™YŠNÂˆÛÛœÝšY[H]ØZ]™Y‹™™]Ú\Þ[˜ÊšY[™YŠNÂˆYˆ
JšY[[œÝ[˜Ù[ÙˆXÝ
JHÂˆ™]\›ŽÂˆBˆ]ÝX\HH]ØZ]šY[™Ù]\Þ[˜Ê”ÝX\HŠNÂˆÝX\HHÝX\H[œÝ[˜Ù[Ùˆ˜[YHÈÝX\K›˜[YHˆ[ÂˆÝÚ]Ú
ÝX\JHÂˆØ\ÙH“[šÈŽ‚ˆ™]\›ŽÂˆBˆYˆ
šY[š\Ê•ŠJHÂˆÛÛœÝ\˜[YHHÝš[™ÕÔ”Ýš[™Ê]ØZ]šY[™Ù]\Þ[˜Ê•ŠJNÂˆ˜[YHH˜[YHOOHˆˆÈ\˜[YHˆ	Û˜[Y_K‰Ü\˜[Y_XÂˆH[ÙHÂˆ]ØšˆHšY[ÂˆÚ[H
YJHÂˆØšˆHØš‹™Ù]˜]Ê”\™[ŠH\™[™YŽÂˆYˆ
Øšˆ[œÝ[˜Ù[Ùˆ™YŠHÂˆYˆ
š\Ú]Y™YœËš\ÊØšŠJHÂˆœ™XZÎÂˆBˆØšˆH]ØZ]™Y‹™™]Ú\Þ[˜ÊØšŠNÂˆBˆYˆ
JØšˆ[œÝ[˜Ù[ÙˆXÝ
JHÂˆœ™XZÎÂˆBˆYˆ
Øš‹š\Ê•ŠJHÂˆÛÛœÝ\˜[YHHÝš[™ÕÔ”Ýš[™Ê]ØZ]Øš‹™Ù]\Þ[˜Ê•ŠJNÂˆ˜[YHH˜[YHOOHˆˆÈ\˜[YHˆ	Û˜[Y_K‰Ü\˜[Y_XÂˆœ™XZÎÂˆBˆBˆBˆYˆ
\™[™Yˆ	‰ˆYšY[š\Ê”\™[ŠH	‰ˆ\Ó˜[YJšY[™Ù]
”ÝX\HŠK•ÚYÙ]ŠJHÂˆÜœ[‘šY[Ëœ]
šY[™Y‹\™[™YŠNÂˆBˆYˆ
\›ÛZ\Ù\Ëš\Ê˜[YJJHÂˆ›ÛZ\Ù\ËœÙ]
˜[YK×JNÂˆBˆ›ÛZ\Ù\Ë™Ù]
˜[YJKœ\Ú
[››Ý][Û‘˜XÝÜžK˜Ü™X]J™Y‹šY[™Y‹[››Ý][Û‘ÛØ˜[Ë[YKÜœ[‘šY[Ë[[
K[Š[››Ý][ÛˆOˆ[››Ý][ÛË™Ù]šY[Øš™XÝ

JK˜Ø]Ú
[˜Ý[Ûˆ
™X\ÛÛŠHÂˆØ\›ŠØÛÛXÝšY[Øš™XÝÎˆ‰Ü™X\ÛÛŸH‹˜
NÂˆ™]\›ˆ[ÂˆJJNÂˆYˆ
YšY[š\Ê’ÚYÈŠJHÂˆ™]\›ŽÂˆBˆÛÛœÝÚYÈH]ØZ]šY[™Ù]\Þ[˜Ê’ÚYÈŠNÂˆYˆ
\œ˜^Kš\Ð\œ˜^JÚYÊJHÂˆ›Üˆ
ÛÛœÝÚYÙˆÚYÊHÂˆ]ØZ]\ËˆØÛÛXÝšY[Øš™XÝÊ˜[YKšY[™Y‹ÚY›ÛZ\Ù\Ë[››Ý][Û‘ÛØ˜[Ëš\Ú]Y™YœËÜœ[‘šY[ÊNÂˆBˆBˆBˆÙ]šY[Øš™XÝÊ
HÂˆÛÛœÝ›ÛZ\ÙHH\Ëœ“X[˜YÙ\‹™[œÝ\™QØÊ™›Ü›R[™›ÈŠK[Š\Þ[˜È›Ü›R[™›ÈOˆÂˆYˆ
Y›Ü›R[™›Ëš\ÑšY[ÊHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ[››Ý][Û‘ÛØ˜[ÈH]ØZ]\Ë˜[››Ý][Û‘ÛØ˜[ÎÂˆYˆ
X[››Ý][Û‘ÛØ˜[ÊHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝÂˆXÜ›Ñ›Ü›BˆHH[››Ý][Û‘ÛØ˜[ÎÂˆÛÛœÝš\Ú]Y™YœÈH™]È™Y”Ù]

NÂˆÛÛœÝ[šY[ÈHØš™XÝ˜Ü™X]J[
NÂˆÛÛœÝšY[›ÛZ\Ù\ÈH™]ÈX\

NÂˆÛÛœÝÜœ[‘šY[ÈH™]È™Y”Ù]ØXÚJ
NÂˆ›Üˆ
ÛÛœÝšY[™YˆÙˆXÜ›Ñ›Ü›K™Ù]
‘šY[ÈŠJHÂˆ]ØZ]\ËˆØÛÛXÝšY[Øš™XÝÊˆ‹[šY[™Y‹šY[›ÛZ\Ù\Ë[››Ý][Û‘ÛØ˜[Ëš\Ú]Y™YœËÜœ[‘šY[ÊNÂˆBˆÛÛœÝ[›ÛZ\Ù\ÈH×NÂˆ›Üˆ
ÛÛœÝÛ˜[YK›ÛZ\Ù\×HÙˆšY[›ÛZ\Ù\ÊHÂˆ[›ÛZ\Ù\Ëœ\Ú
›ÛZ\ÙK˜[
›ÛZ\Ù\ÊK[ŠšY[ÈOˆÂˆšY[ÈHšY[Ë™š[\ŠšY[OˆHYšY[
NÂˆYˆ
šY[Ë›[™Ýˆ
HÂˆ[šY[ÖÛ˜[YWHHšY[ÎÂˆBˆJJNÂˆBˆ]ØZ]›ÛZ\ÙK˜[
[›ÛZ\Ù\ÊNÂˆ™]\›ˆÂˆ[šY[ÎˆØš™XÝÚ^™J[šY[ÊHˆÈ[šY[Èˆ[ˆÜœ[‘šY[ÂˆNÂˆJNÂˆ™]\›ˆÚYÝÊ\Ë™šY[Øš™XÝÈ‹›ÛZ\ÙJNÂˆBˆÙ]\Ò”ÐXÝ[ÛœÊ
HÂˆÛÛœÝ›ÛZ\ÙHH\Ëœ“X[˜YÙ\‹™[œÝ\™QØÊ—Ü\œÙR\Ò”ÐXÝ[ÛœÈŠNÂˆ™]\›ˆÚYÝÊ\Ëš\Ò”ÐXÝ[ÛœÈ‹›ÛZ\ÙJNÂˆBˆ\Þ[˜ÈÜ\œÙR\Ò”ÐXÝ[ÛœÊ
HÂˆÛÛœÝØØ][ÙÒœÐXÝ[ÛœËšY[Øš™XÝ×HH]ØZ]›ÛZ\ÙK˜[
Ý\Ëœ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊšœÐXÝ[ÛœÈŠK\Ëœ“X[˜YÙ\‹™[œÝ\™QØÊ™šY[Øš™XÝÈŠWJNÂˆYˆ
Ø][ÙÒœÐXÝ[ÛœÊHÂˆ™]\›ˆYNÂˆBˆYˆ
šY[Øš™XÝÏË˜[šY[ÊHÂˆ™]\›ˆØš™XÝ˜[Y\ÊšY[Øš™XÝË˜[šY[ÊKœÛÛYJšY[Øš™XÝOˆšY[Øš™XÝœÛÛYJØš™XÝOˆØš™XÝ˜XÝ[ÛœÈOOH[
JNÂˆBˆ™]\›ˆ˜[ÙNÂˆBˆÙ]Ø[Ý[][Û“Ü™\’YÊ
HÂˆÛÛœÝØ[Ý[][Û“Ü™\ˆH\Ë˜Ø][ÙË˜XÜ›Ñ›Ü›OË™Ù]
ÓÈŠNÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JØ[Ý[][Û“Ü™\ŠHØ[Ý[][Û“Ü™\‹›[™ÝOOH
HÂˆ™]\›ˆÚYÝÊ\Ë˜Ø[Ý[][Û“Ü™\’YÈ‹[
NÂˆBˆÛÛœÝYÈH×NÂˆ›Üˆ
ÛÛœÝYÙˆØ[Ý[][Û“Ü™\ŠHÂˆYˆ
Y[œÝ[˜Ù[Ùˆ™YŠHÂˆYËœ\Ú
YÔÝš[™Ê
JNÂˆBˆBˆ™]\›ˆÚYÝÊ\Ë˜Ø[Ý[][Û“Ü™\’YÈ‹YË›[™ÝÈYÈˆ[
NÂˆBˆÙ][››Ý][Û‘ÛØ˜[Ê
HÂˆ™]\›ˆÚYÝÊ\Ë˜[››Ý][Û‘ÛØ˜[È‹[››Ý][Û‘˜XÝÜžK˜Ü™X]QÛØ˜[Ê\Ëœ“X[˜YÙ\ŠJNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÜ—ÛX[˜YÙ\‹šœÂ‚‚‚‚‚‚‚‚‚‚™[˜Ý[Ûˆ\œÙQØÐ˜\ÙU\›
\›
HÂˆYˆ
\›
HÂˆÛÛœÝXœÛÛ]U\›HÜ™X]U˜[YXœÛÛ]U\›
\›
NÂˆYˆ
XœÛÛ]U\›
HÂˆ™]\›ˆXœÛÛ]U\›š™YŽÂˆBˆØ\›Š[˜[YXœÛÛ]HØÐ˜\ÙU\›ˆ‰Ý\›H‹˜
NÂˆBˆ™]\›ˆ[ÂŸB˜Û\ÜÈ˜\ÙT“X[˜YÙ\ˆÂˆÛÛœÝXÝÜŠÂˆØÐ˜\ÙU\›ˆØÒYˆ[˜X›V˜Kˆ]˜[X]Ü“Ü[ÛœËˆ[™\‹ˆ\ÜÝÛÜ™ˆJHÂˆ\Ë—ÙØÐ˜\ÙU\›H\œÙQØÐ˜\ÙU\›
ØÐ˜\ÙU\›
NÂˆ\Ë—ÙØÒYHØÒYÂˆ\Ë—Ü\ÜÝÛÜ™H\ÜÝÛÜ™Âˆ\Ë™[˜X›V˜HH[˜X›V˜NÂˆ]˜[X]Ü“Ü[ÛœËš\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY	‰H™X]\™U\Ýš\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜYÂˆ]˜[X]Ü“Ü[ÛœËš\Ò[XYÙQXÛÙ\”Ý\ÜY	‰H™X]\™U\Ýš\Ò[XYÙQXÛÙ\”Ý\ÜYÂˆ\Ë™]˜[X]Ü“Ü[ÛœÈHØš™XÝ™œ™Y^™J]˜[X]Ü“Ü[ÛœÊNÂˆ[XYÙT™\Ú^™\‹œÙ]Ü[ÛœÊ]˜[X]Ü“Ü[ÛœÊNÂˆœYÔÝ™X[KœÙ]Ü[ÛœÊ]˜[X]Ü“Ü[ÛœÊNÂˆÜ\˜]Ü“\ÝœÙ]Ü[ÛœÊ]˜[X]Ü“Ü[ÛœÊNÂˆÛÛœÝÜ[ÛœÈHÂˆ‹‹™]˜[X]Ü“Ü[ÛœËˆ[™\‚ˆNÂˆœ[XYÙKœÙ]Ü[ÛœÊÜ[ÛœÊNÂˆXØÐÛÛÜ”ÜXÙKœÙ]Ü[ÛœÊÜ[ÛœÊNÂˆÛ^ZÒPÐÐ˜\ÙYÔËœÙ]Ü[ÛœÊÜ[ÛœÊNÂˆBˆÙ]ØÒY

HÂˆ™]\›ˆ\Ë—ÙØÒYÂˆBˆÙ]\ÜÝÛÜ™

HÂˆ™]\›ˆ\Ë—Ü\ÜÝÛÜ™ÂˆBˆÙ]ØÐ˜\ÙU\›

HÂˆ™]\›ˆ\Ë—ÙØÐ˜\ÙU\›ÂˆBˆ[œÝ\™QØÊ›Ü\™ÜÊHÂˆ™]\›ˆ\Ë™[œÝ\™J\Ëœ‘ØÝ[Y[›Ü\™ÜÊNÂˆBˆ[œÝ\™V™YŠ›Ü\™ÜÊHÂˆ™]\›ˆ\Ë™[œÝ\™J\Ëœ‘ØÝ[Y[ž™Y‹›Ü\™ÜÊNÂˆBˆ[œÝ\™PØ][ÙÊ›Ü\™ÜÊHÂˆ™]\›ˆ\Ë™[œÝ\™J\Ëœ‘ØÝ[Y[˜Ø][ÙË›Ü\™ÜÊNÂˆBˆÙ]YÙJYÙR[™^
HÂˆ™]\›ˆ\Ëœ‘ØÝ[Y[™Ù]YÙJYÙR[™^
NÂˆBˆ›Û˜[˜XÚÊY[™\ŠHÂˆ™]\›ˆ\Ëœ‘ØÝ[Y[™›Û˜[˜XÚÊY[™\ŠNÂˆBˆÛX[\
X[X[UšYÙÙ\™YH˜[ÙJHÂˆ™]\›ˆ\Ëœ‘ØÝ[Y[˜ÛX[\
X[X[UšYÙÙ\™Y
NÂˆBˆ\Þ[˜È[œÝ\™JØš‹›Ü\™ÜÊHÂˆ[œ™XXÚX›JXœÝ˜XÝY]Ù[œÝ\™XØ[YŠNÂˆBˆ™\]Y\Ý˜[™ÙJ™YÚ[‹[™
HÂˆ[œ™XXÚX›JXœÝ˜XÝY]Ù™\]Y\Ý˜[™ÙXØ[YŠNÂˆBˆ™\]Y\ÝØYYÝ™X[J›Ñ™]ÚH˜[ÙJHÂˆ[œ™XXÚX›JXœÝ˜XÝY]Ù™\]Y\ÝØYYÝ™X[XØ[YŠNÂˆBˆÙ[™›ÙÜ™\ÜÚ]™Q]JÚ[šÊHÂˆ[œ™XXÚX›JXœÝ˜XÝY]ÙÙ[™›ÙÜ™\ÜÚ]™Q]XØ[YŠNÂˆBˆ\]T\ÜÝÛÜ™
\ÜÝÛÜ™
HÂˆ\Ë—Ü\ÜÝÛÜ™H\ÜÝÛÜ™ÂˆBˆ\›Z[˜]J™X\ÛÛŠHÂˆ[œ™XXÚX›JXœÝ˜XÝY]Ù\›Z[˜]XØ[YŠNÂˆBŸB˜Û\ÜÈØØ[“X[˜YÙ\ˆ^[™È˜\ÙT“X[˜YÙ\ˆÂˆÛÛœÝXÝÜŠ\™ÜÊHÂˆÝ\\Š\™ÜÊNÂˆÛÛœÝÝ™X[HH™]ÈÝ™X[J\™ÜËœÛÝ\˜ÙJNÂˆ\Ëœ‘ØÝ[Y[H™]È‘ØÝ[Y[
\ËÝ™X[JNÂˆ\Ë—ÛØYYÝ™X[T›ÛZ\ÙHH›ÛZ\ÙKœ™\ÛÛ™JÝ™X[JNÂˆBˆ\Þ[˜È[œÝ\™JØš‹›Ü\™ÜÊHÂˆÛÛœÝ˜[YHHØš–Ü›ÜNÂˆYˆ
\[Ùˆ˜[YHOOH™[˜Ý[ÛˆŠHÂˆ™]\›ˆ˜[YK˜\JØš‹\™ÜÊNÂˆBˆ™]\›ˆ˜[YNÂˆBˆ™\]Y\Ý˜[™ÙJ™YÚ[‹[™
HÂˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÂˆBˆ™\]Y\ÝØYYÝ™X[J›Ñ™]ÚH˜[ÙJHÂˆ™]\›ˆ\Ë—ÛØYYÝ™X[T›ÛZ\ÙNÂˆBˆ\›Z[˜]J™X\ÛÛŠHßBŸB˜Û\ÜÈ™]ÛÜšÔ“X[˜YÙ\ˆ^[™È˜\ÙT“X[˜YÙ\ˆÂˆÛÛœÝXÝÜŠ\™ÜÊHÂˆÝ\\Š\™ÜÊNÂˆ\ËœÝ™X[SX[˜YÙ\ˆH™]ÈÚ[šÙYÝ™X[SX[˜YÙ\Š\™ÜËœÛÝ\˜ÙKÂˆ\ÙÒ[™\Žˆ\™ÜËš[™\‹ˆ[™Ýˆ\™ÜË›[™Ýˆ\ØX›P]]Ñ™]Úˆ\™ÜË™\ØX›P]]Ñ™]Úˆ˜[™ÙPÚ[šÔÚ^™Nˆ\™ÜËœ˜[™ÙPÚ[šÔÚ^™BˆJNÂˆ\Ëœ‘ØÝ[Y[H™]È‘ØÝ[Y[
\Ë\ËœÝ™X[SX[˜YÙ\‹™Ù]Ý™X[J
JNÂˆBˆ\Þ[˜È[œÝ\™JØš‹›Ü\™ÜÊHÂˆžHÂˆÛÛœÝ˜[YHHØš–Ü›ÜNÂˆYˆ
\[Ùˆ˜[YHOOH™[˜Ý[ÛˆŠHÂˆ™]\›ˆ˜[YK˜\JØš‹\™ÜÊNÂˆBˆ™]\›ˆ˜[YNÂˆHØ]Ú
^
HÂˆYˆ
J^[œÝ[˜Ù[ÙˆZ\ÜÚ[™Ñ]Q^Ù\[ÛŠJHÂˆ›ÝÈ^ÂˆBˆ]ØZ]\Ëœ™\]Y\Ý˜[™ÙJ^˜™YÚ[‹^™[™
NÂˆ™]\›ˆ\Ë™[œÝ\™JØš‹›Ü\™ÜÊNÂˆBˆBˆ™\]Y\Ý˜[™ÙJ™YÚ[‹[™
HÂˆ™]\›ˆ\ËœÝ™X[SX[˜YÙ\‹œ™\]Y\Ý˜[™ÙJ™YÚ[‹[™
NÂˆBˆ™\]Y\ÝØYYÝ™X[J›Ñ™]ÚH˜[ÙJHÂˆ™]\›ˆ\ËœÝ™X[SX[˜YÙ\‹œ™\]Y\Ý[Ú[šÜÊ›Ñ™]Ú
NÂˆBˆÙ[™›ÙÜ™\ÜÚ]™Q]JÚ[šÊHÂˆ\ËœÝ™X[SX[˜YÙ\‹›Û”™XÙZ]™Q]JÂˆÚ[šÂˆJNÂˆBˆ\›Z[˜]J™X\ÛÛŠHÂˆ\ËœÝ™X[SX[˜YÙ\‹˜X›Ü
™X\ÛÛŠNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËÜÚ\™YÛY\ÜØYÙWÚ[™\‹šœÂ‚˜ÛÛœÝØ[˜XÚÒÚ[™HÂˆUNˆKˆT”“ÔŽˆ‚ŸNÂ˜ÛÛœÝÝ™X[RÚ[™HÂˆÐSÑSˆKˆÐSÑSÐÓÓTUNˆ‹ˆÓÔÑNˆËˆS”UQUQNˆˆT”“ÔŽˆKˆSˆ‹ˆSÐÓÓTUNˆËˆÕT•ÐÓÓTUNˆŸNÂ™[˜Ý[ÛˆÛ‘›Š
HßB™[˜Ý[ÛˆÜ˜\™X\ÛÛŠ^
HÂˆYˆ
^[œÝ[˜Ù[ÙˆX›Ü^Ù\[Ûˆ^[œÝ[˜Ù[Ùˆ[˜[Y‘^Ù\[Ûˆ^[œÝ[˜Ù[Ùˆ\ÜÝÛÜ™^Ù\[Ûˆ^[œÝ[˜Ù[Ùˆ™\ÜÛœÙQ^Ù\[Ûˆ^[œÝ[˜Ù[Ùˆ[šÛ›ÝÛ‘\œ›Ü‘^Ù\[ÛŠHÂˆ™]\›ˆ^ÂˆBˆYˆ
J^[œÝ[˜Ù[Ùˆ\œ›Üˆ\[Ùˆ^OOH›Øš™XÝˆ	‰ˆ^OOH[
JHÂˆ[œ™XXÚX›J	ÝÜ˜\™X\ÛÛŽˆ^XÝYœ™X\ÛÛˆˆÈ™HH
ÜÜÚX›HÛÛ™Y
H\œ›Ü‹‰ÊNÂˆBˆÝÚ]Ú
^›˜[YJHÂˆØ\ÙHX›Ü^Ù\[ÛˆŽ‚ˆ™]\›ˆ™]ÈX›Ü^Ù\[ÛŠ^›Y\ÜØYÙJNÂˆØ\ÙH’[˜[Y‘^Ù\[ÛˆŽ‚ˆ™]\›ˆ™]È[˜[Y‘^Ù\[ÛŠ^›Y\ÜØYÙJNÂˆØ\ÙH”\ÜÝÛÜ™^Ù\[ÛˆŽ‚ˆ™]\›ˆ™]È\ÜÝÛÜ™^Ù\[ÛŠ^›Y\ÜØYÙK^˜ÛÙJNÂˆØ\ÙH”™\ÜÛœÙQ^Ù\[ÛˆŽ‚ˆ™]\›ˆ™]È™\ÜÛœÙQ^Ù\[ÛŠ^›Y\ÜØYÙK^œÝ]\Ë^›Z\ÜÚ[™ÊNÂˆØ\ÙH•[šÛ›ÝÛ‘\œ›Ü‘^Ù\[ÛˆŽ‚ˆ™]\›ˆ™]È[šÛ›ÝÛ‘\œ›Ü‘^Ù\[ÛŠ^›Y\ÜØYÙK^™]Z[ÊNÂˆBˆ™]\›ˆ™]È[šÛ›ÝÛ‘\œ›Ü‘^Ù\[ÛŠ^›Y\ÜØYÙK^ÔÝš[™Ê
JNÂŸB˜Û\ÜÈY\ÜØYÙR[™\ˆÂˆÛY\ÜØYÙPPÈH™]ÈX›ÜÛÛ›Û\Š
NÂˆÛÛœÝXÝÜŠÛÝ\˜ÙS˜[YK\™Ù]˜[YKÛÛSØšŠHÂˆ\ËœÛÝ\˜ÙS˜[YHHÛÝ\˜ÙS˜[YNÂˆ\Ë\™Ù]˜[YHH\™Ù]˜[YNÂˆ\Ë˜ÛÛSØšˆHÛÛSØšŽÂˆ\Ë˜Ø[˜XÚÒYHNÂˆ\ËœÝ™X[RYHNÂˆ\ËœÝ™X[TÚ[šÜÈHØš™XÝ˜Ü™X]J[
NÂˆ\ËœÝ™X[PÛÛ›Û\œÈHØš™XÝ˜Ü™X]J[
NÂˆ\Ë˜Ø[˜XÚÐØ\Xš[]Y\ÈHØš™XÝ˜Ü™X]J[
NÂˆ\Ë˜XÝ[Û’[™\ˆHØš™XÝ˜Ü™X]J[
NÂˆÛÛSØš‹˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹\ËˆÛÛ“Y\ÜØYÙK˜š[™
\ÊKÂˆÚYÛ˜[ˆ\ËˆÛY\ÜØYÙPPËœÚYÛ˜[ˆJNÂˆBˆÛÛ“Y\ÜØYÙJÂˆ]BˆJHÂˆYˆ
]K\™Ù]˜[YHOOH\ËœÛÝ\˜ÙS˜[YJHÂˆ™]\›ŽÂˆBˆYˆ
]KœÝ™X[JHÂˆ\ËˆÜ›ØÙ\ÜÔÝ™X[SY\ÜØYÙJ]JNÂˆ™]\›ŽÂˆBˆYˆ
]K˜Ø[˜XÚÊHÂˆÛÛœÝØ[˜XÚÒYH]K˜Ø[˜XÚÒYÂˆÛÛœÝØ\Xš[]HH\Ë˜Ø[˜XÚÐØ\Xš[]Y\ÖØØ[˜XÚÒYNÂˆYˆ
XØ\Xš[]JHÂˆ›ÝÈ™]È\œ›ÜŠØ[››Ý™\ÛÛ™HØ[˜XÚÈ	ØØ[˜XÚÒYX
NÂˆBˆ[]H\Ë˜Ø[˜XÚÐØ\Xš[]Y\ÖØØ[˜XÚÒYNÂˆYˆ
]K˜Ø[˜XÚÈOOHØ[˜XÚÒÚ[™‘UJHÂˆØ\Xš[]Kœ™\ÛÛ™J]K™]JNÂˆH[ÙHYˆ
]K˜Ø[˜XÚÈOOHØ[˜XÚÒÚ[™‘T”“ÔŠHÂˆØ\Xš[]Kœ™Z™XÝ
Ü˜\™X\ÛÛŠ]Kœ™X\ÛÛŠJNÂˆH[ÙHÂˆ›ÝÈ™]È\œ›ÜŠ•[™^XÝYØ[˜XÚÈØ\ÙHŠNÂˆBˆ™]\›ŽÂˆBˆÛÛœÝXÝ[ÛˆH\Ë˜XÝ[Û’[™\–Ù]K˜XÝ[Û—NÂˆYˆ
XXÝ[ÛŠHÂˆ›ÝÈ™]È\œ›ÜŠ[šÛ›ÝÛˆXÝ[Ûˆœ›ÛHÛÜšÙ\Žˆ	Ù]K˜XÝ[ÛŸX
NÂˆBˆYˆ
]K˜Ø[˜XÚÒY
HÂˆÛÛœÝÛÝ\˜ÙS˜[YHH\ËœÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YHH]KœÛÝ\˜ÙS˜[YKˆÛÛSØšˆH\Ë˜ÛÛSØšŽÂˆ›ÛZ\ÙKžJXÝ[Û‹]K™]JK[Š[˜Ý[Ûˆ
™\Ý[
HÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆØ[˜XÚÎˆØ[˜XÚÒÚ[™‘UKˆØ[˜XÚÒYˆ]K˜Ø[˜XÚÒYˆ]Nˆ™\Ý[ˆJNÂˆK[˜Ý[Ûˆ
™X\ÛÛŠHÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆØ[˜XÚÎˆØ[˜XÚÒÚ[™‘T”“Ô‹ˆØ[˜XÚÒYˆ]K˜Ø[˜XÚÒYˆ™X\ÛÛŽˆÜ˜\™X\ÛÛŠ™X\ÛÛŠBˆJNÂˆJNÂˆ™]\›ŽÂˆBˆYˆ
]KœÝ™X[RY
HÂˆ\ËˆØÜ™X]TÝ™X[TÚ[šÊ]JNÂˆ™]\›ŽÂˆBˆXÝ[ÛŠ]K™]JNÂˆBˆÛŠXÝ[Û“˜[YK[™\ŠHÂˆÛÛœÝZH\Ë˜XÝ[Û’[™\ŽÂˆYˆ
ZØXÝ[Û“˜[YWJHÂˆ›ÝÈ™]È\œ›ÜŠ\™H\È[™XYH[ˆXÝ[Û“˜[YHØ[Y‰ØXÝ[Û“˜[Y_H˜
NÂˆBˆZØXÝ[Û“˜[YWHH[™\ŽÂˆBˆÙ[™
XÝ[Û“˜[YK]K˜[œÙ™\œÊHÂˆ\Ë˜ÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YNˆ\ËœÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YNˆ\Ë\™Ù]˜[YKˆXÝ[ÛŽˆXÝ[Û“˜[YKˆ]BˆK˜[œÙ™\œÊNÂˆBˆÙ[™Ú]›ÛZ\ÙJXÝ[Û“˜[YK]K˜[œÙ™\œÊHÂˆÛÛœÝØ[˜XÚÒYH\Ë˜Ø[˜XÚÒY
ÊÎÂˆÛÛœÝØ\Xš[]HH›ÛZ\ÙKÚ]™\ÛÛ™\œÊ
NÂˆ\Ë˜Ø[˜XÚÐØ\Xš[]Y\ÖØØ[˜XÚÒYHHØ\Xš[]NÂˆžHÂˆ\Ë˜ÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YNˆ\ËœÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YNˆ\Ë\™Ù]˜[YKˆXÝ[ÛŽˆXÝ[Û“˜[YKˆØ[˜XÚÒYˆ]BˆK˜[œÙ™\œÊNÂˆHØ]Ú
^
HÂˆØ\Xš[]Kœ™Z™XÝ
^
NÂˆBˆ™]\›ˆØ\Xš[]Kœ›ÛZ\ÙNÂˆBˆÙ[™Ú]Ý™X[JXÝ[Û“˜[YK]K]Y]YZ[™ÔÝ˜]YÞK˜[œÙ™\œÊHÂˆÛÛœÝÝ™X[RYH\ËœÝ™X[RY
ÊËˆÛÝ\˜ÙS˜[YHH\ËœÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YHH\Ë\™Ù]˜[YKˆÛÛSØšˆH\Ë˜ÛÛSØšŽÂˆ™]\›ˆ™]È™XYX›TÝ™X[JÂˆÝ\ˆÛÛ›Û\ˆOˆÂˆÛÛœÝÝ\Ø\Xš[]HH›ÛZ\ÙKÚ]™\ÛÛ™\œÊ
NÂˆ\ËœÝ™X[PÛÛ›Û\œÖÜÝ™X[RYHHÂˆÛÛ›Û\‹ˆÝ\Ø[ˆÝ\Ø\Xš[]Kˆ[Ø[ˆ[ˆØ[˜Ù[Ø[ˆ[ˆ\ÐÛÜÙYˆ˜[ÙBˆNÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆXÝ[ÛŽˆXÝ[Û“˜[YKˆÝ™X[RYˆ]Kˆ\Ú\™YÚ^™NˆÛÛ›Û\‹™\Ú\™YÚ^™BˆK˜[œÙ™\œÊNÂˆ™]\›ˆÝ\Ø\Xš[]Kœ›ÛZ\ÙNÂˆKˆ[ˆÛÛ›Û\ˆOˆÂˆÛÛœÝ[Ø\Xš[]HH›ÛZ\ÙKÚ]™\ÛÛ™\œÊ
NÂˆ\ËœÝ™X[PÛÛ›Û\œÖÜÝ™X[RYKœ[Ø[H[Ø\Xš[]NÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™”SˆÝ™X[RYˆ\Ú\™YÚ^™NˆÛÛ›Û\‹™\Ú\™YÚ^™BˆJNÂˆ™]\›ˆ[Ø\Xš[]Kœ›ÛZ\ÙNÂˆKˆØ[˜Ù[ˆ™X\ÛÛˆOˆÂˆ\ÜÙ\
™X\ÛÛˆ[œÝ[˜Ù[Ùˆ\œ›Ü‹˜Ø[˜Ù[]\Ý]™HH˜[Y™X\ÛÛˆŠNÂˆÛÛœÝØ[˜Ù[Ø\Xš[]HH›ÛZ\ÙKÚ]™\ÛÛ™\œÊ
NÂˆ\ËœÝ™X[PÛÛ›Û\œÖÜÝ™X[RYK˜Ø[˜Ù[Ø[HØ[˜Ù[Ø\Xš[]NÂˆ\ËœÝ™X[PÛÛ›Û\œÖÜÝ™X[RYKš\ÐÛÜÙYHYNÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™ÐSÑSˆÝ™X[RYˆ™X\ÛÛŽˆÜ˜\™X\ÛÛŠ™X\ÛÛŠBˆJNÂˆ™]\›ˆØ[˜Ù[Ø\Xš[]Kœ›ÛZ\ÙNÂˆBˆK]Y]YZ[™ÔÝ˜]YÞJNÂˆBˆØÜ™X]TÝ™X[TÚ[šÊ]JHÂˆÛÛœÝÝ™X[RYH]KœÝ™X[RYˆÛÝ\˜ÙS˜[YHH\ËœÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YHH]KœÛÝ\˜ÙS˜[YKˆÛÛSØšˆH\Ë˜ÛÛSØšŽÂˆÛÛœÝÙ[ˆH\ËˆXÝ[ÛˆH\Ë˜XÝ[Û’[™\–Ù]K˜XÝ[Û—NÂˆÛÛœÝÝ™X[TÚ[šÈHÂˆ[œ]Y]YJÚ[šËÚ^™HHK˜[œÙ™\œÊHÂˆYˆ
\Ëš\ÐØ[˜Ù[Y
HÂˆ™]\›ŽÂˆBˆÛÛœÝ\Ý\Ú\™YÚ^™HH\Ë™\Ú\™YÚ^™NÂˆ\Ë™\Ú\™YÚ^™HOHÚ^™NÂˆYˆ
\Ý\Ú\™YÚ^™Hˆ	‰ˆ\Ë™\Ú\™YÚ^™HH
HÂˆ\ËœÚ[šÐØ\Xš[]HH›ÛZ\ÙKÚ]™\ÛÛ™\œÊ
NÂˆ\Ëœ™XYHH\ËœÚ[šÐØ\Xš[]Kœ›ÛZ\ÙNÂˆBˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™‘S”UQUQKˆÝ™X[RYˆÚ[šÂˆK˜[œÙ™\œÊNÂˆKˆÛÜÙJ
HÂˆYˆ
\Ëš\ÐØ[˜Ù[Y
HÂˆ™]\›ŽÂˆBˆ\Ëš\ÐØ[˜Ù[YHYNÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™ÓÔÑKˆÝ™X[RYˆJNÂˆ[]HÙ[‹œÝ™X[TÚ[šÜÖÜÝ™X[RYNÂˆKˆ\œ›ÜŠ™X\ÛÛŠHÂˆ\ÜÙ\
™X\ÛÛˆ[œÝ[˜Ù[Ùˆ\œ›Ü‹™\œ›Üˆ]\Ý]™HH˜[Y™X\ÛÛˆŠNÂˆYˆ
\Ëš\ÐØ[˜Ù[Y
HÂˆ™]\›ŽÂˆBˆ\Ëš\ÐØ[˜Ù[YHYNÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™‘T”“Ô‹ˆÝ™X[RYˆ™X\ÛÛŽˆÜ˜\™X\ÛÛŠ™X\ÛÛŠBˆJNÂˆKˆÚ[šÐØ\Xš[]Nˆ›ÛZ\ÙKÚ]™\ÛÛ™\œÊ
KˆÛ”[ˆ[ˆÛØ[˜Ù[ˆ[ˆ\ÐØ[˜Ù[Yˆ˜[ÙKˆ\Ú\™YÚ^™Nˆ]K™\Ú\™YÚ^™Kˆ™XYNˆ[ˆNÂˆÝ™X[TÚ[šËœÚ[šÐØ\Xš[]Kœ™\ÛÛ™J
NÂˆÝ™X[TÚ[šËœ™XYHHÝ™X[TÚ[šËœÚ[šÐØ\Xš[]Kœ›ÛZ\ÙNÂˆ\ËœÝ™X[TÚ[šÜÖÜÝ™X[RYHHÝ™X[TÚ[šÎÂˆ›ÛZ\ÙKžJXÝ[Û‹]K™]KÝ™X[TÚ[šÊK[Š[˜Ý[Ûˆ

HÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™”ÕT•ÐÓÓTUKˆÝ™X[RYˆÝXØÙ\ÜÎˆYBˆJNÂˆK[˜Ý[Ûˆ
™X\ÛÛŠHÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™”ÕT•ÐÓÓTUKˆÝ™X[RYˆ™X\ÛÛŽˆÜ˜\™X\ÛÛŠ™X\ÛÛŠBˆJNÂˆJNÂˆBˆÜ›ØÙ\ÜÔÝ™X[SY\ÜØYÙJ]JHÂˆÛÛœÝÝ™X[RYH]KœÝ™X[RYˆÛÝ\˜ÙS˜[YHH\ËœÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YHH]KœÛÝ\˜ÙS˜[YKˆÛÛSØšˆH\Ë˜ÛÛSØšŽÂˆÛÛœÝÝ™X[PÛÛ›Û\ˆH\ËœÝ™X[PÛÛ›Û\œÖÜÝ™X[RYKˆÝ™X[TÚ[šÈH\ËœÝ™X[TÚ[šÜÖÜÝ™X[RYNÂˆÝÚ]Ú
]KœÝ™X[JHÂˆØ\ÙHÝ™X[RÚ[™”ÕT•ÐÓÓTUN‚ˆYˆ
]KœÝXØÙ\ÜÊHÂˆÝ™X[PÛÛ›Û\‹œÝ\Ø[œ™\ÛÛ™J
NÂˆH[ÙHÂˆÝ™X[PÛÛ›Û\‹œÝ\Ø[œ™Z™XÝ
Ü˜\™X\ÛÛŠ]Kœ™X\ÛÛŠJNÂˆBˆœ™XZÎÂˆØ\ÙHÝ™X[RÚ[™”SÐÓÓTUN‚ˆYˆ
]KœÝXØÙ\ÜÊHÂˆÝ™X[PÛÛ›Û\‹œ[Ø[œ™\ÛÛ™J
NÂˆH[ÙHÂˆÝ™X[PÛÛ›Û\‹œ[Ø[œ™Z™XÝ
Ü˜\™X\ÛÛŠ]Kœ™X\ÛÛŠJNÂˆBˆœ™XZÎÂˆØ\ÙHÝ™X[RÚ[™”S‚ˆYˆ
\Ý™X[TÚ[šÊHÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™”SÐÓÓTUKˆÝ™X[RYˆÝXØÙ\ÜÎˆYBˆJNÂˆœ™XZÎÂˆBˆYˆ
Ý™X[TÚ[šË™\Ú\™YÚ^™HH	‰ˆ]K™\Ú\™YÚ^™Hˆ
HÂˆÝ™X[TÚ[šËœÚ[šÐØ\Xš[]Kœ™\ÛÛ™J
NÂˆBˆÝ™X[TÚ[šË™\Ú\™YÚ^™HH]K™\Ú\™YÚ^™NÂˆ›ÛZ\ÙKžJÝ™X[TÚ[šË›Û”[Û‘›ŠK[Š[˜Ý[Ûˆ

HÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™”SÐÓÓTUKˆÝ™X[RYˆÝXØÙ\ÜÎˆYBˆJNÂˆK[˜Ý[Ûˆ
™X\ÛÛŠHÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™”SÐÓÓTUKˆÝ™X[RYˆ™X\ÛÛŽˆÜ˜\™X\ÛÛŠ™X\ÛÛŠBˆJNÂˆJNÂˆœ™XZÎÂˆØ\ÙHÝ™X[RÚ[™‘S”UQUQN‚ˆ\ÜÙ\
Ý™X[PÛÛ›Û\‹™[œ]Y]YHÚÝ[]™HÝ™X[HÛÛ›Û\ˆŠNÂˆYˆ
Ý™X[PÛÛ›Û\‹š\ÐÛÜÙY
HÂˆœ™XZÎÂˆBˆÝ™X[PÛÛ›Û\‹˜ÛÛ›Û\‹™[œ]Y]YJ]K˜Ú[šÊNÂˆœ™XZÎÂˆØ\ÙHÝ™X[RÚ[™ÓÔÑN‚ˆ\ÜÙ\
Ý™X[PÛÛ›Û\‹˜ÛÜÙHÚÝ[]™HÝ™X[HÛÛ›Û\ˆŠNÂˆYˆ
Ý™X[PÛÛ›Û\‹š\ÐÛÜÙY
HÂˆœ™XZÎÂˆBˆÝ™X[PÛÛ›Û\‹š\ÐÛÜÙYHYNÂˆÝ™X[PÛÛ›Û\‹˜ÛÛ›Û\‹˜ÛÜÙJ
NÂˆ\ËˆÙ[]TÝ™X[PÛÛ›Û\ŠÝ™X[PÛÛ›Û\‹Ý™X[RY
NÂˆœ™XZÎÂˆØ\ÙHÝ™X[RÚ[™‘T”“ÔŽ‚ˆ\ÜÙ\
Ý™X[PÛÛ›Û\‹™\œ›ÜˆÚÝ[]™HÝ™X[HÛÛ›Û\ˆŠNÂˆÝ™X[PÛÛ›Û\‹˜ÛÛ›Û\‹™\œ›ÜŠÜ˜\™X\ÛÛŠ]Kœ™X\ÛÛŠJNÂˆ\ËˆÙ[]TÝ™X[PÛÛ›Û\ŠÝ™X[PÛÛ›Û\‹Ý™X[RY
NÂˆœ™XZÎÂˆØ\ÙHÝ™X[RÚ[™ÐSÑSÐÓÓTUN‚ˆYˆ
]KœÝXØÙ\ÜÊHÂˆÝ™X[PÛÛ›Û\‹˜Ø[˜Ù[Ø[œ™\ÛÛ™J
NÂˆH[ÙHÂˆÝ™X[PÛÛ›Û\‹˜Ø[˜Ù[Ø[œ™Z™XÝ
Ü˜\™X\ÛÛŠ]Kœ™X\ÛÛŠJNÂˆBˆ\ËˆÙ[]TÝ™X[PÛÛ›Û\ŠÝ™X[PÛÛ›Û\‹Ý™X[RY
NÂˆœ™XZÎÂˆØ\ÙHÝ™X[RÚ[™ÐSÑS‚ˆYˆ
\Ý™X[TÚ[šÊHÂˆœ™XZÎÂˆBˆÛÛœÝ]T™X\ÛÛˆHÜ˜\™X\ÛÛŠ]Kœ™X\ÛÛŠNÂˆ›ÛZ\ÙKžJÝ™X[TÚ[šË›ÛØ[˜Ù[Û‘›‹]T™X\ÛÛŠK[Š[˜Ý[Ûˆ

HÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™ÐSÑSÐÓÓTUKˆÝ™X[RYˆÝXØÙ\ÜÎˆYBˆJNÂˆK[˜Ý[Ûˆ
™X\ÛÛŠHÂˆÛÛSØš‹œÜÝY\ÜØYÙJÂˆÛÝ\˜ÙS˜[YKˆ\™Ù]˜[YKˆÝ™X[NˆÝ™X[RÚ[™ÐSÑSÐÓÓTUKˆÝ™X[RYˆ™X\ÛÛŽˆÜ˜\™X\ÛÛŠ™X\ÛÛŠBˆJNÂˆJNÂˆÝ™X[TÚ[šËœÚ[šÐØ\Xš[]Kœ™Z™XÝ
]T™X\ÛÛŠNÂˆÝ™X[TÚ[šËš\ÐØ[˜Ù[YHYNÂˆ[]H\ËœÝ™X[TÚ[šÜÖÜÝ™X[RYNÂˆœ™XZÎÂˆY˜][‚ˆ›ÝÈ™]È\œ›ÜŠ•[™^XÝYÝ™X[HØ\ÙHŠNÂˆBˆBˆ\Þ[˜ÈÙ[]TÝ™X[PÛÛ›Û\ŠÝ™X[PÛÛ›Û\‹Ý™X[RY
HÂˆ]ØZ]›ÛZ\ÙK˜[Ù]Y
ÜÝ™X[PÛÛ›Û\‹œÝ\Ø[Ëœ›ÛZ\ÙKÝ™X[PÛÛ›Û\‹œ[Ø[Ëœ›ÛZ\ÙKÝ™X[PÛÛ›Û\‹˜Ø[˜Ù[Ø[Ëœ›ÛZ\ÙWJNÂˆ[]H\ËœÝ™X[PÛÛ›Û\œÖÜÝ™X[RYNÂˆBˆ\Ý›ÞJ
HÂˆ\ËˆÛY\ÜØYÙPPÏË˜X›Ü

NÂˆ\ËˆÛY\ÜØYÙPPÈH[ÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÝÜš]\‹šœÂ‚‚‚‚‚‚‚˜\Þ[˜È[˜Ý[ÛˆÜš]SØš™XÝ
™Y‹Øš‹Y™™\‹Âˆ[˜Üž\H[ŸJHÂˆÛÛœÝ˜[œÙ›Ü›HH[˜Üž\Ë˜Ü™X]PÚ\\•˜[œÙ›Ü›J™Y‹›[K™Y‹™Ù[ŠNÂˆY™™\‹œ\Ú
	Ü™Y‹›[_H	Ü™Y‹™Ù[ŸHØš—˜
NÂˆYˆ
Øšˆ[œÝ[˜Ù[ÙˆXÝ
HÂˆ]ØZ]Üš]QXÝ
Øš‹Y™™\‹˜[œÙ›Ü›JNÂˆH[ÙHYˆ
Øšˆ[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JHÂˆ]ØZ]Üš]TÝ™X[JØš‹Y™™\‹˜[œÙ›Ü›JNÂˆH[ÙHYˆ
\œ˜^Kš\Ð\œ˜^JØšŠH\œ˜^PY™™\‹š\ÕšY]ÊØšŠJHÂˆ]ØZ]Üš]P\œ˜^JØš‹Y™™\‹˜[œÙ›Ü›JNÂˆBˆY™™\‹œ\Ú
—™[™Øš—ˆŠNÂŸB˜\Þ[˜È[˜Ý[ÛˆÜš]QXÝ
XÝY™™\‹˜[œÙ›Ü›JHÂˆY™™\‹œ\Ú
ŠNÂˆ›Üˆ
ÛÛœÝÙ^HÙˆXÝ™Ù]Ù^\Ê
JHÂˆY™™\‹œ\Ú
ÉÙ\ØØ\T“˜[YJÙ^J_H
NÂˆ]ØZ]Üš]U˜[YJXÝ™Ù]˜]ÊÙ^JKY™™\‹˜[œÙ›Ü›JNÂˆBˆY™™\‹œ\Ú
ˆŠNÂŸB˜\Þ[˜È[˜Ý[ÛˆÜš]TÝ™X[JÝ™X[KY™™\‹˜[œÙ›Ü›JHÂˆ]ž]\ÈHÝ™X[K™Ù]ž]\Ê
NÂˆÛÛœÝÂˆXÝˆHHÝ™X[NÂˆÛÛœÝÙš[\‹\˜[\×HH]ØZ]›ÛZ\ÙK˜[
ÙXÝ™Ù]\Þ[˜Ê‘š[\ˆŠKXÝ™Ù]\Þ[˜Ê‘XÛÙT\›\ÈŠWJNÂˆÛÛœÝš[\–™\›ÈH\œ˜^Kš\Ð\œ˜^Jš[\ŠHÈ]ØZ]XÝž™Y‹™™]ÚY”™Y\Þ[˜Êš[\–ÌJHˆš[\ŽÂˆÛÛœÝ\Ñš[\–™\›Ñ›]QXÛÙHH\Ó˜[YJš[\–™\›Ë‘›]QXÛÙHŠNÂˆÛÛœÝRS—ÓS‘ÕÑ“Ô—ÐÓÓT‘TÔÒS‘ÈHMŽÂˆYˆ
ž]\Ë›[™ÝHRS—ÓS‘ÕÑ“Ô—ÐÓÓT‘TÔÒS‘È\Ñš[\–™\›Ñ›]QXÛÙJHÂˆžHÂˆÛÛœÝÜÈH™]ÈÛÛ\™\ÜÚ[Û”Ý™X[J™Y›]HŠNÂˆÛÛœÝÜš]\ˆHÜËÜš]X›K™Ù]Üš]\Š
NÂˆ]ØZ]Üš]\‹œ™XYNÂˆÜš]\‹Üš]Jž]\ÊK[Š\Þ[˜È

HOˆÂˆ]ØZ]Üš]\‹œ™XYNÂˆ]ØZ]Üš]\‹˜ÛÜÙJ
NÂˆJK˜Ø]Ú


HOˆßJNÂˆÛÛœÝYˆH]ØZ]™]È™\ÜÛœÙJÜËœ™XYX›JK˜\œ˜^PY™™\Š
NÂˆž]\ÈH™]ÈZ[\œ˜^JYŠNÂˆ]™]Ñš[\‹™]Ô\˜[\ÎÂˆYˆ
Yš[\ŠHÂˆ™]Ñš[\ˆH˜[YK™Ù]
‘›]QXÛÙHŠNÂˆH[ÙHYˆ
Z\Ñš[\–™\›Ñ›]QXÛÙJHÂˆ™]Ñš[\ˆH\œ˜^Kš\Ð\œ˜^Jš[\ŠHÈÓ˜[YK™Ù]
‘›]QXÛÙHŠK‹‹™š[\—HˆÓ˜[YK™Ù]
‘›]QXÛÙHŠKš[\—NÂˆYˆ
\˜[\ÊHÂˆ™]Ô\˜[\ÈH\œ˜^Kš\Ð\œ˜^J\˜[\ÊHÈÛ[‹‹œ\˜[\×HˆÛ[\˜[\×NÂˆBˆBˆYˆ
™]Ñš[\ŠHÂˆXÝœÙ]
‘š[\ˆ‹™]Ñš[\ŠNÂˆBˆYˆ
™]Ô\˜[\ÊHÂˆXÝœÙ]
‘XÛÙT\›\È‹™]Ô\˜[\ÊNÂˆBˆHØ]Ú
^
HÂˆ[™›ÊÜš]TÝ™X[HHØ[››ÝÛÛ\™\ÜÈ]Nˆ‰Ù^H‹˜
NÂˆBˆBˆ]Ýš[™ÈHž]\ÕÔÝš[™Êž]\ÊNÂˆYˆ
˜[œÙ›Ü›JHÂˆÝš[™ÈH˜[œÙ›Ü›K™[˜Üž\Ýš[™ÊÝš[™ÊNÂˆBˆXÝœÙ]
“[™Ý‹Ýš[™Ë›[™Ý
NÂˆ]ØZ]Üš]QXÝ
XÝY™™\‹˜[œÙ›Ü›JNÂˆY™™\‹œ\Ú
ˆÝ™X[Wˆ‹Ýš[™Ë—™[™Ý™X[HŠNÂŸB˜\Þ[˜È[˜Ý[ÛˆÜš]P\œ˜^J\œ˜^KY™™\‹˜[œÙ›Ü›JHÂˆY™™\‹œ\Ú
–ÈŠNÂˆ]š\œÝHYNÂˆ›Üˆ
ÛÛœÝ˜[Ùˆ\œ˜^JHÂˆYˆ
Yš\œÝ
HÂˆY™™\‹œ\Ú
ˆŠNÂˆH[ÙHÂˆš\œÝH˜[ÙNÂˆBˆ]ØZ]Üš]U˜[YJ˜[Y™™\‹˜[œÙ›Ü›JNÂˆBˆY™™\‹œ\Ú
—HŠNÂŸB˜\Þ[˜È[˜Ý[ÛˆÜš]U˜[YJ˜[YKY™™\‹˜[œÙ›Ü›JHÂˆYˆ
˜[YH[œÝ[˜Ù[Ùˆ˜[YJHÂˆY™™\‹œ\Ú
ÉÙ\ØØ\T“˜[YJ˜[YK›˜[YJ_X
NÂˆH[ÙHYˆ
˜[YH[œÝ[˜Ù[Ùˆ™YŠHÂˆY™™\‹œ\Ú
	Ý˜[YK›[_H	Ý˜[YK™Ù[ŸH˜
NÂˆH[ÙHYˆ
\œ˜^Kš\Ð\œ˜^J˜[YJH\œ˜^PY™™\‹š\ÕšY]Ê˜[YJJHÂˆ]ØZ]Üš]P\œ˜^J˜[YKY™™\‹˜[œÙ›Ü›JNÂˆH[ÙHYˆ
\[Ùˆ˜[YHOOHœÝš[™ÈŠHÂˆYˆ
˜[œÙ›Ü›JHÂˆ˜[YHH˜[œÙ›Ü›K™[˜Üž\Ýš[™Ê˜[YJNÂˆBˆY™™\‹œ\Ú

	Ù\ØØ\TÝš[™Ê˜[YJ_JX
NÂˆH[ÙHYˆ
\[Ùˆ˜[YHOOH›[X™\ˆŠHÂˆY™™\‹œ\Ú
[X™\•ÔÝš[™Ê˜[YJJNÂˆH[ÙHYˆ
\[Ùˆ˜[YHOOH˜›ÛÛX[ˆŠHÂˆY™™\‹œ\Ú
˜[YKÔÝš[™Ê
JNÂˆH[ÙHYˆ
˜[YH[œÝ[˜Ù[ÙˆXÝ
HÂˆ]ØZ]Üš]QXÝ
˜[YKY™™\‹˜[œÙ›Ü›JNÂˆH[ÙHYˆ
˜[YH[œÝ[˜Ù[Ùˆ˜\ÙTÝ™X[JHÂˆ]ØZ]Üš]TÝ™X[J˜[YKY™™\‹˜[œÙ›Ü›JNÂˆH[ÙHYˆ
˜[YHOOH[
HÂˆY™™\‹œ\Ú
›[ŠNÂˆH[ÙHÂˆØ\›Š[š[™Y˜[YH[ˆÜš]\Žˆ	Ý\[Ùˆ˜[Y_KX\ÙHš[HHYË˜
NÂˆBŸB™[˜Ý[ÛˆÜš]R[
[X™\‹Ú^™KÙ™œÙ]Y™™\ŠHÂˆ›Üˆ
]HHÚ^™H
ÈÙ™œÙ]HNÈHˆÙ™œÙ]HNÈKKJHÂˆY™™\–ÚWHH[X™\ˆ	ˆ™ŽÂˆ[X™\ˆHÂˆBˆ™]\›ˆÙ™œÙ]
ÈÚ^™NÂŸB™[˜Ý[ÛˆÜš]TÝš[™ÊÝš[™ËÙ™œÙ]Y™™\ŠHÂˆÛÛœÝZHHÝš[™Ë›[™ÝÂˆ›Üˆ
]HHÈHZNÈJÊÊHÂˆY™™\–ÛÙ™œÙ]
ÈWHHÝš[™Ë˜Ú\ÛÙP]
JH	ˆ™ŽÂˆBˆ™]\›ˆÙ™œÙ]
ÈZNÂŸB™[˜Ý[ÛˆÛÛ\]SQJš[\Ú^™K™Y’[™›ÊHÂˆÛÛœÝ[YHHX]™›ÛÜŠ]K››ÝÊ
HÈL
NÂˆÛÛœÝš[[˜[YHH™Y’[™›Ë™š[[˜[YHˆŽÂˆÛÛœÝYPY™™\ˆHÝ[YKÔÝš[™Ê
Kš[[˜[YKš[\Ú^™KÔÝš[™Ê
K‹‹ž™Y’[™›Ëš[™›ÓX\˜[Y\Ê
WNÂˆÛÛœÝYPY™™\“[ˆHX]œÝ[T™XÚ\ÙJYPY™™\‹›X\
ÝˆOˆÝ‹›[™Ý
JNÂˆÛÛœÝ\œ˜^HH™]ÈZ[\œ˜^JYPY™™\“[ŠNÂˆ]Ù™œÙ]HÂˆ›Üˆ
ÛÛœÝÝˆÙˆYPY™™\ŠHÂˆÙ™œÙ]HÜš]TÝš[™ÊÝ‹Ù™œÙ]\œ˜^JNÂˆBˆ™]\›ˆž]\ÕÔÝš[™ÊØ[Ý[]SQJ\œ˜^K\œ˜^K›[™Ý
JNÂŸB™[˜Ý[ÛˆÜš]VQ]Q›ÜXÜ›Ù›Ü›JÝ‹Ú[™Ù\ÊHÂˆÛÛœÝ[H™]ÈÚ[\VS\œÙ\ŠÂˆ\Ð]šX]\ÎˆYBˆJKœ\œÙQœ›ÛTÝš[™ÊÝŠNÂˆ›Üˆ
ÛÛœÝÂˆ˜BˆHÙˆÚ[™Ù\ÊHÂˆYˆ
^˜JHÂˆÛÛ[YNÂˆBˆÛÛœÝÂˆ]ˆ˜[YBˆHH˜NÂˆYˆ
\]
HÂˆÛÛ[YNÂˆBˆÛÛœÝ›ÙT]H\œÙVT]
]
NÂˆ]›ÙHH[™ØÝ[Y[[[Y[œÙX\˜Ú›ÙJ›ÙT]
NÂˆYˆ
[›ÙH	‰ˆ›ÙT]›[™ÝˆJHÂˆ›ÙHH[™ØÝ[Y[[[Y[œÙX\˜Ú›ÙJÛ›ÙT]˜]
LJWK
NÂˆBˆYˆ
›ÙJHÂˆ›ÙK˜Ú[›Ù\ÈH\œ˜^Kš\Ð\œ˜^J˜[YJHÈ˜[YK›X\
˜[Oˆ™]ÈÚ[\QÓS›ÙJ˜[YH‹˜[
JHˆÛ™]ÈÚ[\QÓS›ÙJˆÝ^‹˜[YJWNÂˆH[ÙHÂˆØ\›Š›ÙH›Ý›Ý[™›Üˆ]ˆ	Ü]X
NÂˆBˆBˆÛÛœÝY™™\ˆH×NÂˆ[™ØÝ[Y[[[Y[™[\
Y™™\ŠNÂˆ™]\›ˆY™™\‹š›Ú[ŠˆŠNÂŸB˜\Þ[˜È[˜Ý[Ûˆ\]PXÜ›Ù›Ü›JÂˆ™Y‹ˆXÜ›Ñ›Ü›KˆXÜ›Ñ›Ü›T™Y‹ˆ\Ö˜Kˆ\Ö˜Q]\Ù]Ñ[žKˆ˜Q]\Ù]Ô™Y‹ˆ™YY\X\˜[˜Ù\ËˆÚ[™Ù\ÂŸJHÂˆYˆ
\Ö˜H	‰ˆZ\Ö˜Q]\Ù]Ñ[žH	‰ˆ^˜Q]\Ù]Ô™YŠHÂˆØ\›Š–HHØ[››ÝØ]™H]ŠNÂˆBˆYˆ
[™YY\X\˜[˜Ù\È	‰ˆ
Z\Ö˜H^˜Q]\Ù]Ô™Yˆ\Ö˜Q]\Ù]Ñ[žJJHÂˆ™]\›ŽÂˆBˆÛÛœÝXÝHXÜ›Ñ›Ü›K˜ÛÛ™J
NÂˆYˆ
\Ö˜H	‰ˆZ\Ö˜Q]\Ù]Ñ[žJHÂˆÛÛœÝ™]Ö˜HHXÜ›Ñ›Ü›K™Ù]
–HŠKœÛXÙJ
NÂˆ™]Ö˜KœÜXÙJ‹™]\Ù]ÈŠNÂˆ™]Ö˜KœÜXÙJË˜Q]\Ù]Ô™YŠNÂˆXÝœÙ]
–H‹™]Ö˜JNÂˆBˆYˆ
™YY\X\˜[˜Ù\ÊHÂˆXÝœÙ]
“™YY\X\˜[˜Ù\È‹YJNÂˆBˆÚ[™Ù\Ëœ]
XÜ›Ñ›Ü›T™Y‹Âˆ]NˆXÝˆJNÂŸB™[˜Ý[Ûˆ\]VJÂˆ˜Q]Kˆ˜Q]\Ù]Ô™Y‹ˆÚ[™Ù\Ëˆ™Y‚ŸJHÂˆYˆ
˜Q]HOOH[
HÂˆÛÛœÝ]\Ù]ÈH™Y‹™™]ÚY”™YŠ˜Q]\Ù]Ô™YŠNÂˆ˜Q]HHÜš]VQ]Q›ÜXÜ›Ù›Ü›J]\Ù]Ë™Ù]Ýš[™Ê
KÚ[™Ù\ÊNÂˆBˆÛÛœÝ˜Q]TÝ™X[HH™]ÈÝš[™ÔÝ™X[J˜Q]JNÂˆ˜Q]TÝ™X[K™XÝH™]ÈXÝ
™YŠNÂˆ˜Q]TÝ™X[K™XÝœÙ]Y“˜[YJ•\H‹‘[X™YYš[HŠNÂˆÚ[™Ù\Ëœ]
˜Q]\Ù]Ô™Y‹Âˆ]Nˆ˜Q]TÝ™X[BˆJNÂŸB˜\Þ[˜È[˜Ý[ÛˆÙ]™Y•X›J™Y’[™›Ë˜\ÙSÙ™œÙ]™]Ô™YœË™]Ö™Y‹Y™™\ŠHÂˆY™™\‹œ\Ú
ž™Y—ˆŠNÂˆÛÛœÝ[™^\ÈHÙ][™^\Ê™]Ô™YœÊNÂˆ][™^\ÔÜÚ][ÛˆHÂˆ›Üˆ
ÛÛœÝÂˆ™Y‹ˆ]BˆHÙˆ™]Ô™YœÊHÂˆYˆ
™Y‹›[HOOH[™^\ÖÚ[™^\ÔÜÚ][Û—JHÂˆY™™\‹œ\Ú
	Ú[™^\ÖÚ[™^\ÔÜÚ][Û—_H	Ú[™^\ÖÚ[™^\ÔÜÚ][Ûˆ
ÈW_W˜
NÂˆ[™^\ÔÜÚ][Ûˆ
ÏHŽÂˆBˆYˆ
]HOOH[
HÂˆY™™\‹œ\Ú
	Ø˜\ÙSÙ™œÙ]ÔÝš[™Ê
KœYÝ\
LŒŠ_H	ÓX]›Z[Š™Y‹™Ù[‹™™™ŠKÔÝš[™Ê
KœYÝ\
KŒŠ_H——˜
NÂˆ˜\ÙSÙ™œÙ]
ÏH]K›[™ÝÂˆH[ÙHÂˆY™™\‹œ\Ú
	ÓX]›Z[Š™Y‹™Ù[ˆ
ÈK™™™ŠKÔÝš[™Ê
KœYÝ\
KŒŠ_H——˜
NÂˆBˆBˆÛÛ\]RQÊ˜\ÙSÙ™œÙ]™Y’[™›Ë™]Ö™YŠNÂˆY™™\‹œ\Ú
˜Z[\—ˆŠNÂˆ]ØZ]Üš]QXÝ
™]Ö™Y‹Y™™\ŠNÂˆY™™\‹œ\Ú
—œÝ\™Y—ˆ‹˜\ÙSÙ™œÙ]ÔÝš[™Ê
K—‰IQSÑ—ˆŠNÂŸB™[˜Ý[ÛˆÙ][™^\Ê™]Ô™YœÊHÂˆÛÛœÝ[™^\ÈH×NÂˆ›Üˆ
ÛÛœÝÂˆ™Y‚ˆHÙˆ™]Ô™YœÊHÂˆYˆ
™Y‹›[HOOH[™^\Ë˜]
LŠH
È[™^\Ë˜]
LJJHÂˆ[™^\ÖÚ[™^\Ë›[™ÝHWH
ÏHNÂˆH[ÙHÂˆ[™^\Ëœ\Ú
™Y‹›[KJNÂˆBˆBˆ™]\›ˆ[™^\ÎÂŸB˜\Þ[˜È[˜Ý[ÛˆÙ]™Y”Ý™X[UX›J™Y’[™›Ë˜\ÙSÙ™œÙ]™]Ô™YœË™]Ö™Y‹Y™™\ŠHÂˆÛÛœÝ™Y•X›Q]HH×NÂˆ]X^Ù™œÙ]HÂˆ]X^Ù[ˆHÂˆ›Üˆ
ÛÛœÝÂˆ™Y‹ˆ]BˆHÙˆ™]Ô™YœÊHÂˆ]Ù[ŽÂˆX^Ù™œÙ]HX]›X^
X^Ù™œÙ]˜\ÙSÙ™œÙ]
NÂˆYˆ
]HOOH[
HÂˆÙ[ˆHX]›Z[Š™Y‹™Ù[‹™™™ŠNÂˆ™Y•X›Q]Kœ\Ú
ÌK˜\ÙSÙ™œÙ]Ù[—JNÂˆ˜\ÙSÙ™œÙ]
ÏH]K›[™ÝÂˆH[ÙHÂˆÙ[ˆHX]›Z[Š™Y‹™Ù[ˆ
ÈK™™™ŠNÂˆ™Y•X›Q]Kœ\Ú
ÌÙ[—JNÂˆBˆX^Ù[ˆHX]›X^
X^Ù[‹Ù[ŠNÂˆBˆ™]Ö™Y‹œÙ]
’[™^‹Ù][™^\Ê™]Ô™YœÊJNÂˆÛÛœÝÙ™œÙ]Ú^™HHÙ]Ú^™R[ž]\ÊX^Ù™œÙ]
NÂˆÛÛœÝX^Ù[”Ú^™HHÙ]Ú^™R[ž]\ÊX^Ù[ŠNÂˆÛÛœÝÚ^™\ÈHÌKÙ™œÙ]Ú^™KX^Ù[”Ú^™WNÂˆ™]Ö™Y‹œÙ]
•È‹Ú^™\ÊNÂˆÛÛ\]RQÊ˜\ÙSÙ™œÙ]™Y’[™›Ë™]Ö™YŠNÂˆÛÛœÝÝXÝÚ^™HHX]œÝ[T™XÚ\ÙJÚ^™\ÊNÂˆÛÛœÝ]HH™]ÈZ[\œ˜^JÝXÝÚ^™H
ˆ™Y•X›Q]K›[™Ý
NÂˆÛÛœÝÝ™X[HH™]ÈÝ™X[J]JNÂˆÝ™X[K™XÝH™]Ö™YŽÂˆ]Ù™œÙ]HÂˆ›Üˆ
ÛÛœÝÝ\KØš“Ù™œÙ]Ù[—HÙˆ™Y•X›Q]JHÂˆÙ™œÙ]HÜš]R[
\KÚ^™\ÖÌKÙ™œÙ]]JNÂˆÙ™œÙ]HÜš]R[
Øš“Ù™œÙ]Ú^™\ÖÌWKÙ™œÙ]]JNÂˆÙ™œÙ]HÜš]R[
Ù[‹Ú^™\ÖÌ—KÙ™œÙ]]JNÂˆBˆ]ØZ]Üš]SØš™XÝ
™Y’[™›Ë›™]Ô™Y‹Ý™X[KY™™\‹ßJNÂˆY™™\‹œ\Ú
œÝ\™Y—ˆ‹˜\ÙSÙ™œÙ]ÔÝš[™Ê
K—‰IQSÑ—ˆŠNÂŸB™[˜Ý[ÛˆÛÛ\]RQÊ˜\ÙSÙ™œÙ]™Y’[™›Ë™]Ö™YŠHÂˆYˆ
\œ˜^Kš\Ð\œ˜^J™Y’[™›Ë™š[RYÊH	‰ˆ™Y’[™›Ë™š[RYË›[™Ýˆ
HÂˆÛÛœÝYHHÛÛ\]SQJ˜\ÙSÙ™œÙ]™Y’[™›ÊNÂˆ™]Ö™Y‹œÙ]
’Q‹Þ™Y’[™›Ë™š[RYÖÌKYWJNÂˆBŸB™[˜Ý[ÛˆÙ]˜Z[\‘XÝ
™Y’[™›ËÚ[™Ù\Ë\ÙV™Y”Ý™X[JHÂˆÛÛœÝ™]Ö™YˆH™]ÈXÝ
[
NÂˆ™]Ö™Y‹œÙ]
”™]ˆ‹™Y’[™›ËœÝ\™YŠNÂˆÛÛœÝ™Y‘›Ü–™Y•X›HH™Y’[™›Ë›™]Ô™YŽÂˆYˆ
\ÙV™Y”Ý™X[JHÂˆÚ[™Ù\Ëœ]
™Y‘›Ü–™Y•X›KÂˆ]Nˆˆ‚ˆJNÂˆ™]Ö™Y‹œÙ]
”Ú^™H‹™Y‘›Ü–™Y•X›K›[H
ÈJNÂˆ™]Ö™Y‹œÙ]Y“˜[YJ•\H‹–™YˆŠNÂˆH[ÙHÂˆ™]Ö™Y‹œÙ]
”Ú^™H‹™Y‘›Ü–™Y•X›K›[JNÂˆBˆYˆ
™Y’[™›Ëœ›ÛÝ™YˆOOH[
HÂˆ™]Ö™Y‹œÙ]
”›ÛÝ‹™Y’[™›Ëœ›ÛÝ™YŠNÂˆBˆYˆ
™Y’[™›Ëš[™›Ô™YˆOOH[
HÂˆ™]Ö™Y‹œÙ]
’[™›È‹™Y’[™›Ëš[™›Ô™YŠNÂˆBˆYˆ
™Y’[™›Ë™[˜Üž\™YˆOOH[
HÂˆ™]Ö™Y‹œÙ]
‘[˜Üž\‹™Y’[™›Ë™[˜Üž\™YŠNÂˆBˆ™]\›ˆ™]Ö™YŽÂŸB˜\Þ[˜È[˜Ý[ÛˆÜš]PÚ[™Ù\ÊÚ[™Ù\Ë™Y‹Y™™\ˆH×JHÂˆÛÛœÝ™]Ô™YœÈH×NÂˆ›Üˆ
ÛÛœÝÜ™Y‹Âˆ]BˆWHÙˆÚ[™Ù\Ëš][\Ê
JHÂˆYˆ
]HOOH[\[Ùˆ]HOOHœÝš[™ÈŠHÂˆ™]Ô™YœËœ\Ú
Âˆ™Y‹ˆ]BˆJNÂˆÛÛ[YNÂˆBˆ]ØZ]Üš]SØš™XÝ
™Y‹]KY™™\‹™YŠNÂˆ™]Ô™YœËœ\Ú
Âˆ™Y‹ˆ]NˆY™™\‹š›Ú[ŠˆŠBˆJNÂˆY™™\‹›[™ÝHÂˆBˆ™]\›ˆ™]Ô™YœËœÛÜ

KŠHOˆKœ™Y‹›[HH‹œ™Y‹›[JNÂŸB˜\Þ[˜È[˜Ý[Ûˆ[˜Ü™[Y[[\]JÂˆÜšYÚ[˜[]Kˆ™Y’[™›ËˆÚ[™Ù\Ëˆ™YˆH[ˆ\Ö˜HH˜[ÙKˆ˜Q]\Ù]Ô™YˆH[ˆ\Ö˜Q]\Ù]Ñ[žHH˜[ÙKˆ™YY\X\˜[˜Ù\ËˆXÜ›Ñ›Ü›T™YˆH[ˆXÜ›Ñ›Ü›HH[ˆ˜Q]HH[ˆ\ÙV™Y”Ý™X[HH˜[ÙBŸJHÂˆ]ØZ]\]PXÜ›Ù›Ü›JÂˆ™Y‹ˆXÜ›Ñ›Ü›KˆXÜ›Ñ›Ü›T™Y‹ˆ\Ö˜Kˆ\Ö˜Q]\Ù]Ñ[žKˆ˜Q]\Ù]Ô™Y‹ˆ™YY\X\˜[˜Ù\ËˆÚ[™Ù\ÂˆJNÂˆYˆ
\Ö˜JHÂˆ\]VJÂˆ˜Q]Kˆ˜Q]\Ù]Ô™Y‹ˆÚ[™Ù\Ëˆ™Y‚ˆJNÂˆBˆÛÛœÝ™]Ö™YˆHÙ]˜Z[\‘XÝ
™Y’[™›ËÚ[™Ù\Ë\ÙV™Y”Ý™X[JNÂˆÛÛœÝY™™\ˆH×NÂˆÛÛœÝ™]Ô™YœÈH]ØZ]Üš]PÚ[™Ù\ÊÚ[™Ù\Ë™Y‹Y™™\ŠNÂˆ]˜\ÙSÙ™œÙ]HÜšYÚ[˜[]K›[™ÝÂˆÛÛœÝ\Ýž]HHÜšYÚ[˜[]K˜]
LJNÂˆYˆ
\Ýž]HOOHH	‰ˆ\Ýž]HOOH
HÂˆY™™\‹œ\Ú
—ˆŠNÂˆ˜\ÙSÙ™œÙ]
ÏHNÂˆBˆ›Üˆ
ÛÛœÝÂˆ]BˆHÙˆ™]Ô™YœÊHÂˆYˆ
]HOOH[
HÂˆY™™\‹œ\Ú
]JNÂˆBˆBˆ]ØZ]
\ÙV™Y”Ý™X[HÈÙ]™Y”Ý™X[UX›J™Y’[™›Ë˜\ÙSÙ™œÙ]™]Ô™YœË™]Ö™Y‹Y™™\ŠHˆÙ]™Y•X›J™Y’[™›Ë˜\ÙSÙ™œÙ]™]Ô™YœË™]Ö™Y‹Y™™\ŠJNÂˆÛÛœÝÝ[[™ÝHÜšYÚ[˜[]K›[™Ý
ÈX]œÝ[T™XÚ\ÙJY™™\‹›X\
ÝˆOˆÝ‹›[™Ý
JNÂˆÛÛœÝ\œ˜^HH™]ÈZ[\œ˜^JÝ[[™Ý
NÂˆ\œ˜^KœÙ]
ÜšYÚ[˜[]JNÂˆ]Ù™œÙ]HÜšYÚ[˜[]K›[™ÝÂˆ›Üˆ
ÛÛœÝÝˆÙˆY™™\ŠHÂˆÙ™œÙ]HÜš]TÝš[™ÊÝ‹Ù™œÙ]\œ˜^JNÂˆBˆ™]\›ˆ\œ˜^NÂŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÝÛÜšÙ\—ÜÝ™X[KšœÂ‚˜Û\ÜÈ•ÛÜšÙ\”Ý™X[HÂˆÛÛœÝXÝÜŠ\ÙÒ[™\ŠHÂˆ\Ë—Û\ÙÒ[™\ˆH\ÙÒ[™\ŽÂˆ\Ë—ØÛÛ[[™ÝH[Âˆ\Ë—Ù[™\]Y\Ý™XY\ˆH[Âˆ\Ë—Ü˜[™ÙT™\]Y\Ý™XY\œÈH×NÂˆBˆÙ][™XY\Š
HÂˆ\ÜÙ\
]\Ë—Ù[™\]Y\Ý™XY\‹”•ÛÜšÙ\”Ý™X[K™Ù][™XY\ˆØ[ˆÛ›H™HØ[YÛ˜ÙKˆŠNÂˆ\Ë—Ù[™\]Y\Ý™XY\ˆH™]È•ÛÜšÙ\”Ý™X[T™XY\Š\Ë—Û\ÙÒ[™\ŠNÂˆ™]\›ˆ\Ë—Ù[™\]Y\Ý™XY\ŽÂˆBˆÙ]˜[™ÙT™XY\Š™YÚ[‹[™
HÂˆÛÛœÝ™XY\ˆH™]È•ÛÜšÙ\”Ý™X[T˜[™ÙT™XY\Š™YÚ[‹[™\Ë—Û\ÙÒ[™\ŠNÂˆ\Ë—Ü˜[™ÙT™\]Y\Ý™XY\œËœ\Ú
™XY\ŠNÂˆ™]\›ˆ™XY\ŽÂˆBˆØ[˜Ù[[™\]Y\ÝÊ™X\ÛÛŠHÂˆ\Ë—Ù[™\]Y\Ý™XY\Ë˜Ø[˜Ù[
™X\ÛÛŠNÂˆ›Üˆ
ÛÛœÝ™XY\ˆÙˆ\Ë—Ü˜[™ÙT™\]Y\Ý™XY\œËœÛXÙJ
JHÂˆ™XY\‹˜Ø[˜Ù[
™X\ÛÛŠNÂˆBˆBŸB˜Û\ÜÈ•ÛÜšÙ\”Ý™X[T™XY\ˆÂˆÛÛœÝXÝÜŠ\ÙÒ[™\ŠHÂˆ\Ë—Û\ÙÒ[™\ˆH\ÙÒ[™\ŽÂˆ\Ë›Û”›ÙÜ™\ÜÈH[Âˆ\Ë—ØÛÛ[[™ÝH[Âˆ\Ë—Ú\Ô˜[™ÙTÝ\ÜYH˜[ÙNÂˆ\Ë—Ú\ÔÝ™X[Z[™ÔÝ\ÜYH˜[ÙNÂˆÛÛœÝ™XYX›TÝ™X[HH\Ë—Û\ÙÒ[™\‹œÙ[™Ú]Ý™X[J‘Ù]™XY\ˆŠNÂˆ\Ë—Ü™XY\ˆH™XYX›TÝ™X[K™Ù]™XY\Š
NÂˆ\Ë—ÚXY\œÔ™XYHH\Ë—Û\ÙÒ[™\‹œÙ[™Ú]›ÛZ\ÙJ”™XY\’XY\œÔ™XYHŠK[Š]HOˆÂˆ\Ë—Ú\ÔÝ™X[Z[™ÔÝ\ÜYH]Kš\ÔÝ™X[Z[™ÔÝ\ÜYÂˆ\Ë—Ú\Ô˜[™ÙTÝ\ÜYH]Kš\Ô˜[™ÙTÝ\ÜYÂˆ\Ë—ØÛÛ[[™ÝH]K˜ÛÛ[[™ÝÂˆJNÂˆBˆÙ]XY\œÔ™XYJ
HÂˆ™]\›ˆ\Ë—ÚXY\œÔ™XYNÂˆBˆÙ]ÛÛ[[™Ý

HÂˆ™]\›ˆ\Ë—ØÛÛ[[™ÝÂˆBˆÙ]\ÔÝ™X[Z[™ÔÝ\ÜY

HÂˆ™]\›ˆ\Ë—Ú\ÔÝ™X[Z[™ÔÝ\ÜYÂˆBˆÙ]\Ô˜[™ÙTÝ\ÜY

HÂˆ™]\›ˆ\Ë—Ú\Ô˜[™ÙTÝ\ÜYÂˆBˆ\Þ[˜È™XY

HÂˆÛÛœÝÂˆ˜[YKˆÛ™BˆHH]ØZ]\Ë—Ü™XY\‹œ™XY

NÂˆYˆ
Û™JHÂˆ™]\›ˆÂˆ˜[YNˆ[™Yš[™YˆÛ™NˆYBˆNÂˆBˆ™]\›ˆÂˆ˜[YNˆ˜[YK˜Y™™\‹ˆÛ™Nˆ˜[ÙBˆNÂˆBˆØ[˜Ù[
™X\ÛÛŠHÂˆ\Ë—Ü™XY\‹˜Ø[˜Ù[
™X\ÛÛŠNÂˆBŸB˜Û\ÜÈ•ÛÜšÙ\”Ý™X[T˜[™ÙT™XY\ˆÂˆÛÛœÝXÝÜŠ™YÚ[‹[™\ÙÒ[™\ŠHÂˆ\Ë—Û\ÙÒ[™\ˆH\ÙÒ[™\ŽÂˆ\Ë›Û”›ÙÜ™\ÜÈH[ÂˆÛÛœÝ™XYX›TÝ™X[HH\Ë—Û\ÙÒ[™\‹œÙ[™Ú]Ý™X[J‘Ù]˜[™ÙT™XY\ˆ‹Âˆ™YÚ[‹ˆ[™ˆJNÂˆ\Ë—Ü™XY\ˆH™XYX›TÝ™X[K™Ù]™XY\Š
NÂˆBˆÙ]\ÔÝ™X[Z[™ÔÝ\ÜY

HÂˆ™]\›ˆ˜[ÙNÂˆBˆ\Þ[˜È™XY

HÂˆÛÛœÝÂˆ˜[YKˆÛ™BˆHH]ØZ]\Ë—Ü™XY\‹œ™XY

NÂˆYˆ
Û™JHÂˆ™]\›ˆÂˆ˜[YNˆ[™Yš[™YˆÛ™NˆYBˆNÂˆBˆ™]\›ˆÂˆ˜[YNˆ˜[YK˜Y™™\‹ˆÛ™Nˆ˜[ÙBˆNÂˆBˆØ[˜Ù[
™X\ÛÛŠHÂˆ\Ë—Ü™XY\‹˜Ø[˜Ù[
™X\ÛÛŠNÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËØÛÜ™KÝÛÜšÙ\‹šœÂ‚‚‚‚‚‚‚‚‚‚˜Û\ÜÈÛÜšÙ\•\ÚÈÂˆÛÛœÝXÝÜŠ˜[YJHÂˆ\Ë›˜[YHH˜[YNÂˆ\Ë\›Z[˜]YH˜[ÙNÂˆ\Ë—ØØ\Xš[]HH›ÛZ\ÙKÚ]™\ÛÛ™\œÊ
NÂˆBˆÙ]š[š\ÚY

HÂˆ™]\›ˆ\Ë—ØØ\Xš[]Kœ›ÛZ\ÙNÂˆBˆš[š\Ú

HÂˆ\Ë—ØØ\Xš[]Kœ™\ÛÛ™J
NÂˆBˆ\›Z[˜]J
HÂˆ\Ë\›Z[˜]YHYNÂˆBˆ[œÝ\™S›Ý\›Z[˜]Y

HÂˆYˆ
\Ë\›Z[˜]Y
HÂˆ›ÝÈ™]È\œ›ÜŠ•ÛÜšÙ\ˆ\ÚÈØ\È\›Z[˜]YŠNÂˆBˆBŸB˜Û\ÜÈÛÜšÙ\“Y\ÜØYÙR[™\ˆÂˆÝ]XÈÂˆYˆ
\[ÙˆÚ[™ÝÈOOH[™Yš[™Yˆ	‰ˆZ\Ó›ÙR”È	‰ˆ\[ÙˆÙ[ˆOOH[™Yš[™Yˆ	‰ˆ\[ÙˆÙ[‹œÜÝY\ÜØYÙHOOH™[˜Ý[Ûˆˆ	‰ˆ›Û›Y\ÜØYÙHˆ[ˆÙ[ŠHÂˆ\Ëš[š]X[^™Qœ›ÛTÜ
Ù[ŠNÂˆBˆBˆÝ]XÈÙ]\
[™\‹Ü
HÂˆ]\ÝY\ÜØYÙT›ØÙ\ÜÙYH˜[ÙNÂˆ[™\‹›ÛŠ\Ý‹]HOˆÂˆYˆ
\ÝY\ÜØYÙT›ØÙ\ÜÙY
HÂˆ™]\›ŽÂˆBˆ\ÝY\ÜØYÙT›ØÙ\ÜÙYHYNÂˆ[™\‹œÙ[™
\Ý‹]H[œÝ[˜Ù[ÙˆZ[\œ˜^JNÂˆJNÂˆ[™\‹›ÛŠ˜ÛÛ™šYÝ\™H‹]HOˆÂˆÙ]™\˜›ÜÚ]S]™[
]K™\˜›ÜÚ]JNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]ØÔ™\]Y\Ý‹]HOˆ\Ë˜Ü™X]QØÝ[Y[[™\Š]KÜ
JNÂˆBˆÝ]XÈÜ™X]QØÝ[Y[[™\ŠØÔ\˜[\ËÜ
HÂˆ]“X[˜YÙ\ŽÂˆ]\›Z[˜]YH˜[ÙNÂˆ]Ø[˜Ù[œÈH[ÂˆÛÛœÝÛÜšÙ\•\ÚÜÈH™]ÈÙ]

NÂˆÛÛœÝ™\˜›ÜÚ]HHÙ]™\˜›ÜÚ]S]™[

NÂˆÛÛœÝÂˆØÒYˆ\U™\œÚ[Û‚ˆHHØÔ\˜[\ÎÂˆÛÛœÝÛÜšÙ\•™\œÚ[ÛˆHKŒMHŽÂˆYˆ
\U™\œÚ[ÛˆOOHÛÜšÙ\•™\œÚ[ÛŠHÂˆ›ÝÈ™]È\œ›ÜŠHTH™\œÚ[Ûˆ‰Ø\U™\œÚ[ÛŸHˆÙ\È›ÝX]Ú
ÈHÛÜšÙ\ˆ™\œÚ[Ûˆ‰ÝÛÜšÙ\•™\œÚ[ÛŸH‹˜
NÂˆBˆÛÛœÝZ[\ÙÈH
\K›Ü
HOˆH	Ý\_Kœ›ÝÝ\WÛÛZ[œÈ[™^XÝY[[Y\˜X›H›Ü\H
È‰Ü›ÜH‹\Èœ™XZÚ[™ÈK™Ëˆ›Ü‹‹‹š[—]\˜][ÛˆÙˆ	Ý\_\Ë˜Âˆ›Üˆ
ÛÛœÝ›Ü[ˆßJHÂˆ›ÝÈ™]È\œ›ÜŠZ[\ÙÊ“Øš™XÝ‹›Ü
JNÂˆBˆ›Üˆ
ÛÛœÝ›Ü[ˆ×JHÂˆ›ÝÈ™]È\œ›ÜŠZ[\ÙÊ\œ˜^H‹›Ü
JNÂˆBˆÛÛœÝÛÜšÙ\’[™\“˜[YHHØÒY
È—ÝÛÜšÙ\ˆŽÂˆ][™\ˆH™]ÈY\ÜØYÙR[™\ŠÛÜšÙ\’[™\“˜[YKØÒYÜ
NÂˆ[˜Ý[Ûˆ[œÝ\™S›Ý\›Z[˜]Y

HÂˆYˆ
\›Z[˜]Y
HÂˆ›ÝÈ™]È\œ›ÜŠ•ÛÜšÙ\ˆØ\È\›Z[˜]YŠNÂˆBˆBˆ[˜Ý[ÛˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊHÂˆÛÜšÙ\•\ÚÜË˜Y
\ÚÊNÂˆBˆ[˜Ý[Ûˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊHÂˆ\ÚË™š[š\Ú

NÂˆÛÜšÙ\•\ÚÜË™[]J\ÚÊNÂˆBˆ\Þ[˜È[˜Ý[ÛˆØYØÝ[Y[
™XÛÝ™\žS[ÙJHÂˆ]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊ˜ÚXÚÒXY\ˆŠNÂˆ]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊœ\œÙTÝ\™YˆŠNÂˆ]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊœ\œÙH‹Ü™XÛÝ™\žS[ÙWJNÂˆ]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊ˜ÚXÚÑš\œÝYÙH‹Ü™XÛÝ™\žS[ÙWJNÂˆ]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊ˜ÚXÚÓ\ÝYÙH‹Ü™XÛÝ™\žS[ÙWJNÂˆÛÛœÝ\Ô\™V˜HH]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊš\Ô\™V˜HŠNÂˆYˆ
\Ô\™V˜JHÂˆÛÛœÝ\ÚÈH™]ÈÛÜšÙ\•\ÚÊ›ØY˜T™\ÛÝ\˜Ù\ÈŠNÂˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊNÂˆ]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊ›ØY˜T™\ÛÝ\˜Ù\È‹Ú[™\‹\Ú×JNÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆBˆÛÛœÝÛ[TYÙ\Ëš[™Ù\œš[×HH]ØZ]›ÛZ\ÙK˜[
Ü“X[˜YÙ\‹™[œÝ\™QØÊ›[TYÙ\ÈŠK“X[˜YÙ\‹™[œÝ\™QØÊ™š[™Ù\œš[ÈŠWJNÂˆÛÛœÝ[›Ü–˜HH\Ô\™V˜HÈ]ØZ]“X[˜YÙ\‹™[œÝ\™QØÊš[›Ü–˜HŠHˆ[Âˆ™]\›ˆÂˆ[TYÙ\Ëˆš[™Ù\œš[Ëˆ[›Ü–˜BˆNÂˆBˆ\Þ[˜È[˜Ý[ÛˆÙ]“X[˜YÙ\ŠÂˆ]Kˆ\ÜÝÛÜ™ˆ\ØX›P]]Ñ™]Úˆ˜[™ÙPÚ[šÔÚ^™Kˆ[™ÝˆØÐ˜\ÙU\›ˆ[˜X›V˜Kˆ]˜[X]Ü“Ü[ÛœÂˆJHÂˆÛÛœÝ“X[˜YÙ\\™ÜÈHÂˆÛÝ\˜ÙNˆ[ˆ\ØX›P]]Ñ™]ÚˆØÐ˜\ÙU\›ˆØÒYˆ[˜X›V˜Kˆ]˜[X]Ü“Ü[ÛœËˆ[™\‹ˆ[™Ýˆ\ÜÝÛÜ™ˆ˜[™ÙPÚ[šÔÚ^™BˆNÂˆYˆ
]JHÂˆ“X[˜YÙ\\™ÜËœÛÝ\˜ÙHH]NÂˆ™]\›ˆ™]ÈØØ[“X[˜YÙ\Š“X[˜YÙ\\™ÜÊNÂˆBˆÛÛœÝ”Ý™X[HH™]È•ÛÜšÙ\”Ý™X[J[™\ŠKˆ[™\]Y\ÝH”Ý™X[K™Ù][™XY\Š
NÂˆÛÛœÝ“X[˜YÙ\Ø\Xš[]HH›ÛZ\ÙKÚ]™\ÛÛ™\œÊ
NÂˆ]™]Ô“X[˜YÙ\‹ˆØXÚYÚ[šÜÈH×KˆØYYHÂˆ[™\]Y\ÝšXY\œÔ™XYK[Š[˜Ý[Ûˆ

HÂˆYˆ
Y[™\]Y\Ýš\Ô˜[™ÙTÝ\ÜY
HÂˆ™]\›ŽÂˆBˆ“X[˜YÙ\\™ÜËœÛÝ\˜ÙHH”Ý™X[NÂˆ“X[˜YÙ\\™ÜË›[™ÝH[™\]Y\Ý˜ÛÛ[[™ÝÂˆ“X[˜YÙ\\™ÜË™\ØX›P]]Ñ™]ÚH[™\]Y\Ýš\ÔÝ™X[Z[™ÔÝ\ÜYÂˆ™]Ô“X[˜YÙ\ˆH™]È™]ÛÜšÔ“X[˜YÙ\Š“X[˜YÙ\\™ÜÊNÂˆ›Üˆ
ÛÛœÝÚ[šÈÙˆØXÚYÚ[šÜÊHÂˆ™]Ô“X[˜YÙ\‹œÙ[™›ÙÜ™\ÜÚ]™Q]JÚ[šÊNÂˆBˆØXÚYÚ[šÜÈH×NÂˆ“X[˜YÙ\Ø\Xš[]Kœ™\ÛÛ™J™]Ô“X[˜YÙ\ŠNÂˆØ[˜Ù[œÈH[ÂˆJK˜Ø]Ú
[˜Ý[Ûˆ
™X\ÛÛŠHÂˆ“X[˜YÙ\Ø\Xš[]Kœ™Z™XÝ
™X\ÛÛŠNÂˆØ[˜Ù[œÈH[ÂˆJNÂˆ™]È›ÛZ\ÙJ[˜Ý[Ûˆ
™\ÛÛ™K™Z™XÝ
HÂˆÛÛœÝ™XYÚ[šÈH[˜Ý[Ûˆ
Âˆ˜[YKˆÛ™BˆJHÂˆžHÂˆ[œÝ\™S›Ý\›Z[˜]Y

NÂˆYˆ
Û™JHÂˆYˆ
[™]Ô“X[˜YÙ\ŠHÂˆÛÛœÝ‘š[HH\œ˜^PY™™\œÕÐž]\ÊØXÚYÚ[šÜÊNÂˆØXÚYÚ[šÜÈH×NÂˆYˆ
[™Ý	‰ˆ‘š[K›[™ÝOOH[™Ý
HÂˆØ\›Šœ™\ÜY[™Ý\ÈY™™\™[œ›ÛHXÝX[ŠNÂˆBˆ“X[˜YÙ\\™ÜËœÛÝ\˜ÙHH‘š[NÂˆ™]Ô“X[˜YÙ\ˆH™]ÈØØ[“X[˜YÙ\Š“X[˜YÙ\\™ÜÊNÂˆ“X[˜YÙ\Ø\Xš[]Kœ™\ÛÛ™J™]Ô“X[˜YÙ\ŠNÂˆBˆØ[˜Ù[œÈH[Âˆ™]\›ŽÂˆBˆØYY
ÏH˜[YK˜ž]S[™ÝÂˆYˆ
Y[™\]Y\Ýš\ÔÝ™X[Z[™ÔÝ\ÜY
HÂˆ[™\‹œÙ[™
‘ØÔ›ÙÜ™\ÜÈ‹ÂˆØYYˆÝ[ˆX]›X^
ØYY[™\]Y\Ý˜ÛÛ[[™Ý
BˆJNÂˆBˆYˆ
™]Ô“X[˜YÙ\ŠHÂˆ™]Ô“X[˜YÙ\‹œÙ[™›ÙÜ™\ÜÚ]™Q]J˜[YJNÂˆH[ÙHÂˆØXÚYÚ[šÜËœ\Ú
˜[YJNÂˆBˆ[™\]Y\Ýœ™XY

K[Š™XYÚ[šË™Z™XÝ
NÂˆHØ]Ú
JHÂˆ™Z™XÝ
JNÂˆBˆNÂˆ[™\]Y\Ýœ™XY

K[Š™XYÚ[šË™Z™XÝ
NÂˆJK˜Ø]Ú
[˜Ý[Ûˆ
JHÂˆ“X[˜YÙ\Ø\Xš[]Kœ™Z™XÝ
JNÂˆØ[˜Ù[œÈH[ÂˆJNÂˆØ[˜Ù[œÈH™X\ÛÛˆOˆÂˆ”Ý™X[K˜Ø[˜Ù[[™\]Y\ÝÊ™X\ÛÛŠNÂˆNÂˆ™]\›ˆ“X[˜YÙ\Ø\Xš[]Kœ›ÛZ\ÙNÂˆBˆ[˜Ý[ÛˆÙ]\ØÊ]JHÂˆ[˜Ý[ÛˆÛ”ÝXØÙ\ÜÊØÊHÂˆ[œÝ\™S›Ý\›Z[˜]Y

NÂˆ[™\‹œÙ[™
‘Ù]ØÈ‹Âˆ’[™›ÎˆØÂˆJNÂˆBˆ[˜Ý[ÛˆÛ‘˜Z[\™J^
HÂˆ[œÝ\™S›Ý\›Z[˜]Y

NÂˆYˆ
^[œÝ[˜Ù[Ùˆ\ÜÝÛÜ™^Ù\[ÛŠHÂˆÛÛœÝ\ÚÈH™]ÈÛÜšÙ\•\ÚÊ\ÜÝÛÜ™^Ù\[ÛŽˆ™\ÜÛœÙH	Ù^˜ÛÙ_X
NÂˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊNÂˆ[™\‹œÙ[™Ú]›ÛZ\ÙJ”\ÜÝÛÜ™™\]Y\Ý‹^
K[Š[˜Ý[Ûˆ
Âˆ\ÜÝÛÜ™ˆJHÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆ“X[˜YÙ\‹\]T\ÜÝÛÜ™
\ÜÝÛÜ™
NÂˆ“X[˜YÙ\”™XYJ
NÂˆJK˜Ø]Ú
[˜Ý[Ûˆ

HÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆ[™\‹œÙ[™
‘ØÑ^Ù\[Ûˆ‹^
NÂˆJNÂˆH[ÙHÂˆ[™\‹œÙ[™
‘ØÑ^Ù\[Ûˆ‹Ü˜\™X\ÛÛŠ^
JNÂˆBˆBˆ[˜Ý[Ûˆ“X[˜YÙ\”™XYJ
HÂˆ[œÝ\™S›Ý\›Z[˜]Y

NÂˆØYØÝ[Y[
˜[ÙJK[ŠÛ”ÝXØÙ\ÜË[˜Ý[Ûˆ
™X\ÛÛŠHÂˆ[œÝ\™S›Ý\›Z[˜]Y

NÂˆYˆ
J™X\ÛÛˆ[œÝ[˜Ù[Ùˆ™Y”\œÙQ^Ù\[ÛŠJHÂˆÛ‘˜Z[\™J™X\ÛÛŠNÂˆ™]\›ŽÂˆBˆ“X[˜YÙ\‹œ™\]Y\ÝØYYÝ™X[J
K[Š[˜Ý[Ûˆ

HÂˆ[œÝ\™S›Ý\›Z[˜]Y

NÂˆØYØÝ[Y[
YJK[ŠÛ”ÝXØÙ\ÜËÛ‘˜Z[\™JNÂˆJNÂˆJNÂˆBˆ[œÝ\™S›Ý\›Z[˜]Y

NÂˆÙ]“X[˜YÙ\Š]JK[Š[˜Ý[Ûˆ
™]Ô“X[˜YÙ\ŠHÂˆYˆ
\›Z[˜]Y
HÂˆ™]Ô“X[˜YÙ\‹\›Z[˜]J™]ÈX›Ü^Ù\[ÛŠ•ÛÜšÙ\ˆØ\È\›Z[˜]YˆŠJNÂˆ›ÝÈ™]È\œ›ÜŠ•ÛÜšÙ\ˆØ\È\›Z[˜]YŠNÂˆBˆ“X[˜YÙ\ˆH™]Ô“X[˜YÙ\ŽÂˆ“X[˜YÙ\‹œ™\]Y\ÝØYYÝ™X[JYJK[ŠÝ™X[HOˆÂˆ[™\‹œÙ[™
‘]SØYY‹Âˆ[™ÝˆÝ™X[K˜ž]\Ë˜ž]S[™ÝˆJNÂˆJNÂˆJK[Š“X[˜YÙ\”™XYKÛ‘˜Z[\™JNÂˆBˆ[™\‹›ÛŠ‘Ù]YÙH‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™Ù]YÙJ]KœYÙR[™^
K[Š[˜Ý[Ûˆ
YÙJHÂˆ™]\›ˆ›ÛZ\ÙK˜[
Ü“X[˜YÙ\‹™[œÝ\™JYÙKœ›Ý]HŠK“X[˜YÙ\‹™[œÝ\™JYÙKœ™YˆŠK“X[˜YÙ\‹™[œÝ\™JYÙK\Ù\•[š]ŠK“X[˜YÙ\‹™[œÝ\™JYÙKšY]ÈŠWJK[Š[˜Ý[Ûˆ
Ü›Ý]K™Y‹\Ù\•[š]šY]×JHÂˆ™]\›ˆÂˆ›Ý]Kˆ™Y‹ˆ™Y”ÝŽˆ™YËÔÝš[™Ê
HÏÈ[ˆ\Ù\•[š]ˆšY]ÂˆNÂˆJNÂˆJNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]YÙR[™^‹[˜Ý[Ûˆ
]JHÂˆÛÛœÝYÙT™YˆH™Y‹™Ù]
]K›[K]K™Ù[ŠNÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ™Ù]YÙR[™^‹ÜYÙT™Y—JNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]\Ý[˜][ÛœÈ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ™\Ý[˜][ÛœÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]\Ý[˜][Ûˆ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ™Ù]\Ý[˜][Ûˆ‹Ù]KšYJNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]YÙSX™[È‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊœYÙSX™[ÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]YÙS^[Ý]‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊœYÙS^[Ý]ŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]YÙS[ÙH‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊœYÙS[ÙHŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]šY]Ù\”™Y™\™[˜Ù\È‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊšY]Ù\”™Y™\™[˜Ù\ÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]Ü[XÝ[Ûˆ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ›Ü[XÝ[ÛˆŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]]XÚY[È‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ˜]XÚY[ÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]ØÒ”ÐXÝ[ÛœÈ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊšœÐXÝ[ÛœÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]YÙR”ÐXÝ[ÛœÈ‹[˜Ý[Ûˆ
ÂˆYÙR[™^ˆJHÂˆ™]\›ˆ“X[˜YÙ\‹™Ù]YÙJYÙR[™^
K[ŠYÙHOˆ“X[˜YÙ\‹™[œÝ\™JYÙKšœÐXÝ[ÛœÈŠJNÂˆJNÂˆ[™\‹›ÛŠ‘Ù][››Ý][ÛœÐžU\H‹\Þ[˜È[˜Ý[Ûˆ
Âˆ\\ËˆYÙR[™^\ÕÔÚÚ\ˆJHÂˆÛÛœÝÛ[TYÙ\Ë[››Ý][Û‘ÛØ˜[×HH]ØZ]›ÛZ\ÙK˜[
Ü“X[˜YÙ\‹™[œÝ\™QØÊ›[TYÙ\ÈŠK“X[˜YÙ\‹™[œÝ\™QØÊ˜[››Ý][Û‘ÛØ˜[ÈŠWJNÂˆYˆ
X[››Ý][Û‘ÛØ˜[ÊHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝYÙT›ÛZ\Ù\ÈH×NÂˆÛÛœÝ[››Ý][Û”›ÛZ\Ù\ÈH×NÂˆ]\ÚÈH[ÂˆžHÂˆ›Üˆ
]HHZHH[TYÙ\ÎÈHZNÈJÊÊHÂˆYˆ
YÙR[™^\ÕÔÚÚ\Ëš\ÊJJHÂˆÛÛ[YNÂˆBˆYˆ
]\ÚÊHÂˆ\ÚÈH™]ÈÛÜšÙ\•\ÚÊ‘Ù][››Ý][ÛœÐžU\HŠNÂˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊNÂˆBˆYÙT›ÛZ\Ù\Ëœ\Ú
“X[˜YÙ\‹™Ù]YÙJJK[Š\Þ[˜ÈYÙHOˆÂˆYˆ
\YÙJHÂˆ™]\›ˆ×NÂˆBˆ™]\›ˆYÙK˜ÛÛXÝ[››Ý][ÛœÐžU\J[™\‹\ÚË\\Ë[››Ý][Û”›ÛZ\Ù\Ë[››Ý][Û‘ÛØ˜[ÊH×NÂˆJJNÂˆBˆ]ØZ]›ÛZ\ÙK˜[
YÙT›ÛZ\Ù\ÊNÂˆÛÛœÝ[››Ý][ÛœÈH]ØZ]›ÛZ\ÙK˜[
[››Ý][Û”›ÛZ\Ù\ÊNÂˆ™]\›ˆ[››Ý][ÛœË™š[\ŠHOˆHXJNÂˆHš[˜[HÂˆYˆ
\ÚÊHÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆBˆBˆJNÂˆ[™\‹›ÛŠ‘Ù]Ý][™H‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ™ØÝ[Y[Ý][™HŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]Ü[Û˜[ÛÛ[ÛÛ™šYÈ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ›Ü[Û˜[ÛÛ[ÛÛ™šYÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]\›Z\ÜÚ[ÛœÈ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊœ\›Z\ÜÚ[ÛœÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]Y]Y]H‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ›ÛZ\ÙK˜[
Ü“X[˜YÙ\‹™[œÝ\™QØÊ™ØÝ[Y[[™›ÈŠK“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ›Y]Y]HŠWJNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]X\šÒ[™›È‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ›X\šÒ[™›ÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]]H‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹œ™\]Y\ÝØYYÝ™X[J
K[ŠÝ™X[HOˆÝ™X[K˜ž]\ÊNÂˆJNÂˆ[™\‹›ÛŠ‘Ù][››Ý][ÛœÈ‹[˜Ý[Ûˆ
ÂˆYÙR[™^ˆ[[ˆJHÂˆ™]\›ˆ“X[˜YÙ\‹™Ù]YÙJYÙR[™^
K[Š[˜Ý[Ûˆ
YÙJHÂˆÛÛœÝ\ÚÈH™]ÈÛÜšÙ\•\ÚÊÙ][››Ý][ÛœÎˆYÙH	ÜYÙR[™^X
NÂˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊNÂˆ™]\›ˆYÙK™Ù][››Ý][ÛœÑ]J[™\‹\ÚË[[
K[Š]HOˆÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆ™]\›ˆ]NÂˆK™X\ÛÛˆOˆÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆ›ÝÈ™X\ÛÛŽÂˆJNÂˆJNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]šY[Øš™XÝÈ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™QØÊ™šY[Øš™XÝÈŠK[ŠšY[Øš™XÝÈOˆšY[Øš™XÝÏË˜[šY[È[
NÂˆJNÂˆ[™\‹›ÛŠ’\Ò”ÐXÝ[ÛœÈ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™QØÊš\Ò”ÐXÝ[ÛœÈŠNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]Ø[Ý[][Û“Ü™\’YÈ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™[œÝ\™QØÊ˜Ø[Ý[][Û“Ü™\’YÈŠNÂˆJNÂˆ[™\‹›ÛŠ”Ø]™QØÝ[Y[‹\Þ[˜È[˜Ý[Ûˆ
Âˆ\Ô\™V˜Kˆ[TYÙ\Ëˆ[››Ý][Û”ÝÜ˜YÙKˆš[[˜[YBˆJHÂˆÛÛœÝÛØ˜[›ÛZ\Ù\ÈHÜ“X[˜YÙ\‹œ™\]Y\ÝØYYÝ™X[J
K“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ˜XÜ›Ñ›Ü›HŠK“X[˜YÙ\‹™[œÝ\™PØ][ÙÊ˜XÜ›Ñ›Ü›T™YˆŠK“X[˜YÙ\‹™[œÝ\™QØÊœÝ\™YˆŠK“X[˜YÙ\‹™[œÝ\™QØÊž™YˆŠK“X[˜YÙ\‹™[œÝ\™QØÊ›[™X\š^˜][ÛˆŠK“X[˜YÙ\‹™[œÝ\™PØ][ÙÊœÝXÝ™YT›ÛÝŠWNÂˆÛÛœÝÚ[™Ù\ÈH™]È™Y”Ù]ØXÚJ
NÂˆÛÛœÝ›ÛZ\Ù\ÈH×NÂˆÛÛœÝ™]Ð[››Ý][ÛœÐžTYÙHHZ\Ô\™V˜HÈÙ]™]Ð[››Ý][ÛœÓX\
[››Ý][Û”ÝÜ˜YÙJHˆ[ÂˆÛÛœÝÜÝ™X[KXÜ›Ñ›Ü›KXÜ›Ñ›Ü›T™Y‹Ý\™Y‹™Y‹[™X\š^˜][Û‹ÜÝXÝ™YT›ÛÝHH]ØZ]›ÛZ\ÙK˜[
ÛØ˜[›ÛZ\Ù\ÊNÂˆÛÛœÝØ][ÙÔ™YˆH™Y‹˜Z[\‹™Ù]˜]Ê”›ÛÝŠH[Âˆ]ÝXÝ™YT›ÛÝÂˆYˆ
™]Ð[››Ý][ÛœÐžTYÙJHÂˆYˆ
WÜÝXÝ™YT›ÛÝ
HÂˆYˆ
]ØZ]ÝXÝ™YT›ÛÝ˜Ø[Ü™X]TÝXÝ\™U™YJÂˆØ][ÙÔ™Y‹ˆ“X[˜YÙ\‹ˆ™]Ð[››Ý][ÛœÐžTYÙBˆJJHÂˆÝXÝ™YT›ÛÝH[ÂˆBˆH[ÙHYˆ
]ØZ]ÜÝXÝ™YT›ÛÝ˜Ø[•\]TÝXÝ™YJÂˆ“X[˜YÙ\‹ˆ™]Ð[››Ý][ÛœÐžTYÙBˆJJHÂˆÝXÝ™YT›ÛÝHÜÝXÝ™YT›ÛÝÂˆBˆÛÛœÝ[XYÙT›ÛZ\Ù\ÈH[››Ý][Û‘˜XÝÜžK™Ù[™\˜]R[XYÙ\Ê[››Ý][Û”ÝÜ˜YÙK˜[Y\Ê
K™Y‹“X[˜YÙ\‹™]˜[X]Ü“Ü[ÛœËš\ÓÙ™œØÜ™Y[Ø[˜\ÔÝ\ÜY
NÂˆÛÛœÝ™]Ð[››Ý][Û”›ÛZ\Ù\ÈHÝXÝ™YT›ÛÝOOH[™Yš[™YÈ›ÛZ\Ù\Èˆ×NÂˆ›Üˆ
ÛÛœÝÜYÙR[™^[››Ý][Ûœ×HÙˆ™]Ð[››Ý][ÛœÐžTYÙJHÂˆ™]Ð[››Ý][Û”›ÛZ\Ù\Ëœ\Ú
“X[˜YÙ\‹™Ù]YÙJYÙR[™^
K[ŠYÙHOˆÂˆÛÛœÝ\ÚÈH™]ÈÛÜšÙ\•\ÚÊØ]™H
Y]ÜŠNˆYÙH	ÜYÙR[™^X
NÂˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊNÂˆ™]\›ˆYÙKœØ]™S™]Ð[››Ý][ÛœÊ[™\‹\ÚË[››Ý][ÛœË[XYÙT›ÛZ\Ù\ËÚ[™Ù\ÊK™š[˜[J[˜Ý[Ûˆ

HÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆJNÂˆJJNÂˆBˆYˆ
ÝXÝ™YT›ÛÝOOH[
HÂˆ›ÛZ\Ù\Ëœ\Ú
›ÛZ\ÙK˜[
™]Ð[››Ý][Û”›ÛZ\Ù\ÊK[Š\Þ[˜È

HOˆÂˆ]ØZ]ÝXÝ™YT›ÛÝ˜Ü™X]TÝXÝ\™U™YJÂˆ™]Ð[››Ý][ÛœÐžTYÙKˆ™Y‹ˆØ][ÙÔ™Y‹ˆ“X[˜YÙ\‹ˆÚ[™Ù\ÂˆJNÂˆJJNÂˆH[ÙHYˆ
ÝXÝ™YT›ÛÝ
HÂˆ›ÛZ\Ù\Ëœ\Ú
›ÛZ\ÙK˜[
™]Ð[››Ý][Û”›ÛZ\Ù\ÊK[Š\Þ[˜È

HOˆÂˆ]ØZ]ÝXÝ™YT›ÛÝ\]TÝXÝ\™U™YJÂˆ™]Ð[››Ý][ÛœÐžTYÙKˆ“X[˜YÙ\‹ˆÚ[™Ù\ÂˆJNÂˆJJNÂˆBˆBˆYˆ
\Ô\™V˜JHÂˆ›ÛZ\Ù\Ëœ\Ú
“X[˜YÙ\‹™[œÝ\™QØÊœÙ\šX[^™V˜Q]H‹Ø[››Ý][Û”ÝÜ˜YÙWJJNÂˆH[ÙHÂˆ›Üˆ
]YÙR[™^HÈYÙR[™^[TYÙ\ÎÈYÙR[™^
ÊÊHÂˆ›ÛZ\Ù\Ëœ\Ú
“X[˜YÙ\‹™Ù]YÙJYÙR[™^
K[Š[˜Ý[Ûˆ
YÙJHÂˆÛÛœÝ\ÚÈH™]ÈÛÜšÙ\•\ÚÊØ]™NˆYÙH	ÜYÙR[™^X
NÂˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊNÂˆ™]\›ˆYÙKœØ]™J[™\‹\ÚË[››Ý][Û”ÝÜ˜YÙKÚ[™Ù\ÊK™š[˜[J[˜Ý[Ûˆ

HÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆJNÂˆJJNÂˆBˆBˆÛÛœÝ™YœÈH]ØZ]›ÛZ\ÙK˜[
›ÛZ\Ù\ÊNÂˆ]˜Q]HH[ÂˆYˆ
\Ô\™V˜JHÂˆ˜Q]HH™YœÖÌNÂˆYˆ
^˜Q]JHÂˆ™]\›ˆÝ™X[K˜ž]\ÎÂˆBˆH[ÙHYˆ
Ú[™Ù\ËœÚ^™HOOH
HÂˆ™]\›ˆÝ™X[K˜ž]\ÎÂˆBˆÛÛœÝ™YY\X\˜[˜Ù\ÈHXÜ›Ñ›Ü›T™Yˆ	‰ˆXÜ›Ñ›Ü›H[œÝ[˜Ù[ÙˆXÝ	‰ˆÚ[™Ù\Ë˜[Y\Ê
KœÛÛYJ™YˆOˆ™Y‹›™YY\X\˜[˜Ù\ÊNÂˆÛÛœÝ˜HHXÜ›Ñ›Ü›H[œÝ[˜Ù[ÙˆXÝ	‰ˆXÜ›Ñ›Ü›K™Ù]
–HŠH[Âˆ]˜Q]\Ù]Ô™YˆH[Âˆ]\Ö˜Q]\Ù]Ñ[žHH˜[ÙNÂˆYˆ
\œ˜^Kš\Ð\œ˜^J˜JJHÂˆ›Üˆ
]HHZHH˜K›[™ÝÈHZNÈH
ÏHŠHÂˆYˆ
˜VÚWHOOH™]\Ù]ÈŠHÂˆ˜Q]\Ù]Ô™YˆH˜VÚH
ÈWNÂˆ\Ö˜Q]\Ù]Ñ[žHHYNÂˆBˆBˆYˆ
˜Q]\Ù]Ô™YˆOOH[
HÂˆ˜Q]\Ù]Ô™YˆH™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆBˆH[ÙHYˆ
˜JHÂˆØ\›Š•[œÝ\ÜYH\KˆŠNÂˆBˆ]™]Ö™Y’[™›ÈHØš™XÝ˜Ü™X]J[
NÂˆYˆ
™Y‹˜Z[\ŠHÂˆÛÛœÝ[™›ÓX\H™]ÈX\

NÂˆÛÛœÝ™Y’[™›ÈH™Y‹˜Z[\‹™Ù]
’[™›ÈŠH[ÂˆYˆ
™Y’[™›È[œÝ[˜Ù[ÙˆXÝ
HÂˆ›Üˆ
ÛÛœÝÚÙ^K˜[YWHÙˆ™Y’[™›ÊHÂˆYˆ
\[Ùˆ˜[YHOOHœÝš[™ÈŠHÂˆ[™›ÓX\œÙ]
Ù^KÝš[™ÕÔ”Ýš[™Ê˜[YJJNÂˆBˆBˆBˆ™]Ö™Y’[™›ÈHÂˆ›ÛÝ™YŽˆØ][ÙÔ™Y‹ˆ[˜Üž\™YŽˆ™Y‹˜Z[\‹™Ù]˜]Ê‘[˜Üž\ŠH[ˆ™]Ô™YŽˆ™Y‹™Ù]™]Õ[\Ü˜\žT™YŠ
Kˆ[™›Ô™YŽˆ™Y‹˜Z[\‹™Ù]˜]Ê’[™›ÈŠH[ˆ[™›ÓX\ˆš[RYÎˆ™Y‹˜Z[\‹™Ù]
’QŠH[ˆÝ\™YŽˆ[™X\š^˜][ÛˆÈÝ\™Yˆˆ™Y‹›\Ý™Y”Ý™X[TÜÈÏÈÝ\™Y‹ˆš[[˜[YBˆNÂˆBˆ™]\›ˆ[˜Ü™[Y[[\]JÂˆÜšYÚ[˜[]NˆÝ™X[K˜ž]\Ëˆ™Y’[™›Îˆ™]Ö™Y’[™›ËˆÚ[™Ù\Ëˆ™Y‹ˆ\Ö˜NˆH^˜Kˆ˜Q]\Ù]Ô™Y‹ˆ\Ö˜Q]\Ù]Ñ[žKˆ™YY\X\˜[˜Ù\ËˆXÜ›Ñ›Ü›T™Y‹ˆXÜ›Ñ›Ü›Kˆ˜Q]Kˆ\ÙV™Y”Ý™X[Nˆ\ÑXÝ
™Y‹ÜXÝ–™YˆŠBˆJK™š[˜[J

HOˆÂˆ™Y‹œ™\Ù]™]Õ[\Ü˜\žT™YŠ
NÂˆJNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]Ü\˜]Ü“\Ý‹[˜Ý[Ûˆ
]KÚ[šÊHÂˆÛÛœÝYÙR[™^H]KœYÙR[™^Âˆ“X[˜YÙ\‹™Ù]YÙJYÙR[™^
K[Š[˜Ý[Ûˆ
YÙJHÂˆÛÛœÝ\ÚÈH™]ÈÛÜšÙ\•\ÚÊÙ]Ü\˜]Ü“\ÝˆYÙH	ÜYÙR[™^X
NÂˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊNÂˆÛÛœÝÝ\H™\˜›ÜÚ]HH™\˜›ÜÚ]S]™[’S‘“ÔÈÈ]K››ÝÊ
HˆÂˆYÙK™Ù]Ü\˜]Ü“\Ý
Âˆ[™\‹ˆÚ[šËˆ\ÚËˆ[[ˆ]Kš[[ˆØXÚRÙ^Nˆ]K˜ØXÚRÙ^Kˆ[››Ý][Û”ÝÜ˜YÙNˆ]K˜[››Ý][Û”ÝÜ˜YÙKˆ[ÙYšYYYÎˆ]K›[ÙYšYYYÂˆJK[Š[˜Ý[Ûˆ
Ü\˜]Ü“\Ý[™›ÊHÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆYˆ
Ý\
HÂˆ[™›ÊYÙOIÜYÙR[™^
È_HHÙ]Ü\˜]Ü“\Ýˆ[YOX
È	Ñ]K››ÝÊ
HHÝ\[\Ë[IÛÜ\˜]Ü“\Ý[™›Ë›[™ÝX
NÂˆBˆÚ[šË˜ÛÜÙJ
NÂˆK[˜Ý[Ûˆ
™X\ÛÛŠHÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆYˆ
\ÚË\›Z[˜]Y
HÂˆ™]\›ŽÂˆBˆÚ[šË™\œ›ÜŠ™X\ÛÛŠNÂˆJNÂˆJNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]^ÛÛ[‹[˜Ý[Ûˆ
]KÚ[šÊHÂˆÛÛœÝÂˆYÙR[™^ˆ[˜ÛYSX\šÙYÛÛ[ˆ\ØX›S›Ü›X[^˜][Û‚ˆHH]NÂˆ“X[˜YÙ\‹™Ù]YÙJYÙR[™^
K[Š[˜Ý[Ûˆ
YÙJHÂˆÛÛœÝ\ÚÈH™]ÈÛÜšÙ\•\ÚÊ‘Ù]^ÛÛ[ˆYÙHˆ
ÈYÙR[™^
NÂˆÝ\ÛÜšÙ\•\ÚÊ\ÚÊNÂˆÛÛœÝÝ\H™\˜›ÜÚ]HH™\˜›ÜÚ]S]™[’S‘“ÔÈÈ]K››ÝÊ
HˆÂˆYÙK™^˜XÝ^ÛÛ[
Âˆ[™\‹ˆ\ÚËˆÚ[šËˆ[˜ÛYSX\šÙYÛÛ[ˆ\ØX›S›Ü›X[^˜][Û‚ˆJK[Š[˜Ý[Ûˆ

HÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆYˆ
Ý\
HÂˆ[™›ÊYÙOIÜYÙR[™^
È_HHÙ]^ÛÛ[ˆ[YOX
È	Ñ]K››ÝÊ
HHÝ\[\Ø
NÂˆBˆÚ[šË˜ÛÜÙJ
NÂˆK[˜Ý[Ûˆ
™X\ÛÛŠHÂˆš[š\ÚÛÜšÙ\•\ÚÊ\ÚÊNÂˆYˆ
\ÚË\›Z[˜]Y
HÂˆ™]\›ŽÂˆBˆÚ[šË™\œ›ÜŠ™X\ÛÛŠNÂˆJNÂˆJNÂˆJNÂˆ[™\‹›ÛŠ‘Ù]ÝXÝ™YH‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™Ù]YÙJ]KœYÙR[™^
K[ŠYÙHOˆ“X[˜YÙ\‹™[œÝ\™JYÙK™Ù]ÝXÝ™YHŠJNÂˆJNÂˆ[™\‹›ÛŠ‘›Û˜[˜XÚÈ‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹™›Û˜[˜XÚÊ]KšY[™\ŠNÂˆJNÂˆ[™\‹›ÛŠÛX[\‹[˜Ý[Ûˆ
]JHÂˆ™]\›ˆ“X[˜YÙ\‹˜ÛX[\
YJNÂˆJNÂˆ[™\‹›ÛŠ•\›Z[˜]H‹[˜Ý[Ûˆ
]JHÂˆ\›Z[˜]YHYNÂˆÛÛœÝØZ]ÛˆH×NÂˆYˆ
“X[˜YÙ\ŠHÂˆ“X[˜YÙ\‹\›Z[˜]J™]ÈX›Ü^Ù\[ÛŠ•ÛÜšÙ\ˆØ\È\›Z[˜]YˆŠJNÂˆÛÛœÝÛX[\›ÛZ\ÙHH“X[˜YÙ\‹˜ÛX[\

NÂˆØZ]Û‹œ\Ú
ÛX[\›ÛZ\ÙJNÂˆ“X[˜YÙ\ˆH[ÂˆH[ÙHÂˆÛX\‘ÛØ˜[ØXÚ\Ê
NÂˆBˆØ[˜Ù[œÏËŠ™]ÈX›Ü^Ù\[ÛŠ•ÛÜšÙ\ˆØ\È\›Z[˜]YˆŠJNÂˆ›Üˆ
ÛÛœÝ\ÚÈÙˆÛÜšÙ\•\ÚÜÊHÂˆØZ]Û‹œ\Ú
\ÚË™š[š\ÚY
NÂˆ\ÚË\›Z[˜]J
NÂˆBˆ™]\›ˆ›ÛZ\ÙK˜[
ØZ]ÛŠK[Š[˜Ý[Ûˆ

HÂˆ[™\‹™\Ý›ÞJ
NÂˆ[™\ˆH[ÂˆJNÂˆJNÂˆ[™\‹›ÛŠ”™XYH‹[˜Ý[Ûˆ
]JHÂˆÙ]\ØÊØÔ\˜[\ÊNÂˆØÔ\˜[\ÈH[ÂˆJNÂˆ™]\›ˆÛÜšÙ\’[™\“˜[YNÂˆBˆÝ]XÈ[š]X[^™Qœ›ÛTÜ
Ü
HÂˆÛÛœÝ[™\ˆH™]ÈY\ÜØYÙR[™\ŠÛÜšÙ\ˆ‹›XZ[ˆ‹Ü
NÂˆ\ËœÙ]\
[™\‹Ü
NÂˆ[™\‹œÙ[™
œ™XYH‹[
NÂˆBŸB‚ŽËËÈ‹ÜÜ˜ËÜ‹ÛÜšÙ\‹šœÂ‚™ÛØ˜[\ËœšœÕÛÜšÙ\ˆHÂˆÛÜšÙ\“Y\ÜØYÙR[™\ŽˆÛÜšÙ\“Y\ÜØYÙR[™\‚ŸNÂ‚™^ÜÈÛÜšÙ\“Y\ÜØYÙR[™\ˆNÂ‚‹ËÈÈÛÝ\˜ÙSX\[™ÕT“\‹ÛÜšÙ\‹›ZœË›X\