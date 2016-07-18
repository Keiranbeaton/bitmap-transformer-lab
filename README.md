# bitmap-transformer-lab

My group members were Tre and Marshall, but we only worked together on Friday and are submitting separate assignments.

For my transform I took the non-palette bitmap and made it greyscals.

the node command to run my app is node bin/bitmapCLI(). This will call the command line interface, which calls the program and runs the functions used to transform the bitmap from its original state to the transformed, greyscale version. It uses functions from the file lib/bitmap-reader.js to do this.

To run my tests simply use mocha in the command line.

To run gulp, which will ensure that there are no linter issues in my code, type node gulpfile in the command line. This will run the linter over all the code in my test, lib, and bin folders and check that they pass.
