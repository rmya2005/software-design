import { LightNode } from './LightNode';
import { LightTextNode } from './LightTextNode';
import { LightElementNode, DisplayType, ClosingType } from './LightElementNode';

export class LightHTML {
    static createText(text: string): LightTextNode {
        return new LightTextNode(text);
    }
    
    static createElement(
        tagName: string,
        displayType: DisplayType = DisplayType.BLOCK,
        closingType: ClosingType = ClosingType.WITH_CLOSING_TAG
    ): LightElementNode {
        return new LightElementNode(tagName, displayType, closingType);
    }
}