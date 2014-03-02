Package.describe({
  summary: "template helper for cache busting URLs"
});

Npm.depends({
  "url": "0.7.9"
});

Package.on_use(function (api) {
  api.use('handlebars', 'client');
  api.use(['coffeescript', 'underscore'], ['client', 'server']);
  api.add_files('bust-server.coffee', 'server');
  api.add_files('bust-client.coffee', 'client');
});
