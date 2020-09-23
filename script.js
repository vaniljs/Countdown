let counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    animateValue(counter, parseInt(counter.dataset.start), parseInt(counter.dataset.end));
})

function animateValue(element, start, end) {
    var  duration = 1000;
    var range = end - start;
    var minTimer = 50;
    var stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        element.innerHTML = value;
        if (value === end) {
            clearInterval(timer);
        }
    }
    var timer = setInterval(run, stepTime);
    run();
}

