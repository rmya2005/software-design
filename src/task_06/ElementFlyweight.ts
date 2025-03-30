import { DisplayType, ClosingType } from '../task_05/LightElementNode';

export class ElementFlyweight {
    constructor(
        public readonly tagName: string,
        public readonly displayType: DisplayType,
        public readonly closingType: ClosingType
    ) {}
}