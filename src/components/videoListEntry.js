angular.module('video-player')
.component('videoListEntry', {
  templateUrl: "src/templates/videoListEntry.html",
  bindings: {
    video: '<',
    selectVideo: '<'
  }
  // controller: function() {
  //   this.video = videos[0];
  // }
});
