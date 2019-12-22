// import * as React from "react";
// import { css } from "glamor";
// import { storiesOf } from "@storybook/react";
// import { Tag } from "@catastrophee/ui";
// import {
//   ListItem,
//   SearchInput,
//   SearchResults,
//   List,
//   Typeahead,
//   GroupedTypeahead,
//   EmptySuggestion,
//   composeTypeahead,
//   GroupedSearchResults
// } from "catastropheetypeahead";
// import { Font, Paddings, Color, Family, Bold } from "@catastrophee/styles";
// import typeaheadReadme from "../packages/typeahead/README.md";
// import { catColors } from "./defaultStyles";
// const rioLogo = require("../public-assets/favicon-96.png");
// const styles = {
//   container: {
//     background: catColors.background,
//     padding: Paddings.default,
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//     justifyContent: "center"
//   },
//   fontColor: {
//     color: Color.onPrimary
//   },
//   list: {
//     listStyleType: "none",
//     padding: 0
//   },
//   link: {
//     color: Color.onPrimary
//   }
// };

// const results = [
//   {
//     id: "1",
//     label: "Stranger Things"
//   },
//   {
//     id: "2",
//     label: "Osark"
//   },
//   {
//     id: "3",
//     label: "Good Girls"
//   },
//   {
//     id: "4",
//     label: "You"
//   },
//   {
//     id: "5",
//     label: "Stranger Danger"
//   }
// ];

// const GroupedResults = [
//   {
//     id: "1a596907-5e1c-11e8-ac78-12797dd0c006",
//     label:
//       "Docuseries Owned Original a\u0300 (test)ă, â, đ, ê, ô, ơ, and ư.  /{}[]%^@()*@!#&",
//     group: "Documentary Series"
//   },
//   {
//     id: "41bcc99f-047c-11e9-ac78-12797dd0c006",
//     label: "Features Licensed",
//     group: "Features"
//   },
//   {
//     id: "8f8d1cdf-3af2-11e9-ae99-12797dd0c006",
//     label: "International Licensed Original Film: Complete - SDR + 5.1",
//     group: "Features"
//   },
//   {
//     id: "b46ef1c1-09a2-11e9-ac78-12797dd0c006",
//     label: "International Licensed Original Film: Short Term",
//     group: "Features"
//   },
//   {
//     id: "388585bc-409b-11e9-ae99-12797dd0c006",
//     label: "International Licensed Original Series: Complete - SDR + 5.1",
//     group: "Series"
//   },
//   {
//     id: "b637662d-09a2-11e9-ac78-12797dd0c006",
//     label: "International Licensed Original Series: Limited Territory",
//     group: "Series"
//   },
//   {
//     id: "b57514c6-09a2-11e9-ac78-12797dd0c006",
//     label: "International Licensed Original Series: Short Term",
//     group: "Series"
//   },
//   {
//     id: "fa4f6ce0-000e-11e9-ac78-12797dd0c006",
//     label: "International Original Film",
//     group: "Features"
//   },
//   {
//     id: "15443093-42c8-11e9-ae99-12797dd0c006",
//     label: "International Original Series: Complete - Dolby Vision HDR + Atmos",
//     group: "Series"
//   },
//   {
//     id: "15069ae6-42c8-11e9-ae99-12797dd0c006",
//     label: "International Original Series: Complete - SDR + 5.1",
//     group: "Series"
//   },
//   {
//     id: "7d754b12-4050-11e9-ae99-12797dd0c006",
//     label: "Licensed Original Animated Series: Dolby Vision HDR + 5.1",
//     group: "Animated Series"
//   },
//   {
//     id: "debfdb53-4050-11e9-ae99-12797dd0c006",
//     label: "Licensed Original Animated Series: SDR + 5.1",
//     group: "Animated Series"
//   },
//   {
//     id: "9831046e-4051-11e9-ae99-12797dd0c006",
//     label: "Licensed Original Documentary Features: Dolby Vision HDR + Atmos",
//     group: "Documentary Features"
//   },
//   {
//     id: "9806617d-4051-11e9-ae99-12797dd0c006",
//     label: "Licensed Original Documentary Features: SDR + 5.1",
//     group: "Documentary Features"
//   },
//   {
//     id: "97e0385d-4051-11e9-ae99-12797dd0c006",
//     label: "Licensed Original Documentary Series: Dolby Vision HDR + Atmos",
//     group: "Documentary Series"
//   },
//   {
//     id: "976ac193-4051-11e9-ae99-12797dd0c006",
//     label: "Licensed Original Documentary Series: SDR + 5.1",
//     group: "Documentary Series"
//   },
//   {
//     id: "3f65cecd-047c-11e9-ac78-12797dd0c006",
//     label: "Licensed Original Series",
//     group: "Series"
//   },
//   {
//     id: "a2181a9d-185b-11e9-ac78-12797dd0c006",
//     label: "Licensed Original Unscripted Series: DAB",
//     group: "Unscripted Series"
//   },
//   {
//     id: "988ed972-4051-11e9-ae99-12797dd0c006",
//     label: "Licensed Original Unscripted Series: Dolby Vision HDR + Atmos",
//     group: "Unscripted Series"
//   },
//   {
//     id: "971c8472-4051-11e9-ae99-12797dd0c006",
//     label: "Licensed Original Unscripted Series: SDR + 5.1",
//     group: "Unscripted Series"
//   },
//   {
//     id: "a1f9bff9-185b-11e9-ac78-12797dd0c006",
//     label: "Licensed Original Unscripted Series: Short Term",
//     group: "Unscripted Series"
//   },
//   {
//     id: "c51e1650-54c7-11e9-ae99-12797dd0c006",
//     label: "Original Features: Complete - Dolby Vision HDR + Atmos",
//     group: "Features"
//   },
//   {
//     id: "b2427cd6-54c7-11e9-ae99-12797dd0c006",
//     label: "Original Features: Complete - SDR + 5.1",
//     group: "Features"
//   },
//   {
//     id: "323e14f9-519e-11e9-ae99-12797dd0c006",
//     label: "Original Features: Limited Territory",
//     group: "Features"
//   },
//   {
//     id: "01755608-409b-11e9-ae99-12797dd0c006",
//     label: "Original Features: Short Term",
//     group: "Features"
//   },
//   {
//     id: "85c2db3b-4050-11e9-ae99-12797dd0c006",
//     label: "Owned Original Animated Series: Complete - Dolby Vision HDR + 5.1",
//     group: "Animated Series"
//   },
//   {
//     id: "98b1d9a3-4051-11e9-ae99-12797dd0c006",
//     label:
//       "Owned Original Documentary Features: Complete - Dolby Vision HDR + Atmos",
//     group: "Documentary Features"
//   },
//   {
//     id: "96496cd3-4051-11e9-ae99-12797dd0c006",
//     label: "Owned Original Documentary Features: Complete - SDR + 5.1",
//     group: "Documentary Features"
//   },
//   {
//     id: "97b82df0-4051-11e9-ae99-12797dd0c006",
//     label:
//       "Owned Original Documentary Series: Complete - Dolby Vision HDR + Atmos",
//     group: "Documentary Series"
//   },
//   {
//     id: "973ce675-4051-11e9-ae99-12797dd0c006",
//     label: "Owned Original Documentary Series: Complete - SDR + 5.1",
//     group: "Documentary Series"
//   },
//   {
//     id: "9989957c-4051-11e9-ae99-12797dd0c006",
//     label: "Owned Original Series: Complete",
//     group: "Series"
//   },
//   {
//     id: "0e053a03-3ae3-11e9-ae99-12797dd0c006",
//     label:
//       "Owned Original Unscripted Series: Complete - Dolby Vision HDR + Atmos",
//     group: "Unscripted Series"
//   },
//   {
//     id: "979159df-4051-11e9-ae99-12797dd0c006",
//     label: "Owned Original Unscripted Series: Complete - SDR + 5.1",
//     group: "Unscripted Series"
//   },
//   {
//     id: "40dac416-047c-11e9-ac78-12797dd0c006",
//     label: "SCOTV: Licensed Original Series",
//     group: "Series"
//   },
//   {
//     id: "b66bc7e6-09a2-11e9-ac78-12797dd0c006",
//     label: "SCOTV: Licensed Original Series Limited Territory",
//     group: "Series"
//   },
//   {
//     id: "995c3b19-4051-11e9-ae99-12797dd0c006",
//     label: "SCOTV: Owned Series",
//     group: "Series"
//   },
//   {
//     id: "b6bc0b1e-09a2-11e9-ac78-12797dd0c006",
//     label: "Series Licensed",
//     group: "Series"
//   },
//   {
//     id: "b59a4b79-09a2-11e9-ac78-12797dd0c006",
//     label: "Series Licensed Original Limited Territory",
//     group: "Series"
//   },
//   {
//     id: "98fa6303-4051-11e9-ae99-12797dd0c006",
//     label: "Specials Licensed Original",
//     group: "Specials"
//   },
//   {
//     id: "9857ce56-4051-11e9-ae99-12797dd0c006",
//     label: "Specials Owned Original",
//     group: "Specials"
//   },
//   {
//     id: "96a5706b-4051-11e9-ae99-12797dd0c006",
//     label: "Specials Owned Original HDR + Atmos",
//     group: "Specials"
//   },
//   {
//     id: "a1c41d59-185b-11e9-ac78-12797dd0c006",
//     label: "Unscripted Series: Licensed",
//     group: "Unscripted Series"
//   }
// ];
// const typeaheadStories = storiesOf("catastropheetypeahead", module);
// typeaheadStories
//   .addParameters({
//     readme: {
//       codeTheme: "duotone-dark",
//       sidebar: typeaheadReadme
//     }
//   })
//   .add("README", () => {
//     return (
//       <div {...css(styles.container)}>
//         <div>
//           <img src={rioLogo} />
//         </div>

//         <div {...css(Font.body, styles.fontColor)}>
//           <Tag showBorder label="catastropheetypeahead" color="royalBlue" />
//         </div>
//       </div>
//     );
//   })
//   .add("Simple Typeahead Without Suggestion", () => {
//     class TypeaheadExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           options: []
//         };
//       }
//       handleOnChange = query => {
//         // Query will have the characters the user entered on the input
//         // Step 4. Call your API to get results based on a query
//         // Here is where you call your API to filter results based on given query. Below is some hard coded results.
//         let options = results;
//         // Filtering hard coded results based on query (ideally your API will do this)
//         const filteredOptions = options.filter(
//           option => option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0
//         );
//         this.setState({
//           options: filteredOptions
//         });
//       };

//       handleOnSelected = (query, option) => {
//         // Selected item will be available here
//         // This function will be called every time the user selects an item in the dropdown.
//         // Either by mouse (click) or by keyboard (Enter click)
//         // This is most likely where you will handle the selection and send analytics
//         if (option !== undefined) {
//           this.setState({
//             selectedId: option.id
//           });
//         }
//       };
//       render() {
//         return (
//           <Typeahead
//             options={this.state.options}
//             onChange={query => this.handleOnChange(query)}
//             onSelected={(query, option) => this.handleOnSelected(query, option)}
//             debounceTime={500}
//             ariaInstructionUpdates={"hello"}
//             emptyLabel="No templates available"
//             selectedOptionId={this.state.selectedId}
//           />
//         );
//       }
//     }
//     return <TypeaheadExample />;
//   })
//   .add(
//     "Simple Typeahead",
//     () => {
//       class TypeaheadExample extends React.Component<any, any> {
//         constructor(props) {
//           super(props);
//           this.state = {
//             selectedId: undefined,
//             options: [
//               {
//                 id: "suggetion1",
//                 label: "Suggetion 1"
//               },
//               {
//                 id: "suggetion2",
//                 label: "Suggetion 2"
//               },
//               {
//                 id: "suggetion3",
//                 label: "Suggetion 3"
//               }
//             ]
//           };
//         }
//         handleOnChange = query => {
//           // Query will have the characters the user entered on the input
//           // Step 4. Call your API to get results based on a query
//           // Here is where you call your API to filter results based on given query. Below is some hard coded results.
//           let options = results;
//           if (query === "") {
//             options = [
//               {
//                 id: "suggetion1",
//                 label: "Suggetion 1"
//               },
//               {
//                 id: "suggetion2",
//                 label: "Suggetion 2"
//               },
//               {
//                 id: "suggetion3",
//                 label: "Suggetion 3"
//               }
//             ];
//           }
//           // Filtering hard coded results based on query (ideally your API will do this)
//           const filteredOptions = options.filter(
//             option =>
//               option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0
//           );
//           this.setState({
//             options: filteredOptions
//           });
//         };

//         handleOnSelected = (query, option) => {
//           // Selected item will be available here
//           // This function will be called every time the user selects an item in the dropdown.
//           // Either by mouse (click) or by keyboard (Enter click)
//           // This is most likely where you will handle the selection and send analytics
//           if (option !== undefined) {
//             this.setState({
//               selectedId: option.id
//             });
//           }
//         };
//         render() {
//           return (
//             <Typeahead
//               options={this.state.options}
//               onChange={query => this.handleOnChange(query)}
//               onSelected={(query, option) =>
//                 this.handleOnSelected(query, option)
//               }
//               debounceTime={500}
//               ariaInstructionUpdates={"hello"}
//               emptyLabel="No templates available"
//               selectedOptionId={this.state.selectedId}
//             />
//           );
//         }
//       }
//       return <TypeaheadExample />;
//     },
//     {
//       info: {
//         text: `
//             description or documentation about my component, supports markdown

//             ~~~js
//             <Button>Click Here</Button>
//             ~~~
//           `
//       }
//     }
//   )
//   .add("Sectioned Typeahead With Clear Input on selected", () => {
//     class TypeaheadExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           selectedId: undefined,
//           options: GroupedResults
//         };
//       }
//       handleOnChange = query => {
//         // Query will have the characters the user entered on the input
//         // Step 4. Call your API to get results based on a query
//         // Here is where you call your API to filter results based on given query. Below is some hard coded results.
//         const options = GroupedResults;
//         // Filtering hard coded results based on query (ideally your API will do this)
//         const filteredOptions = options.filter(
//           option => option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0
//         );
//         this.setState({
//           options: filteredOptions
//         });
//       };

//       handleOnSelected = (query, option) => {
//         // Selected item will be available here
//         // This function will be called every time the user selects an item in the dropdown.
//         // Either by mouse (click) or by keyboard (Enter click)
//         // This is most likely where you will handle the selection and send analytics
//         if (option) {
//           this.setState({
//             selectedId: undefined
//           });
//         }
//       };
//       render() {
//         const { selectedId } = this.state;
//         console.log({ selectedId });
//         return (
//           <div {...css({ width: "300px" })}>
//             <button
//               onClick={() => {
//                 this.setState({
//                   selectedId: "1a596907-5e1c-11e8-ac78-12797dd0c006"
//                 });
//               }}
//             >
//               Set Default
//             </button>
//             <GroupedTypeahead
//               options={this.state.options}
//               onChange={query => this.handleOnChange(query)}
//               onSelected={(query, option) =>
//                 this.handleOnSelected(query, option)
//               }
//               debounceTime={0}
//               Grouped={true}
//               ariaInstructionUpdates={"hello"}
//               selectedOptionId={selectedId}
//               clearInputOnSelect={true}
//             />
//           </div>
//         );
//       }
//     }
//     return <TypeaheadExample />;
//   })
//   .add("Sectioned Typeahead with no sorted groups", () => {
//     class TypeaheadExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           selectedId: undefined,
//           options: GroupedResults
//         };
//       }
//       handleOnChange = query => {
//         // Query will have the characters the user entered on the input
//         // Step 4. Call your API to get results based on a query
//         // Here is where you call your API to filter results based on given query. Below is some hard coded results.
//         const options = GroupedResults;
//         // Filtering hard coded results based on query (ideally your API will do this)
//         const filteredOptions = options.filter(
//           option => option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0
//         );
//         this.setState({
//           options: filteredOptions
//         });
//       };

//       handleOnSelected = (query, option) => {
//         // Selected item will be available here
//         // This function will be called every time the user selects an item in the dropdown.
//         // Either by mouse (click) or by keyboard (Enter click)
//         // This is most likely where you will handle the selection and send analytics
//         if (option) {
//           this.setState({
//             selectedId: option.id
//           });
//         }
//       };
//       render() {
//         const { selectedId } = this.state;
//         console.log({ selectedId });
//         return (
//           <div {...css({ width: "300px" })}>
//             <button
//               onClick={() => {
//                 console.log("set selected");
//                 this.setState({
//                   selectedId: "1a596907-5e1c-11e8-ac78-12797dd0c006"
//                 });
//               }}
//             >
//               Set Default
//             </button>
//             <GroupedTypeahead
//               sortGroups={false}
//               options={this.state.options}
//               onChange={query => this.handleOnChange(query)}
//               onSelected={(query, option) =>
//                 this.handleOnSelected(query, option)
//               }
//               debounceTime={0}
//               Grouped={true}
//               ariaInstructionUpdates={"hello"}
//               selectedOptionId={selectedId}
//             />
//           </div>
//         );
//       }
//     }
//     return <TypeaheadExample />;
//   })
//   .add("Sectioned Typeahead", () => {
//     class TypeaheadExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           selectedId: undefined,
//           options: GroupedResults
//         };
//       }
//       handleOnChange = query => {
//         // Query will have the characters the user entered on the input
//         // Step 4. Call your API to get results based on a query
//         // Here is where you call your API to filter results based on given query. Below is some hard coded results.
//         const options = GroupedResults;
//         // Filtering hard coded results based on query (ideally your API will do this)
//         const filteredOptions = options.filter(
//           option => option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0
//         );
//         this.setState({
//           options: filteredOptions
//         });
//       };

//       handleOnSelected = (query, option) => {
//         // Selected item will be available here
//         // This function will be called every time the user selects an item in the dropdown.
//         // Either by mouse (click) or by keyboard (Enter click)
//         // This is most likely where you will handle the selection and send analytics
//         if (option) {
//           this.setState({
//             selectedId: option.id
//           });
//         }
//       };
//       render() {
//         const { selectedId } = this.state;
//         console.log({ selectedId });
//         return (
//           <div {...css({ width: "300px" })}>
//             <button
//               onClick={() => {
//                 console.log("set selected");
//                 this.setState({
//                   selectedId: "1a596907-5e1c-11e8-ac78-12797dd0c006"
//                 });
//               }}
//             >
//               Set Default
//             </button>
//             <GroupedTypeahead
//               options={this.state.options}
//               onChange={query => this.handleOnChange(query)}
//               onSelected={(query, option) =>
//                 this.handleOnSelected(query, option)
//               }
//               debounceTime={0}
//               Grouped={true}
//               ariaInstructionUpdates={"hello"}
//               selectedOptionId={selectedId}
//             />
//           </div>
//         );
//       }
//     }
//     return <TypeaheadExample />;
//   })
//   .add("Sectioned Typeahead With Prefilled", () => {
//     class TypeaheadExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           selectedId: "9831046e-4051-11e9-ae99-12797dd0c006",
//           options: GroupedResults
//         };
//       }
//       handleOnChange = query => {
//         // Query will have the characters the user entered on the input
//         // Step 4. Call your API to get results based on a query
//         // Here is where you call your API to filter results based on given query. Below is some hard coded results.
//         const options = GroupedResults;
//         // Filtering hard coded results based on query (ideally your API will do this)
//         const filteredOptions = options.filter(
//           option => option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0
//         );
//         this.setState({
//           options: filteredOptions
//         });
//       };

//       handleOnSelected = (query, option) => {
//         // Selected item will be available here
//         // This function will be called every time the user selects an item in the dropdown.
//         // Either by mouse (click) or by keyboard (Enter click)
//         // This is most likely where you will handle the selection and send analytics
//         if (option) {
//           this.setState({
//             selectedId: option.id
//           });
//         }
//       };
//       render() {
//         return (
//           <div {...css({ width: "300px" })}>
//             <GroupedTypeahead
//               options={this.state.options}
//               onChange={query => this.handleOnChange(query)}
//               onSelected={(query, option) =>
//                 this.handleOnSelected(query, option)
//               }
//               debounceTime={0}
//               Grouped={true}
//               ariaInstructionUpdates={"hello"}
//               selectedOptionId={this.state.selectedId}
//             />
//           </div>
//         );
//       }
//     }
//     return <TypeaheadExample />;
//   })
//   .add("Sectioned Typeahead With Personalized Rows", () => {
//     const usersPartnersResults = [
//       {
//         id: "stephmbishop@yahoo.com",
//         label: "Stephani Bishop",
//         group: "user"
//       },
//       { id: "aswan@netflix.com", label: "Andy Swan", group: "user" },
//       { id: "ktacke@netflix.com", label: "Kyle Tacke", group: "user" },
//       { id: "Netflix", label: "Netflix", group: "partner" },
//       { id: "Vandam", label: "Vandam Agency", group: "partner" }
//     ];
//     const PersonalizedTypeahead = composeTypeahead({
//       ListItem: ({ option, index, selectedIndex, onSelected }) => {
//         if (option.group === "user") {
//           return (
//             <div
//               onClick={() => onSelected(option.label, option)}
//               {...css({
//                 backgroundColor: index === selectedIndex ? "pink" : "grey",
//                 width: "100%",
//                 display: "grid"
//               })}
//             >
//               <span
//                 {...css({
//                   color: "black",
//                   fontSize: "9px",
//                   fontFamily: Family
//                 })}
//               >
//                 {option.id}
//               </span>
//               <span
//                 {...css({
//                   color: "black",
//                   fontSize: "13px",
//                   fontFamily: Family,
//                   fontWeight: Bold
//                 })}
//               >
//                 {option.label}
//               </span>
//             </div>
//           );
//         }
//         return (
//           <div
//             onClick={() => onSelected(option.label, option)}
//             {...css({
//               backgroundColor: index === selectedIndex ? "pink" : "grey",
//               width: "100%",
//               display: "grid"
//             })}
//           >
//             <span
//               {...css({
//                 color: "black",
//                 fontSize: "13px",
//                 fontFamily: Family,
//                 fontWeight: Bold
//               })}
//             >
//               {option.label}
//             </span>
//           </div>
//         );
//       },
//       SearchResults: GroupedSearchResults
//     });
//     class TypeaheadExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           selectedId: "stephmbishop@yahoo.com",
//           options: usersPartnersResults,
//           query: "",
//           filteredOptions: usersPartnersResults
//         };
//       }
//       handleOnChange = query => {
//         // Query will have the characters the user entered on the input
//         // Step 4. Call your API to get results based on a query
//         // Here is where you call your API to filter results based on given query. Below is some hard coded results.
//         const options = usersPartnersResults;
//         // Filtering hard coded results based on query (ideally your API will do this)
//         const filteredOptions = options.filter(
//           option => option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0
//         );

//         this.setState({
//           query,
//           filteredOptions
//         });
//       };

//       handleOnSelected = (query, option) => {
//         // Selected item will be available here
//         // This function will be called every time the user selects an item in the dropdown.
//         // Either by mouse (click) or by keyboard (Enter click)
//         // This is most likely where you will handle the selection and send analytics
//         if (option) {
//           this.setState({
//             selectedId: option.id
//           });
//         }
//       };
//       render() {
//         const filteredOptions = this.state.filteredOptions;
//         return (
//           <div {...css({ width: "300px" })}>
//             <PersonalizedTypeahead
//               options={filteredOptions}
//               onChange={query => this.handleOnChange(query)}
//               onSelected={(query, option) =>
//                 this.handleOnSelected(query, option)
//               }
//               value={this.state.query}
//               debounceTime={0}
//               Grouped={true}
//               ariaInstructionUpdates={"hello"}
//               selectedOptionId={this.state.selectedId}
//             />
//           </div>
//         );
//       }
//     }
//     return <TypeaheadExample />;
//   })
//   .add("Empty Suggestion", () => {
//     return <EmptySuggestion emptyLabel="No results available" />;
//   })
//   .add("Search Input", () => {
//     return (
//       <SearchInput
//         id={"myuniqueid"}
//         label="Search"
//         temporaryQuery={{
//           id: "1",
//           label: "item 1"
//         }}
//         ariaDescribedby="myid"
//         ariaOwns="myotherid"
//         onInputChange={() => {}}
//         onKeyDown={() => {}}
//         onFocus={() => {}}
//         onBlur={() => {}}
//       />
//     );
//   })
//   .add("List", () => {
//     return (
//       <div {...css({ position: "relative" })}>
//         <List id={"list"}>
//           {results &&
//             results.map(result => {
//               return (
//                 <ListItem
//                   option={result}
//                   query={"it"}
//                   index={0}
//                   onSelected={() => {}}
//                   selectedIndex={0}
//                 />
//               );
//             })}
//         </List>
//       </div>
//     );
//   })
//   .add("List Item", () => {
//     return (
//       <ListItem
//         option={{
//           id: "1",
//           label: "text"
//         }}
//         query={"tex"}
//         selectedIndex={0}
//         index={0}
//         onSelected={() => {}}
//         style={{
//           highlighter: {},
//           highlighted: {},
//           item: {}
//         }}
//       />
//     );
//   })
//   .add("Search Results", () => {
//     return (
//       <SearchResults
//         id="whatever"
//         results={results}
//         query={"ite"}
//         selectedIndex={0}
//         onSelected={() => {}}
//       />
//     );
//   });
