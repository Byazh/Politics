

function openNav() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("menu_obscurer").style.opacity = "0.5";
    document.getElementById("body").style.overflow = "hidden";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("menu_obscurer").style.opacity = "0.0";
    document.getElementById("body").style.overflow = "visible";
}

/* t is topic, the starting part of the id */

function show(yesOrNo, t) {
    const tot = document.getElementById(t);
    // the pro and cons parties
    const yes = document.getElementById(t + "yes");
    const no = document.getElementById( t + "no");
    // the buttons yes or no
    const y = document.getElementById(t + "y");
    const n = document.getElementById(t + "n");

    if ((n.style.opacity === "0.5" && y.style.opacity === "1" && yesOrNo) || y.style.opacity === "0.5" && n.style.opacity === "1" && !yesOrNo) {
        tot.style.display = "none";
        n.style.opacity = "1";
        y.style.opacity = "1";
        return;
    }

    tot.style.display = "grid";
    if (yesOrNo === true) {
        no.style.opacity = "0.3";
        yes.style.opacity = "1";
        n.style.opacity = "0.5";
        y.style.opacity = "1";
        tot.removeChild(no);
        tot.appendChild(no);
    } else {
        no.style.opacity = "1";
        yes.style.opacity = "0.3";
        n.style.opacity = "1";
        y.style.opacity = "0.5";
        tot.removeChild(yes);
        tot.appendChild(yes);
    }
}

function showMore(t) {
    const tot = document.getElementById(t);
    const b = document.getElementById(t + "b");
    const showLess = document.getElementById(t + "bl")
    if (showLess.style.display === "inline-block") {
        tot.style.display = "none";
        showLess.style.display = "none";
        b.style.display = "inline-block";
        b.className = "show_more";
    } else {
        tot.style.display = "inline-block";
        b.style.display = "none";
        showLess.style.display = "inline-block";
        showLess.className = "show_more"
    }

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}