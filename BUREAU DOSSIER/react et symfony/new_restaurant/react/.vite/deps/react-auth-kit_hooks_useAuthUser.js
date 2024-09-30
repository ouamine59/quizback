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

// node_modules/react-auth-kit/hooks/useAuthUser.js
var require_useAuthUser = __commonJS({
  "node_modules/react-auth-kit/hooks/useAuthUser.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _AuthContext = require_AuthContext();
    var _utils = require_utils();
    function useAuthUser() {
      var _useReactAuthKit = (0, _AuthContext.useReactAuthKit)(), value = _useReactAuthKit.value;
      if ((0, _utils.isAuthenticated)(value)) {
        return value.userState;
      } else {
        return null;
      }
    }
    var _default = exports.default = useAuthUser;
  }
});
export default require_useAuthUser();
//# sourceMappingURL=react-auth-kit_hooks_useAuthUser.js.map
