import { LightNode } from './LightNode';

export enum DisplayType {
    BLOCK = 'block',
    INLINE = 'inline'
}

export enum ClosingType {
    SELF_CLOSING = 'self-closing',
    WITH_CLOSING_TAG = 'with-closing-tag'
}

export class LightElementNode extends LightNode {
    private tagName: string;
    private displayType: DisplayType;
    private closingType: ClosingType;
    private cssClasses: string[];
    private children: LightNode[];
    private attributes: Map<string, string>;
    
    constructor(
        tagName: string, 
        displayType: DisplayType = DisplayType.BLOCK,
        closingType: ClosingType = ClosingType.WITH_CLOSING_TAG
    ) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.cssClasses = [];
        this.children = [];
        this.attributes = new Map<string, string>();
    }
    
    addClass(cssClass: string): void {
        if (!this.cssClasses.includes(cssClass)) {
            this.cssClasses.push(cssClass);
        }
    }
    
    addChild(node: LightNode): void {
        this.children.push(node);
    }
    
    setAttribute(name: string, value: string): void {
        this.attributes.set(name, value);
    }
    
    getChildCount(): number {
        let count = this.children.length;
        // Рекурсивно підрахуємо всіх нащадків
        for (const child of this.children) {
            count += child.getChildCount();
        }
        return count;
    }
    
    innerHTML(): string {
        return this.children.map(child => child.render()).join('');
    }
    
    render(): string {
        // Створюємо відкриваючий тег
        let result = `<${this.tagName}`;
        
        // Додаємо атрибути
        this.attributes.forEach((value, name) => {
            result += ` ${name}="${value}"`;
        });
        
        // Додаємо CSS класи
        if (this.cssClasses.length > 0) {
            result += ` class="${this.cssClasses.join(' ')}"`;
        }
        
        if (this.closingType === ClosingType.SELF_CLOSING) {
            // Для елементів без закриваючого тега
            result += ' />';
            return result;
        } else {
            // Для елементів із закриваючим тегом
            result += '>';
            
            // Додаємо вміст
            result += this.innerHTML();
            
            // Додаємо закриваючий тег
            result += `</${this.tagName}>`;
            
            return result;
        }
    }
    
    outerHTML(): string {
        return this.render();
    }
}