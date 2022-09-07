# Arete's Website

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```


## Updating Events Page
To edit the events page (i.e. add or remove information), take the following steps:
- First, upload the event's reference picture to our Amazon S3 bucket:
```bash
aws s3 cp path-to-picture s3://arete-bucket
```

- Next, add the event's details to the ```events.json``` file. Follow the given format:
```bash
{
    "picture": "Link to the event's flyer stored in an AWS S3 bucket",
    "tag": "Was it an outreach or a boot camp",
    "event": "Event's Title",
    "summary": "Tell us about the event and its impact",
    "more": "Link to picture folder in Google photos"
}
```        

- Lastly, run the following command:
```bash
aws s3 cp ./events.json s3://arete-bucket
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
