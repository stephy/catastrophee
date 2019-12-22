import * as moment from "moment";
const WINDOW_MARGIN = 0;
const TWENTY_FOUR_HOURS_IN_SECONDS = 86400;
const TWENTY_FOUR_HOURS_IN_MS = TWENTY_FOUR_HOURS_IN_SECONDS * 1000;
const ONE_WEEK_IN_MS = TWENTY_FOUR_HOURS_IN_MS * 7;
const HOUR_IN_MS = 3600000;
const MINUTE_IN_MS = 60000;

export function updateLayerPosition(
  layer: HTMLElement | null,
  ownerId: string,
  matchOwnerWidth: boolean
) {
  const owner = document.getElementById(ownerId);
  if (owner && layer) {
    const ownerBounds = owner.getBoundingClientRect();
    const layerBounds = layer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    let left = ownerBounds.left;
    let top = ownerBounds.top + ownerBounds.height;
    // auto positioning algorithm
    // try top left of popup at bottom left of owner
    // then bottom left of popup at top left of owner
    // if both exceed screen bounds, choose one with min hidden
    if (top + layerBounds.height > windowHeight - WINDOW_MARGIN) {
      top = ownerBounds.top - layerBounds.height;
    }

    // adjust left of popup if right would be off screen
    if (left + layerBounds.width > windowWidth - WINDOW_MARGIN) {
      left = windowWidth - WINDOW_MARGIN - layerBounds.width;
    }

    layer.style.left = `${left}px`;
    layer.style.top = `${top}px`;
  }
}

export function updateFloatingMenuPosition(
  layer: HTMLElement | null,
  owner: HTMLElement | null,
  matchOwnerWidth: boolean,
  customTopOffset?: number // offset to be used for the position of the menu
) {
  const DEFAULT_TOP_OFFSET = -10; // this offset is used so there's no gap between the trigger button and the menu
  const topOffset = customTopOffset || DEFAULT_TOP_OFFSET;

  if (owner && layer) {
    const ownerBounds = owner.getBoundingClientRect();
    const layerBounds = layer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    let left = ownerBounds.left;
    let top = ownerBounds.top + ownerBounds.height;
    // auto positioning algorithm
    // try top left of popup at bottom left of owner
    // then bottom left of popup at top left of owner
    // if both exceed screen bounds, choose one with min hidden
    if (top + layerBounds.height > windowHeight - WINDOW_MARGIN) {
      top = ownerBounds.top - layerBounds.height - topOffset;
    } else {
      top = top + topOffset;
    }

    // adjust left of popup if right would be off screen
    if (left + layerBounds.width > windowWidth - WINDOW_MARGIN) {
      left = windowWidth - WINDOW_MARGIN - layerBounds.width;
    }

    layer.style.left = `${left}px`;
    layer.style.top = `${top}px`;

    if (matchOwnerWidth) {
      layer.style.minWidth = `${ownerBounds.width}px`;
    }
  }
}

export const getWeeksRemaining = (date: string) => {
  const now = new Date();
  const momentToday = moment(now);
  const due = new Date(date);
  const momentDue = moment(due);
  const duration = Math.abs(now.getTime() - due.getTime());

  if (duration < MINUTE_IN_MS) {
    return `${momentToday.diff(momentDue, "seconds")} ${
      momentToday.diff(momentDue, "seconds") === 1 ? "second" : "seconds"
    }`;
  }
  if (duration < HOUR_IN_MS) {
    return `${momentToday.diff(momentDue, "minute")} ${
      momentToday.diff(momentDue, "minute") === 1 ? "minute" : "minutes"
    }`;
  }

  if (duration < TWENTY_FOUR_HOURS_IN_MS) {
    return `${momentToday.diff(momentDue, "hour")} ${
      momentToday.diff(momentDue, "hour") === 1 ? "hour" : "hours"
    }`;
  }

  if (duration < ONE_WEEK_IN_MS) {
    return `${momentToday.diff(momentDue, "day")}  ${
      momentToday.diff(momentDue, "day") === 1 ? "day" : "days"
    }`;
  }
  return `${momentToday.diff(momentDue, "week")} ${
    momentToday.diff(momentDue, "week") === 1 ? "week" : "weeks"
  }`;
};

export function padLeft(padding: string, text: string, length: number) {
  let padValue = padding;

  while (padValue.length < length) {
    padValue += padding.substring(
      0,
      Math.min(padding.length, length - padValue.length)
    );
  }

  return padValue.substring(0, padValue.length - text.length) + text;
}

export function parseFlexibleSmpte(value: string) {
  let smpte = value;

  // remove colons
  smpte = smpte.replace(/:/g, "");
  // pad with zeros
  smpte = padLeft("0", smpte, 8);

  const hh = smpte.substring(0, 2);
  const mm = smpte.substring(2, 4);
  const ss = smpte.substring(4, 6);
  const ff = smpte.substring(6, 8);

  return `${hh}:${mm}:${ss}:${ff}`;
}
