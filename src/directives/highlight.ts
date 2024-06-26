import hljs from 'highlight.js';
import ClipboardJS from "clipboard";

function join(...paths: string[]): string {
  return paths.join('/').replace(/\/+/g, '/');
}

async function handler(el: HTMLElement, binding: any) {
  const existingStyle = document.getElementById('highlight-style');
  if (existingStyle)
    document.head.removeChild(existingStyle);

  // Dynamically add highlight.js styles
  const link = document.createElement('link');
  link.id = 'highlight-style';
  link.rel = 'stylesheet';
  if (isDark.value)
    link.href = join(import.meta.env.VITE_APP_BASE, '/styles/highlightjs/dark.css');
  else
    link.href = join(import.meta.env.VITE_APP_BASE, '/styles/highlightjs/brown-paper.css');

  document.head.appendChild(link);

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
  mounted(el: HTMLElement, binding: any) {
    handler(el, binding);
  },
  updated(el: HTMLElement, binding: any) {
    handler(el, binding);
  },
};

export const install: CustomModule = (app) => {
  app.directive("highlight", highlightDirective);
};
