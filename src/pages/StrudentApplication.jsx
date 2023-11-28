import React, { useEffect } from 'react';

const StudentApplication = () => {
  useEffect(() => {
    const iframe = document.getElementById("JotFormIFrame-233077859919878");
    if (iframe) {
      const src = iframe.src;
      const iframeParams = [];

      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams.push(...window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
      }

      if (src && src.indexOf("?") > -1) {
        iframeParams.push(...src.substr(src.indexOf("?") + 1).split("&"));
        iframe.src = src.substr(0, src.indexOf("?"));
      }

      iframeParams.push("isIframeEmbed=1");
      iframe.src = `${src}?${iframeParams.join('&')}`;
    }

    const handleIFrameMessage = function (e) {
      if (typeof e.data === 'object') {
        return;
      }
      const args = e.data.split(":");
      let iframe;

      if (args.length > 2) {
        iframe = document.getElementById(`JotFormIFrame-${args[args.length - 1]}`);
      } else {
        iframe = document.getElementById("JotFormIFrame");
      }

      if (!iframe) {
        return;
      }

      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          iframe.style.height = args[1] + "px";
          if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
            iframe.style.minHeight = args[1] + "px";
          }
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + "px";
          }
          break;
        case "reloadPage":
          window.location.reload();
          break;
        case "loadScript":
          if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) {
            break;
          }
          let src = args[1];

          if (args.length > 3) {
            src = args[1] + ':' + args[2];
          }

          const script = document.createElement('script');
          script.src = src;
          script.type = 'text/javascript';
          document.body.appendChild(script);
          break;
        case "exitFullscreen":
          if (window.document.exitFullscreen) window.document.exitFullscreen();
          else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
          else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();
          else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
          else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
          break;
      }

      const isJotForm = e.origin.indexOf("jotform") > -1 ? true : false;

      if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
        const urls = {
          docurl: encodeURIComponent(document.URL),
          referrer: encodeURIComponent(document.referrer),
        };
        iframe.contentWindow.postMessage(JSON.stringify({ type: "urls", value: urls }), "*");
      }
    };

    window.isPermitted = function (originUrl, whitelisted_domains) {
      const url = document.createElement('a');
      url.href = originUrl;
      const hostname = url.hostname;
      let result = false;

      if (typeof hostname !== 'undefined') {
        whitelisted_domains.forEach(function (element) {
          if (hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element) {
            result = true;
          }
        });

        return result;
      }
    };

    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }, []);

  return (
    <iframe
      id="JotFormIFrame-233077859919878"
      title="Signet / Approved-Visa - Student Application Form - P103"
      allowTransparency="true"
      allowFullScreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/233077859919878"
      frameBorder="0"
      style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      scrolling="no"
    ></iframe>
  );
}

export default StudentApplication;
