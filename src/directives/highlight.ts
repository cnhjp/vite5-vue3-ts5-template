import hljs from 'highlight.js';
import ClipboardJS from "clipboard";

async function handler(el: HTMLElement, binding: any) {
  if (isDark.value)
    await import('highlight.js/styles/dark.css');
  else
    await import('highlight.js/styles/brown-paper.css');

  const codes = el.querySelectorAll('pre code');
  codes.forEach((code) => {
    if (binding.value) {
      const highlightedCode = hljs.highlight(binding.value, code.textContent!, true);
      code.innerHTML = highlightedCode.value;
    }
    else {
      hljs.highlightBlock(code as HTMLElement);
    }
    code.classList.add('font-mono');
  });
  if (binding.modifiers.code) {
    const existingButtons = el.querySelectorAll('button.copy-button');
    existingButtons.forEach((button) => {
      el.removeChild(button);
    });
    const button = document.createElement("button");
    button.classList.add('copy-button', 'hover:cursor-pointer', 'w-6', 'h-6', 'hover:w-4', 'hover:h-4', 'absolute', 'top-2', 'right-2', 'text-gray-500')
    isDark.value
      ? button.classList.add('i-heroicons-document-duplicate-solid')
      : button.classList.add("i-heroicons-document-duplicate");

    const clipboard = new ClipboardJS(button, {
      text: () => el.textContent!,
    });

    const { t } = useI18n()

    clipboard.on("success", () => {
      window.$message.success(t('message.copySuccess'));
    });

    clipboard.on("error", () => {
      window.$message.error(t('message.copyFail'));
    });

    el.appendChild(button);

    // Add border and border radius
    el.style.border = '1px solid #ccc';
    el.style.borderRadius = '5px';
    el.style.padding = '0';
    el.style.position = 'relative';
  }
}

const highlightDirective = {
  beforeMount(el: HTMLElement, binding: any) {
    handler(el, binding);
  },
  updated(el: HTMLElement, binding: any) {
    handler(el, binding);
  },
};

export const install: CustomModule = (app) => {
  app.directive("highlight", highlightDirective);
};
