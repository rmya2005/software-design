import { LightNode } from '../task_05/LightNode';
import { DisplayType } from '../task_05/LightElementNode';
import { LightHTMLFlyweight } from './LightHTMLFlyweight';

export class BookParser {
    parseBookToHTML(bookText: string): LightNode {
        const lines = bookText.split('\n');
        const rootElement = LightHTMLFlyweight.createElement('div');
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (line === '') continue;
            
            let element;
            
            if (i === 0) {
                element = LightHTMLFlyweight.createElement('h1');
                element.addChild(LightHTMLFlyweight.createText(line));
            } else if (line.length < 20) {
                element = LightHTMLFlyweight.createElement('h2');
                element.addChild(LightHTMLFlyweight.createText(line));
            } else if (lines[i].startsWith(' ') || lines[i].startsWith('\t')) {
                element = LightHTMLFlyweight.createElement('blockquote');
                element.addChild(LightHTMLFlyweight.createText(line));
            } else {
                element = LightHTMLFlyweight.createElement('p');
                element.addChild(LightHTMLFlyweight.createText(line));
            }
            
            rootElement.addChild(element);
        }
        
        return rootElement;
    }
}