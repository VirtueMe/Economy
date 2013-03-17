define(function() {
	require.config({
		shim: {
      'bootstrap': {
          deps: ['jquery']
      },
      'jquery': {
        exports: '$'
      },
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    },
    paths: {
			jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
			bootstrap: 'bootstrap.min',
      backbone: 'backbone',
      underscore: 'underscore'
		}
	});

  require(['bootstrap'], function() {

  });
});