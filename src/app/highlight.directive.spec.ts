import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `<div class="well well-lg mrgwell col-md-3" appHighlight> </div>`
})
class TestAppComponent {
}

describe('HighlightDirective', () => {

  let component: TestAppComponent;
  let fixture: ComponentFixture<TestAppComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [TestAppComponent, HighlightDirective]
    });
    fixture = TestBed.createComponent(TestAppComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('.well'));
  });

  it('hovering over person card', () => {
    inputEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('red');
    expect(inputEl.nativeElement.style.color).toBe('white');

    inputEl.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('');
  });
});
