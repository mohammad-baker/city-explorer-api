
'use strict';

class movieOfCity {
  constructor(video,original_language,original_title, overview, vote_average, count, img, popularity, release_date) {
    this.count = count;
    this.img = img;
    this.popularity = popularity;
    this.release_date = release_date;
    this.original_title = original_title;
    this.overview = overview;
    this.vote_average = vote_average;
   this.original_language=original_language
   this.video=video
  }
}

module.exports = movieOfCity;