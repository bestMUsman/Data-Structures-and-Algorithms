// Merge Intervals

// Given a collection of intervals, merge all overlapping intervals.
// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

const merge = function(intervals) {
  intervals = intervals.sort((a, b) => a.start - b.start);
  console.log(intervals);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (Math.max(intervals[i].start, intervals[i].end) >= Math.min(intervals[i + 1].start, intervals[i + 1].end)) {
      if (Math.max(intervals[i].start, intervals[i].end) >= Math.max(intervals[i + 1].start, intervals[i + 1].end)) {
        intervals.splice(i + 1, 1);
        i--;
      } else {
        console.log(i);
        let first = intervals[i].start;
        let second = intervals[i + 1].end;
        intervals.splice(i, 2, new Interval(first, second));
        i--;
      }
    }
  }
  return intervals;
};