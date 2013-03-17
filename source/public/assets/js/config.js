define(function() {
	require.config({
		shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'jquery': {
          exports: '$'
        }
    },
    paths: {
			jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
			bootstrap: 'bootstrap.min'
		}
	});

  require(['bootstrap'], function() {      
    
  });
});