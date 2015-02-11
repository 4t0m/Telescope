heroModules.push({
  template: 'taglineBanner',
  order: 0
});

var showTagline = {
  propertyName: 'showTagline',
  propertySchema: {
    type: Boolean,
    optional: true,
    label: 'Tagline banner',
    autoform: {
      group: 'general',
      instructions: 'Show tagline on homepage.'
    }
  }
}
addToSettingsSchema.push(showTagline);