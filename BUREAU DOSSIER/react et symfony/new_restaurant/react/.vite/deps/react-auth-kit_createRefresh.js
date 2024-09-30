"use client";
import {
  require_errors
} from "./chunk-CJ5X75XJ.js";
import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/react-auth-kit/createRefresh.js
var require_createRefresh = __commonJS({
  "node_modules/react-auth-kit/createRefresh.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _errors = require_errors();
    function createRefresh(param) {
      if (param.interval < 0) {
        throw new _errors.AuthError("Refresh interval is a time in seconds and can't be a negative(-ve) number. Make sure you are using possitive number.");
      }
      return param;
    }
    var _default = exports.default = createRefresh;
  }
});
export default require_createRefresh();
//# sourceMappingURL=react-auth-kit_createRefresh.js.map
