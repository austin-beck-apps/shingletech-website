/**
 * Owens Corning's official contractor widget loader
 * (documented at owenscorning.com/en-us/roofing/widgets).
 *
 * widget.js scans the DOM once on execution and injects auto-resizing
 * iframes into its mount points (#visualizer, .oc_shingle_view,
 * .oc_warranty, ...). Because Next.js swaps pages client-side, the script
 * must be re-appended after navigation so it re-scans the fresh DOM.
 */
export const OC_WIDGET_SRC = "https://apis.owenscorning.com/client/widget.js";

/**
 * widget.js builds public_widgets URLs without the /en-us/ locale prefix.
 * Those URLs 301-redirect, and the redirect response carries
 * X-Frame-Options: SAMEORIGIN, which Chrome enforces mid-redirect and kills
 * the iframe navigation. The final /en-us/ URLs serve frame-ancestors * —
 * so we rewrite the src to skip the redirect.
 */
function fixWidgetSrc(iframe: HTMLIFrameElement) {
  const src = iframe.getAttribute("src") ?? "";
  if (src.includes("owenscorning.com/public_widgets/")) {
    iframe.src = src.replace(
      "owenscorning.com/public_widgets/",
      "owenscorning.com/en-us/public_widgets/"
    );
  }
}

export interface OcWidgetHandle {
  cleanup: () => void;
}

export function reloadOcWidgets(mounts: (HTMLElement | null)[]): OcWidgetHandle {
  const liveMounts = mounts.filter((m): m is HTMLElement => m !== null);

  // Clear mounts so a re-run can't double-inject iframes
  liveMounts.forEach((mount) => {
    mount.innerHTML = "";
  });
  document
    .querySelectorAll(`script[src="${OC_WIDGET_SRC}"]`)
    .forEach((el) => el.remove());

  const observers = liveMounts.map((mount) => {
    const observer = new MutationObserver(() => {
      mount.querySelectorAll("iframe").forEach(fixWidgetSrc);
    });
    observer.observe(mount, { childList: true, subtree: true });
    return observer;
  });

  const script = document.createElement("script");
  script.src = OC_WIDGET_SRC;
  script.async = true;
  document.body.appendChild(script);

  return {
    cleanup() {
      script.remove();
      observers.forEach((o) => o.disconnect());
    },
  };
}
