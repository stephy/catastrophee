import { css } from "glamor";
import * as React from "react";
import { DesktopStyles } from "./Styles";

interface AccessibilityHelperType {
  /**
   * Id that matches input aria-describedby id
   * @type {String}
   */
  ariaDescribedbyId: string;
  /**
   * Text that will be read to the screen reader user
   * @type {String}
   */
  instructionText: string;
  /**
   * Text that will be read to the screen reader user every time there's an
   * update to the autocomplete
   * @type {String
   */
  instructionUpdates: string;
}

export const AccessibilityHelper: React.SFC<AccessibilityHelperType> = ({
  ariaDescribedbyId,
  instructionText,
  instructionUpdates
}) => {
  return (
    <div className="typeahead-search-aria-helper">
      <span id={ariaDescribedbyId} {...css(DesktopStyles.accessibilityHelper)}>
        {instructionText}
      </span>
      <span
        role="status"
        aria-live="polite"
        {...css(DesktopStyles.accessibilityStatus)}
        className="screen-reader-text"
      >
        {instructionUpdates}
      </span>
    </div>
  );
};
