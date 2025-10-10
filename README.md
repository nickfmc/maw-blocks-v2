# MAW Blocks - WordPress Gutenberg Blocks Plugin

A feature-rich, style-light WordPress Gutenberg blocks plugin designed for custom theme development. Built for developers who need flexible, reusable blocks that work across diverse design systems.

## Philosophy

**Feature-Rich, Style-Light**

MAW Blocks provides extensive functionality with minimal styling interference. Every block includes only the CSS necessary for core functionality, making it easy to style blocks to match any theme design.

## Core Principles

1. **Modular Architecture** - Enable only the blocks you need
2. **Minimal Styling** - Functional CSS only, theme handles aesthetics
3. **Clean Naming** - All classes use `.maw-` prefix with BEM methodology
4. **Global Defaults** - Set block configurations once, reuse everywhere
5. **No Dependencies** - Pure JavaScript, no external slider libraries

## Installation

1. Upload the `maw-blocks` directory to `/wp-content/plugins/`
2. Activate the plugin through the WordPress admin
3. Navigate to Settings > MAW Blocks to configure

## Available Blocks

### MAW Video Block
Viewport-aware video player with autoplay functionality.

**Features:**
- Autoplay when entering viewport 
- Pause when leaving viewport
- Play once or continuous mode
- Poster image support
- Aspect ratio controls (16:9, 4:3, 1:1, 9:16)
- Muted/unmuted options
- Show/hide controls

**CSS Classes:**
```
.maw-video
  .maw-video__wrapper
  .maw-video__element
.maw-video--has-poster
.maw-video--aspect-16-9
```

### MAW Slider Block
General purpose slider using WordPress InnerBlocks for maximum flexibility.

**Features:**
- Flexible content via InnerBlocks
- Configurable arrows (show/hide, icon choice)
- Dot navigation (below, inside, side positioning)
- Autoplay with speed control
- Loop option
- Slides per view (with responsive settings)
- Spacing between slides
- Transition effects (slide, fade)

**CSS Classes:**
```
.maw-slider
  .maw-slider__container
  .maw-slider__wrapper
  .maw-slider__slide
  .maw-slider__navigation
  .maw-slider__arrow
    .maw-slider__arrow--prev
    .maw-slider__arrow--next
  .maw-slider__dots
    .maw-slider__dot
    .maw-slider__dot--active
.maw-slider--arrows-visible
.maw-slider--dots-visible
.maw-slider--dots-below
.maw-slider--dots-side
```

### MAW Testimonial Slider Block
Specialized slider for testimonials with flexible field management.

**Features:**
- Add unlimited testimonials
- Toggle fields on/off (image, rating, title, quote, citation)
- Reorder field display
- Rating styles (stars or numeric)
- Content alignment (left, center, right)
- All slider navigation options
- Schema.org markup for SEO

**CSS Classes:**
```
.maw-testimonial-slider
  .maw-testimonial-slider__container
  .maw-testimonial-slider__wrapper
  .maw-testimonial-slider__slide
  .maw-testimonial-slider__content
  .maw-testimonial-slider__image
  .maw-testimonial-slider__rating
    .maw-testimonial-slider__stars
    .maw-testimonial-slider__number
  .maw-testimonial-slider__title
  .maw-testimonial-slider__quote
  .maw-testimonial-slider__citation
  .maw-testimonial-slider__navigation
  .maw-testimonial-slider__arrow
  .maw-testimonial-slider__dots
  .maw-testimonial-slider__dot 
.maw-testimonial-slider--align-left
.maw-testimonial-slider--align-center
.maw-testimonial-slider--align-right
```

## Settings

### Enable/Disable Blocks
Control which blocks are registered and loaded. Disabled blocks won't register with WordPress or load any assets, preventing bloat.

### Global Defaults
Set default configurations for each block. When you add a block to a page, it starts with your predefined settings rather than generic defaults.

### Supabase Sync
Connect multiple WordPress installations to sync MAW Blocks settings via Supabase. Perfect for agencies managing multiple client sites.

### Import/Export
Export settings as JSON for backup or deployment to other sites. Import settings from other MAW Blocks installations.

## Styling Blocks in Your Theme

All blocks use CSS custom properties for easy theming:

```css
:root {
  --maw-spacing-xs: 0.5rem;
  --maw-spacing-sm: 1rem;
  --maw-spacing-md: 1.5rem;
  --maw-spacing-lg: 2rem;
  --maw-spacing-xl: 3rem;

  --maw-color-primary: #000000;
  --maw-color-background: #ffffff;
  --maw-color-text: #333333;
  --maw-color-border: #dddddd;

  --maw-nav-arrow-size: 2.5rem;
  --maw-nav-arrow-color: var(--maw-color-primary);
  --maw-nav-dot-size: 0.75rem;
  --maw-nav-dot-color: var(--maw-color-primary);

  --maw-transition-speed: 300ms;
  --maw-transition-timing: ease-in-out;
}
```

Override individual blocks in your theme:

```css
.maw-video {
  /* Your custom video styling */
}

.maw-slider__arrow {
  background: #your-brand-color;
  border-radius: 0; /* Square arrows instead of circles */
}

.maw-testimonial-slider__quote {
  font-family: 'Your Serif Font', serif;
  font-size: 1.5rem;
}
```

## Hooks and Filters

### PHP Filters

```php
// Modify available blocks
add_filter('maw_blocks_available_blocks', function($blocks) {
    // Add custom block
    $blocks['custom-block'] = [
        'name' => 'maw-blocks/custom-block',
        'title' => 'Custom Block',
        'description' => 'Your custom block',
        'icon' => 'star-filled',
        'category' => 'common',
        'path' => 'blocks/custom-block'
    ];
    return $blocks;
});
```

## File Structure

```
maw-blocks/
├── maw-blocks.php              # Main plugin file
├── package.json                # Node dependencies
├── includes/                   # PHP classes
│   ├── class-block-registry.php
│   ├── class-settings-manager.php
│   ├── class-asset-loader.php
│   ├── class-supabase-sync.php
│   └── admin/
│       └── settings-page.php
├── blocks/                     # Block definitions
│   ├── video/
│   │   ├── block.json
│   │   ├── index.js
│   │   ├── edit.js
│   │   ├── save.js
│   │   ├── style.scss
│   │   └── editor.scss
│   ├── slider/
│   └── testimonial-slider/
├── src/                        # Source files
│   ├── shared/                 # Shared components
│   │   ├── components/
│   │   └── utils/
│   └── frontend/               # Frontend JS
│       ├── index.js
│       ├── viewport-observer.js
│       └── slider-controller.js
└── assets/                     # Shared assets
    └── scss/
        ├── _variables.scss
        ├── _mixins.scss
        └── editor.scss
```

---

# AI Assistant Guidelines for Block Development

This section provides strict guidelines for AI assistants when creating new blocks for the MAW Blocks plugin.

## Mandatory Rules

### 1. CSS Class Naming Convention

**CRITICAL:** ALL CSS classes MUST start with `.maw-` prefix.

**Structure:** Use BEM (Block Element Modifier) methodology:
```
.maw-{block-name}                          // Block
.maw-{block-name}__{element}               // Element
.maw-{block-name}--{modifier}              // Modifier
.maw-{block-name}__{element}--{modifier}   // Element with modifier
```

**Examples:**
```css
.maw-video
.maw-video__wrapper
.maw-video__element
.maw-video--has-poster
.maw-video__element--playing
```

**Never Do:**
```css
.video              /* Missing maw- prefix */
.mawVideo           /* Wrong format */
.maw_video          /* Wrong separator */
```

### 2. Block Registration Requirements

Every block MUST have:

1. **block.json** - Block metadata with all attributes
2. **index.js** - Block registration entry point
3. **edit.js** - Edit component for Gutenberg editor
4. **save.js** - Save component for frontend output
5. **style.scss** - Minimal functional styles only
6. **editor.scss** - Editor-specific styles

### 3. block.json Structure

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "maw-blocks/{block-name}",
  "version": "1.0.0",
  "title": "MAW {Block Title}",
  "category": "common|layout|media|widgets",
  "icon": "wordpress-icon-name",
  "description": "Clear description of block purpose",
  "keywords": ["relevant", "keywords"],
  "textdomain": "maw-blocks",
  "editorScript": "file:./index.js",
  "editorStyle": "file:./editor.css",
  "style": "file:./style.css",
  "attributes": {
    "exampleAttribute": {
      "type": "string|boolean|number|array|object",
      "default": "appropriate-default"
    }
  },
  "supports": {
    "html": false,
    "anchor": true,
    "customClassName": true,
    "spacing": {
      "margin": true,
      "padding": true
    }
  }
}
```

### 4. Import Requirements

**ALWAYS import utility functions:**
```javascript
import { blockClass, elementClass } from '../../src/shared/utils/classnames';
```

**Use in edit.js:**
```javascript
const blockProps = useBlockProps({
    className: blockClass('block-name', {
        'modifier-name': condition
    })
});
```

**Use in save.js:**
```javascript
<div className={elementClass('block-name', 'element-name')}>
```

### 5. InspectorControls Pattern

Use shared components when possible:
```javascript
import { AlignmentPanel, NavigationPanel } from '../../src/shared/components/BlockControls';

<InspectorControls>
    <AlignmentPanel
        alignment={alignment}
        onChange={(value) => setAttributes({ alignment: value })}
    />
</InspectorControls>
```

### 6. Styling Guidelines

#### Frontend Styles (style.scss)

**Minimal Functional CSS Only:**
```scss
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

.maw-block-name {
  // Only styles required for functionality
  // Layout, positioning, visibility
  // NO decorative styles (colors, fonts, borders, shadows)

  &__element {
    // Use CSS custom properties
    color: var(--maw-color-text);
  }

  &--modifier {
    // Modifier styles
  }
}
```

**Use mixins:**
```scss
.maw-block-name {
  @include maw-container;

  @include maw-responsive(mobile) {
    // Mobile-specific styles
  }
}
```

#### Editor Styles (editor.scss)

**CRITICAL:** Editor styles should provide a premium, polished admin experience that makes the plugin feel professional and consistent.

**Required Editor Styling Pattern:**

```scss
@import '../../assets/scss/variables';

.maw-block-name {
  position: relative;
  border: 2px solid #e8ecf1;
  border-radius: 12px;
  background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  // Hover state with brand color
  &:hover {
    border-color: #BRAND-COLOR;  // Unique per block
    box-shadow: 0 4px 16px rgba(BRAND-COLOR-RGB, 0.12);
  }

  // Floating badge label
  &::before {
    content: 'Block Name';
    position: absolute;
    top: -12px;
    left: 20px;
    padding: 4px 12px;
    background: linear-gradient(135deg, #BRAND-COLOR 0%, #BRAND-COLOR-DARKER 100%);
    color: white;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(BRAND-COLOR-RGB, 0.3);
  }

  // Additional element styling...
}
```

**Brand Color Assignments:**
- Video Block: `#10b981` (Green)
- Slider Block: `#3b82f6` (Blue)
- Testimonial Slider: `#8b5cf6` (Purple)
- Future blocks: Use distinct colors (orange, red, teal, etc.)

**Editor Panel Styling:**

Import the shared panel styles and customize focus colors:

```scss
.maw-block-name {
  .components-panel {
    .components-toggle-control {
      .components-form-toggle {
        &.is-checked {
          .components-form-toggle__track {
            background-color: #BRAND-COLOR;
          }
        }
      }
    }

    .components-select-control__input,
    .components-text-control__input,
    .components-input-control__input {
      &:focus {
        border-color: #BRAND-COLOR;
        box-shadow: 0 0 0 3px rgba(BRAND-COLOR-RGB, 0.1);
      }
    }
  }
}
```

**Editor Styling Requirements:**
- Consistent gradient backgrounds
- Smooth transitions and hover states
- Floating badge labels with block name
- Brand color differentiation per block
- Polished form controls with focus states
- Professional spacing and typography
- Subtle shadows and depth
- Visual feedback on all interactions

### 7. Global Defaults Support

**NEVER** hardcode default values in edit.js. Use the defaults utility:

```javascript
import { mergeWithDefaults } from '../../src/shared/utils/defaults';

// In edit component
useEffect(() => {
    const defaults = mergeWithDefaults('block-name', attributes);
    // Apply defaults if needed
}, []);
```

### 8. Accessibility Requirements

- All interactive elements MUST have proper ARIA labels
- Use semantic HTML elements
- Keyboard navigation MUST work
- Screen reader compatible

```javascript
<button
    className={elementClass('block-name', 'button')}
    aria-label="Descriptive label"
    type="button"
>
```

### 9. Data Attributes for JavaScript

Use data attributes for frontend JavaScript interaction:

```javascript
<div
    {...blockProps}
    data-autoplay={autoplay}
    data-speed={speed}
>
```

### 10. Register Block in Main Plugin

After creating a block, add it to the registry in `maw-blocks.php`:

```php
private function register_available_blocks() {
    $this->available_blocks = [
        'new-block' => [
            'name' => 'maw-blocks/new-block',
            'title' => 'MAW New Block',
            'description' => 'Description of the block',
            'icon' => 'wordpress-icon',
            'category' => 'common',
            'path' => 'blocks/new-block'
        ]
    ];
}
```

## Block Creation Checklist

When creating a new block, verify:

- [ ] All CSS classes use `.maw-` prefix
- [ ] BEM naming convention followed
- [ ] block.json complete with all attributes
- [ ] Shared utilities imported (blockClass, elementClass)
- [ ] InspectorControls use shared components where possible
- [ ] Frontend SCSS only includes functional styles
- [ ] Editor SCSS includes premium styling with brand color
- [ ] Floating badge label added to editor styles
- [ ] Gradient backgrounds and hover effects in editor
- [ ] Panel controls styled with brand color focus states
- [ ] SCSS imports variables and mixins
- [ ] CSS custom properties used for theming
- [ ] Global defaults support included
- [ ] Accessibility attributes present
- [ ] Data attributes added for frontend JS
- [ ] Block registered in main plugin file
- [ ] Responsive styles included
- [ ] Editor-specific styles separated from frontend

## Common Mistakes to Avoid

1. **Forgetting .maw- prefix** - Every class MUST start with .maw-
2. **Adding decorative styles to frontend** - Only functional CSS in style.scss
3. **Generic editor styling** - Editor should look premium with brand colors
4. **Missing floating badge label** - All blocks need the ::before badge
5. **Inconsistent brand colors** - Each block type needs its own color
6. **Hardcoding colors/fonts in frontend** - Use CSS custom properties
7. **Skipping accessibility** - ARIA labels are required
8. **Not using shared components** - Reuse InspectorControls panels
9. **Missing panel focus styling** - Form controls need brand color focus states
10. **Missing data attributes** - Frontend JS needs these
11. **Incomplete block.json** - All attributes must be defined
12. **Not registering in main file** - Block won't load without it

## Testing New Blocks

1. Enable the block in Settings > MAW Blocks
2. Add block to a page in Gutenberg editor
3. Configure all available settings
4. Save and view on frontend
5. Test responsive behavior
6. Verify JavaScript functionality
7. Check accessibility with screen reader
8. Validate CSS classes follow naming convention

## Questions to Ask Before Creating a Block

1. Does this block need to be in the plugin or could it be theme-specific?
2. What settings should have global defaults?
3. What's the minimal CSS needed for functionality?
4. Does this block need frontend JavaScript?
5. What accessibility features are required?
6. Should this block use InnerBlocks for flexibility?

---

## Development

### Build Commands

```bash
# Install dependencies
npm install

# Development build (watch mode)
npm run start

# Production build
npm run build

# Lint JavaScript
npm run lint:js

# Format code
npm run format
```

### System Requirements

- WordPress 6.0+
- PHP 7.4+
- Node.js 18+
- Modern browser with ES6 support

## Support

For issues, feature requests, or contributions, please contact the development team.

## License

GPL-2.0+

## Credits

Built for custom WordPress theme development. Designed to eliminate repetitive block development while maintaining complete design flexibility.

