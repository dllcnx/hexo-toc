/* globals hexo: true */

var assign = require('object-assign');
var filter = require('./lib/filter');
var slugify = require('./lib/slugify');

var config = hexo.config.mdtoc || {};
hexo.config.mdtoc = assign({}, config, { slugify: slugify.load() });

hexo.extend.filter.register('before_post_render', filter.insert);
