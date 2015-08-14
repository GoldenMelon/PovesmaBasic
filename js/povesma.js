/**
 * Created by goldenmelon on 13.08.15.
 */

function channel_click(id){
    if(id==top){
        window.open("about.html", "_self")
    } else if (id==right) {
        window.open("projects.html", "_self")
    } else if (id==bottom) {
        window.open("contact.html", "_self")
    } else if (id==left) {
        window.open("documents.html", "_self")
    }

    // anon wrapper function, 2 second delay
    /*setTimeout( function () {

    } , 2000 );*/
}