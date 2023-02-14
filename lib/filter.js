var toc = require('markdown-toc');
var assign = require('object-assign');

exports.insert = function (data) {
  var options = assign({}, this.config.mdtoc);

  // add class option
  if (options.class) {
    data.content = data.content.replace("<!-- toc -->", '<div class="' + options.class + 'Start"></div><!-- toc --><div class="' + options.class + 'End"></div>');
  }

  data.content = toc.insert(data.content, options);
  return data;
};
