import { setIcon, type ButtonComponent } from "obsidian";

export function showButtonLoading(button: ButtonComponent): () => void {
  const el = button.buttonEl;
  el.addClass("synch-button-loading");
  el.setAttribute("aria-busy", "true");
  const spinner = el.createSpan({ cls: "synch-button-spinner" });
  spinner.setAttribute("aria-hidden", "true");
  setIcon(spinner, "loader-circle");
  return () => {
    spinner.remove();
    el.removeClass("synch-button-loading");
    el.setAttribute("aria-busy", "false");
  };
}
