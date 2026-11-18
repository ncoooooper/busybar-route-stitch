# Route Stitch

Draw a closed route through every beacon without reusing an edge on a tiny switchback grid.

Fit a route puzzle on a five-by-four grid. You can revisit a junction from a different direction, but once a connecting edge is used, you have to get home another way.

## Stitch a route to a beacon

1. Start at home on the left of the grid. Turn the wheel to select the direction shown by the letter at the right edge.
2. Click to move one cell. In the first clip the line extends east across the top row. Gold squares are the three beacons.
3. Continue toward a beacon using unused edges. The rear counts how many of the board’s beacons your path includes.

![A horizontal path grows across the top row toward the gold beacons.](media/guide/stitch-east.gif)

## Back out of a dead end

1. Turn toward a free edge and click. A move beyond the grid or across an edge already used leaves the path in place.
2. Press **Start** to undo just the last move. That edge is available again. The clip shows the southward branch shorten.
3. Return home after visiting all three beacons. Click after **Loop complete** to advance to the next of four boards.

![The path turns south and the last segment is undone.](media/guide/undo-southward-step.gif)

## Example from the emulator

You can use an intersection more than once by entering and leaving through unused edges. Crossing a previously used edge in reverse still counts as reuse. Hold **Start** if you want to discard the path and begin the current board again.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)
