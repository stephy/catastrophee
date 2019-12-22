// import * as React from "react";
// import { storiesOf } from "@storybook/react";
// import mediaReadme from "../packages/media/README.md";
// import {
//   TimecodeInput,
//   TimelineTicks,
//   TimelinePlayhead,
//   TimelineTrack,
//   TimelineTracks,
//   DEFAULT_FRAMERATE_TAG
// } from "../packages/ui/media";
// import { css } from "glamor";
// import { defaultStyles } from "./defaultStyles";

// const editorStories = storiesOf("catastropheemedia", module);
// editorStories
//   .addParameters({
//     readme: {
//       codeTheme: "duotone-dark",
//       sidebar: mediaReadme
//     }
//   })
//   .add("Timecode Input", () => {
//     class TimecodeInputExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           currentStartFrame: 30,
//           currentEndFrame: 60,
//           currentDuration: 80
//         };
//       }
//       render() {
//         return (
//           <div>
//             <div>
//               <TimecodeInput
//                 id="start-time"
//                 label="Start Time"
//                 minFrame={0}
//                 maxFrame={90}
//                 errorMessage="Invalid Range"
//                 onChange={currentStartFrame =>
//                   this.setState({ currentStartFrame })
//                 }
//                 width={120}
//                 currentFrame={this.state.currentStartFrame}
//               />
//             </div>

//             <TimecodeInput
//               id="end-time"
//               label="End Time"
//               minFrame={60}
//               maxFrame={90}
//               allowInvalidInput={true}
//               errorMessage="Clip needs to be at least 30 seconds long"
//               onChange={currentEndFrame => this.setState({ currentEndFrame })}
//               currentFrame={this.state.currentEndFrame}
//             />
//             <div>
//               <h3 {...css(defaultStyles.title)}>
//                 Let parent decide if invalid
//               </h3>
//               <TimecodeInput
//                 id="duration"
//                 label="Duration"
//                 minFrame={60}
//                 maxFrame={70}
//                 allowInvalidInput={true}
//                 valid={false}
//                 errorMessage="Clip needs to be at least 30 seconds long"
//                 onChange={currentDuration => this.setState({ currentDuration })}
//                 width={120}
//                 currentFrame={this.state.currentDuration}
//               />
//             </div>
//           </div>
//         );
//       }
//     }
//     return <TimecodeInputExample />;
//   })
//   .add("TimelineTicks", () => {
//     class TimelineTicksExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           currentStartFrame: 30,
//           currentEndFrame: 60
//         };
//       }
//       render() {
//         return (
//           <div>
//             <div
//               {...css({ position: "relative", top: "100px", width: "560px" })}
//             >
//               <TimelineTicks
//                 id="timeline-ticks"
//                 currentTime={1800}
//                 frameRateTag={DEFAULT_FRAMERATE_TAG}
//                 duration={3600}
//                 width={560}
//                 zoom={0.1}
//               />
//             </div>
//           </div>
//         );
//       }
//     }
//     return <TimelineTicksExample />;
//   })
//   .add("TimelinePlayhead", () => {
//     class TimelinePlayheadExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           currentStartFrame: 30,
//           currentEndFrame: 60
//         };
//       }
//       render() {
//         return (
//           <div>
//             <div
//               {...css({ position: "relative", top: "100px", width: "560px" })}
//             >
//               <TimelinePlayhead
//                 currentTime={1}
//                 frameRateTag={DEFAULT_FRAMERATE_TAG}
//                 duration={3600}
//                 width={560}
//                 zoom={0.1}
//                 intrinsicHeight={60}
//                 isScrubbing={false}
//                 size={18}
//                 onChange={x => console.log(x)}
//               />
//             </div>
//           </div>
//         );
//       }
//     }
//     return <TimelinePlayheadExample />;
//   })
//   .add("Timeline Components", () => {
//     class TimelineComponentsExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           currentTime: 1800,
//           currentStartFrame: 30,
//           currentEndFrame: 60,
//           track1selected: false,
//           track2selected: false,
//           track1current: 30,
//           track1total: 30,
//           track2current: 60,
//           track2total: 60
//         };
//       }
//       render() {
//         const { currentTime } = this.state;
//         return (
//           <div>
//             <div
//               {...css({ position: "relative", top: "100px", width: "560px" })}
//             >
//               <TimelineTicks
//                 id="timeline-ticks"
//                 currentTime={currentTime}
//                 frameRateTag={DEFAULT_FRAMERATE_TAG}
//                 duration={3600}
//                 width={560}
//                 zoom={0.1}
//                 onMouseDown={x => {
//                   console.log({ x });
//                 }}
//               />
//               <TimelinePlayhead
//                 currentTime={currentTime}
//                 frameRateTag={DEFAULT_FRAMERATE_TAG}
//                 duration={3600}
//                 width={560}
//                 zoom={0.1}
//                 intrinsicHeight={60}
//                 isScrubbing={false}
//                 size={18}
//                 onChange={x => {
//                   console.log({ x });
//                   this.setState({
//                     currentTime: x
//                   });
//                 }}
//               />
//               <TimelineTrack
//                 startTime={1800}
//                 duration={60}
//                 currentTime={currentTime}
//                 zoom={0.1}
//                 timelineWidth={560}
//                 offsetTop={33}
//                 onDelete={() => {}}
//                 totalMediaDuration={3600}
//                 selected={this.state.track1selected}
//                 onSelect={() => {
//                   this.setState({
//                     track1selected: !this.state.track1selected,
//                     track2selected: false
//                   });
//                 }}
//                 onChange={(currentFrame, totalFrame) => {
//                   this.setState({
//                     track1current: currentFrame,
//                     track1total: totalFrame
//                   });
//                 }}
//               />
//               <TimelineTrack
//                 startTime={0}
//                 duration={1800}
//                 zoom={0.1}
//                 currentTime={currentTime}
//                 timelineWidth={560}
//                 totalMediaDuration={3600}
//                 offsetTop={56}
//                 onDelete={() => {}}
//                 selected={this.state.track2selected}
//                 onSelect={() => {
//                   this.setState({
//                     track1selected: false,
//                     track2selected: !this.state.track2selected
//                   });
//                 }}
//                 onChange={(currentFrame, totalFrame) => {
//                   this.setState({
//                     track2current: currentFrame,
//                     track2total: totalFrame
//                   });
//                 }}
//               />

//               <TimelineTrack
//                 startTime={0}
//                 duration={1800}
//                 zoom={0.1}
//                 currentTime={currentTime}
//                 timelineWidth={560}
//                 totalMediaDuration={3600}
//                 offsetTop={56}
//                 onDelete={() => {}}
//                 selected={this.state.track2selected}
//                 onSelect={() => {
//                   this.setState({
//                     track1selected: false,
//                     track2selected: !this.state.track2selected
//                   });
//                 }}
//                 onChange={(currentFrame, totalFrame) => {
//                   this.setState({
//                     track2current: currentFrame,
//                     track2total: totalFrame
//                   });
//                 }}
//               >
//                 <div {...css({ position: "relative" })}>
//                   <div
//                     {...css({
//                       position: "absolute",
//                       transform: "translateX(-100%)",
//                       color: "white"
//                     })}
//                   >
//                     Chaarcer
//                   </div>
//                   <div>HELLO</div>
//                 </div>
//               </TimelineTrack>
//             </div>
//           </div>
//         );
//       }
//     }
//     return <TimelineComponentsExample />;
//   })
//   .add("Timeline Tracks", () => {
//     class TimelineTracksExample extends React.Component<any, any> {
//       constructor(props) {
//         super(props);
//         this.state = {
//           startFrame: 0,
//           currentFrame: 30
//         };
//       }
//       render() {
//         return (
//           <div {...css({ width: 700 })}>
//             <TimelineTicks
//               id="timeline-ticks"
//               currentTime={1800}
//               frameRateTag={DEFAULT_FRAMERATE_TAG}
//               duration={3600}
//               width={560}
//               zoom={0.1}
//             />
//             <TimelinePlayhead
//               currentTime={30}
//               frameRateTag={DEFAULT_FRAMERATE_TAG}
//               duration={3600}
//               width={700}
//               zoom={0.1}
//               intrinsicHeight={60}
//               isScrubbing={false}
//               size={18}
//               onChange={x => console.log(x)}
//             />
//             <div {...css({ position: "relative", top: "40px" })}>
//               <TimelineTracks
//                 id="timeline-ticks"
//                 currentTime={1800}
//                 offsetY={0}
//                 width={700}
//                 zoom={0.1}
//                 duration={3600}
//                 onSelectTrack={i => {}}
//                 onChangeTrack={i => {}}
//                 onDeleteTrack={i => {}}
//                 tracks={[
//                   {
//                     startTime: 60,
//                     duration: 60,
//                     selected: false,
//                     offsetTop: 0
//                   },
//                   {
//                     startTime: 0,
//                     duration: 1800,
//                     selected: true,
//                     offsetTop: 20
//                   }
//                 ]}
//               />
//             </div>

//             <div {...css({ position: "relative", top: "40px" })}>
//               <TimelineTracks
//                 id="timeline-ticks"
//                 currentTime={1800}
//                 offsetY={0}
//                 width={700}
//                 zoom={0.1}
//                 duration={3600}
//                 onSelectTrack={i => {}}
//                 onChangeTrack={i => {}}
//                 onDeleteTrack={i => {}}
//                 tracks={[
//                   {
//                     startTime: 20,
//                     duration: undefined,
//                     selected: false,
//                     offsetTop: 70
//                   },
//                   {
//                     startTime: 0,
//                     duration: 0,
//                     selected: true,
//                     offsetTop: 70
//                   }
//                 ]}
//               />
//             </div>
//           </div>
//         );
//       }
//     }
//     return <TimelineTracksExample />;
//   });
