/**
 * Shared utility functions for generating CSS class names
 * Updated for tracking
 */

import classnames from 'classnames';

export const blockClass = (blockName, modifiers = {}) => {
    const baseClass = `maw-${blockName}`;
    const classes = { [baseClass]: true };

    Object.keys(modifiers).forEach(key => {
        if (modifiers[key]) {
            classes[`${baseClass}--${key}`] = true;
        }
    });

    return classnames(classes);
};

export const elementClass = (blockName, element, modifiers = {}) => {
    const baseClass = `maw-${blockName}__${element}`;
    const classes = { [baseClass]: true };

    Object.keys(modifiers).forEach(key => {
        if (modifiers[key]) {
            classes[`${baseClass}--${key}`] = true;
        }
    });

    return classnames(classes);
};

export const validateClassNames = (className) => {
    const classes = className.split(' ');
    const invalidClasses = classes.filter(cls => {
        return cls && !cls.startsWith('maw-') && !cls.startsWith('wp-');
    });

    if (invalidClasses.length > 0) {
        console.warn(
            'Invalid class names detected (should start with maw- or wp-):',
            invalidClasses.join(', ')
        );
        return false;
    }

    return true;
};
