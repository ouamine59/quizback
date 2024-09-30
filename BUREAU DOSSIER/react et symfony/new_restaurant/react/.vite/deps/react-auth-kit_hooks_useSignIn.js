"use client";
import {
  require_reducers
} from "./chunk-T4PTQMW7.js";
import {
  require_AuthContext
} from "./chunk-ZJZ557EG.js";
import {
  require_errors
} from "./chunk-CJ5X75XJ.js";
import "./chunk-TWJRYSII.js";
import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/react-auth-kit/hooks/useSignIn.js
var require_useSignIn = __commonJS({
  "node_modules/react-auth-kit/hooks/useSignIn.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _AuthContext = require_AuthContext();
    var _reducers = require_reducers();
    var _errors = require_errors();
    function useSignIn() {
      var context = (0, _AuthContext.useReactAuthKit)();
      return function(signInConfig) {
        if (context.value.isUsingRefreshToken) {
          if (signInConfig.refresh) {
            context.set((0, _reducers.doSignIn)(signInConfig));
            return true;
          } else {
            throw new _errors.AuthError("This appication is using refresh token feature. So please include `refresh` param in the parameters");
          }
        } else if (signInConfig.refresh) {
          throw new _errors.AuthError("This appication is not using refresh token feature. So please remove the `refresh` param in the parameters. In Case you want to use refresh token feature, make sure you added that while creating the store.");
        } else {
          context.set((0, _reducers.doSignIn)(signInConfig));
          return true;
        }
      };
    }
    var _default = exports.default = useSignIn;
  }
});
export default require_useSignIn();
//# sourceMappingURL=react-auth-kit_hooks_useSignIn.js.map
