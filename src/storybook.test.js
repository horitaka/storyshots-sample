import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  storyNameRegex: /^((?!.*?Excluedsnapshot).)*$/
});
