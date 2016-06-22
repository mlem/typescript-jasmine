# Typescript with karma andjasmine but no map files

to run this example:

```
npm install
npm run tsc
npm run test
```

## Debugging

You chrome should open a window with the tests.
Click on the `debug` button within the displayed site and press `F12`.
You will see generated javascript code in your source-files.
Press `Ctrl + P` and type `Player.js`

## SpecRunner.html

I've left `SpecRunner.html` in the sourcecode.
If you want to see how it stil runns without karma, you can test it with just opening this html file in your browser.
But you still need to install npm packages.