import './prayer-times.scss'

function PrayerTimes() {
    const iframe = `<div style="width: 50%; margin: auto"><iframe id="iframe" title="prayerWidget" class="widget-m-top"
     style="height: 358px; width: 100%; border-radius: 4px;"
     scrolling="no" src="https://www.islamicfinder.org/prayer-widget/2874545/shafi/6/0/13/13"> </iframe></div>`;
    const iframeData = function () {
        return {
            __html: iframe
        }
    }
    return (
        <div className="prayer-time-custom" dangerouslySetInnerHTML={iframeData()} />
    )

}

export default PrayerTimes