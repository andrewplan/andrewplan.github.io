import './project.scss';
import projectHtml from './project-tmpl.html';

function projectCtrl( $sce ) {
    this.$onInit = () => {
        this.projectObj = {};

        if ( this.name === 'musikbox' ) {
            this.projectObj = this.musikbox;
        }
        else if ( this.name === 'songjam' ) {
            this.projectObj = this.songjam;
        }
        else if ( this.name === 'perfect-chords' ) {
            this.projectObj = this.perfectChords;
        }
    };

    this.swiper = {};

    this.goToSlide = () => {
      this.swiper.slideTo( this.slideNum );
    };

    this.next = () => {
      this.swiper.slideNext();
    };

    this.prev = () => {
      this.swiper.slidePrev();
    };

    this.trustSrc = function( src ) {
        return $sce.trustAsResourceUrl( src );
    }

    this.musikbox =
        {
            name: "MUSIKBOX"
            , tagline: "A collaboration and discovery platform for musicians."
            , walkthroughUrl: "https://www.youtube.com/embed/BOPjYYyGtn4"
            , facts: [
                "Specialized in back-end within a three-person team."
                , "Built instant messaging and notifications system with persistent data using Socket.IO and Mongoose."
                , "Built server-side recording feature with BinaryJS and Amazon S3 that allows users to make and share recordings with each other."
                , "Created 5 database collections in MongoDB to store the various types of data being communicated."
            ]
            , websiteUrl: "https://musikbox.us"
            , githubUrl: "https://github.com/dm4-musikbox/groupProject"
        };

    this.songjam =
        {
            name: "SONGJAM"
            , tagline: "Voice recording application designed for musicians."
            , walkthroughUrl: "https://www.youtube.com/embed/gJcuJOar4xU"
            , facts: [
              "Won award for ‘Best Overall' server project at DevMountain Web Development Immersive."
              , "Built entire application by myself, including the system that transcribes lyrics with Google Cloud Speech API and uploads recordings to Amazon S3."
              , "Created feature that allows users to bookmark important moments while recording, which then display as timed playback buttons, similar to SoundCloud's timed comments."
            ]
            , websiteUrl: "https://songjam.us"
            , githubUrl: "https://github.com/andrewplan/songjam"
        };

    this.perfectChords =
        {
            name: "PERFECT CHORDS"
            , tagline: "Chord progression generator powered by Hooktheory API."
            , walkthroughUrl: "https://www.youtube.com/embed/tG-25Z-kmZ8"
            , facts: [
              "Utilized Angular directives and animations to create a clean, interactive grid interface."
              , "Communicated with Hooktheory API administrator to resolve Angular-related access issues."
            ]
            , websiteUrl: "https://andrewplan.github.io/perfect-chords"
            , githubUrl: "https://github.com/andrewplan/perfect-chords"
        };

}

const projectComponent = {
    template: projectHtml
    , controller: projectCtrl
    , bindings:
        {
            name: '<'
        }
};

export default projectComponent;
