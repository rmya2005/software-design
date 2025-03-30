import { LightNode } from '../task_05/LightNode';
import { LightTextNode } from '../task_05/LightTextNode';
import { DisplayType, ClosingType } from '../task_05/LightElementNode';
import { ElementFlyweightFactory } from './ElementFlyweightFactory';
import { LightElementNodeFlyweight } from './LightElementNodeFlyweight';

export class LightHTMLFlyweight {
    private static factory = new ElementFlyweightFactory();
    
    static createText(text: string): LightTextNode {
        return new LightTextNode(text);
    }
    
    static createElement(
        tagName: string,
        displayType: DisplayType = DisplayType.BLOCK,
        closingType: ClosingType = ClosingType.WITH_CLOSING_TAG
    ): LightElementNodeFlyweight {
        const flyweight = this.factory.getFlyweight(tagName, displayType, closingType);
        return new LightElementNodeFlyweight(flyweight);
    }
    
    static getFlyweightCount(): number {
        return this.factory.getFlyweightCount();
    }
}