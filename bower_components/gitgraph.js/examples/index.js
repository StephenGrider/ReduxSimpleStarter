/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

var myTemplateConfig = {
  colors: [ "#F00", "#0F0", "#00F" ], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    spacingX: 50
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: true,
      displayBranch: false,
      displayHash: false,
      font: "normal 12pt Arial"
    },
    shouldDisplayTooltipsInCompactMode: false, // default = true
    tooltipHTMLFormatter: function ( commit ) {
      return "<b>" + commit.sha1 + "</b>" + ": " + commit.message;
    }
  }
};
var myTemplate = new GitGraph.Template( myTemplateConfig );

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: "metro"       // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
  //, reverseArrow: true  // to make arrows point to ancestors, if displayed
  //, orientation: "vertical-reverse"
  //, mode: "compact"     // special compact mode : hide messages & compact graph
};
var gitGraph = new GitGraph( config );

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

// Create branch named "master"
var master = gitGraph.branch( "master" );

// Commit on HEAD Branch which is "master"
gitGraph.commit( "Initial commit" );

// Add few commits on master.
gitGraph.commit( "My second commit" ).commit( "Add awesome feature" );

// Create a new "dev" branch from "master"
var dev = gitGraph.branch( "dev" );
dev.commit( "Youhou \\o/" );

// Commit again on "master"
master.commit( "I'm the master !" );

// Advanced commit method with style and specific author (HEAD)
var commitConfig = {
  dotColor: "white",
  dotSize: 10,
  dotStrokeWidth: 10,
  messageHashDisplay: false,
  messageAuthorDisplay: true,
  message: "Alors c'est qui le papa ?",
  tooltipDisplay: false,
  author: "Me <me@planee.fr>"
};
gitGraph.commit( commitConfig );

/***********************
 *      CHECKOUT       *
 ***********************/

// Checkout on master branch for create "test" since master
//master.checkout();

/***********************
 *       DETAILS       *
 ***********************/

var commitWithDetailsConfig = {
  message: "test",
  detailId: "detail" // Id of detail div (available in normal vertical mode only)
};
gitGraph.commit( commitWithDetailsConfig ).commit();
dev.commit().commit(); // 2 default Commit on "dev"

/***********************
 *    CUSTOMIZATION    *
 ***********************/

gitGraph.author = "Fabien0102 <fabien0102@planee.fr>";
master.commit();

/***********************
 *       MERGES        *
 ***********************/

master.checkout();

// Merge "dev" branch into HEAD (which is "master"), with a default message
dev.merge();

// Create a "test" branch and merge in into "master" with a custom message and tag.
var test = gitGraph.branch( "test" );
test.commit( "Final commit" );
test.merge( master, "My special merge commit message" );

// Then, continue committing on the "test" branch
test.commit( { message: "It works !" } );

/***********************
 *        TAGS         *
 ***********************/

// Add a tag to a commit
test.commit( { message: "Here you can see something", tag: "a-tag" } );

// Don't display tag box
test.commit( { message: "Here is a fresh new tag", tag: "my-tag", displayTagBox: false } );

// Perform a merge, with a tag
test.merge( master, { message: "New release", tag: "v1.0.0" } );

/***********************
 *       EVENTS        *
 ***********************/

gitGraph.canvas.addEventListener( "graph:render", function ( event ) {
  console.log( event.data.id, "has been rendered with a scaling factor of", gitGraph.scalingFactor );
} );

gitGraph.canvas.addEventListener( "commit:mouseover", function ( event ) {
  console.log( "You're over a commit.", "Here is a bunch of data ->", event.data );
  this.style.cursor = "pointer";
} );

gitGraph.canvas.addEventListener("commit:mouseout", function (event) {
  console.log( "You just left this commit ->", event.data );
  this.style.cursor = "auto";
});

// Attach a handler to the commit
test.commit( {
  message: "Click me!",
  author: "Nicolas <me@planee.fr>",
  onClick: function ( commit ) {
    console.log( "You just clicked my commit.", commit );
  }
} );
