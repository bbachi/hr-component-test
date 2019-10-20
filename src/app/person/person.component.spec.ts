import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { PersonComponent } from './person.component';
import { AddMrPipe } from '../app.pipe';
import { HighlightDirective } from '../highlight.directive';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PersonComponent,
        AddMrPipe,
        HighlightDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should Have the name capitalized and with designation Mr in person card', () => {
    component.name = 'joe roberts'
    fixture.detectChanges();
    const nameElement: HTMLElement = fixture.nativeElement;
    const name = nameElement.querySelector('.nam');
    expect(name.textContent.trim()).toEqual('Mr Joe Roberts');
  });

  it('should Have the address capitalized in person card', () => {
    const address = '1000 main st houton tx, 70000';
    component.address = address
    fixture.detectChanges();
    const nameElement: HTMLElement = fixture.nativeElement;
    const addressEl = nameElement.querySelector('.addr');
    expect(addressEl.textContent.trim()).toContain(address.toUpperCase());
  });

  it('should have background color red and text color white on mouse enter', () => {

    const inputEl = fixture.debugElement.query(By.css('.well'));
    inputEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('red');
    expect(inputEl.nativeElement.style.color).toBe('white');

  });
});
