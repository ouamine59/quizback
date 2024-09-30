import {
  require_errors
} from "./chunk-CJ5X75XJ.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/react-auth-kit/AuthContext.js
var require_AuthContext = __commonJS({
  "node_modules/react-auth-kit/AuthContext.js"(exports) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    exports.useReactAuthKit = useReactAuthKit;
    var _react = require_react();
    var _errors = require_errors();
    function getContext() {
      var context = (0, _react.createContext)(null);
      if (true) {
        context.displayName = "ReactAuthKit";
      }
      return context;
    }
    var AuthKitContext = getContext();
    function useReactAuthKit() {
      var context = (0, _react.useContext)(AuthKitContext);
      if (context === null) {
        throw new _errors.AuthError("Auth Provider is missing. Make sure, you are using this component inside the auth provider.");
      }
      return context;
    }
    var _default = exports.default = AuthKitContext;
  }
});

export {
  require_AuthContext
};
//# sourceMappingURL=chunk-ZJZ557EG.js.map
