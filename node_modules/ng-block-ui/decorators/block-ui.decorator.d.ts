import { BlockUIDecoratorSettings } from '../models/block-ui-decorator-settings.model';
export declare let blockInstanceGuid: number;
export declare function BlockUI(blockName?: string, settings?: BlockUIDecoratorSettings): (target?: any, propertyKey?: string) => void;
