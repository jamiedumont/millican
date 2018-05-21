## Getting Started

1. Install a fresh copy of Statamic following the instructions in the [docs](https://docs.statamic.com/installing)
2. Replace the `/site` and `/assets` folders with the ones from this repo.
3. Create a new user using `php please make:user` if you wish to use the Control Panel


## Basic Usage

Whilst you can just install the theme as above and see the site running, you'll want to change a few things first.

### Global Variables
A number of global variables have been setup to help you customise the theme.

`site_name`: The name of your site that appears in the browser's tab, search results, etc

`site_description`: A description of your site and it's content that it used as a fallback in search engine results when a more specific description is unavailble.

`contact_email`: A contact email address that is used in the footer of the site.

`logo`: Your logo. A PNG with a transparent background, or and SVG is best. If you use an SVG that inherits it's fill colour (as per the example Millican logo) then it will respond the `colour` variable that is passed to `{{ partial:nav colour="white" }}` and change colour on hover.

`lead_image`: A fallback image used in page headers when one hasn't been explicitely set by the page or entry.

An API key is also needed for Google's JS maps and Static maps. This is stored under `{{ api_keys:google_maps }}` variable. I have included an API key in the repo so that you can preview the site without setting up your own keys. *Please, please, please change this for your own keys otherwise I'll be forced to revoke the included ones!*

Variables for social media networks are included, although they aren't currently being used in the templates (coming soon!).

### Adding Content

If you want to wipe all the content from the site, you can do so by running `php please clear:site`, being careful to not delete the theme! If you're going to do this, please take a look at the sample content first to see how it all fits together.

When adding new content, it's advisable to add new places first before writing a post that references the new place.


## Customising the theme

Millican uses [TailwindCSS](https://tailwindcss.com) for styling, which is most useful when it can be customised. This requires a build/compilation step. Millican uses [Brunch](https://brunch.io) as it's build tool as I've found it to be simple to configure, fast to compile and has a good ecosystem of plugins.

### Brunch

#### Installing
If you don't already have Brunch installed globally, you'll need to do so using either Yarn or NPM:

NPM: `npm install brunch -g`

Yarn: `yarn global brunch`

Whilst you _could_ run Brunch from `node_modules` without installing it globally, it's more fiddly to use like this.

#### Running

Brunch runs from the theme's directory (`/site/themes/millican`) and will compile the CSS and JS files from `/site/themes/millican/src` into the theme's default folders (`/site/themes/millican/[css, js]`).

Run Brunch with: `brunch build`

Or have Brunch watch for changes and compile automatically with: `brunch watch`

It's best to run: `brunch build --production` before deploying, as this will minify the CSS and JS.


Full details of how Brunch works can be found at it's [documentation](https://brunch.io/docs/getting-started), but here's a brief summary. Any files without a preceding underscore (e.g. `_example.css`) will automatically be concatenated with the main file (`millican.css`). Files with an underscore at the start of their filename must be imported.

Brunch has been configured to use PostCSS to import, format and autoprefix CSS.

#### NEW! PurgeCSS
You can now optionally run `npm run css:purge` after your Brunch build (before deployment for example) to reduce the size of the CSS down to around 3kB!

### TailwindCSS

TailwindCSS is a simple and flexible utility-first CSS framework. It's built with customisation and extension in mind.

You shouldn't need to do anything to further customise Tailwind, although it's variables can be modified (at `/site/themes/millican/tailwind.js`) to change spacing, colours or just reduce filesize.

`millican.css` (in `/src`) has been structured with imports to allow any and all of Tailwind's classes to be edited or used in the construction of custom classes using `@apply`. This approach is preferable as it maintains consistency across the design.

For example...
```
.button {
  @apply .px-3 .py-2 .uppercase .bg-cherry;
}
```
...is preferable to...
```
.button {
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  background: rgba(xxx,xxx,xxx,xxx);
}
```
... as it ensures that the spacing and colours are consistent with those used elsewhere, and any changes to Tailwind's configuration will cascade to these custom classes.

Full details can be found at Tailwind's [docs](https://tailwindcss.com/docs/what-is-tailwind).

### Templates

Most of Millican's templates use Statamic partials (`{{ partial:xyz }}`) wherever possible to make it easy to move blocks of code around and reduce repetition.

## Support
For any help installing or customising the theme, please just [email me](mailto:jamiedumont@icloud.com).
