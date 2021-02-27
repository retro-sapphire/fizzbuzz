import { locationType } from '../utils/location';
import { Base } from '../components/base';

export class NumberInput extends Base<HTMLDivElement, HTMLLabelElement> {
  constructor(
    templateId: string, 
    location: locationType, 
    hostElId: string
  ) {
    super(templateId, location, hostElId, '', 'form-group');
  }
}
