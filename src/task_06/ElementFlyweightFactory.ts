import { ElementFlyweight } from './ElementFlyweight';
import { DisplayType, ClosingType } from '../task_05/LightElementNode';

export class ElementFlyweightFactory {
    private flyweights: Map<string, ElementFlyweight> = new Map();
    
    getFlyweight(tagName: string, displayType: DisplayType, closingType: ClosingType): ElementFlyweight {
        const key = `${tagName}_${displayType}_${closingType}`;
        
        if (!this.flyweights.has(key)) {
            this.flyweights.set(key, new ElementFlyweight(tagName, displayType, closingType));
        }
        
        return this.flyweights.get(key)!;
    }
    
    getFlyweightCount(): number {
        return this.flyweights.size;
    }
}