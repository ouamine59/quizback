"use client";
import {
  require_utils
} from "./chunk-SHGD3LFM.js";
import {
  require_AuthContext
} from "./chunk-ZJZ557EG.js";
import "./chunk-CJ5X75XJ.js";
import "./chunk-TWJRYSII.js";
import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/react-auth-kit/hooks/useAuthHeader.js
var require_useAuthHeader = __commonJS({
  "node_modules/react-auth-kit/hooks/useAuthHeader.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _AuthContext = require_AuthContext();
    var _utils = require_utils();
    function useAuthHeader() {
      var _useReactAuthKit = (0, _AuthContext.useReactAuthKit)(), value = _useReactAuthKit.value;
      if (!!value.auth && (0, _utils.isAuthenticated)(value)) {
        return "".concat(value.auth.type, " ").concat(value.auth.token);
      } else {
        return null;
      }
    }
    var _default = exports.default = useAuthHeader;
  }
});
export default require_useAuthHeader();
//# sourceMappingURL=react-auth-kit_hooks_useAuthHeader.js.map
