import { LightNode } from '../task_05/LightNode';
import { DisplayType, ClosingType } from '../task_05/LightElementNode';
import { ElementFlyweight } from './ElementFlyweight';

export class LightElementNodeFlyweight extends LightNode {
    private cssClasses: string[];
    private children: LightNode[];
    private attributes: Map<string, string>;
    private flyweight: ElementFlyweight;
    
    constructor(flyweight: ElementFlyweight) {
        super();
        this.flyweight = flyweight;
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
        for (const child of this.children) {
            count += child.getChildCount();
        }
        return count;
    }
    
    innerHTML(): string {
        return this.children.map(child => child.render()).join('');
    }
    
    render(): string {
        let result = `<${this.flyweight.tagName}`;
        
        this.attributes.forEach((value, name) => {
            result += ` ${name}="${value}"`;
        });
        
        if (this.cssClasses.length > 0) {
            result += ` class="${this.cssClasses.join(' ')}"`;
        }
        
        if (this.flyweight.closingType === ClosingType.SELF_CLOSING) {
            result += ' />';
            return result;
        } else {
            result += '>';
            
            result += this.innerHTML();
            
            result += `</${this.flyweight.tagName}>`;
            
            return result;
        }
    }
    
    outerHTML(): string {
        return this.render();
    }
}