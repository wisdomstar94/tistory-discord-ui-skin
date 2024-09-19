function secretVirtualCheckboxClick(element: HTMLElement) {
  const realCheckbox = element.parentElement?.querySelector<HTMLInputElement>('input[data-title="secret-checkbox"]');
  if (realCheckbox === undefined || realCheckbox === null) return;
  realCheckbox.checked = !realCheckbox.checked;
}

(window as any).secretVirtualCheckboxClick = secretVirtualCheckboxClick;
