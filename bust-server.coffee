url = Npm.require 'url'
myjson = Npm.require('../client/program.json')

hashes = {}
_.each(myjson.manifest, (resource) ->
  if resource.where is 'client'
    hashes[url.parse(resource.url).pathname] = resource.hash
)
__meteor_runtime_config__.staticURLHashes = hashes
