# svelte-cleavejs

Svelte action for [Cleave.js](https://github.com/nosir/cleave.js)

## Installation

Install with npm or yarn:

```bash
npm install --save svelte-cleavejs
```

## Usage

```html
<script>
	import { cleave } from 'svelte-cleavejs'
</script>

<input use:cleave={options} />
```

The accepted `options` are the same as the ones documented in [cleave.js JavaScript API Options](https://github.com/nosir/cleave.js/blob/master/doc/options.md).

## Licence

svelte-cleavejs is licensed under the [Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)