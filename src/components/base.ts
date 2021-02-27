import { locationType } from '../utils/location';

export abstract class Base<T extends HTMLElement, U extends HTMLElement> {
  templateEl: HTMLTemplateElement;
  hostEl: T;
  element: U;

  constructor(
    templateId: string, 
    location: locationType, 
    hostElId: string,
    newElId?: string,
    newElClass?: string
  ) {
    this.templateEl = document.querySelector(`#${templateId}`)! as HTMLTemplateElement;
    this.hostEl = document.querySelector(`#${hostElId}`)! as T;

    const importedNode = document.importNode(this.templateEl.content, true);

    this.element = importedNode.firstElementChild as U;
    if (newElId) {
      this.element.id = newElId;
    }

    if (newElClass) {
      this.element.classList.add(newElClass);
    }

    this.attach(location);
  }

  private attach(location: locationType) {
		this.hostEl.insertAdjacentElement(location, this.element);
	}
}
