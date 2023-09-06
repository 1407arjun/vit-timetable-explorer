# vit-timetable-explorer
NPM package for parsing VIT timetables and finding free slots from all timetables at once.

### For getting the timetable entries follow the steps below:
- Go to your timetable on VTOP. Scroll down to see the table with your schedule.
- Select the text from THEORY in the top left to L94 - in the bottom right
- Copy-paste all of the selected text.

### Find free slots using the `findFreeSlots()` function
``` js
import { findFreeSlots, parseTimetable } from "vit-timetable-explorer"

const timetables = ["<timteable-from-vtop-1>", "<timteable-from-vtop-2>", ...]

console.log(findFreeSlots(timetables))

/* Returns start and end times in an array
type { start: string; end: string }[] */
```

### Find course details using the `parseTimetable()` utility function
``` js
import { findFreeSlots, parseTimetable } from "vit-timetable-explorer"

const timetable = "<timteable-from-vtop-1>"

console.log(parseTimeTable(timetable))

/* Returns the details of the registered courses in an array
type {
    slot: string
    code: string
    type: string
    room: string
    day: number # 0-6 representing MON to SUN
    start: string
    end: string
} */
```

### Find free slots using the CLI
``` bash
$ vit-tt <path-to-txt-file>

# Returns start and end times in an array, type { start: string; end: string }[]
```


