import { Injectable } from '@angular/core';
import { Theme, Shadow } from './theme.class';

@Injectable({
  providedIn: 'root'
})
export class CssWriterService {

  constructor() { }

  writeShadow(shadow: Shadow) {
    return `${shadow.x}px ${shadow.y}px ${shadow.spread}px ${shadow.color}`;
  }

  writeShadowClass() {
    return `.ar-small-shadow {\n  box-shadow: var(--ar-small-shadow);\n}\n` +
      `.ar-shadow {\n  box-shadow: var(--ar-shadow);\n}\n` +
      `.ar-big-shadow {\n  box-shadow: var(--ar-big-shadow);\n}\n`;
  }

  writeColor(prefix, suffix) {
    let classes: string =  `${prefix}primary${suffix} {\n  color: var(--ar-primary);\n}\n`;
    classes += `${prefix}secondary${suffix} {\n  color: var(--ar-secondary);\n}\n`
    for (let i = 1; i <= 7; i++) {
      classes += `${prefix}${i}${suffix} {\n  color: var(--ar-color${i});\n}\n`
    }
    for (let i = 1; i <= 4; i++) {
      classes += `${prefix}gradient${i}${suffix} {\n  background-image: var(--ar-gradient${i});\n` +
      `  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n`;
    }
    classes += `${prefix}sucess${suffix} {\n  color: var(--ar-success);\n}\n`;
    classes += `${prefix}info${suffix} {\n  color: var(--ar-info);\n}\n`;
    classes += `${prefix}danger${suffix} {\n  color: var(--ar-danger);\n}\n`;
    classes += `${prefix}warning${suffix} {\n  color: var(--ar-warning);\n}\n`;
    classes += '\n';
    return classes;
  }

  writeBackgroundColor(prefix, suffix) {
    let classes: string = `${prefix}primary${suffix} {\n  background-color: var(--ar-primary);\n}\n`;
    classes += `${prefix}secondary${suffix} {\n  background-color: var(--ar-secondary);\n}\n`
    for (let i = 1; i <= 7; i++) {
      classes += `${prefix}${i}${suffix} {\n  background-color: var(--ar-color${i});\n}\n`
    }
    for (let i = 1; i <= 4; i++) {
      classes += `${prefix}gradient${i}${suffix} {\n  background-image: var(--ar-gradient${i});\n}\n`
    }
    classes += `${prefix}success${suffix} {\n  background-color: var(--ar-success);\n}\n`
    classes += `${prefix}info${suffix} {\n  background-color: var(--ar-info);\n}\n`
    classes += `${prefix}danger${suffix} {\n  background-color: var(--ar-danger);\n}\n`
    classes += `${prefix}warning${suffix} {\n  background-color: var(--ar-warning);\n}\n`
    classes += '\n';
    return classes;
  }

  writeBorderColor(prefix) {
    let classes: string = `${prefix}primary {\n  border-color: var(--ar-primary);\n}\n`;
    classes += `${prefix}secondary {\n  border-color: var(--ar-secondary);\n}\n`;
    for (let i = 1; i <= 7; i++) {
      classes += `${prefix}${i} {\n  border-color: var(--ar-color${i});\n}\n`;
    }
    for (let i = 1; i <= 4; i++) {
      classes += `${prefix}gradient${i} {\n  border-image: var(--ar-gradient${i}) 10;\n}\n`;
    }
    classes += `${prefix}success {\n  border-color: var(--ar-success);\n}\n`;
    classes += `${prefix}info {\n  border-color: var(--ar-info);\n}\n`;
    classes += `${prefix}danger {\n  border-color: var(--ar-danger);\n}\n`;
    classes += `${prefix}warning {\n  border-color: var(--ar-warning);\n}\n`;
    classes += '\n';
    return classes;
  }

  writeInputColor(prefix) {
    let classes: string = `${prefix}primary {\n --ar-input-color: var(--ar-primary);\n}\n`;
    classes += `${prefix}secondary {\n --ar-input-color: var(--ar-secondary);\n}\n`;
    for (let i = 1; i <= 7; i++) {
      classes += `${prefix}${i} {\n --ar-input-color: var(--ar-color${i});\n}\n`;
    }
    classes += `${prefix}success {\n --ar-input-color: var(--ar-success);\n}\n`;
    classes += `${prefix}info {\n --ar-input-color: var(--ar-info);\n}\n`;
    classes += `${prefix}danger {\n --ar-input-color: var(--ar-danger);\n}\n`;
    classes += `${prefix}warning {\n --ar-input-color: var(--ar-warning);\n}\n`;
    classes += '\n';
    return classes;
  }

  writeCssVariable(theme: Theme): string {
    let variables: string = '';
    variables += `:root {\n  --ar-primary: ${theme.primary};\n  --ar-secondary: ${theme.secondary};\n\n` +
      `  --ar-text-color: ${theme.textColor};\n  --ar-background-color: ${theme.backgroundColor};\n\n` +
      `  --ar-color1: ${theme.color1};\n  --ar-color2: ${theme.color2};\n  --ar-color3: ${theme.color3};\n  --ar-color4: ${theme.color4};\n` +
      `  --ar-color5: ${theme.color5};\n  --ar-color6: ${theme.color6};\n  --ar-color7: ${theme.color7};\n\n` +
      `  --ar-gradient1: linear-gradient(90deg, ${theme.color1} 10%, ${theme.color2} 90%);\n` +
      `  --ar-gradient2: linear-gradient(90deg, ${theme.color1} 10%, ${theme.color2} 90%);\n` +
      `  --ar-gradient3: linear-gradient(90deg, ${theme.color1} 10%, ${theme.color2} 90%);\n` +
      `  --ar-gradient4: linear-gradient(90deg, ${theme.color1} 10%, ${theme.color2} 90%);\n\n` +
      `  --ar-success: ${theme.success};\n  --ar-info: ${theme.info};\n  --ar-danger: ${theme.danger};\n  --ar-warning: ${theme.warning};\n\n` +
      `  --ar-padding: ${theme.padding}px;\n  --ar-border: ${theme.border}px;\n\n  --ar-small-shadow: ${this.writeShadow(theme.smallShadow)};\n` +
      `  --ar-shadow: ${this.writeShadow(theme.shadow)};\n  --ar-big-shadow: ${this.writeShadow(theme.bigShadow)};\n` +
      `}\n\n`;
    return variables;
  }
}
