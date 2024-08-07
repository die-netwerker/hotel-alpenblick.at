let htmlLang = document.documentElement.lang;
if (htmlLang === "de") {
    console.log(htmlLang);
    let format = "d.m.Y";
    console.log(format)
} else {
    let fFormat = "Y-m-d"
}
let date = flatpickr("#main .arrival", {
    locale: htmlLang,
    minDate: "today",
    defaultDate: "today",
    dateFormat: "d.m.Y",
    disableMobile: true,
    monthSelectorType: 'static',
    onChange: function (selectedDates, dateStr, instance) {
        departure.set('minDate', dateStr);
        departure.setDate(selectedDates[0].fp_incr(4));
    }
});
let departure = flatpickr('#main .departure', {
    locale: htmlLang,
    minDate: 'today',
    defaultDate: new Date().fp_incr(1),
    dateFormat: 'd.m.Y',
    monthSelectorType: 'static',
    disableMobile: true
});
var formid = $('form').attr('id');
function adjustValueadults(value) {
    const input = document.getElementById(formid + '-adults');
    input.value = Number(input.value) + value;
};
function adjustValuechildren(value) {
    const input = document.getElementById(formid + '-children');
    input.value = Number(input.value) + value;
};