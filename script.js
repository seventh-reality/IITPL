// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
<SCRIPT LANGUAGE=\"JavaScript\">
    function refresh() {
        var sURL = unescape("https://seventh-reality.github.io/IITPL/");
        window.location.replace(sURL);
    }
    function closeWindow() {
        var isiPad = navigator.userAgent.match(/iPad/i) != null;
        var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
        if (isiPad || isiPhone) {
           setTimeout( \"refresh()\", 10 );
        } else {
           window.close();
        }
    }
</SCRIPT>
