var numSteps = 100;
window.addEventListener("load", function(event) {
    boxElement = document.querySelectorAll(".grid-item");
    createObserver();
}, false);
function createObserver() {
    var observer;
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };
    observer = new IntersectionObserver(handleIntersect, options);
    boxElement.forEach((element)=>{
        observer.observe(element);
    });
}
function buildThresholdList() {
    var thresholds = [];
    for(var i = 1; i <= numSteps; i++){
        var ratio = i / numSteps;
        thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
}
function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        value = entry.intersectionRatio;
        if (value >= 0.1) entry.target.classList.add("fadeAnimate");
    });
}

//# sourceMappingURL=index.06b7e553.js.map
