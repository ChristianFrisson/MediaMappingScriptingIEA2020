# Navigation dans des collections multimedia: de la cartographie vers l'écriture.

Slides

## Authors

* [Christian Frisson](https://frisson.re)

## Presentation

Source: [slides.md](slides.md)

### Requirements

- Install Node.js and NPM.
- Install dependencies (once or after upgrades):
```
npm i
```

### Development

Write markdown while [reveal-md](https://github.com/webpro/reveal-md)'s local server converts to html slides.

- Run the local server:
```
npm run dev
```

### Release

- Convert md to html:
```
npm run html
```
- (Optional) Convert md to pdf:
```
npm run pdf
```
- Publish to github pages (gitlab pages automated with [continuous integration](.gitlab-ci.yml))
```
npm run publish
```

### Controls

- Use `Ctrl + click` to zoom on slides, useful for images
- Press `o` to show the slide overview
- Press `s` to open the speaker notes window (requires allowing popups)

Check the [reveal.js](https://github.com/hakimel/reveal.js/#speaker-notes) README for more tips.
