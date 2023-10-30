import {
  useButtonProps
} from "./chunk-OWDWBSAL.js";
import {
  require_classnames,
  useBootstrapPrefix
} from "./chunk-JH6RR2MH.js";
import {
  require_jsx_runtime
} from "./chunk-F7RKNM7B.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/react-bootstrap/esm/Button.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Button = React.forwardRef(({
  as,
  bsPrefix,
  variant = "primary",
  size,
  active = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn");
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    disabled,
    ...props
  });
  const Component = tagName;
  return (0, import_jsx_runtime.jsx)(Component, {
    ...buttonProps,
    ...props,
    ref,
    disabled,
    className: (0, import_classnames.default)(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
  });
});
Button.displayName = "Button";
var Button_default = Button;

export {
  Button_default
};
//# sourceMappingURL=chunk-FDTEMD6T.js.map
