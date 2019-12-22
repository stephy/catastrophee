import { debounce } from "lodash";
import * as React from "react";
import { AccessibilityHelper } from "./AccessibilityHelper";
import withClickOutside from "./withClickOutside";
import { css } from "glamor";
import { SearchInput as SearchInputComponent } from "./SearchInput";
import { SearchResults as SearchResultsComponent } from "./SearchResults";
import { SearchWrapper as SearchWrapperComponent } from "./SearchWrapper";
import { Loading as LoadingComponent } from "./Loading";
import { EmptySuggestion as EmptySuggestionComponent } from "./EmptySuggestion";
import { ListItem as ListItemComponent } from "./ListItem";

const KEY_UP = "ArrowUp";
const KEY_DOWN = "ArrowDown";
const KEY_ENTER = "Enter";
const KEY_ESC = "Escape";

const A11Y_TYPEAHEAD_DESCRIBES_ID = "typeahead-search-instructions";
const A11Y_TYPEAHEAD_RESULTS_ID = "typeahead-search-results";

const styles = {
  container: {
    position: "relative",
    width: "100%"
  }
};

export const compareLabels = (a, b) => {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
};

interface TypeaheadSearchType {
  /**
   * Unique Id for the search input
   * @type {String}
   */
  id: string;
  /**
   * The list of options to be displayed on the dropdown of the typeahead
   * @type {Array}
   */
  options: Array<any>;
  /**
   * Default / Current Value for input
   */
  value?: any;
  selected?: any;
  /**
   * Class name for the styles to be added on the wrapper of the component
   * @type {String}
   */
  className?: string;
  /**
   * The amount of time (in milliseconds) you want to wait until you call the
   * on change event after the user types a key.
   * @type {String}
   */
  debounceTime?: number | 500;
  /**
   * Callback function that will be called when the user types a new character
   * in the input
   * @type {Function}
   */
  onChange: (query: string, item?: any, e?: any) => void;
  /**
   * Callback function that will be called once the users focuses on the input
   * @type {Function}
   */
  onFocus?: (e: any) => void;
  /**
   * Callback function that will be called once onBlur on the input occurs
   * @type {Function}
   */
  onBlur?: (e: any) => void;
  /**
   * Callback function that will be called once the users selects an option
   * from the dropdown, either by clicking on it or hitting the 'enter' key
   * @type {Function}
   */
  onSelected?: (label: string, option?: any) => void;
  /**
   * Text that will be read to screen reader user with instructions on how to
   * use the typeahead
   * @type {String}
   */
  ariaInstructionText?: string;
  /**
   * Text that will be read to screen reader user every time new results show up
   * @type {String}
   */
  ariaInstructionUpdates?: string;
  loading?: boolean;
  disabled?: boolean;
  /**
   * Empty label for when there are no results
   */
  emptyLabel?: string;
  /**
   * Fixed height for result items so drop down scroll position can be calculated
   * on the fly, estimate number is okay, if not provided, 16 is the default height
   */
  resultItemHeight?: number;
  selectedOptionId?: string;
  clearInputOnSelect?: boolean;
  sortGroups?: boolean;
}

interface ComposeTypeaheadType {
  SearchInput?: any; // The component that will be used as the input for the typeahead
  SearchResults?: any; // The component that will be used as the dropdown
  SearchWrapper?: any; // A wrapper UI component that will be used to wrap the Input and dropdown components, usually purely UI
  Loading?: any; // A wrapper UI component that will be used to serve as loading screen
  EmptySuggestion?: any; // The component that will be shown if there are no suggestions for the typeahead
  ListItem?: any; // The component that will be used as the item in the dropdown
}

export const composeTypeahead = (composedTypeahead: ComposeTypeaheadType) => {
  const {
    SearchInput = SearchInputComponent,
    SearchResults = SearchResultsComponent,
    SearchWrapper = SearchWrapperComponent,
    Loading = LoadingComponent,
    EmptySuggestion = EmptySuggestionComponent,
    ListItem = ListItemComponent
  } = composedTypeahead;
  class TypeaheadSearch extends React.Component<TypeaheadSearchType, any> {
    private inputCallback: (e?: any) => void;

    constructor(props: TypeaheadSearchType) {
      super(props);
      const results = this.getSortedNormalizedOptions(props);
      const prefilled = props.selectedOptionId
        ? props.options.filter(option => option.id === props.selectedOptionId)
        : [];
      let defaultTempQuery = { label: "" };
      if (prefilled.length > 0) {
        defaultTempQuery = prefilled[0];
      }
      this.state = {
        query: props.value || "",
        active: false,
        temporaryQuery: props.value || defaultTempQuery, // used to place selected item into input when navigating the results
        selectedIndex: null,
        focused: false,
        resultCursorPosition: 0,
        clearRequested: false,
        onSelection: false,
        optionsByGroup: results.optionsByGroup,
        options: results.options,
        onEscape: false
      };
      this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
      this.handleOnBlur = this.handleOnBlur.bind(this);
      this.handleOnFocus = this.handleOnFocus.bind(this);
      this.updateQuery = this.updateQuery.bind(this);
      this.handleClearInput = this.handleClearInput.bind(this);
      this.adjustSelectedIndex = this.adjustSelectedIndex.bind(this);
      this.inputCallback = () => {};
    }

    componentWillMount() {
      const { debounceTime, onChange } = this.props;
      this.inputCallback = debounce(e => {
        const query = e.target.value;
        onChange(query);
      }, debounceTime);
    }

    componentWillReceiveProps(nextProps) {
      const { options, selectedOptionId } = this.props;
      const hasDifferentOptions =
        JSON.stringify(options) !== JSON.stringify(nextProps.options);
      if (hasDifferentOptions) {
        const results = this.getSortedNormalizedOptions(nextProps);
        this.setState({
          focused: true,
          options: results.options,
          optionsByGroup: results.optionsByGroup
        });
      }

      const hasChangedSelection =
        nextProps.selectedOptionId !== selectedOptionId;
      if (hasChangedSelection) {
        if (nextProps.selectedOptionId !== undefined) {
          const selectedItem = nextProps.options.filter(
            item => item.id === nextProps.selectedOptionId
          );
          if (selectedItem.length > 0) {
            const selected = selectedItem[0];
            this.setState({
              temporaryQuery: selected,
              query: selected.label,
              focused: false,
              selectedIndex: null,
              clearRequested: false,
              onEscape: false
            });
            return;
          }
        }
      }
      const { onSelection, onEscape } = this.state;
      if (nextProps.isClickOutside || hasChangedSelection || onEscape) {
        if (this.state.clearRequested) {
          this.setState({
            clearRequested: false,
            onEscape: false
          });
          return;
        } else {
          this.setState({
            focused: false,
            selectedIndex: null,
            clearRequested: false,
            onEscape: false
          });
          return;
        }
      } else if (
        nextProps.isClickOutside &&
        !hasChangedSelection &&
        onSelection
      ) {
        if (selectedOptionId) {
          const selectedOption = options.filter(
            option => option.id === selectedOptionId
          );
          if (selectedOption.length > 0) {
            this.setState({
              temporaryQuery: selectedOption[1],
              onSelection: false
            });
            return;
          }
        }
      }
    }

    getSortedNormalizedOptions = nextProps => {
      const { options, sortGroups = true } = nextProps;
      const results = options.sort(compareLabels);
      // create unique list of groups
      const groupsHash = {};
      results.forEach(result => {
        if (result.group !== undefined) {
          groupsHash[result.group] = true;
        }
      });
      let groups = Object.keys(groupsHash);
      if (sortGroups) {
        groups = Object.keys(groupsHash).sort();
      }
      const optionsByGroup = {};
      let count = -1;
      groups.forEach(groupKey => {
        optionsByGroup[groupKey] = results
          .filter(result => result.group === groupKey)
          .sort(compareLabels)
          .map(result => {
            count = count + 1;
            const indexedItem = Object.assign({}, result, { index: count });
            return indexedItem;
          });
      });
      return {
        options: results,
        optionsByGroup: optionsByGroup
      };
    };

    getTemporaryQueryOptionForIndex = index => {
      const { options, optionsByGroup } = this.state;
      let tempQ = options[index];
      Object.keys(optionsByGroup).filter(key => {
        optionsByGroup[key].forEach(option => {
          if (option.index === index) {
            tempQ = option;
          }
        });
      });
      return tempQ;
    };

    adjustSelectedIndex(down) {
      const { selectedIndex, options } = this.state;
      const optionsLength = options && options.length;
      let tempIndex;
      // initialize temporary index
      if (selectedIndex === null) {
        tempIndex = 0;
      } else {
        tempIndex = down ? selectedIndex + 1 : selectedIndex - 1;
      }
      // don't increment if it is the end of the list
      // or don't decrement if in the begining of the list
      if (tempIndex > optionsLength - 1 || tempIndex < 0) {
        return;
      }
      // update the selectedIndex state
      this.setState(
        {
          selectedIndex: tempIndex,
          temporaryQuery: this.getTemporaryQueryOptionForIndex(tempIndex),
          focused: true
        },
        () => {
          // Scroll to result
          const searchResults = document.getElementById(
            A11Y_TYPEAHEAD_RESULTS_ID
          );
          if (searchResults !== null) {
            const highlightedItem = searchResults.querySelector(
              "[aria-selected=true]"
            );
            if (highlightedItem !== null) {
              highlightedItem.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
              });
            }
          }
        }
      );
    }

    handleOnKeyDown(e) {
      const key = e.key;
      const { selectedOptionId } = this.props;
      const { selectedIndex, query, options } = this.state;
      const optionsLength = options && options.length;

      // if there are no options, let's just return
      if (!(optionsLength > 0)) {
        return;
      }
      let updatedQuery = {};

      switch (key) {
        case KEY_UP:
          e.preventDefault(); // needed because otherwise cursor goes to the begining of input
          this.adjustSelectedIndex(false);
          break;
        case KEY_DOWN: {
          e.preventDefault();
          this.adjustSelectedIndex(true);
          break;
        }
        case KEY_ENTER: {
          e.preventDefault();
          // will send the selected option and clear the list
          const value = this.getTemporaryQueryOptionForIndex(selectedIndex);
          this.handleSelected(value.label, value);
          break;
        }
        case KEY_ESC: {
          e.stopPropagation();
          e.preventDefault();
          if (selectedOptionId) {
            // let's set the input box to have the original value
            const option = options.filter(
              option => option.id === selectedOptionId
            );
            if (option.length > 0 && option[0].label !== query) {
              updatedQuery = option[0];
            }
          }
          // will send the selected option and clear the list
          this.setState({
            focused: false,
            selectedIndex: null,
            temporaryQuery: updatedQuery,
            onEscape: true
          });
          break;
        }
        default:
          this.setState({
            selectedIndex: null, // clear up selectedIndex
            focused: true,
            clearRequested: false
          });
          break;
      }
    }

    updateQuery(e) {
      const query = e.target.value;
      this.setState({
        query,
        temporaryQuery: query,
        focused: true
      });
      e.persist();
      this.inputCallback(e);
    }

    handleOnBlur(e) {
      const { onBlur } = this.props;
      this.setState(() => ({
        active: false
      }));
      if (onBlur) {
        onBlur(e);
      }
    }

    handleOnFocus(e) {
      const { onFocus } = this.props;
      this.setState(() => ({
        active: true,
        focused: true
      }));
      if (onFocus) {
        onFocus(e);
      }
    }

    handleClearInput(e) {
      const { onChange, onSelected } = this.props;
      this.setState(
        () => ({
          query: "",
          temporaryQuery: {
            label: ""
          },
          selectedIndex: null,
          clearRequested: true
        }),
        () => {
          // scroll to top
          const searchResults = document.getElementById(
            A11Y_TYPEAHEAD_RESULTS_ID
          );
          if (searchResults !== null) {
            searchResults.scrollTop = 0;
          }
          onChange && onChange("", undefined, e);
          onSelected && onSelected("", undefined);
        }
      );
    }

    handleSelected = (label: string, option: any) => {
      const { onSelected, clearInputOnSelect } = this.props;
      console.log("handle selected", clearInputOnSelect);
      if (clearInputOnSelect === true) {
        this.setState(
          {
            query: "",
            temporaryQuery: {
              label: ""
            },
            selectedIndex: null,
            focused: false
          },
          () => {
            if (onSelected) {
              onSelected(label, option);
            }
          }
        );
      } else {
        this.setState(
          {
            query: label,
            selectedOption: option,
            temporaryQuery: label,
            onSelection: true,
            focused: false
          },
          () => {
            if (onSelected) {
              onSelected(label, option);
            }
          }
        );
      }
    };

    handleShowSuggestions = () => {
      this.setState({
        focused: true
      });
    };

    render() {
      const {
        disabled = false,
        ariaInstructionText,
        ariaInstructionUpdates,
        loading,
        selectedOptionId
      } = this.props;
      const {
        options,
        selectedIndex,
        query,
        temporaryQuery,
        active,
        focused,
        optionsByGroup
      } = this.state;
      const hasOptions = options && options.length > 0;
      const hasFocus = focused;
      const updated = new Date().getTime(); // to force search results to refresh
      return (
        <div role="search" {...css(styles.container)}>
          <SearchWrapper
            {...this.props}
            query={query}
            active={active}
            handleClearInput={this.handleClearInput}
            handleShowSuggestions={this.handleShowSuggestions}
          >
            <SearchInput
              {...this.props}
              onInputChange={!disabled ? this.updateQuery : () => {}}
              onKeyDown={!disabled ? this.handleOnKeyDown : () => {}}
              onFocus={!disabled ? this.handleOnFocus : () => {}}
              onBlur={!disabled ? this.handleOnBlur : () => {}}
              temporaryQuery={temporaryQuery || query}
              ariaOwns={A11Y_TYPEAHEAD_RESULTS_ID}
              ariaDescribedby={A11Y_TYPEAHEAD_DESCRIBES_ID}
              expanded={hasOptions}
            />
            {loading !== undefined && loading === true && (
              <SearchResults
                {...this.props}
                id={A11Y_TYPEAHEAD_RESULTS_ID}
                results={options}
                onSelected={this.handleSelected}
                query={query}
                selectedIndex={selectedIndex}
                sortedByGroup={optionsByGroup}
                selectedOptionId={selectedOptionId}
                ListItem={ListItem}
                updated={updated}
              >
                <Loading />
              </SearchResults>
            )}
            {!loading && hasOptions && hasFocus && (
              <SearchResults
                {...this.props}
                id={A11Y_TYPEAHEAD_RESULTS_ID}
                results={options}
                onSelected={this.handleSelected}
                query={query}
                selectedIndex={selectedIndex}
                sortedByGroup={optionsByGroup}
                selectedOptionId={selectedOptionId}
                ListItem={ListItem}
                updated={updated}
              />
            )}

            {!hasOptions && hasFocus && !loading && (
              <SearchResults
                {...this.props}
                id={A11Y_TYPEAHEAD_RESULTS_ID}
                results={options}
                onSelected={this.handleSelected}
                query={query}
                selectedIndex={selectedIndex}
                sortedByGroup={optionsByGroup}
                selectedOptionId={selectedOptionId}
                ListItem={ListItem}
                updated={updated}
              >
                {!hasOptions && EmptySuggestion && hasFocus && (
                  <EmptySuggestion {...this.props} />
                )}
              </SearchResults>
            )}
          </SearchWrapper>
          <AccessibilityHelper
            {...this.props}
            ariaDescribedbyId={A11Y_TYPEAHEAD_DESCRIBES_ID}
            instructionText={ariaInstructionText || ""}
            instructionUpdates={ariaInstructionUpdates || ""}
          />
        </div>
      );
    }
  }
  return withClickOutside(TypeaheadSearch);
};
