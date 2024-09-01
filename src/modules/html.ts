/**
 * Creates the necessary selectors to define the BEM nomenclature of an HTML component.
 * @param {string} componentName - Base selector name
 * @param {string[]} modifiers - Modifier name list
 */
export const createBemCss = (
  componentName: string,
  modifiers: string[] = []
): string => {
  const bemModifiers: string[] = []
  if (modifiers.length > 0) {
    modifiers.forEach(modifier => {
      bemModifiers.push(`${componentName}--${modifier}`)
    })
  }
  return `${componentName} ${bemModifiers.join(" ")}`.trim()
}