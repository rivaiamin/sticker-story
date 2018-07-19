angular.module('animateStoryApp', ['webcam'])
.controller('camCtrl', function($scope) {

    $scope.mainCam = {
      // the fields below are all optional
      videoHeight: '100%',
      videoWidth: '100%',
      video: null // Will reference the video element on success
    };

    $scope.onStream = function(stream) {

    }

    $scope.onError = function(err) {
      alert(err);
    }

    $scope.onSuccess = function() {
      console.log('test camera 2')
    }

    $scope.startCapture = function() {
      var capturer = new CCapture( {
        format: 'webm',
        verbose: true,
        framerate: 24,
        //startTime: 0,
        autoSaveTime: 0,
        frameLimit: 0,
        quality: 99,
        timeLimit: 4,
      });

      // Create a capturer that exports a WebM video
      capturer.start();
    }

    $scope.stopCapture = function() {
      capturer.stop();
      capturer.save();
    }
})
