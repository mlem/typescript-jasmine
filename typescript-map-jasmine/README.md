# Typescript with jasmine and sourcemap files

to run this example:

```
npm install
npm run tsc
```

then open `SpecRunner.html` from filesystem
(I don't know why, but if you open SpecRunner.html with IntelliJ Server
it will not load the map files correctly)

## Debugging

Open `SpecRunner.html` with Chrome and press `F12`.
You will see generated javascript code in your source-files.
Press `Ctrl + P` and type `Player.ts`