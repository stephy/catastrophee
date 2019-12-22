import { composeTypeahead } from "./composeTypeahead";
import { Highlighter } from "./Highlighter";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { Loading } from "./Loading";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { SearchWrapper } from "./SearchWrapper";
import { EmptySuggestion } from "./EmptySuggestion";
import { GroupedSearchResults } from "./GroupedSearchResults";
const Typeahead = composeTypeahead({});

const GroupedTypeahead = composeTypeahead({
  SearchResults: GroupedSearchResults
});

export {
  Highlighter,
  ListItem,
  List,
  Loading,
  SearchInput,
  SearchResults,
  SearchWrapper,
  EmptySuggestion,
  composeTypeahead,
  Typeahead,
  GroupedSearchResults,
  GroupedTypeahead
};
